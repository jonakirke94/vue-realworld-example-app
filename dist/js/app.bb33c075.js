(function(t){function e(e){for(var r,o,i=e[0],u=e[1],s=e[2],l=0,d=[];l<i.length;l++)o=i[l],a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);f&&f(e);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},c=[];function o(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-2d0b3289":"3e92834f","chunk-2d0d6d35":"48ff9c6d","chunk-2d2086b7":"189f628a","chunk-2d217357":"953bce5e","chunk-48c29e6c":"13843905","chunk-2d0bac97":"8870efd4","chunk-2d0bd246":"15f3944d","chunk-2d0cedd0":"f7cbbfe0","chunk-2d0f1193":"2a13b2ed","chunk-2d207fb4":"1df40b87","chunk-52fabea2":"e1ae6277","chunk-704fe663":"8aadc945","chunk-fee37f4e":"1b29febd"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=a[t]=[e,r]});e.push(n[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=o(t),c=function(e){u.onerror=u.onload=null,clearTimeout(s);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+r+": "+c+")");o.type=r,o.request=c,n[1](o)}a[t]=void 0}};var s=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var f=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"00c2":function(t,e,n){"use strict";var r="id_token",a=function(){return window.localStorage.getItem(r)},c=function(t){window.localStorage.setItem(r,t)},o=function(){window.localStorage.removeItem(r)};e["a"]={getToken:a,saveToken:c,destroyToken:o}},4360:function(t,e,n){"use strict";var r,a,c,o,i,u,s,l=n("2b0e"),f=n("2f62"),d=n("bd86"),m=n("5ce5"),p=n("6c33"),h="setArticles",v="setLoading",b="logOut",g="setArticle",k="setUser",w="setComments",j="setError",O="setProfile",y="setTags",C="addTag",x="removeTag",A="updateAricleInList",_="resetModuleState",R={tags:[],articles:[],isLoading:!0,articlesCount:0},T={articlesCount:function(t){return t.articlesCount},articles:function(t){return t.articles},isLoading:function(t){return t.isLoading},tags:function(t){return t.tags}},S=(r={},Object(d["a"])(r,p["m"],function(t,e){var n=t.commit;return n(v),m["a"].query(e.type,e.filters).then(function(t){var e=t.data;n(h,e)}).catch(function(t){throw new Error(t)})}),Object(d["a"])(r,p["r"],function(t){var e=t.commit;return m["d"].get().then(function(t){var n=t.data;e(y,n.tags)}).catch(function(t){throw new Error(t)})}),r),P=(a={},Object(d["a"])(a,v,function(t){t.isLoading=!0}),Object(d["a"])(a,h,function(t,e){var n=e.articles,r=e.articlesCount;t.articles=n,t.articlesCount=r,t.isLoading=!1}),Object(d["a"])(a,y,function(t,e){t.tags=e}),Object(d["a"])(a,A,function(t,e){t.articles=t.articles.map(function(t){return t.slug!==e.slug?t:(t.favorited=e.favorited,t.favoritesCount=e.favoritesCount,t)})}),a),E={state:R,getters:T,actions:S,mutations:P},L=n("795b"),M=n.n(L),q=n("00c2"),F={errors:null,user:{},isAuthenticated:!!q["a"].getToken()},U={currentUser:function(t){return t.user},isAuthenticated:function(t){return t.isAuthenticated}},H=(c={},Object(d["a"])(c,p["s"],function(t,e){return new M.a(function(n){m["e"].post("users/login",{user:e}).then(function(e){var r=e.data;t.commit(k,r.user),n(r)}).catch(function(e){var n=e.response;t.commit(j,n.data.errors)})})}),Object(d["a"])(c,p["t"],function(t){t.commit(b)}),Object(d["a"])(c,p["u"],function(t,e){return new M.a(function(n,r){m["e"].post("users",{user:e}).then(function(e){var r=e.data;t.commit(k,r.user),n(r)}).catch(function(e){var n=e.response;t.commit(j,n.data.errors),r(n)})})}),Object(d["a"])(c,p["g"],function(t){q["a"].getToken()?(m["e"].setHeader(),m["e"].get("user").then(function(e){var n=e.data;t.commit(k,n.user)}).catch(function(e){var n=e.response;t.commit(j,n.data.errors)})):t.commit(b)}),Object(d["a"])(c,p["v"],function(t,e){var n=e.email,r=e.username,a=e.password,c=e.image,o=e.bio,i={email:n,username:r,bio:o,image:c};return a&&(i.password=a),m["e"].put("user",i).then(function(e){var n=e.data;return t.commit(k,n.user),n})}),c),I=(o={},Object(d["a"])(o,j,function(t,e){t.errors=e}),Object(d["a"])(o,k,function(t,e){t.isAuthenticated=!0,t.user=e,t.errors={},q["a"].saveToken(t.user.token)}),Object(d["a"])(o,b,function(t){t.isAuthenticated=!1,t.user={},t.errors={},q["a"].destroyToken()}),o),$={state:F,actions:H,mutations:I,getters:U},V=(n("96cf"),n("3b8d")),W=n("cebc"),Y={article:{author:{},title:"",description:"",body:"",tagList:[]},comments:[]},N=Object(W["a"])({},Y),D=(i={},Object(d["a"])(i,p["l"],function(){var t=Object(V["a"])(regeneratorRuntime.mark(function t(e,n,r){var a,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(void 0===r){t.next=2;break}return t.abrupt("return",e.commit(g,r));case 2:return t.next=4,m["a"].get(n);case 4:return a=t.sent,c=a.data,e.commit(g,c.article),t.abrupt("return",c);case 8:case"end":return t.stop()}},t)}));return function(e,n,r){return t.apply(this,arguments)}}()),Object(d["a"])(i,p["n"],function(){var t=Object(V["a"])(regeneratorRuntime.mark(function t(e,n){var r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m["b"].get(n);case 2:return r=t.sent,a=r.data,e.commit(w,a.comments),t.abrupt("return",a.comments);case 6:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()),Object(d["a"])(i,p["h"],function(){var t=Object(V["a"])(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m["b"].post(n.slug,n.comment);case 2:e.dispatch(p["n"],n.slug);case 3:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()),Object(d["a"])(i,p["i"],function(){var t=Object(V["a"])(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m["b"].destroy(n.slug,n.commentId);case 2:e.dispatch(p["n"],n.slug);case 3:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()),Object(d["a"])(i,p["j"],function(){var t=Object(V["a"])(regeneratorRuntime.mark(function t(e,n){var r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m["c"].add(n);case 2:r=t.sent,a=r.data,e.commit(A,a.article,{root:!0}),e.commit(g,a.article);case 6:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()),Object(d["a"])(i,p["k"],function(){var t=Object(V["a"])(regeneratorRuntime.mark(function t(e,n){var r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m["c"].remove(n);case 2:r=t.sent,a=r.data,e.commit(A,a.article,{root:!0}),e.commit(g,a.article);case 6:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()),Object(d["a"])(i,p["e"],function(t){var e=t.state;return m["a"].create(e.article)}),Object(d["a"])(i,p["a"],function(t,e){return m["a"].destroy(e)}),Object(d["a"])(i,p["b"],function(t){var e=t.state;return m["a"].update(e.article.slug,e.article)}),Object(d["a"])(i,p["c"],function(t,e){t.commit(C,e)}),Object(d["a"])(i,p["d"],function(t,e){t.commit(x,e)}),Object(d["a"])(i,p["f"],function(t){var e=t.commit;e(_)}),i),J=(u={},Object(d["a"])(u,g,function(t,e){t.article=e}),Object(d["a"])(u,w,function(t,e){t.comments=e}),Object(d["a"])(u,C,function(t,e){t.article.tagList=t.article.tagList.concat([e])}),Object(d["a"])(u,x,function(t,e){t.article.tagList=t.article.tagList.filter(function(t){return t!==e})}),Object(d["a"])(u,_,function(){for(var t in N)l["a"].set(N,t,Y[t])}),u),z={article:function(t){return t.article},comments:function(t){return t.comments}},B={state:N,actions:D,mutations:J,getters:z},G={errors:{},profile:{}},K={profile:function(t){return t.profile}},Q=(s={},Object(d["a"])(s,p["o"],function(t,e){var n=e.username;return m["e"].get("profiles",n).then(function(e){var n=e.data;return t.commit(O,n.profile),n}).catch(function(){})}),Object(d["a"])(s,p["p"],function(t,e){var n=e.username;return m["e"].post("profiles/".concat(n,"/follow")).then(function(e){var n=e.data;return t.commit(O,n.profile),n}).catch(function(){})}),Object(d["a"])(s,p["q"],function(t,e){var n=e.username;return m["e"].delete("profiles/".concat(n,"/follow")).then(function(e){var n=e.data;return t.commit(O,n.profile),n}).catch(function(){})}),s),X=Object(d["a"])({},O,function(t,e){t.profile=e,t.errors={}}),Z={state:G,actions:Q,mutations:X,getters:K};l["a"].use(f["a"]);e["a"]=new f["a"].Store({modules:{home:E,auth:$,article:B,profile:Z}})},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("795b"),a=n.n(r),c=(n("ac6a"),n("5df3"),n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("RwvHeader"),n("router-view"),n("RwvFooter")],1)},i=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-light"},[n("div",{staticClass:"container"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[t._v("\n      conduit\n    ")]),t.isAuthenticated?n("ul",{staticClass:"nav navbar-nav pull-xs-right"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"home"}}},[t._v("\n          Home\n        ")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",to:{name:"article-edit"}}},[n("i",{staticClass:"ion-compose"}),t._v(" New Article\n        ")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"settings"}}},[n("i",{staticClass:"ion-gear-a"}),t._v(" Settings\n        ")])],1),t.currentUser.username?n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"profile",params:{username:t.currentUser.username}}}},[t._v("\n          "+t._s(t.currentUser.username)+"\n        ")])],1):t._e()]):n("ul",{staticClass:"nav navbar-nav pull-xs-right"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"home"}}},[t._v("\n          Home\n        ")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"login"}}},[n("i",{staticClass:"ion-compose"}),t._v("Sign in\n        ")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"register"}}},[n("i",{staticClass:"ion-compose"}),t._v("Sign up\n        ")])],1)])],1)])},s=[],l=n("cebc"),f=n("2f62"),d={name:"RwvHeader",computed:Object(l["a"])({},Object(f["b"])(["currentUser","isAuthenticated"]))},m=d,p=n("2877"),h=Object(p["a"])(m,u,s,!1,null,null,null),v=h.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"container"},[n("router-link",{staticClass:"logo-font",attrs:{to:{name:"home",params:{}}}},[t._v("\n      conduit\n    ")]),t._m(0)],1)])},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"attribution"},[t._v("\n      An interactive learning project from\n      "),n("a",{attrs:{rel:"noopener noreferrer",target:"blank",href:"https://thinkster.io"}},[t._v("Thinkster")]),t._v(". Code & design licensed under MIT.\n    ")])}],k={name:"RwvFooter"},w=k,j=Object(p["a"])(w,b,g,!1,null,null,null),O=j.exports,y={name:"App",components:{RwvHeader:v,RwvFooter:O}},C=y,x=Object(p["a"])(C,o,i,!1,null,null,null),A=x.exports,_=n("8c4f");c["a"].use(_["a"]);var R=new _["a"]({routes:[{path:"/",component:function(){return n.e("chunk-704fe663").then(n.bind(null,"bb51"))},children:[{path:"",name:"home",component:function(){return Promise.all([n.e("chunk-48c29e6c"),n.e("chunk-2d0bac97")]).then(n.bind(null,"3961"))}},{path:"my-feed",name:"home-my-feed",component:function(){return Promise.all([n.e("chunk-48c29e6c"),n.e("chunk-2d207fb4")]).then(n.bind(null,"a39e"))}},{path:"tag/:tag",name:"home-tag",component:function(){return Promise.all([n.e("chunk-48c29e6c"),n.e("chunk-2d0cedd0")]).then(n.bind(null,"60ee"))}}]},{name:"login",path:"/login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))}},{name:"register",path:"/register",component:function(){return n.e("chunk-2d0d6d35").then(n.bind(null,"73cf"))}},{name:"settings",path:"/settings",component:function(){return n.e("chunk-2d0b3289").then(n.bind(null,"26d3"))}},{path:"/@:username",component:function(){return n.e("chunk-2d217357").then(n.bind(null,"c66d"))},children:[{path:"",name:"profile",component:function(){return Promise.all([n.e("chunk-48c29e6c"),n.e("chunk-2d0f1193")]).then(n.bind(null,"9ed5"))}},{name:"profile-favorites",path:"favorites",component:function(){return Promise.all([n.e("chunk-48c29e6c"),n.e("chunk-2d0bd246")]).then(n.bind(null,"2b77"))}}]},{name:"article",path:"/articles/:slug",component:function(){return n.e("chunk-52fabea2").then(n.bind(null,"3ad6"))},props:!0},{name:"article-edit",path:"/editor/:slug?",props:!0,component:function(){return n.e("chunk-fee37f4e").then(n.bind(null,"04d0"))}}]}),T=n("4360"),S=n("9483");Object(S["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var P=n("6c33"),E=n("5ce5"),L=n("70f2"),M=n.n(L),q=function(t){return M()(new Date(t),"MMMM D, YYYY")},F=function(t){return"".concat(t[0])};c["a"].config.productionTip=!1,c["a"].filter("date",q),c["a"].filter("error",F),E["e"].init(),R.beforeEach(function(t,e,n){return a.a.all([T["a"].dispatch(P["g"])]).then(n)}),new c["a"]({router:R,store:T["a"],render:function(t){return t(A)}}).$mount("#app")},"5ce5":function(t,e,n){"use strict";var r=n("2b0e"),a=n("bc3a"),c=n.n(a),o=n("a7fe"),i=n.n(o),u=n("00c2"),s="https://conduit.productionready.io/api";n.d(e,"d",function(){return f}),n.d(e,"a",function(){return d}),n.d(e,"b",function(){return m}),n.d(e,"c",function(){return p});var l={init:function(){r["a"].use(i.a,c.a),r["a"].axios.defaults.baseURL=s},setHeader:function(){r["a"].axios.defaults.headers.common["Authorization"]="Token ".concat(u["a"].getToken())},query:function(t,e){return r["a"].axios.get(t,e).catch(function(t){throw new Error("[RWV] ApiService ".concat(t))})},get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return r["a"].axios.get("".concat(t,"/").concat(e)).catch(function(t){throw new Error("[RWV] ApiService ".concat(t))})},post:function(t,e){return r["a"].axios.post("".concat(t),e)},update:function(t,e,n){return r["a"].axios.put("".concat(t,"/").concat(e),n)},put:function(t,e){return r["a"].axios.put("".concat(t),e)},delete:function(t){return r["a"].axios.delete(t).catch(function(t){throw new Error("[RWV] ApiService ".concat(t))})}},f=(e["e"]=l,{get:function(){return l.get("tags")}}),d={query:function(t,e){return l.query("articles"+("feed"===t?"/feed":""),{params:e})},get:function(t){return l.get("articles",t)},create:function(t){return l.post("articles",{article:t})},update:function(t,e){return l.update("articles",t,{article:e})},destroy:function(t){return l.delete("articles/".concat(t))}},m={get:function(t){if("string"!==typeof t)throw new Error("[RWV] CommentsService.get() article slug required to fetch comments");return l.get("articles","".concat(t,"/comments"))},post:function(t,e){return l.post("articles/".concat(t,"/comments"),{comment:{body:e}})},destroy:function(t,e){return l.delete("articles/".concat(t,"/comments/").concat(e))}},p={add:function(t){return l.post("articles/".concat(t,"/favorite"))},remove:function(t){return l.delete("articles/".concat(t,"/favorite"))}}},"6c33":function(t,e,n){"use strict";n.d(e,"e",function(){return r}),n.d(e,"a",function(){return a}),n.d(e,"b",function(){return c}),n.d(e,"c",function(){return o}),n.d(e,"d",function(){return i}),n.d(e,"f",function(){return u}),n.d(e,"g",function(){return s}),n.d(e,"h",function(){return l}),n.d(e,"i",function(){return f}),n.d(e,"j",function(){return d}),n.d(e,"k",function(){return m}),n.d(e,"l",function(){return p}),n.d(e,"m",function(){return h}),n.d(e,"n",function(){return v}),n.d(e,"o",function(){return b}),n.d(e,"p",function(){return g}),n.d(e,"q",function(){return k}),n.d(e,"r",function(){return w}),n.d(e,"s",function(){return j}),n.d(e,"t",function(){return O}),n.d(e,"u",function(){return y}),n.d(e,"v",function(){return C});n("cadf"),n("551c"),n("f751"),n("097d");var r="publishArticle",a="deleteArticle",c="editArticle",o="addTagToArticle",i="removeTagFromArticle",u="resetArticleState",s="checkAuth",l="createComment",f="destroyComment",d="addFavorite",m="removeFavorite",p="fetchArticle",h="fetchArticles",v="fetchComments",b="fetchProfile",g="fetchProfileFollow",k="fetchProfileUnfollow",w="fetchTags",j="login",O="logout",y="register",C="updateUser"}});
//# sourceMappingURL=app.bb33c075.js.map