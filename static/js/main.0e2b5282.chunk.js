(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{48:function(e,n,t){e.exports=t(75)},75:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),i=t(35),o=t.n(i),c=t(9),s=t(78),l=t(15),u=t(4),m=t(5),d=t(41),h=t(42),f=t(43),g=t.n(f),p=t(44),v=t.n(p),w=t(31),E={showMenu:!1};var b=Object(m.combineReducers)({routing:l.routerReducer,menu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"OPEN_MENU_TYPE":case"CLOSE_MENU_TYPE":return Object(w.a)({},e,{showMenu:n.payload});default:return e}},contacts:function(){return{radialMenu:{center:{image:"url(./image/share.png)"},items:[{href:"https://github.com/qThegamEp",image:"url(./image/github.png)"},{href:"https://www.facebook.com/koliadin.nikita",image:"url(./image/facebook.png)"},{href:"https://javarush.ru/users/1324097",image:"url(./image/javarush.png)"},{href:"https://www.instagram.com/koliadin_nik/",image:"url(./image/instagram.png)"},{href:"https://www.linkedin.com/in/nikita-koliadin-b24361174/",image:"url(./image/linkedin.png)"}],duration:400,stagger:50,itemsSize:window.innerHeight/window.innerWidth>1?window.innerWidth/10:window.innerHeight/10,distance:window.innerHeight/window.innerWidth>1?window.innerWidth/10:window.innerHeight/10}}}}),y=function(){var e=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(n){return}}(),n=Object(m.createStore)(b,e,Object(d.composeWithDevTools)(Object(m.applyMiddleware)(h.a,g.a)));return n.subscribe(v()(function(){!function(e){try{var n=JSON.stringify(e);localStorage.setItem("state",n)}catch(t){}}({})},1e3)),n},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var N=t(18),M=t(19),j=t(22),C=t(20),S=t(23),A=t(0),T=t.n(A),W=function(){return{type:"OPEN_MENU_TYPE",payload:!0}},z=function(){return{type:"CLOSE_MENU_TYPE",payload:!1}},U=t(45),I=t.n(U),P=t(46),_=t.n(P),L=function(e){var n=e.menu,t=e.openMenu,a=e.closeMenu;return r.a.createElement("div",{className:"Menu"},r.a.createElement(I.a,{isOpen:n.showMenu,menuClicked:function(){return t()},width:32,height:24,strokeWidth:3,rotate:0,color:"black",borderRadius:0,animationDuration:.5}),r.a.createElement(_.a,{isOpen:n.showMenu,closeCallback:function(){return a()}},r.a.createElement("div",{className:"List"},r.a.createElement("div",{className:"Item"},r.a.createElement(u.b,{to:"/main",onClick:function(){return a()}},"Main")),r.a.createElement("div",{className:"Item"},r.a.createElement(u.b,{to:"/about",onClick:function(){return a()}},"About")),r.a.createElement("div",{className:"Item"},r.a.createElement(u.b,{to:"/contacts",onClick:function(){return a()}},"Contacts")),r.a.createElement("div",{className:"Logo"},r.a.createElement("img",{className:"Image",src:"./image/header.gif",alt:"gif"})))))};var R=Object(c.b)(function(e){return{menu:e.menu}},function(e){return Object(m.bindActionCreators)({openMenu:W,closeMenu:z},e)})(function(e){var n=e.menu,t=e.openMenu,a=e.closeMenu;return r.a.createElement(L,{menu:n,openMenu:t,closeMenu:a})}),x=function(){return r.a.createElement("div",{className:"Header"},r.a.createElement(R,null),r.a.createElement("div",{className:"Logo"},r.a.createElement("img",{className:"Image",src:"./image/header.gif",align:"left",alt:"gif"}),r.a.createElement("span",{className:"Text"},"University App"),r.a.createElement("img",{className:"Image",src:"./image/header.gif",align:"right",alt:"gif"})))},H=function(e){return r.a.createElement("div",{className:"Content"},e.children)},Y=function(){return r.a.createElement("div",{className:"Footer"},r.a.createElement("span",{className:"Text"},"University App"),r.a.createElement("span",{className:"Text"},"\xa9 qThegamEp, 2019"))},q=function(e){function n(){return Object(N.a)(this,n),Object(j.a)(this,Object(C.a)(n).apply(this,arguments))}return Object(S.a)(n,e),Object(M.a)(n,[{key:"getChildContext",value:function(){var e=this;return{path:this.props.ownProps.location.pathname,refresh:function(){return e.forceUpdate()}}}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement(H,null,this.props.children),r.a.createElement(Y,null))}}]),n}(a.Component);q.childContextTypes={path:T.a.string.isRequired,refresh:T.a.func.isRequired};var J=Object(c.b)(function(e,n){return{ownProps:n}})(q),B=function(){return r.a.createElement("div",null,"MAIN")},D=function(){return r.a.createElement("span",null,"ABOUT")},F=function(){return{type:"CHANGE_SIZE_TYPE"}},G=t(47),Z=t.n(G),$=function(e){function n(){var e,t;Object(N.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(j.a)(this,(e=Object(C.a)(n)).call.apply(e,[this].concat(r)))).resize=function(){(0,t.props.changeSize)()},t}return Object(S.a)(n,e),Object(M.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var e=this.props.contacts;return r.a.createElement("div",{className:"Contacts"},r.a.createElement(Z.a,{center:e.radialMenu.center,items:e.radialMenu.items,duration:e.radialMenu.duration,stagger:e.radialMenu.stagger,itemsSize:e.radialMenu.itemsSize,distance:e.radialMenu.distance}))}}]),n}(a.Component);var K=Object(c.b)(function(e){return{contacts:e.contacts}},function(e){return Object(m.bindActionCreators)({changeSize:F},e)})(function(e){var n=e.contacts,t=e.changeSize;return r.a.createElement($,{contacts:n,changeSize:t})}),Q=r.a.createElement(u.c,{path:"/",component:J},r.a.createElement(u.a,{to:"main"}),r.a.createElement(u.c,{path:"/main",component:B}),r.a.createElement(u.c,{path:"/about",component:D}),r.a.createElement(u.c,{path:"/contacts",component:K}),r.a.createElement(u.c,{path:"*",component:B})),V=y(),X=Object(l.syncHistoryWithStore)(u.e,V);!function(e){if("serviceWorker"in navigator){if(new URL("/university.site.front",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/university.site.front","/service-worker.js");k?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):O(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):O(n,e)})}}();var ee=r.a.createElement(c.a,{store:V},r.a.createElement(s.a,null,r.a.createElement(u.d,{history:X},Q)));o.a.render(ee,document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.0e2b5282.chunk.js.map