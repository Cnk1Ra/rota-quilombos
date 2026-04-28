# Rota dos Quilombos — Mockup Visual

Mockup de alta fidelidade para apresentação ao cliente Luciana Priscila ("Lupri") da Nzinga Turismo. Demonstra a identidade visual e arquitetura de informação proposta para o site institucional da Rota dos Quilombos do Médio Jequitinhonha.

> **Importante:** este é um mockup, não o produto final. Não tem backend, formulários não funcionam, links internos entre comunidades apontam para placeholders.

## Como visualizar

```bash
cd rota-quilombos-mockup
python3 -m http.server 8000
```

Abra http://localhost:8000 no navegador. Ou simplesmente dois cliques no `index.html`.

## Estrutura

```
rota-quilombos-mockup/
├── index.html                       # Home — peça principal
├── comunidade-roca-grande.html      # Página de comunidade (exemplo)
├── roteiros.html                    # Catálogo dos 10 roteiros
├── assets/
│   ├── css/style.css                # Design system + componentes
│   ├── js/main.js                   # Animações + interações
│   └── img/                         # 10 imagens geradas via Gemini
└── README.md
```

## Páginas construídas

### `index.html` — Home (9 seções)
1. **Header fixo** com transparente→sólido no scroll
2. **Hero** full-screen com imagem do cerrado, título tipográfico em 3 linhas
3. **Manifesto** com revelação palavra-por-palavra ao entrar no viewport
4. **Grid das 12 comunidades** em 4 colunas, cards escuros com hover dourado
5. **Festa do Rosário** — destaque de patrimônio com adinkra rotacionando
6. **10 roteiros** em carousel horizontal
7. **Para Quem** — 3 colunas (viajante, escolas, empresas)
8. **Saberes** — 3 cards de blog
9. **Imprensa** + **CTA Final** + **Footer** com newsletter e selos

### `comunidade-roca-grande.html`
Hero + história + mestres (silhuetas placeholder) + 4 experiências + logística + CTA.

### `roteiros.html`
Filtros pill + grid 3 colunas com os 10 roteiros completos.

## Design System

### Paleta
- Preto profundo `#0E0E0E`, terracota `#B05D3E`, dourado fosco `#C8A85A`, verde-folha `#5C7A3D`, branco-osso `#F4EFE6`

### Tipografia
- **Cormorant Garamond** (serif, títulos e itálicos)
- **Inter** (sans, corpo)

### Princípios visuais aplicados
- Sankofa — itálico em terracota/dourado para palavras de destaque
- Padrões adinkra rotacionando lentamente em fundos
- Sem retas duras: bordas arredondadas suaves, gradientes orgânicos
- Animações ease-out 600-800ms, stagger 80ms

## Imagens geradas (via Gemini 2.5 Flash Image)

| Arquivo | Uso |
|---|---|
| `hero-cerrado-jequitinhonha.png` | Hero principal |
| `tear-algodao.png` | Manifesto + cards |
| `cestaria-palha-milho.png` | Cards comunidades |
| `ceramica-barro.png` | Card Moça Santa |
| `igreja-barroca.png` | Card Caititu + Festa do Rosário |
| `quitandas.png` | Saberes + cards |
| `estrada-terra-vermelha.png` | Page hero roteiros + CTA final |
| `aldeia-quilombola.png` | Cards + comunidade |
| `padrao-adinkra.png` | Decorativo (Festa, CTA) |
| `tambor-congado.png` | Cards congado/marujada |

**Política aplicada:** zero pessoas reais geradas por IA. Para fotos de mestres/artesãos, usei silhueta artística com legenda "Foto: acervo a confirmar" — Lupri preencherá com banco real.

## Próximos passos (após aprovação)

1. **Substituir placeholders por fotos reais** das comunidades (acervo Lori Figueiró, Cesar Tropia, Hélio Dias)
2. **Atualizar tabela de preços** (a do mockup é estimativa, não a real)
3. **Confirmar nomes dos roteiros** com Lupri (os do mockup são genéricos)
4. **Definir e implementar versão EN** (botão já está visível, mas inativo)
5. **Migrar para Next.js + Supabase** seguindo proposta técnica do dossiê
6. **Conectar formulário de cotação ao WhatsApp Business API**
7. **Cadastro institucional:** Cadastur, Belotur, Guia do Afroturismo MTur
8. **Materiais para stand MTM 2027** com QR codes apontando para o site

## Notas técnicas

- **Performance:** lazy loading em todas as imagens; CSS sem framework (~25kb); JS vanilla (~3kb)
- **Acessibilidade:** HTML semântico, alt text descritivo, foco visível, contraste WCAG AA
- **Responsivo:** breakpoints em 767px e 1023px, mobile menu funcional
- **SEO:** meta tags, Open Graph, JSON-LD TouristAttraction

---

Construído com Claude Code · Mockup gerado em 28/04/2026
