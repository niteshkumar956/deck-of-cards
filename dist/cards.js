function t(e){for(var i="",n=0;n<10;n++)i+="0123456789abcdefghjkmnpqrstvwxyz"[32*Math.random()|0];for(var r=i;e[r];)return t(e);return i}function e(t,e,i){for(var n in t.animate||(t.animate={}),i)t.animate[n]={duration:e,from:t[n],to:i[n]},t[n]=i[n]}function i(t,e,i){t._events||(t._events=[]),t._events.push({eventName:e,handler:i})}function n(t,e,i){t._events||(t._events=[]),t._events.filter((function(t){return t.eventName===e})).forEach((function(t){return t.handler(i)}))}var r=function(t){void 0===t&&(t={});var e=t.width;void 0===e&&(e=1920);var i=t.height;void 0===i&&(i=1080),this.width=e,this.height=i,this.cards=[],this.piles=[],this._uids={},this._cards={},this._moving=[]};function o(t,e){var i=t.x,n=t.y,r=t.width,o=t.height,s=e.x,a=e.y,h=e.width,c=e.height;return i+r>=s&&i<=s+h&&n+o>=a&&n<=a+c}r.prototype.trigger=function(t,e){n(this,t,e)},r.prototype.addDeck=function(t){this.addPile(t)},r.prototype.addPile=function(e){e.game=this,this.piles.push(e);for(var i=0;i<e.cards.length;i++){var n=e.cards[i];n.game=this,n.id=t(this._uids),this.cards.push(n),this._cards[n.id]=n}},r.prototype.pile=function(){!function(t){t.cards.sort((function(e,i){var n=t.getPos(e).z,r=t.getPos(i).z;return n>r?1:r>n?-1:0}))}(this)},r.prototype.getCard=function(t){return this._cards[t]},r.prototype.getPos=function(t,e){var i=t.x,n=t.y,r=t.z,o=t.pile,s=t.animate;void 0===s&&(s={});var a=e?function(t,e){var i=Date.now(),n={};for(var r in e){var o=e[r],s=o.duration,a=o.to,h=e[r],c=h.start,u=h.end,d=h.from;c||(c=e[r].start=Date.now(),u=e[r].end=c+s),i<u&&(n[r]=(u-Date.now())/s*(d-a))}return n}(0,s):{};return o?{x:i+(a.x||0)+o.x,y:n+(a.y||0)+o.y,z:r+(a.z||0)+o.z}:{x:i+(a.x||0),y:n+(a.y||0),z:r+(a.z||0)}};var s=function(t){void 0===t&&(t={});var e=t.x;void 0===e&&(e=0);var i=t.y;void 0===i&&(i=0);var n=t.z;void 0===n&&(n=0),this.x=e,this.y=i,this.z=n,this.cards=[]};s.prototype.intersecting=function(t,e){return o(t,e)},s.prototype.moveBack=function(t){var i=this.cards.indexOf(t);if(2===this.cards.length){var n=this.cards.find((function(e){return e!==t})),r=Math.abs(t.x-n.x),o=Math.abs(t.y-n.y);this.vertical=o>r}this.vertical?e(t,200,{x:0,y:30*i}):e(t,200,{x:15*i,y:0})},s.prototype.push=function(t){t.pile=this,t.x=t.x-this.x,t.y=t.y-this.y,this.cards.push(t),this.moveBack(t),t.z=this.cards.length},s.prototype.move=function(t){var e=this;this.cards.filter((function(e){return e!==t})).filter((function(i){return e.intersecting(t,i)})).length||this.remove(t)},s.prototype.remove=function(t){for(var i=!1,n=0;n<this.cards.length;n++){var r=this.cards[n];t===r?(t.pile=null,t.x+=this.x,t.y+=this.y,e(t,150,{z:0}),this.cards.splice(n--,1),i=!0):i&&(this.moveBack(r),r.z--)}1===this.cards.length&&this.remove(this.cards[0])};var a=function(t){var e=t.game;this.game=e,this.el=document.createElement("img"),this.el.draggable=!1,this.el.style.touchAction="none",this.el.style.position="absolute"};a.prototype.update=function(t){var e=this.game,i=t.i,n=t.side,r=t.graphics,o=t.width,s=t.height,a=r.front,h=r.back,c=e.getPos(t,!0),u=c.x,d=c.y;this.card=t;var v="back"===n?h:a[i],f="translate("+Math.round(u)+"px, "+Math.round(d)+"px)";v!==this.src&&(this.el.src=v,this.src=v),o===this.width&&s===this.height||(this.el.width=o,this.el.height=s,this.el.style.marginLeft=-o/2+"px",this.el.style.marginTop=-s/2+"px",this.width=this.width,this.height=this.height),f!==this.transform&&(this.el.style.transform=f,this.transform=f)};for(var h=new Array(54),c=0;c<h.length;c++)h[c]="img/front-"+c+".png";var u={width:102,height:144,back:"img/back.png",front:h,View:a};function d(t,e){var i=t.game.getPos(t),n=i.x,r=i.y,s=t.game.getPos(e),a=s.x,h=s.y;return o({x:n,y:r,width:e.width,height:e.height},{x:a,y:h,width:e.width,height:e.height})}var v=function(t){var n=this;void 0===t&&(t={});var r=t.i;void 0===r&&(r=0);var o=t.x;void 0===o&&(o=0);var a=t.y;void 0===a&&(a=0);var h=t.z;void 0===h&&(h=0);var c=t.graphics;void 0===c&&(c=u);var d=t.pile;this.i=r,this.x=o,this.y=a,this.z=h,this.graphics=c,this.pile=d,i(this,"move",(function(t){var i=n,r=i.game;if(i.x+=t.x,i.y+=t.y,i.pile)i.pile.move(i);else{var o=r.cards.filter((function(t){return!t.pile})).filter((function(t){return i!==t})).filter((function(t){return i.intersecting(t)})),s=r.piles.filter((function(t){return t.cards.find((function(t){return i.intersecting(t)}))})).map((function(t){return Object.assign({},t,{z:Math.max.apply(Math,t.cards.map((function(t){return t.z})))})})),a=Math.max.apply(Math,[-1].concat(o.concat(s).map((function(t){return t.z}))))+1;i.z!==a&&e(i,150,{z:a}),r.pile()}})),i(this,"moveend",(function(){var t=n,e=t.game;if(t.pile)t.pile.moveBack(t);else{var i=e.piles.find((function(e){return e.cards.find((function(e){return t.intersecting(e)}))}));if(i)return i.push(t),void e.pile();var r=e.cards.filter((function(e){return t!==e})).filter((function(t){return!t.pile})).find((function(e){return t.intersecting(e)}));if(r){var o=new s;o.x=r.x,o.y=r.y;var a=t.x-r.x,h=t.y-r.y;Math.abs(h)>Math.abs(a)&&(o.vertical=!0),o.push(r),o.push(t),e.addPile(o),e.pile()}}}))},f={width:{configurable:!0},height:{configurable:!0}};v.prototype.intersecting=function(t){return d(this,t)},f.width.get=function(){return this.graphics.width},f.height.get=function(){return this.graphics.height},Object.defineProperties(v.prototype,f);var p=function(t){function i(e){var i=this;void 0===e&&(e={});var n=e.graphics;void 0===n&&(n=u),t.call(this,Object.assign({},e,{graphics:n})),this.cards=n.front.map((function(t,e){return new v({graphics:n,pile:i,i:53-e,x:-e/4,y:-e/4,z:e})}))}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i.prototype.shuffle=function(){!function(t){if(!t.length)return t;for(var e=t.length-1;e;e--){var i=Math.floor(Math.random()*(e+1)),n=t[e];t[e]=t[i],t[i]=n}}(this.cards),this.cards.forEach((function(t,e){t.x=-e/4,t.y=-e/4,t.z=e})),this.game.pile()},i.prototype.moveBack=function(t){var i=this.cards.indexOf(t);e(t,200,{x:-i/4,y:-i/4})},i.prototype.push=function(t){t.pile=this,t.x=t.x-this.x,t.y=t.y-this.y,e(t,200,{x:-this.cards.length/4,y:-this.cards.length/4}),this.cards.push(t),t.z=this.cards.length-1},i}(s),l=function(t){var e=t.game;this.game=e,this.container=document.createElement("div"),this.container.style.width=e.width+"px",this.container.style.height=e.height+"px",this.container.style.top="50%",this.container.style.left="50%",this.container.style.position="absolute",this.container.style.transform="translate(-50%, -50%)",this.views=[],this.viewsLookup={}};function g(t,e){var i=new t({game:e});return i.el.addEventListener("mousedown",n),i.el.addEventListener("touchstart",n),i;function n(t){e.trigger("cardmousedown",{view:i,e:t})}}l.prototype.mountTo=function(t){t.appendChild(this.container)},l.prototype.render=function(){for(var t=this.game,e=this.container,i=t.cards,n=new Array(i.length),r={},o=0;o<i.length;o++){var s=i[o],a=s.id,h=s.graphics.View,c=this.viewsLookup[a]||g(h,t);c.id=a,n[o]=c,r[a]=c,c.update(s)}for(var u=e.firstChild,d=0;d<n.length;d++){var v=n[d];u===v.el?u=u.nextSibling:u?e.insertBefore(v.el,u):e.appendChild(v.el)}for(;u;){var f=u.nextSibling;e.removeChild(u),u=f}this.views=n,this.viewsLookup=r};var y=new r({container:document.querySelector("#cards"),width:1920,height:1080}),m=new l({game:y}),w=new p({x:960,y:540});y.addDeck(w),function(t,e){i(t,"cardmousedown",(function(e){var i=e.view,r=e.e,o=i.id;if(!o)return;var s={x:(r.touches?r.touches[0]:r).pageX,y:(r.touches?r.touches[0]:r).pageY},a=t.getCard(o);if(a){n(a,"movestart");var h=function(t){var e=(t.touches?t.touches[0]:t).pageX,i=(t.touches?t.touches[0]:t).pageY;n(a,"move",{x:e-s.x,y:i-s.y}),s.x=e,s.y=i},c=function(t){window.removeEventListener("mousemove",h),window.removeEventListener("touchmove",h),window.removeEventListener("mouseup",c),window.removeEventListener("touchend",c),n(a,"moveend")};window.addEventListener("mousemove",h),window.addEventListener("touchmove",h),window.addEventListener("mouseup",c),window.addEventListener("touchend",c)}}))}(y),w.shuffle(),m.mountTo(document.body),function t(){requestAnimationFrame(t),m.render()}();
