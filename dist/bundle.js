!function(t){function e(i){if(r[i])return r[i].exports;var o=r[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){t.exports=r(2)},function(t,e){var r=document.querySelector("a-scene");AFRAME.registerComponent("box",{init:function(){this.el.setAttribute("geometry",{primitive:"box",depth:.3,height:.3,width:.3}),this.el.setAttribute("dynamic-body",{}),this.el.setAttribute("shadow",{receive:!0})}});for(var i=0;i<20;i++){var o=document.createElement("a-entity");o.setAttribute("box",""),o.setAttribute("position",{x:.01*i,y:1.1*i,z:0}),r.appendChild(o)}},function(t,e,r){r(1)}]);
//# sourceMappingURL=bundle.js.map