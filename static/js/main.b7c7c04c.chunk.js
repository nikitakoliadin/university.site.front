(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{208:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(36),r=n.n(i),c=n(12),s=n(211),l=n(83),u=n(49),m=n(8),d=n(7),h=n(86),g=n(87),p=n(88),f=n.n(p),v=n(50),y=n.n(v),E=n(15),b={showMenu:!1},w={technology:{},showTechnology:!1};var T=Object(d.combineReducers)({routing:u.routerReducer,menu:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_MENU_TYPE":case"CLOSE_MENU_TYPE":return Object(E.a)({},e,{showMenu:t.payload});default:return e}},technologies:function(){return[{id:1,name:"React",imageSrc:"".concat("/university.site.front","/image/react.svg"),description:"In computing, React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. Complex React applications usually require the use of additional libraries for state management, routing, and interaction with an API."},{id:2,name:"Redux",imageSrc:"".concat("/university.site.front","/image/redux.svg"),description:"Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to (and inspired by) Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark."}]},activeTechnology:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_TECHNOLOGY_TYPE":case"RESET_TECHNOLOGY_TYPE":return Object(E.a)({},e,{technology:t.payload});case"OPEN_TECHNOLOGY_INFO_TYPE":case"CLOSE_TECHNOLOGY_INFO_TYPE":return Object(E.a)({},e,{showTechnology:t.payload});default:return e}},contacts:function(){return{radialMenu:{center:{image:"url(".concat("/university.site.front","/image/share.svg)")},items:[{href:"https://github.com/qThegamEp",image:"url(".concat("/university.site.front","/image/github.svg)")},{href:"https://www.facebook.com/koliadin.nikita",image:"url(".concat("/university.site.front","/image/facebook.svg)")},{href:"https://javarush.ru/users/1324097",image:"url(".concat("/university.site.front","/image/javarush.svg)")},{href:"https://www.instagram.com/koliadin_nik/",image:"url(".concat("/university.site.front","/image/instagram.svg)")},{href:"https://www.linkedin.com/in/nikita-koliadin-b24361174/",image:"url(".concat("/university.site.front","/image/linkedin.svg)")}],duration:400,stagger:50,itemsSize:window.innerHeight/window.innerWidth>1?window.innerWidth/10:window.innerHeight/10,distance:window.innerHeight/window.innerWidth>1?window.innerWidth/10:window.innerHeight/10}}},styles:function(){return{lastWayStyle:{background:"linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.2)), url('/university.site.front/image/background.jpg') no-repeat center",backgroundSize:"cover"}}}}),O=function(){var e=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),t=Object(d.createStore)(T,e,Object(h.composeWithDevTools)(Object(d.applyMiddleware)(g.a,f.a)));return t.subscribe(y()(function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){}}({})},1e3)),t},N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var C=n(23),j=n(24),S=n(26),_=n(25),M=n(27),L=n(1),P=n.n(L),R=function(){return{type:"OPEN_MENU_TYPE",payload:!0}},Y=function(){return{type:"CLOSE_MENU_TYPE",payload:!1}},A=n(89),I=n.n(A),x=n(90),H=n.n(x),W=function(e){var t=e.menu,n=e.openMenu,a=e.closeMenu;return o.a.createElement("div",{className:"Menu"},o.a.createElement(I.a,{isOpen:t.showMenu,menuClicked:function(){return n()},width:32,height:24,strokeWidth:3,rotate:0,color:"black",borderRadius:0,animationDuration:.5}),o.a.createElement(H.a,{isOpen:t.showMenu,closeCallback:function(){return a()},backgroundColor:"#eaeaea"},o.a.createElement("div",{className:"List"},o.a.createElement("div",{className:"Item"},o.a.createElement(m.b,{to:"/main",onClick:function(){return a()}},"Main")),o.a.createElement("div",{className:"Item"},o.a.createElement(m.b,{to:"/about",onClick:function(){return a()}},"About")),o.a.createElement("div",{className:"Item"},o.a.createElement(m.b,{to:"/contacts",onClick:function(){return a()}},"Contacts")),o.a.createElement("div",{className:"Logo"},o.a.createElement("img",{className:"Image",src:"".concat("/university.site.front","/image/header.gif"),alt:"gif"})))))};var z=Object(c.b)(function(e){return{menu:e.menu}},function(e){return Object(d.bindActionCreators)({openMenu:R,closeMenu:Y},e)})(function(e){var t=e.menu,n=e.openMenu,a=e.closeMenu;return o.a.createElement(W,{menu:t,openMenu:n,closeMenu:a})}),U=function(){return o.a.createElement("div",{className:"Header"},o.a.createElement(z,null),o.a.createElement("div",{className:"Logo"},o.a.createElement("img",{className:"Image",src:"".concat("/university.site.front","/image/header.gif"),align:"left",alt:"gif"}),o.a.createElement("span",{className:"Text"},"University App"),o.a.createElement("img",{className:"Image",src:"".concat("/university.site.front","/image/header.gif"),align:"right",alt:"gif"})))},G=function(e){return o.a.createElement("div",{className:"Content"},e.children)},F=function(){return o.a.createElement("div",{className:"Footer"},o.a.createElement("span",{className:"Text"},"University App"),o.a.createElement("span",{className:"Text"},"\xa9 qThegamEp, 2019"))},D=function(e){function t(){return Object(C.a)(this,t),Object(S.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(j.a)(t,[{key:"getChildContext",value:function(){var e=this;return{path:this.props.ownProps.location.pathname,refresh:function(){return e.forceUpdate()}}}},{key:"render",value:function(){var e=this.props.styles;return o.a.createElement("div",{className:"App",style:e.lastWayStyle},o.a.createElement(U,null),o.a.createElement(G,null,this.props.children),o.a.createElement(F,null))}}]),t}(a.Component);D.childContextTypes={path:P.a.string.isRequired,refresh:P.a.func.isRequired};var J=Object(c.b)(function(e,t){return{ownProps:t,styles:e.styles}})(D),q=function(){return o.a.createElement("div",{className:"Main"},o.a.createElement("span",{className:"Text"},"Never be afraid of losing people just because you are afraid to be alone. You are always alone."))},B=function(e){return{type:"SELECT_TECHNOLOGY_TYPE",payload:e}},Z=function(){return{type:"RESET_TECHNOLOGY_TYPE",payload:{}}},$=function(){return{type:"OPEN_TECHNOLOGY_INFO_TYPE",payload:!0}},K=function(){return{type:"CLOSE_TECHNOLOGY_INFO_TYPE",payload:!1}},Q=n(91),V=n.n(Q),X=n(92),ee=n.n(X),te=n(93),ne=n.n(te),ae=function(e){function t(){return Object(C.a)(this,t),Object(S.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(M.a)(t,e),Object(j.a)(t,[{key:"showListOfTechnologies",value:function(){var e=this.props.technologies,t=this.props,n=t.selectTechnology,a=t.openTechnology;return e.map(function(e){return o.a.createElement(V.a,{key:e.id,variant:"contained",className:"Button",onClick:function(){n(e),a()}},e.name)})}},{key:"showDescription",value:function(){var e=this.props.activeTechnology,t=this.props,n=t.closeTechnology,a=t.resetTechnology;return o.a.createElement("div",{className:"Description"},o.a.createElement("hr",{className:"Line"}),o.a.createElement("div",{className:"Content"},o.a.createElement("span",{className:"Text"},e.technology.description),o.a.createElement("div",{className:"CloseButton"},o.a.createElement(ee.a,{"aria-label":"Add",onClick:function(){n(),a()}},o.a.createElement(ne.a,{className:"CloseLabel"})))),o.a.createElement("hr",{className:"Line"}),o.a.createElement("div",{className:"Logo"},o.a.createElement("img",{src:e.technology.imageSrc,className:"Image",alt:"logo"})))}},{key:"render",value:function(){var e=this.props.activeTechnology;return o.a.createElement("div",{className:"About"},o.a.createElement("span",{className:"HeadText"},"This application is based on React.js and Redux.js. See description below."),o.a.createElement("div",{className:"SelectButtons"},this.showListOfTechnologies()),e.showTechnology&&this.showDescription())}}]),t}(a.Component);var oe=Object(c.b)(function(e){return{technologies:e.technologies,activeTechnology:e.activeTechnology}},function(e){return Object(d.bindActionCreators)({selectTechnology:B,resetTechnology:Z,openTechnology:$,closeTechnology:K},e)})(function(e){var t=e.technologies,n=e.activeTechnology,a=e.selectTechnology,i=e.resetTechnology,r=e.openTechnology,c=e.closeTechnology;return o.a.createElement(ae,{technologies:t,activeTechnology:n,selectTechnology:a,resetTechnology:i,openTechnology:r,closeTechnology:c})}),ie=function(){return{type:"CHANGE_SIZE_TYPE"}},re=n(94),ce=n.n(re),se=function(e){function t(){var e,n;Object(C.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(S.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(o)))).resize=y()(function(){(0,n.props.changeSize)()},500),n}return Object(M.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var e=this.props.contacts;return o.a.createElement("div",{className:"Contacts"},o.a.createElement("span",{className:"Text"},"Thank you for paying attention to my site. All my contacts are listed below in the radial menu."),o.a.createElement("div",{className:"RadialMenu"},o.a.createElement(ce.a,{center:e.radialMenu.center,items:e.radialMenu.items,duration:e.radialMenu.duration,stagger:e.radialMenu.stagger,itemsSize:e.radialMenu.itemsSize,distance:e.radialMenu.distance})))}}]),t}(a.Component);var le=Object(c.b)(function(e){return{contacts:e.contacts}},function(e){return Object(d.bindActionCreators)({changeSize:ie},e)})(function(e){var t=e.contacts,n=e.changeSize;return o.a.createElement(se,{contacts:t,changeSize:n})}),ue=o.a.createElement(m.c,{path:"/",component:J},o.a.createElement(m.a,{to:"main"}),o.a.createElement(m.c,{path:"/main",component:q}),o.a.createElement(m.c,{path:"/about",component:oe}),o.a.createElement(m.c,{path:"/contacts",component:le}),o.a.createElement(m.c,{path:"*",component:q})),me=Object(m.e)(l.createHistory)({basename:"/university.site.front"}),de=O(),he=Object(u.syncHistoryWithStore)(me,de);!function(e){if("serviceWorker"in navigator){if(new URL("/university.site.front",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/university.site.front","/service-worker.js");N?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):k(t,e)})}}();var ge=o.a.createElement(c.a,{store:de},o.a.createElement(s.a,null,o.a.createElement(m.d,{history:he},ue)));r.a.render(ge,document.getElementById("root"))},95:function(e,t,n){e.exports=n(208)}},[[95,1,2]]]);
//# sourceMappingURL=main.b7c7c04c.chunk.js.map