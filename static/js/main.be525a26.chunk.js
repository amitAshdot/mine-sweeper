(this["webpackJsonpmine-game"]=this["webpackJsonpmine-game"]||[]).push([[0],{37:function(e,a,t){e.exports=t(49)},42:function(e,a,t){},43:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(13),r=t.n(c),i=(t(42),t(64)),u=(t(43),t(4)),o={BUILD:"BUILD",CLICKED:"CLICKED",RIGHT_CLICKED:"RIGHT_CLICKED",REDUCE_MINE_LEFT:"REDUCE_MINE_LEFT",INCREASE_MINE_LEFT:"INCREASE_MINE_LEFT",CHECK_CELL:"CHECK_CELL",EMPTY:"EMPTY",SAVE_CHANGE:"SAVE_CHANGE",CHANGE_LEVEL:"CHANGE_LEVEL",CHANGE_SIZE:"CHANGE_SIZE",RESTART_GAME:"RESTART_GAME",FAILED:"FAILED",FINISH:"FINISH",RESET:"RESET"},s=function(e){var a=e.split("|");return{type:o.CLICKED,action:a}},m=function(e){var a=e.split("|");return{type:o.RIGHT_CLICKED,action:a}},v=function(){return{type:o.REDUCE_MINE_LEFT}},E=function(){return{type:o.INCREASE_MINE_LEFT}},f=function(e,a){d(e.id,a)},d=function(e,a){var t=e.split("|"),n=parseInt(t[0]),l=parseInt(t[1]),c=a;if(0===a[t[0]][t[1]].value&&1!==a[t[0]][t[1]].mark){try{c[n-1][l].open||1===c[n-1][l].mark||(c[n-1][l].open=!0,0===c[n-1][l].value&&f(c[n-1][l],c))}catch(r){}try{c[n+1][l].open||1===c[n+1][l].mark||(c[n+1][l].open=!0,0===c[n+1][l].value&&f(c[n+1][l],c))}catch(r){}try{c[n][l-1].open||1===c[n][l-1].mark||(c[n][l-1].open=!0,0===c[n][l-1].value&&f(c[n][l-1],c))}catch(r){}try{c[n][l+1].open||1===c[n][l+1].mark||(c[n][l+1].open=!0,0===c[n][l+1].value&&f(c[n][l+1],c))}catch(r){}try{c[n-1][l-1].open||1===c[n-1][l-1].mark||(c[n-1][l-1].open=!0,0===c[n-1][l-1].value&&f(c[n-1][l-1],c))}catch(r){}try{c[n-1][l+1].open||1===c[n-1][l+1].mark||(c[n-1][l+1].open=!0,0===c[n-1][l+1].value&&f(c[n-1][l+1],c))}catch(r){}try{c[n+1][l+1].open||1===c[n+1][l+1].mark||(c[n+1][l+1].open=!0,0===c[n+1][l+1].value&&f(c[n+1][l+1],c))}catch(r){}try{c[n+1][l-1].open||1===c[n+1][l-1].mark||(c[n+1][l-1].open=!0,0===c[n+1][l-1].value&&f(c[n+1][l-1],c))}catch(r){}}else if(a[t[0]][t[1]].value>=15&&1!==a[t[0]][t[1]].mark)return{type:o.FAILED};return{type:o.CHECK_CELL,payload:c}},b=function(e,a){for(var t=1===a?Math.ceil(.12*e*e):2===a?Math.ceil(.2*e*e):Math.ceil(.3*e*e),n=[],l=t,c=0;c<e;c++){n[c]=[];for(var r=0;r<e;r++)n[c][r]={id:"".concat(c,"|").concat(r),mine:!1,open:!1,value:0,mark:0}}for(;0!==l;){var i=Math.ceil(Math.random()*e-1),u=Math.ceil(Math.random()*e-1);n[i][u].mine||(n[i][u]={id:"".concat(i,"|").concat(u),mine:!0,open:!1,value:15,mark:0},l--)}return p(n,e),{type:o.BUILD,action:n,amountOfMines:t}},p=function(e,a){for(var t=0;t<a;t++)for(var n=0;n<a;n++)try{e[t][n].mine&&(0===t?0===n?(e[t][n+1].value+=1,e[t+1][n].value+=1,e[t+1][n+1].value+=1):n===e.length-1?(e[t][n-1].value+=1,e[t+1][n].value+=1,e[t+1][n-1].value+=1):(e[t][n-1].value+=1,e[t][n+1].value+=1,e[t+1][n].value+=1,e[t+1][n-1].value+=1,e[t+1][n+1].value+=1):t===e.length-1?0===n?(e[t][n+1].value+=1,e[t-1][n].value+=1,e[t-1][n+1].value+=1):n===e.length-1?(e[t][n-1].value+=1,e[t-1][n].value+=1,e[t-1][n-1].value+=1):(e[t][n-1].value+=1,e[t][n+1].value+=1,e[t-1][n].value+=1,e[t-1][n-1].value+=1,e[t-1][n+1].value+=1):0===n?(e[t-1][n].value+=1,e[t+1][n].value+=1,e[t][n+1].value+=1,e[t-1][n+1].value+=1,e[t+1][n+1].value+=1):n===e.length-1?(e[t-1][n].value+=1,e[t+1][n].value+=1,e[t][n-1].value+=1,e[t-1][n-1].value+=1,e[t+1][n-1].value+=1):(e[t-1][n+1].value+=1,e[t-1][n].value+=1,e[t-1][n-1].value+=1,e[t+1][n+1].value+=1,e[t+1][n].value+=1,e[t+1][n-1].value+=1,e[t][n+1].value+=1,e[t][n-1].value+=1))}catch(l){}},O=function(e,a,t){var n=1,l=0,c=a*a,r=Math.ceil(t);return e.map((function(e){e.map((function(e){e.mine?1!==e.mark&&(n=0):e.open&&l++}))})),l=c-l,n||r===l?{type:o.FINISH}:{type:o.EMPTY}},j="TIME",g="RESTART_GAME",h="PAUSE",C="LOADING",k="SETTINGS",N=function(){return{type:g}},I=function(){return{type:C}},y=function(e){var a=1===e?0:1;return{type:h,payload:a}},L=function(e){return{type:k,payload:1===e?0:1}},M=t(2),S=t(25),_=function(e){var a=Object(u.c)((function(e){return e.board})),t=Object(u.b)(),c=e.cell.open?e.cell.value>=15?l.a.createElement("i",{className:"fa fa-bomb","aria-hidden":"true"}):0===e.cell.value?null:e.cell.value:1===e.mark?l.a.createElement("i",{className:"fa fa-flag","aria-hidden":"true"}):2===e.mark?l.a.createElement("i",{className:"fa fa-question","aria-hidden":"true"}):null,r={color:e.cell.value>=15&&e.cell.open?"black":1===e.cell.value&&e.cell.open?"#047933":2===e.cell.value&&e.cell.open?"#0c0398":3===e.cell.value&&e.cell.open?"red":e.cell.open||1!==e.cell.mark?e.cell.open||2!==e.cell.mark?"black":"#dbce23":"#e50808",backgroundColor:e.cell.mine&&e.cell.open?"red":null},i=Object(n.useState)({longpress:250,start:0}),o=Object(S.a)(i,2),f=o[0],b=o[1],p=function(e){e.preventDefault(),e=e||window.event;var a=(new Date).getTime();b(Object(M.a)(Object(M.a)({},f),{},{start:a}))},j=function(n){if(n.preventDefault(),n=n||window.event,(new Date).getTime()>=f.start+f.longpress)(a.amountOfMines>0||"fa fa-flag"===n.target.className)&&t(m(e.cell.id)),1===e.cell.mark?t(v()):2===e.cell.mark&&t(E());else switch(window.event.which){case 0:case 1:t(s(e.cell.id)),t(d(e.cell.id,e.board.board)),t(O(a.board,a.size,a.amountOfMines));break;case 3:(a.amountOfMines>0||"fa fa-flag"===n.target.className)&&t(m(e.cell.id)),1===e.cell.mark&&a.amountOfMines>0?t(v()):2===e.cell.mark&&t(E());break;default:return-1}};return l.a.createElement("button",{onTouchStart:p,onTouchEnd:j,onMouseDown:p,onMouseLeave:function(e){e.preventDefault(),e=e||window.event,b(Object(M.a)(Object(M.a)({},f),{},{start:0}))},onMouseUp:j,disabled:e.cell.open,style:r,className:1===e.cell.mark?"btn flag":2===e.cell.mark?"btn question":"btn regular"},c)},A=function(e){var a=Object(u.c)((function(e){return e.board})),t=Object(u.b)();Object(n.useEffect)((function(){return 0===a.time&&(t(I()),t(b(a.size,a.lvl)),t(I())),function(){return null}}),[a.lvl,a.size]),Object(n.useEffect)((function(){(0===a.amountOfMines||a.amountCellShouldBeOpen<=1)&&t(O(a.board,a.size,a.amountOfMines))}),[a.amountOfMines]);var c=a.board.map((function(e,n){return l.a.createElement("div",{className:"row",key:n},e.map((function(e,n){return l.a.createElement("div",{className:"cell",key:n,id:e.id},l.a.createElement(_,{board:a,value:e.value,mark:e.mark,cell:e,clicked:function(){return t(s(e.id))},rightClicked:function(){return t(m(e.id))}}))})))}));return l.a.createElement("div",null,l.a.createElement("div",{className:"board"},c))},D=t(65),T=function(e){return l.a.createElement(D.a,{size:"small",variant:"contained",color:"primary",className:"settingBtn",onClick:e.onclick},e.text)},w=function(){var e=Object(u.c)((function(e){return e.setting})),a=Object(u.c)((function(e){return e.board})),t=Object(u.b)();Object(n.useEffect)((function(){return function(){return clearInterval(null)}}),[e.pause]);var c=0===e.pause?l.a.createElement("div",{className:"settings-toggle"},l.a.createElement(D.a,{size:"medium",variant:"contained",color:"primary",className:"settingBtn",onClick:function(){t(y(e.pause))}},"Settings")):l.a.createElement("div",{className:"settings-btns"},l.a.createElement(T,{text:"Start over",onclick:function(){return t(b(a.size,a.lvl)),void t(N())}}),l.a.createElement(T,{text:"Change level",onclick:function(){return t(L(e.settings))}}),l.a.createElement(D.a,{size:"small",variant:"contained",color:"primary",className:"settingBtn",onClick:function(){t(y(e.pause))}},"close"));return l.a.createElement("div",null,l.a.createElement("div",{className:"stats"},l.a.createElement("div",{className:"stats-time"},e.time),l.a.createElement("div",{className:"stats-minesLeft"},Math.ceil(a.amountOfMines))),c)},z=function(){var e=Object(u.c)((function(e){return e.board})),a=Object(u.b)();return l.a.createElement("div",{className:"failed"},l.a.createElement("h2",null,"YOU SUCK... AND DEAD!"),l.a.createElement("h3",null,"game over! start over?"),l.a.createElement(D.a,{size:"medium",variant:"contained",color:"primary",className:"startOverBtn",onClick:function(){a(b(e.size,e.lvl)),a(N())}},"Play Again"))},R=function(){var e=Object(u.c)((function(e){return e.board})),a=Object(u.b)();return l.a.createElement("div",{className:"success"},l.a.createElement("h1",null,"you did it!! you stayed alive!"),l.a.createElement(D.a,{size:"medium",variant:"contained",color:"primary",className:"startOverBtn",onClick:function(){a(b(e.size,e.lvl)),a(N()),a({type:o.RESET})}},"Play Again"))},H=t(66),G=function(){var e=Object(u.c)((function(e){return e.setting})),a=Object(u.c)((function(e){return e.board})),t=Object(u.b)(),c=Object(n.useState)({lvl:a.lvl,size:a.size}),r=Object(S.a)(c,2),i=r[0],s=r[1];return l.a.createElement("div",{className:"settings"},l.a.createElement("div",{className:"settingsItem"},"size: ",i.size,l.a.createElement(H.a,{defaultValue:a.size,step:1,marks:!0,min:5,max:20,valueLabelDisplay:"auto",onChange:function(e,a){s(Object(M.a)(Object(M.a)({},i),{},{size:a}))}})),l.a.createElement("div",{className:"settingsItem"},"lvl: ",i.lvl,l.a.createElement(H.a,{defaultValue:a.lvl,step:1,marks:!0,min:1,max:3,valueLabelDisplay:"auto",onChange:function(e,a){s(Object(M.a)(Object(M.a)({},i),{},{lvl:a}))}})),l.a.createElement("div",{className:"saveChanges-btn"},l.a.createElement(T,{text:"Save",onclick:function(){var a,n;t((a=i.size,n=i.lvl,{type:o.SAVE_CHANGE,size:a,lvl:n})),t(y(e.pause)),t(L(e.settings))}})))};var F=function(){var e=Object(u.c)((function(e){return e.setting})),a=Object(u.c)((function(e){return e.board})),t=function(){var e=null;return 1===a.fail&&(e=l.a.createElement(z,null)),1===a.finish&&(e=l.a.createElement(R,null)),e}(),n=l.a.createElement("div",{className:"loading"},l.a.createElement(i.a,null)),c=e.settings?l.a.createElement(G,null):null;return l.a.createElement("div",{className:"App"},c,e.isLoading?n:t,e.isLoading?null:l.a.createElement("div",null,l.a.createElement(w,null),l.a.createElement(A,null)," "))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=t(15),K=t(32),U={board:[],amountOfMines:5,amountCellShouldBeOpen:78,lvl:1,size:9,fail:0,time:0,pause:0,finish:0,settings:0},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case o.BUILD:return Object(M.a)(Object(M.a)({},e),{},{board:a.action,amountOfMines:a.amountOfMines,fail:0});case o.CLICKED:var t=e.board,n=a.action[0],l=a.action[1],c=e.board[n].filter((function(e){return e.id==="".concat(n,"|").concat(l)}));if(1!==c[0].mark){c[0].open=!0,t[n][l]=Object(M.a)(Object(M.a)({},t[n][l]),{},{open:!0});var r=e.amountCellShouldBeOpen-1;return Object(M.a)(Object(M.a)({},e),{},{board:t,amountCellShouldBeOpen:r})}return Object(M.a)({},e);case o.RIGHT_CLICKED:var i=e.board,u=a.action[0],s=a.action[1],m=e.board[u].filter((function(e){return e.id==="".concat(u,"|").concat(s)}));if(!m[0].open)return m[0].mark+=1,m[0].mark>2&&(m[0].mark=0),i[u][s]=Object(M.a)(Object(M.a)({},i[u][s]),{},{mark:m[0].mark}),Object(M.a)(Object(M.a)({},e),{},{board:i});case o.CHECK_CELL:return Object(M.a)(Object(M.a)({},e),{},{board:a.payload});case o.REDUCE_MINE_LEFT:return Object(M.a)(Object(M.a)({},e),{},{amountOfMines:e.amountOfMines-1});case o.INCREASE_MINE_LEFT:return Object(M.a)(Object(M.a)({},e),{},{amountOfMines:e.amountOfMines+1});case o.SAVE_CHANGE:return Object(M.a)(Object(M.a)({},e),{},{size:a.size,lvl:a.lvl});case o.FAILED:var v=1;return Object(M.a)(Object(M.a)({},e),{},{fail:v});case o.FINISH:var E=1;return Object(M.a)(Object(M.a)({},e),{},{finish:E});case o.RESET:return Object(M.a)(Object(M.a)({},e),{},{finish:0});default:return Object(M.a)({},e)}},x={time:0,pause:0,restart:0,success:0,isLoading:0,settings:0},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case C:var t=!e.isLoading;return Object(M.a)(Object(M.a)({},e),{},{isLoading:t});case j:var n=e.time+1;return Object(M.a)(Object(M.a)({},e),{},{time:n});case g:return Object(M.a)(Object(M.a)({},e),{},{time:0,pause:0,restart:0,success:0,isLoading:0});case h:var l=a.payload;return Object(M.a)(Object(M.a)({},e),{},{pause:l});case k:var c=a.payload;return Object(M.a)(Object(M.a)({},e),{},{settings:c});default:return Object(M.a)({},e)}},Y=t(33),W=Object(B.combineReducers)({setting:P,board:V}),q=Object(B.createStore)(W,Object(Y.composeWithDevTools)(Object(B.applyMiddleware)(K.a)));r.a.render(l.a.createElement(u.a,{store:q},l.a.createElement(l.a.StrictMode,null,l.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.be525a26.chunk.js.map