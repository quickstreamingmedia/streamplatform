(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],f=0,d=[];f<s.length;f++)i=s[f],o[i]&&d.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},2:function(t,e){},"2d77":function(t,e,n){"use strict";var a=n("981f"),o=n.n(a);o.a},3:function(t,e){},"52c5":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=n("bb71");n("da64");a["a"].use(o["a"],{iconfont:"md"});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-layout",{attrs:{row:"","text-xs-center":""}},[n("v-flex",{attrs:{xs12:""}},[n("h1",{staticClass:"display-3"},[t._v("Streaming Platform")])])],1),n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticStyle:{width:"1000px"}},[n("Stream")],1),n("v-flex",{staticStyle:{width:"600px"}},[n("Chat")],1)],1)],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("v-flex",{attrs:{xs12:""}},[n("VideoPlayer")],1)],1),n("v-divider"),n("v-card-actions",{staticClass:"pa-3",attrs:{"justify-center":""}},[n("StatusDisplay")],1)],1)},c=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("video-player",{staticClass:"vjs-big-play-centered",attrs:{options:t.playerOptions}})},u=[],f=n("cebc"),d=(n("fda2"),n("d6d3")),h=n("2f62"),m=(n("a151"),{data:function(){return{playerOptions:{muted:!0,fluid:!0,sources:[{}],html5:{hls:{withCredentials:!1}}}}},components:{videoPlayer:d["videoPlayer"]},computed:Object(f["a"])({},Object(h["b"])(["streamName","streamOnline"])),watch:{streamOnline:function(){this.streamOnline?(console.log("[streamOnlineWatcher] stream is ONLINE"),console.log("[streamOnlineWatcher] setting player source to: https://stream.mpk.dynu.net/hls/"+this.streamName+".m3u8"),this.playerOptions.sources[0]={src:"https://stream.mpk.dynu.net/hls/"+this.streamName+".m3u8",type:"application/x-mpegURL"}):(console.log("[streamOnlineWatcher] stream is OFFLINE"),this.playerOptions.sources[0]={})}}}),p=m,v=n("2877"),y=Object(v["a"])(p,l,u,!1,null,null,null),_=y.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"text-xs-center",attrs:{row:"","align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs1:""}},[n("v-icon",[t._v("input")])],1),t.streamName?n("v-flex",{attrs:{xs2:""}},[t._v("\n        "+t._s(t.streamName)+"\n    ")]):t._e(),t.streamName?t._e():n("v-flex",{attrs:{xs2:""}},[t._v("\n        No Stream\n    ")]),n("v-flex",{attrs:{xs1:""}},[t.streamOnline?n("v-icon",{staticStyle:{color:"green"}},[t._v("live_tv")]):t._e(),t.streamOnline?t._e():n("v-icon",{staticStyle:{color:"red"}},[t._v("live_tv")])],1),t.streamOnline?n("v-flex",{attrs:{xs2:""}},[t._v("\n        Online\n    ")]):t._e(),t.streamOnline?t._e():n("v-flex",{attrs:{xs2:""}},[t._v("\n        Offline\n    ")]),n("v-flex",{attrs:{xs1:""}},[n("v-icon",[t._v("schedule")])],1),n("v-flex",{attrs:{xs2:""}},[t._v("\n        "+t._s(t.streamDuration)+"\n    ")]),n("v-flex",{attrs:{xs1:""}},[n("v-icon",[t._v("people")])],1),n("v-flex",{attrs:{xs2:""}},[t._v("\n        "+t._s(t.streamSpectators)+"\n    ")])],1)},O=[],g={data:function(){return{}},computed:Object(f["a"])({},Object(h["b"])(["streamName","streamOnline","streamDuration","streamSpectators"]))},b=g,C=n("6544"),S=n.n(C),T=n("0e8f"),j=n("132d"),N=n("a722"),E=Object(v["a"])(b,x,O,!1,null,"0cef42ea",null),U=E.exports;S()(E,{VFlex:T["a"],VIcon:j["a"],VLayout:N["a"]});var w={data:function(){return{}},components:{VideoPlayer:_,StatusDisplay:U}},I=w,V=n("b0af"),k=n("99d9"),A=n("ce7e6"),H=Object(v["a"])(I,s,c,!1,null,null,null),B=H.exports;S()(H,{VCard:V["a"],VCardActions:k["a"],VCardText:k["b"],VDivider:A["a"],VFlex:T["a"]});var F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{height:"100%"}},[n("v-card-title",{attrs:{"primary-title":""}},[n("v-icon",[t._v("chat")]),n("v-layout",{attrs:{row:"","justify-center":""}},[n("h3",{staticClass:"headline mb-0"},[t._v("Chat")])])],1),n("v-card-text",[n("ChatHistory"),t.notification?n("Notification"):t._e()],1),n("v-card-actions",{staticClass:"pa-3"},[n("ChatInput")],1)],1)},M=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"chatHistory",attrs:{column:"","align-start":"",height:"100%",id:"chatBox"}},t._l(t.chatHistory,function(e){return n("div",{key:e.id,staticClass:"chatMessage"},[n("v-layout",{attrs:{row:"",reverse:t.chatUser.id===e.chatUser.id}},[n("div",{class:{ownSpeechBubble:e.chatUser.id===t.chatUser.id,speechBubble:e.chatUser.id!==t.chatUser.id}},[n("v-layout",{attrs:{column:"","justify-start":"","align-start":"","text-xs-left":""}},[e.chatUser!==t.chatUser?n("div",{staticClass:"font-weight-bold",style:{color:e.chatUser.color}},[t._v("\n                        "+t._s(e.chatUser.name)+"\n                    ")]):t._e(),n("div",[t._v("\n                        "+t._s(e.message)+"\n                    ")])])],1)])],1)}),0)},P=[],D={data:function(){return{chatBox:void 0}},components:{},computed:Object(f["a"])({},Object(h["b"])(["chatUser","chatHistory"])),updated:function(){this.chatBox=document.getElementById("chatBox"),console.log("[ChatHistory_updated] scrolling to bottom"),this.chatBox.scrollTop=this.chatBox.scrollHeight},watch:{chatHistory:function(){this.$nextTick(function(){console.log("[ChatHistory_watch] scrolling to bottom"),this.chatBox.scrollTop=this.chatBox.scrollHeight})}}},J=D,L=(n("981a"),Object(v["a"])(J,$,P,!1,null,null,null)),R=L.exports;S()(L,{VLayout:N["a"]});var K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"","align-content-center":""}},[n("v-flex",{attrs:{xs11:""}},[n("v-text-field",{attrs:{error:t.validationError,placeholder:t.placeholderText,clearable:"","hide-details":""},on:{input:function(e){t.validationError=!1},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSubmit(e)}},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),n("v-flex",{attrs:{xs1:""}},[n("v-btn",{staticClass:"mt-2",attrs:{flat:"",icon:"",outline:""},on:{click:t.onSubmit}},[n("v-icon",[t._v("send")])],1)],1)],1)},W=[],G={data:function(){return{input:"",validationError:!1}},computed:Object(f["a"])({},Object(h["b"])(["chatUser"]),{placeholderText:function(){return void 0===this.chatUser?"Choose a name...":"Message..."}}),methods:{getRandomColor:function(){for(var t="ABCDEF",e="#",n=0;n<=5;n++)e+=t[Math.floor(5*Math.random())];return e},onSubmit:function(){""!=this.input?void 0===this.chatUser?(this.$store.dispatch("joinChat",{name:this.input,color:this.getRandomColor()}),this.input=""):(this.$store.dispatch("sendChatMessage",{chatUser:this.chatUser,message:this.input}),this.input=""):this.validationError=!0}}},Y=G,q=(n("2d77"),n("8336")),z=n("2677"),Q=Object(v["a"])(Y,K,W,!1,null,null,null),X=Q.exports;S()(Q,{VBtn:q["a"],VFlex:T["a"],VIcon:j["a"],VLayout:N["a"],VTextField:z["a"]});var Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-alert",{attrs:{type:"info",dismissible:"",value:!0},on:{click:t.dismiss}},[t._v(t._s(t.content))])},tt=[],et=(n("7f7f"),{computed:Object(f["a"])({},Object(h["b"])(["notification"]),{content:function(){if(this.notification)switch(this.notification.type){case"joined-chat":return this.notification.data.name+" joined the chat";case"left-chat":return this.notification.data.name+" left the chat"}return JSON.stringify(this.notification)}}),methods:{dismiss:function(){this.$store.commit("SET_NOTIFICATION",void 0)}}}),nt=et,at=(n("9712"),n("0798")),ot=Object(v["a"])(nt,Z,tt,!1,null,"226fdb74",null),rt=ot.exports;S()(ot,{VAlert:at["a"]});var it={data:function(){return{}},components:{ChatHistory:R,ChatInput:X,Notification:rt},computed:Object(f["a"])({},Object(h["b"])(["notification"]))},st=it,ct=n("12b2"),lt=Object(v["a"])(st,F,M,!1,null,"6de95034",null),ut=lt.exports;S()(lt,{VCard:V["a"],VCardActions:k["a"],VCardText:k["b"],VCardTitle:ct["a"],VIcon:j["a"],VLayout:N["a"]});var ft={name:"App",components:{Stream:B,Chat:ut},data:function(){return{}},updated:function(){console.log("[App] scrolling to bottom"),document.getElementById("chatBox").scrollTop=document.getElementById("chatBox").scrollHeight}},dt=ft,ht=n("7496"),mt=n("a523"),pt=Object(v["a"])(dt,r,i,!1,null,null,null),vt=pt.exports;S()(pt,{VApp:ht["a"],VContainer:mt["a"],VFlex:T["a"],VLayout:N["a"]});var yt=n("f87c"),_t=n("8055"),xt=n.n(_t),Ot=xt()("https://stream.mpk.dynu.net/");a["a"].use(h["a"]);var gt=new h["a"].Store({state:{streamName:void 0,streamOnline:!1,streamDuration:0,streamSpectators:0,chatUser:void 0,chatHistory:[],notification:void 0},mutations:{SOCKET_CHAT_MESSAGE:function(t,e){console.log("[SOCKET_CHAT_MESSAGE] chat message received: "+JSON.stringify(e)),t.chatHistory.push(e)},SOCKET_STATUS_UPDATE:function(t,e){"undefined"!==e.streamName?t.streamName=e.streamName:t.streamName=void 0,t.streamOnline=e.online,t.streamDuration=e.duration,t.streamSpectators=e.spectators},SET_NOTIFICATION:function(t,e){console.log("[SET_NOTIFICATION] new notification: "+JSON.stringify(e)),t.notification=e,setTimeout(function(){t.notification=void 0},3e3)},SET_CHAT_USER:function(t,e){console.log("[SET_CHAT_USER] setting chatUser to: "+JSON.stringify(e)),t.chatUser=e}},actions:{joinChat:function(t,e){Ot.emit("join_chat",e)},sendChatMessage:function(t,e){console.log("[sendChatMessage] sending message: "+JSON.stringify(e)),Ot.emit("send_chat_message",e)},socket_joinedChat:function(t,e){console.log("[socket_joinedChat] payload: "+JSON.stringify(e)),t.commit("SET_NOTIFICATION",{type:"joined-chat",data:e})},socket_leftChat:function(t,e){console.log("[socket_leftChat] payload: "+JSON.stringify(e)),t.commit("SET_NOTIFICATION",{type:"left-chat",data:e})},socket_joinedOk:function(t,e){console.log("[socket_joinOk] Chat joined confirmation received: "+JSON.stringify(e)),t.commit("SET_NOTIFICATION",{type:"joined-chat",data:{name:"You",color:e.color}}),t.commit("SET_CHAT_USER",e)}},getters:{streamName:function(t){return t.streamName},streamOnline:function(t){return t.streamOnline},streamDuration:function(t){return t.streamDuration},streamSpectators:function(t){return t.streamSpectators},chatUsers:function(t){return t.chatUsers},chatUser:function(t){return t.chatUser},chatHistory:function(t){return t.chatHistory},notification:function(t){return t.notification}}});a["a"].use(yt["a"],Ot,{store:gt}),a["a"].config.productionTip=!1,new a["a"]({store:gt,render:function(t){return t(vt)}}).$mount("#app")},9712:function(t,e,n){"use strict";var a=n("a682"),o=n.n(a);o.a},"981a":function(t,e,n){"use strict";var a=n("52c5"),o=n.n(a);o.a},"981f":function(t,e,n){},a682:function(t,e,n){}});
//# sourceMappingURL=app.15662f7e.js.map