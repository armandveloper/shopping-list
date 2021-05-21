(this.webpackJsonpshoppingify=this.webpackJsonpshoppingify||[]).push([[0],{59:function(t,n,e){"use strict";e.r(n);var r,i,o,c=e(0),a=e.n(c),s=e(16),l=e.n(s),d=e(7),b=e(20),m=e(33),j=e(5),h={UI_SHOW_ADD_ITEM:"[UI] Show the add item sidebar",UI_HIDE_ADD_ITEM:"[UI] Hide the add item sidebar",UI_SHOW_SIDEBAR_RIGHT:"[UI] Show the sidebar right in small screens",UI_HIDE_SIDEBAR_RIGHT:"[UI] Hide the sidebar right in small screens",UI_TOGGLE_SIDEBAR_RIGHT:"[UI] Toggle the sidebar right in small screens",UI_SHOW_ITEM_INFO:"[UI] Show the item info sidebar",UI_HIDE_ITEM_INFO:"[UI] Hide the item info sidebar"},u={showAddItem:!1,showSidebarRight:!1,showItemInfo:!1},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case h.UI_SHOW_ADD_ITEM:return Object(j.a)(Object(j.a)({},t),{},{showAddItem:!0});case h.UI_HIDE_ADD_ITEM:return Object(j.a)(Object(j.a)({},t),{},{showAddItem:!1});case h.UI_SHOW_SIDEBAR_RIGHT:return Object(j.a)(Object(j.a)({},t),{},{showSidebarRight:!0});case h.UI_HIDE_SIDEBAR_RIGHT:return Object(j.a)(Object(j.a)({},t),{},{showSidebarRight:!1});case h.UI_TOGGLE_SIDEBAR_RIGHT:return Object(j.a)(Object(j.a)({},t),{},{showSidebarRight:!t.showSidebarRight});case h.UI_SHOW_ITEM_INFO:return Object(j.a)(Object(j.a)({},t),{},{showItemInfo:!0});case h.UI_HIDE_ITEM_INFO:return Object(j.a)(Object(j.a)({},t),{},{showItemInfo:!1});default:return t}},O=Object(b.b)({ui:g}),f=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.c)(Object(b.a)(m.a)),p=Object(b.d)(O,f),x=e(19),v=e(6),y=e(2),w=e(3),I=e(9),_=e(1),k=w.c.form(r||(r=Object(y.a)(["\n\tflex-basis: 27.5rem;\n\tbackground-color: var(--color-bg-3);\n\tborder-radius: 1.2rem;\n\theight: 5rem;\n\tmargin-left: 5.6rem;\n\tdisplay: grid;\n\tgrid-template-columns: 2rem 2rem 1fr;\n\talign-items: center;\n"]))),S=w.c.button(i||(i=Object(y.a)(["\n\tgrid-column: 2;\n\tgrid-row: 1;\n\tbackground: none;\n\tborder: none;\n\tcolor: #fff;\n\tcursor: pointer;\n\tmargin: 0;\n\tpadding: 0;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tjustify-content: center;\n"]))),E=w.c.input(o||(o=Object(y.a)(["\n\tgrid-column: 1 / -1;\n\tgrid-row: 1;\n\tbackground: none;\n\tborder: 1px solid transparent;\n\tborder-radius: 1.2rem;\n\tcolor: #fff;\n\tfont-family: inherit;\n\tfont-size: 1.6rem;\n\theight: 100%;\n\tpadding-left: 5rem;\n\tpadding-right: 1rem;\n\ttransition: border-color 0.25s ease;\n\t&:focus {\n\t\toutline: none;\n\t\tborder-color: var(--color-primary);\n\t}\n\t&::placeholder {\n\t\tcolor: inherit;\n\t}\n"])));var z,C,D=function(){return Object(_.jsxs)(k,{children:[Object(_.jsx)(S,{type:"submit",title:"Search",children:Object(_.jsx)(I.h,{size:20,color:"currentCOlor"})}),Object(_.jsx)(E,{type:"text",placeholder:"search item","aria-label":"Search Item"})]})},T=w.c.header(z||(z=Object(y.a)(["\n\tdisplay: none;\n\t@media (min-width: 75em) {\n\t\tpadding: 3rem 9rem 0rem 8rem;\n\t\tdisplay: flex;\n\t\talign-items: start;\n\t\tjustify-content: space-between;\n\t}\n"]))),H=w.c.h1(C||(C=Object(y.a)(["\n\tfont-size: 2.6rem;\n\tfont-weight: 500;\n\tmargin: 0;\n\t.hightlight {\n\t\tcolor: var(--color-primary);\n\t\tfont-weight: 700;\n\t}\n"])));var A,U,R,N=function(){return Object(_.jsxs)(T,{children:[Object(_.jsxs)(H,{children:[Object(_.jsx)("span",{className:"hightlight",children:"Shoppingify"})," allows you to take your shopping list wherever you go"]}),Object(_.jsx)(D,{})]})},F=w.c.div(A||(A=Object(y.a)(["\n\tpadding: 2rem;\n\t@media (min-width: 75em) {\n\t\tmargin-top: 5.6rem;\n\t\tmargin-top: 3rem;\n\t\tpadding: 0 9rem 5rem 8rem;\n\t}\n"]))),G=w.c.div(U||(U=Object(y.a)(["\n\tbackground-color: var(--color-bg-3);\n\tborder-radius: 1.2rem;\n\tcursor: default;\n\tpadding: 1.2rem 1.6rem;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 2.4rem;\n\tgap: 1.2rem;\n\talign-items: start;\n"]))),L=w.c.button(R||(R=Object(y.a)(["\n\tbackground: none;\n\tborder: none;\n\tcolor: #fff;\n\tcursor: pointer;\n\tpadding: 0;\n\tmargin: 0;\n"])));var M,W,B,P=function(){var t=Object(d.b)();return Object(_.jsxs)(G,{onClick:function(){t({type:h.UI_SHOW_ITEM_INFO})},children:["Avocado",Object(_.jsx)(L,{type:"button",title:"Add Item to the list",onClick:function(t){t.stopPropagation()},children:Object(_.jsx)(I.a,{size:24,color:"currentColor"})})]})},V=w.c.section(M||(M=Object(y.a)(["\n\tmargin-bottom: 1.6rem;\n"]))),J=w.c.h2(W||(W=Object(y.a)(["\n\tfont-size: 1.8rem;\n\tfont-weight: 500;\n\tmargin: 0 0 1.8rem 0;\n"]))),X=w.c.ul(B||(B=Object(y.a)(["\n\tdisplay: grid;\n\tgap: 2.4rem 0.8rem;\n\t@media (min-width: 36em) {\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t}\n\t@media (min-width: 75em) {\n\t\tgrid-template-columns: repeat(4, 1fr);\n\t\tgap: 4rem 2rem;\n\t}\n"])));var Y,Q=function(){return Object(_.jsxs)(V,{children:[Object(_.jsx)(J,{children:"Fruit and vegetables"}),Object(_.jsxs)(X,{children:[Object(_.jsx)(P,{}),Object(_.jsx)(P,{}),Object(_.jsx)(P,{}),Object(_.jsx)(P,{}),Object(_.jsx)(P,{})]})]})},q=w.c.div(Y||(Y=Object(y.a)(["\n\toverflow-y: auto;\n\tscrollbar-width: thin;\n\tscrollbar-color: var(--color-primary) var(--color-bg-2);\n"])));var K,Z,$,tt,nt,et,rt=function(){return Object(_.jsxs)(q,{children:[Object(_.jsx)(N,{}),Object(_.jsx)(F,{children:Object(_.jsx)(Q,{})}),Object(_.jsx)(F,{children:Object(_.jsx)(Q,{})}),Object(_.jsx)(F,{children:Object(_.jsx)(Q,{})}),Object(_.jsx)(F,{children:Object(_.jsx)(Q,{})})]})},it=Object(w.b)(K||(K=Object(y.a)(["\n\tgrid-column: 2;\n\tgrid-row: 1;\n\tbackground-color: var(--color-bg-2);\n\theight: 100%;\n\twidth: 100%;\n\toverflow-y: auto;\n\ttransition: transform 0.4s ease;\n\t@media (max-width: 56.24em) {\n\t\t&.show {\n\t\t\ttransform: translate3d(-100%, 0, 0);\n\t\t}\n\t}\n"]))),ot=Object(w.b)(Z||(Z=Object(y.a)(["\n\tpadding: 2.5rem 1.4rem 0 2rem;\n\t@media (min-width: 56.25em) {\n\t\tpadding: 4.2rem 3.2rem 0 4.8rem;\n\t}\n"]))),ct=Object(w.b)($||($=Object(y.a)(["\n\tbackground-color: var(--color-bg-3);\n\theight: 9.4rem;\n\tpadding: 1.8rem 1.4rem 1.4rem 2rem;\n"]))),at={primary:"var(--color-primary)",secondary:"var(--color-secondary)",black:"var(--color-bg)"},st=w.c.button.attrs((function(t){return{type:t.type||"button"}}))(tt||(tt=Object(y.a)(["\n\tbackground-color: ",";\n\tborder: none;\n\tborder-radius: ",";\n\tbox-shadow: 0px 0.2rem 1.2rem rgba(0, 0, 0, 0.04);\n\tcolor: #fff;\n\tcursor: pointer;\n\tfont-family: inherit;\n\tfont-size: ",";\n\tfont-weight: 700;\n\tpadding: 1.1rem 2rem;\n\ttext-align: center;\n"])),(function(t){var n=t.color;return n?at[n]:"transparent"}),(function(t){return t.roundedLeft?"1.2rem 0 0 1.2rem":"1.2rem"}),(function(t){return"lg"===t.size?"1.6rem":"1.4rem"})),lt=e.p+"static/media/source.d2e572da.svg",dt=w.c.div(nt||(nt=Object(y.a)(["\n\t","\n"])),ot),bt=w.c.div(et||(et=Object(y.a)(["\n\tbackground: #80485b url(",") left top -0.5rem / contain no-repeat;\n\tborder-radius: 2.4rem;\n\tpadding: 1.8rem 2.8rem;\n\tdisplay: grid;\n\tgrid-template-columns: 5rem 1fr;\n\tgap: 2rem;\n\t> div {\n\t\tgrid-column: 2;\n\t}\n\tp {\n\t\tfont-size: 1.6rem;\n\t\tfont-weight: 700;\n\t\tmargin: 0 0 1.2rem;\n\t}\n"])),lt);var mt,jt=function(){var t=Object(d.b)();return Object(_.jsx)(dt,{children:Object(_.jsx)(bt,{children:Object(_.jsxs)("div",{children:[Object(_.jsx)("p",{children:"Didn't find what you need?"}),Object(_.jsx)(st,{onClick:function(){t({type:h.UI_SHOW_ADD_ITEM})},color:"black",children:"Add Item"})]})})})},ht=w.c.div(mt||(mt=Object(y.a)(["\n\t",";\n\ttext-align: center;\n\t@media (min-width: 37.5em) {\n\t\ttext-align: right;\n\t}\n\t@media (min-width: 56.25em) {\n\t\ttext-align: center;\n\t}\n\t",":first-child {\n\t\tmargin-right: 2rem;\n\t}\n"])),ct,st);var ut,gt,Ot,ft,pt,xt=function(){return Object(_.jsxs)(ht,{children:[Object(_.jsx)(st,{type:"button",children:"cancel"}),Object(_.jsx)(st,{type:"button",color:"secondary",children:"Complete"})]})},vt=w.c.span(ut||(ut=Object(y.a)(["\n\tborder: 2px solid var(--color-primary);\n\tborder-radius: 2.4rem;\n\tcursor: default;\n\twidth: 6.8rem;\n\theight: 3.2rem;\n\tfont-size: 1.2rem;\n\tfont-weight: 700;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tjustify-content: center;\n"]))),yt=w.c.button(gt||(gt=Object(y.a)(["\n\tbackground-color: var(--color-primary);\n\tborder: none;\n\tborder-radius: 1.2rem;\n\tcursor: pointer;\n\theight: 100%;\n\tmargin: 0;\n\tpadding: 0;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tjustify-content: center;\n"]))),wt=w.c.div(Ot||(Ot=Object(y.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: 1.6rem 1fr 1.6rem;\n\tgap: 0.9rem;\n"]))),It=w.c.button(ft||(ft=Object(y.a)(["\n\tbackground: none;\n\tborder: none;\n\tcolor: var(--color-primary);\n\tcursor: pointer;\n\tmargin: 0;\n\tpadding: 0;\n"])));function _t(){return Object(_.jsxs)(wt,{children:[Object(_.jsx)(It,{type:"button",title:"-1",children:Object(_.jsx)(I.f,{size:16,color:"currentColor"})}),Object(_.jsx)(vt,{children:"3 pcs"}),Object(_.jsx)(It,{type:"button",title:"+1",children:Object(_.jsx)(I.a,{size:16,color:"currentColor"})})]})}var kt=w.c.div(pt||(pt=Object(y.a)(["\n\tbackground-color: var(--color-bg-3);\n\tborder-radius: 1.2rem;\n\theight: 4.5rem;\n\tpadding-right: 0.8rem;\n\tdisplay: grid;\n\tgrid-template-columns: 3.8rem 1fr;\n\tgap: 1.2rem;\n\talign-items: center;\n"])));var St,Et=function(){return Object(_.jsxs)(kt,{children:[Object(_.jsx)(yt,{type:"button",title:"Remove item from list",children:Object(_.jsx)(I.c,{size:24,color:"#fff"})}),Object(_.jsx)(_t,{})]})},zt=w.c.li(St||(St=Object(y.a)(["\n\tfont-size: 1.4rem;\n\tdisplay: grid;\n\tgrid-template-columns: 2.4rem 1fr 6.8rem;\n\t/* Dps columnas el el modo de edici\xf3n */\n\tgrid-template-columns: 1fr 17.4rem;\n\tgap: 1.6rem;\n\talign-items: center;\n\t&:not(:last-of-type) {\n\t\tmargin-bottom: 2.4rem;\n\t}\n"])));var Ct,Dt,Tt=function(){return Object(_.jsxs)(zt,{children:["Avocado",Object(_.jsx)(Et,{})]})},Ht=w.c.section(Ct||(Ct=Object(y.a)(["\n\tmargin-bottom: 2.5rem;\n"]))),At=w.c.h4(Dt||(Dt=Object(y.a)(["\n\tfont-size: 1.4rem;\n\tfont-weight: 500;\n\tmargin: 0 0 2rem 0;\n\topacity: 0.79;\n"])));var Ut,Rt,Nt=function(){return Object(_.jsxs)(Ht,{children:[Object(_.jsx)(At,{children:"Fruits and vegetables"}),Object(_.jsxs)("ul",{children:[Object(_.jsx)(Tt,{}),Object(_.jsx)(Tt,{}),Object(_.jsx)(Tt,{}),Object(_.jsx)(Tt,{})]})]})},Ft=w.c.div(Ut||(Ut=Object(y.a)(["\n\tflex: 1;\n\tmargin-top: 3.2rem;\n\tmargin-bottom: 2.5rem;\n\t","\n\tdisplay: flex;\n\tflex-direction: column;\n"])),ot),Gt=w.c.h3(Rt||(Rt=Object(y.a)(["\n\tfont-size: 2.4rem;\n\tmargin-top: 0;\n\tmargin-bottom: 3.5rem;\n"])));var Lt,Mt=function(){return Object(_.jsxs)(Ft,{children:[Object(_.jsx)(Gt,{children:"Shopping list"}),Object(_.jsx)(Nt,{}),Object(_.jsx)(Nt,{}),Object(_.jsx)(Nt,{}),Object(_.jsx)(Nt,{})]})},Wt=w.c.aside(Lt||(Lt=Object(y.a)(["\n\t","\n\tdisplay: flex;\n\tflex-direction: column;\n"])),it);var Bt=function(){var t=Object(d.c)((function(t){return t.ui}));return Object(_.jsxs)(Wt,{className:t.showSidebarRight?"show":"",children:[Object(_.jsx)(jt,{}),Object(_.jsx)(Mt,{}),Object(_.jsx)(xt,{})]})},Pt=e(18),Vt=e(15),Jt=e(36),Xt=function(t){return{label:t,value:t.toLowerCase().replace(/\W/g,"")}},Yt=[Xt("One"),Xt("Two"),Xt("Three")];var Qt,qt,Kt,Zt=function(){var t=Object(c.useState)({isLoading:!1,options:Yt,value:void 0}),n=Object(Pt.a)(t,2),e=n[0],r=n[1],i=Object(c.useState)(""),o=Object(Pt.a)(i,2),a=(o[0],o[1],{control:function(t,n){var e=n.isFocused;return Object(j.a)(Object(j.a)({},t),{},{background:"none",border:"1px solid ".concat(e?"var(--color-primary)":"#bdbdbd"),borderRadius:"1.2rem",boxShadow:"none",color:"#fff",padding:"1rem",transition:"border-color 0.3s ease","&:hover":{borderColor:"".concat(e&&"var(--color-primary)")}})},input:function(t){return Object(j.a)(Object(j.a)({},t),{},{color:"#fff",fontFamily:"inherit",fontSize:"1.6rem"})},singleValue:function(t){return Object(j.a)(Object(j.a)({},t),{},{color:"#fff"})},menu:function(t){return Object(j.a)(Object(j.a)({},t),{},{backgroundColor:"var(--color-bg-3)",borderRadius:"1.2rem"})},option:function(t,n){var e=n.isSelected;return Object(j.a)(Object(j.a)({},t),{},{backgroundColor:"".concat(e&&"var(--color-bg-2)"),":active":{backgroundColor:"var(--color-bg-2)"},"&:hover":{backgroundColor:"var(--color-bg-2)"}})}});return Object(_.jsx)(Jt.a,{id:"category",name:"selectText",className:"basic-single",classNamePrefix:"select",isClearable:!0,isDisabled:e.isLoading,isLoading:e.isLoading,onCreateOption:function(t){r(Object(j.a)(Object(j.a)({},e),{},{isLoading:!0})),console.group("Option created"),console.log("Wait a moment..."),setTimeout((function(){var n=e.options,i=Xt(t);console.log(i),console.groupEnd(),r({isLoading:!1,options:[].concat(Object(Vt.a)(n),[i]),value:i})}),1e3)},onChange:function(t,n){console.group("Value Changed"),console.log(t),console.log("action: ".concat(n.action)),console.groupEnd(),r(Object(j.a)(Object(j.a)({},e),{},{value:t}))},options:e.options,value:e.value,styles:a})},$t=w.c.form(Qt||(Qt=Object(y.a)(["\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n"]))),tn=w.c.div(qt||(qt=Object(y.a)(["\n\tmargin-bottom: 3rem;\n\tlabel {\n\t\tdisplay: inline-block;\n\t\tfont-size: 1.4rem;\n\t\tmargin-bottom: 0.8rem;\n\t}\n\tinput,\n\ttextarea {\n\t\tbackground: none;\n\t\tborder: 1px solid #bdbdbd;\n\t\tborder-radius: 1.2rem;\n\t\tcolor: #fff;\n\t\tdisplay: block;\n\t\tfont-family: inherit;\n\t\tfont-size: 1.6rem;\n\t\tpadding: 2rem 1.8rem;\n\t\twidth: 100%;\n\t\ttransition: border-color 0.3s ease;\n\t}\n\tinput:focus,\n\ttextarea:focus {\n\t\tborder-color: var(--color-primary);\n\t\toutline: none;\n\t}\n\ttextarea {\n\t\theight: 11rem;\n\t\tresize: none;\n\t}\n"]))),nn=w.c.div(Kt||(Kt=Object(y.a)(["\n\tpadding: 1rem 0;\n\ttext-align: center;\n\t@media (min-width: 37.5em) {\n\t\ttext-align: right;\n\t}\n\t@media (min-width: 56.25em) {\n\t\ttext-align: center;\n\n\t\tpadding: 3rem 0;\n\t}\n\t",":first-child {\n\t\tmargin-right: 2rem;\n\t}\n"])),st);var en,rn,on,cn,an,sn,ln=function(){var t=Object(d.b)();return Object(_.jsxs)($t,{autoComplete:"off",children:[Object(_.jsxs)("div",{children:[Object(_.jsxs)(tn,{children:[Object(_.jsx)("label",{htmlFor:"name",children:"Name"}),Object(_.jsx)("input",{type:"text",id:"name",name:"name",placeholder:"Enter a name"})]}),Object(_.jsxs)(tn,{children:[Object(_.jsx)("label",{htmlFor:"note",children:"Note (optional)"}),Object(_.jsx)("textarea",{id:"note",name:"note",placeholder:"Enter a note"})]}),Object(_.jsxs)(tn,{children:[Object(_.jsx)("label",{htmlFor:"image",children:"Image"}),Object(_.jsx)("input",{type:"text",id:"image",name:"image",placeholder:"Enter a url"})]}),Object(_.jsxs)(tn,{children:[Object(_.jsx)("label",{htmlFor:"category",children:"Category"}),Object(_.jsx)(Zt,{})]})]}),Object(_.jsxs)(nn,{children:[Object(_.jsx)(st,{onClick:function(){t({type:h.UI_HIDE_ADD_ITEM})},size:"lg",children:"cancel"}),Object(_.jsx)(st,{size:"lg",type:"submit",color:"primary",children:"Save"})]})]})},dn=Object(w.d)(en||(en=Object(y.a)(["\n  from {\n    transform: translate3d(100%, 0, 0);\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"]))),bn=Object(w.d)(rn||(rn=Object(y.a)(["\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n  to {\n    transform: translate3d(100%, 0, 0);\n  }\n"]))),mn=Object(w.d)(on||(on=Object(y.a)(["\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n  to {\n    transform: translate3d(-100%, 0, 0);\n  }\n"]))),jn=Object(w.d)(cn||(cn=Object(y.a)(["\n  from {\n    transform: translate3d(-100%, 0, 0);\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"]))),hn=w.c.div(an||(an=Object(y.a)(["\n\t",";\n\t",";\n\tdisplay: flex;\n\tflex-direction: column;\n\tanimation: ","\n\t\t0.4s ease forwards;\n\t@media (min-width: 56.25em) {\n\t\tpadding-top: 3.4rem;\n\t\tanimation: "," 0.4s\n\t\t\tease forwards;\n\t}\n\t> * {\n\t\tflex-shrink: 0;\n\t}\n"])),it,ot,(function(t){return t.show?mn:jn}),(function(t){return t.show?dn:bn})),un=w.c.h2(sn||(sn=Object(y.a)(["\n\tfont-size: 2.4rem;\n\tfont-weight: 500;\n\tmargin-top: 0;\n\tmargin-bottom: 3rem;\n"])));var gn,On,fn,pn,xn,vn,yn=function(t){var n=t.show,e=Object(c.useState)(n),r=Object(Pt.a)(e,2),i=r[0],o=r[1];return Object(c.useEffect)((function(){n&&o(!0)}),[n]),i?Object(_.jsxs)(hn,{onAnimationEnd:function(){n||o(!1)},show:n,children:[Object(_.jsx)(un,{children:"Add a new Item"}),Object(_.jsx)(ln,{})]}):null},wn=w.c.div(gn||(gn=Object(y.a)(["\n\t",";\n\t",";\n\tanimation: ","\n\t\t0.4s ease forwards;\n\t@media (min-width: 56.25em) {\n\t\tpadding-top: 3.4rem;\n\t\tanimation: "," 0.4s\n\t\t\tease forwards;\n\t}\n"])),it,ot,(function(t){return t.show?mn:jn}),(function(t){return t.show?dn:bn})),In=w.c.button(On||(On=Object(y.a)(["\n\tborder: none;\n\tbackground: none;\n\tcolor: var(--color-primary);\n\tcursor: pointer;\n\tfont-family: inherit;\n\tfont-size: 1.6rem;\n\tfont-weight: 700;\n\tmargin: 0;\n\tmargin-bottom: 3rem;\n\tpadding: 0;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tsvg {\n\t\tmargin-right: 1rem;\n\t}\n"]))),_n=w.c.img(fn||(fn=Object(y.a)(["\n\tborder-radius: 2.5rem;\n\tdisplay: block;\n\theight: auto;\n\tmargin-bottom: 2.5rem;\n\tmax-width: 100%;\n"]))),kn=w.c.h4(pn||(pn=Object(y.a)(["\n\tfont-size: 1.5rem;\n\tfont-weight: 500;\n\tmargin-top: 0;\n\tmargin-bottom: 1.15rem;\n\topacity: 0.79;\n"]))),Sn=w.c.p(xn||(xn=Object(y.a)(["\n\tfont-size: 1.8rem;\n\tmargin-top: 0;\n\tmargin-bottom: 2.5rem;\n"]))),En=w.c.div(vn||(vn=Object(y.a)(["\n\tpadding: 1rem 0;\n\ttext-align: center;\n\t@media (min-width: 37.5em) {\n\t\ttext-align: right;\n\t}\n\t@media (min-width: 56.25em) {\n\t\ttext-align: center;\n\t\tpadding: 3rem 0;\n\t}\n\t",":first-child {\n\t\tmargin-right: 2rem;\n\t}\n"])),st);var zn,Cn=function(t){var n=t.show,e=Object(c.useState)(n),r=Object(Pt.a)(e,2),i=r[0],o=r[1],a=Object(d.b)();return Object(c.useEffect)((function(){n&&o(!0)}),[n]),i?Object(_.jsxs)(wn,{onAnimationEnd:function(){n||o(!1)},show:n,children:[Object(_.jsxs)(In,{type:"button",onClick:function(){a({type:h.UI_HIDE_ITEM_INFO})},children:[Object(_.jsx)(I.b,{size:24,color:"currentColor"}),"back"]}),Object(_.jsx)(_n,{src:"https://www.gardentech.com/-/media/Images/GardenTech-NA/US/blog/How-to-Grow-Your-Own-Tasty-Strawberries/Strawberries-Header-OG.jpg"}),Object(_.jsx)(kn,{children:"name"}),Object(_.jsx)(Sn,{children:"Avocado"}),Object(_.jsx)(kn,{children:"category"}),Object(_.jsx)(Sn,{children:"Fruit and vegetables"}),Object(_.jsx)(kn,{children:"note"}),Object(_.jsx)(Sn,{children:"Nutrient-dense foods are those that provides substantial amounts of vitamins, minerals and other nutrients with relatively few calories. One.third of a medium avocado (50g) has 80 calories and contributes nearly 20 vitamins and minerals, making it a great nutrient-dense food choice."}),Object(_.jsxs)(En,{children:[Object(_.jsx)(st,{size:"lg",type:"button",children:"delete"}),Object(_.jsx)(st,{size:"lg",type:"button",color:"primary",children:"Add to list"})]})]}):null},Dn=w.c.main(zn||(zn=Object(y.a)(["\n\theight: 100%;\n\toverflow: hidden;\n\tdisplay: grid;\n\tgrid-template-columns: 100% 100%;\n\t@media (min-width: 56.25em) {\n\t\tgrid-template-columns: 1fr 39rem;\n\t}\n"])));var Tn,Hn,An,Un=function(){var t=Object(d.c)((function(t){return t.ui}));return Object(_.jsxs)(Dn,{children:[Object(_.jsx)(rt,{}),Object(_.jsx)(Bt,{}),Object(_.jsx)(yn,{show:t.showAddItem}),Object(_.jsx)(Cn,{show:t.showItemInfo})]})},Rn=Object(w.c)(x.c)(Tn||(Tn=Object(y.a)(["\n\tflex: 1;\n\tcolor: #fff;\n\ttext-align: center;\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\t&::before {\n\t\tcontent: '';\n\t\tbackground-color: transparent;\n\t\tborder-radius: 0 0.4rem 0.4rem 0;\n\t\theight: 4.6rem;\n\t\twidth: 0.6rem;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\ttransform: translateY(25%);\n\t\ttransition: background-color 0.3s ease;\n\t}\n\t&.current::before,\n\t&:hover::before {\n\t\tbackground-color: var(--color-primary);\n\t}\n"]))),Nn=w.c.span(Hn||(Hn=Object(y.a)(["\n\tdisplay: none;\n\t@media (any-hover: hover) {\n\t\tbackground-color: var(--color-bg-3);\n\t\tborder-radius: 0.4rem;\n\t\tcolor: #fff;\n\t\tdisplay: inline-block;\n\t\tfont-size: 1.2rem;\n\t\tfont-weight: 500;\n\t\tpadding: 0.5rem 1.6rem;\n\t\ttext-align: center;\n\t\tposition: absolute;\n\t\tleft: 90%;\n\t\topacity: 0;\n\t\ttransition: opacity 0.2s ease;\n\t\t&::before {\n\t\t\tcontent: '';\n\t\t\tborder: 0.6rem solid transparent;\n\t\t\tborder-right-color: var(--color-bg-3);\n\t\t\tposition: absolute;\n\t\t\ttop: 0.6rem;\n\t\t\tright: 100%;\n\t\t}\n\t\t",":hover & {\n\t\t\topacity: 1;\n\t\t}\n\t}\n"])),Rn),Fn=w.c.nav(An||(An=Object(y.a)(["\n\tflex: 0 0 21rem;\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n"])));var Gn,Ln,Mn,Wn=function(){return Object(_.jsxs)(Fn,{children:[Object(_.jsxs)(Rn,{exact:!0,to:"/",activeClassName:"current","aria-label":"Items",children:[Object(_.jsx)(I.e,{size:24}),Object(_.jsx)(Nn,{children:"Items"})]}),Object(_.jsxs)(Rn,{exact:!0,to:"/history",activeClassName:"current","aria-label":"History",children:[Object(_.jsx)(I.g,{size:24}),Object(_.jsx)(Nn,{children:"History"})]}),Object(_.jsxs)(Rn,{exact:!0,to:"/statistics",activeClassName:"current","aria-label":"Statistics",children:[Object(_.jsx)(I.d,{size:24}),Object(_.jsx)(Nn,{children:"Statistics"})]})]})},Bn=e.p+"static/media/logo.eb09cb08.svg",Pn=w.c.aside(Gn||(Gn=Object(y.a)(["\n\tbackground-color: var(--color-bg-2);\n\theight: 100%;\n\tpadding: 2rem 0;\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\talign-items: center;\n\t@media (min-width: 56.25em) {\n\t\tpadding: 5.4rem 0 3.4rem;\n\t}\n"]))),Vn=w.c.img(Ln||(Ln=Object(y.a)(["\n\theight: 4rem;\n\twidth: 4em;\n"]))),Jn=w.c.button(Mn||(Mn=Object(y.a)(["\n\tbackground-color: var(--color-primary);\n\tborder: none;\n\tborder-radius: 50%;\n\tcursor: pointer;\n\theight: 4.2rem;\n\tpadding: 0;\n\twidth: 4.2rem;\n\tposition: relative;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tjustify-content: center;\n"])));var Xn=function(){var t=Object(d.b)();return Object(_.jsxs)(Pn,{children:[Object(_.jsx)(x.b,{to:"/","aria-label":"Go Home",children:Object(_.jsx)(Vn,{src:Bn,width:"40",height:"40"})}),Object(_.jsx)(Wn,{}),Object(_.jsx)(Jn,{onClick:function(){t({type:h.UI_TOGGLE_SIDEBAR_RIGHT})},children:Object(_.jsx)(I.i,{size:20,color:"#fff"})})]})};var Yn=function(){return Object(_.jsxs)("div",{className:"layout",children:[Object(_.jsx)(Xn,{}),Object(_.jsx)(Un,{})]})};var Qn=function(){return Object(_.jsx)("div",{className:"layout",children:Object(_.jsx)(Xn,{})})};var qn=function(){return Object(_.jsx)("div",{className:"layout",children:Object(_.jsx)(Xn,{})})};var Kn,Zn=function(){return Object(_.jsx)(x.a,{basename:"shopping-list",children:Object(_.jsx)("div",{className:"app",children:Object(_.jsxs)(v.d,{children:[Object(_.jsx)(v.b,{path:"/",exact:!0,children:Object(_.jsx)(Yn,{})}),Object(_.jsx)(v.b,{path:"/history",exact:!0,children:Object(_.jsx)(Qn,{})}),Object(_.jsx)(v.b,{path:"/statistics",exact:!0,children:Object(_.jsx)(qn,{})}),Object(_.jsx)(v.a,{to:"/"})]})})})},$n=Object(w.a)(Kn||(Kn=Object(y.a)(["\n  :root {\n    --color-bg: #121212;\n    --color-bg-2: #212121;\n    --color-bg-3: #424242;\n    --color-text: #fff;\n    --color-primary: #F9A109;\n    --color-secondary: #56CCF2;\n  }\n  html {\n    box-sizing: border-box;\n    font-size: 62.5%;\n    height: 100%;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n  body {\n    background-color: var(--color-bg);\n    color: var(--color-text);\n    font-size: 1.6rem;\n    font-family: 'Quicksand', sans-serif;\n    line-height: 1.4;\n    height: 100%;\n    margin: 0;\n  }\n  a {\n    text-decoration: none;\n  }\n  ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n  #root {\n    height: 100%;\n  }\n  .app {\n    height: 100%;\n    overflow: hidden;\n  }\n  .layout {\n    height: 100%;\n    display: grid;\n    grid-template-columns: 6.2rem 1fr;\n    @media (min-width: 56.25em) {\n      grid-template-columns: 9.4rem 1fr;\n\t  }\n  }\n  @media (any-hover: hover) {\n    ::-webkit-scrollbar {\n      width: 0.4rem;\n    }\n    ::-webkit-scrollbar-track {\n      background-color: var(--color-bg-2);\n    }\n    ::-webkit-scrollbar-thumb {\n      background-color: var(--color-primary);\n      border-radius: 0.4rem;\n    }\n  }\n"])));var te=function(){return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)(d.a,{store:p,children:[Object(_.jsx)($n,{}),Object(_.jsx)(Zn,{})]})})},ne=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,60)).then((function(n){var e=n.getCLS,r=n.getFID,i=n.getFCP,o=n.getLCP,c=n.getTTFB;e(t),r(t),i(t),o(t),c(t)}))};l.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(te,{})}),document.getElementById("root")),ne()}},[[59,1,2]]]);
//# sourceMappingURL=main.562f568b.chunk.js.map