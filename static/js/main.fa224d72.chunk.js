(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{49:function(e,n,t){e.exports=t(77)},77:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),i=t(38),o=t.n(i),c=t(9),s=t(80),u=t(40),l=t(18),m=t(4),d=t(5),f=t(42),h=t(43),g=t(44),p=t.n(g),v=t(45),w=t.n(v),E=t(34),b={showMenu:!1};var y=Object(d.combineReducers)({routing:l.routerReducer,menu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"OPEN_MENU_TYPE":case"CLOSE_MENU_TYPE":return Object(E.a)({},e,{showMenu:n.payload});default:return e}},contacts:function(){return{radialMenu:{center:{image:"url(".concat("/university.site.front","/image/share.png)")},items:[{href:"https://github.com/qThegamEp",image:"url(".concat("/university.site.front","/image/github.png)")},{href:"https://www.facebook.com/koliadin.nikita",image:"url(".concat("/university.site.front","/image/facebook.png)")},{href:"https://javarush.ru/users/1324097",image:"url(".concat("/university.site.front","/image/javarush.png)")},{href:"https://www.instagram.com/koliadin_nik/",image:"url(".concat("/university.site.front","/image/instagram.png)")},{href:"https://www.linkedin.com/in/nikita-koliadin-b24361174/",image:"url(".concat("/university.site.front","/image/linkedin.png)")}],duration:400,stagger:50,itemsSize:window.innerHeight/window.innerWidth>1?window.innerWidth/10:window.innerHeight/10,distance:window.innerHeight/window.innerWidth>1?window.innerWidth/10:window.innerHeight/10}}}}),k=function(){var e=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(n){return}}(),n=Object(d.createStore)(y,e,Object(f.composeWithDevTools)(Object(d.applyMiddleware)(h.a,p.a)));return n.subscribe(w()(function(){!function(e){try{var n=JSON.stringify(e);localStorage.setItem("state",n)}catch(t){}}({})},1e3)),n},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var M=t(19),j=t(20),C=t(23),S=t(21),A=t(24),T=t(0),W=t.n(T),z=function(){return{type:"OPEN_MENU_TYPE",payload:!0}},U=function(){return{type:"CLOSE_MENU_TYPE",payload:!1}},I=t(46),P=t.n(I),_=t(47),L=t.n(_),H=function(e){var n=e.menu,t=e.openMenu,a=e.closeMenu;return r.a.createElement("div",{className:"Menu"},r.a.createElement(P.a,{isOpen:n.showMenu,menuClicked:function(){return t()},width:32,height:24,strokeWidth:3,rotate:0,color:"black",borderRadius:0,animationDuration:.5}),r.a.createElement(L.a,{isOpen:n.showMenu,closeCallback:function(){return a()}},r.a.createElement("div",{className:"List"},r.a.createElement("div",{className:"Item"},r.a.createElement(m.b,{to:"/main",onClick:function(){return a()}},"Main")),r.a.createElement("div",{className:"Item"},r.a.createElement(m.b,{to:"/about",onClick:function(){return a()}},"About")),r.a.createElement("div",{className:"Item"},r.a.createElement(m.b,{to:"/contacts",onClick:function(){return a()}},"Contacts")),r.a.createElement("div",{className:"Logo"},r.a.createElement("img",{className:"Image",src:"".concat("/university.site.front","/image/header.gif"),alt:"gif"})))))};var R=Object(c.b)(function(e){return{menu:e.menu}},function(e){return Object(d.bindActionCreators)({openMenu:z,closeMenu:U},e)})(function(e){var n=e.menu,t=e.openMenu,a=e.closeMenu;return r.a.createElement(H,{menu:n,openMenu:t,closeMenu:a})}),x=function(){return r.a.createElement("div",{className:"Header"},r.a.createElement(R,null),r.a.createElement("div",{className:"Logo"},r.a.createElement("img",{className:"Image",src:"".concat("/university.site.front","/image/header.gif"),align:"left",alt:"gif"}),r.a.createElement("span",{className:"Text"},"University App"),r.a.createElement("img",{className:"Image",src:"".concat("/university.site.front","/image/header.gif"),align:"right",alt:"gif"})))},Y=function(e){return r.a.createElement("div",{className:"Content"},e.children)},q=function(){return r.a.createElement("div",{className:"Footer"},r.a.createElement("span",{className:"Text"},"University App"),r.a.createElement("span",{className:"Text"},"\xa9 qThegamEp, 2019"))},J=function(e){function n(){return Object(M.a)(this,n),Object(C.a)(this,Object(S.a)(n).apply(this,arguments))}return Object(A.a)(n,e),Object(j.a)(n,[{key:"getChildContext",value:function(){var e=this;return{path:this.props.ownProps.location.pathname,refresh:function(){return e.forceUpdate()}}}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement(Y,null,this.props.children),r.a.createElement(q,null))}}]),n}(a.Component);J.childContextTypes={path:W.a.string.isRequired,refresh:W.a.func.isRequired};var B=Object(c.b)(function(e,n){return{ownProps:n}})(J),D=function(){return r.a.createElement("div",null,"MAIN")},F=function(){return r.a.createElement("span",null,"ABOUT")},G=function(){return{type:"CHANGE_SIZE_TYPE"}},Z=t(48),$=t.n(Z),K=function(e){function n(){var e,t;Object(M.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(C.a)(this,(e=Object(S.a)(n)).call.apply(e,[this].concat(r)))).resize=function(){(0,t.props.changeSize)()},t}return Object(A.a)(n,e),Object(j.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var e=this.props.contacts;return r.a.createElement("div",{className:"Contacts"},r.a.createElement($.a,{center:e.radialMenu.center,items:e.radialMenu.items,duration:e.radialMenu.duration,stagger:e.radialMenu.stagger,itemsSize:e.radialMenu.itemsSize,distance:e.radialMenu.distance}))}}]),n}(a.Component);var Q=Object(c.b)(function(e){return{contacts:e.contacts}},function(e){return Object(d.bindActionCreators)({changeSize:G},e)})(function(e){var n=e.contacts,t=e.changeSize;return r.a.createElement(K,{contacts:n,changeSize:t})}),V=r.a.createElement(m.c,{path:"/",component:B},r.a.createElement(m.a,{to:"main"}),r.a.createElement(m.c,{path:"/main",component:D}),r.a.createElement(m.c,{path:"/about",component:F}),r.a.createElement(m.c,{path:"/contacts",component:Q}),r.a.createElement(m.c,{path:"*",component:D})),X=Object(m.e)(u.createHistory)({basename:"/university.site.front"}),ee=k(),ne=Object(l.syncHistoryWithStore)(X,ee);!function(e){if("serviceWorker"in navigator){if(new URL("/university.site.front",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/university.site.front","/service-worker.js");O?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):N(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):N(n,e)})}}();var te=r.a.createElement(c.a,{store:ee},r.a.createElement(s.a,null,r.a.createElement(m.d,{history:ne},V)));o.a.render(te,document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.fa224d72.chunk.js.map