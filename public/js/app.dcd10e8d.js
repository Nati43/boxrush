(function(t){function e(e){for(var n,o,a=e[0],l=e[1],c=e[2],f=0,d=[];f<a.length;f++)o=a[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],n=!0,a=1;a<s.length;a++){var l=s[a];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=s[0]))}return t}var n={},i={app:0},r=[];function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(s,n,function(e){return t[e]}.bind(null,n));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},2506:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),i=s("5f5b");s("ab8b"),s("2dd8");n["default"].use(i["a"]);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex flex-column align-items-center",attrs:{id:"app"}},[t.started?s("Box",{staticClass:"px-5",attrs:{id:t.id,cols:t.cols,rows:t.rows,socket:t.socket,player:t.player,roomID:t.roomID,name:t.name,room:t.room}}):1==t.player?s("div",{staticClass:"d-inline-flex flex-column align-items-center mx-5"},[t.roomID?s("div",[s("p",{staticClass:"font-weight-bold text-light"},[t._v("Waiting for other player"),t.numberOfPlayers>2?s("span",[t._v("s")]):t._e()]),s("b-spinner",{attrs:{label:"Waiting...",variant:"info",type:"grow"}}),s("p",{staticClass:"pt-3 font-weight-bold text-light"},[t._v("Invite a friend to join using the link below.")]),s("p",{staticClass:"link text-info"},[t._v("https://boxrush.herokuapp.com/?game="+t._s(t.roomID))])],1):s("div",{staticClass:"d-inline-flex flex-column align-items-center"},[s("div",{staticClass:"logo d-flex align-items-center px-3"},[s("div",{staticClass:"boxes"},[s("p",{staticClass:"title text-left small m-0 p-0 text-info font-weight-bold h1"},[t._v("▢▣")]),s("p",{staticClass:"title text-left small m-0 p-0 text-info font-weight-bold h1"},[t._v("▣▢")])]),s("span",{staticClass:"text-info h4 font-weight-cold title ml-3 my-auto"},[t._v("BoxRush")])]),s("p",{staticClass:"h3 font-weight-bold text-light title mt-3"},[t._v("Welcome!")]),s("p",{staticClass:"pt-3 font-weight-bold text-light"},[t._v(" This is the BoxRush game. "),s("br"),t._v(" Please choose grid size, number of players "),s("br"),t._v(" enter your first name, and start. ")]),s("p",{staticClass:"pt-3 font-weight-bold text-light"},[t._v("Grid Size")]),s("div",{staticClass:"d-flex align-items-center"},[s("b-form-spinbutton",{staticClass:"border-0 bg-transparent text-light font-weight-bold",attrs:{wrap:"",min:"4",max:"9",vertical:""},scopedSlots:t._u([{key:"increment",fn:function(){return[s("span",{staticClass:"text-light"},[t._v("↑")])]},proxy:!0},{key:"decrement",fn:function(){return[s("span",{staticClass:"text-light"},[t._v("↓")])]},proxy:!0}],null,!1,830504397),model:{value:t.cols,callback:function(e){t.cols=e},expression:"cols"}}),s("span",{staticClass:"mx-3 font-weight-bold text-light"},[t._v("x")]),s("b-form-spinbutton",{staticClass:"border-0 bg-transparent text-light font-weight-bold",attrs:{wrap:"",min:"4",max:"9",vertical:""},scopedSlots:t._u([{key:"increment",fn:function(){return[s("span",{staticClass:"text-light"},[t._v("↑")])]},proxy:!0},{key:"decrement",fn:function(){return[s("span",{staticClass:"text-light"},[t._v("↓")])]},proxy:!0}],null,!1,830504397),model:{value:t.rows,callback:function(e){t.rows=e},expression:"rows"}})],1),s("p",{staticClass:"pt-3 font-weight-bold text-light"},[t._v("Number of Players")]),s("div",{staticClass:"d-flex align-items-center mb-5"},[s("b-form-spinbutton",{staticClass:"border-0 bg-transparent text-light font-weight-bold",attrs:{wrap:"",min:"2",max:"4",vertical:""},scopedSlots:t._u([{key:"increment",fn:function(){return[s("span",{staticClass:"text-light"},[t._v("↑")])]},proxy:!0},{key:"decrement",fn:function(){return[s("span",{staticClass:"text-light"},[t._v("↓")])]},proxy:!0}],null,!1,830504397),model:{value:t.numberOfPlayers,callback:function(e){t.numberOfPlayers=e},expression:"numberOfPlayers"}})],1),s("b-input-group",{staticClass:"d-inline-flex w-75"},[s("b-input",{staticClass:"bg-transparent text-light rounded mx-2",attrs:{type:"text",placeholder:"First name"},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.start.apply(null,arguments)}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),s("b-button",{attrs:{variant:"outline-info px-3"},on:{click:t.start}},[t._v(" Start ")]),t.nameError?s("b-form-invalid-feedback",{staticClass:"text-left ml-4",attrs:{state:!1}},[t._v(" First name is required ")]):t._e()],1)],1)]):2==t.player?s("div",{staticClass:"d-inline-flex flex-column align-items-center m-5"},[t.expired||t.joined?!t.expired&&t.joined?s("div",[s("p",{staticClass:"font-weight-bold text-light"},[t._v("Waiting for other player"),t.numberOfPlayers>2?s("span",[t._v("s")]):t._e()]),s("b-spinner",{attrs:{label:"Waiting...",variant:"info",type:"grow"}})],1):t.expired?s("div",[s("p",{staticClass:"font-weight-bold text-danger"},[t._v(t._s(t.expired))]),s("b-button",{attrs:{variant:"outline-info",to:t.origin}},[t._v(" Start a new one ")])],1):t._e():s("div",[s("div",{staticClass:"logo d-flex align-items-center px-3"},[s("div",{staticClass:"boxes"},[s("p",{staticClass:"title text-left small m-0 p-0 text-info font-weight-bold h1"},[t._v("▢▣")]),s("p",{staticClass:"title text-left small m-0 p-0 text-info font-weight-bold h1"},[t._v("▣▢")])]),s("span",{staticClass:"text-info h4 font-weight-cold title ml-3 my-auto"},[t._v("BoxRush")])]),s("p",{staticClass:"h3 font-weight-bold text-light title"},[t._v("Welcome!")]),s("p",{staticClass:"pt-3 mt-3 mb-5 font-weight-bold text-light"},[t._v(" This is the BoxRush game. "),s("br"),t._v(" Enter your first name and join. ")]),s("b-input-group",{staticClass:"d-inline-flex w-75"},[s("b-input",{staticClass:"bg-transparent text-light",attrs:{type:"text",placeholder:"First name"},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.join.apply(null,arguments)}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),s("b-button",{attrs:{variant:"outline-info"},on:{click:t.join}},[t._v(" Join ")]),t.nameError?s("b-form-invalid-feedback",{staticClass:"text-left ml-4",attrs:{state:!1}},[t._v(" First name is required ")]):t._e()],1)],1)]):t._e()],1)},o=[],a=(s("d3b7"),s("3ca3"),s("ddb0"),s("2b3d"),s("ac1f"),s("841c"),s("25eb"),s("a9e3"),s("1276"),s("b0c0"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.cols&&t.rows?s("div",{staticClass:"d-inline-block",staticStyle:{width:"100%","max-width":"500px"}},[t._m(0),s("div",{staticClass:"mb-4 d-flex flex-column justify-content-between align-items-end"},[s("p",{staticClass:"font-weight-bold text-light d-flex flex-column align-items-start"},[t.winner?t._e():s("span",{staticClass:"badge text-success p-2",class:{"text-success":t.turn,"text-danger":!t.turn},domProps:{textContent:t._s(t.turn?"Your move ..":"Opponents move ..")}}),!t.turn&&t.winner?s("span",[t._v(" Winner: "),s("span",{staticClass:"badge badge-info p-2"},[t._v(t._s(t.winner))])]):t._e(),!t.turn&&t.winner&&t.winner==t.name?s("span",{staticClass:"text-left text-success font-weight-bold mt-2"},[t._v(" WooHoo! "),s("br"),t._v(" You won. ")]):t._e(),!t.turn&&t.winner&&t.winner!=t.name?s("span",{staticClass:"text-left text-danger font-weight-bold mt-2"},[t._v(" Booo! "),s("br"),t._v(" You lost. ")]):t._e()]),s("div",{staticClass:"d-flex flex-row flex-wrap justify-content-start align-items-end w-100"},t._l(t.scores,(function(e,n){return s("p",{key:n,staticClass:"mx-auto font-weight-bold text-light btn m-0 p-0 d-inline-block text-left"},[s("span",{staticClass:"badge border border-info border-left-0 border-right-0 rounded-0 px-3 py-2"},[t._v(t._s(n))]),s("span",{staticClass:"badge badge-info  px-3 py-2"},[s("span",{staticClass:"h5 font-weight-bold"},[t._v(t._s(e))])])])})),0)]),t._l(2*t.rows+1,(function(e){return s("div",{key:e,staticClass:"d-flex"},t._l(2*t.cols+1,(function(n){return s("div",{key:n,staticClass:"d-flex",class:{"flex-grow-1":n%2==0}},[e%2!=0&&n%2!=0?s("div",{staticClass:"border border-secondary rounded-circle bg-secondary",staticStyle:{width:"10px",height:"10px"}}):e%2!=0&&n%2==0?s("div",{ref:n+"-"+e,refInFor:!0,staticClass:"mark bg-darkish flex-grow-1",class:{line:t.turn},staticStyle:{width:"10px"},attrs:{id:n+"-"+e},on:{click:function(s){return t.markX(n,e)}}}):e%2==0&&n%2!=0?s("div",{ref:n+"-"+e,refInFor:!0,staticClass:"mark bg-darkish",class:{line:t.turn},staticStyle:{height:"50px",width:"10px"},attrs:{id:n+"-"+e},on:{click:function(s){return t.markY(n,e)}}}):e%2==0&&n%2==0?s("div",{ref:n+"-"+e,refInFor:!0,staticClass:"m-auto box font-weight-bold",staticStyle:{width:"30px"},attrs:{id:n+"-"+e,state:0}}):t._e()])})),0)})),t.winner?s("div",{staticClass:"my-5"},[s("b-button",{attrs:{variant:"outline-info",to:t.origin}},[t._v(" New Game ")])],1):t._e()],2):t._e()}),l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logo d-flex align-items-center px-3"},[s("div",{staticClass:"boxes"},[s("p",{staticClass:"title text-left small m-0 p-0 text-info font-weight-bold h1"},[t._v("▢▣")]),s("p",{staticClass:"title text-left small m-0 p-0 text-info font-weight-bold h1"},[t._v("▣▢")])]),s("span",{staticClass:"text-info h4 font-weight-cold title ml-3 my-auto"},[t._v("Boxes")])])}],c=(s("159b"),s("b64b"),{name:"Box",props:["id","cols","rows","player","socket","roomID","name","room"],data:function(){return{turn:!1,scores:{},winner:null,origin:location.origin}},mounted:function(){var t=this;this.room.players.forEach((function(e){t.scores[e.name]=0})),this.$forceUpdate(),1==this.player&&(this.turn=!0),this.socket.on("markedX",(function(e){if(!t.$refs[e.col+"-"+e.row][0].hasAttribute("active")){if(e.row>1){var s=t.$refs[e.col+"-"+(e.row-1)][0];s.setAttribute("state",parseInt(s.getAttribute("state"))+1),4==parseInt(s.getAttribute("state"))&&(s.innerText=e.name.charAt(0),t.addScore(e.name))}if(e.row<2*t.rows+1){var n=t.$refs[e.col+"-"+(e.row+1)][0];n.setAttribute("state",parseInt(n.getAttribute("state"))+1),4==parseInt(n.getAttribute("state"))&&(n.innerText=e.name.charAt(0),t.addScore(e.name))}t.$refs[e.col+"-"+e.row][0].setAttribute("active",!0)}})),this.socket.on("markedY",(function(e){if(!t.$refs[e.col+"-"+e.row][0].hasAttribute("active")){if(e.col>1){var s=t.$refs[e.col-1+"-"+e.row][0];s.setAttribute("state",parseInt(s.getAttribute("state"))+1),4==parseInt(s.getAttribute("state"))&&(s.innerText=e.name.charAt(0),t.addScore(e.name))}if(e.col<2*t.cols+1){var n=t.$refs[e.col+1+"-"+e.row][0];n.setAttribute("state",parseInt(n.getAttribute("state"))+1),4==parseInt(n.getAttribute("state"))&&(n.innerText=e.name.charAt(0),t.addScore(e.name))}t.$refs[e.col+"-"+e.row][0].setAttribute("active",!0)}})),this.socket.on("turn",(function(e){t.id==e&&(t.turn=!0)})),this.socket.on("winner",(function(e){t.winner||(t.winner=e.name,t.turn=!1)}))},methods:{addScore:function(t){var e=this;this.scores[t]?this.scores[t]+=1:this.scores[t]=1,this.$forceUpdate();var s=Object.keys(this.scores),n=0;if(s.forEach((function(t){n+=e.scores[t]})),n==this.rows*this.cols){for(var i=s[0],r=1;r<s.length;r++)this.scores[s[r]]>this.scores[this.winner]&&(i=s[r]);this.win(i)}},win:function(t){this.socket.emit("win",{roomID:this.roomID,name:t})},markX:function(t,e){if(this.turn&&!this.$refs[t+"-"+e][0].hasAttribute("active")){this.turn=!1;var s=!1;if(e>1){var n=this.$refs[t+"-"+(e-1)][0];n.setAttribute("state",parseInt(n.getAttribute("state"))+1),4==parseInt(n.getAttribute("state"))&&(n.innerText=this.name.charAt(0),this.addScore(this.name),s=!0)}if(e<2*this.rows+1){var i=this.$refs[t+"-"+(e+1)][0];i.setAttribute("state",parseInt(i.getAttribute("state"))+1),4==parseInt(i.getAttribute("state"))&&(i.innerText=this.name.charAt(0),this.addScore(this.name),s=!0)}this.$refs[t+"-"+e][0].setAttribute("active",!0),this.socket.emit("markX",{col:t,row:e,roomID:this.roomID,name:this.name}),s?this.turn=!0:this.socket.emit("next",this.roomID)}},markY:function(t,e){if(this.turn&&!this.$refs[t+"-"+e][0].hasAttribute("active")){this.turn=!1;var s=!1;if(t>1){var n=this.$refs[t-1+"-"+e][0];n.setAttribute("state",parseInt(n.getAttribute("state"))+1),4==parseInt(n.getAttribute("state"))&&(n.innerText=this.name.charAt(0),this.addScore(this.name),s=!0)}if(t<2*this.cols+1){var i=this.$refs[t+1+"-"+e][0];i.setAttribute("state",parseInt(i.getAttribute("state"))+1),4==parseInt(i.getAttribute("state"))&&(i.innerText=this.name.charAt(0),this.addScore(this.name),s=!0)}this.$refs[t+"-"+e][0].setAttribute("active",!0),this.socket.emit("markY",{col:t,row:e,roomID:this.roomID,name:this.name}),s?this.turn=!0:this.socket.emit("next",this.roomID)}}}}),u=c,f=(s("7984"),s("2877")),d=Object(f["a"])(u,a,l,!1,null,null,null),h=d.exports,m={name:"App",components:{Box:h},data:function(){return{host:"",name:null,numberOfPlayers:2,nameError:null,cols:5,rows:5,socket:null,roomID:null,origin:location.origin,expired:null,player:1,room:null,started:!1,joined:!1,id:null}},mounted:function(){var t=new URLSearchParams(location.search);if(t.get("game")){var e=t.get("game");this.cols=Number.parseInt(e.split("-")[0]),this.rows=Number.parseInt(e.split("-")[1]),this.roomID=e,this.player=2}},methods:{start:function(){var t=this;this.name?(this.nameError=!1,this.socket=io.connect(this.host+"/games"),this.socket.on("connect",(function(){console.log("Connected to server."),t.socket.emit("createRoom",{cols:t.cols,rows:t.rows,numberOfPlayers:t.numberOfPlayers})})),this.socket.on("roomCreated",(function(e){console.log("Room created: ",e),t.roomID=e,t.socket.emit("join",{roomID:e,name:t.name})})),this.socket.on("joined",(function(e){t.room=e})),this.socket.on("id",(function(e){t.id=e})),this.socket.on("start",(function(){t.started=!0}))):this.nameError=!0},join:function(){var t=this;this.name?(this.nameError=!1,this.socket=io(this.host+"/games"),this.socket.on("connect",(function(){console.log("Connected to server."),t.socket.emit("join",{roomID:t.roomID,name:t.name})})),this.socket.on("joined",(function(e){t.room=e,t.joined=!0})),this.socket.on("id",(function(e){t.id=e})),this.socket.on("start",(function(){t.started=!0})),this.socket.on("joinError",(function(e){t.expired=e}))):this.nameError=!0}}},p=m,b=(s("034f"),Object(f["a"])(p,r,o,!1,null,null,null)),x=b.exports;n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(x)}}).$mount("#app")},7984:function(t,e,s){"use strict";s("2506")},"85ec":function(t,e,s){}});
//# sourceMappingURL=app.dcd10e8d.js.map