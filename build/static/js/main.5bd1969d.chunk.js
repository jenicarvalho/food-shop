(this["webpackJsonpfood-shop"]=this["webpackJsonpfood-shop"]||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c.n(s),i=c(14),r=c.n(i),o=(c(20),c(21),c(3)),j=c(4),l=c.n(j),d=function(){var e=Object(s.useState)(),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(n.jsxs)("div",{className:"food-beer-list food-shop",children:[Object(n.jsx)("h1",{children:"Tipos de Cerveja"}),Object(n.jsx)("button",{onClick:function(){l.a.get("https://api.punkapi.com/v2/beers/?per_page=8").then((function(e){return a(e.data)}))},children:"Buscar Cerveja"}),void 0!==c&&Object(n.jsx)("div",{className:"beers-list",children:c.map((function(e){return Object(n.jsxs)("div",{className:"beer",children:[Object(n.jsx)("img",{src:e.image_url,alt:e.name}),Object(n.jsx)("h3",{children:e.name}),Object(n.jsx)("span",{children:e.tagline}),Object(n.jsx)("small",{children:e.description})]},e.id)}))})]})},u=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)([]),r=Object(o.a)(i,2),j=r[0],d=r[1],u=Object(s.useState)(""),b=Object(o.a)(u,2),h=b[0],p=b[1],O=Object(s.useState)(""),f=Object(o.a)(O,2),m=f[0],g=f[1];return Object(s.useEffect)((function(){l.a.get("https://www.themealdb.com/api/json/v1/1/categories.php").then((function(e){return d(e.data.categories)}))}),[]),Object(s.useEffect)((function(){""!==h&&l.a.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=".concat(h)).then((function(e){return a(e.data.meals)}))}),[h]),Object(s.useEffect)((function(){""!==m&&l.a.get("https://www.themealdb.com/api/json/v1/1/search.php?s=".concat(m)).then((function(e){return a(e.data.meals)}))}),[m]),Object(n.jsxs)("div",{className:"food-beer-list food-shop",children:[Object(n.jsx)("h1",{children:"Tipos de pratos"}),Object(n.jsxs)("p",{children:["Selecione uma categoria ou digite a comida (em ingl\xeas):",Object(n.jsx)("input",{type:"text",placeholder:"Digite a comida...",onChange:function(e){return g(e.target.value)}})]}),Object(n.jsx)("ul",{children:null!==j&&j.map((function(e){return Object(n.jsx)("li",{onClick:function(){return p(e.strCategory)},children:e.strCategory},e.idCategory)}))}),null!==h&&Object(n.jsxs)("h2",{children:["Tipo selecionado: ",Object(n.jsx)("strong",{children:h})]}),Object(n.jsx)("div",{className:"food-container",children:null!==c&&c.map((function(e){return Object(n.jsxs)("div",{className:"food-item",children:[Object(n.jsx)("img",{src:e.strMealThumb}),Object(n.jsx)("p",{children:e.strMeal})]},e.idMeal)}))})]})};var b=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(u,{}),Object(n.jsx)(d,{})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root")),h()}},[[40,1,2]]]);
//# sourceMappingURL=main.5bd1969d.chunk.js.map