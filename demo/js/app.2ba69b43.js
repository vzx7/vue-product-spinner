(function(e){function n(n){for(var i,s,a=n[0],u=n[1],l=n[2],h=0,d=[];h<a.length;h++)s=a[h],r[s]&&d.push(r[s][0]),r[s]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);c&&c(n);while(d.length)d.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],i=!0,a=1;a<t.length;a++){var u=t[a];0!==r[u]&&(i=!1)}i&&(o.splice(n--,1),e=s(s.s=t[0]))}return e}var i={},r={app:0},o=[];function s(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=i,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)s.d(t,i,function(n){return e[n]}.bind(null,i));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/vue-product-spinner/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=n,a=a.slice();for(var l=0;l<a.length;l++)n(a[l]);var c=u;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},1549:function(e,n,t){},"17af":function(e,n,t){"use strict";t("caf5")},"56d7":function(e,n,t){"use strict";t.r(n);var i=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("Ribbon"),t("DemoCommands"),t("div",{staticClass:"demo demo-1"},[t("VueProductSpinner",{attrs:{images:e.productImages,slider:e.props.slider,infinite:e.props.infinite,mouseWheel:e.props.mouseWheel,animation:e.props.animation,sliderClass:"demo-slider"}},[t("PulseLoader",{attrs:{color:"#3f51b5"}})],1)],1),t("div",{staticClass:"demo demo-2"},[t("VueProductSpinner",{attrs:{images:e.shoeImages,slider:e.props.slider,infinite:e.props.infinite,mouseWheel:e.props.mouseWheel,animation:e.props.animation,sliderClass:"demo-slider"}},[t("PulseLoader",{attrs:{color:"#3f51b5"}})],1)],1)],1)},o=[],s=(t("ac6a"),t("ac4d"),t("8a81"),t("5df3"),t("1c4c"),t("6b54"),t("7f7f"),t("75fc")),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("picture",{ref:"componentContainer",staticClass:"vue-product-spinner"},[e.imagesPreloaded?[t("img",{attrs:{tabindex:"1",draggable:"false",src:e.spinner.currentPath},on:{keydown:e.handleKeydown,mouseup:e.handleMouseUp,mousedown:e.handleMouseDown,mousemove:e.handleMouseMove,touchstart:e.handleTouchStart,touchend:e.handleTouchEnd,touchmove:e.handleTouchMove}}),e.slider?t("input",{staticClass:"vue-product-spinner-slider",class:e.sliderClass,attrs:{type:"range",tabindex:"1",min:"1",max:e.spinner.size},domProps:{value:e.spinner.current},on:{input:e.handleSlider}}):e._e()]:e._t("default",[e._v("Loading images...")])],2)},u=[],l=t("768b");t("c5f6");function c(e){function n(e){return new Promise((function(n,t){var i=new Image;i.onload=function(){n(i)},i.onerror=i.onabort=function(){t(e)},i.src=e}))}for(var t=[],i=0;i<e.length;i++)t.push(n(e[i]));return Promise.all(t)}var h={name:"VueProductSpinner",props:{images:{type:Array,required:!0},infinite:{type:Boolean,required:!1,default:function(){return!0}},speed:{type:Number,required:!1,default:function(){return 3}},mouseWheel:{type:Boolean,required:!1,default:function(){return!1}},slider:{type:Boolean,required:!1,default:function(){return!1}},sliderClass:{type:String,required:!1,default:function(){return""}},animation:{type:Boolean,required:!1,default:function(){return!1}}},data:function(){return{imagesPreloaded:!1,speedController:0,spinner:{current:0,size:0,currentPath:null},mouse:{isMoving:!1,isDragging:!1},touch:{isMoving:!1,initialX:0,isDragging:!1},animationRequestID:0,lastPosition:0}},watch:{images:function(){this.imagesPreloaded=!1,this.handlePreload(),this.initSpinner()}},created:function(){this.initSpinner()},beforeMount:function(){this.handlePreload()},mounted:function(){window.addEventListener("mouseup",this.handleMouseDragging),window.addEventListener("touchend",this.handleTouchDragging),this.mouseWheel&&this.$refs.componentContainer.addEventListener("wheel",this.handleWheel,!1)},beforeDestroy:function(){this.mouseWheel&&this.$refs.componentContainer.removeEventListener("wheel",this.handleWheel),window.removeEventListener("mouseup",this.handleMouseDragging),window.removeEventListener("touchend",this.handleTouchDragging)},methods:{initSpinner:function(){this.spinner.size=this.images.length,this.animation?this.spinImages(0,this.spinner.size):this.spinner.currentPath=this.images[0]},handlePreload:function(){var e=this;c(this.images).then((function(){return e.imagesPreloaded=!0}))},handleKeydown:function(e){39===e.keyCode&&(e.preventDefault(),this.handleMovement(this.lastPosition+1)),37===e.keyCode&&(e.preventDefault(),this.handleMovement(this.lastPosition-1))},handleWheel:function(e){this.mouseWheel&&(e.preventDefault(),this.handleMovement(e.deltaY))},handleSlider:function(e){this.spinner.current=Number(e.target.value),this.spinner.currentPath=this.images[e.target.value-1]},handleMouseDown:function(){this.animation&&this.stopAnimation(),this.mouse.isDragging=!0,this.mouse.isMoving=!0},handleMouseUp:function(){this.mouse.isMoving=!1},handleMouseMove:function(e){this.mouse.isMoving&&this.mouse.isDragging&&this.handleMovement(e.pageX)},handleMouseDragging:function(){this.mouse.isDragging=!1},handleTouchDragging:function(){this.touch.isDragging=!1},handleTouchStart:function(e){e.preventDefault(),this.animation&&this.stopAnimation(),this.touch.isMoving=!0,this.touch.isDragging=!0,this.touch.initialX=e.touches[0].pageX},handleTouchEnd:function(){this.touch.isMoving=!1},handleTouchMove:function(e){if(this.touch.isDragging){var n=-(this.touch.initialX-e.touches[0].pageX);this.handleMovement(n)}},spinImages:function(e,n){var t=this,i=e;if(i!==n)this.spinner.currentPath=this.images[i],this.animationRequestID=window.requestAnimationFrame((function(){return t.spinImages(i,n)})),i+=1;else{this.stopAnimation();var r=Object(l["a"])(this.images,1);this.spinner.currentPath=r[0]}},stopAnimation:function(){this.animationRequestID&&(window.cancelAnimationFrame(this.animationRequestID),this.animationRequestID=null)},handleMovement:function(e){this.speedController+=1,this.speedController<this.speed||(this.speedController>this.speed&&(this.speedController=0),e>this.lastPosition?this.spinner.current>=0&&this.spinner.current<this.spinner.size?(this.spinner.current+=1,this.spinner.currentPath=this.images[this.spinner.current-1]):this.infinite&&(this.spinner.current=1,this.spinner.currentPath=this.images[this.spinner.current-1]):e<this.lastPosition&&(this.spinner.current>=0&&this.spinner.current-1>0?(this.spinner.current-=1,this.spinner.currentPath=this.images[this.spinner.current-1]):this.infinite&&(this.spinner.current=this.spinner.size,this.spinner.currentPath=this.images[this.spinner.current-1])),this.lastPosition=e)}}},d=h,m=t("2877"),p=Object(m["a"])(d,a,u,!1,null,null,null),f=p.exports,g=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"demo-commands"},[t("h3",[e._v("Play with props!")]),t("div",{staticClass:"commands"},e._l(e.commands,(function(n){return t("div",{key:n.name,staticClass:"command"},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.value,expression:"command.value"}],attrs:{type:"checkbox",id:n.name},domProps:{checked:Array.isArray(n.value)?e._i(n.value,null)>-1:n.value},on:{change:function(t){var i=n.value,r=t.target,o=!!r.checked;if(Array.isArray(i)){var s=null,a=e._i(i,s);r.checked?a<0&&e.$set(n,"value",i.concat([s])):a>-1&&e.$set(n,"value",i.slice(0,a).concat(i.slice(a+1)))}else e.$set(n,"value",o)}}}),t("label",{attrs:{for:n.name}},[e._v(" "+e._s(n.name)+" ")])])})),0)])},v=[],b=new i["a"],y={name:"DemoCommands",data:function(){return{commands:[{name:"infinite",value:!0},{name:"mouseWheel",value:!0},{name:"slider",value:!0},{name:"animation",value:!0}]}},watch:{commands:{handler:function(e){b.$emit("newCommand",e)},deep:!0}}},C=y,w=(t("e486"),Object(m["a"])(C,g,v,!1,null,null,null)),P=w.exports,M=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("a",{staticClass:"github-corner",attrs:{href:"https://github.com/micheleriva/vue-product-spinner","aria-label":"View source on GitHub"}},[t("svg",{staticStyle:{fill:"#151513",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[t("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),t("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),t("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])])},D=[],S={name:"Ribbon"},_=S,A=(t("17af"),Object(m["a"])(_,M,D,!1,null,null,null)),j=A.exports,x=t("8a5d");function O(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=L(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return s=e.done,e},e:function(e){a=!0,o=e},f:function(){try{s||null==t.return||t.return()}finally{if(a)throw o}}}}function L(e,n){if(e){if("string"===typeof e)return I(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?I(e,n):void 0}}function I(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}var $="localhost"!==window.location.hostname,q=function(){return Object(s["a"])(Array(51)).map((function(e,n){return"".concat($?"/vue-product-spinner":"","/imgs/honda/").concat(n+1,".png")}))},E=function(){return Object(s["a"])(Array(71)).map((function(e,n){return"".concat($?"/vue-product-spinner":"","/imgs/shoe/UnderArmour-").concat(n+1,".jpg")}))},T={name:"app",components:{VueProductSpinner:f,Ribbon:j,DemoCommands:P,PulseLoader:x["a"]},data:function(){return{productImages:q(),shoeImages:E(),props:{slider:!0,infinite:!0,mouseWheel:!0,animation:!0}}},methods:{handleCommands:function(e){var n,t=O(e);try{for(t.s();!(n=t.n()).done;){var i=n.value;this.props[i.name]=i.value}}catch(r){t.e(r)}finally{t.f()}}},mounted:function(){b.$on("newCommand",this.handleCommands)},beforeDestroy:function(){b.$off("newCommand",this.handleCommands)}},W=T,k=(t("a5d2"),Object(m["a"])(W,r,o,!1,null,null,null)),R=k.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(R)}}).$mount("#app")},a5d2:function(e,n,t){"use strict";t("f809")},caf5:function(e,n,t){},e486:function(e,n,t){"use strict";t("1549")},f809:function(e,n,t){}});
//# sourceMappingURL=app.2ba69b43.js.map