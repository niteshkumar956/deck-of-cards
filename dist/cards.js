function t(e){for(var i="",n=0;n<10;n++)i+="0123456789abcdefghjkmnpqrstvwxyz"[32*Math.random()|0];for(var r=i;e[r];)return t(e);return i}var e=function(t){void 0===t&&(t={});var e=t.width;void 0===e&&(e=1920);var i=t.height;void 0===i&&(i=1080),this.container=document.createElement("div"),this.container.style.position="absolute",this.container.style.top="50%",this.container.style.left="50%",this.width=e,this.height=i,this.cards=[],this.piles=[],this._uids={},this._cards={},this._moving=[]},i={width:{configurable:!0},height:{configurable:!0}};function n(t,e){var i=t.x,n=t.y,r=t.width,o=t.height,a=e.x,s=e.y,h=e.width,c=e.height;return i+r>=a&&i<=a+h&&n+o>=s&&n<=s+c}function r(t,e,i){for(var n in t.animate||(t.animate={}),i)t.animate[n]={duration:e,from:t[n],to:i[n]},t[n]=i[n]}i.width.get=function(){return this._width},i.width.set=function(t){this.container.style.width=t+"px",this.container.style.marginLeft=-t/2+"px",this._width=t},i.height.get=function(){return this._height},i.height.set=function(t){this.container.style.height=t+"px",this.container.style.marginTop=-t/2+"px",this._height=t},e.prototype.mountTo=function(t){t.appendChild(this.container)},e.prototype.addDeck=function(t){this.addPile(t)},e.prototype.addPile=function(e){e.game=this,this.piles.push(e);for(var i=0;i<e.cards.length;i++){var n=e.cards[i];n.game=this,n.id=t(this._uids),this.cards.push(n),this._cards[n.id]=n}},e.prototype.pile=function(){!function(t){t.cards.sort((function(e,i){var n=t.getPos(e).z,r=t.getPos(i).z;return n>r?1:r>n?-1:0}))}(this)},e.prototype.onmovestart=function(t){var e=t.card;t.i;e.onmovestart()},e.prototype.onmove=function(t){t.i;var e=t.card,i=t.diff;e.onmove(i)},e.prototype.onmoveend=function(t){t.card.onmoveend()},e.prototype.render=function(t){!function(t){for(var e=t.cards,i=t.container.firstChild,n=0;n<e.length;n++){for(var r=e[n],o=r.graphics;i&&"IMG"!==i.tagName;){var a=i.nextSibling;i.parentNode.removeChild(i),i=a}i||((i=document.createElement("img")).draggable=!1,i.style.touchAction="none",i.style.position="absolute",t.container.appendChild(i));var s=i,h=r.width,c=r.height,d=r.side,u=o.back,p=o.front,f=t.getRenderPos(r,!0),v=f.x,g=f.y;s.dataset.card=r.id;var y="back"===d?u:p[r.i],l="translate("+Math.round(v)+"px, "+Math.round(g)+"px)";y!==s.dataset.src&&(s.src=y,s.dataset.src=y),h!==s.dataset.width&&(s.width=h,s.style.marginLeft=-h/2+"px",s.dataset.width=h),c!==s.dataset.height&&(s.height=c,s.style.marginTop=-c/2+"px",s.dataset.height=c),l!==s.dataset.transform&&(s.style.transform=l,s.dataset.transform=l),i=i.nextSibling}for(;i;){var m=i.nextSibling;i.parentNode.removeChild(i),i=m}}(this)},e.prototype.getCard=function(t){return this._cards[t]},e.prototype.getPos=function(t,e){var i=t.x,n=t.y,r=t.z,o=t.pile,a=t.animate;void 0===a&&(a={});var s=e?function(t,e){var i=Date.now(),n={};for(var r in e){var o=e[r],a=o.duration,s=o.to,h=e[r],c=h.start,d=h.end,u=h.from;c||(c=e[r].start=Date.now(),d=e[r].end=c+a),i<d&&(n[r]=(d-Date.now())/a*(u-s))}return n}(0,a):{};return o?{x:i+(s.x||0)+o.x,y:n+(s.y||0)+o.y,z:r+(s.z||0)+o.z}:{x:i+(s.x||0),y:n+(s.y||0),z:r+(s.z||0)}},e.prototype.getRenderPos=function(t,e){var i=this.getPos(t,e),n=i.x,r=i.y,o=i.z;return{x:n-o/4,y:r-o/4}},e.prototype.addMouse=function(){!function(t){t.container.onmousedown=t.container.ontouchstart=function(e){var i=(e.target.dataset||{}).card;if(i){var n={x:(e.touches?e.touches[0]:e).pageX,y:(e.touches?e.touches[0]:e).pageY},r=t.getCard(i);if(r){t.onmovestart({card:r});var o=function(e){var i=(e.touches?e.touches[0]:e).pageX,o=(e.touches?e.touches[0]:e).pageY;t.onmove({card:r,diff:{x:i-n.x,y:o-n.y}}),n.x=i,n.y=o},a=function(e){window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",a),window.removeEventListener("touchmove",o),window.removeEventListener("touchend",a),t.onmoveend&&t.onmoveend({card:r})};window.addEventListener("mousemove",o),window.addEventListener("mouseup",a),window.addEventListener("touchmove",o),window.addEventListener("touchend",a)}}}}(this)},Object.defineProperties(e.prototype,i);var o=function(t){void 0===t&&(t={});var e=t.x;void 0===e&&(e=0);var i=t.y;void 0===i&&(i=0);var n=t.z;void 0===n&&(n=0),this.x=e,this.y=i,this.z=n,this.cards=[]};o.prototype.intersecting=function(t,e){return n(t,e)},o.prototype.moveBack=function(t){r(t,200,{x:15*this.cards.indexOf(t),y:0})},o.prototype.push=function(t){t.pile=this,t.x=t.x-this.x,t.y=t.y-this.y,r(t,200,{x:15*this.cards.length,y:0}),this.cards.push(t),t.z=this.cards.length},o.prototype.move=function(t){var e=this;this.cards.filter((function(e){return e!==t})).filter((function(i){return e.intersecting(t,i)})).length||this.remove(t)},o.prototype.remove=function(t){for(var e=!1,i=0;i<this.cards.length;i++){var n=this.cards[i];t===n?(t.pile=null,t.x+=this.x,t.y+=this.y,r(t,150,{z:0}),this.cards.splice(i--,1),e=!0):e&&(this.moveBack(n),n.z--)}};for(var a=new Array(54),s=0;s<a.length;s++)a[s]="standard-deck/front-"+s+".png";var h={width:102,height:144,back:"standard-deck/back.png",front:a},c=function(t){void 0===t&&(t={});var e=t.i;void 0===e&&(e=0);var i=t.x;void 0===i&&(i=0);var n=t.y;void 0===n&&(n=0);var r=t.z;void 0===r&&(r=0);var o=t.graphics;void 0===o&&(o=h);var a=t.pile;this.i=e,this.x=i,this.y=n,this.z=r,this.graphics=o,this.pile=a},d={width:{configurable:!0},height:{configurable:!0}};c.prototype.intersecting=function(t){var e=this.game.getPos(this),i=e.x,r=e.y,o=this.game.getPos(t),a=o.x,s=o.y;return n({x:i,y:r,width:t.width,height:t.height},{x:a,y:s,width:t.width,height:t.height})},c.prototype.onmovestart=function(){},c.prototype.onmove=function(t){var e=this,i=e.game;if(e.x+=t.x,e.y+=t.y,e.pile)e.pile.move(e);else{var n=i.cards.filter((function(t){return!t.pile})).filter((function(t){return e!==t})).filter((function(t){return e.intersecting(t)})),o=i.piles.filter((function(t){return t.cards.find((function(t){return e.intersecting(t)}))})).map((function(t){return Object.assign({},t,{z:Math.max.apply(Math,t.cards.map((function(t){return t.z})))})})),a=Math.max.apply(Math,[-1].concat(n.concat(o).map((function(t){return t.z}))))+1;e.z!==a&&r(e,150,{z:a}),i.pile()}},c.prototype.onmoveend=function(){var t=this,e=t.game;if(t.pile)t.pile.moveBack(t);else{var i=e.piles.find((function(e){return e.cards.find((function(e){return t.intersecting(e)}))}));if(i)return i.push(t),void e.pile();var n=e.cards.filter((function(e){return t!==e})).filter((function(t){return!t.pile})).find((function(e){return t.intersecting(e)}));if(n){var r=new o;r.x=n.x,r.y=n.y,r.push(n),r.push(t),e.addPile(r),e.pile()}}},d.width.get=function(){return this.graphics.width},d.height.get=function(){return this.graphics.height},Object.defineProperties(c.prototype,d);var u=function(t){function e(e){var i=this;void 0===e&&(e={});var n=e.graphics;void 0===n&&(n=h),t.call(this,Object.assign({},e,{graphics:n})),this.cards=n.front.map((function(t,e){return new c({graphics:n,pile:i,i:53-e,x:0,y:0,z:e})}))}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shuffle=function(){!function(t){if(!t.length)return t;for(var e=t.length-1;e;e--){var i=Math.floor(Math.random()*(e+1)),n=t[e];t[e]=t[i],t[i]=n}}(this.cards),this.cards.forEach((function(t,e){t.z=e})),this.game.pile()},e.prototype.moveBack=function(t){r(t,200,{x:0,y:0})},e.prototype.push=function(t){t.pile=this,t.x=t.x-this.x,t.y=t.y-this.y,r(t,200,{x:0,y:0}),this.cards.push(t),t.z=this.cards.length},e}(o),p=new e({width:1920,height:1080}),f=new u({x:960,y:540});p.addDeck(f),p.mountTo(document.body),p.addMouse(),f.shuffle(),function t(){requestAnimationFrame(t),p.render()}();