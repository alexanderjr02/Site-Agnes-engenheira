# New World Engenharia — Landing Page

Landing page de captação para a New World Engenharia (Agnes Vanessa, Engenheira Civil).
Serviços: vistoria de imóvel, vistoria cautelar, inspeção predial, avaliação de imóveis,
regularização e patologia da construção. Atendimento no DF e entorno.

## Arquivos

| Arquivo | Responsabilidade |
| --- | --- |
| `index.html` | Estrutura e conteúdo da página |
| `styles.css` | Toda a estilização (variáveis de cor, tipografia, seções, responsivo) |
| `script.js` | Comportamento (nav ao rolar, menu mobile, FAQ sanfona, vídeos, animação de entrada) |
| `assets/agnes.webp` | Retrato da Agnes na seção "Sobre" |
| `assets/agnes-avatar.webp` | Recorte circular do rosto, usado no chip do topo |
| `assets/share-card.jpg` | Imagem 1200x630 que aparece ao colar o link no WhatsApp |
| `assets/ev-01..08.webp` | Fotos de patologia da seção "Evidências", já cortadas em 4:5 |
| `assets/vistoria-01..04.mp4` | Vídeos de bastidores da seção "Como funciona" |
| `assets/poster-01..04.webp` | Primeiro quadro de cada vídeo (o mp4 só baixa no clique) |

Tudo se referencia por caminho relativo — basta manter os arquivos juntos, com a
pasta `assets/` ao lado do `index.html`. Não há build, dependência ou instalação:
abrir o `index.html` no navegador já mostra a página como ela vai ao ar.

## Como publicar no GitHub Pages

1. Suba os arquivos para o repositório (branch `main`, na raiz).
2. No GitHub: **Settings → Pages**.
3. Em *Build and deployment*, escolha **Deploy from a branch**.
4. Selecione a branch `main` e a pasta `/ (root)`, e clique em **Save**.
5. Em cerca de um minuto o site fica no ar em:
   `https://alexanderjr02.github.io/Site-Agnes-engenheira/`

As tags de SEO e compartilhamento (`canonical`, `og:url`, `og:image` e o `url` do
JSON-LD) já apontam para esse endereço. Se um dia o site mudar para domínio próprio,
troque essas quatro no `index.html`.

## Como acrescentar uma evidência nova

Cada card da seção "Evidências" tem uma mira vermelha desenhada por cima da foto,
posicionada pelas variáveis `--mx` e `--my` no próprio `<article>`:

```html
<article class="ev rev" tabindex="0" style="--mx:64%;--my:35%">
```

São a posição horizontal e vertical do defeito dentro da imagem, em porcentagem.
Nas fotos em que a Agnes colou o adesivo vermelho antes de fotografar, a mira é
ajustada para cair em cima do adesivo real. Para incluir uma foto nova:

1. Corte a imagem em 4:5 (por exemplo 880x1100) e salve como `assets/ev-09.webp`.
2. Copie um `<article class="ev rev">` existente e troque a imagem, o `alt`, a
   tag (`EV-09 · ...`), o título e o texto do diagnóstico.
3. Abra a página e acerte `--mx`/`--my` até a mira ficar em cima do defeito.

O texto do diagnóstico é o que dá valor à foto: diga o que aquilo significa e o
que acontece se ninguém olhar. Foto sem leitura técnica é só foto de parede.

## Ainda a fazer

- Inserir os depoimentos reais de clientes (2 espaços já reservados na seção "Depoimentos").
- Colocar a logo oficial (PNG) no topo e no rodapé, no lugar do ícone atual.
- Confirmar número de CREA para exibir como selo de confiança.
- Regravar os vídeos direto do celular, sem passar pelo WhatsApp. Os atuais chegaram
  comprimidos em 464x832 e é o teto de qualidade que dá para tirar deles.
- Guardar por escrito a autorização de uso de imagem dos imóveis fotografados.

## Contato do negócio

- WhatsApp: (61) 99652-3362
- Instagram: @newworldengenhariainteligente
