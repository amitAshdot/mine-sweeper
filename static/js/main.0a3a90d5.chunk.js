(this["webpackJsonpmine-game"]=this["webpackJsonpmine-game"]||[]).push([[0],{18:function(e,a,t){e.exports=t(30)},23:function(e,a,t){},24:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(9),l=t.n(r),o=(t(23),t(42)),u=(t(24),t(3)),i={BUILD:"BUILD",CLICKED:"CLICKED",RIGHT_CLICKED:"RIGHT_CLICKED",REDUCE_MINE_LEFT:"REDUCE_MINE_LEFT",INCREASE_MINE_LEFT:"INCREASE_MINE_LEFT",CHECK_CELL:"CHECK_CELL",RESET:"RESET",EMPTY:"EMPTY",TIME:"TIME",CHANGE_LEVEL:"CHANGE_LEVEL",CHANGE_SIZE:"CHANGE_SIZE",RESTART_GAME:"RESTART_GAME",PAUSE:"PAUSE",FAILED:"FAILED"},s=function(e){var a=e.split("|");return O(),{type:i.CLICKED,action:a}},v=function(e){var a=e.split("|");return{type:i.RIGHT_CLICKED,action:a}},E=function(){return{type:i.REDUCE_MINE_LEFT}},m=function(){return{type:i.INCREASE_MINE_LEFT}},d=function(e,a){b(e.id,a)},b=function(e,a){var t=e.split("|"),n=parseInt(t[0]),c=parseInt(t[1]),r=a;if(0===a[t[0]][t[1]].value){try{r[n-1][c].open||(r[n-1][c].open=!0,0===r[n-1][c].value&&d(r[n-1][c],r))}catch(l){}try{r[n+1][c].open||(r[n+1][c].open=!0,0===r[n+1][c].value&&d(r[n+1][c],r))}catch(l){}try{r[n][c-1].open||(r[n][c-1].open=!0,0===r[n][c-1].value&&d(r[n][c-1],r))}catch(l){}try{r[n][c+1].open||(r[n][c+1].open=!0,0===r[n][c+1].value&&d(r[n][c+1],r))}catch(l){}try{r[n-1][c-1].open||(r[n-1][c-1].open=!0,0===r[n-1][c-1].value&&d(r[n-1][c-1],r))}catch(l){}try{r[n-1][c+1].open||(r[n-1][c+1].open=!0,0===r[n-1][c+1].value&&d(r[n-1][c+1],r))}catch(l){}try{r[n+1][c+1].open||(r[n+1][c+1].open=!0,0===r[n+1][c+1].value&&d(r[n+1][c+1],r))}catch(l){}try{r[n+1][c-1].open||(r[n+1][c-1].open=!0,0===r[n+1][c-1].value&&d(r[n+1][c-1],r))}catch(l){}}else if(a[t[0]][t[1]].value>=15)return{type:i.FAILED};return{type:i.CHECK_CELL,payload:r}},f=function(e,a){for(var t=1===a?.15*e*e:2===a?.5*e*e:.8*e*e,n=[],c=t,r=0;r<e;r++){n[r]=[];for(var l=0;l<e;l++)n[r][l]={id:"".concat(r,"|").concat(l),mine:!1,open:!1,value:0,mark:0}}for(;!(c<=1);){var o=Math.floor(Math.random()*e),u=Math.floor(Math.random()*e);n[o][u].mine||(n[o][u]={id:"".concat(o,"|").concat(u),mine:!0,open:!1,value:15,mark:0},c--)}return p(n,e),{type:i.BUILD,action:n,amountOfMines:t}},p=function(e,a){for(var t=0;t<a;t++)for(var n=0;n<a;n++)try{e[t][n].mine&&(0===t?0===n?(e[t][n+1].value+=1,e[t+1][n].value+=1,e[t+1][n+1].value+=1):n===e.length-1?(e[t][n-1].value+=1,e[t+1][n].value+=1,e[t+1][n-1].value+=1):(e[t][n-1].value+=1,e[t][n+1].value+=1,e[t+1][n].value+=1,e[t+1][n-1].value+=1,e[t+1][n+1].value+=1):t===e.length-1?0===n?(e[t][n+1].value+=1,e[t-1][n].value+=1,e[t-1][n+1].value+=1):n===e.length-1?(e[t][n-1].value+=1,e[t-1][n].value+=1,e[t-1][n-1].value+=1):(e[t][n-1].value+=1,e[t][n+1].value+=1,e[t-1][n].value+=1,e[t-1][n-1].value+=1,e[t-1][n+1].value+=1):0===n?(e[t-1][n].value+=1,e[t+1][n].value+=1,e[t][n+1].value+=1,e[t-1][n+1].value+=1,e[t+1][n+1].value+=1):n===e.length-1?(e[t-1][n].value+=1,e[t+1][n].value+=1,e[t][n-1].value+=1,e[t-1][n-1].value+=1,e[t+1][n-1].value+=1):(e[t-1][n+1].value+=1,e[t-1][n].value+=1,e[t-1][n-1].value+=1,e[t+1][n+1].value+=1,e[t+1][n].value+=1,e[t+1][n-1].value+=1,e[t][n+1].value+=1,e[t][n-1].value+=1))}catch(c){console.log(c,"row: ".concat(t," , col: ").concat(n),"object: ".concat(e[t][n-1]))}},O=function(){return{type:i.FAILED}},j="TIME",h="RESTART_GAME",C="PAUSE",I="LOADING",L=function(){return{type:h}},k=function(){return{type:I}},g=t(2),M=t(16),y=function(e){var a=Object(u.b)(),t=e.cell.open?e.cell.value>=15?c.a.createElement("i",{className:"fa fa-bomb","aria-hidden":"true"}):0===e.cell.value?null:e.cell.value:1===e.mark?c.a.createElement("i",{className:"fa fa-flag","aria-hidden":"true"}):2===e.mark?c.a.createElement("i",{className:"fa fa-question","aria-hidden":"true"}):null,r={color:e.cell.value>=15&&e.cell.open?"black":1===e.cell.value&&e.cell.open?"#047933":2===e.cell.value&&e.cell.open?"#0c0398":3===e.cell.value&&e.cell.open?"red":e.cell.open||1!==e.cell.mark?e.cell.open||2!==e.cell.mark?"black":"#dbce23":"#e50808",backgroundColor:e.cell.mine&&e.cell.open?"red":e.cell.open?"#d1c8ffc9":!e.cell.open&&1===e.cell.mark||2===e.cell.mark?"#484362":"#998fd0"},l=Object(n.useState)({longpress:250,start:0}),o=Object(M.a)(l,2),i=o[0],d=o[1],f=function(e){e=e||window.event;var a=(new Date).getTime();d(Object(g.a)(Object(g.a)({},i),{},{start:a}))},p=function(e){e=e||window.event,d(Object(g.a)(Object(g.a)({},i),{},{start:0}))},O=function(t){if(t.preventDefault(),t=t||window.event,(new Date).getTime()>=i.start+i.longpress)a(v(e.cell.id)),1===e.cell.mark?a(E()):2===e.cell.mark&&a(m());else switch(window.event.which){case 1:a(s(e.cell.id)),a(b(e.cell.id,e.board.board));break;case 3:a(v(e.cell.id)),1===e.cell.mark?a(E()):2===e.cell.mark&&a(m());break;default:return-1}};return c.a.createElement("button",{variant:"contained",onMouseUp:O,onMouseDown:f,onMouseLeave:p,onTouchStart:f,onTouchEnd:O,onTouchCancel:p,disabled:e.cell.open,style:r},t)},T=function(e){var a=Object(u.c)((function(e){return e.board})),t=Object(u.b)();Object(n.useEffect)((function(){return t(k()),t(f(a.size,1)),t(k()),function(){return null}}),[]);var r=a.board.map((function(e,n){return c.a.createElement("div",{className:"row",key:n},e.map((function(e,n){return c.a.createElement("div",{className:"cell",key:n,id:e.id},c.a.createElement(y,{board:a,value:e.value,mark:e.mark,cell:e,clicked:function(){return t(s(e.id))},rightClicked:function(){return t(v(e.id))}}))})))}));return c.a.createElement("div",null,c.a.createElement("div",{className:"board"},r))},N=function(e){return c.a.createElement("button",{className:"settingBtn",onClick:e.onclick},e.text)},_=function(){var e=Object(u.c)((function(e){return e.setting})),a=Object(u.c)((function(e){return e.board})),t=Object(u.b)();Object(n.useEffect)((function(){var a=null;return e.pause||(a=setInterval((function(){t({type:j})}),1e3)),function(){return clearInterval(a)}}),[e.pause]);return c.a.createElement("div",null,c.a.createElement("div",{className:"stats"},c.a.createElement("div",{className:"stats-time"},e.time),c.a.createElement("div",{className:"stats-minesLeft"},parseFloat(a.amountOfMines).toFixed(0))),c.a.createElement(N,{text:"Pause",onclick:function(){return t(function(e){var a=1===e?0:1;return{type:C,payload:a}}(e.pause))}}),c.a.createElement(N,{text:"start over",onclick:function(){return t(f(e.size,e.lvl)),void t(L())}}),c.a.createElement(N,{text:"change level"}))},A=function(){var e=Object(u.c)((function(e){return e.setting})),a=(Object(u.c)((function(e){return e.board})),Object(u.b)());return c.a.createElement("div",{className:"failed"},c.a.createElement("h2",null,"YOU SUCK... AND DEAD!"),c.a.createElement("h3",null,"game over! start over?"),c.a.createElement("button",{className:"startOverBtn",onClick:function(){a(f(e.size,e.lvl)),a(L())}},"Play Again"))};var D=function(){var e=Object(u.c)((function(e){return e.setting})),a=Object(u.c)((function(e){return e.board})),t=function(){var t=null;return 1===e.pause&&(t=c.a.createElement("div",null,c.a.createElement(_,null),"PAUSED ")),0===e.pause&&(t=c.a.createElement("div",null,c.a.createElement(_,null)," ",c.a.createElement(T,null)," ")),1===e.success&&(t=c.a.createElement("div",null,"success ")),1===a.fail&&(t=c.a.createElement(A,null)),t}(),n=c.a.createElement("div",{className:"loading"},c.a.createElement(o.a,null));return c.a.createElement("div",{className:"App"},e.isLoading?n:t)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=t(6),R=t(14),S={board:[],amountOfMines:0,lvl:1,size:9,fail:0,time:0,pause:0},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case i.BUILD:return Object(g.a)(Object(g.a)({},e),{},{board:a.action,amountOfMines:a.amountOfMines,fail:0});case i.CLICKED:var t=e.board,n=a.action[0],c=a.action[1],r=e.board[n].filter((function(e){return e.id==="".concat(n,"|").concat(c)}));return 1!==r[0].mark?(r[0].open=!0,t[n][c]=Object(g.a)(Object(g.a)({},t[n][c]),{},{open:!0}),Object(g.a)(Object(g.a)({},e),{},{board:t})):Object(g.a)({},e);case i.RIGHT_CLICKED:var l=e.board,o=a.action[0],u=a.action[1],s=e.board[o].filter((function(e){return e.id==="".concat(o,"|").concat(u)}));return s[0].mark+=1,s[0].mark>2&&(s[0].mark=0),l[o][u]=Object(g.a)(Object(g.a)({},l[o][u]),{},{mark:s[0].mark}),Object(g.a)(Object(g.a)({},e),{},{board:l});case i.CHECK_CELL:return Object(g.a)(Object(g.a)({},e),{},{board:a.payload});case i.REDUCE_MINE_LEFT:return Object(g.a)(Object(g.a)({},e),{},{amountOfMines:e.amountOfMines-1});case i.INCREASE_MINE_LEFT:return Object(g.a)(Object(g.a)({},e),{},{amountOfMines:e.amountOfMines+1});case i.TIME:var v=e.time+1;return Object(g.a)(Object(g.a)({},e),{},{time:v});case i.RESTART_GAME:var E=0;return Object(g.a)(Object(g.a)({},e),{},{time:E});case i.PAUSE:var m=a.payload;return Object(g.a)(Object(g.a)({},e),{},{pause:m});case i.FAILED:var d=1;return Object(g.a)(Object(g.a)({},e),{},{fail:d});default:return Object(g.a)({},e)}},F={lvl:1,size:9,time:0,pause:0,restart:0,success:0,isLoading:0},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case I:var t=!e.isLoading;return Object(g.a)(Object(g.a)({},e),{},{isLoading:t});case j:var n=e.time+1;return Object(g.a)(Object(g.a)({},e),{},{time:n});case h:return Object(g.a)(Object(g.a)({},e),{},{time:0,pause:0,restart:0,success:0,isLoading:0});case C:var c=a.payload;return Object(g.a)(Object(g.a)({},e),{},{pause:c});default:return Object(g.a)({},e)}},K=t(15),H=Object(w.combineReducers)({setting:G,board:U}),P=Object(w.createStore)(H,Object(K.composeWithDevTools)(Object(w.applyMiddleware)(R.a)));l.a.render(c.a.createElement(u.a,{store:P},c.a.createElement(c.a.StrictMode,null,c.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.0a3a90d5.chunk.js.map