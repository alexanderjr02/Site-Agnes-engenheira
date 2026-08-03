# New World Engenharia — Landing Page

Landing page de captação para a New World Engenharia (Agnes Vanessa, Engenheira Civil).
Serviços: vistoria de imóvel, vistoria cautelar, inspeção predial, avaliação de imóveis,
regularização e patologia da construção. Atendimento no DF e entorno.

## Arquivos

| Arquivo | Responsabilidade |
| --- | --- |
| `index.html` | Estrutura e conteúdo da página (a foto da Agnes continua embutida em base64) |
| `styles.css` | Toda a estilização (variáveis de cor, tipografia, seções, responsivo) |
| `script.js` | Comportamento (nav ao rolar, menu mobile, FAQ sanfona, animação de entrada) |

Os três ficam na raiz do projeto e se referenciam por caminho relativo — basta manter
os arquivos juntos. Não há build, dependência ou instalação.

## Como publicar no GitHub Pages

1. Suba os arquivos para o repositório (branch `main`, na raiz).
2. No GitHub: **Settings → Pages**.
3. Em *Build and deployment*, escolha **Deploy from a branch**.
4. Selecione a branch `main` e a pasta `/ (root)`, e clique em **Save**.
5. Em cerca de um minuto o site fica no ar em:
   `https://alexanderjr02.github.io/Site-Agnes-engenheira/`

Depois de publicado, atualize no `index.html` as tags que ainda apontam para
`https://SEU-DOMINIO.com.br/` (`canonical`, `og:url`, `og:image` e o `url` do JSON-LD)
com o endereço final.

## Ainda a fazer

- Trocar a foto da Agnes pela versão definitiva.
- Inserir os depoimentos reais de clientes (2 espaços já reservados na seção "Depoimentos").
- Colocar a logo oficial (PNG) no topo e no rodapé, no lugar do ícone atual.
- Confirmar número de CREA para exibir como selo de confiança.

## Contato do negócio

- WhatsApp: (61) 99652-3362
- Instagram: @newworldengenhariainteligente
