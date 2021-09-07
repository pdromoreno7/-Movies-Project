(this["webpackJsonpmovies-project"]=this["webpackJsonpmovies-project"]||[]).push([[0],{11:function(e,t,n){e.exports={detailsContainer:"MovieDetails_detailsContainer__2Zpik",col:"MovieDetails_col__1ZNus",movieImage:"MovieDetails_movieImage__1ELh8",movieDetails:"MovieDetails_movieDetails__3CUFM"}},21:function(e,t,n){e.exports={movieCard:"MovieCard_movieCard__FcqIS",movieImage:"MovieCard_movieImage__1LMkz"}},24:function(e,t,n){e.exports={title:"App_title__-GfWs"}},29:function(e,t,n){e.exports={moviesGrid:"MoviesGrid_moviesGrid__7oR3S"}},35:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var i,c=n(1),s=n.n(c),a=n(23),r=n.n(a),o=(n(35),n(24)),j=n.n(o),h=n(10),l=n(3),b=n(8),u=n(15),d=n(28),m=n(16),p=n(2),x=m.a.div(i||(i=Object(u.a)(["\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .spinning {\n    animation: spinner 1s linear infinite;\n  }\n\n  @keyframes spinner {\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"])));function v(){return Object(p.jsx)(x,{children:Object(p.jsx)(d.a,{size:60,className:"spinning"})})}function O(e){return fetch("https://api.themoviedb.org/3"+e,{headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs","Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()}))}var f=n(11),_=n.n(f);function g(){var e=Object(l.h)().movieId,t=Object(c.useState)(!0),n=Object(b.a)(t,2),i=n[0],s=n[1],a=Object(c.useState)(null),r=Object(b.a)(a,2),o=r[0],j=r[1];if(Object(c.useEffect)((function(){s(!0),O("/movie/"+e).then((function(e){j(e),s(!1)}))}),[e]),i)return Object(p.jsx)(v,{});var h="https://image.tmdb.org/t/p/w500"+o.poster_path;return Object(p.jsxs)("div",{className:_.a.detailsContainer,children:[Object(p.jsx)("img",{className:_.a.col+" "+_.a.movieImage,src:h,alt:o.title}),Object(p.jsxs)("div",{className:"".concat(_.a.col," ").concat(_.a.movieDetails),children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Title:"})," ",o.title]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Genres: "}),o.genres.map((function(e){return e.name})).join(", ")]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("strong",{children:"Description:"})," ",o.overview]})]})]})}function I(){return new URLSearchParams(Object(l.g)().search)}var N=n(21),M=n.n(N);function C(e){var t=e.movie,n="https://image.tmdb.org/t/p/w300"+t.poster_path;return Object(p.jsx)("li",{className:M.a.movieCard,children:Object(p.jsxs)(h.b,{to:"/movies/"+t.id,children:[Object(p.jsx)("img",{width:230,height:345,className:M.a.movieImage,src:n,alt:t.title}),Object(p.jsx)("h3",{children:t.title})]})})}var y=n(29),D=n.n(y);function S(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(!0),a=Object(b.a)(s,2),r=a[0],o=a[1],j=I().get("search");return Object(c.useEffect)((function(){o(!0),O(j?"/search/movie?query="+j:"/discover/movie").then((function(e){i(e.results),o(!1)}))}),[j]),r?Object(p.jsx)(v,{}):Object(p.jsx)("ul",{className:D.a.moviesGrid,children:n.map((function(e){return Object(p.jsx)(C,{movie:e},e.id)}))})}var z,G=n(30),w=m.a.div(z||(z=Object(u.a)(["\n  .search__container {\n    display: flex;\n    justify-content: center;\n  }\n  .search__box {\n    position: relative;\n  }\n  .search__box-button {\n    height: 100%;\n    position: absolute;\n    right: 0;\n    top: 0;\n    cursor: pointer;\n    border: none;\n    background: none;\n    margin-right: 5px;\n  }\n  .search__box-input {\n    border: none;\n    font-size: 1.2rem;\n    height: 30px;\n    border-radius: 10px;\n    padding: 5px 30px 5px 10px;\n    transition: 1s;\n  }\n  .search__box-input:hover {\n    box-shadow: 0 0 5pt 0.5pt #7a7a7a;\n  }\n  .search__box-input:focus {\n    outline: none;\n    box-shadow: 0 0 5pt 2pt #8a8a8a;\n  }\n"])));function J(){var e=I().get("search"),t=Object(c.useState)(""),n=Object(b.a)(t,2),i=n[0],s=n[1],a=Object(l.f)();Object(c.useEffect)((function(){s(e||"")}),[e]);return Object(p.jsx)(w,{children:Object(p.jsx)("form",{className:"search__container",onSubmit:function(e){e.preventDefault(),a.push("/?search="+i)},children:Object(p.jsxs)("div",{className:"search__box",children:[Object(p.jsx)("input",{className:"search__box-input",type:"text",value:i,onChange:function(e){return s(e.target.value)}}),Object(p.jsx)("button",{className:"search__box-button",type:"submit",children:Object(p.jsx)(G.a,{size:15})})]})})})}function A(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(J,{}),Object(p.jsx)(S,{}),";"]})}function Z(){return Object(p.jsxs)(h.a,{className:"App",children:[Object(p.jsx)("header",{children:Object(p.jsx)(h.b,{to:"/",children:Object(p.jsx)("h1",{className:j.a.title,children:"Movies"})})}),Object(p.jsx)("main",{children:Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{exact:!0,path:"/movies/:movieId",children:Object(p.jsx)(g,{})}),Object(p.jsx)(l.a,{path:"/",children:Object(p.jsx)(A,{})})]})})]})}var E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),s(e),a(e)}))};r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(Z,{})}),document.getElementById("root")),E()}},[[43,1,2]]]);
//# sourceMappingURL=main.07dd7a68.chunk.js.map