# Site da REAGRI – Rede de Pesquisas sobre Regiões Agrícolas

Site estático (HTML + CSS + JavaScript) pronto para o GitHub Pages.

## Estrutura

```
index.html      Início
sobre.html      Sobre a rede, identificação e contato
linhas.html     Linhas de pesquisa
equipe.html     Pesquisadores, estudantes, colaboração estrangeira e egressos (com busca)
producao.html   Produção e agenda (com filtro por tipo)
mapa.html       Mapa web (Leaflet) das instituições
assets/js/data.js   ← TODO o conteúdo editável fica aqui
assets/js/main.js   Monta as páginas a partir de data.js
assets/css/style.css
assets/img/     Logo e imagens
```

## Como atualizar o conteúdo

Abra `assets/js/data.js` e edite as listas (linhas, pesquisadores, estudantes,
produção, instituições do mapa). Não é preciso mexer no HTML.

- **Nova publicação ou evento:** acrescente um item em `producao`. Com `destaque: true`,
  ele aparece na página inicial (os 3 primeiros destaques).
- **Imagens:** coloque o arquivo em `assets/img/` e aponte no campo `img`.
- **Novo ponto no mapa:** acrescente um item em `instituicoes` com `lat` e `lon`.
- **Descrição de cada linha:** preencha o campo `desc`.
- Itens com **[confirmar]** precisam ser conferidos.

## Publicar no GitHub Pages

1. Crie um repositório (por exemplo, `reagri.github.io` numa conta/organização `reagri`,
   ou `site-reagri` na sua conta).
2. Envie todos os arquivos desta pasta para a raiz do repositório (inclusive o `.nojekyll`).
3. Em **Settings → Pages**, escolha *Deploy from a branch*, branch `main`, pasta `/ (root)`.
4. Em alguns minutos o site fica no endereço mostrado nessa mesma tela.

## Pendências

- Logo em alta resolução (PNG transparente ou SVG) para substituir `assets/img/logo.png`.
- Fotos e artes originais dos posts (as atuais foram recortadas de capturas de tela).
- E-mail de contato e link completo do espelho no DGP (`data.js → grupo`).
- Instituição de cada pesquisador e respectivas coordenadas para o mapa.
- Ano e local do XIX SIMPURB.
- Conferir a grafia dos nomes (transcritos do espelho do DGP).
