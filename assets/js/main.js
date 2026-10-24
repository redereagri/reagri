/* REAGRI — montagem das páginas a partir de data.js */
(function () {
  var D = window.REAGRI;
  var G = D.grupo;
  var page = document.body.getAttribute("data-page");
  var $ = function (s) { return document.querySelector(s); };
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var pad = function (n) { return (n < 10 ? "0" : "") + n; };
  var plural = function (n, s, p) { return n + " " + (n === 1 ? s : p); };

  /* ---------- Cabeçalho ---------- */
  var nav = [
    ["index", "index.html", "Início"],
    ["sobre", "sobre.html", "Sobre"],
    ["linhas", "linhas.html", "Linhas"],
    ["equipe", "equipe.html", "Equipe"],
    ["producao", "producao.html", "Produção"],
    ["mapa", "mapa.html", "Mapa"]
  ];
  var header = $("#site-header");
  if (header) {
    header.innerHTML =
      '<a class="skip" href="#conteudo">Pular para o conteúdo</a>' +
      '<div class="masthead">' +
        '<a class="logo" href="index.html"><img src="assets/img/logo.png" alt="REAGRI – Rede de Pesquisas sobre Regiões Agrícolas"></a>' +
        '<button class="menu-btn" aria-expanded="false" aria-controls="nav">Menu</button>' +
        '<nav class="nav" id="nav" aria-label="Principal">' +
          nav.map(function (n) {
            return '<a href="' + n[1] + '"' + (n[0] === page ? ' aria-current="page"' : "") + ">" + n[2] + "</a>";
          }).join("") +
          '<a href="sobre.html#contato">Contato</a>' +
          '<a class="ig" href="' + G.instagram + '" target="_blank" rel="noopener">@reagrigeo</a>' +
        "</nav>" +
      "</div>" +
      '<div class="strap"><span>Grupo de pesquisa certificado pelo CNPq · Geografia</span><span>UECE · Fortaleza · desde ' + G.anoFormacao + "</span></div>";
    var btn = header.querySelector(".menu-btn"), navEl = header.querySelector(".nav");
    btn.addEventListener("click", function () {
      var open = navEl.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---------- Rodapé ---------- */
  var footer = $("#site-footer");
  if (footer) {
    footer.innerHTML =
      '<div class="footer">' +
        '<div><span class="brand">REAGRI</span><br>' + esc(G.unidade) + " · UECE<br>" + esc(G.endereco) + "</div>" +
        "<div>" + G.redes.map(function (r) { return esc(r.nome); }).join("<br>") + "<br>" +
          '<a href="' + G.dgp + '" target="_blank" rel="noopener">Espelho no Diretório de Grupos do CNPq</a> · ' +
          '<a href="' + G.instagram + '" target="_blank" rel="noopener">Instagram @reagrigeo</a></div>' +
      "</div>";
  }

  /* ---------- Blocos reutilizáveis ---------- */
  function indice(el) {
    el.innerHTML = D.linhas.map(function (l, i) {
      return '<li><span class="n">' + pad(i + 1) + '</span><a href="linhas.html#' + l.id + '">' + esc(l.nome) +
        '</a><span class="c" title="pesquisadores · estudantes">' + l.pesq + " · " + l.est + "</span></li>";
    }).join("");
  }
  function card(p) {
    var media = p.img ? '<img src="' + p.img + '" alt="" loading="lazy">' : '<div class="ph"></div>';
    var title = p.link ? '<a href="' + p.link + '" target="_blank" rel="noopener">' + esc(p.titulo) + "</a>" : esc(p.titulo);
    return '<article class="card">' + media +
      '<div class="kicker">' + esc(p.rotulo || p.tipo) + "</div>" +
      "<h3>" + title + "</h3>" +
      "<p>" + esc(p.info) + "</p></article>";
  }

  /* ---------- Páginas ---------- */
  if (page === "index") {
    indice($("#indice"));
    $("#n-linhas").textContent = ["Uma", "Duas", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez", "Onze", "Doze"][D.linhas.length - 1] || D.linhas.length;
    $("#destaques").innerHTML = D.producao.filter(function (p) { return p.destaque; }).slice(0, 3).map(card).join("");
    var amostra = D.pesquisadores.slice(0, 18);
    $("#amostra").innerHTML = amostra.map(function (p) { return "<li>" + esc(p.nome) + "</li>"; }).join("") +
      '<li><a href="equipe.html">+ ' + (D.pesquisadores.length - amostra.length) + " pesquisadores</a></li>";
    $("#lideres-txt").innerHTML = G.lideres.map(function (l) {
      return "<strong>" + esc(l.nome) + "</strong> (" + esc(l.inst) + ")";
    }).join(" e ");
  }

  if (page === "sobre") {
    $("#atividades").innerHTML = G.atividades.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("");
    var rows = [
      ["Situação", G.situacao], ["Ano de formação", G.anoFormacao], ["Área predominante", G.area],
      ["Instituição", G.instituicao], ["Unidade", G.unidade],
      ["Liderança", G.lideres.map(function (l) { return l.nome + " (" + l.inst + ")"; }).join("; ")]
    ];
    $("#ficha").innerHTML = rows.map(function (r) { return "<tr><th scope=\"row\">" + r[0] + "</th><td>" + esc(r[1]) + "</td></tr>"; }).join("");
    $("#redes").innerHTML = G.redes.map(function (r) {
      return '<li><a href="' + r.url + '" target="_blank" rel="noopener">' + esc(r.nome) + "</a></li>";
    }).join("");
    $("#contato-dados").innerHTML =
      "<tr><th scope=\"row\">Endereço</th><td>" + esc(G.endereco) + "</td></tr>" +
      "<tr><th scope=\"row\">Telefone</th><td>" + esc(G.telefone) + "</td></tr>" +
      (G.email ? "<tr><th scope=\"row\">E-mail</th><td><a href=\"mailto:" + G.email + "\">" + esc(G.email) + "</a></td></tr>" : "") +
      "<tr><th scope=\"row\">Instagram</th><td><a href=\"" + G.instagram + "\" target=\"_blank\" rel=\"noopener\">@reagrigeo</a></td></tr>";
  }

  if (page === "linhas") {
    var max = Math.max.apply(null, D.linhas.map(function (l) { return Math.max(l.pesq, l.est); }));
    $("#lista-linhas").innerHTML = D.linhas.map(function (l, i) {
      var w = function (v) { return v ? Math.max(1, Math.round(v / max * 240)) : 0; };
      return '<article class="linha" id="' + l.id + '"><div class="n">' + pad(i + 1) + '</div><div class="body">' +
        "<h2>" + esc(l.nome) + "</h2>" +
        (l.desc ? "<p>" + esc(l.desc) + "</p>" : '<p class="muted">[Descrição da linha a ser enviada pela coordenação]</p>') +
        '<div class="bar"><i style="width:' + w(l.pesq) + 'px"></i>' + plural(l.pesq, "pesquisador", "pesquisadores") + "</div>" +
        '<div class="bar est"><i style="width:' + w(l.est) + 'px"></i>' + plural(l.est, "estudante", "estudantes") + "</div>" +
        "</div></article>";
    }).join("");
  }

  if (page === "equipe") {
    $("#lideres").innerHTML = G.lideres.map(function (l) {
      return '<div class="leader"><div class="kicker">Liderança</div><h3>' + esc(l.nome) + "</h3><p>" + esc(l.inst) +
        (l.lattes ? ' · <a href="' + l.lattes + '" target="_blank" rel="noopener">Lattes</a>' : "") + "</p></div>";
    }).join("");
    var niveis = { Doutorado: 0, Mestrado: 0, "Graduação": 0 };
    D.estudantes.forEach(function (e) { niveis[e.nivel] = (niveis[e.nivel] || 0) + 1; });
    $("#stats").innerHTML =
      "<div>" + D.pesquisadores.length + "<span>pesquisadores</span></div>" +
      "<div>" + D.estudantes.length + "<span>estudantes</span></div>" +
      "<div>" + D.colaboradores.length + "<span>colaboração estrangeira</span></div>" +
      "<div>" + D.egressos.length + "<span>egressos</span></div>";

    var personLi = function (p, sub) {
      return '<li data-nome="' + esc(p.nome.toLowerCase()) + '">' + esc(p.nome) + (sub ? "<small>" + esc(sub) + "</small>" : "") + "</li>";
    };
    $("#pesquisadores").innerHTML = D.pesquisadores.map(function (p) {
      return personLi(p, [p.inst, p.tit].filter(Boolean).join(" · "));
    }).join("");
    $("#estudantes").innerHTML = ["Doutorado", "Mestrado", "Graduação"].map(function (n) {
      var lista = D.estudantes.filter(function (e) { return e.nivel === n; });
      if (!lista.length) return "";
      return '<h3 class="kicker" style="margin:28px 0 10px">' + n + " · " + lista.length + '</h3><ul class="names">' +
        lista.map(function (e) { return personLi(e); }).join("") + "</ul>";
    }).join("");
    $("#colaboradores").innerHTML = D.colaboradores.map(function (c) { return personLi(c, c.pais); }).join("");
    $("#egressos").innerHTML = D.egressos.map(function (c) { return personLi(c, c.periodo); }).join("");

    $("#busca").addEventListener("input", function (ev) {
      var q = ev.target.value.trim().toLowerCase();
      document.querySelectorAll("[data-nome]").forEach(function (li) {
        li.style.display = !q || li.getAttribute("data-nome").indexOf(q) > -1 ? "" : "none";
      });
    });
  }

  if (page === "producao") {
    var tipos = ["Tudo"];
    D.producao.forEach(function (p) { if (tipos.indexOf(p.tipo) < 0) tipos.push(p.tipo); });
    var lista = $("#lista-producao"), filtros = $("#filtros");
    var render = function (t) {
      var itens = D.producao.filter(function (p) { return t === "Tudo" || p.tipo === t; });
      lista.innerHTML = itens.length ? itens.map(card).join("") : '<p class="muted">Nenhum item nesta categoria.</p>';
      filtros.querySelectorAll("button").forEach(function (b) { b.setAttribute("aria-pressed", b.textContent === t ? "true" : "false"); });
    };
    filtros.innerHTML = tipos.map(function (t) { return '<button type="button" aria-pressed="false">' + t + "</button>"; }).join("");
    filtros.addEventListener("click", function (ev) { if (ev.target.tagName === "BUTTON") render(ev.target.textContent); });
    render("Tudo");
  }

  if (page === "mapa" && window.L) {
    var map = L.map("mapa", { scrollWheelZoom: false });
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
      maxZoom: 18
    }).addTo(map);
    var markers = D.instituicoes.map(function (i) {
      var m = L.circleMarker([i.lat, i.lon], {
        radius: i.sede ? 11 : 8, color: "#2C3F14", weight: 2,
        fillColor: i.sede ? "#A0BE3E" : "#4B6B20", fillOpacity: 1
      }).addTo(map).bindPopup("<strong>" + esc(i.sigla) + "</strong><br>" + esc(i.nome) + "<br>" + esc(i.cidade) + (i.sede ? "<br><em>Sede do grupo</em>" : ""));
      return m;
    });
    map.fitBounds(L.featureGroup(markers).getBounds().pad(0.3));
    $("#lista-inst").innerHTML = D.instituicoes.map(function (i, k) {
      return '<li><button type="button" data-k="' + k + '">' + esc(i.sigla) + (i.sede ? " · sede" : "") + "</button><small>" + esc(i.nome) + " · " + esc(i.cidade) + "</small></li>";
    }).join("");
    $("#lista-inst").addEventListener("click", function (ev) {
      var k = ev.target.getAttribute("data-k");
      if (k == null) return;
      map.setView(markers[k].getLatLng(), 12);
      markers[k].openPopup();
    });
  }
})();
