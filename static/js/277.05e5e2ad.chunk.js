"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[277],{9277:function(n,e,r){r.r(e),r.d(e,{default:function(){return R}});var t,o,i,s,a,c,l,d,u,x,p,b,m=r(9434),f=r(2791),h=r(5705),j=r(6727),g=r(9482),Z=r(5984),w=r(3634),y=r(168),v=r(5867),k=(0,v.ZP)(h.l0)(t||(t=(0,y.Z)(["\n  width: 460px;\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  gap: 22px;\n  color: #7eb101;\n  font-size: 16px;\n  font-weight: 700;\n  text-decoration: underline;\n  border: 4px solid #7eb101;\n  padding: 26px;\n  border-radius: 15px;\n"]))),P=v.ZP.label(o||(o=(0,y.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),z=(0,v.ZP)(h.gN)(i||(i=(0,y.Z)(["\n  width: 100%;\n  height: 36px;\n  font-size: 20px;\n  padding: 4px;\n  outline: none;\n  border: 2px solid #bbf330;\n  &:hover {\n    border: 3px solid #7eb101;\n  }\n  border-radius: 8px;\n  background-color: transparent;\n"]))),L=(0,v.ZP)(h.Bc)(s||(s=(0,y.Z)(["\n  color: red;\n  font-weight: 500;\n  font-size: 14px;\n"]))),C=v.ZP.button(a||(a=(0,y.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 4px;\n  border-radius: 8px;\n  border: none;\n  background-color: transparent;\n  color: #7eb101;\n  border: 2px solid #7eb101;\n  &:hover {\n    background-color: #7eb101;\n    color: white;\n  }\n  font-weight: 700;\n  font-size: 14px;\n  padding: 8px;\n"]))),_=r(184),M=j.Ry().shape({name:j.Z_().min(1,"Too Short! Must be min 1 letter").max(30,"Too Long! Must be no more than 30 letters").required("No valide name. Must be min 1 letter"),number:j.Z_().min(7,"Too Short! Must be min 7 numbers").max(11,"Too Long! Must be no more than 11 numbers").required("No valide phone number. Must be min 7 max 11 numbers")}),F=function(){var n=(0,m.I0)(),e=(0,m.v9)((function(n){return n.contacts.contactList}));return(0,_.jsx)(h.J9,{initialValues:{name:"",number:""},validationSchema:M,onSubmit:function(r,t){var o=r.name,i=r.number,s=t.resetForm,a={name:o,number:i,id:(0,Z.x0)()};e.some((function(n){return n.name.toLowerCase()===o.toLowerCase()}))?alert("Contact with this name already exists. Please enter a different name."):(n((0,w.uK)(a)),s())},children:(0,_.jsxs)(k,{children:[(0,_.jsxs)(P,{children:["Name",(0,_.jsx)(z,{name:"name"}),(0,_.jsx)(L,{name:"name",component:"span"})]}),(0,_.jsxs)(P,{children:["Number",(0,_.jsx)(z,{type:"tel",name:"number"}),(0,_.jsx)(L,{name:"number",component:"span"})]}),(0,_.jsxs)(C,{type:"submit",children:[(0,_.jsx)(g.jus,{size:16})," Add contact"]})]})})},N=v.ZP.li(c||(c=(0,y.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  color: #7eb101;\n  font-size: 16px;\n  font-weight: 700;\n  padding: 0;\n  margin: 0;\n"]))),T=v.ZP.p(l||(l=(0,y.Z)(["\n  display: flex;\n  justify-content: center;\n\n  color: #2c2c2c;\n  gap: 8px;\n  svg {\n    color: #7eb101;\n    border: 2px solid #7eb101;\n  }\n"]))),I=v.ZP.button(d||(d=(0,y.Z)(["\n  display: flex;\n  justify-content: center;\n  border-radius: 2px;\n  border: none;\n  background-color: transparent;\n  color: #7eb101;\n  &:hover {\n    background-color: #7eb101;\n    color: white;\n  }\n"]))),S=function(){var n=(0,m.I0)(),e=(0,m.v9)((function(n){return n.contacts.contactList})),r=(0,m.v9)((function(n){return n.filters})),t=e.filter((function(n){return n.name.toLowerCase().includes(r.toLowerCase())}));return(0,_.jsx)(_.Fragment,{children:t.map((function(e){var r=e.name,t=e.number,o=e.id;return(0,_.jsxs)(N,{children:[(0,_.jsxs)(T,{children:[(0,_.jsx)(g.rLA,{size:22}),r,": ",t]}),(0,_.jsx)(I,{type:"button",onClick:function(){return n((0,w.GK)(o))},children:(0,_.jsx)(g.qy0,{size:20})})]},o)}))})},q=v.ZP.ul(u||(u=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),K=function(){return(0,_.jsx)(q,{children:(0,_.jsx)(S,{})})},A=r(1429),D=v.ZP.div(x||(x=(0,y.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  color: #7eb101;\n  font-size: 16px;\n  font-weight: 500;\n"]))),B=v.ZP.label(p||(p=(0,y.Z)(["\n  display: flex;\n  justify-content: space-between;\n  color: #7eb101;\n  font-size: 16px;\n  font-weight: 700;\n"]))),E=v.ZP.input(b||(b=(0,y.Z)(["\n  width: 100%;\n  height: 36px;\n  font-size: 16px;\n  padding: 4px;\n  outline: none;\n  border: 2px solid #bbf330;\n  &:hover {\n    border: 3px solid #7eb101;\n  }\n  border-radius: 8px;\n  color: #2c2c2c;\n  background-color: transparent;\n"]))),G=function(){var n=(0,m.I0)(),e=(0,m.v9)((function(n){return n.filters}));return(0,_.jsxs)(D,{children:[(0,_.jsxs)(B,{children:["Find contacts by name ",(0,_.jsx)(g._m8,{})]}),(0,_.jsx)(E,{type:"text",value:e,onChange:function(e){return n((0,A.zT)(e.target.value))},placeholder:"Filter by name..."})]})},H=r(1771),J=r(8346);function R(){var n=(0,m.I0)(),e=(0,m.v9)(H.K2),r=e.isLoading,t=e.error;return(0,f.useEffect)((function(){n((0,w.yF)())}),[n]),(0,_.jsxs)(J.im,{children:[(0,_.jsx)(J.Dx,{children:"Phonebook"}),(0,_.jsx)(F,{}),(0,_.jsx)(J.Dx,{children:"Contacts"}),(0,_.jsxs)(J.HZ,{children:[(0,_.jsx)(G,{}),r&&(0,_.jsx)("b",{children:"Loading contacts..."}),t&&(0,_.jsx)("b",{children:t}),(0,_.jsx)(K,{})]})]})}}}]);
//# sourceMappingURL=277.05e5e2ad.chunk.js.map