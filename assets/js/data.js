/* =========================================================
   REAGRI — DADOS DO SITE
   Edite apenas este arquivo para atualizar o conteúdo.
   Fonte inicial: espelho do grupo no DGP/CNPq e Instagram @reagrigeo.
   Itens marcados com [confirmar] precisam de verificação.
   ========================================================= */
window.REAGRI = {

  grupo: {
    sigla: "REAGRI",
    nome: "Rede de Pesquisas sobre Regiões Agrícolas",
    situacao: "Certificado pelo CNPq",
    anoFormacao: 2012,
    area: "Ciências Humanas · Geografia",
    instituicao: "Universidade Estadual do Ceará – UECE",
    unidade: "Centro de Ciências e Tecnologia",
    endereco: "Av. Dr. Silas Munguba, 1700 · Campus do Itaperi · Fortaleza – CE · 60714-903",
    telefone: "(85) 99634-8167",
    email: "", // [confirmar] e-mail de contato do grupo
    instagram: "https://www.instagram.com/reagrigeo/",
    dgp: "http://dgp.cnpq.br/dgp/espelhogrupo/", // [confirmar] colar o endereço completo do espelho
    lideres: [
      { nome: "Denise de Souza Elias", inst: "UECE", lattes: "" },
      { nome: "Mirlei Fachini Vicente Pereira", inst: "UFU", lattes: "" }
    ],
    apresentacao: "A REAGRI reúne um conjunto de pesquisadores de diferentes instituições de ensino superior do país e também da França que possuem pesquisas com objetivos convergentes.",
    atividades: [
      "Publicações conjuntas",
      "Disciplina coletiva na pós-graduação",
      "Coordenação de grupos de trabalho em reuniões científicas nacionais e internacionais",
      "Trabalhos de campo coletivos",
      "Produção de conhecimento a partir das pesquisas realizadas",
      "Proposição de projetos em editais de agências de fomento"
    ],
    redes: [
      { nome: "Rede Nacional do INCT Observatório das Metrópoles", url: "https://www.observatoriodasmetropoles.net.br/" }
    ]
  },

  /* pesq = nº de pesquisadores; est = nº de estudantes (DGP) */
  linhas: [
    { id: "globalizacao", nome: "Globalização e agricultura", pesq: 23, est: 20, desc: "" },
    { id: "agroenergia", nome: "Espaço e agroenergia", pesq: 5, est: 14, desc: "" },
    { id: "fundiaria", nome: "Uso do território e questão fundiária", pesq: 3, est: 10, desc: "" },
    { id: "urbanizacao", nome: "Agronegócio, urbanização e reestruturação urbano-regional", pesq: 3, est: 5, desc: "" },
    { id: "agroalimentares", nome: "Redes agroalimentares, comercialização e relação campo-cidade", pesq: 2, est: 4, desc: "" },
    { id: "psicosfera", nome: "Agronegócio, política, discurso e psicosfera", pesq: 5, est: 1, desc: "" },
    { id: "mercosul", nome: "Agriculturas empresariais no Mercosul", pesq: 4, est: 1, desc: "" },
    { id: "digitalizacao", nome: "Digitalização, agronegócio e usos do território", pesq: 3, est: 0, desc: "" },
    { id: "alimentos", nome: "Produção e distribuição de alimentos nos espaços metropolitanos", pesq: 1, est: 0, desc: "" }
  ],

  /* inst e lattes podem ser preenchidos depois */
  pesquisadores: [
    { nome: "Alexandre Eduardo Santos", tit: "Doutorado" },
    { nome: "Ana Carolina Torelli Marquezini Faccin", tit: "Doutorado" },
    { nome: "Cássio Arruda Boechat", tit: "Doutorado" },
    { nome: "Daniel Macedo Lopes Vasques Monteiro", tit: "Doutorado" },
    { nome: "Denise de Souza Elias", tit: "Doutorado", inst: "UECE" },
    { nome: "Dimas Moraes Peixinho", tit: "Doutorado" },
    { nome: "Eve Anne Buhler", tit: "Doutorado" },
    { nome: "Fernando Campos Mesquita", tit: "Doutorado" },
    { nome: "Iara Rafaela Gomes", tit: "Doutorado" },
    { nome: "Jean Felipe Dourado Pirola", tit: "Mestrado" },
    { nome: "José Raimundo Sousa Ribeiro Junior", tit: "Doutorado" },
    { nome: "Júlia Adão Bernardes", tit: "Doutorado" },
    { nome: "Juscelino Eudâmidas Bezerra", tit: "Doutorado" },
    { nome: "Lais Ribeiro Silva", tit: "Doutorado" },
    { nome: "Marcelo Ramalho Agner", tit: "Doutorado" },
    { nome: "Marina Castro de Almeida", tit: "Doutorado" },
    { nome: "Markelly Fonseca de Araújo", tit: "Doutorado" },
    { nome: "Marluce Silva Sousa", tit: "Doutorado" },
    { nome: "Mateus de Almeida Prado Sampaio", tit: "Doutorado" },
    { nome: "Matheus Eduardo Souza Teixeira", tit: "Doutorado" },
    { nome: "Mirlei Fachini Vicente Pereira", tit: "Doutorado", inst: "UFU" },
    { nome: "Nivea Muniz Vieira", tit: "Doutorado" },
    { nome: "Ricardo Abid Castillo", tit: "Doutorado" },
    { nome: "Roberta Carvalho Arruzzo", tit: "Doutorado" },
    { nome: "Samuel Frederico", tit: "Doutorado" },
    { nome: "Vicente Eudes Lemos Alves", tit: "Doutorado" },
    { nome: "William Ferreira da Silva", tit: "Doutorado" }
  ],

  /* nivel: Doutorado | Mestrado | Graduação */
  estudantes: [
    { nome: "Andrea Restrepo Ramírez", nivel: "Doutorado" },
    { nome: "Arthur Bernard de Souza Moraes", nivel: "Mestrado" },
    { nome: "Bruno Carlos da Cruz Hayata", nivel: "Doutorado" },
    { nome: "Cintia Lima Gonzaga", nivel: "Doutorado" },
    { nome: "Emanoel Anésio Andrade Ferreira", nivel: "Doutorado" },
    { nome: "Emerson Manoel dos Santos Silva", nivel: "Graduação" },
    { nome: "Felipe Rodrigues Leitão", nivel: "Doutorado" },
    { nome: "Hemily Sued Alves Costa", nivel: "Doutorado" },
    { nome: "Hudson Nascimento de Sousa Filho", nivel: "Doutorado" },
    { nome: "Hugo Alexandre da Silva Rodrigues", nivel: "Graduação" },
    { nome: "Humberto Miranda de Carvalho", nivel: "Mestrado" },
    { nome: "Hyago Ernane Gonçalves Squiave", nivel: "Doutorado" },
    { nome: "Ione Candido da Silva", nivel: "Doutorado" },
    { nome: "Isaias Victor Ives da Silva", nivel: "Doutorado" },
    { nome: "João Vitor Cavallari D'oro Carneiro", nivel: "Graduação" },
    { nome: "John Wolter Oliveira Silva", nivel: "Doutorado" },
    { nome: "Júlia Campos Izeckssohn", nivel: "Mestrado" },
    { nome: "Juliana Abadia do Prado Soares", nivel: "Doutorado" },
    { nome: "Lais Benevenuto de Azevedo", nivel: "Doutorado" },
    { nome: "Leon Martins Carriconde Azevedo", nivel: "Mestrado" },
    { nome: "Lucas Fukami Bittencourt", nivel: "Graduação" },
    { nome: "Luciano de Godoi Gaspar", nivel: "Graduação" },
    { nome: "Marcos Eduardo Arantes da Silva", nivel: "Mestrado" },
    { nome: "Marggie Vanessa Serna Felipe", nivel: "Doutorado" },
    { nome: "Marília Raiane Rodrigues Silva", nivel: "Doutorado" },
    { nome: "Mateus de Almeida Barcelos", nivel: "Graduação" },
    { nome: "Miguel Guedes Argenta da Silva", nivel: "Graduação" },
    { nome: "Naiane Martins da Silva", nivel: "Doutorado" },
    { nome: "Pedro Bordinhão dos Santos Barbosa", nivel: "Mestrado" },
    { nome: "Pedro Ramos Maciel Ribeiro", nivel: "Mestrado" },
    { nome: "Rafael Barsotti de Oliveira Castro Torres", nivel: "Doutorado" },
    { nome: "Raquel Silva dos Anjos", nivel: "Doutorado" },
    { nome: "Rebeca Brasil Fonseca Vieira", nivel: "Doutorado" },
    { nome: "Sabrina Carlindo Silva", nivel: "Doutorado" },
    { nome: "Simone dos Santos Sodré da Silva", nivel: "Doutorado" },
    { nome: "Thalita Feliciano do Nascimento Silva", nivel: "Graduação" },
    { nome: "Thiago Gomes Monteiro", nivel: "Graduação" }
  ],

  colaboradores: [
    { nome: "Martine Guibert", pais: "França" }
  ],

  egressos: [
    { nome: "Eduardo Alexandre Santos", periodo: "2025" },
    { nome: "Luis Renato Bezerra Pequeno", periodo: "2025" }
  ],

  /* tipo: Livro | Artigo | Capítulo | Tese | Dissertação | Evento | Notícia
     destaque: true -> aparece na página inicial (os 3 primeiros) */
  producao: [
    {
      tipo: "Livro", destaque: true, ano: "",
      rotulo: "Livro · Finalista Jabuti Acadêmico",
      titulo: "A produção da fábula do agronegócio no Brasil: novas e velhas faces da dependência",
      info: "Denise Elias · Letra Capital",
      img: "assets/img/jabuti.jpg", link: ""
    },
    {
      tipo: "Evento", destaque: true, ano: "2026",
      rotulo: "Seminário internacional",
      titulo: "Territórios em disputa: agronegócio, regulação e lógicas de regionalização",
      info: "UFRJ · 24 a 28 de agosto de 2026",
      img: "assets/img/seminario.jpg", link: ""
    },
    {
      tipo: "Evento", destaque: true, ano: "",
      rotulo: "Grupo de trabalho",
      titulo: "GT 02 no XIX SIMPURB: agronegócio globalizado, urbanização e reestruturação urbano-regional e das cidades",
      info: "20 a 25 de março · Instituto de Geociências [confirmar ano e local]",
      img: "assets/img/simpurb.jpg", link: ""
    },
    {
      tipo: "Evento", destaque: false, ano: "2026",
      rotulo: "Encontro da rede",
      titulo: "XI Encontro da REAGRI",
      info: "Rio de Janeiro · agosto de 2026",
      img: "assets/img/encontro.jpg", link: ""
    }
  ],

  /* Pontos do mapa. Coordenadas em graus decimais (WGS84).
     Acrescente as instituições de cada pesquisador. */
  instituicoes: [
    { sigla: "UECE", nome: "Universidade Estadual do Ceará", cidade: "Fortaleza – CE", lat: -3.7905, lon: -38.5536, sede: true },
    { sigla: "UFU", nome: "Universidade Federal de Uberlândia", cidade: "Uberlândia – MG", lat: -18.9186, lon: -48.2591 },
    { sigla: "Unicamp", nome: "Universidade Estadual de Campinas [confirmar]", cidade: "Campinas – SP", lat: -22.8184, lon: -47.0647 },
    { sigla: "UFRJ", nome: "Universidade Federal do Rio de Janeiro [confirmar vínculo]", cidade: "Rio de Janeiro – RJ", lat: -22.8610, lon: -43.2290 }
  ]
};
