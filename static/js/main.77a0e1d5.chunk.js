(this.webpackJsonpuntitled2=this.webpackJsonpuntitled2||[]).push([[0],{13:function(e,t,a){e.exports={input:"Search_input__3iTQH",btn:"Search_btn__VNvBO"}},14:function(e,t,a){},27:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(19),n=a.n(s),r=(a(27),a(5)),i=a.n(r),l=a(7),o=a(3),d=(a(14),a(29),a(30),a(0)),j=function(e){var t=e.name,a=e.index,c=e.items,s=e.task,n=e.setPageNumber;return Object(d.jsxs)("div",{children:[Object(d.jsx)("style",{jsx:"true",children:'\n        .x:checked + label {\n          background-color: #0b5ed7;\n          color: #ffffff;\n        }\n        input[type="radio"] {\n          display: none;\n        }\n      '}),Object(d.jsxs)("div",{className:"form-check",children:[Object(d.jsx)("input",{onClick:function(){n(1),s(c)},className:"form-check-input x",type:"radio",name:t,id:"".concat(t,"-").concat(a)}),Object(d.jsx)("label",{className:"btn btn-outline-primary ",htmlFor:"".concat(t,"-").concat(a),children:c})]})]})},b=function(e){var t=e.setGender,a=e.setPageNumber;return Object(d.jsxs)("div",{className:"accordion-item",children:[Object(d.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(d.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"false","aria-controls":"collapseOne",children:"Gender"})}),Object(d.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse ","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(d.jsx)("div",{className:"accordion-body d-flex flex-wrap gap-3",children:["female","male","genderless","unknown"].map((function(e,c){return Object(d.jsx)(j,{setPageNumber:a,name:"gender",index:c,items:e,task:t},c)}))})})]})},m=function(e){var t=e.setPageNumber,a=e.setSpecies;return Object(d.jsxs)("div",{className:"accordion-item",children:[Object(d.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(d.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Species"})}),Object(d.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(d.jsx)("div",{className:"accordion-body d-flex flex-wrap gap-3",children:["Human","Alien","Humanoid","Poopybutthole","Mythological","Unknown","Animal","Disease","Robot","Cronenberg","Planet"].map((function(e,c){return Object(d.jsx)(j,{setPageNumber:t,name:"species",index:c,items:e,task:a},c)}))})})]})},u=function(e){var t=e.setPageNumber,a=e.setStatus;return Object(d.jsxs)("div",{className:"accordion-item",children:[Object(d.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(d.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Status"})}),Object(d.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(d.jsx)("div",{className:"accordion-body d-flex flex-wrap gap-3",children:["Alive","Dead","Unknown"].map((function(e,c){return Object(d.jsx)(j,{setPageNumber:t,name:"status",index:c,items:e,task:a},c)}))})})]})},x=function(e){var t=e.setStatus,a=e.setPageNumber,c=e.setGender,s=e.setSpecies;return Object(d.jsxs)("div",{className:"col-lg-3 col-12 mb-5",children:[Object(d.jsx)("div",{className:"text-center fw-bold fs-4 mb-2",children:"Filters"}),Object(d.jsx)("div",{onClick:function(){t(""),a(""),c(""),s(""),window.location.reload(!1)},style:{cursor:"pointer"},className:"text-primary text-decoration-underline text-center mb-3",children:"Clear Filters"}),Object(d.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(d.jsx)(u,{setPageNumber:a,setStatus:t}),Object(d.jsx)(m,{setSpecies:s,setPageNumber:a}),Object(d.jsx)(b,{setGender:c,setPageNumber:a})]})]})},p=a(8),h=a.n(p),O=a(6),f=function(e){var t,a=e.results,c=e.page;return t=a?a.map((function(e){var t=e.name,a=e.id,s=e.image,n=e.location,r=e.status;return Object(d.jsx)(O.b,{style:{textDecoration:"none"},to:"".concat(c).concat(a),className:"col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark",children:Object(d.jsxs)("div",{className:"".concat(h.a.cards," d-flex justify-content-center flex-column"),children:[Object(d.jsx)("img",{src:s,alt:"img",className:"".concat(h.a.img," img-fluid")}),Object(d.jsxs)("div",{style:{padding:"10px"},className:"content",children:[Object(d.jsxs)("div",{className:"fs-4 fw-bold mb-4",children:[" ",t]}),Object(d.jsx)("div",{className:"fs-6",children:"Last Location"}),Object(d.jsx)("div",{className:"fs-5",children:n.name})]}),"Dead"===r?Object(d.jsx)("div",{className:"".concat(h.a.badge," badge bg-danger position-absolute"),children:r}):"Alive"===r?Object(d.jsx)("div",{className:"".concat(h.a.badge," badge bg-success position-absolute"),children:r}):Object(d.jsx)("div",{className:"".concat(h.a.badge," badge bg-secondary position-absolute"),children:r})]})},a)})):"No characters found",Object(d.jsxs)(d.Fragment,{children:[" ",t]})},g=a(20),N=a.n(g),v=(a(52),function(e){var t=e.setPageNumber,a=e.pageNumber,s=e.info,n=Object(c.useState)(window.innerWidth),r=Object(o.a)(n,2),i=r[0],l=r[1];console.log(i);var j=function(){l(window.innerWidth)};return Object(c.useEffect)((function(){window.addEventListener("resize",j)}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("style",{jsx:"true",children:"\n          @media (max-width: 768px) {\n            .next,\n            .prev {\n              display: none;\n            }\n            .pagination {\n              font-size: 14px;\n            }\n          }\n        "}),Object(d.jsx)(N.a,{forcePage:1===a?0:a-1,className:"pagination justify-content-center gap-4 my-4",nextLabel:"Next",previousLabel:"Prev",nextClassName:"btn btn-primary next",previousClassName:"btn btn-primary prev",pageClassName:"page-item",pageLinkClassName:"page-link",activeClassName:"active",marginPagesDisplayed:i<576?1:2,pageRangeDisplayed:i<576?2:3,onPageChange:function(e){t(e.selected+1)},pageCount:null===s||void 0===s?void 0:s.pages})]})}),y=a(21),w=a(13),k=a.n(w),S=function(e){var t=e.setSearch,a=e.setPageNumber,c=(e.search,e.pageNumber,document.getElementById("search"));return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("form",{className:"d-flex flex-sm-row align-items-center justify-content-center gap-4 mb-5",children:[Object(d.jsx)("input",Object(y.a)({onChange:function(e){a(1)},type:"text",id:"search",className:"".concat(k.a.input," "),placeholder:"Search for character"},"type","text")),Object(d.jsx)("button",{onClick:function(e){e.preventDefault(),t(c.value),c.value=""},className:"".concat(k.a.btn," btn btn-primary fs-5"),children:"Search"})]})})},P=function(){return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light mb-3",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("a",{href:"/",className:"fs-3  ubuntu  navbar-brand",children:["Rick & Morty ",Object(d.jsx)("span",{className:"text-primary",children:"WiKi"})]}),Object(d.jsxs)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:[Object(d.jsx)("style",{jsx:"true",children:'\n            button[aria-expanded="false"] > .close {\n              display: none;\n            }\n            button[aria-expanded="true"] > .open {\n              display: none;\n            }\n          '}),Object(d.jsx)("i",{className:"fas fa-bars open fw-bold text-dark"}),Object(d.jsx)("i",{className:"fas fa-times close fw-bold text-dark"})]}),Object(d.jsx)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup",children:Object(d.jsxs)("div",{className:"navbar-nav fs-6",children:[Object(d.jsx)(O.c,{className:"nav-link",to:"/",children:"Characters"}),Object(d.jsx)(O.c,{className:"nav-link",to:"/episodes",children:"Episodes"}),Object(d.jsx)(O.c,{className:"nav-link",to:"/location",children:"Location"})]})})]})})},C=a(2),E=(a(18),a(22)),T=function(e){var t=e.total,a=e.name,c=e.setID;return console.log(),Object(d.jsx)("div",{className:"input-group mb-3",children:Object(d.jsxs)("select",{defaultValue:"DEFAULT",onChange:function(e){return c(e.target.value)},className:"form-select",id:a,children:[Object(d.jsx)("option",{value:"1",children:"Choose..."}),Object(E.a)(Array(t).keys()).map((function(e,t){return Object(d.jsxs)("option",{value:e+1,children:[a," - ",e+1]},t)}))]})})},_=function(){var e=Object(c.useState)("1"),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)([]),r=Object(o.a)(n,2),j=r[0],b=r[1],m=Object(c.useState)([]),u=Object(o.a)(m,2),x=u[0],p=u[1],h=j.name,O=j.type,g=j.dimension,N="https://rickandmortyapi.com/api/location/".concat(a);return Object(c.useEffect)((function(){Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(N).then((function(e){return e.json()}));case 2:return t=e.sent,b(t),e.next=6,Promise.all(t.residents.map((function(e){return fetch(e).then((function(e){return e.json()}))})));case 6:a=e.sent,p(a);case 8:case"end":return e.stop()}}),e)})))()}),[N]),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"row mb-4",children:[Object(d.jsxs)("h1",{className:"text-center mb-4",children:["Location :"," ",Object(d.jsx)("span",{className:"text-primary",children:""===h?"Unknown":h})]}),Object(d.jsxs)("h5",{className:"text-center",children:[" ","Dimension : ",""===g?"Unknown":g]}),Object(d.jsxs)("h6",{className:"text-center",children:[" ","Type : ",""===O?"Unknown":O]})]}),Object(d.jsxs)("div",{className:"row ",children:[Object(d.jsxs)("div",{className:"col-lg-3 col-12",children:[Object(d.jsx)("h4",{className:"text-center mb-4",children:"Pick Location"}),Object(d.jsx)(T,{setID:s,name:"Location",total:126})]}),Object(d.jsx)("div",{className:"col-lg-8 col-12",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)(f,{page:"/location/",results:x})})})]})]})},A=function(){var e=Object(c.useState)("1"),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)([]),r=Object(o.a)(n,2),j=r[0],b=r[1],m=Object(c.useState)([]),u=Object(o.a)(m,2),x=u[0],p=u[1],h=j.air_date,O=j.name,g="https://rickandmortyapi.com/api/episode/".concat(a);return Object(c.useEffect)((function(){Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(g).then((function(e){return e.json()}));case 2:return t=e.sent,b(t),e.next=6,Promise.all(t.characters.map((function(e){return fetch(e).then((function(e){return e.json()}))})));case 6:a=e.sent,p(a);case 8:case"end":return e.stop()}}),e)})))()}),[g]),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"row mb-4",children:[Object(d.jsxs)("h1",{className:"text-center mb-4",children:["Episode :"," ",Object(d.jsx)("span",{className:"text-primary",children:""===O?"Unknown":O})]}),Object(d.jsxs)("h2",{className:"text-center",children:[" ","Air Date ",""===h?"Unknown":h]})]}),Object(d.jsxs)("div",{className:"row ",children:[Object(d.jsxs)("div",{className:"col-lg-3 col-12",children:[Object(d.jsx)("h4",{className:"text-center mb-4",children:"Pick Episodes"}),Object(d.jsx)(T,{setID:s,name:"Episode",total:51})]}),Object(d.jsx)("div",{className:"col-lg-8 col-12",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)(f,{page:"/episodes/",results:x})})})]})]})},D=function(){var e=Object(C.g)().id,t=Object(c.useState)([]),a=Object(o.a)(t,2),s=a[0],n=a[1],r=s.name,j=s.image,b=s.gender,m=s.location,u=s.status,x=s.type,p=s.species,h=s.origin,O="https://rickandmortyapi.com/api/character/".concat(e);return Object(c.useEffect)((function(){Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O).then((function(e){return e.json()}));case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})))()}),[O]),Object(d.jsx)("div",{className:"container d-flex justify-content-center ",children:Object(d.jsxs)("div",{className:"d-flex flex-column gap-4",children:[Object(d.jsx)("h1",{className:"text-center",children:r}),Object(d.jsx)("img",{src:j,alt:"",className:"img-fluid"}),"Dead"===u?Object(d.jsx)("div",{className:"badge bg-danger fs-5",children:u}):"Alive"===u?Object(d.jsx)("div",{className:"badge bg-success fs-5 ",children:u}):Object(d.jsx)("div",{className:"badge bg-secondary fs-5 ",children:u}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsxs)("div",{className:"",children:[Object(d.jsx)("span",{className:"fw-bold",children:"Gender : "}),b]}),Object(d.jsxs)("div",{className:"",children:[Object(d.jsx)("span",{className:"fw-bold",children:" Species : "}),p]}),Object(d.jsxs)("div",{className:"",children:[Object(d.jsx)("span",{className:"fw-bold",children:" Type : "}),""===x?"Unknown":x]}),Object(d.jsxs)("div",{className:"",children:[Object(d.jsx)("span",{className:"fw-bold",children:" Location : "}),null===m||void 0===m?void 0:m.name]}),Object(d.jsxs)("div",{className:"",children:[Object(d.jsx)("span",{className:"fw-bold",children:" Origin : "}),null===h||void 0===h?void 0:h.name]})]})]})})};var L=function(){var e=Object(c.useState)(1),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),r=Object(o.a)(n,2),j=r[0],b=r[1],m=Object(c.useState)(""),u=Object(o.a)(m,2),p=u[0],h=u[1],O=Object(c.useState)(""),g=Object(o.a)(O,2),N=g[0],y=g[1],w=Object(c.useState)(""),k=Object(o.a)(w,2),P=k[0],C=k[1],E=Object(c.useState)([]),T=Object(o.a)(E,2),_=T[0],A=T[1],D=_.info,L=_.results,F="https://rickandmortyapi.com/api/character/?page=".concat(a,"&name=").concat(j,"&status=").concat(p,"&gender=").concat(P,"&species=").concat(N);Object(c.useRef)(!0);return Object(c.useEffect)((function(){Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(F).then((function(e){return e.json()}));case 2:t=e.sent,A(t);case 4:case"end":return e.stop()}}),e)})))()}),[F]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{className:"text-center mb-4",children:" Characters"}),Object(d.jsx)(S,{search:j,setSearch:b,setPageNumber:s,pageNumber:a}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)(x,{setPageNumber:s,setStatus:h,setGender:C,setSpecies:y}),Object(d.jsx)("div",{className:"col-lg-8 col-12",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)(f,{page:"/",results:L})})})]})}),Object(d.jsx)(v,{info:D,pageNumber:a,setPageNumber:s})]})},F=function(){return Object(d.jsxs)(O.a,{children:[Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(P,{})}),Object(d.jsxs)(C.c,{children:[Object(d.jsx)(C.a,{path:"/",element:Object(d.jsx)(L,{})}),Object(d.jsx)(C.a,{path:"/:id",element:Object(d.jsx)(D,{})}),Object(d.jsx)(C.a,{path:"/episodes",element:Object(d.jsx)(A,{})}),Object(d.jsx)(C.a,{path:"/episodes/:id",element:Object(d.jsx)(D,{})}),Object(d.jsx)(C.a,{path:"/location",element:Object(d.jsx)(_,{})}),Object(d.jsx)(C.a,{path:"/location/:id",element:Object(d.jsx)(D,{})})]})]})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,57)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};n.a.render(Object(d.jsx)(F,{}),document.getElementById("root")),U()},8:function(e,t,a){e.exports={cards:"Cards_cards__2PUIK",img:"Cards_img__2_pdK",badge:"Cards_badge__11AlA"}}},[[54,1,2]]]);
//# sourceMappingURL=main.77a0e1d5.chunk.js.map