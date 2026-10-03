from pathlib import Path
from bs4 import BeautifulSoup
import sys,re
ROOT=Path(__file__).resolve().parents[1]
errors=[]
for p in ROOT.rglob('*.html'):
    s=p.read_text(encoding='utf-8')
    soup=BeautifulSoup(s,'html.parser')
    if p.name=='404.html': continue
    if not soup.title or not soup.title.get_text(strip=True): errors.append(f'{p}: title ausente')
    if not soup.find('meta',attrs={'name':'description'}): errors.append(f'{p}: description ausente')
    if not soup.find('link',rel='canonical'): errors.append(f'{p}: canonical ausente')
    if len(soup.find_all('h1')) != 1: errors.append(f'{p}: esperado 1 H1, encontrou {len(soup.find_all("h1"))}')
    if 'tm21-eta.vercel.app' in s: errors.append(f'{p}: domínio antigo encontrado')
    if re.search(r'SEU[-_ ]?DOMINIO|LOREM IPSUM|\[NOME\]',s,re.I): errors.append(f'{p}: placeholder encontrado')
if errors:
    print('\
'.join(errors)); sys.exit(1)
print('TM21 QA: metadados, H1, domínio e placeholders OK')
