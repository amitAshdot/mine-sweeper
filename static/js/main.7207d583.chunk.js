(this["webpackJsonpmine-game"]=this["webpackJsonpmine-game"]||[]).push([[0],{17:function(e,a,t){e.exports=t(29)},22:function(e,a,t){},23:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(9),l=t.n(r),u=(t(22),t(41)),o=(t(23),t(3)),i={BUILD:"BUILD",CLICKED:"CLICKED",RIGHT_CLICKED:"RIGHT_CLICKED",REDUCE_MINE_LEFT:"REDUCE_MINE_LEFT",INCREASE_MINE_LEFT:"INCREASE_MINE_LEFT",CHECK_CELL:"CHECK_CELL",RESET:"RESET",EMPTY:"EMPTY",TIME:"TIME",CHANGE_LEVEL:"CHANGE_LEVEL",CHANGE_SIZE:"CHANGE_SIZE",RESTART_GAME:"RESTART_GAME",PAUSE:"PAUSE",FAILED:"FAILED"},s=function(e){var a=e.split("|");return f(),{type:i.CLICKED,action:a}},v=function(e){var a=e.split("|");return{type:i.RIGHT_CLICKED,action:a}},E=function(e,a){m(e.id,a)},m=function(e,a){var t=e.split("|"),n=parseInt(t[0]),c=parseInt(t[1]),r=a;if(0===a[t[0]][t[1]].value){try{r[n-1][c].open||(r[n-1][c].open=!0,0===r[n-1][c].value&&E(r[n-1][c],r))}catch(l){}try{r[n+1][c].open||(r[n+1][c].open=!0,0===r[n+1][c].value&&E(r[n+1][c],r))}catch(l){}try{r[n][c-1].open||(r[n][c-1].open=!0,0===r[n][c-1].value&&E(r[n][c-1],r))}catch(l){}try{r[n][c+1].open||(r[n][c+1].open=!0,0===r[n][c+1].value&&E(r[n][c+1],r))}catch(l){}try{r[n-1][c-1].open||(r[n-1][c-1].open=!0,0===r[n-1][c-1].value&&E(r[n-1][c-1],r))}catch(l){}try{r[n-1][c+1].open||(r[n-1][c+1].open=!0,0===r[n-1][c+1].value&&E(r[n-1][c+1],r))}catch(l){}try{r[n+1][c+1].open||(r[n+1][c+1].open=!0,0===r[n+1][c+1].value&&E(r[n+1][c+1],r))}catch(l){}try{r[n+1][c-1].open||(r[n+1][c-1].open=!0,0===r[n+1][c-1].value&&E(r[n+1][c-1],r))}catch(l){}}else if(a[t[0]][t[1]].value>=15)return{type:i.FAILED};return{type:i.CHECK_CELL,payload:r}},d=function(e,a){for(var t=1===a?.15*e*e:2===a?.5*e*e:.8*e*e,n=[],c=t,r=0;r<e;r++){n[r]=[];for(var l=0;l<e;l++)n[r][l]={id:"".concat(r,"|").concat(l),mine:!1,open:!1,value:0,mark:0}}for(;!(c<=1);){var u=Math.floor(Math.random()*e),o=Math.floor(Math.random()*e);n[u][o].mine||(n[u][o]={id:"".concat(u,"|").concat(o),mine:!0,open:!1,value:15,mark:0},c--)}return b(n,e),{type:i.BUILD,action:n,amountOfMines:t}},b=function(e,a){for(var t=0;t<a;t++)for(var n=0;n<a;n++)try{e[t][n].mine&&(0===t?0===n?(e[t][n+1].value+=1,e[t+1][n].value+=1,e[t+1][n+1].value+=1):n===e.length-1?(e[t][n-1].value+=1,e[t+1][n].value+=1,e[t+1][n-1].value+=1):(e[t][n-1].value+=1,e[t][n+1].value+=1,e[t+1][n].value+=1,e[t+1][n-1].value+=1,e[t+1][n+1].value+=1):t===e.length-1?0===n?(e[t][n+1].value+=1,e[t-1][n].value+=1,e[t-1][n+1].value+=1):n===e.length-1?(e[t][n-1].value+=1,e[t-1][n].value+=1,e[t-1][n-1].value+=1):(e[t][n-1].value+=1,e[t][n+1].value+=1,e[t-1][n].value+=1,e[t-1][n-1].value+=1,e[t-1][n+1].value+=1):0===n?(e[t-1][n].value+=1,e[t+1][n].value+=1,e[t][n+1].value+=1,e[t-1][n+1].value+=1,e[t+1][n+1].value+=1):n===e.length-1?(e[t-1][n].value+=1,e[t+1][n].value+=1,e[t][n-1].value+=1,e[t-1][n-1].value+=1,e[t+1][n-1].value+=1):(e[t-1][n+1].value+=1,e[t-1][n].value+=1,e[t-1][n-1].value+=1,e[t+1][n+1].value+=1,e[t+1][n].value+=1,e[t+1][n-1].value+=1,e[t][n+1].value+=1,e[t][n-1].value+=1))}catch(c){console.log(c,"row: ".concat(t," , col: ").concat(n),"object: ".concat(e[t][n-1]))}},f=function(){return{type:i.FAILED}},p="TIME",O="RESTART_GAME",j="PAUSE",C="LOADING",I=function(){return{type:O}},h=function(){return{type:C}},L=function(e){var a=Object(o.b)(),t=e.cell.open?e.cell.value>=15?c.a.createElement("i",{className:"fa fa-bomb","aria-hidden":"true"}):0===e.cell.value?null:e.cell.value:1===e.mark?c.a.createElement("i",{className:"fa fa-flag","aria-hidden":"true"}):2===e.mark?c.a.createElement("i",{className:"fa fa-question","aria-hidden":"true"}):null,n={color:e.cell.value>=15&&e.cell.open?"black":1===e.cell.value&&e.cell.open?"#047933":2===e.cell.value&&e.cell.open?"#0c0398":3===e.cell.value&&e.cell.open?"red":e.cell.open||1!==e.cell.mark?e.cell.open||2!==e.cell.mark?"black":"#dbce23":"#e50808",backgroundColor:e.cell.mine&&e.cell.open?"red":e.cell.open?"#d1c8ffc9":!e.cell.open&&1===e.cell.mark||2===e.cell.mark?"#484362":"#998fd0"};return c.a.createElement("button",{variant:"contained",onMouseDown:function(t){switch(t.preventDefault(),t=t||window.event,window.event.which){case 1:a(s(e.cell.id)),a(m(e.cell.id,e.board.board));break;case 3:a(v(e.cell.id)),1===e.cell.mark?a({type:i.REDUCE_MINE_LEFT}):2===e.cell.mark&&a({type:i.INCREASE_MINE_LEFT});break;default:return-1}},disabled:e.cell.open,style:n},t)},k=function(e){var a=Object(o.c)((function(e){return e.board})),t=Object(o.b)();Object(n.useEffect)((function(){return t(h()),t(d(a.size,1)),t(h()),function(){return null}}),[]);var r=a.board.map((function(e,n){return c.a.createElement("div",{className:"row",key:n},e.map((function(e,n){return c.a.createElement("div",{className:"cell",key:n,id:e.id},c.a.createElement(L,{board:a,value:e.value,mark:e.mark,cell:e,clicked:function(){return t(s(e.id))},rightClicked:function(){return t(v(e.id))}}))})))}));return c.a.createElement("div",null,c.a.createElement("div",{className:"board"},r))},y=function(e){return c.a.createElement("button",{className:"settingBtn",onClick:e.onclick},e.text)},M=function(){var e=Object(o.c)((function(e){return e.setting})),a=Object(o.c)((function(e){return e.board})),t=Object(o.b)();Object(n.useEffect)((function(){var a=null;return e.pause||(a=setInterval((function(){t({type:p})}),1e3)),function(){return clearInterval(a)}}),[e.pause]);return c.a.createElement("div",null,c.a.createElement("div",{className:"stats"},c.a.createElement("div",{className:"stats-time"},e.time),c.a.createElement("div",{className:"stats-minesLeft"},parseFloat(a.amountOfMines).toFixed(0))),c.a.createElement(y,{text:"Pause",onclick:function(){return t(function(e){var a=1===e?0:1;return{type:j,payload:a}}(e.pause))}}),c.a.createElement(y,{text:"start over",onclick:function(){return t(d(e.size,e.lvl)),void t(I())}}),c.a.createElement(y,{text:"change level"}))},g=function(){var e=Object(o.c)((function(e){return e.setting})),a=(Object(o.c)((function(e){return e.board})),Object(o.b)());return c.a.createElement("div",{className:"failed"},c.a.createElement("h2",null,"YOU SUCK... AND DEAD!"),c.a.createElement("h3",null,"game over! start over?"),c.a.createElement("button",{className:"startOverBtn",onClick:function(){a(d(e.size,e.lvl)),a(I())}},"Play Again"))};var N=function(){var e=Object(o.c)((function(e){return e.setting})),a=Object(o.c)((function(e){return e.board})),t=function(){var t=null;return 1===e.pause&&(t=c.a.createElement("div",null,c.a.createElement(M,null),"PAUSED ")),0===e.pause&&(t=c.a.createElement("div",null,c.a.createElement(M,null)," ",c.a.createElement(k,null)," ")),1===e.success&&(t=c.a.createElement("div",null,"success ")),1===a.fail&&(t=c.a.createElement(g,null)),t}(),n=c.a.createElement("div",{className:"loading"},c.a.createElement(u.a,null));return c.a.createElement("div",{className:"App"},e.isLoading?n:t)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=t(6),A=t(14),D=t(2),T={board:[],amountOfMines:0,lvl:1,size:9,fail:0,time:0,pause:0},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case i.BUILD:return Object(D.a)(Object(D.a)({},e),{},{board:a.action,amountOfMines:a.amountOfMines,fail:0});case i.CLICKED:var t=e.board,n=a.action[0],c=a.action[1],r=e.board[n].filter((function(e){return e.id==="".concat(n,"|").concat(c)}));return 1!==r[0].mark?(r[0].open=!0,t[n][c]=Object(D.a)(Object(D.a)({},t[n][c]),{},{open:!0}),Object(D.a)(Object(D.a)({},e),{},{board:t})):Object(D.a)({},e);case i.RIGHT_CLICKED:var l=e.board,u=a.action[0],o=a.action[1],s=e.board[u].filter((function(e){return e.id==="".concat(u,"|").concat(o)}));return s[0].mark+=1,s[0].mark>2&&(s[0].mark=0),l[u][o]=Object(D.a)(Object(D.a)({},l[u][o]),{},{mark:s[0].mark}),Object(D.a)(Object(D.a)({},e),{},{board:l});case i.CHECK_CELL:return Object(D.a)(Object(D.a)({},e),{},{board:a.payload});case i.REDUCE_MINE_LEFT:return Object(D.a)(Object(D.a)({},e),{},{amountOfMines:e.amountOfMines-1});case i.INCREASE_MINE_LEFT:return Object(D.a)(Object(D.a)({},e),{},{amountOfMines:e.amountOfMines+1});case i.TIME:var v=e.time+1;return Object(D.a)(Object(D.a)({},e),{},{time:v});case i.RESTART_GAME:var E=0;return Object(D.a)(Object(D.a)({},e),{},{time:E});case i.PAUSE:var m=a.payload;return Object(D.a)(Object(D.a)({},e),{},{pause:m});case i.FAILED:var d=1;return Object(D.a)(Object(D.a)({},e),{},{fail:d});default:return Object(D.a)({},e)}},w={lvl:1,size:9,time:0,pause:0,restart:0,success:0,isLoading:0},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case C:var t=!e.isLoading;return Object(D.a)(Object(D.a)({},e),{},{isLoading:t});case p:var n=e.time+1;return Object(D.a)(Object(D.a)({},e),{},{time:n});case O:return Object(D.a)(Object(D.a)({},e),{},{time:0,pause:0,restart:0,success:0,isLoading:0});case j:var c=a.payload;return Object(D.a)(Object(D.a)({},e),{},{pause:c});default:return Object(D.a)({},e)}},F=t(15),U=Object(_.combineReducers)({setting:S,board:R}),G=Object(_.createStore)(U,Object(F.composeWithDevTools)(Object(_.applyMiddleware)(A.a)));l.a.render(c.a.createElement(o.a,{store:G},c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.7207d583.chunk.js.map