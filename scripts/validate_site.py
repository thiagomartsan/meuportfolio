from pathlib import Path
from bs4 import BeautifulSoup
import sys,re

ROOT = Path(__file__).resolve().parents[1]
GA_ID = 'G-1WBRRW7W12'
errors = []

for p in ROOT.rglob('*.html'):
    s = p.read_text(encoding='utf-8')
    soup = BeautifulSoup(s, 'html.parser')

    # Analytics must also be present on the 404 so broken routes can be diagnosed.
    if f'googletagmanager.com/gtag/js?id={GA_ID}' not in s:
        errors.append(f'{p}: Google tag ausente')
    if f"gtag('config', '{GA_ID}')" not in s:
        errors.append(f'{p}: configuração GA4 ausente')
    if '/js/analytics.js' not in s:
        errors.append(f'{p}: analytics.js ausente')

    if p.name == '404.html':
        continue

    if not soup.title or not soup.title.get_text(strip=True):
        errors.append(f'{p}: title ausente')
    if not soup.find('meta', attrs={'name':'description'}):
        errors.append(f'{p}: description ausente')
    if not soup.find('link', rel='canonical'):
        errors.append(f'{p}: canonical ausente')
    if len(soup.find_all('h1')) != 1:
        errors.append(f'{p}: esperado 1 H1, encontrou {len(soup.find_all("h1"))}')
    if 'tm21-eta.vercel.app' in s:
        errors.append(f'{p}: domínio antigo encontrado')
    if re.search(r'SEU[-_ ]?DOMINIO|LOREM IPSUM|\[NOME\]', s, re.I):
        errors.append(f'{p}: placeholder encontrado')

analytics_js = (ROOT / 'js' / 'analytics.js').read_text(encoding='utf-8')
for event in ['click_whatsapp', 'click_email', 'click_linkedin', 'view_project', 'generate_lead', 'form_submit_success', 'form_submit_error', 'page_not_found']:
    if event not in analytics_js:
        errors.append(f'analytics.js: evento {event} ausente')

if errors:
    print('\n'.join(errors))
    sys.exit(1)

print('TM21 QA: SEO, domínio, GA4 e eventos principais OK')
