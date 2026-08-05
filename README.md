# New World Engenharia — Landing Page

Landing page de captação para a New World Engenharia (Agnes Vanessa, Engenheira Civil).
Serviços: vistoria de imóvel, vistoria cautelar, inspeção predial, avaliação de imóveis,
regularização e patologia da construção. Atendimento no DF e entorno.

## Arquivos

| Arquivo | Responsabilidade |
| --- | --- |
| `index.html` | Estrutura e conteúdo da página |
| `privacidade.html` | Política de privacidade, linkada no rodapé |
| `robots.txt` | Libera o rastreamento e aponta o sitemap |
| `sitemap.xml` | Lista as páginas para o Google. Atualize a data ao publicar mudanças |
| `styles.css` | Toda a estilização (variáveis de cor, tipografia, seções, responsivo) |
| `script.js` | Comportamento (nav ao rolar, menu mobile, FAQ sanfona, vídeos, animação de entrada) |
| `assets/logo-mark.webp` | Símbolo da logo em dourado, usado no topo e no rodapé |
| `assets/favicon.png` | Ícone da aba do navegador |
| `assets/apple-touch-icon.png` | Ícone de atalho na tela inicial do iPhone |
| `assets/logo-original-*.png` | Arquivos de marca originais, não usados pela página |
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

- Confirmar com os três clientes que eles autorizam o nome no site. Os depoimentos
  chegaram por WhatsApp, que é conversa privada; publicar o nome é outra coisa.
- Os prints dos depoimentos ficam fora do repositório de propósito: têm foto de
  perfil e nome de terceiros, e repositório público significa imagem pública.
  Guarde os arquivos como comprovação de que os textos são reais.
- Dois depoimentos citam serviços que a grade não vende: projeto arquitetônico e
  assessoria para alvará. Vale decidir se entram como serviço.
- Conferir com a Agnes se o CREA-DF 35749/D está correto. O número veio da política de
  privacidade que ela publicou e hoje aparece na faixa de credenciais, no "Sobre",
  no rodapé, no card de compartilhamento e nos dados estruturados.
- A política de privacidade foi transposta do Notion dela para `privacidade.html`.
  Se ela editar o original, o site não atualiza sozinho.
- Pedir o arquivo vetorial da logo (.ai, .eps ou .svg). O símbolo em uso hoje foi
  recortado do PNG e recolorido; com o vetor ele fica perfeito em qualquer tamanho.

## O que só a Agnes pode fazer (e vale mais que o site)

O trabalho de SEO da página está feito, mas ele sozinho não coloca ninguém em
primeiro lugar. Na ordem de impacto:

1. **Criar o Perfil da Empresa no Google** (antigo Google Meu Negócio). É de graça
   e é o que aparece no bloco do mapa, acima dos resultados normais, em buscas do
   tipo "engenheiro para vistoria perto de mim". Sem isso, o site disputa só a
   parte de baixo da página de resultados.
2. **Pedir avaliação no Google a cada cliente atendido.** Avaliação empurra o
   perfil para cima no mapa e convence quem lê, as duas coisas ao mesmo tempo.
3. **Cadastrar o site no Google Search Console** e enviar o `sitemap.xml`. É o que
   avisa o Google que a página existe, em vez de esperar ele descobrir sozinho.
- Regravar os vídeos direto do celular, sem passar pelo WhatsApp. Os atuais chegaram
  comprimidos em 464x832 e é o teto de qualidade que dá para tirar deles.
- Os quatro vídeos atuais não têm faixa de áudio nenhuma (verificado nos arquivos:
  zero trilha de som, zero codec de áudio). Por isso não existe botão de som na
  página. Se chegarem versões com áudio, dá para reativar: um botão dentro de
  `.vid` que alterne `video.muted` e apareça só quando o vídeo estiver tocando.
- Guardar por escrito a autorização de uso de imagem dos imóveis fotografados.

## Contato do negócio

- WhatsApp: (61) 99652-3362
- Instagram: @newworldengenhariainteligente
