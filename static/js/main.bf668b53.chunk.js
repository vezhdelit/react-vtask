(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,n){e.exports=n(253)},252:function(e,t,n){},253:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(26),i=n.n(o),c=n(16),l=n(9),d=n(30),u=n(11),s=n(12),p=n(28),b=n.n(p),f=function(e){return function(t,n){var a=n().activeBoard,r=b()();t({type:m.ADD_LIST,payload:{title:e,boardID:a,id:r}})}},v=function(e,t,n,a,r,o){return function(i,c){var l=c().activeBoard;i({type:m.DRAG_HAPPENED,payload:{droppableIdStart:e,droppableIdEnd:t,droppableIndexEnd:a,droppableIndexStart:n,draggableId:r,type:o,boardID:l}})}},h=function(e,t){var n=b()();return{type:m.ADD_CARD,payload:{text:t,listID:e,id:n}}},m={ADD_CARD:"ADD_CARD",ADD_LIST:"ADD_LIST",DRAG_HAPPENED:"DRAG_HAPPENED",EDIT_CARD:"EDIT_CARD",DELETE_CARD:"DELETE_CARD",EDIT_LIST_TITLE:"EDIT_LIST_TITLE",DELETE_LIST:"DELETE_LIST",SET_ACTIVE_BOARD:"SET_ACTIVE_BOARD",ADD_BOARD:"ADD_BOARD"},E={"list-0":{id:"list-0",cards:["card-0"],title:"myList",board:"board-0"}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.ADD_LIST:var n=t.payload,a=n.title,r=n.id,o={title:a,id:"list-".concat(r),cards:[]};return Object(s.a)({},e,Object(u.a)({},"list-".concat(r),o));case m.ADD_CARD:var i=t.payload,c=i.listID,l=i.id,p=e[c];return p.cards.push("card-".concat(l)),Object(s.a)({},e,Object(u.a)({},c,p));case m.DRAG_HAPPENED:var b=t.payload,f=b.droppableIdStart,v=b.droppableIdEnd,h=b.droppableIndexEnd,D=b.droppableIndexStart;if("list"===b.type)return e;if(f===v){var O,g=e[f],x=g.cards.splice(D,1);return(O=g.cards).splice.apply(O,[h,0].concat(Object(d.a)(x))),Object(s.a)({},e,Object(u.a)({},f,g))}if(f!==v){var j,y,I=e[f],A=I.cards.splice(D,1),w=e[v];return(j=w.cards).splice.apply(j,[h,0].concat(Object(d.a)(A))),Object(s.a)({},e,(y={},Object(u.a)(y,f,I),Object(u.a)(y,v,w),y))}return e;case m.DELETE_CARD:var T=t.payload,_=T.listID,C=T.id,S=e[_],k=S.cards.filter(function(e){return e!==C});return Object(s.a)({},e,Object(u.a)({},_,Object(s.a)({},S,{cards:k})));case m.EDIT_LIST_TITLE:var R=t.payload,L=R.listID,B=R.newTitle,P=e[L];return P.title=B,Object(s.a)({},e,Object(u.a)({},L,P));case m.DELETE_LIST:var F=e;return delete F[t.payload.listID],F;default:return e}},O={"card-0":{text:"Initial card",id:"card-0",list:"list-0"}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.ADD_CARD:var n=t.payload,a=n.text,r=n.listID,o=n.id,i={text:a,id:"card-".concat(o),list:r};return Object(s.a)({},e,Object(u.a)({},"card-".concat(o),i));case m.EDIT_CARD:var c=t.payload,l=c.id,d=c.newText,p=e[l];return p.text=d,Object(s.a)({},e,Object(u.a)({},"card-".concat(l),p));case m.DELETE_CARD:var b=e;return delete b[t.payload.id],b;default:return e}},x={"board-0":{id:"board-0",lists:["list-0"],title:"myboard"}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.ADD_LIST:var n=t.payload,a=n.boardID,r=n.id,o=e[a],i="list-".concat(r),c=[].concat(Object(d.a)(o.lists),[i]);return o.lists=c,Object(s.a)({},e,Object(u.a)({},a,o));case m.DRAG_HAPPENED:var l=t.payload.boardID,p=e[l],b=p.lists,f=t.payload,v=f.droppableIndexEnd,h=f.droppableIndexStart;if("list"===f.type){var E=b.splice(h,1);return b.splice.apply(b,[v,0].concat(Object(d.a)(E))),p.lists=b,Object(s.a)({},e,Object(u.a)({},l,p))}return e;case m.DELETE_LIST:var D=t.payload,O=D.listID,g=D.boardID,j=e[g],y=j.lists.filter(function(e){return e!==O});return j.lists=y,Object(s.a)({},e,Object(u.a)({},g,j));case m.ADD_BOARD:var I=t.payload,A=I.title,w=I.id,T="board-".concat(w),_={id:T,title:A,lists:[]};return Object(s.a)({},e,Object(u.a)({},T,_));default:return e}};console.log(b()());var y=["board-0"],I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.ADD_BOARD:return[].concat(Object(d.a)(e),["board-".concat(t.payload.id)]);default:return e}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.SET_ACTIVE_BOARD:return t.payload;default:return e}},w=Object(l.c)({lists:D,cards:g,boards:j,boardOrder:I,activeBoard:A}),T=n(103),_=n(75),C=n(104),S={key:"root",storage:n.n(C).a},k=Object(_.a)(S,w),R=n(36),L=n(37),B=n(40),P=n(38),F=n(41),H=n(39),z=n(32),N=n(6),G=n(31),M=n(60),V=n.n(M),J=n(113),W=n.n(J),Y=n(112),$=n.n(Y),q=n(29),K=n(5),Q=n(19),U=n.n(Q),X=n(107);function Z(){var e=Object(N.a)(["\n  margin-left: 8px;\n  cursor: pointer;\n"]);return Z=function(){return e},e}function ee(){var e=Object(N.a)(["\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  margin-left: 8px;\n"]);return ee=function(){return e},e}function te(){var e=Object(N.a)(["\n  resize: none;\n  width: 100%;\n  overflow: hidden;\n  outline: none;\n  border: none;\n"]);return te=function(){return e},e}function ne(){var e=Object(N.a)(["\n  min-height: 85px;\n  padding: 6px 8px 2px;\n"]);return ne=function(){return e},e}function ae(){var e=Object(N.a)(["\n  width: 284px;\n  margin-bottom: 8px;\n"]);return ae=function(){return e},e}var re=K.a.div(ae()),oe=Object(K.a)(V.a)(ne()),ie=Object(K.a)(X.a)(te()),ce=K.a.div(ee()),le=Object(K.a)(U.a)(Z()),de=r.a.memo(function(e){var t=e.list,n=e.text,a=void 0===n?"":n,o=e.onChange,i=e.closeForm,c=e.children,l=t?"Enter list title...":"Enter a title for this card...";return r.a.createElement(re,null,r.a.createElement(oe,null,r.a.createElement(ie,{placeholder:l,autoFocus:!0,onFocus:function(e){e.target.select()},value:a,onChange:function(e){return o(e)},onBlur:i})),r.a.createElement(ce,null,c,r.a.createElement(le,{onMouseDown:i},"close")))}),ue=n(108),se=n.n(ue);function pe(){var e=Object(N.a)(["\n  && {\n    color: white;\n    background: #5aac44;\n  }\n"]);return pe=function(){return e},e}var be=Object(K.a)(se.a)(pe()),fe=function(e){var t=e.children,n=e.onClick;return r.a.createElement(be,{variant:"contained",onMouseDown:n},t)};function ve(){var e=Object(N.a)(["\n  position: absolute;\n  display: none;\n  right: 5px;\n  bottom: 5px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return ve=function(){return e},e}function he(){var e=Object(N.a)(["\n  position: absolute;\n  display: none;\n  right: 5px;\n  top: 5px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return he=function(){return e},e}function me(){var e=Object(N.a)(["\n  margin: 0 0 8px 0;\n  position: relative;\n  max-width: 100%;\n  word-wrap: break-word;\n"]);return me=function(){return e},e}var Ee=K.a.div(me()),De=Object(K.a)(U.a)(he(),Ee),Oe=Object(K.a)(U.a)(ve(),Ee),ge=r.a.memo(function(e){var t=e.text,n=e.id,o=e.listID,i=e.index,c=e.dispatch,l=Object(a.useState)(!1),d=Object(G.a)(l,2),u=d[0],s=d[1],p=Object(a.useState)(t),b=Object(G.a)(p,2),f=b[0],v=b[1],h=function(e){s(!1)},E=function(e){v(e.target.value)},D=function(e){e.preventDefault(),c(function(e,t,n){return{type:m.EDIT_CARD,payload:{id:e,listID:t,newText:n}}}(n,o,f)),s(!1)},O=function(e){console.log(o),c(function(e,t){return{type:m.DELETE_CARD,payload:{id:e,listID:t}}}(n,o))};return u?r.a.createElement(de,{text:f,onChange:E,closeForm:h},r.a.createElement(fe,{onClick:D},"Save")):r.a.createElement(q.b,{draggableId:String(n),index:i},function(e){return r.a.createElement(Ee,Object.assign({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef,onDoubleClick:function(){return s(!0)}}),r.a.createElement(V.a,null,r.a.createElement(De,{onMouseDown:function(){return s(!0)},fontSize:"small"},"edit"),r.a.createElement(Oe,{fontSize:"small",onMouseDown:O},"delete"),r.a.createElement($.a,null,r.a.createElement(W.a,null,t))))})}),xe=Object(c.b)()(ge);function je(){var e=Object(N.a)(["\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    border-radius: 3px;\n    height: 36px;\n    margin-left: 8px;\n    width: 300px;\n    padding-left: 10px;\n    padding-right: 10px;\n    opacity: ",";\n    color: ",";\n    background-color: ",";\n  "]);return je=function(){return e},e}var ye=function(e){var t=e.list,n=e.children,a=e.onClick,o=t?1:.5,i=t?"white":"inherit",c=t?"rgba(0,0,0,.15)":"inherit",l=K.a.div(je(),o,i,c);return r.a.createElement(l,{onClick:a},r.a.createElement(U.a,null,"add"),r.a.createElement("p",{style:{flexShrink:0}},n))};function Ie(){var e=Object(N.a)(["\n      display: flex;\n      align-items: center;\n      cursor: pointer;\n      border-radius: 3px;\n      height: 36px;\n      margin-left: 8px;\n      width: 300px;\n      padding-left: 10px;\n      padding-right: 10px;\n      opacity: ",";\n      color: ",";\n      background-color: ",";\n    "]);return Ie=function(){return e},e}var Ae=function(e){function t(){var e,n;Object(R.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(B.a)(this,(e=Object(P.a)(t)).call.apply(e,[this].concat(o)))).state={formOpen:!1,text:""},n.openForm=function(){n.setState({formOpen:!0})},n.closeForm=function(e){n.setState({formOpen:!1})},n.handleInputChange=function(e){n.setState({text:e.target.value})},n.handleAddList=function(){var e=n.props.dispatch,t=n.state.text;t&&(n.setState({text:""}),e(f(t)))},n.handleAddCard=function(){var e=n.props,t=e.dispatch,a=e.listID,r=n.state.text;r&&(n.setState({text:""}),t(h(a,r)))},n.renderOpenForm=function(){var e=n.props.list,t=e?"Add another list":"Add another card",a=e?1:.5,o=e?"white":"inherit",i=e?"rgba(0,0,0,.15)":"inherit",c=K.a.div(Ie(),a,o,i);return r.a.createElement(c,{onClick:n.openForm},r.a.createElement(U.a,null,"add"),r.a.createElement("p",{style:{flexShrink:0}},t))},n}return Object(F.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){var e=this.state.text,t=this.props.list;return this.state.formOpen?r.a.createElement(de,{text:e,onChange:this.handleInputChange,closeForm:this.closeForm},r.a.createElement(fe,{onClick:t?this.handleAddList:this.handleAddCard},t?"Add List":"Add Card")):r.a.createElement(ye,{list:t,onClick:this.openForm},t?"Add another list":"Add another card")}}]),t}(r.a.PureComponent),we=Object(c.b)()(Ae);function Te(){var e=Object(N.a)(["\n  transition: background 0.3s ease-in;\n  ",":hover & {\n    background: #ccc;\n  }\n"]);return Te=function(){return e},e}function _e(){var e=Object(N.a)(["\n  cursor: pointer;\n  transition: opacity 0.3s ease-in-out;\n  opacity: 0.4;\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return _e=function(){return e},e}function Ce(){var e=Object(N.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n"]);return Ce=function(){return e},e}function Se(){var e=Object(N.a)(["\n  width: 100%;\n  border: none;\n  outline-color: blue;\n  border-radius: 3px;\n  margin-bottom: 3px;\n  padding: 5px;\n"]);return Se=function(){return e},e}function ke(){var e=Object(N.a)(["\n  background-color: #dfe3e6;\n  border-radius: 3px;\n  width: 300px;\n  padding: 8px;\n  height: 100%;\n  margin: 0 8px 0 0;\n"]);return ke=function(){return e},e}var Re=K.a.div(ke()),Le=K.a.input(Se()),Be=K.a.div(Ce()),Pe=Object(K.a)(U.a)(_e()),Fe=K.a.h4(Te(),Be),He=Object(c.b)()(function(e){var t=e.title,n=e.cards,o=e.listID,i=e.index,c=e.dispatch,l=Object(a.useState)(!1),d=Object(G.a)(l,2),u=d[0],s=d[1],p=Object(a.useState)(t),b=Object(G.a)(p,2),f=b[0],v=b[1],h=function(e){e.target.select()},E=function(e){e.preventDefault(),v(e.target.value)},D=function(e){s(!1),c(function(e,t){return{type:m.EDIT_LIST_TITLE,payload:{listID:e,newTitle:t}}}(o,f))},O=function(){c(function(e){return function(t,n){var a=n().activeBoard;return t({type:m.DELETE_LIST,payload:{listID:e,boardID:a}})}}(o))};return r.a.createElement(q.b,{draggableId:String(o),index:i},function(e){return r.a.createElement(Re,Object.assign({},e.draggableProps,e.dragHandleProps,{ref:e.innerRef}),r.a.createElement(q.c,{droppableId:String(o),type:"card"},function(e){return r.a.createElement("div",null,r.a.createElement("div",null,u?r.a.createElement("form",{onSubmit:D},r.a.createElement(Le,{type:"text",value:f,onChange:E,autoFocus:!0,onFocus:h,onBlur:D})):r.a.createElement(Be,{onClick:function(){return s(!0)}},r.a.createElement(Fe,null,f),r.a.createElement(Pe,{onClick:O},"delete"))),r.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef}),n.map(function(e,t){return r.a.createElement(xe,{key:e.id,text:e.text,id:e.id,index:t,listID:o})}),e.placeholder,r.a.createElement(we,{listID:o})))}))})});function ze(){var e=Object(N.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return ze=function(){return e},e}var Ne=K.a.div(ze()),Ge=function(e){function t(){var e,n;Object(R.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(B.a)(this,(e=Object(P.a)(t)).call.apply(e,[this].concat(r)))).onDragEnd=function(e){var t=e.destination,a=e.source,r=e.draggableId,o=e.type;t&&n.props.dispatch(v(a.droppableId,t.droppableId,a.index,t.index,r,o))},n}return Object(F.a)(t,e),Object(L.a)(t,[{key:"componentDidMount",value:function(){var e,t=this.props.match.params.boardID;this.props.dispatch((e=t,{type:m.SET_ACTIVE_BOARD,payload:e}))}},{key:"render",value:function(){var e=this.props,t=e.lists,n=e.cards,a=e.match,o=e.boards[a.params.boardID];if(!o)return r.a.createElement("p",null,"Board not found");var i=o.lists;return r.a.createElement(q.a,{onDragEnd:this.onDragEnd},r.a.createElement(H.b,{to:"/"},"Go Back"),r.a.createElement("h2",null,o.title),r.a.createElement(q.c,{droppableId:"all-lists",direction:"horizontal",type:"list"},function(e){return r.a.createElement(Ne,Object.assign({},e.droppableProps,{ref:e.innerRef}),i.map(function(e,a){var o=t[e];if(o){var i=o.cards.map(function(e){return n[e]});return r.a.createElement(He,{listID:o.id,key:o.id,title:o.title,cards:i,index:a})}}),e.placeholder,r.a.createElement(we,{list:!0}))}))}}]),t}(a.PureComponent),Me=Object(c.b)(function(e){return{lists:e.lists,cards:e.cards,boards:e.boards}})(Ge);function Ve(){var e=Object(N.a)(["\n  font-family: Arial, Helvetica, sans-serif;\n  color: #000000;\n  text-decoration: none;\n"]);return Ve=function(){return e},e}function Je(){var e=Object(N.a)(["\n  height: 180px;\n  width: 280px;\n  background: #ffffff;\n  padding: 10px;\n  margin: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px grey;\n"]);return Je=function(){return e},e}var We=K.a.div(Je()),Ye=K.a.h4(Ve()),$e=function(e){var t=e.title;return console.log(t),r.a.createElement(We,null,r.a.createElement(Ye,null,t))};function qe(){var e=Object(N.a)(["\n  width: 400px;\n  height: 80px;\n  font-size: 22px;\n  padding: 20px;\n  box-sizing: border-box;\n  border-radius: 4px;\n  border: none;\n  outline-color: blue;\n  box-shadow: 0 2px 4px grey;\n  align-self: center;\n"]);return qe=function(){return e},e}function Ke(){var e=Object(N.a)(["\n  font-size: 48px;\n  color: white;\n  margin-bottom: 10px;\n  font-weight: bold;\n  font-family: Arial, Helvetica, sans-serif;\n"]);return Ke=function(){return e},e}function Qe(){var e=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-sizing: border-box;\n"]);return Qe=function(){return e},e}function Ue(){var e=Object(N.a)(["\n  flex: 1;\n  height: 50%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return Ue=function(){return e},e}var Xe=K.a.div(Ue()),Ze=K.a.div(Qe()),et=K.a.h3(Ke()),tt=K.a.input(qe()),nt=Object(c.b)(function(e){return{boards:e.boards,boardOrder:e.boardOrder}})(function(e){var t=e.boards,n=e.boardOrder,o=e.dispatch,i=Object(a.useState)(""),c=Object(G.a)(i,2),l=c[0],d=c[1],u=function(e){d(e.target.value)},s=function(e){e.preventDefault(),o(function(e){var t=b()();return{type:m.ADD_BOARD,payload:{title:e,id:t}}}(l))};return r.a.createElement(Ze,null,r.a.createElement(Xe,null,n.map(function(e){var n=t[e];return r.a.createElement(H.b,{key:e,to:"/".concat(n.id),style:{textDecoration:"none"}},r.a.createElement($e,n))})),r.a.createElement("form",{onSubmit:s,style:{textAlign:"center"}},r.a.createElement(et,null,"Create a new Board"),r.a.createElement(tt,{onChange:u,value:l,placeholder:"Your boards title...",type:"text"})))}),at=function(){return r.a.createElement(H.a,null,r.a.createElement("div",null,r.a.createElement(z.a,{path:"/",exact:!0,component:nt}),r.a.createElement(z.a,{path:"/:boardID",component:Me})))},rt=function(e){function t(){return Object(R.a)(this,t),Object(B.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){return r.a.createElement(at,null)}}]),t}(a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(252);var ot=n(115),it=n.n(ot),ct=n(116),lt=function(){var e=Object(l.e)(k,Object(l.a)(T.a));return{store:e,persistor:Object(_.b)(e)}}(),dt=lt.persistor,ut=lt.store;i.a.render(r.a.createElement(c.a,{store:ut},r.a.createElement(ct.a,{loading:null,persistor:dt},r.a.createElement(rt,null))),document.getElementById("root")),it()(document).bind("DOMNodeRemoved",function(e){console.log("Removed: "+e.target.nodeName)}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[118,1,2]]]);
//# sourceMappingURL=main.bf668b53.chunk.js.map