(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),r=a.n(c),i=(a(9),a(1)),s=function(e){var t=e.inputValue,a=e.handleChange,n=e.inputLabel;return l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{htmlFor:n,className:"text-primary padding-right padding-left"},n),l.a.createElement("input",{className:"margin-top",id:n,type:"text",value:t,onChange:a}))},u=function(e){var t=e.buttonLabel,a=e.handleClick;return l.a.createElement("button",{className:"btn-primary margin-left",onClick:a},t)},m=function(e){var t=e.listItems;return l.a.createElement("ul",{className:"list-unstyled"},t.map((function(e){return l.a.createElement("li",{key:e},e)})))},o=function(e){var t=e.headingText;return l.a.createElement("div",{className:"col-lg-10 align-self-end"},l.a.createElement("h1",{className:"text-uppercase text-white font-weight-bold"},t),l.a.createElement("hr",{className:"divider my-4"}))},h=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),h=Object(i.a)(r,2),g=h[0],d=h[1],f=Object(n.useState)(""),E=Object(i.a)(f,2),p=E[0],b=E[1],v=Object(n.useState)([]),N=Object(i.a)(v,2),S=N[0],w=N[1],x=Object(n.useState)(""),O=Object(i.a)(x,2),j=O[0],y=O[1],k=Object(n.useState)(!1),C=Object(i.a)(k,2),L=C[0],I=C[1];return l.a.createElement("div",{className:"masthead"},l.a.createElement("div",{className:"container h-100"},l.a.createElement("div",{className:"row h-100 align-items-center justify-content-center text-center"},l.a.createElement(o,{headingText:"Music Library"}),l.a.createElement("div",{className:"col-lg-8 align-self-baseline"},l.a.createElement("p",{className:"text-white-75 font-weight-meduim mb-5"},"Search our music catalog"),l.a.createElement("p",{className:"text-white-75 font-weight-light"},"IDs range from 1 - 500"),l.a.createElement(s,{handleChange:function(e){var t=e.target.value;c(t)},inputValue:a,inputLabel:"Search via Id"}),l.a.createElement(u,{handleClick:function(){fetch("".concat(window.location.origin,"/songs/id/").concat(a)).then((function(e){return e.text()})).then((function(e){try{var t=JSON.parse(e);t.length>0?(I(!1),y(t[0].artist),b(t[0].title),w([])):I(!0)}catch(a){I(!0)}}))},buttonLabel:"Search"}),l.a.createElement("br",null),l.a.createElement(s,{handleChange:function(e){var t=e.target.value;d(t)},inputValue:g,inputLabel:"Search Artist"}),l.a.createElement(u,{handleClick:function(){fetch("".concat(window.location.origin,"/songs/").concat(g)).then((function(e){return e.text()})).then((function(e){try{var t=JSON.parse(e);if(t.length>0){var a=[];t.forEach((function(e){a.push(e.title)})),I(!1),y(t[0].artist),w(a)}else I(!0)}catch(n){I(!0)}}))},buttonLabel:"Search"}),l.a.createElement("div",{className:"text-white-75 font-weight-light mb-5"},j&&!L?l.a.createElement("div",null,"Artist:",l.a.createElement("p",{className:"text-primary padding-right"}," ",j),S.length>1?"Song Titles: ":"Song Title: ",l.a.createElement("span",{className:"text-primary"}," ",S.length>1?l.a.createElement(m,{listItems:S}):p||S)):"",L&&l.a.createElement("p",null,"Track not found"))))))},g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null))},d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(g,null))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root"))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.d1eab3d7.chunk.js.map