(this.webpackJsonpshoppingify=this.webpackJsonpshoppingify||[]).push([[1],{101:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(12),c=function(t){return Object(r.a)(Array.from(new Set(t)))}},104:function(t,e,n){"use strict";var r,c,a=n(7),i=n(20),o=n(8),s=n(67),u=n(14),l=n(65),d=n.p+"static/media/source.d2e572da.svg",b=n(3),m=o.c.div(r||(r=Object(a.a)(["\n\t","\n"])),s.e),j=o.c.div(c||(c=Object(a.a)(["\n\tbackground: #80485b url(",") left top -0.5rem / contain no-repeat;\n\tborder-radius: 2.4rem;\n\tpadding: 1.8rem 2.8rem;\n\tdisplay: grid;\n\tgrid-template-columns: 5rem 1fr;\n\tgap: 2rem;\n\t> div {\n\t\tgrid-column: 2;\n\t}\n\tp {\n\t\tfont-size: 1.6rem;\n\t\tfont-weight: 700;\n\t\tmargin: 0 0 1.2rem;\n\t}\n"])),d);var f,p=function(){var t=Object(i.b)();return Object(b.jsx)(m,{children:Object(b.jsx)(j,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Didn't find what you need?"}),Object(b.jsx)(l.a,{onClick:function(){t(Object(u.f)())},color:"black",children:"Add Item"})]})})})},O=n.p+"static/media/shopping.2b324963.svg",g=o.c.div(f||(f=Object(a.a)(["\n\tflex: 1;\n\tpadding-top: 4rem;\n\tdisplay: flex;\n\tjustify-content: center;\n\tbackground: url(",") center bottom 4rem / 24.5rem 20rem no-repeat;\n\t@media (min-width: 56.25em) {\n\t\tpadding-top: 0;\n\t\talign-items: center;\n\t}\n\n\tp {\n\t\tfont-size: 2rem;\n\t\tfont-weight: 700;\n\t\tmargin: 0;\n\t\t@media (min-width: 56.25em) {\n\t\t\tmargin-top: -22rem;\n\t\t}\n\t}\n"])),O);var h,x=function(){return Object(b.jsx)(g,{children:Object(b.jsx)("p",{children:"No items"})})},v=n(63),y=n(66),w=n(101),k=n(70),C=n(0),E=o.c.label(h||(h=Object(a.a)(["\n\tcursor: pointer;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tinput {\n\t\tdisplay: none;\n\t}\n\t.square {\n\t\tgrid-column: 1;\n\t\tgrid-row: 1;\n\t\tborder: 2px solid var(--color-primary);\n\t\tborder-radius: 0.4rem;\n\t\tdisplay: inline-block;\n\t\theight: 2.4rem;\n\t\twidth: 2.4rem;\n\t\ttransition: background-color 0.3s ease;\n\t}\n\tinput:checked ~ .square {\n\t\tbackground-color: var(--color-primary);\n\t}\n\t.check {\n\t\talign-self: center;\n\t\tjustify-self: center;\n\t\tgrid-column: 1;\n\t\tgrid-row: 1;\n\t\topacity: 0;\n\t\ttransition: opacity 0.3s ease;\n\t}\n\tinput:checked ~ .check {\n\t\topacity: 1;\n\t}\n"])));var _,T,S=function(t){var e=t.checked,n=Object(C.useState)(e),r=Object(k.a)(n,2),c=r[0],a=r[1];return Object(b.jsxs)(E,{children:[Object(b.jsx)("input",{type:"checkbox",checked:c,onChange:function(t){return a(t.currentTarget.checked)}}),Object(b.jsx)("span",{className:"square"}),Object(b.jsx)(v.c,{className:"check",size:20,color:"#fff"})]})},I=o.c.span(_||(_=Object(a.a)(["\n\tborder: 2px solid var(--color-primary);\n\tborder-radius: 2.4rem;\n\tcursor: default;\n\twidth: 6.8rem;\n\theight: 3.2rem;\n\tfont-size: 1.2rem;\n\tfont-weight: 700;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tjustify-content: center;\n"]))),z=o.c.li(T||(T=Object(a.a)(["\n\tfont-size: 1.4rem;\n\tdisplay: grid;\n\tgrid-template-columns: 2.4rem 1fr 6.8rem;\n\tgap: 1.6rem;\n\talign-items: center;\n\t&:not(:last-of-type) {\n\t\tmargin-bottom: 2.4rem;\n\t}\n"])));var A,N,P,D,R=function(t){var e=t.item;return Object(b.jsxs)(z,{children:[Object(b.jsx)(S,{checked:e.completed}),e.name,Object(b.jsxs)(I,{children:[e.quantity," pcs"]})]})},L=o.c.button(A||(A=Object(a.a)(["\n\tbackground-color: var(--color-primary);\n\tborder: none;\n\tborder-radius: 1.2rem;\n\tcursor: pointer;\n\theight: 100%;\n\tmargin: 0;\n\tpadding: 0;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tjustify-content: center;\n"]))),G=o.c.div(N||(N=Object(a.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: 1.6rem 1fr 1.6rem;\n\tgap: 0.9rem;\n"]))),q=o.c.button(P||(P=Object(a.a)(["\n\tbackground: none;\n\tborder: none;\n\tcolor: var(--color-primary);\n\tcursor: pointer;\n\tmargin: 0;\n\tpadding: 0;\n"])));function H(t){var e=t.id,n=t.quantity,r=Object(i.b)();return Object(b.jsxs)(G,{children:[Object(b.jsx)(q,{type:"button",title:"-1",children:Object(b.jsx)(v.l,{size:16,color:"currentColor",onClick:function(){var t=n-1;r(0===t?Object(y.d)(e):Object(y.e)(e,t))}})}),Object(b.jsxs)(I,{children:[n," pcs"]}),Object(b.jsx)(q,{type:"button",title:"+1",children:Object(b.jsx)(v.a,{size:16,color:"currentColor",onClick:function(){return r(Object(y.e)(e,n+1))}})})]})}var M=o.c.div(D||(D=Object(a.a)(["\n\tbackground-color: var(--color-bg-3);\n\tborder-radius: 1.2rem;\n\theight: 4.5rem;\n\tpadding-right: 0.8rem;\n\tdisplay: grid;\n\tgrid-template-columns: 3.8rem 1fr;\n\tgap: 1.2rem;\n\talign-items: center;\n"])));var F,V=function(t){var e=t.quantity,n=t.id,r=Object(i.b)();return Object(b.jsxs)(M,{children:[Object(b.jsx)(L,{type:"button",title:"Remove item from list",onClick:function(){r(Object(y.d)(n))},children:Object(b.jsx)(v.g,{size:24,color:"#fff"})}),Object(b.jsx)(H,{id:n,quantity:e})]})},Y=Object(o.c)(z)(F||(F=Object(a.a)(["\n\tgrid-template-columns: 1fr 17.4rem;\n"])));var U=function(t){var e=t.item;return Object(b.jsxs)(Y,{children:[e.name,Object(b.jsx)(V,{id:e.item,quantity:e.quantity})]})};var B,J,W=function(t){var e=t.items;return Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)(U,{item:t},t.item)}))})},Q=o.c.section(B||(B=Object(a.a)(["\n\tmargin-bottom: 2.5rem;\n"]))),X=o.c.h4(J||(J=Object(a.a)(["\n\tfont-size: 1.4rem;\n\tfont-weight: 500;\n\tmargin: 0 0 2rem 0;\n\topacity: 0.79;\n"])));var K,Z,$,tt=function(t){var e=t.category,n=t.items,r=Object(i.c)((function(t){return t.cart})).isEditMode;return Object(b.jsxs)(Q,{children:[Object(b.jsx)(X,{children:e}),r?Object(b.jsx)(W,{items:n}):Object(b.jsx)("ul",{children:n.map((function(t){return Object(b.jsx)(R,{item:t},t._id)}))})]})},et=o.c.h3(K||(K=Object(a.a)(["\n\tfont-size: 2.4rem;\n\tmargin: 0;\n"]))),nt=o.c.button.attrs((function(){return{type:"button"}}))(Z||(Z=Object(a.a)(["\n\tbackground: none;\n\tborder: none;\n\tcolor: #fff;\n\tcursor: pointer;\n\tmargin: 0;\n\tpadding: 0;\n\topacity: 0.79;\n"]))),rt=n(107),ct=n(32),at=o.c.div($||($=Object(a.a)(["\n\t",";\n\ttext-align: center;\n\t@media (min-width: 37.5em) {\n\t\ttext-align: right;\n\t}\n\t@media (min-width: 56.25em) {\n\t\ttext-align: center;\n\t}\n\t",":first-child {\n\t\tmargin-right: 2rem;\n\t}\n"])),s.d,l.a);var it,ot=function(){var t=Object(i.b)(),e=Object(i.c)((function(t){return t.ui})),n=Object(i.c)((function(t){return t.cart})),r=n.cart,c=n.isLoading;return Object(b.jsxs)(at,{children:[Object(b.jsx)(l.a,{disabled:c,type:"button",onClick:function(){t(Object(u.d)())},children:c?Object(b.jsx)(ct.a,{center:!0,size:"sm"}):"cancel"}),Object(b.jsx)(l.a,{disabled:c,type:"button",color:"secondary",onClick:function(){t(Object(y.g)(r._id))},children:c?Object(b.jsx)(ct.a,{center:!0,size:"sm"}):"Complete"}),Object(b.jsx)(rt.a,{title:"Are you sure that you want to cancel this list?",isOpen:e.isDialogOpen,onClose:function(){return t(Object(u.a)())},onConfirm:function(){t(Object(y.f)(r._id))}})]})},st=o.c.div(it||(it=Object(a.a)(["\n\tflex: 1;\n\tmargin-top: 3.2rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\t",";\n\t.content {\n\t\t","\n\t\tflex: 1;\n\t}\n"])),s.b,s.e);var ut,lt,dt,bt=function(){var t=Object(i.b)(),e=Object(i.c)((function(t){return t.cart})).cart,n=Object(w.a)(e.items.map((function(t){return t.category})));return Object(b.jsxs)(st,{children:[Object(b.jsxs)("div",{className:"content",children:[Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)(et,{children:e.name}),Object(b.jsx)(nt,{onClick:function(){return t(Object(y.b)())},title:"Edit Cart",children:Object(b.jsx)(v.h,{size:24,color:"currentColor"})})]}),n.map((function(t){return Object(b.jsx)(tt,{category:t,items:e.items.filter((function(e){return e.category===t}))},t)}))]}),Object(b.jsx)(ot,{})]})},mt=n(1),jt=o.c.form(ut||(ut=Object(a.a)(["\n\t",";\n"])),s.d),ft=o.c.div(lt||(lt=Object(a.a)(["\n\tborder: 2px solid var(--color-primary);\n\tborder-radius: 1.2rem;\n\theight: 6rem;\n\toverflow: hidden;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 9rem;\n"]))),pt=o.c.input(dt||(dt=Object(a.a)(["\n\tbackground: none;\n\tborder: none;\n\tcolor: #fff;\n\tfont-family: inherit;\n\tfont-size: 1.6rem;\n\tpadding: 1rem;\n\twidth: 100%;\n\t&:focus {\n\t\toutline: none;\n\t}\n"])));var Ot=function(){var t=Object(i.c)((function(t){return t.cart})).unsavedCart,e=Object(i.b)(),n=Object(C.useState)(t.name),r=Object(k.a)(n,2),c=r[0],a=r[1];return Object(b.jsx)(jt,{onSubmit:function(n){if(n.preventDefault(),!(c.length<3)){var r=Object(mt.a)(Object(mt.a)({},t),{},{name:c});if(!t._id)return e(Object(y.j)(r));e(Object(y.k)(r))}},children:Object(b.jsxs)(ft,{children:[Object(b.jsx)(pt,{type:"text",value:c,onChange:function(t){var e=t.currentTarget;return a(e.value)}}),Object(b.jsx)(l.a,{disabled:c.length<3,size:"lg",roundedLeft:!0,type:"submit",color:"primary",children:t._id?"Update":"Save"})]})})};var gt,ht=function(){var t=Object(i.b)(),e=Object(i.c)((function(t){return t.ui})),n=Object(i.c)((function(t){return t.cart})).unsavedCart,r=Object(w.a)(n.items.map((function(t){return t.category}))),c=function(){return t(Object(u.a)())};return Object(b.jsxs)(st,{children:[Object(b.jsxs)("div",{className:"content",children:[Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)(et,{children:n.name}),Object(b.jsx)(nt,{title:"Discard changes",onClick:function(){t(Object(u.d)())},children:Object(b.jsx)(v.e,{size:24,color:"currentColor"})})]}),r.map((function(t){return Object(b.jsx)(tt,{category:t,items:n.items.filter((function(e){return e.category===t}))},t)}))]}),Object(b.jsx)(Ot,{}),Object(b.jsx)(rt.a,{title:"Are you sure you want to exit the edit mode? All changes made will be discarded",isOpen:e.isDialogOpen,onClose:c,onConfirm:function(){c(),t(Object(y.c)())}})]})},xt=o.c.aside(gt||(gt=Object(a.a)(["\n\t","\n\tdisplay: flex;\n\tflex-direction: column;\n\t.loader {\n\t\tflex: 1;\n\t\tmargin-top: 6rem;\n\t}\n"])),s.f);e.a=function(){var t=Object(i.c)((function(t){return t.ui})),e=Object(i.c)((function(t){return t.cart})),n=e.isLoading,r=e.isEditMode,c=e.cart,a=e.unsavedCart;return Object(b.jsxs)(xt,{className:t.showSidebarRight?"show":"",children:[Object(b.jsx)(p,{}),n?Object(b.jsx)("div",{className:"loader",children:Object(b.jsx)(ct.a,{center:!0,size:"lg"})}):0===c.items.length&&0===a.items.length?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(x,{})}):r?Object(b.jsx)(ht,{}):Object(b.jsx)(bt,{})]})}},105:function(t,e,n){"use strict";var r,c,a,i=n(7),o=n(16),s=n(8),u=n(63),l=Object(s.c)(o.c)(r||(r=Object(i.a)(["\n\tflex: 1;\n\tcolor: #fff;\n\ttext-align: center;\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\t&::before {\n\t\tcontent: '';\n\t\tbackground-color: transparent;\n\t\tborder-radius: 0 0.4rem 0.4rem 0;\n\t\theight: 4.6rem;\n\t\twidth: 0.6rem;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\ttransform: translateY(25%);\n\t\ttransition: background-color 0.3s ease;\n\t}\n\t&.current::before,\n\t&:hover::before {\n\t\tbackground-color: var(--color-primary);\n\t}\n"]))),d=s.c.span(c||(c=Object(i.a)(["\n\tdisplay: none;\n\t@media (any-hover: hover) {\n\t\tbackground-color: var(--color-bg-3);\n\t\tborder-radius: 0.4rem;\n\t\tcolor: #fff;\n\t\tdisplay: inline-block;\n\t\tfont-size: 1.2rem;\n\t\tfont-weight: 500;\n\t\tpadding: 0.5rem 1.6rem;\n\t\ttext-align: center;\n\t\tposition: absolute;\n\t\tleft: 90%;\n\t\topacity: 0;\n\t\ttransition: opacity 0.2s ease;\n\t\t&::before {\n\t\t\tcontent: '';\n\t\t\tborder: 0.6rem solid transparent;\n\t\t\tborder-right-color: var(--color-bg-3);\n\t\t\tposition: absolute;\n\t\t\ttop: 0.6rem;\n\t\t\tright: 100%;\n\t\t}\n\t\t",":hover & {\n\t\t\topacity: 1;\n\t\t}\n\t}\n"])),l),b=n(3),m=s.c.nav(a||(a=Object(i.a)(["\n\tflex: 0 0 21rem;\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n"])));var j,f,p,O=function(){return Object(b.jsxs)(m,{children:[Object(b.jsxs)(l,{exact:!0,to:"/",activeClassName:"current","aria-label":"Items",children:[Object(b.jsx)(u.k,{size:24}),Object(b.jsx)(d,{children:"Items"})]}),Object(b.jsxs)(l,{exact:!0,to:"/history",activeClassName:"current","aria-label":"History",children:[Object(b.jsx)(u.m,{size:24}),Object(b.jsx)(d,{children:"History"})]}),Object(b.jsxs)(l,{exact:!0,to:"/statistics",activeClassName:"current","aria-label":"Statistics",children:[Object(b.jsx)(u.j,{size:24}),Object(b.jsx)(d,{children:"Statistics"})]})]})},g=n.p+"static/media/logo.eb09cb08.svg",h=n(20),x=n(14),v=s.c.aside(j||(j=Object(i.a)(["\n\tbackground-color: var(--color-bg-2);\n\theight: 100%;\n\tpadding: 2rem 0;\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\talign-items: center;\n\t@media (min-width: 56.25em) {\n\t\tpadding: 5.4rem 0 3.4rem;\n\t}\n"]))),y=s.c.img(f||(f=Object(i.a)(["\n\theight: 4rem;\n\twidth: 4em;\n"]))),w=s.c.button(p||(p=Object(i.a)(["\n\tbackground-color: var(--color-primary);\n\tborder: none;\n\tborder-radius: 50%;\n\tcursor: pointer;\n\theight: 4.2rem;\n\tpadding: 0;\n\twidth: 4.2rem;\n\tposition: relative;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tjustify-content: center;\n"])));e.a=function(){var t=Object(h.b)();return Object(b.jsxs)(v,{children:[Object(b.jsx)(o.b,{to:"/","aria-label":"Go Home",children:Object(b.jsx)(y,{src:g,width:"40",height:"40"})}),Object(b.jsx)(O,{}),Object(b.jsx)(w,{onClick:function(){t(Object(x.h)())},children:Object(b.jsx)(u.o,{size:20,color:"#fff"})})]})}},106:function(t,e,n){"use strict";var r=n(70),c=n(7),a=n(0),i=n(20),o=n(8),s=n(67),u=n(1),l=n(102),d=n(103),b=n(14),m=n(73),j=n(65),f=n(78),p=n(12),O=n(246),g=n(3),h=function(t){return{label:t,value:t.toLowerCase().replace(/\W/g,"")}};var x,v,y=function(t){var e=t.value,n=t.options,c=t.onChange,o=Object(i.b)(),s=Object(i.c)((function(t){return t.auth})).uid,l=Object(a.useState)({isLoading:!1,options:n.map((function(t){return h(t)})),value:e?h(e):null}),d=Object(r.a)(l,2),b=d[0],j=d[1];Object(a.useEffect)((function(){!e&&b.value&&j((function(t){return Object(u.a)(Object(u.a)({},t),{},{value:null})}))}),[e,b.value]);var f={control:function(t,e){var n=e.isFocused;return Object(u.a)(Object(u.a)({},t),{},{background:"none",border:"1px solid ".concat(n?"var(--color-primary)":"#bdbdbd"),borderRadius:"1.2rem",boxShadow:"none",color:"#fff",padding:"1rem",transition:"border-color 0.3s ease","&:hover":{borderColor:"".concat(n&&"var(--color-primary)")}})},input:function(t){return Object(u.a)(Object(u.a)({},t),{},{color:"#fff",fontFamily:"inherit",fontSize:"1.6rem"})},singleValue:function(t){return Object(u.a)(Object(u.a)({},t),{},{color:"#fff"})},menu:function(t){return Object(u.a)(Object(u.a)({},t),{},{backgroundColor:"var(--color-bg-3)",borderRadius:"1.2rem"})},option:function(t,e){var n=e.isSelected;return Object(u.a)(Object(u.a)({},t),{},{backgroundColor:"".concat(n&&"var(--color-bg-2)"),":active":{backgroundColor:"var(--color-bg-2)"},"&:hover":{backgroundColor:"var(--color-bg-2)"}})}};return Object(g.jsx)(O.a,{id:"category",name:"selectText",isClearable:!0,isDisabled:b.isLoading,isLoading:b.isLoading,onCreateOption:function(t){j(Object(u.a)(Object(u.a)({},b),{},{isLoading:!0}));var e=h(t);o(Object(m.a)({category:e.label,lowercase:e.value,user:s},(function(){j({isLoading:!1,options:[].concat(Object(p.a)(b.options),[e]),value:e})})))},onChange:function(t,e){console.group("Value Changed"),console.log(t),console.log("action: ".concat(e.action)),console.groupEnd(),c((null===t||void 0===t?void 0:t.label)||""),j(Object(u.a)(Object(u.a)({},b),{},{value:t}))},options:b.options,value:b.value,styles:f})},w=n(32),k=o.c.form(x||(x=Object(c.a)(["\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n"]))),C=o.c.div(v||(v=Object(c.a)(["\n\tpadding: 1rem 0;\n\ttext-align: center;\n\t@media (min-width: 37.5em) {\n\t\ttext-align: right;\n\t}\n\t@media (min-width: 56.25em) {\n\t\ttext-align: center;\n\n\t\tpadding: 3rem 0;\n\t}\n\t",":first-child {\n\t\tmargin-right: 2rem;\n\t}\n"])),j.a),E={name:"",note:"",image:"",category:""},_=d.a().shape({name:d.b().required("The item name is required"),note:d.b(),image:d.b().url("A valid image url is required"),category:d.b().required("The item category is required"),user:d.b().required("The user id is required")});var T,S,I=function(t){var e=t.item,n=Object(i.c)((function(t){return t.ui})).isLoading,r=Object(i.c)((function(t){return t.auth})).uid,c=Object(i.c)((function(t){return t.shopping})).categories,a=Object(i.b)(),o=Object(l.a)({initialValues:e||Object(u.a)(Object(u.a)({},E),{},{user:r}),validationSchema:_,onSubmit:function(t){a(e?Object(m.h)(t,(function(){s()})):Object(m.b)(t,(function(){o.resetForm()})))}}),s=function(){a(Object(m.e)()),a(Object(b.b)())};return Object(g.jsxs)(k,{autoComplete:"off",onSubmit:o.handleSubmit,children:[Object(g.jsxs)("div",{children:[Object(g.jsxs)(f.a,{children:[Object(g.jsx)("label",{htmlFor:"name",children:"Name"}),Object(g.jsx)("input",{onChange:o.handleChange,value:o.values.name,type:"text",id:"name",name:"name",placeholder:"Enter a name"}),o.errors.name&&o.touched.name?Object(g.jsx)("div",{className:"error",children:o.errors.name}):null]}),Object(g.jsxs)(f.a,{children:[Object(g.jsx)("label",{htmlFor:"note",children:"Note (optional)"}),Object(g.jsx)("textarea",{onChange:o.handleChange,value:o.values.note,id:"note",name:"note",placeholder:"Enter a note"})]}),Object(g.jsxs)(f.a,{children:[Object(g.jsx)("label",{htmlFor:"image",children:"Image"}),Object(g.jsx)("input",{onChange:o.handleChange,value:o.values.image,type:"text",id:"image",name:"image",placeholder:"Enter an image url"}),o.errors.image&&o.touched.image?Object(g.jsx)("div",{className:"error",children:o.errors.image}):null]}),Object(g.jsxs)(f.a,{children:[Object(g.jsx)("label",{htmlFor:"category",children:"Category"}),Object(g.jsx)(y,{value:o.values.category,options:c.map((function(t){return t.category})),onChange:function(t){o.setFieldValue("category",t)}}),o.errors.category&&o.touched.category?Object(g.jsx)("div",{className:"error",children:o.errors.category}):null]})]}),Object(g.jsxs)(C,{children:[Object(g.jsx)(j.a,{onClick:s,size:"lg",children:"cancel"}),Object(g.jsx)(j.a,{disabled:n,size:"lg",type:"submit",color:"primary",children:n?Object(g.jsx)(w.a,{size:"sm",center:!0}):"Save"})]})]})},z=n(33),A=o.c.div(T||(T=Object(c.a)(["\n\t",";\n\t",";\n\tdisplay: flex;\n\tflex-direction: column;\n\tanimation: ","\n\t\t0.4s ease forwards;\n\t@media (min-width: 56.25em) {\n\t\tpadding-top: 3.4rem;\n\t\tanimation: "," 0.4s\n\t\t\tease forwards;\n\t}\n\t> * {\n\t\tflex-shrink: 0;\n\t}\n"])),s.f,s.e,(function(t){return t.show?z.b:z.a}),(function(t){return t.show?z.c:z.e})),N=o.c.h2(S||(S=Object(c.a)(["\n\tfont-size: 2.4rem;\n\tfont-weight: 500;\n\tmargin-top: 0;\n\tmargin-bottom: 3rem;\n"])));e.a=function(t){var e=t.show,n=Object(a.useState)(e),c=Object(r.a)(n,2),o=c[0],s=c[1],u=Object(i.c)((function(t){return t.shopping})).currentItem;return Object(a.useEffect)((function(){e&&s(!0)}),[e]),o?Object(g.jsxs)(A,{onAnimationEnd:function(){e||s(!1)},show:e,children:[Object(g.jsx)(N,{children:u?"Edit Item":"Add a new Item"}),Object(g.jsx)(I,{item:u})]}):null}},107:function(t,e,n){"use strict";var r,c,a,i=n(7),o=n(8),s=n(70),u=n(0),l=n(17),d=n.n(l),b=n(63),m=n(33),j=n(3),f=o.c.div(r||(r=Object(i.a)(["\n\tbackground-color: rgba(0, 0, 0, 0.4);\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tdisplay: flex;\n\talign-items: flex-start;\n"]))),p=o.c.div(c||(c=Object(i.a)(["\n\tbackground-color: var(--color-bg-3);\n\tborder-radius: 2.4rem;\n\tmargin: 2rem;\n\tmax-width: 50rem;\n\toverflow-y: auto;\n\tpadding: 2.5rem;\n\tposition: relative;\n\twidth: 100%;\n\tanimation: "," 0.3s ease-in;\n\t@media (orientation: landscape), (min-width: 37.5em) {\n\t\tmargin-right: auto;\n\t\tmargin-left: auto;\n\t}\n"])),(function(t){return t.show?m.d:m.f})),O=o.c.button.attrs((function(){return{type:"button",title:"Close"}}))(a||(a=Object(i.a)(["\n\tbackground: none;\n\tborder: none;\n\tcursor: pointer;\n\tcolor: #fff;\n\tmargin: 0;\n\topacity: 0.79;\n\tpadding: 0;\n\tposition: absolute;\n\ttop: 1rem;\n\tright: 1rem;\n"])));var g,h,x=function(t){var e=t.isOpen,n=t.onClose,r=t.children,c=Object(u.useState)(e),a=Object(s.a)(c,2),i=a[0],o=a[1];Object(u.useEffect)((function(){e&&o(!0)}),[e]);var l=i?Object(j.jsx)(f,{onClick:n,children:Object(j.jsxs)(p,{onAnimationEnd:function(){e||o(!1)},onClick:function(t){return t.stopPropagation()},show:e,children:[Object(j.jsx)(O,{onClick:n,children:Object(j.jsx)(b.f,{size:24,color:"currentColor"})}),r]})}):null;return d.a.createPortal(l,document.getElementById("modal-root"))},v=n(65),y=o.c.h2(g||(g=Object(i.a)(["\n\tfont-size: 2rem;\n\tfont-weight: 500;\n\tmargin-top: 1rem;\n\tmargin-bottom: 3rem;\n\t@media (min-width: 56.25em) {\n\t\tfont-size: 2.4rem;\n\t}\n"]))),w=o.c.div(h||(h=Object(i.a)(["\n\ttext-align: right;\n\t",":first-child {\n\t\tmargin-right: 2rem;\n\t}\n"])),v.a);e.a=function(t){var e=t.isOpen,n=t.title,r=t.onClose,c=t.onConfirm;return Object(j.jsxs)(x,{isOpen:e,onClose:r,children:[Object(j.jsx)(y,{children:n}),Object(j.jsxs)(w,{children:[Object(j.jsx)(v.a,{size:"lg",onClick:r,children:"cancel"}),Object(j.jsx)(v.a,{size:"lg",color:"danger",onClick:c,children:"Yes"})]})]})}},65:function(t,e,n){"use strict";var r,c=n(7),a=n(8),i={primary:"var(--color-primary)",secondary:"var(--color-secondary)",danger:"var(--color-danger)",black:"var(--color-bg)"},o=a.c.button.attrs((function(t){return{type:t.type||"button"}}))(r||(r=Object(c.a)(["\n\tbackground-color: ",";\n\tborder: none;\n\tborder-radius: ",";\n\tbox-shadow: 0px 0.2rem 1.2rem rgba(0, 0, 0, 0.04);\n\tcolor: ",";\n\tcursor: pointer;\n\tfont-family: inherit;\n\tfont-size: ",";\n\tfont-weight: 700;\n\tpadding: 1.1rem 2rem;\n\ttext-align: center;\n\twidth: ",";\n\t&:disabled {\n\t\tcursor: not-allowed;\n\t\topacity: 0.6;\n\t}\n"])),(function(t){var e=t.color;return e?i[e]:"transparent"}),(function(t){return t.roundedLeft?"1.2rem 0 0 1.2rem":"1.2rem"}),(function(t){return"primary"===t.color?"#000":"#fff"}),(function(t){return"lg"===t.size?"1.6rem":"1.4rem"}),(function(t){return t.full?"100%":null}));e.a=o},66:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return b})),n.d(e,"h",(function(){return m})),n.d(e,"a",(function(){return f})),n.d(e,"e",(function(){return p})),n.d(e,"j",(function(){return O})),n.d(e,"k",(function(){return g})),n.d(e,"d",(function(){return v})),n.d(e,"f",(function(){return y})),n.d(e,"g",(function(){return k})),n.d(e,"i",(function(){return _}));var r=n(15),c=n.n(r),a=n(23),i=n(25),o=n(2),s=n(14),u=n(24),l=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return{type:o.a.CART_SET_LOADING,payload:t}},d=function(){return{type:o.a.CART_ENABLE_EDIT_MODE}},b=function(){return{type:o.a.CART_EXIT_EDIT_MODE}},m=function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n,r){var a,o,s,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r().auth.uid,n(l()),o=t?"cart/".concat(t):"cart",e.prev=3,e.next=6,Object(u.a)(o);case 6:return s=e.sent,e.next=9,s.json();case 9:if((d=e.sent).success){e.next=12;break}return e.abrupt("return",n(j({user:a})));case 12:n(j({cart:d.cart})),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(3),i.b.error(e.t0.message),n(j({user:a}));case 19:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t,n){return e.apply(this,arguments)}}()},j=function(t){return{type:o.a.CART_GET,payload:t}},f=function(t){return{type:o.a.CART_ADD_ITEM,payload:t}},p=function(t,e){return{type:o.a.CART_SET_ITEM_QUANTITY,payload:{id:t,quantity:e}}},O=function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(l()),e.prev=1,e.next=4,Object(u.a)("cart",t,"POST");case 4:return r=e.sent,e.next=7,r.json();case 7:if((a=e.sent).success){e.next=10;break}throw new Error(a.msg);case 10:n(h(a.cart)),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),i.b.error(e.t0.message),n(x(t));case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}()},g=function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(l()),r="cart/".concat(t._id),e.prev=2,e.next=5,Object(u.a)(r,t,"PUT");case 5:return a=e.sent,e.next=8,a.json();case 8:if((o=e.sent).success){e.next=11;break}throw new Error(o.msg);case 11:n(h(o.cart)),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),i.b.error(e.t0.message),n(x(t));case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}()},h=function(t){return{type:o.a.CART_SAVE,payload:t}},x=function(t){return{type:o.a.CART_SAVE_ERROR,payload:t}},v=function(t){return{type:o.a.CART_REMOVE_ITEM,payload:t}},y=function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(l()),r="cart/".concat(t,"/cancel"),e.prev=2,e.next=5,Object(u.a)(r,{},"DELETE");case 5:return a=e.sent,e.next=8,a.json();case 8:if((o=e.sent).success){e.next=11;break}throw new Error(o.msg);case 11:n(w(o.history)),i.b.success("Your cart has been cancelled"),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),i.b.error(e.t0.message),n(l(!1));case 19:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}()},w=function(t){return{type:o.a.CART_CANCEL,payload:t}},k=function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(l()),r="cart/".concat(t,"/complete"),e.prev=2,e.next=5,Object(u.a)(r,{},"DELETE");case 5:return a=e.sent,e.next=8,a.json();case 8:if((o=e.sent).success){e.next=11;break}throw new Error(o.msg);case 11:n(C(o.history)),i.b.success("Congratulations, you have completed your shopping cart!"),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),i.b.error(e.t0.message),n(l(!1));case 19:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}()},C=function(t){return{type:o.a.CART_COMPLETE,payload:t}},E=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return{type:o.a.HISTORY_SET_LOADING,payload:t}},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return function(){var n=Object(a.a)(c.a.mark((function n(r,a){var o,l,d,b;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=a().auth.uid,l="history/".concat(o,"?offset=").concat(t,"&limit=").concat(e),r(Object(s.e)()),n.prev=3,n.next=6,Object(u.a)(l);case 6:return d=n.sent,n.next=9,d.json();case 9:if((b=n.sent).success){n.next=12;break}throw new Error(b.msg);case 12:r(Object(s.i)()),r(T({total:b.total,history:b.history})),n.next=21;break;case 16:n.prev=16,n.t0=n.catch(3),i.b.error(n.t0.message),r(Object(s.i)()),r(E(!1));case 21:case"end":return n.stop()}}),n,null,[[3,16]])})));return function(t,e){return n.apply(this,arguments)}}()},T=function(t){return{type:o.a.HISTORY_GET,payload:t}}},67:function(t,e,n){"use strict";n.d(e,"f",(function(){return d})),n.d(e,"e",(function(){return b})),n.d(e,"d",(function(){return m})),n.d(e,"b",(function(){return j})),n.d(e,"c",(function(){return f})),n.d(e,"a",(function(){return p}));var r,c,a,i,o,s,u=n(7),l=n(8),d=Object(l.b)(r||(r=Object(u.a)(["\n\tgrid-column: 2;\n\tgrid-row: 1;\n\tbackground-color: var(--color-bg-2);\n\theight: 100%;\n\twidth: 100%;\n\toverflow-y: auto;\n\ttransition: transform 0.4s ease;\n\t@media (max-width: 56.24em) {\n\t\t&.show {\n\t\t\ttransform: translate3d(-100%, 0, 0);\n\t\t}\n\t}\n"]))),b=Object(l.b)(c||(c=Object(u.a)(["\n\tpadding: 2.5rem 1.4rem 0 2rem;\n\t@media (min-width: 56.25em) {\n\t\tpadding: 4.2rem 3.2rem 0 4.8rem;\n\t}\n"]))),m=Object(l.b)(a||(a=Object(u.a)(["\n\tbackground-color: var(--color-bg-3);\n\theight: 9.4rem;\n\tmargin-top: 2.5rem;\n\tpadding: 1.8rem 1.4rem 1.4rem 2rem;\n"]))),j=Object(l.b)(i||(i=Object(u.a)(["\n\t.header {\n\t\tmargin-top: 0;\n\t\tmargin-bottom: 3.5rem;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: space-between;\n\t}\n"]))),f=Object(l.b)(o||(o=Object(u.a)(["\n\toverflow-y: auto;\n\tpadding: 2rem 2rem 0;\n\t.headline {\n\t\tfont-size: 2.6rem;\n\t\tmargin: 0 0 4rem;\n\t}\n\t@media (min-width: 75em) {\n\t\tmargin-top: 3rem;\n\t\tpadding: 0 9rem 1rem 8rem;\n\t}\n"]))),p=Object(l.b)(s||(s=Object(u.a)(["\n\tbackground-color: var(--color-bg-3);\n\tborder-radius: 1.2rem;\n\tcursor: default;\n\tpadding: 1.2rem 1.6rem;\n"])))},73:function(t,e,n){"use strict";n.d(e,"c",(function(){return b})),n.d(e,"a",(function(){return j})),n.d(e,"d",(function(){return p})),n.d(e,"b",(function(){return g})),n.d(e,"f",(function(){return x})),n.d(e,"e",(function(){return v})),n.d(e,"h",(function(){return y})),n.d(e,"g",(function(){return k}));var r=n(22),c=n(15),a=n.n(c),i=n(23),o=n(25),s=n(2),u=n(24),l=n(14),d=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return{type:s.a.SHOPPING_SET_CATEGORIES_LOADING,payload:t}},b=function(){return function(){var t=Object(i.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(u.a)("categories");case 3:return n=t.sent,t.next=6,n.json();case 6:if((r=t.sent).success){t.next=9;break}throw new Error(r.msg);case 9:e(m(r.categories)),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),e(d(!1)),o.b.error(t.t0.message);case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},m=function(t){return{type:s.a.SHOPPING_SAVE_CATEGORIES,payload:t}},j=function(t,e){return function(){var n=Object(i.a)(a.a.mark((function n(r){var c,i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(u.a)("categories",t,"POST");case 3:return c=n.sent,n.next=6,c.json();case 6:if((i=n.sent).success){n.next=9;break}throw new Error(i.msg);case 9:e(),r(f(i.category)),n.next=17;break;case 13:n.prev=13,n.t0=n.catch(0),e(),o.b.error(n.t0.message);case 17:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(t){return n.apply(this,arguments)}}()},f=function(t){return{type:s.a.SHOPPING_ADD_CATEGORY,payload:t}},p=function(){return function(){var t=Object(i.a)(a.a.mark((function t(e){var n,r,c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(l.e)()),t.prev=1,t.next=4,Object(u.a)("items");case 4:return n=t.sent,t.next=7,n.json();case 7:if((r=t.sent).success){t.next=10;break}throw new Error(r.msg);case 10:c=r.categories,i=r.items,e(Object(l.i)()),e(O({categories:c,items:i})),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(1),e(Object(l.i)()),o.b.error(t.t0.message);case 19:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e){return t.apply(this,arguments)}}()},O=function(t){return{type:s.a.SHOPPING_SAVE_ITEMS,payload:t}},g=function(t,e){return function(){var n=Object(i.a)(a.a.mark((function n(r){var c,i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(Object(l.e)()),n.prev=1,n.next=4,Object(u.a)("items",t,"POST");case 4:return c=n.sent,n.next=7,c.json();case 7:if((i=n.sent).success){n.next=10;break}throw new Error(i.msg);case 10:r(Object(l.i)()),r(h(i.item)),e(),o.b.success("Item created"),n.next=21;break;case 16:n.prev=16,n.t0=n.catch(1),r(Object(l.i)()),o.b.error(n.t0.message),console.log(n.t0);case 21:case"end":return n.stop()}}),n,null,[[1,16]])})));return function(t){return n.apply(this,arguments)}}()},h=function(t){return{type:s.a.SHOPPING_ADD_ITEM,payload:t}},x=function(t){return{type:s.a.SHOPPING_SHOW_ITEM,payload:t}},v=function(){return{type:s.a.SHOPPING_HIDE_ITEM}},y=function(t,e){return function(){var n=Object(i.a)(a.a.mark((function n(c){var i,s,d;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(Object(l.e)()),t.__v,i=Object(r.a)(t,["__v"]),n.prev=2,n.next=5,Object(u.a)("items/".concat(t._id),i,"PUT");case 5:return s=n.sent,n.next=8,s.json();case 8:if((d=n.sent).success){n.next=11;break}throw new Error(d.msg);case 11:c(Object(l.i)()),c(w(d.item)),e(),o.b.success("Item updated"),n.next=21;break;case 17:n.prev=17,n.t0=n.catch(2),c(Object(l.i)()),o.b.error(n.t0.message);case 21:case"end":return n.stop()}}),n,null,[[2,17]])})));return function(t){return n.apply(this,arguments)}}()},w=function(t){return{type:s.a.SHOPPING_UPDATE_ITEM,payload:t}},k=function(t){return function(){var e=Object(i.a)(a.a.mark((function e(n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(l.e)()),e.prev=1,e.next=4,Object(u.a)("items/".concat(t),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:if((c=e.sent).success){e.next=10;break}throw new Error(c.msg);case 10:n(Object(l.i)()),n(C(c.item)),o.b.success("Item deleted"),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(1),n(Object(l.i)()),o.b.error(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}()},C=function(t){return{type:s.a.SHOPPING_DELETE_ITEM,payload:t}}},78:function(t,e,n){"use strict";var r,c=n(7),a=n(8).c.div(r||(r=Object(c.a)(["\n\tmargin-bottom: 3rem;\n\tlabel {\n\t\tdisplay: inline-block;\n\t\tfont-size: 1.4rem;\n\t\tmargin-bottom: 0.8rem;\n\t}\n\tinput,\n\ttextarea {\n\t\tbackground: none;\n\t\tborder: 1px solid #bdbdbd;\n\t\tborder-radius: 1.2rem;\n\t\tcolor: #fff;\n\t\tdisplay: block;\n\t\tfont-family: inherit;\n\t\tfont-size: 1.6rem;\n\t\tpadding: 2rem 1.8rem;\n\t\twidth: 100%;\n\t\ttransition: border-color 0.3s ease;\n\t}\n\tinput:focus,\n\ttextarea:focus {\n\t\tborder-color: var(--color-primary);\n\t\toutline: none;\n\t}\n\ttextarea {\n\t\theight: 11rem;\n\t\tresize: none;\n\t}\n\t.error {\n\t\tcolor: var(--color-danger-alt);\n\t\tmargin-top: 1rem;\n\t\tmargin-bottom: 0;\n\t}\n"])));e.a=a},99:function(t,e,n){"use strict";var r,c=n(7),a=n(8).c.main(r||(r=Object(c.a)(["\n\theight: 100%;\n\toverflow: hidden;\n\tdisplay: grid;\n\tgrid-template-columns: 100% 100%;\n\t@media (min-width: 56.25em) {\n\t\tgrid-template-columns: 1fr 39rem;\n\t}\n"])));e.a=a}}]);
//# sourceMappingURL=1.a5a021ee.chunk.js.map