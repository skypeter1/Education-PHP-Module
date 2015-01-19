/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
// Underscore.js 1.3.3
// (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){function r(a,c,d){if(a===c)return 0!==a||1/a==1/c;if(null==a||null==c)return a===c;a._chain&&(a=a._wrapped);c._chain&&(c=c._wrapped);if(a.isEqual&&b.isFunction(a.isEqual))return a.isEqual(c);if(c.isEqual&&b.isFunction(c.isEqual))return c.isEqual(a);var e=l.call(a);if(e!=l.call(c))return!1;switch(e){case "[object String]":return a==""+c;case "[object Number]":return a!=+a?c!=+c:0==a?1/a==1/c:a==+c;case "[object Date]":case "[object Boolean]":return+a==+c;case "[object RegExp]":return a.source==
c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase}if("object"!=typeof a||"object"!=typeof c)return!1;for(var f=d.length;f--;)if(d[f]==a)return!0;d.push(a);var f=0,g=!0;if("[object Array]"==e){if(f=a.length,g=f==c.length)for(;f--&&(g=f in a==f in c&&r(a[f],c[f],d)););}else{if("constructor"in a!="constructor"in c||a.constructor!=c.constructor)return!1;for(var h in a)if(b.has(a,h)&&(f++,!(g=b.has(c,h)&&r(a[h],c[h],d))))break;if(g){for(h in c)if(b.has(c,h)&&!f--)break;
g=!f}}d.pop();return g}var s=this,I=s._,o={},k=Array.prototype,p=Object.prototype,i=k.slice,J=k.unshift,l=p.toString,K=p.hasOwnProperty,y=k.forEach,z=k.map,A=k.reduce,B=k.reduceRight,C=k.filter,D=k.every,E=k.some,q=k.indexOf,F=k.lastIndexOf,p=Array.isArray,L=Object.keys,t=Function.prototype.bind,b=function(a){return new m(a)};"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=b),exports._=b):s._=b;b.VERSION="1.3.3";var j=b.each=b.forEach=function(a,
c,d){if(a!=null)if(y&&a.forEach===y)a.forEach(c,d);else if(a.length===+a.length)for(var e=0,f=a.length;e<f;e++){if(e in a&&c.call(d,a[e],e,a)===o)break}else for(e in a)if(b.has(a,e)&&c.call(d,a[e],e,a)===o)break};b.map=b.collect=function(a,c,b){var e=[];if(a==null)return e;if(z&&a.map===z)return a.map(c,b);j(a,function(a,g,h){e[e.length]=c.call(b,a,g,h)});if(a.length===+a.length)e.length=a.length;return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(A&&
a.reduce===A){e&&(c=b.bind(c,e));return f?a.reduce(c,d):a.reduce(c)}j(a,function(a,b,i){if(f)d=c.call(e,d,a,b,i);else{d=a;f=true}});if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(B&&a.reduceRight===B){e&&(c=b.bind(c,e));return f?a.reduceRight(c,d):a.reduceRight(c)}var g=b.toArray(a).reverse();e&&!f&&(c=b.bind(c,e));return f?b.reduce(g,c,d,e):b.reduce(g,c)};b.find=b.detect=function(a,
c,b){var e;G(a,function(a,g,h){if(c.call(b,a,g,h)){e=a;return true}});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(C&&a.filter===C)return a.filter(c,b);j(a,function(a,g,h){c.call(b,a,g,h)&&(e[e.length]=a)});return e};b.reject=function(a,c,b){var e=[];if(a==null)return e;j(a,function(a,g,h){c.call(b,a,g,h)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=true;if(a==null)return e;if(D&&a.every===D)return a.every(c,b);j(a,function(a,g,h){if(!(e=e&&c.call(b,
a,g,h)))return o});return!!e};var G=b.some=b.any=function(a,c,d){c||(c=b.identity);var e=false;if(a==null)return e;if(E&&a.some===E)return a.some(c,d);j(a,function(a,b,h){if(e||(e=c.call(d,a,b,h)))return o});return!!e};b.include=b.contains=function(a,c){var b=false;if(a==null)return b;if(q&&a.indexOf===q)return a.indexOf(c)!=-1;return b=G(a,function(a){return a===c})};b.invoke=function(a,c){var d=i.call(arguments,2);return b.map(a,function(a){return(b.isFunction(c)?c||a:a[c]).apply(a,d)})};b.pluck=
function(a,c){return b.map(a,function(a){return a[c]})};b.max=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0])return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-Infinity;var e={computed:-Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0])return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b<e.computed&&
(e={value:a,computed:b})});return e.value};b.shuffle=function(a){var b=[],d;j(a,function(a,f){d=Math.floor(Math.random()*(f+1));b[f]=b[d];b[d]=a});return b};b.sortBy=function(a,c,d){var e=b.isFunction(c)?c:function(a){return a[c]};return b.pluck(b.map(a,function(a,b,c){return{value:a,criteria:e.call(d,a,b,c)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c===void 0?1:d===void 0?-1:c<d?-1:c>d?1:0}),"value")};b.groupBy=function(a,c){var d={},e=b.isFunction(c)?c:function(a){return a[c]};
j(a,function(a,b){var c=e(a,b);(d[c]||(d[c]=[])).push(a)});return d};b.sortedIndex=function(a,c,d){d||(d=b.identity);for(var e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<d(c)?e=g+1:f=g}return e};b.toArray=function(a){return!a?[]:b.isArray(a)||b.isArguments(a)?i.call(a):a.toArray&&b.isFunction(a.toArray)?a.toArray():b.values(a)};b.size=function(a){return b.isArray(a)?a.length:b.keys(a).length};b.first=b.head=b.take=function(a,b,d){return b!=null&&!d?i.call(a,0,b):a[0]};b.initial=function(a,b,d){return i.call(a,
0,a.length-(b==null||d?1:b))};b.last=function(a,b,d){return b!=null&&!d?i.call(a,Math.max(a.length-b,0)):a[a.length-1]};b.rest=b.tail=function(a,b,d){return i.call(a,b==null||d?1:b)};b.compact=function(a){return b.filter(a,function(a){return!!a})};b.flatten=function(a,c){return b.reduce(a,function(a,e){if(b.isArray(e))return a.concat(c?e:b.flatten(e));a[a.length]=e;return a},[])};b.without=function(a){return b.difference(a,i.call(arguments,1))};b.uniq=b.unique=function(a,c,d){var d=d?b.map(a,d):a,
e=[];a.length<3&&(c=true);b.reduce(d,function(d,g,h){if(c?b.last(d)!==g||!d.length:!b.include(d,g)){d.push(g);e.push(a[h])}return d},[]);return e};b.union=function(){return b.uniq(b.flatten(arguments,true))};b.intersection=b.intersect=function(a){var c=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a){var c=b.flatten(i.call(arguments,1),true);return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=
i.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,d){if(a==null)return-1;var e;if(d){d=b.sortedIndex(a,c);return a[d]===c?d:-1}if(q&&a.indexOf===q)return a.indexOf(c);d=0;for(e=a.length;d<e;d++)if(d in a&&a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(F&&a.lastIndexOf===F)return a.lastIndexOf(b);for(var d=a.length;d--;)if(d in a&&a[d]===b)return d;return-1};b.range=function(a,b,d){if(arguments.length<=
1){b=a||0;a=0}for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-a)/d),0),f=0,g=Array(e);f<e;){g[f++]=a;a=a+d}return g};var H=function(){};b.bind=function(a,c){var d,e;if(a.bind===t&&t)return t.apply(a,i.call(arguments,1));if(!b.isFunction(a))throw new TypeError;e=i.call(arguments,2);return d=function(){if(!(this instanceof d))return a.apply(c,e.concat(i.call(arguments)));H.prototype=a.prototype;var b=new H,g=a.apply(b,e.concat(i.call(arguments)));return Object(g)===g?g:b}};b.bindAll=function(a){var c=
i.call(arguments,1);c.length==0&&(c=b.functions(a));j(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var e=c.apply(this,arguments);return b.has(d,e)?d[e]:d[e]=a.apply(this,arguments)}};b.delay=function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(null,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,c){var d,e,f,g,h,i,j=b.debounce(function(){h=
g=false},c);return function(){d=this;e=arguments;f||(f=setTimeout(function(){f=null;h&&a.apply(d,e);j()},c));g?h=true:i=a.apply(d,e);j();g=true;return i}};b.debounce=function(a,b,d){var e;return function(){var f=this,g=arguments;d&&!e&&a.apply(f,g);clearTimeout(e);e=setTimeout(function(){e=null;d||a.apply(f,g)},b)}};b.once=function(a){var b=false,d;return function(){if(b)return d;b=true;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(i.call(arguments,0));
return b.apply(this,d)}};b.compose=function(){var a=arguments;return function(){for(var b=arguments,d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};b.after=function(a,b){return a<=0?b():function(){if(--a<1)return b.apply(this,arguments)}};b.keys=L||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var c=[],d;for(d in a)b.has(a,d)&&(c[c.length]=d);return c};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&
c.push(d);return c.sort()};b.extend=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]=b[d]});return a};b.pick=function(a){var c={};j(b.flatten(i.call(arguments,1)),function(b){b in a&&(c[b]=a[b])});return c};b.defaults=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return!b.isObject(a)?a:b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,b){return r(a,b,[])};b.isEmpty=
function(a){if(a==null)return true;if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(b.has(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=p||function(a){return l.call(a)=="[object Array]"};b.isObject=function(a){return a===Object(a)};b.isArguments=function(a){return l.call(a)=="[object Arguments]"};b.isArguments(arguments)||(b.isArguments=function(a){return!(!a||!b.has(a,"callee"))});b.isFunction=function(a){return l.call(a)=="[object Function]"};
b.isString=function(a){return l.call(a)=="[object String]"};b.isNumber=function(a){return l.call(a)=="[object Number]"};b.isFinite=function(a){return b.isNumber(a)&&isFinite(a)};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===true||a===false||l.call(a)=="[object Boolean]"};b.isDate=function(a){return l.call(a)=="[object Date]"};b.isRegExp=function(a){return l.call(a)=="[object RegExp]"};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===void 0};b.has=function(a,
b){return K.call(a,b)};b.noConflict=function(){s._=I;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};b.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};b.result=function(a,c){if(a==null)return null;var d=a[c];return b.isFunction(d)?d.call(a):d};b.mixin=function(a){j(b.functions(a),function(c){M(c,b[c]=a[c])})};var N=0;b.uniqueId=
function(a){var b=N++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var u=/.^/,n={"\\":"\\","'":"'",r:"\r",n:"\n",t:"\t",u2028:"\u2028",u2029:"\u2029"},v;for(v in n)n[n[v]]=v;var O=/\\|'|\r|\n|\t|\u2028|\u2029/g,P=/\\(\\|'|r|n|t|u2028|u2029)/g,w=function(a){return a.replace(P,function(a,b){return n[b]})};b.template=function(a,c,d){d=b.defaults(d||{},b.templateSettings);a="__p+='"+a.replace(O,function(a){return"\\"+n[a]}).replace(d.escape||
u,function(a,b){return"'+\n_.escape("+w(b)+")+\n'"}).replace(d.interpolate||u,function(a,b){return"'+\n("+w(b)+")+\n'"}).replace(d.evaluate||u,function(a,b){return"';\n"+w(b)+"\n;__p+='"})+"';\n";d.variable||(a="with(obj||{}){\n"+a+"}\n");var a="var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n"+a+"return __p;\n",e=new Function(d.variable||"obj","_",a);if(c)return e(c,b);c=function(a){return e.call(this,a,b)};c.source="function("+(d.variable||"obj")+"){\n"+a+"}";return c};
b.chain=function(a){return b(a).chain()};var m=function(a){this._wrapped=a};b.prototype=m.prototype;var x=function(a,c){return c?b(a).chain():a},M=function(a,c){m.prototype[a]=function(){var a=i.call(arguments);J.call(a,this._wrapped);return x(c.apply(b,a),this._chain)}};b.mixin(b);j("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){var b=k[a];m.prototype[a]=function(){var d=this._wrapped;b.apply(d,arguments);var e=d.length;(a=="shift"||a=="splice")&&e===0&&delete d[0];return x(d,
this._chain)}});j(["concat","join","slice"],function(a){var b=k[a];m.prototype[a]=function(){return x(b.apply(this._wrapped,arguments),this._chain)}});m.prototype.chain=function(){this._chain=true;return this};m.prototype.value=function(){return this._wrapped}}).call(this);

// Backbone.js 0.9.2

// (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// http://backbonejs.org
(function(){var l=this,y=l.Backbone,z=Array.prototype.slice,A=Array.prototype.splice,g;g="undefined"!==typeof exports?exports:l.Backbone={};g.VERSION="0.9.2";var f=l._;!f&&"undefined"!==typeof require&&(f=require("underscore"));var i=l.jQuery||l.Zepto||l.ender;g.setDomLibrary=function(a){i=a};g.noConflict=function(){l.Backbone=y;return this};g.emulateHTTP=!1;g.emulateJSON=!1;var p=/\s+/,k=g.Events={on:function(a,b,c){var d,e,f,g,j;if(!b)return this;a=a.split(p);for(d=this._callbacks||(this._callbacks=
{});e=a.shift();)f=(j=d[e])?j.tail:{},f.next=g={},f.context=c,f.callback=b,d[e]={tail:g,next:j?j.next:f};return this},off:function(a,b,c){var d,e,h,g,j,q;if(e=this._callbacks){if(!a&&!b&&!c)return delete this._callbacks,this;for(a=a?a.split(p):f.keys(e);d=a.shift();)if(h=e[d],delete e[d],h&&(b||c))for(g=h.tail;(h=h.next)!==g;)if(j=h.callback,q=h.context,b&&j!==b||c&&q!==c)this.on(d,j,q);return this}},trigger:function(a){var b,c,d,e,f,g;if(!(d=this._callbacks))return this;f=d.all;a=a.split(p);for(g=
z.call(arguments,1);b=a.shift();){if(c=d[b])for(e=c.tail;(c=c.next)!==e;)c.callback.apply(c.context||this,g);if(c=f){e=c.tail;for(b=[b].concat(g);(c=c.next)!==e;)c.callback.apply(c.context||this,b)}}return this}};k.bind=k.on;k.unbind=k.off;var o=g.Model=function(a,b){var c;a||(a={});b&&b.parse&&(a=this.parse(a));if(c=n(this,"defaults"))a=f.extend({},c,a);b&&b.collection&&(this.collection=b.collection);this.attributes={};this._escapedAttributes={};this.cid=f.uniqueId("c");this.changed={};this._silent=
{};this._pending={};this.set(a,{silent:!0});this.changed={};this._silent={};this._pending={};this._previousAttributes=f.clone(this.attributes);this.initialize.apply(this,arguments)};f.extend(o.prototype,k,{changed:null,_silent:null,_pending:null,idAttribute:"id",initialize:function(){},toJSON:function(){return f.clone(this.attributes)},get:function(a){return this.attributes[a]},escape:function(a){var b;if(b=this._escapedAttributes[a])return b;b=this.get(a);return this._escapedAttributes[a]=f.escape(null==
b?"":""+b)},has:function(a){return null!=this.get(a)},set:function(a,b,c){var d,e;f.isObject(a)||null==a?(d=a,c=b):(d={},d[a]=b);c||(c={});if(!d)return this;d instanceof o&&(d=d.attributes);if(c.unset)for(e in d)d[e]=void 0;if(!this._validate(d,c))return!1;this.idAttribute in d&&(this.id=d[this.idAttribute]);var b=c.changes={},h=this.attributes,g=this._escapedAttributes,j=this._previousAttributes||{};for(e in d){a=d[e];if(!f.isEqual(h[e],a)||c.unset&&f.has(h,e))delete g[e],(c.silent?this._silent:
b)[e]=!0;c.unset?delete h[e]:h[e]=a;!f.isEqual(j[e],a)||f.has(h,e)!=f.has(j,e)?(this.changed[e]=a,c.silent||(this._pending[e]=!0)):(delete this.changed[e],delete this._pending[e])}c.silent||this.change(c);return this},unset:function(a,b){(b||(b={})).unset=!0;return this.set(a,null,b)},clear:function(a){(a||(a={})).unset=!0;return this.set(f.clone(this.attributes),a)},fetch:function(a){var a=a?f.clone(a):{},b=this,c=a.success;a.success=function(d,e,f){if(!b.set(b.parse(d,f),a))return!1;c&&c(b,d)};
a.error=g.wrapError(a.error,b,a);return(this.sync||g.sync).call(this,"read",this,a)},save:function(a,b,c){var d,e;f.isObject(a)||null==a?(d=a,c=b):(d={},d[a]=b);c=c?f.clone(c):{};if(c.wait){if(!this._validate(d,c))return!1;e=f.clone(this.attributes)}a=f.extend({},c,{silent:!0});if(d&&!this.set(d,c.wait?a:c))return!1;var h=this,i=c.success;c.success=function(a,b,e){b=h.parse(a,e);if(c.wait){delete c.wait;b=f.extend(d||{},b)}if(!h.set(b,c))return false;i?i(h,a):h.trigger("sync",h,a,c)};c.error=g.wrapError(c.error,
h,c);b=this.isNew()?"create":"update";b=(this.sync||g.sync).call(this,b,this,c);c.wait&&this.set(e,a);return b},destroy:function(a){var a=a?f.clone(a):{},b=this,c=a.success,d=function(){b.trigger("destroy",b,b.collection,a)};if(this.isNew())return d(),!1;a.success=function(e){a.wait&&d();c?c(b,e):b.trigger("sync",b,e,a)};a.error=g.wrapError(a.error,b,a);var e=(this.sync||g.sync).call(this,"delete",this,a);a.wait||d();return e},url:function(){var a=n(this,"urlRoot")||n(this.collection,"url")||t();
return this.isNew()?a:a+("/"==a.charAt(a.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(a){return a},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},change:function(a){a||(a={});var b=this._changing;this._changing=!0;for(var c in this._silent)this._pending[c]=!0;var d=f.extend({},a.changes,this._silent);this._silent={};for(c in d)this.trigger("change:"+c,this,this.get(c),a);if(b)return this;for(;!f.isEmpty(this._pending);){this._pending=
{};this.trigger("change",this,a);for(c in this.changed)!this._pending[c]&&!this._silent[c]&&delete this.changed[c];this._previousAttributes=f.clone(this.attributes)}this._changing=!1;return this},hasChanged:function(a){return!arguments.length?!f.isEmpty(this.changed):f.has(this.changed,a)},changedAttributes:function(a){if(!a)return this.hasChanged()?f.clone(this.changed):!1;var b,c=!1,d=this._previousAttributes,e;for(e in a)if(!f.isEqual(d[e],b=a[e]))(c||(c={}))[e]=b;return c},previous:function(a){return!arguments.length||
!this._previousAttributes?null:this._previousAttributes[a]},previousAttributes:function(){return f.clone(this._previousAttributes)},isValid:function(){return!this.validate(this.attributes)},_validate:function(a,b){if(b.silent||!this.validate)return!0;var a=f.extend({},this.attributes,a),c=this.validate(a,b);if(!c)return!0;b&&b.error?b.error(this,c,b):this.trigger("error",this,c,b);return!1}});var r=g.Collection=function(a,b){b||(b={});b.model&&(this.model=b.model);b.comparator&&(this.comparator=b.comparator);
this._reset();this.initialize.apply(this,arguments);a&&this.reset(a,{silent:!0,parse:b.parse})};f.extend(r.prototype,k,{model:o,initialize:function(){},toJSON:function(a){return this.map(function(b){return b.toJSON(a)})},add:function(a,b){var c,d,e,g,i,j={},k={},l=[];b||(b={});a=f.isArray(a)?a.slice():[a];c=0;for(d=a.length;c<d;c++){if(!(e=a[c]=this._prepareModel(a[c],b)))throw Error("Can't add an invalid model to a collection");g=e.cid;i=e.id;j[g]||this._byCid[g]||null!=i&&(k[i]||this._byId[i])?
l.push(c):j[g]=k[i]=e}for(c=l.length;c--;)a.splice(l[c],1);c=0;for(d=a.length;c<d;c++)(e=a[c]).on("all",this._onModelEvent,this),this._byCid[e.cid]=e,null!=e.id&&(this._byId[e.id]=e);this.length+=d;A.apply(this.models,[null!=b.at?b.at:this.models.length,0].concat(a));this.comparator&&this.sort({silent:!0});if(b.silent)return this;c=0;for(d=this.models.length;c<d;c++)if(j[(e=this.models[c]).cid])b.index=c,e.trigger("add",e,this,b);return this},remove:function(a,b){var c,d,e,g;b||(b={});a=f.isArray(a)?
a.slice():[a];c=0;for(d=a.length;c<d;c++)if(g=this.getByCid(a[c])||this.get(a[c]))delete this._byId[g.id],delete this._byCid[g.cid],e=this.indexOf(g),this.models.splice(e,1),this.length--,b.silent||(b.index=e,g.trigger("remove",g,this,b)),this._removeReference(g);return this},push:function(a,b){a=this._prepareModel(a,b);this.add(a,b);return a},pop:function(a){var b=this.at(this.length-1);this.remove(b,a);return b},unshift:function(a,b){a=this._prepareModel(a,b);this.add(a,f.extend({at:0},b));return a},
shift:function(a){var b=this.at(0);this.remove(b,a);return b},get:function(a){return null==a?void 0:this._byId[null!=a.id?a.id:a]},getByCid:function(a){return a&&this._byCid[a.cid||a]},at:function(a){return this.models[a]},where:function(a){return f.isEmpty(a)?[]:this.filter(function(b){for(var c in a)if(a[c]!==b.get(c))return!1;return!0})},sort:function(a){a||(a={});if(!this.comparator)throw Error("Cannot sort a set without a comparator");var b=f.bind(this.comparator,this);1==this.comparator.length?
this.models=this.sortBy(b):this.models.sort(b);a.silent||this.trigger("reset",this,a);return this},pluck:function(a){return f.map(this.models,function(b){return b.get(a)})},reset:function(a,b){a||(a=[]);b||(b={});for(var c=0,d=this.models.length;c<d;c++)this._removeReference(this.models[c]);this._reset();this.add(a,f.extend({silent:!0},b));b.silent||this.trigger("reset",this,b);return this},fetch:function(a){a=a?f.clone(a):{};void 0===a.parse&&(a.parse=!0);var b=this,c=a.success;a.success=function(d,
e,f){b[a.add?"add":"reset"](b.parse(d,f),a);c&&c(b,d)};a.error=g.wrapError(a.error,b,a);return(this.sync||g.sync).call(this,"read",this,a)},create:function(a,b){var c=this,b=b?f.clone(b):{},a=this._prepareModel(a,b);if(!a)return!1;b.wait||c.add(a,b);var d=b.success;b.success=function(e,f){b.wait&&c.add(e,b);d?d(e,f):e.trigger("sync",a,f,b)};a.save(null,b);return a},parse:function(a){return a},chain:function(){return f(this.models).chain()},_reset:function(){this.length=0;this.models=[];this._byId=
{};this._byCid={}},_prepareModel:function(a,b){b||(b={});a instanceof o?a.collection||(a.collection=this):(b.collection=this,a=new this.model(a,b),a._validate(a.attributes,b)||(a=!1));return a},_removeReference:function(a){this==a.collection&&delete a.collection;a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,b,c,d){("add"==a||"remove"==a)&&c!=this||("destroy"==a&&this.remove(b,d),b&&a==="change:"+b.idAttribute&&(delete this._byId[b.previous(b.idAttribute)],this._byId[b.id]=b),this.trigger.apply(this,
arguments))}});f.each("forEach,each,map,reduce,reduceRight,find,detect,filter,select,reject,every,all,some,any,include,contains,invoke,max,min,sortBy,sortedIndex,toArray,size,first,initial,rest,last,without,indexOf,shuffle,lastIndexOf,isEmpty,groupBy".split(","),function(a){r.prototype[a]=function(){return f[a].apply(f,[this.models].concat(f.toArray(arguments)))}});var u=g.Router=function(a){a||(a={});a.routes&&(this.routes=a.routes);this._bindRoutes();this.initialize.apply(this,arguments)},B=/:\w+/g,
C=/\*\w+/g,D=/[-[\]{}()+?.,\\^$|#\s]/g;f.extend(u.prototype,k,{initialize:function(){},route:function(a,b,c){g.history||(g.history=new m);f.isRegExp(a)||(a=this._routeToRegExp(a));c||(c=this[b]);g.history.route(a,f.bind(function(d){d=this._extractParameters(a,d);c&&c.apply(this,d);this.trigger.apply(this,["route:"+b].concat(d));g.history.trigger("route",this,b,d)},this));return this},navigate:function(a,b){g.history.navigate(a,b)},_bindRoutes:function(){if(this.routes){var a=[],b;for(b in this.routes)a.unshift([b,
this.routes[b]]);b=0;for(var c=a.length;b<c;b++)this.route(a[b][0],a[b][1],this[a[b][1]])}},_routeToRegExp:function(a){a=a.replace(D,"\\$&").replace(B,"([^/]+)").replace(C,"(.*?)");return RegExp("^"+a+"$")},_extractParameters:function(a,b){return a.exec(b).slice(1)}});var m=g.History=function(){this.handlers=[];f.bindAll(this,"checkUrl")},s=/^[#\/]/,E=/msie [\w.]+/;m.started=!1;f.extend(m.prototype,k,{interval:50,getHash:function(a){return(a=(a?a.location:window.location).href.match(/#(.*)$/))?a[1]:
""},getFragment:function(a,b){if(null==a)if(this._hasPushState||b){var a=window.location.pathname,c=window.location.search;c&&(a+=c)}else a=this.getHash();a.indexOf(this.options.root)||(a=a.substr(this.options.root.length));return a.replace(s,"")},start:function(a){if(m.started)throw Error("Backbone.history has already been started");m.started=!0;this.options=f.extend({},{root:"/"},this.options,a);this._wantsHashChange=!1!==this.options.hashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=
!(!this.options.pushState||!window.history||!window.history.pushState);var a=this.getFragment(),b=document.documentMode;if(b=E.exec(navigator.userAgent.toLowerCase())&&(!b||7>=b))this.iframe=i('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(a);this._hasPushState?i(window).bind("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!b?i(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,
this.interval));this.fragment=a;a=window.location;b=a.pathname==this.options.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!b)return this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0;this._wantsPushState&&this._hasPushState&&b&&a.hash&&(this.fragment=this.getHash().replace(s,""),window.history.replaceState({},document.title,a.protocol+"//"+a.host+this.options.root+this.fragment));if(!this.options.silent)return this.loadUrl()},
stop:function(){i(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);m.started=!1},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(){var a=this.getFragment();a==this.fragment&&this.iframe&&(a=this.getFragment(this.getHash(this.iframe)));if(a==this.fragment)return!1;this.iframe&&this.navigate(a);this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(a){var b=this.fragment=this.getFragment(a);return f.any(this.handlers,
function(a){if(a.route.test(b))return a.callback(b),!0})},navigate:function(a,b){if(!m.started)return!1;if(!b||!0===b)b={trigger:b};var c=(a||"").replace(s,"");this.fragment!=c&&(this._hasPushState?(0!=c.indexOf(this.options.root)&&(c=this.options.root+c),this.fragment=c,window.history[b.replace?"replaceState":"pushState"]({},document.title,c)):this._wantsHashChange?(this.fragment=c,this._updateHash(window.location,c,b.replace),this.iframe&&c!=this.getFragment(this.getHash(this.iframe))&&(b.replace||
this.iframe.document.open().close(),this._updateHash(this.iframe.location,c,b.replace))):window.location.assign(this.options.root+a),b.trigger&&this.loadUrl(a))},_updateHash:function(a,b,c){c?a.replace(a.toString().replace(/(javascript:|#).*$/,"")+"#"+b):a.hash=b}});var v=g.View=function(a){this.cid=f.uniqueId("view");this._configure(a||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()},F=/^(\S+)\s*(.*)$/,w="model,collection,el,id,attributes,className,tagName".split(",");
f.extend(v.prototype,k,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();return this},make:function(a,b,c){a=document.createElement(a);b&&i(a).attr(b);c&&i(a).html(c);return a},setElement:function(a,b){this.$el&&this.undelegateEvents();this.$el=a instanceof i?a:i(a);this.el=this.$el[0];!1!==b&&this.delegateEvents();return this},delegateEvents:function(a){if(a||(a=n(this,"events"))){this.undelegateEvents();
for(var b in a){var c=a[b];f.isFunction(c)||(c=this[a[b]]);if(!c)throw Error('Method "'+a[b]+'" does not exist');var d=b.match(F),e=d[1],d=d[2],c=f.bind(c,this),e=e+(".delegateEvents"+this.cid);""===d?this.$el.bind(e,c):this.$el.delegate(d,e,c)}}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+this.cid)},_configure:function(a){this.options&&(a=f.extend({},this.options,a));for(var b=0,c=w.length;b<c;b++){var d=w[b];a[d]&&(this[d]=a[d])}this.options=a},_ensureElement:function(){if(this.el)this.setElement(this.el,
!1);else{var a=n(this,"attributes")||{};this.id&&(a.id=this.id);this.className&&(a["class"]=this.className);this.setElement(this.make(this.tagName,a),!1)}}});o.extend=r.extend=u.extend=v.extend=function(a,b){var c=G(this,a,b);c.extend=this.extend;return c};var H={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};g.sync=function(a,b,c){var d=H[a];c||(c={});var e={type:d,dataType:"json"};c.url||(e.url=n(b,"url")||t());if(!c.data&&b&&("create"==a||"update"==a))e.contentType="application/json",
e.data=JSON.stringify(b.toJSON());g.emulateJSON&&(e.contentType="application/x-www-form-urlencoded",e.data=e.data?{model:e.data}:{});if(g.emulateHTTP&&("PUT"===d||"DELETE"===d))g.emulateJSON&&(e.data._method=d),e.type="POST",e.beforeSend=function(a){a.setRequestHeader("X-HTTP-Method-Override",d)};"GET"!==e.type&&!g.emulateJSON&&(e.processData=!1);return i.ajax(f.extend(e,c))};g.wrapError=function(a,b,c){return function(d,e){e=d===b?e:d;a?a(b,e,c):b.trigger("error",b,e,c)}};var x=function(){},G=function(a,
b,c){var d;d=b&&b.hasOwnProperty("constructor")?b.constructor:function(){a.apply(this,arguments)};f.extend(d,a);x.prototype=a.prototype;d.prototype=new x;b&&f.extend(d.prototype,b);c&&f.extend(d,c);d.prototype.constructor=d;d.__super__=a.prototype;return d},n=function(a,b){return!a||!a[b]?null:f.isFunction(a[b])?a[b]():a[b]},t=function(){throw Error('A "url" property or function must be specified');}}).call(this);

/* ============================================================
 * bootstrap-dropdown.js v2.0.3
 * http://twitter.github.com/bootstrap/javascript.html#dropdowns
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* DROPDOWN CLASS DEFINITION
  * ========================= */

  var toggle = '[data-toggle="dropdown"]'
    , Dropdown = function (element) {
        var $el = $(element).on('click.dropdown.data-api', this.toggle)
        $('html').on('click.dropdown.data-api', function () {
          $el.parent().removeClass('open')
        })
      }

  Dropdown.prototype = {

    constructor: Dropdown

  , toggle: function (e) {
      var $this = $(this)
        , $parent
        , selector
        , isActive

      if ($this.is('.disabled, :disabled')) return

      selector = $this.attr('data-target')

      if (!selector) {
        selector = $this.attr('href')
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
      }

      $parent = $(selector)
      $parent.length || ($parent = $this.parent())

      isActive = $parent.hasClass('open')

      clearMenus()

      if (!isActive) $parent.toggleClass('open')

      return false
    }

  }

  function clearMenus() {
    $(toggle).parent().removeClass('open')
  }


  /* DROPDOWN PLUGIN DEFINITION
   * ========================== */

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('dropdown')
      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  /* APPLY TO STANDARD DROPDOWN ELEMENTS
   * =================================== */

  $(function () {
    $('html').on('click.dropdown.data-api', clearMenus)
    $('body')
      .on('click.dropdown', '.dropdown form', function (e) { e.stopPropagation() })
      .on('click.dropdown.data-api', toggle, Dropdown.prototype.toggle)
  })

}(window.jQuery);
/* =========================================================
 * bootstrap-modal.js v2.0.3
 * http://twitter.github.com/bootstrap/javascript.html#modals
 * =========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */


!function ($) {

  "use strict"; // jshint ;_;


 /* MODAL CLASS DEFINITION
  * ====================== */

  var Modal = function (content, options) {
    this.options = options
    this.$element = $(content)
      .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
  }

  Modal.prototype = {

      constructor: Modal

    , toggle: function () {
        return this[!this.isShown ? 'show' : 'hide']()
      }

    , show: function () {
        var that = this
          , e = $.Event('show')

        this.$element.trigger(e)

        if (this.isShown || e.isDefaultPrevented()) return

        $('body').addClass('modal-open')

        this.isShown = true

        escape.call(this)
        backdrop.call(this, function () {
          var transition = $.support.transition && that.$element.hasClass('fade')

          if (!that.$element.parent().length) {
            that.$element.appendTo(document.body) //don't move modals dom position
          }

          that.$element
            .show()

          if (transition) {
            that.$element[0].offsetWidth // force reflow
          }

          that.$element.addClass('in')

          transition ?
            that.$element.one($.support.transition.end, function () { that.$element.trigger('shown') }) :
            that.$element.trigger('shown')

        })
      }

    , hide: function (e) {
        e && e.preventDefault()

        var that = this

        e = $.Event('hide')

        this.$element.trigger(e)

        if (!this.isShown || e.isDefaultPrevented()) return

        this.isShown = false

        $('body').removeClass('modal-open')

        escape.call(this)

        this.$element.removeClass('in')

        $.support.transition && this.$element.hasClass('fade') ?
          hideWithTransition.call(this) :
          hideModal.call(this)
      }

  }


 /* MODAL PRIVATE METHODS
  * ===================== */

  function hideWithTransition() {
    var that = this
      , timeout = setTimeout(function () {
          that.$element.off($.support.transition.end)
          hideModal.call(that)
        }, 500)

    this.$element.one($.support.transition.end, function () {
      clearTimeout(timeout)
      hideModal.call(that)
    })
  }

  function hideModal(that) {
    this.$element
      .hide()
      .trigger('hidden')

    backdrop.call(this)
  }

  function backdrop(callback) {
    var that = this
      , animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(document.body)

      if (this.options.backdrop != 'static') {
        this.$backdrop.click($.proxy(this.hide, this))
      }

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      doAnimate ?
        this.$backdrop.one($.support.transition.end, callback) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade')?
        this.$backdrop.one($.support.transition.end, $.proxy(removeBackdrop, this)) :
        removeBackdrop.call(this)

    } else if (callback) {
      callback()
    }
  }

  function removeBackdrop() {
    this.$backdrop.remove()
    this.$backdrop = null
  }

  function escape() {
    var that = this
    if (this.isShown && this.options.keyboard) {
      $(document).on('keyup.dismiss.modal', function ( e ) {
        e.which == 27 && that.hide()
      })
    } else if (!this.isShown) {
      $(document).off('keyup.dismiss.modal')
    }
  }


 /* MODAL PLUGIN DEFINITION
  * ======================= */

  $.fn.modal = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('modal')
        , options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option]()
      else if (options.show) data.show()
    })
  }

  $.fn.modal.defaults = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  $.fn.modal.Constructor = Modal


 /* MODAL DATA-API
  * ============== */

  $(function () {
    $('body').on('click.modal.data-api', '[data-toggle="modal"]', function ( e ) {
      var $this = $(this), href
        , $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
        , option = $target.data('modal') ? 'toggle' : $.extend({}, $target.data(), $this.data())

      e.preventDefault()
      $target.modal(option)
    })
  })

}(window.jQuery);
/*!
 * Bootstrap Scroll Modal
 * Version: 1.1
 * Made for your convenience by @theericanderson.
 * A variaton of only small piece of the insanely awesome
 * Twitter Bootstrap (http://twitter.github.com/bootstrap).
 */

/* =========================================================
 * bootstrap-modal.js v2.0.4
 * http://twitter.github.com/bootstrap/javascript.html#modals
 * =========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */


!function ($) {

  "use strict"; // jshint ;_;

 /* MODAL CLASS DEFINITION
  * ====================== */

  var Modal = function ( content, options ) {
    this.options = options
    this.$element = $(content)
      .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
  }

  Modal.prototype = {

      constructor: Modal

    , toggle: function () {
        return this[!this.isShown ? 'show' : 'hide']()
      }

    , show: function () {
        var that = this
          , e = $.Event('show')

        if (this.isShown || e.isDefaultPrevented()) return

        $('body').addClass('modal-open')

        this.isShown = true

        escape.call(this)
        backdrop.call(this, function () {

          var transition = $.support.transition && that.$element.hasClass('fade')

          if (!that.$element.parent().length) {
            that.$element.appendTo(document.body) //don't move modals dom position
          }

          that.$element
            .show()

          if (transition) {
            that.$element[0].offsetWidth // force reflow
          }

          that.$element.addClass('in')

          transition ?
            that.$element.one($.support.transition.end, function () { that.$element.trigger('shown') }) :
            that.$element.trigger('shown')

        })
      }

    , hide: function ( e ) {
        e && e.preventDefault()

        var that = this

        e = $.Event('hide')

        this.$element.trigger(e)

        if (!this.isShown || e.isDefaultPrevented()) return

        this.isShown = false

        $('body').removeClass('modal-open')

        escape.call(this)

        this.$element.removeClass('in')

        $.support.transition && this.$element.hasClass('fade') ?
          hideWithTransition.call(this) :
          hideModal.call(this)
      }

  }


 /* MODAL PRIVATE METHODS
  * ===================== */

  function hideWithTransition() {
    var that = this
      , timeout = setTimeout(function () {
          that.$element.off($.support.transition.end)
          hideModal.call(that)
        }, 500)

    this.$element.one($.support.transition.end, function () {
      clearTimeout(timeout)
      hideModal.call(that)
    })
  }

  function hideModal(that) {
    this.$element
      .hide()
      .trigger('hidden')

    backdrop.call(this)
  }

  function backdrop(callback) {
    var that = this
      , animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
      if (!that.$element.parent().length) {
          this.$backdrop.appendTo(document.body) //don't move modals dom position
      } else {
          this.$backdrop.insertBefore(this.$element)
      }
      
      if (this.options.dynamic) {
        this.$elementWrapper = $('<div class="modal-wrapper" />')
          .prependTo(this.$backdrop)
          .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
        this.$element.prependTo(this.$elementWrapper)
      } else {
        this.$element.prependTo(this.$backdrop)
        .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
      }

      $('body').css({ 'overflow' : 'hidden' })

      if (this.options.backdrop != 'static') {
        this.$backdrop.on('click', function(e){
          if (e.target == e.delegateTarget) {
            that.hide(e)
          }
        })
      }

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      doAnimate ?
        this.$backdrop.one($.support.transition.end, callback) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade')?
        this.$backdrop.one($.support.transition.end, $.proxy(removeBackdrop, this)) :
        removeBackdrop.call(this)

    } else if (callback) {
      callback()
    }
  }

  function removeBackdrop() {
    this.$element.insertAfter(this.$backdrop)
    this.$backdrop.remove()
    this.$backdrop = null
    $('body').css({ 'overflow' : 'auto' })
  }

  function escape() {
    var that = this
    if (this.isShown && this.options.keyboard) {
      $(document).on('keyup.dismiss.modal', function ( e ) {
        e.which == 27 && that.hide()
      })
    } else if (!this.isShown) {
      $(document).off('keyup.dismiss.modal')
    }
  }


 /* MODAL PLUGIN DEFINITION
  * ======================= */

  $.fn.modal = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('modal')
        , options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option]()
      else if (options.show) data.show()
    })
  }

  $.fn.modal.defaults = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  $.fn.modal.Constructor = Modal


 /* MODAL DATA-API
  * ============== */

  $(function () {
    $('body').on('click.modal.data-api', '[data-toggle="modal"]', function ( e ) {
      var $this = $(this), href
        , $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
        , option = $target.data('modal') ? 'toggle' : $.extend({}, $target.data(), $this.data())

      e.preventDefault()
      $target.modal(option)
    })
  })

}(window.jQuery);
/* ========================================================
 * bootstrap-tab.js v2.0.4
 * http://twitter.github.com/bootstrap/javascript.html#tabs
 * ========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* TAB CLASS DEFINITION
  * ==================== */

  var Tab = function ( element ) {
    this.element = $(element)
  }

  Tab.prototype = {

    constructor: Tab

  , show: function () {
      var $this = this.element
        , $ul = $this.closest('ul:not(.dropdown-menu)')
        , selector = $this.attr('data-target')
        , previous
        , $target
        , e

      if (!selector) {
        selector = $this.attr('href')
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
      }

      if ( $this.parent('li').hasClass('active') ) return

      previous = $ul.find('.active a').last()[0]

      e = $.Event('show', {
        relatedTarget: previous
      })

      $this.trigger(e)

      if (e.isDefaultPrevented()) return

      $target = $(selector)

      this.activate($this.parent('li'), $ul)
      this.activate($target, $target.parent(), function () {
        $this.trigger({
          type: 'shown'
        , relatedTarget: previous
        })
      })
    }

  , activate: function ( element, container, callback) {
      var $active = container.find('> .active')
        , transition = callback
            && $.support.transition
            && $active.hasClass('fade')

      function next() {
        $active
          .removeClass('active')
          .find('> .dropdown-menu > .active')
          .removeClass('active')

        element.addClass('active')

        if (transition) {
          element[0].offsetWidth // reflow for transition
          element.addClass('in')
        } else {
          element.removeClass('fade')
        }

        if ( element.parent('.dropdown-menu') ) {
          element.closest('li.dropdown').addClass('active')
        }

        callback && callback()
      }

      transition ?
        $active.one($.support.transition.end, next) :
        next()

      $active.removeClass('in')
    }
  }


 /* TAB PLUGIN DEFINITION
  * ===================== */

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tab')
      if (!data) $this.data('tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


 /* TAB DATA-API
  * ============ */

  $(function () {
    $('body').on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
  })

}(window.jQuery);
/*!
* Bootstrap.js by @fat & @mdo
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(a){a(function(){"use strict",a.support.transition=function(){var a=function(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},c;for(c in b)if(a.style[c]!==undefined)return b[c]}();return a&&{end:a}}()})}(window.jQuery),!function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function f(){e.trigger("closed").remove()}var c=a(this),d=c.attr("data-target"),e;d||(d=c.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),e=a(d),b&&b.preventDefault(),e.length||(e=c.hasClass("alert")?c:c.parent()),e.trigger(b=a.Event("close"));if(b.isDefaultPrevented())return;e.removeClass("in"),a.support.transition&&e.hasClass("fade")?e.on(a.support.transition.end,f):f()},a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("alert");e||d.data("alert",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.alert.Constructor=c,a(function(){a("body").on("click.alert.data-api",b,c.prototype.close)})}(window.jQuery),!function(a){"use strict";var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.button.defaults,c)};b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.data(),e=c.is("input")?"val":"html";a+="Text",d.resetText||c.data("resetText",c[e]()),c[e](d[a]||this.options[a]),setTimeout(function(){a=="loadingText"?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.parent('[data-toggle="buttons-radio"]');a&&a.find(".active").removeClass("active"),this.$element.toggleClass("active")},a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("button"),f=typeof c=="object"&&c;e||d.data("button",e=new b(this,f)),c=="toggle"?e.toggle():c&&e.setState(c)})},a.fn.button.defaults={loadingText:"loading..."},a.fn.button.Constructor=b,a(function(){a("body").on("click.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle")})})}(window.jQuery),!function(a){"use strict";var b=function(b,c){this.$element=a(b),this.options=c,this.options.slide&&this.slide(this.options.slide),this.options.pause=="hover"&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.prototype={cycle:function(b){return b||(this.paused=!1),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},to:function(b){var c=this.$element.find(".active"),d=c.parent().children(),e=d.index(c),f=this;if(b>d.length-1||b<0)return;return this.sliding?this.$element.one("slid",function(){f.to(b)}):e==b?this.pause().cycle():this.slide(b>e?"next":"prev",a(d[b]))},pause:function(a){return a||(this.paused=!0),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(b,c){var d=this.$element.find(".active"),e=c||d[b](),f=this.interval,g=b=="next"?"left":"right",h=b=="next"?"first":"last",i=this,j=a.Event("slide");this.sliding=!0,f&&this.pause(),e=e.length?e:this.$element.find(".item")[h]();if(e.hasClass("active"))return;if(a.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(j);if(j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),this.$element.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)})}else{this.$element.trigger(j);if(j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this}},a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("carousel"),f=a.extend({},a.fn.carousel.defaults,typeof c=="object"&&c);e||d.data("carousel",e=new b(this,f)),typeof c=="number"?e.to(c):typeof c=="string"||(c=f.slide)?e[c]():f.interval&&e.cycle()})},a.fn.carousel.defaults={interval:5e3,pause:"hover"},a.fn.carousel.Constructor=b,a(function(){a("body").on("click.carousel.data-api","[data-slide]",function(b){var c=a(this),d,e=a(c.attr("data-target")||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"")),f=!e.data("modal")&&a.extend({},e.data(),c.data());e.carousel(f),b.preventDefault()})})}(window.jQuery),!function(a){"use strict";var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.collapse.defaults,c),this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.prototype={constructor:b,dimension:function(){var a=this.$element.hasClass("width");return a?"width":"height"},show:function(){var b,c,d,e;if(this.transitioning)return;b=this.dimension(),c=a.camelCase(["scroll",b].join("-")),d=this.$parent&&this.$parent.find("> .accordion-group > .in");if(d&&d.length){e=d.data("collapse");if(e&&e.transitioning)return;d.collapse("hide"),e||d.data("collapse",null)}this.$element[b](0),this.transition("addClass",a.Event("show"),"shown"),this.$element[b](this.$element[0][c])},hide:function(){var b;if(this.transitioning)return;b=this.dimension(),this.reset(this.$element[b]()),this.transition("removeClass",a.Event("hide"),"hidden"),this.$element[b](0)},reset:function(a){var b=this.dimension();return this.$element.removeClass("collapse")[b](a||"auto")[0].offsetWidth,this.$element[a!==null?"addClass":"removeClass"]("collapse"),this},transition:function(b,c,d){var e=this,f=function(){c.type=="show"&&e.reset(),e.transitioning=0,e.$element.trigger(d)};this.$element.trigger(c);if(c.isDefaultPrevented())return;this.transitioning=1,this.$element[b]("in"),a.support.transition&&this.$element.hasClass("collapse")?this.$element.one(a.support.transition.end,f):f()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}},a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("collapse"),f=typeof c=="object"&&c;e||d.data("collapse",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.collapse.defaults={toggle:!0},a.fn.collapse.Constructor=b,a(function(){a("body").on("click.collapse.data-api","[data-toggle=collapse]",function(b){var c=a(this),d,e=c.attr("data-target")||b.preventDefault()||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),f=a(e).data("collapse")?"toggle":c.data();a(e).collapse(f)})})}(window.jQuery),!function(a){function d(){a(b).parent().removeClass("open")}"use strict";var b='[data-toggle="dropdown"]',c=function(b){var c=a(b).on("click.dropdown.data-api",this.toggle);a("html").on("click.dropdown.data-api",function(){c.parent().removeClass("open")})};c.prototype={constructor:c,toggle:function(b){var c=a(this),e,f,g;if(c.is(".disabled, :disabled"))return;return f=c.attr("data-target"),f||(f=c.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,"")),e=a(f),e.length||(e=c.parent()),g=e.hasClass("open"),d(),g||e.toggleClass("open"),!1}},a.fn.dropdown=function(b){return this.each(function(){var d=a(this),e=d.data("dropdown");e||d.data("dropdown",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.dropdown.Constructor=c,a(function(){a("html").on("click.dropdown.data-api",d),a("body").on("click.dropdown",".dropdown form",function(a){a.stopPropagation()}).on("click.dropdown.data-api",b,c.prototype.toggle)})}(window.jQuery),!function(a){function c(){var b=this,c=setTimeout(function(){b.$element.off(a.support.transition.end),d.call(b)},500);this.$element.one(a.support.transition.end,function(){clearTimeout(c),d.call(b)})}function d(a){this.$element.hide().trigger("hidden"),e.call(this)}function e(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(document.body),this.options.backdrop!="static"&&this.$backdrop.click(a.proxy(this.hide,this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),e?this.$backdrop.one(a.support.transition.end,b):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,a.proxy(f,this)):f.call(this)):b&&b()}function f(){this.$backdrop.remove(),this.$backdrop=null}function g(){var b=this;this.isShown&&this.options.keyboard?a(document).on("keyup.dismiss.modal",function(a){a.which==27&&b.hide()}):this.isShown||a(document).off("keyup.dismiss.modal")}"use strict";var b=function(b,c){this.options=c,this.$element=a(b).delegate('[data-dismiss="modal"]',"click.dismiss.modal",a.proxy(this.hide,this))};b.prototype={constructor:b,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var b=this,c=a.Event("show");this.$element.trigger(c);if(this.isShown||c.isDefaultPrevented())return;a("body").addClass("modal-open"),this.isShown=!0,g.call(this),e.call(this,function(){var c=a.support.transition&&b.$element.hasClass("fade");b.$element.parent().length||b.$element.appendTo(document.body),b.$element.show(),c&&b.$element[0].offsetWidth,b.$element.addClass("in"),c?b.$element.one(a.support.transition.end,function(){b.$element.trigger("shown")}):b.$element.trigger("shown")})},hide:function(b){b&&b.preventDefault();var e=this;b=a.Event("hide"),this.$element.trigger(b);if(!this.isShown||b.isDefaultPrevented())return;this.isShown=!1,a("body").removeClass("modal-open"),g.call(this),this.$element.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?c.call(this):d.call(this)}},a.fn.modal=function(c){return this.each(function(){var d=a(this),e=d.data("modal"),f=a.extend({},a.fn.modal.defaults,d.data(),typeof c=="object"&&c);e||d.data("modal",e=new b(this,f)),typeof c=="string"?e[c]():f.show&&e.show()})},a.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},a.fn.modal.Constructor=b,a(function(){a("body").on("click.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d,e=a(c.attr("data-target")||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({},e.data(),c.data());b.preventDefault(),e.modal(f)})})}(window.jQuery),!function(a){"use strict";var b=function(a,b){this.init("tooltip",a,b)};b.prototype={constructor:b,init:function(b,c,d){var e,f;this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.enabled=!0,this.options.trigger!="manual"&&(e=this.options.trigger=="hover"?"mouseenter":"focus",f=this.options.trigger=="hover"?"mouseleave":"blur",this.$element.on(e,this.options.selector,a.proxy(this.enter,this)),this.$element.on(f,this.options.selector,a.proxy(this.leave,this))),this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(b){return b=a.extend({},a.fn[this.type].defaults,b,this.$element.data()),b.delay&&typeof b.delay=="number"&&(b.delay={show:b.delay,hide:b.delay}),b},enter:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);if(!c.options.delay||!c.options.delay.show)return c.show();clearTimeout(this.timeout),c.hoverState="in",this.timeout=setTimeout(function(){c.hoverState=="in"&&c.show()},c.options.delay.show)},leave:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);if(!c.options.delay||!c.options.delay.hide)return c.hide();clearTimeout(this.timeout),c.hoverState="out",this.timeout=setTimeout(function(){c.hoverState=="out"&&c.hide()},c.options.delay.hide)},show:function(){var a,b,c,d,e,f,g;if(this.hasContent()&&this.enabled){a=this.tip(),this.setContent(),this.options.animation&&a.addClass("fade"),f=typeof this.options.placement=="function"?this.options.placement.call(this,a[0],this.$element[0]):this.options.placement,b=/in/.test(f),a.remove().css({top:0,left:0,display:"block"}).appendTo(b?this.$element:document.body),c=this.getPosition(b),d=a[0].offsetWidth,e=a[0].offsetHeight;switch(b?f.split(" ")[1]:f){case"bottom":g={top:c.top+c.height,left:c.left+c.width/2-d/2};break;case"top":g={top:c.top-e,left:c.left+c.width/2-d/2};break;case"left":g={top:c.top+c.height/2-e/2,left:c.left-d};break;case"right":g={top:c.top+c.height/2-e/2,left:c.left+c.width}}a.css(g).addClass(f).addClass("in")}},isHTML:function(a){return typeof a!="string"||a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3||/^(?:[^<]*<[\w\W]+>[^>]*$)/.exec(a)},setContent:function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.isHTML(b)?"html":"text"](b),a.removeClass("fade in top bottom left right")},hide:function(){function d(){var b=setTimeout(function(){c.off(a.support.transition.end).remove()},500);c.one(a.support.transition.end,function(){clearTimeout(b),c.remove()})}var b=this,c=this.tip();c.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d():c.remove()},fixTitle:function(){var a=this.$element;(a.attr("title")||typeof a.attr("data-original-title")!="string")&&a.attr("data-original-title",a.attr("title")||"").removeAttr("title")},hasContent:function(){return this.getTitle()},getPosition:function(b){return a.extend({},b?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||(typeof c.title=="function"?c.title.call(b[0]):c.title),a},tip:function(){return this.$tip=this.$tip||a(this.options.template)},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(){this[this.tip().hasClass("in")?"hide":"show"]()}},a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("tooltip"),f=typeof c=="object"&&c;e||d.data("tooltip",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover",title:"",delay:0}}(window.jQuery),!function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype,{constructor:b,setContent:function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.isHTML(b)?"html":"text"](b),a.find(".popover-content > *")[this.isHTML(c)?"html":"text"](c),a.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var a,b=this.$element,c=this.options;return a=b.attr("data-content")||(typeof c.content=="function"?c.content.call(b[0]):c.content),a},tip:function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip}}),a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("popover"),f=typeof c=="object"&&c;e||d.data("popover",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.defaults=a.extend({},a.fn.tooltip.defaults,{placement:"right",content:"",template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'})}(window.jQuery),!function(a){function b(b,c){var d=a.proxy(this.process,this),e=a(b).is("body")?a(window):a(b),f;this.options=a.extend({},a.fn.scrollspy.defaults,c),this.$scrollElement=e.on("scroll.scroll.data-api",d),this.selector=(this.options.target||(f=a(b).attr("href"))&&f.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=a("body"),this.refresh(),this.process()}"use strict",b.prototype={constructor:b,refresh:function(){var b=this,c;this.offsets=a([]),this.targets=a([]),c=this.$body.find(this.selector).map(function(){var b=a(this),c=b.data("target")||b.attr("href"),d=/^#\w/.test(c)&&a(c);return d&&c.length&&[[d.position().top,c]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},process:function(){var a=this.$scrollElement.scrollTop()+this.options.offset,b=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,c=b-this.$scrollElement.height(),d=this.offsets,e=this.targets,f=this.activeTarget,g;if(a>=c)return f!=(g=e.last()[0])&&this.activate(g);for(g=d.length;g--;)f!=e[g]&&a>=d[g]&&(!d[g+1]||a<=d[g+1])&&this.activate(e[g])},activate:function(b){var c,d;this.activeTarget=b,a(this.selector).parent(".active").removeClass("active"),d=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',c=a(d).parent("li").addClass("active"),c.parent(".dropdown-menu")&&(c=c.closest("li.dropdown").addClass("active")),c.trigger("activate")}},a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("scrollspy"),f=typeof c=="object"&&c;e||d.data("scrollspy",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.defaults={offset:10},a(function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery),!function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype={constructor:b,show:function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.attr("data-target"),e,f,g;d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,""));if(b.parent("li").hasClass("active"))return;e=c.find(".active a").last()[0],g=a.Event("show",{relatedTarget:e}),b.trigger(g);if(g.isDefaultPrevented())return;f=a(d),this.activate(b.parent("li"),c),this.activate(f,f.parent(),function(){b.trigger({type:"shown",relatedTarget:e})})},activate:function(b,c,d){function g(){e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),f?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var e=c.find("> .active"),f=d&&a.support.transition&&e.hasClass("fade");f?e.one(a.support.transition.end,g):g(),e.removeClass("in")}},a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("tab");e||d.data("tab",e=new b(this)),typeof c=="string"&&e[c]()})},a.fn.tab.Constructor=b,a(function(){a("body").on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})})}(window.jQuery),!function(a){"use strict";var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.typeahead.defaults,c),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.$menu=a(this.options.menu).appendTo("body"),this.source=this.options.source,this.shown=!1,this.listen()};b.prototype={constructor:b,select:function(){var a=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(a)).change(),this.hide()},updater:function(a){return a},show:function(){var b=a.extend({},this.$element.offset(),{height:this.$element[0].offsetHeight});return this.$menu.css({top:b.top+b.height,left:b.left}),this.$menu.show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(b){var c=this,d,e;return this.query=this.$element.val(),this.query?(d=a.grep(this.source,function(a){return c.matcher(a)}),d=this.sorter(d),d.length?this.render(d.slice(0,this.options.items)).show():this.shown?this.hide():this):this.shown?this.hide():this},matcher:function(a){return~a.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(a){var b=[],c=[],d=[],e;while(e=a.shift())e.toLowerCase().indexOf(this.query.toLowerCase())?~e.indexOf(this.query)?c.push(e):d.push(e):b.push(e);return b.concat(c,d)},highlighter:function(a){var b=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return a.replace(new RegExp("("+b+")","ig"),function(a,b){return"<strong>"+b+"</strong>"})},render:function(b){var c=this;return b=a(b).map(function(b,d){return b=a(c.options.item).attr("data-value",d),b.find("a").html(c.highlighter(d)),b[0]}),b.first().addClass("active"),this.$menu.html(b),this},next:function(b){var c=this.$menu.find(".active").removeClass("active"),d=c.next();d.length||(d=a(this.$menu.find("li")[0])),d.addClass("active")},prev:function(a){var b=this.$menu.find(".active").removeClass("active"),c=b.prev();c.length||(c=this.$menu.find("li").last()),c.addClass("active")},listen:function(){this.$element.on("blur",a.proxy(this.blur,this)).on("keypress",a.proxy(this.keypress,this)).on("keyup",a.proxy(this.keyup,this)),(a.browser.webkit||a.browser.msie)&&this.$element.on("keydown",a.proxy(this.keypress,this)),this.$menu.on("click",a.proxy(this.click,this)).on("mouseenter","li",a.proxy(this.mouseenter,this))},keyup:function(a){switch(a.keyCode){case 40:case 38:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}a.stopPropagation(),a.preventDefault()},keypress:function(a){if(!this.shown)return;switch(a.keyCode){case 9:case 13:case 27:a.preventDefault();break;case 38:if(a.type!="keydown")break;a.preventDefault(),this.prev();break;case 40:if(a.type!="keydown")break;a.preventDefault(),this.next()}a.stopPropagation()},blur:function(a){var b=this;setTimeout(function(){b.hide()},150)},click:function(a){a.stopPropagation(),a.preventDefault(),this.select()},mouseenter:function(b){this.$menu.find(".active").removeClass("active"),a(b.currentTarget).addClass("active")}},a.fn.typeahead=function(c){return this.each(function(){var d=a(this),e=d.data("typeahead"),f=typeof c=="object"&&c;e||d.data("typeahead",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>'},a.fn.typeahead.Constructor=b,a(function(){a("body").on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(b){var c=a(this);if(c.data("typeahead"))return;b.preventDefault(),c.typeahead(c.data())})})}(window.jQuery);
/**
 * http://github.com/Valums-File-Uploader/file-uploader
 *
 * Multiple file upload component with progress-bar, drag-and-drop.
 *
 * Have ideas for improving this JS for the general community?
 * Submit your changes at: https://github.com/Valums-File-Uploader/file-uploader
 *
 * VERSION 2.0 beta
 * Original version 1.0 © 2010 Andrew Valums ( andrew(at)valums.com )
 *
 * Licensed under MIT license, GNU GPL 2 or later, GNU LGPL 2 or later, see license.txt.
 */

//
// Helper functions
//

var qq = qq || {};

/**
 * Adds all missing properties from second obj to first obj
 */
qq.extend = function(first, second){
    for (var prop in second){
        first[prop] = second[prop];
    }
};

/**
 * Searches for a given element in the array, returns -1 if it is not present.
 * @param {Number} [from] The index at which to begin the search
 */
qq.indexOf = function(arr, elt, from){
    if (arr.indexOf) return arr.indexOf(elt, from);

    from = from || 0;
    var len = arr.length;

    if (from < 0) from += len;

    for (; from < len; from++){
        if (from in arr && arr[from] === elt){
            return from;
        }
    }
    return -1;
};

qq.getUniqueId = (function(){
    var id = 0;
    return function(){ return id++; };
})();

//
// Browsers and platforms detection

qq.ie       = function(){ return navigator.userAgent.indexOf('MSIE') != -1; }
qq.safari   = function(){ return navigator.vendor != undefined && navigator.vendor.indexOf("Apple") != -1; }
qq.chrome   = function(){ return navigator.vendor != undefined && navigator.vendor.indexOf('Google') != -1; }
qq.firefox  = function(){ return (navigator.userAgent.indexOf('Mozilla') != -1 && navigator.vendor != undefined && navigator.vendor == ''); }
qq.windows  = function(){ return navigator.platform == "Win32"; }

//
// Events

/** Returns the function which detaches attached event */
qq.attach = function(element, type, fn){
    if (element.addEventListener){
        element.addEventListener(type, fn, false);
    } else if (element.attachEvent){
        element.attachEvent('on' + type, fn);
    }
    return function() {
      qq.detach(element, type, fn)
    }
};
qq.detach = function(element, type, fn){
    if (element.removeEventListener){
        element.removeEventListener(type, fn, false);
    } else if (element.attachEvent){
        element.detachEvent('on' + type, fn);
    }
};

qq.preventDefault = function(e){
    if (e.preventDefault){
        e.preventDefault();
    } else{
        e.returnValue = false;
    }
};

//
// Node manipulations

/**
 * Insert node a before node b.
 */
qq.insertBefore = function(a, b){
    b.parentNode.insertBefore(a, b);
};
qq.remove = function(element){
    element.parentNode.removeChild(element);
};

qq.contains = function(parent, descendant){
    // compareposition returns false in this case
    if (parent == descendant) return true;

    if (parent.contains){
        return parent.contains(descendant);
    } else {
        return !!(descendant.compareDocumentPosition(parent) & 8);
    }
};

/**
 * Creates and returns element from html string
 * Uses innerHTML to create an element
 */
qq.toElement = (function(){
    var div = document.createElement('div');
    return function(html){
        div.innerHTML = html;
        var element = div.firstChild;
        div.removeChild(element);
        return element;
    };
})();

//
// Node properties and attributes

/**
 * Sets styles for an element.
 * Fixes opacity in IE6-8.
 */
qq.css = function(element, styles){
    if (styles.opacity != null){
        if (typeof element.style.opacity != 'string' && typeof(element.filters) != 'undefined'){
            styles.filter = 'alpha(opacity=' + Math.round(100 * styles.opacity) + ')';
        }
    }
    qq.extend(element.style, styles);
};
qq.hasClass = function(element, name){
    var re = new RegExp('(^| )' + name + '( |$)');
    return re.test(element.className);
};
qq.addClass = function(element, name){
    if (!qq.hasClass(element, name)){
        element.className += ' ' + name;
    }
};
qq.removeClass = function(element, name){
    var re = new RegExp('(^| )' + name + '( |$)');
    element.className = element.className.replace(re, ' ').replace(/^\s+|\s+$/g, "");
};
qq.setText = function(element, text){
    element.innerText = text;
    element.textContent = text;
};

//
// Selecting elements

qq.children = function(element){
    var children = [],
    child = element.firstChild;

    while (child){
        if (child.nodeType == 1){
            children.push(child);
        }
        child = child.nextSibling;
    }

    return children;
};

qq.getByClass = function(element, className){
    if (element.querySelectorAll){
        return element.querySelectorAll('.' + className);
    }

    var result = [];
    var candidates = element.getElementsByTagName("*");
    var len = candidates.length;

    for (var i = 0; i < len; i++){
        if (qq.hasClass(candidates[i], className)){
            result.push(candidates[i]);
        }
    }
    return result;
};

/**
 * obj2url() takes a json-object as argument and generates
 * a querystring. pretty much like jQuery.param()
 *
 * how to use:
 *
 *    `qq.obj2url({a:'b',c:'d'},'http://any.url/upload?otherParam=value');`
 *
 * will result in:
 *
 *    `http://any.url/upload?otherParam=value&a=b&c=d`
 *
 * @param  Object JSON-Object
 * @param  String current querystring-part
 * @return String encoded querystring
 */
qq.obj2url = function(obj, temp, prefixDone){
    var uristrings = [],
        prefix = '&',
        add = function(nextObj, i){
            var nextTemp = temp
                ? (/\[\]$/.test(temp)) // prevent double-encoding
                   ? temp
                   : temp+'['+i+']'
                : i;
            if ((nextTemp != 'undefined') && (i != 'undefined')) {
                uristrings.push(
                    (typeof nextObj === 'object')
                        ? qq.obj2url(nextObj, nextTemp, true)
                        : (Object.prototype.toString.call(nextObj) === '[object Function]')
                            ? encodeURIComponent(nextTemp) + '=' + encodeURIComponent(nextObj())
                            : encodeURIComponent(nextTemp) + '=' + encodeURIComponent(nextObj)
                );
            }
        };

    if (!prefixDone && temp) {
      prefix = (/\?/.test(temp)) ? (/\?$/.test(temp)) ? '' : '&' : '?';
      uristrings.push(temp);
      uristrings.push(qq.obj2url(obj));
    } else if ((Object.prototype.toString.call(obj) === '[object Array]') && (typeof obj != 'undefined') ) {
        // we wont use a for-in-loop on an array (performance)
        for (var i = 0, len = obj.length; i < len; ++i){
            add(obj[i], i);
        }
    } else if ((typeof obj != 'undefined') && (obj !== null) && (typeof obj === "object")){
        // for anything else but a scalar, we will use for-in-loop
        for (var i in obj){
            add(obj[i], i);
        }
    } else {
        uristrings.push(encodeURIComponent(temp) + '=' + encodeURIComponent(obj));
    }

    return uristrings.join(prefix)
                     .replace(/^&/, '')
                     .replace(/%20/g, '+');
};

//
//
// Uploader Classes
//
//

var qq = qq || {};

/**
 * Creates upload button, validates upload, but doesn't create file list or dd.
 */
qq.FileUploaderBasic = function(o){
    this._options = {
        // set to true to see the server response
        debug: false,
        action: '/server/upload',
        params: {},
        customHeaders: {},
        button: null,
        multiple: false,
        maxConnections: 3,
        // validation
        allowedExtensions: [],
        acceptFiles: null,		// comma separated string of mime-types for browser to display in browse dialog
        sizeLimit: 0,
        minSizeLimit: 0,
        // events
        // return false to cancel submit
        onSubmit: function(id, fileName){},
        onProgress: function(id, fileName, loaded, total){},
        onComplete: function(id, fileName, responseJSON){},
        onCancel: function(id, fileName){},
        onUpload: function(id, fileName, xhr){},
		onError: function(id, fileName, xhr) {},
        // messages
        messages: {
            typeError: "Unfortunately the file(s) you selected weren't the type we were expecting. Only {extensions} files are allowed.",
            sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
            minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
            emptyError: "{file} is empty, please select files again without it.",
            onLeave: "The files are being uploaded, if you leave now the upload will be cancelled."
        },
        showMessage: function(message){
            alert(message);
        },
        inputName: 'document',
        extraDropzones : []
    };
    qq.extend(this._options, o);
    qq.extend(this, qq.DisposeSupport);

    // number of files being uploaded
    this._filesInProgress = 0;
    this._handler = this._createUploadHandler();

    if (this._options.button){
        this._button = this._createUploadButton(this._options.button);
    }

    this._preventLeaveInProgress();
};

qq.FileUploaderBasic.prototype = {
    setParams: function(params){
        this._options.params = params;
    },
    getInProgress: function(){
        return this._filesInProgress;
    },
    _createUploadButton: function(element){
        var self = this;

        var button = new qq.UploadButton({
            element: element,
            multiple: this._options.multiple && qq.UploadHandlerXhr.isSupported(),
            acceptFiles: this._options.acceptFiles,
            onChange: function(input){
                self._onInputChange(input);
            }
        });

        this.addDisposer(function() { button.dispose(); });
        return button;
    },
    _createUploadHandler: function(){
        var self = this,
            handlerClass;

        if(qq.UploadHandlerXhr.isSupported()){
            handlerClass = 'UploadHandlerXhr';
        } else {
            handlerClass = 'UploadHandlerForm';
        }

        var handler = new qq[handlerClass]({
            debug: this._options.debug,
            action: this._options.action,
            encoding: this._options.encoding,
            maxConnections: this._options.maxConnections,
            customHeaders: this._options.customHeaders,
            inputName: this._options.inputName,
            extraDropzones: this._options.extraDropzones,
            onProgress: function(id, fileName, loaded, total){
                self._onProgress(id, fileName, loaded, total);
                self._options.onProgress(id, fileName, loaded, total);
            },
            onComplete: function(id, fileName, result){
                self._onComplete(id, fileName, result);
                self._options.onComplete(id, fileName, result);
            },
            onCancel: function(id, fileName){
                self._onCancel(id, fileName);
                self._options.onCancel(id, fileName);
            },
            onError: self._options.onError,
            onUpload: function(id, fileName, xhr){
                self._onUpload(id, fileName, xhr);
                self._options.onUpload(id, fileName, xhr);
            }
        });

        return handler;
    },
    _preventLeaveInProgress: function(){
        var self = this;

        this._attach(window, 'beforeunload', function(e){
            if (!self._filesInProgress){return;}

            var e = e || window.event;
            // for ie, ff
            e.returnValue = self._options.messages.onLeave;
            // for webkit
            return self._options.messages.onLeave;
        });
    },
    _onSubmit: function(id, fileName){
        this._filesInProgress++;
    },
    _onProgress: function(id, fileName, loaded, total){
    },
    _onComplete: function(id, fileName, result){
        this._filesInProgress--;
        if (result.error){
            this._options.showMessage(result.error);
        }
    },
    _onCancel: function(id, fileName){
        this._filesInProgress--;
    },
    _onUpload: function(id, fileName, xhr){
    },
    _onInputChange: function(input){
        if (this._handler instanceof qq.UploadHandlerXhr){
            this._uploadFileList(input.files);
        } else {
            if (this._validateFile(input)){
                this._uploadFile(input);
            }
        }
        this._button.reset();
    },
    _uploadFileList: function(files){
        for (var i=0; i<files.length; i++){
            if ( !this._validateFile(files[i])){
                return;
            }
        }

        for (var i=0; i<files.length; i++){
            this._uploadFile(files[i]);
        }
    },
    _uploadFile: function(fileContainer){
        var id = this._handler.add(fileContainer);
        var fileName = this._handler.getName(id);

        if (this._options.onSubmit(id, fileName) !== false){
            this._onSubmit(id, fileName);
            this._handler.upload(id, this._options.params);
        }
    },
    _validateFile: function(file){
        var name, size;

        if (file.value){
            // it is a file input
            // get input value and remove path to normalize
            name = file.value.replace(/.*(\/|\\)/, "");
        } else {
            // fix missing properties in Safari 4 and firefox 11.0a2
            name = (file.fileName !== null && file.fileName !== undefined) ? file.fileName : file.name;
			size = (file.fileSize !== null && file.fileSize !== undefined) ? file.fileSize : file.size;
        }

        if (! this._isAllowedExtension(name)){
            this._error('typeError', name);
            return false;

        } else if (size === 0){
            this._error('emptyError', name);
            return false;

        } else if (size && this._options.sizeLimit && size > this._options.sizeLimit){
            this._error('sizeError', name);
            return false;

        } else if (size && size < this._options.minSizeLimit){
            this._error('minSizeError', name);
            return false;
        }

        return true;
    },
    _error: function(code, fileName){
        var message = this._options.messages[code];
        function r(name, replacement){ message = message.replace(name, replacement); }

        r('{file}', this._formatFileName(fileName));
        r('{extensions}', this._options.allowedExtensions.join(', '));
        r('{sizeLimit}', this._formatSize(this._options.sizeLimit));
        r('{minSizeLimit}', this._formatSize(this._options.minSizeLimit));

        this._options.showMessage(message);
    },
    _formatFileName: function(name){
        if (name.length > 33){
            name = name.slice(0, 19) + '...' + name.slice(-13);
        }
        return name;
    },
    _isAllowedExtension: function(fileName){
        var ext = (-1 !== fileName.indexOf('.'))
					? fileName.replace(/.*[.]/, '').toLowerCase()
					: '';
        var allowed = this._options.allowedExtensions;

        if (!allowed.length){return true;}

        for (var i=0; i<allowed.length; i++){
            if (allowed[i].toLowerCase() == ext){ return true;}
        }

        return false;
    },
    _formatSize: function(bytes){
        var i = -1;
        do {
            bytes = bytes / 1024;
            i++;
        } while (bytes > 99);

        return Math.max(bytes, 0.1).toFixed(1) + ['kB', 'MB', 'GB', 'TB', 'PB', 'EB'][i];
    }
};


/**
 * Class that creates upload widget with drag-and-drop and file list
 * @inherits qq.FileUploaderBasic
 */
qq.FileUploader = function(o){
    // call parent constructor
    qq.FileUploaderBasic.apply(this, arguments);

    // additional options
    qq.extend(this._options, {
        element: null,
        // if set, will be used instead of qq-upload-list in template
        listElement: null,
        dragText: 'Soltar archivo aqui para subida',
        uploadButtonText: 'Subir un documento',
        cancelButtonText: 'Cancelar',
        failUploadText: 'Error en la subida',

        template: '<div class="qq-uploader">' +
                '<div class="qq-upload-drop-area"><span>{dragText}</span></div>' +
                '<div class="qq-upload-button">{uploadButtonText}</div>' +
                '<ul class="qq-upload-list"></ul>' +
             '</div>',

        // template for one item in file list
        fileTemplate: '<li>' +
                '<span class="qq-progress-bar"></span>' +
                '<span class="qq-upload-file"></span>' +
                '<span class="qq-upload-spinner"></span>' +
                '<span class="qq-upload-size"></span>' +
                '<a class="qq-upload-cancel" href="#">{cancelButtonText}</a>' +
                '<span class="qq-upload-failed-text">{failUploadtext}</span>' +
            '</li>',

        classes: {
            // used to get elements from templates
            button: 'qq-upload-button',
            drop: 'qq-upload-drop-area',
            dropActive: 'qq-upload-drop-area-active',
            dropDisabled: 'qq-upload-drop-area-disabled',
            list: 'qq-upload-list',
            progressBar: 'qq-progress-bar',
            file: 'qq-upload-file',
            spinner: 'qq-upload-spinner',
            size: 'qq-upload-size',
            cancel: 'qq-upload-cancel',

            // added to list item <li> when upload completes
            // used in css to hide progress spinner
            success: 'qq-upload-success',
            fail: 'qq-upload-fail'
        }
    });
    // overwrite options with user supplied
    qq.extend(this._options, o);

    // overwrite the upload button text if any
    // same for the Cancel button and Fail message text
    this._options.template     = this._options.template.replace(/\{dragText\}/g, this._options.dragText);
    this._options.template     = this._options.template.replace(/\{uploadButtonText\}/g, this._options.uploadButtonText);
    this._options.fileTemplate = this._options.fileTemplate.replace(/\{cancelButtonText\}/g, this._options.cancelButtonText);
    this._options.fileTemplate = this._options.fileTemplate.replace(/\{failUploadtext\}/g, this._options.failUploadText);

    this._element = this._options.element;
    this._element.innerHTML = this._options.template;
    this._listElement = this._options.listElement || this._find(this._element, 'list');

    this._classes = this._options.classes;

    this._button = this._createUploadButton(this._find(this._element, 'button'));

    this._bindCancelEvent();
    this._setupDragDrop();
};

// inherit from Basic Uploader
qq.extend(qq.FileUploader.prototype, qq.FileUploaderBasic.prototype);

qq.extend(qq.FileUploader.prototype, {
    addExtraDropzone: function(element){
        this._setupExtraDropzone(element);
    },
    removeExtraDropzone: function(element){
        var dzs = this._options.extraDropzones;
        for(var i in dzs) if (dzs[i] === element) return this._options.extraDropzones.splice(i,1);
    },
    _leaving_document_out: function(e){
        return ((qq.chrome() || (qq.safari() && qq.windows())) && e.clientX == 0 && e.clientY == 0) // null coords for Chrome and Safari Windows
             || (qq.firefox() && !e.relatedTarget); // null e.relatedTarget for Firefox
     },
    /**
     * Gets one of the elements listed in this._options.classes
     **/
    _find: function(parent, type){
        var element = qq.getByClass(parent, this._options.classes[type])[0];
        if (!element){
            throw new Error('element not found ' + type);
        }

        return element;
    },
    _setupExtraDropzone: function(element){
        this._options.extraDropzones.push(element);
        this._setupDropzone(element);
    },
    _setupDropzone: function(dropArea){
        var self = this;

        var dz = new qq.UploadDropZone({
            element: dropArea,
            onEnter: function(e){
                qq.addClass(dropArea, self._classes.dropActive);
                e.stopPropagation();
            },
            onLeave: function(e){
                //e.stopPropagation();
            },
            onLeaveNotDescendants: function(e){
                qq.removeClass(dropArea, self._classes.dropActive);
            },
            onDrop: function(e){
                dropArea.style.display = 'none';
                qq.removeClass(dropArea, self._classes.dropActive);
                self._uploadFileList(e.dataTransfer.files);
            }
        });

		this.addDisposer(function() { dz.dispose(); });

		dropArea.style.display = 'none';
    },
    _setupDragDrop: function(){
        var dropArea = this._find(this._element, 'drop');
		var self = this;
        this._options.extraDropzones.push(dropArea);

        var dropzones = this._options.extraDropzones;
        var i;
        for (i=0; i < dropzones.length; i++){
            this._setupDropzone(dropzones[i]);
        }

		// IE <= 9 does not support the File API used for drag+drop uploads
		// Any volunteers to enable & test this for IE10?
		if (!qq.ie()) {
			this._attach(document, 'dragenter', function(e){
				if (qq.hasClass(dropArea, self._classes.dropDisabled)) return;

				dropArea.style.display = 'block';
				for (i=0; i < dropzones.length; i++){ dropzones[i].style.display = 'block'; }

			});
		}
        this._attach(document, 'dragleave', function(e){
            var relatedTarget = document.elementFromPoint(e.clientX, e.clientY);
            // only fire when leaving document out
            if (qq.FileUploader.prototype._leaving_document_out(e)) {
                for (i=0; i < dropzones.length; i++){ dropzones[i].style.display = 'none'; }
            }
        });
        qq.attach(document, 'drop', function(e){
          for (i=0; i < dropzones.length; i++){ dropzones[i].style.display = 'none'; }
          e.preventDefault();
        });
    },
    _onSubmit: function(id, fileName){
        qq.FileUploaderBasic.prototype._onSubmit.apply(this, arguments);
        this._addToList(id, fileName);
    },
	// Update the progress bar & percentage as the file is uploaded
    _onProgress: function(id, fileName, loaded, total){
        qq.FileUploaderBasic.prototype._onProgress.apply(this, arguments);

        var item = this._getItemByFileId(id);
        var size = this._find(item, 'size');
        size.style.display = 'inline';

        var text;
		var percent = Math.round(loaded / total * 100);

        if (loaded != total) {
			// If still uploading, display percentage
            text = percent + '% from ' + this._formatSize(total);
        } else {
			// If complete, just display final size
            text = this._formatSize(total);
        }

		// Update progress bar <span> tag
		this._find(item, 'progressBar').style.width = percent + '%';

        qq.setText(size, text);
    },
    _onComplete: function(id, fileName, result){
        qq.FileUploaderBasic.prototype._onComplete.apply(this, arguments);

        // mark completed
        var item = this._getItemByFileId(id);
        qq.remove(this._find(item, 'cancel'));
        qq.remove(this._find(item, 'spinner'));

        if (result.data.temporal_name){
            qq.addClass(item, this._classes.success);
        } else {
            qq.addClass(item, this._classes.fail);
        }
    },
    _addToList: function(id, fileName){
        var item = qq.toElement(this._options.fileTemplate);
        item.qqFileId = id;

        var fileElement = this._find(item, 'file');
        qq.setText(fileElement, this._formatFileName(fileName));
        this._find(item, 'size').style.display = 'none';
		if (!this._options.multiple) this._clearList();
        this._listElement.appendChild(item);
    },
	_clearList: function(){
		this._listElement.innerHTML = '';
	},
    _getItemByFileId: function(id){
        var item = this._listElement.firstChild;

        // there can't be txt nodes in dynamically created list
        // and we can  use nextSibling
        while (item){
            if (item.qqFileId == id) return item;
            item = item.nextSibling;
        }
    },
    /**
     * delegate click event for cancel link
     **/
    _bindCancelEvent: function(){
        var self = this,
            list = this._listElement;

        this._attach(list, 'click', function(e){
            e = e || window.event;
            var target = e.target || e.srcElement;

            if (qq.hasClass(target, self._classes.cancel)){
                qq.preventDefault(e);

                var item = target.parentNode;
                self._handler.cancel(item.qqFileId);
                qq.remove(item);
            }
        });
    }
});

qq.UploadDropZone = function(o){
    this._options = {
        element: null,
        onEnter: function(e){},
        onLeave: function(e){},
        // is not fired when leaving element by hovering descendants
        onLeaveNotDescendants: function(e){},
        onDrop: function(e){}
    };
    qq.extend(this._options, o);
    qq.extend(this, qq.DisposeSupport);

    this._element = this._options.element;

    this._disableDropOutside();
    this._attachEvents();
};

qq.UploadDropZone.prototype = {
    _dragover_should_be_canceled: function(){
        return qq.safari() || (qq.firefox() && qq.windows());
    },
    _disableDropOutside: function(e){
        // run only once for all instances
        if (!qq.UploadDropZone.dropOutsideDisabled ){

            // for these cases we need to catch onDrop to reset dropArea
            if (this._dragover_should_be_canceled){
            qq.attach(document, 'dragover', function(e){
                    e.preventDefault();
                });
            } else {
                qq.attach(document, 'dragover', function(e){
                if (e.dataTransfer){
                    e.dataTransfer.dropEffect = 'none';
                    e.preventDefault();
                    }
            });
            }

            qq.UploadDropZone.dropOutsideDisabled = true;
        }
    },
    _attachEvents: function(){
        var self = this;

        self._attach(self._element, 'dragover', function(e){
            if (!self._isValidFileDrag(e)) return;

            var effect = qq.ie() ? null : e.dataTransfer.effectAllowed;
            if (effect == 'move' || effect == 'linkMove'){
                e.dataTransfer.dropEffect = 'move'; // for FF (only move allowed)
            } else {
                e.dataTransfer.dropEffect = 'copy'; // for Chrome
            }

            e.stopPropagation();
            e.preventDefault();
        });

        self._attach(self._element, 'dragenter', function(e){
            if (!self._isValidFileDrag(e)) return;

            self._options.onEnter(e);
        });

        self._attach(self._element, 'dragleave', function(e){
            if (!self._isValidFileDrag(e)) return;

            self._options.onLeave(e);

            var relatedTarget = document.elementFromPoint(e.clientX, e.clientY);
            // do not fire when moving a mouse over a descendant
            if (qq.contains(this, relatedTarget)) return;

            self._options.onLeaveNotDescendants(e);
        });

        self._attach(self._element, 'drop', function(e){
            if (!self._isValidFileDrag(e)) return;

            e.preventDefault();
            self._options.onDrop(e);
        });
    },
    _isValidFileDrag: function(e){
		// e.dataTransfer currently causing IE errors
		// IE9 does NOT support file API, so drag-and-drop is not possible
		// IE10 should work, but currently has not been tested - any volunteers?
		if (qq.ie()) return false;

        var dt = e.dataTransfer,
            // do not check dt.types.contains in webkit, because it crashes safari 4
            isSafari = qq.safari();

        // dt.effectAllowed is none in Safari 5
        // dt.types.contains check is for firefox
        return dt && dt.effectAllowed != 'none' &&
            (dt.files || (!isSafari && dt.types.contains && dt.types.contains('Files')));

    }
};

qq.UploadButton = function(o){
    this._options = {
        element: null,
        // if set to true adds multiple attribute to file input
        multiple: false,
        acceptFiles: null,
        // name attribute of file input
        name: 'file',
        onChange: function(input){},
        hoverClass: 'qq-upload-button-hover',
        focusClass: 'qq-upload-button-focus'
    };

    qq.extend(this._options, o);
    qq.extend(this, qq.DisposeSupport);

    this._element = this._options.element;

    // make button suitable container for input
    qq.css(this._element, {
        position: 'relative',
        overflow: 'hidden',
        // Make sure browse button is in the right side
        // in Internet Explorer
        direction: 'ltr'
    });

    this._input = this._createInput();
};

qq.UploadButton.prototype = {
    /* returns file input element */
    getInput: function(){
        return this._input;
    },
    /* cleans/recreates the file input */
    reset: function(){
        if (this._input.parentNode){
            qq.remove(this._input);
        }

        qq.removeClass(this._element, this._options.focusClass);
        this._input = this._createInput();
    },
    _createInput: function(){
        var input = document.createElement("input");

        if (this._options.multiple){
            input.setAttribute("multiple", "multiple");
        }

        if (this._options.acceptFiles) input.setAttribute("accept", this._options.acceptFiles);

        input.setAttribute("type", "file");
        input.setAttribute("name", this._options.name);

        qq.css(input, {
            position: 'absolute',
            // in Opera only 'browse' button
            // is clickable and it is located at
            // the right side of the input
            right: 0,
            top: 0,
            fontFamily: 'Arial',
            // 4 persons reported this, the max values that worked for them were 243, 236, 236, 118
            fontSize: '118px',
            margin: 0,
            padding: 0,
            cursor: 'pointer',
            opacity: 0
        });

        this._element.appendChild(input);

        var self = this;
        this._attach(input, 'change', function(){
            self._options.onChange(input);
        });

        this._attach(input, 'mouseover', function(){
            qq.addClass(self._element, self._options.hoverClass);
        });
        this._attach(input, 'mouseout', function(){
            qq.removeClass(self._element, self._options.hoverClass);
        });
        this._attach(input, 'focus', function(){
            qq.addClass(self._element, self._options.focusClass);
        });
        this._attach(input, 'blur', function(){
            qq.removeClass(self._element, self._options.focusClass);
        });

        // IE and Opera, unfortunately have 2 tab stops on file input
        // which is unacceptable in our case, disable keyboard access
        if (window.attachEvent){
            // it is IE or Opera
            input.setAttribute('tabIndex', "-1");
        }

        return input;
    }
};

/**
 * Class for uploading files, uploading itself is handled by child classes
 */
qq.UploadHandlerAbstract = function(o){
	// Default options, can be overridden by the user
    this._options = {
        debug: false,
        action: '/upload.php',
        // maximum number of concurrent uploads
        maxConnections: 999,
        onProgress: function(id, fileName, loaded, total){},
        onComplete: function(id, fileName, response){},
        onCancel: function(id, fileName){},
        onUpload: function(id, fileName, xhr){}
    };
    qq.extend(this._options, o);

    this._queue = [];
    // params for files in queue
    this._params = [];
};
qq.UploadHandlerAbstract.prototype = {
    log: function(str){
        if (this._options.debug && window.console) console.log('[uploader] ' + str);
    },
    /**
     * Adds file or file input to the queue
     * @returns id
     **/
    add: function(file){},
    /**
     * Sends the file identified by id and additional query params to the server
     */
    upload: function(id, params){
        var len = this._queue.push(id);

        var copy = {};
        qq.extend(copy, params);
        this._params[id] = copy;

        // if too many active uploads, wait...
        if (len <= this._options.maxConnections){
            this._upload(id, this._params[id]);
        }
    },
    /**
     * Cancels file upload by id
     */
    cancel: function(id){
        this._cancel(id);
        this._dequeue(id);
    },
    /**
     * Cancells all uploads
     */
    cancelAll: function(){
        for (var i=0; i<this._queue.length; i++){
            this._cancel(this._queue[i]);
        }
        this._queue = [];
    },
    /**
     * Returns name of the file identified by id
     */
    getName: function(id){},
    /**
     * Returns size of the file identified by id
     */
    getSize: function(id){},
    /**
     * Returns id of files being uploaded or
     * waiting for their turn
     */
    getQueue: function(){
        return this._queue;
    },
    /**
     * Actual upload method
     */
    _upload: function(id){},
    /**
     * Actual cancel method
     */
    _cancel: function(id){},
    /**
     * Removes element from queue, starts upload of next
     */
    _dequeue: function(id){
        var i = qq.indexOf(this._queue, id);
        this._queue.splice(i, 1);

        var max = this._options.maxConnections;

        if (this._queue.length >= max && i < max){
            var nextId = this._queue[max-1];
            this._upload(nextId, this._params[nextId]);
        }
    }
};

/**
 * Class for uploading files using form and iframe
 * @inherits qq.UploadHandlerAbstract
 */
qq.UploadHandlerForm = function(o){
    qq.UploadHandlerAbstract.apply(this, arguments);

    this._inputs = {};
};
// @inherits qq.UploadHandlerAbstract
qq.extend(qq.UploadHandlerForm.prototype, qq.UploadHandlerAbstract.prototype);

qq.extend(qq.UploadHandlerForm.prototype, {
    add: function(fileInput){
        fileInput.setAttribute('name', this._options.inputName);
        var id = 'qq-upload-handler-iframe' + qq.getUniqueId();

        this._inputs[id] = fileInput;

        // remove file input from DOM
        if (fileInput.parentNode){
            qq.remove(fileInput);
        }

        return id;
    },
    getName: function(id){
        // get input value and remove path to normalize
        return this._inputs[id].value.replace(/.*(\/|\\)/, "");
    },
    _cancel: function(id){
        this._options.onCancel(id, this.getName(id));

        delete this._inputs[id];

        var iframe = document.getElementById(id);
        if (iframe){
            // to cancel request set src to something else
            // we use src="javascript:false;" because it doesn't
            // trigger ie6 prompt on https
            iframe.setAttribute('src', 'javascript:false;');

            qq.remove(iframe);
        }
    },
    _upload: function(id, params){
        this._options.onUpload(id, this.getName(id), false);
        var input = this._inputs[id];

        if (!input){
            throw new Error('file with passed id was not added, or already uploaded or cancelled');
        }

        var fileName = this.getName(id);

        var iframe = this._createIframe(id);
        var form = this._createForm(iframe, params);
        form.appendChild(input);

        var self = this;
        this._attachLoadEvent(iframe, function(){
            self.log('iframe loaded');

            var response = self._getIframeContentJSON(iframe);

            self._options.onComplete(id, fileName, response);
            self._dequeue(id);

            delete self._inputs[id];
            // timeout added to fix busy state in FF3.6
            setTimeout(function(){
                self._detach_event();
                qq.remove(iframe);
            }, 1);
        });

        form.submit();
        qq.remove(form);

        return id;
    },
    _attachLoadEvent: function(iframe, callback){
        this._detach_event = qq.attach(iframe, 'load', function(){
            // when we remove iframe from dom
            // the request stops, but in IE load
            // event fires
            if (!iframe.parentNode){
                return;
            }

            // fixing Opera 10.53
            if (iframe.contentDocument &&
                iframe.contentDocument.body &&
                iframe.contentDocument.body.innerHTML == "false"){
                // In Opera event is fired second time
                // when body.innerHTML changed from false
                // to server response approx. after 1 sec
                // when we upload file with iframe
                return;
            }

            callback();
        });
    },
    /**
     * Returns json object received by iframe from server.
     */
    _getIframeContentJSON: function(iframe){
        // iframe.contentWindow.document - for IE<7
        var doc = iframe.contentDocument ? iframe.contentDocument: iframe.contentWindow.document,
            response;

        var innerHTML = doc.body.innerHTML;
        this.log("converting iframe's innerHTML to JSON");
        this.log("innerHTML = " + innerHTML);
        //plain text response may be wrapped in <pre> tag
        if (innerHTML.slice(0, 5).toLowerCase() == '<pre>' && innerHTML.slice(-6).toLowerCase() == '</pre>') {
          innerHTML = doc.body.firstChild.firstChild.nodeValue;
        }

        try {
            response = eval("(" + innerHTML + ")");
        } catch(err){
            response = {};
        }

        return response;
    },
    /**
     * Creates iframe with unique name
     */
    _createIframe: function(id){
        // We can't use following code as the name attribute
        // won't be properly registered in IE6, and new window
        // on form submit will open
        // var iframe = document.createElement('iframe');
        // iframe.setAttribute('name', id);

        var iframe = qq.toElement('<iframe src="javascript:false;" name="' + id + '" />');
        // src="javascript:false;" removes ie6 prompt on https

        iframe.setAttribute('id', id);

        iframe.style.display = 'none';
        document.body.appendChild(iframe);

        return iframe;
    },
    /**
     * Creates form, that will be submitted to iframe
     */
    _createForm: function(iframe, params){
        // We can't use the following code in IE6
        // var form = document.createElement('form');
        // form.setAttribute('method', 'post');
        // form.setAttribute('enctype', 'multipart/form-data');
        // Because in this case file won't be attached to request
        var form = qq.toElement('<form method="post" enctype="multipart/form-data"></form>');

        var queryString = qq.obj2url(params, this._options.action);

        form.setAttribute('action', queryString);
        form.setAttribute('target', iframe.name);
        form.style.display = 'none';
        document.body.appendChild(form);

        return form;
    }
});

/**
 * Class for uploading files using xhr
 * @inherits qq.UploadHandlerAbstract
 */
qq.UploadHandlerXhr = function(o){
    qq.UploadHandlerAbstract.apply(this, arguments);

    this._files = [];
    this._xhrs = [];

    // current loaded size in bytes for each file
    this._loaded = [];
};

// static method
qq.UploadHandlerXhr.isSupported = function(){
    var input = document.createElement('input');
    input.type = 'file';

    return (
        'multiple' in input &&
        typeof File != "undefined" &&
        typeof FormData != "undefined" &&
        typeof (new XMLHttpRequest()).upload != "undefined" );
};

// @inherits qq.UploadHandlerAbstract
qq.extend(qq.UploadHandlerXhr.prototype, qq.UploadHandlerAbstract.prototype)

qq.extend(qq.UploadHandlerXhr.prototype, {
    /**
     * Adds file to the queue
     * Returns id to use with upload, cancel
     **/
    add: function(file){
        if (!(file instanceof File)){
            throw new Error('Passed obj in not a File (in qq.UploadHandlerXhr)');
        }

        return this._files.push(file) - 1;
    },
    getName: function(id){
        var file = this._files[id];
        // fix missing name in Safari 4
        //NOTE: fixed missing name firefox 11.0a2 file.fileName is actually undefined
        return (file.fileName !== null && file.fileName !== undefined) ? file.fileName : file.name;
    },
    getSize: function(id){
        var file = this._files[id];
        return file.fileSize != null ? file.fileSize : file.size;
    },
    /**
     * Returns uploaded bytes for file identified by id
     */
    getLoaded: function(id){
        return this._loaded[id] || 0;
    },
    /**
     * Sends the file identified by id and additional query params to the server
     * @param {Object} params name-value string pairs
     */
    _upload: function(id, params){
        this._options.onUpload(id, this.getName(id), true);

        var file = this._files[id],
            name = this.getName(id),
            size = this.getSize(id);

        this._loaded[id] = 0;

        var xhr = this._xhrs[id] = new XMLHttpRequest();
        var self = this;

        xhr.upload.onprogress = function(e){
            if (e.lengthComputable){
                self._loaded[id] = e.loaded;
                self._options.onProgress(id, name, e.loaded, e.total);
            }
        };

        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4){
                self._onComplete(id, xhr);
            }
        };

        // build query string
        params = params || {};
        params[this._options.inputName] = name;
        var queryString = qq.obj2url(params, this._options.action);

        xhr.open("POST", queryString, true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.setRequestHeader("X-File-Name", encodeURIComponent(name));
        if (this._options.encoding == 'multipart') {
            var formData = new FormData();
            formData.append(name, file);
            file = formData;
        } else {
            xhr.setRequestHeader("Content-Type", "application/octet-stream");
            //NOTE: return mime type in xhr works on chrome 16.0.9 firefox 11.0a2
            xhr.setRequestHeader("X-Mime-Type",file.type );
        }
        for (key in this._options.customHeaders){
            xhr.setRequestHeader(key, this._options.customHeaders[key]);
        };
        xhr.send(file);
    },
    _onComplete: function(id, xhr){
        // the request was aborted/cancelled
        if (!this._files[id]) return;

        var name = this.getName(id);
        var size = this.getSize(id);

        this._options.onProgress(id, name, size, size);

        if (xhr.status == 200){
            this.log("xhr - server response received");
            this.log("responseText = " + xhr.responseText);

            var response;

            try {
                response = eval("(" + xhr.responseText + ")");
            } catch(err){
                response = {};
            }

            this._options.onComplete(id, name, response);

        } else {
            this._options.onError(id, name, xhr);
            this._options.onComplete(id, name, {});
        }

        this._files[id] = null;
        this._xhrs[id] = null;
        this._dequeue(id);
    },
    _cancel: function(id){
        this._options.onCancel(id, this.getName(id));

        this._files[id] = null;

        if (this._xhrs[id]){
            this._xhrs[id].abort();
            this._xhrs[id] = null;
        }
    }
});

/**
 * A generic module which supports object disposing in dispose() method.
 * */
qq.DisposeSupport = {
  _disposers: [],

  /** Run all registered disposers */
  dispose: function() {
    var disposer;
    while (disposer = this._disposers.shift()) {
      disposer();
    }
  },

  /** Add disposer to the collection */
  addDisposer: function(disposeFunction) {
    this._disposers.push(disposeFunction);
  },

  /** Attach event handler and register de-attacher as a disposer */
  _attach: function() {
    this.addDisposer(qq.attach.apply(this, arguments));
  }
};

// lib/handlebars/base.js
var Handlebars = {};

Handlebars.VERSION = "1.0.beta.6";

Handlebars.helpers  = {};
Handlebars.partials = {};

Handlebars.registerHelper = function(name, fn, inverse) {
  if(inverse) { fn.not = inverse; }
  this.helpers[name] = fn;
};

Handlebars.registerPartial = function(name, str) {
  this.partials[name] = str;
};

Handlebars.registerHelper('helperMissing', function(arg) {
  if(arguments.length === 2) {
    return undefined;
  } else {
    throw new Error("Could not find property '" + arg + "'");
  }
});

var toString = Object.prototype.toString, functionType = "[object Function]";

Handlebars.registerHelper('blockHelperMissing', function(context, options) {
  var inverse = options.inverse || function() {}, fn = options.fn;


  var ret = "";
  var type = toString.call(context);

  if(type === functionType) { context = context.call(this); }

  if(context === true) {
    return fn(this);
  } else if(context === false || context == null) {
    return inverse(this);
  } else if(type === "[object Array]") {
    if(context.length > 0) {
      for(var i=0, j=context.length; i<j; i++) {
        ret = ret + fn(context[i]);
      }
    } else {
      ret = inverse(this);
    }
    return ret;
  } else {
    return fn(context);
  }
});

Handlebars.registerHelper('each', function(context, options) {
  var fn = options.fn, inverse = options.inverse;
  var ret = "";

  if(context && context.length > 0) {
    for(var i=0, j=context.length; i<j; i++) {
      ret = ret + fn(context[i]);
    }
  } else {
    ret = inverse(this);
  }
  return ret;
});

Handlebars.registerHelper('if', function(context, options) {
  var type = toString.call(context);
  if(type === functionType) { context = context.call(this); }

  if(!context || Handlebars.Utils.isEmpty(context)) {
    return options.inverse(this);
  } else {
    return options.fn(this);
  }
});

Handlebars.registerHelper('unless', function(context, options) {
  var fn = options.fn, inverse = options.inverse;
  options.fn = inverse;
  options.inverse = fn;

  return Handlebars.helpers['if'].call(this, context, options);
});

Handlebars.registerHelper('with', function(context, options) {
  return options.fn(context);
});

Handlebars.registerHelper('log', function(context) {
  Handlebars.log(context);
});
;
// lib/handlebars/compiler/parser.js
/* Jison generated parser */
var handlebars = (function(){

var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"root":3,"program":4,"EOF":5,"statements":6,"simpleInverse":7,"statement":8,"openInverse":9,"closeBlock":10,"openBlock":11,"mustache":12,"partial":13,"CONTENT":14,"COMMENT":15,"OPEN_BLOCK":16,"inMustache":17,"CLOSE":18,"OPEN_INVERSE":19,"OPEN_ENDBLOCK":20,"path":21,"OPEN":22,"OPEN_UNESCAPED":23,"OPEN_PARTIAL":24,"params":25,"hash":26,"param":27,"STRING":28,"INTEGER":29,"BOOLEAN":30,"hashSegments":31,"hashSegment":32,"ID":33,"EQUALS":34,"pathSegments":35,"SEP":36,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"OPEN_PARTIAL",28:"STRING",29:"INTEGER",30:"BOOLEAN",33:"ID",34:"EQUALS",36:"SEP"},
productions_: [0,[3,2],[4,3],[4,1],[4,0],[6,1],[6,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,3],[13,4],[7,2],[17,3],[17,2],[17,2],[17,1],[25,2],[25,1],[27,1],[27,1],[27,1],[27,1],[26,1],[31,2],[31,1],[32,3],[32,3],[32,3],[32,3],[21,1],[35,3],[35,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return $$[$0-1] 
break;
case 2: this.$ = new yy.ProgramNode($$[$0-2], $$[$0]) 
break;
case 3: this.$ = new yy.ProgramNode($$[$0]) 
break;
case 4: this.$ = new yy.ProgramNode([]) 
break;
case 5: this.$ = [$$[$0]] 
break;
case 6: $$[$0-1].push($$[$0]); this.$ = $$[$0-1] 
break;
case 7: this.$ = new yy.InverseNode($$[$0-2], $$[$0-1], $$[$0]) 
break;
case 8: this.$ = new yy.BlockNode($$[$0-2], $$[$0-1], $$[$0]) 
break;
case 9: this.$ = $$[$0] 
break;
case 10: this.$ = $$[$0] 
break;
case 11: this.$ = new yy.ContentNode($$[$0]) 
break;
case 12: this.$ = new yy.CommentNode($$[$0]) 
break;
case 13: this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1]) 
break;
case 14: this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1]) 
break;
case 15: this.$ = $$[$0-1] 
break;
case 16: this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1]) 
break;
case 17: this.$ = new yy.MustacheNode($$[$0-1][0], $$[$0-1][1], true) 
break;
case 18: this.$ = new yy.PartialNode($$[$0-1]) 
break;
case 19: this.$ = new yy.PartialNode($$[$0-2], $$[$0-1]) 
break;
case 20: 
break;
case 21: this.$ = [[$$[$0-2]].concat($$[$0-1]), $$[$0]] 
break;
case 22: this.$ = [[$$[$0-1]].concat($$[$0]), null] 
break;
case 23: this.$ = [[$$[$0-1]], $$[$0]] 
break;
case 24: this.$ = [[$$[$0]], null] 
break;
case 25: $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
break;
case 26: this.$ = [$$[$0]] 
break;
case 27: this.$ = $$[$0] 
break;
case 28: this.$ = new yy.StringNode($$[$0]) 
break;
case 29: this.$ = new yy.IntegerNode($$[$0]) 
break;
case 30: this.$ = new yy.BooleanNode($$[$0]) 
break;
case 31: this.$ = new yy.HashNode($$[$0]) 
break;
case 32: $$[$0-1].push($$[$0]); this.$ = $$[$0-1] 
break;
case 33: this.$ = [$$[$0]] 
break;
case 34: this.$ = [$$[$0-2], $$[$0]] 
break;
case 35: this.$ = [$$[$0-2], new yy.StringNode($$[$0])] 
break;
case 36: this.$ = [$$[$0-2], new yy.IntegerNode($$[$0])] 
break;
case 37: this.$ = [$$[$0-2], new yy.BooleanNode($$[$0])] 
break;
case 38: this.$ = new yy.IdNode($$[$0]) 
break;
case 39: $$[$0-2].push($$[$0]); this.$ = $$[$0-2]; 
break;
case 40: this.$ = [$$[$0]] 
break;
}
},
table: [{3:1,4:2,5:[2,4],6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],24:[1,15]},{1:[3]},{5:[1,16]},{5:[2,3],7:17,8:18,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,19],20:[2,3],22:[1,13],23:[1,14],24:[1,15]},{5:[2,5],14:[2,5],15:[2,5],16:[2,5],19:[2,5],20:[2,5],22:[2,5],23:[2,5],24:[2,5]},{4:20,6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],24:[1,15]},{4:21,6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],24:[1,15]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],24:[2,9]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],24:[2,10]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],24:[2,11]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],24:[2,12]},{17:22,21:23,33:[1,25],35:24},{17:26,21:23,33:[1,25],35:24},{17:27,21:23,33:[1,25],35:24},{17:28,21:23,33:[1,25],35:24},{21:29,33:[1,25],35:24},{1:[2,1]},{6:30,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],24:[1,15]},{5:[2,6],14:[2,6],15:[2,6],16:[2,6],19:[2,6],20:[2,6],22:[2,6],23:[2,6],24:[2,6]},{17:22,18:[1,31],21:23,33:[1,25],35:24},{10:32,20:[1,33]},{10:34,20:[1,33]},{18:[1,35]},{18:[2,24],21:40,25:36,26:37,27:38,28:[1,41],29:[1,42],30:[1,43],31:39,32:44,33:[1,45],35:24},{18:[2,38],28:[2,38],29:[2,38],30:[2,38],33:[2,38],36:[1,46]},{18:[2,40],28:[2,40],29:[2,40],30:[2,40],33:[2,40],36:[2,40]},{18:[1,47]},{18:[1,48]},{18:[1,49]},{18:[1,50],21:51,33:[1,25],35:24},{5:[2,2],8:18,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,2],22:[1,13],23:[1,14],24:[1,15]},{14:[2,20],15:[2,20],16:[2,20],19:[2,20],22:[2,20],23:[2,20],24:[2,20]},{5:[2,7],14:[2,7],15:[2,7],16:[2,7],19:[2,7],20:[2,7],22:[2,7],23:[2,7],24:[2,7]},{21:52,33:[1,25],35:24},{5:[2,8],14:[2,8],15:[2,8],16:[2,8],19:[2,8],20:[2,8],22:[2,8],23:[2,8],24:[2,8]},{14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],24:[2,14]},{18:[2,22],21:40,26:53,27:54,28:[1,41],29:[1,42],30:[1,43],31:39,32:44,33:[1,45],35:24},{18:[2,23]},{18:[2,26],28:[2,26],29:[2,26],30:[2,26],33:[2,26]},{18:[2,31],32:55,33:[1,56]},{18:[2,27],28:[2,27],29:[2,27],30:[2,27],33:[2,27]},{18:[2,28],28:[2,28],29:[2,28],30:[2,28],33:[2,28]},{18:[2,29],28:[2,29],29:[2,29],30:[2,29],33:[2,29]},{18:[2,30],28:[2,30],29:[2,30],30:[2,30],33:[2,30]},{18:[2,33],33:[2,33]},{18:[2,40],28:[2,40],29:[2,40],30:[2,40],33:[2,40],34:[1,57],36:[2,40]},{33:[1,58]},{14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],24:[2,13]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],24:[2,16]},{5:[2,17],14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],24:[2,17]},{5:[2,18],14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],24:[2,18]},{18:[1,59]},{18:[1,60]},{18:[2,21]},{18:[2,25],28:[2,25],29:[2,25],30:[2,25],33:[2,25]},{18:[2,32],33:[2,32]},{34:[1,57]},{21:61,28:[1,62],29:[1,63],30:[1,64],33:[1,25],35:24},{18:[2,39],28:[2,39],29:[2,39],30:[2,39],33:[2,39],36:[2,39]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],24:[2,19]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],24:[2,15]},{18:[2,34],33:[2,34]},{18:[2,35],33:[2,35]},{18:[2,36],33:[2,36]},{18:[2,37],33:[2,37]}],
defaultActions: {16:[2,1],37:[2,23],53:[2,21]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol == null)
                symbol = lex();
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                var errStr = "";
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + this.terminals_[symbol] + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};/* Jison generated lexer */
var lexer = (function(){

var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parseError) {
            this.yy.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext+=ch;
        this.yyleng++;
        this.match+=ch;
        this.matched+=ch;
        var lines = ch.match(/\n/);
        if (lines) this.yylineno++;
        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        this._input = ch + this._input;
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            match = this._input.match(this.rules[rules[i]]);
            if (match) {
                lines = match[0].match(/\n.*/g);
                if (lines) this.yylineno += lines.length;
                this.yylloc = {first_line: this.yylloc.last_line,
                               last_line: this.yylineno+1,
                               first_column: this.yylloc.last_column,
                               last_column: lines ? lines[lines.length-1].length-1 : this.yylloc.last_column + match[0].length}
                this.yytext += match[0];
                this.match += match[0];
                this.matches = match;
                this.yyleng = this.yytext.length;
                this._more = false;
                this._input = this._input.slice(match[0].length);
                this.matched += match[0];
                token = this.performAction.call(this, this.yy, this, rules[i],this.conditionStack[this.conditionStack.length-1]);
                if (token) return token;
                else return;
            }
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(), 
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:
                                   if(yy_.yytext.slice(-1) !== "\\") this.begin("mu");
                                   if(yy_.yytext.slice(-1) === "\\") yy_.yytext = yy_.yytext.substr(0,yy_.yyleng-1), this.begin("emu");
                                   if(yy_.yytext) return 14;
                                 
break;
case 1: return 14; 
break;
case 2: this.popState(); return 14; 
break;
case 3: return 24; 
break;
case 4: return 16; 
break;
case 5: return 20; 
break;
case 6: return 19; 
break;
case 7: return 19; 
break;
case 8: return 23; 
break;
case 9: return 23; 
break;
case 10: yy_.yytext = yy_.yytext.substr(3,yy_.yyleng-5); this.popState(); return 15; 
break;
case 11: return 22; 
break;
case 12: return 34; 
break;
case 13: return 33; 
break;
case 14: return 33; 
break;
case 15: return 36; 
break;
case 16: /*ignore whitespace*/ 
break;
case 17: this.popState(); return 18; 
break;
case 18: this.popState(); return 18; 
break;
case 19: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2).replace(/\\"/g,'"'); return 28; 
break;
case 20: return 30; 
break;
case 21: return 30; 
break;
case 22: return 29; 
break;
case 23: return 33; 
break;
case 24: yy_.yytext = yy_.yytext.substr(1, yy_.yyleng-2); return 33; 
break;
case 25: return 'INVALID'; 
break;
case 26: return 5; 
break;
}
};
lexer.rules = [/^[^\x00]*?(?=(\{\{))/,/^[^\x00]+/,/^[^\x00]{2,}?(?=(\{\{))/,/^\{\{>/,/^\{\{#/,/^\{\{\//,/^\{\{\^/,/^\{\{\s*else\b/,/^\{\{\{/,/^\{\{&/,/^\{\{![\s\S]*?\}\}/,/^\{\{/,/^=/,/^\.(?=[} ])/,/^\.\./,/^[\/.]/,/^\s+/,/^\}\}\}/,/^\}\}/,/^"(\\["]|[^"])*"/,/^true(?=[}\s])/,/^false(?=[}\s])/,/^[0-9]+(?=[}\s])/,/^[a-zA-Z0-9_$-]+(?=[=}\s\/.])/,/^\[[^\]]*\]/,/^./,/^$/];
lexer.conditions = {"mu":{"rules":[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],"inclusive":false},"emu":{"rules":[2],"inclusive":false},"INITIAL":{"rules":[0,1,26],"inclusive":true}};return lexer;})()
parser.lexer = lexer;
return parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = handlebars;
exports.parse = function () { return handlebars.parse.apply(handlebars, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    if (typeof process !== 'undefined') {
        var source = require('fs').readFileSync(require('path').join(process.cwd(), args[1]), "utf8");
    } else {
        var cwd = require("file").path(require("file").cwd());
        var source = cwd.join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
};
;
// lib/handlebars/compiler/base.js
Handlebars.Parser = handlebars;

Handlebars.parse = function(string) {
  Handlebars.Parser.yy = Handlebars.AST;
  return Handlebars.Parser.parse(string);
};

Handlebars.print = function(ast) {
  return new Handlebars.PrintVisitor().accept(ast);
};

Handlebars.logger = {
  DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3, level: 3,

  // override in the host environment
  log: function(level, str) {}
};

Handlebars.log = function(level, str) { Handlebars.logger.log(level, str); };
;
// lib/handlebars/compiler/ast.js
(function() {

  Handlebars.AST = {};

  Handlebars.AST.ProgramNode = function(statements, inverse) {
    this.type = "program";
    this.statements = statements;
    if(inverse) { this.inverse = new Handlebars.AST.ProgramNode(inverse); }
  };

  Handlebars.AST.MustacheNode = function(params, hash, unescaped) {
    this.type = "mustache";
    this.id = params[0];
    this.params = params.slice(1);
    this.hash = hash;
    this.escaped = !unescaped;
  };

  Handlebars.AST.PartialNode = function(id, context) {
    this.type    = "partial";

    // TODO: disallow complex IDs

    this.id      = id;
    this.context = context;
  };

  var verifyMatch = function(open, close) {
    if(open.original !== close.original) {
      throw new Handlebars.Exception(open.original + " doesn't match " + close.original);
    }
  };

  Handlebars.AST.BlockNode = function(mustache, program, close) {
    verifyMatch(mustache.id, close);
    this.type = "block";
    this.mustache = mustache;
    this.program  = program;
  };

  Handlebars.AST.InverseNode = function(mustache, program, close) {
    verifyMatch(mustache.id, close);
    this.type = "inverse";
    this.mustache = mustache;
    this.program  = program;
  };

  Handlebars.AST.ContentNode = function(string) {
    this.type = "content";
    this.string = string;
  };

  Handlebars.AST.HashNode = function(pairs) {
    this.type = "hash";
    this.pairs = pairs;
  };

  Handlebars.AST.IdNode = function(parts) {
    this.type = "ID";
    this.original = parts.join(".");

    var dig = [], depth = 0;

    for(var i=0,l=parts.length; i<l; i++) {
      var part = parts[i];

      if(part === "..") { depth++; }
      else if(part === "." || part === "this") { this.isScoped = true; }
      else { dig.push(part); }
    }

    this.parts    = dig;
    this.string   = dig.join('.');
    this.depth    = depth;
    this.isSimple = (dig.length === 1) && (depth === 0);
  };

  Handlebars.AST.StringNode = function(string) {
    this.type = "STRING";
    this.string = string;
  };

  Handlebars.AST.IntegerNode = function(integer) {
    this.type = "INTEGER";
    this.integer = integer;
  };

  Handlebars.AST.BooleanNode = function(bool) {
    this.type = "BOOLEAN";
    this.bool = bool;
  };

  Handlebars.AST.CommentNode = function(comment) {
    this.type = "comment";
    this.comment = comment;
  };

})();;
// lib/handlebars/utils.js
Handlebars.Exception = function(message) {
  var tmp = Error.prototype.constructor.apply(this, arguments);

  for (var p in tmp) {
    if (tmp.hasOwnProperty(p)) { this[p] = tmp[p]; }
  }

  this.message = tmp.message;
};
Handlebars.Exception.prototype = new Error;

// Build out our basic SafeString type
Handlebars.SafeString = function(string) {
  this.string = string;
};
Handlebars.SafeString.prototype.toString = function() {
  return this.string.toString();
};

(function() {
  var escape = {
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  };

  var badChars = /&(?!\w+;)|[<>"'`]/g;
  var possible = /[&<>"'`]/;

  var escapeChar = function(chr) {
    return escape[chr] || "&amp;";
  };

  Handlebars.Utils = {
    escapeExpression: function(string) {
      // don't escape SafeStrings, since they're already safe
      if (string instanceof Handlebars.SafeString) {
        return string.toString();
      } else if (string == null || string === false) {
        return "";
      }

      if(!possible.test(string)) { return string; }
      return string.replace(badChars, escapeChar);
    },

    isEmpty: function(value) {
      if (typeof value === "undefined") {
        return true;
      } else if (value === null) {
        return true;
      } else if (value === false) {
        return true;
      } else if(Object.prototype.toString.call(value) === "[object Array]" && value.length === 0) {
        return true;
      } else {
        return false;
      }
    }
  };
})();;
// lib/handlebars/compiler/compiler.js
Handlebars.Compiler = function() {};
Handlebars.JavaScriptCompiler = function() {};

(function(Compiler, JavaScriptCompiler) {
  Compiler.OPCODE_MAP = {
    appendContent: 1,
    getContext: 2,
    lookupWithHelpers: 3,
    lookup: 4,
    append: 5,
    invokeMustache: 6,
    appendEscaped: 7,
    pushString: 8,
    truthyOrFallback: 9,
    functionOrFallback: 10,
    invokeProgram: 11,
    invokePartial: 12,
    push: 13,
    assignToHash: 15,
    pushStringParam: 16
  };

  Compiler.MULTI_PARAM_OPCODES = {
    appendContent: 1,
    getContext: 1,
    lookupWithHelpers: 2,
    lookup: 1,
    invokeMustache: 3,
    pushString: 1,
    truthyOrFallback: 1,
    functionOrFallback: 1,
    invokeProgram: 3,
    invokePartial: 1,
    push: 1,
    assignToHash: 1,
    pushStringParam: 1
  };

  Compiler.DISASSEMBLE_MAP = {};

  for(var prop in Compiler.OPCODE_MAP) {
    var value = Compiler.OPCODE_MAP[prop];
    Compiler.DISASSEMBLE_MAP[value] = prop;
  }

  Compiler.multiParamSize = function(code) {
    return Compiler.MULTI_PARAM_OPCODES[Compiler.DISASSEMBLE_MAP[code]];
  };

  Compiler.prototype = {
    compiler: Compiler,

    disassemble: function() {
      var opcodes = this.opcodes, opcode, nextCode;
      var out = [], str, name, value;

      for(var i=0, l=opcodes.length; i<l; i++) {
        opcode = opcodes[i];

        if(opcode === 'DECLARE') {
          name = opcodes[++i];
          value = opcodes[++i];
          out.push("DECLARE " + name + " = " + value);
        } else {
          str = Compiler.DISASSEMBLE_MAP[opcode];

          var extraParams = Compiler.multiParamSize(opcode);
          var codes = [];

          for(var j=0; j<extraParams; j++) {
            nextCode = opcodes[++i];

            if(typeof nextCode === "string") {
              nextCode = "\"" + nextCode.replace("\n", "\\n") + "\"";
            }

            codes.push(nextCode);
          }

          str = str + " " + codes.join(" ");

          out.push(str);
        }
      }

      return out.join("\n");
    },

    guid: 0,

    compile: function(program, options) {
      this.children = [];
      this.depths = {list: []};
      this.options = options;

      // These changes will propagate to the other compiler components
      var knownHelpers = this.options.knownHelpers;
      this.options.knownHelpers = {
        'helperMissing': true,
        'blockHelperMissing': true,
        'each': true,
        'if': true,
        'unless': true,
        'with': true,
        'log': true
      };
      if (knownHelpers) {
        for (var name in knownHelpers) {
          this.options.knownHelpers[name] = knownHelpers[name];
        }
      }

      return this.program(program);
    },

    accept: function(node) {
      return this[node.type](node);
    },

    program: function(program) {
      var statements = program.statements, statement;
      this.opcodes = [];

      for(var i=0, l=statements.length; i<l; i++) {
        statement = statements[i];
        this[statement.type](statement);
      }
      this.isSimple = l === 1;

      this.depths.list = this.depths.list.sort(function(a, b) {
        return a - b;
      });

      return this;
    },

    compileProgram: function(program) {
      var result = new this.compiler().compile(program, this.options);
      var guid = this.guid++;

      this.usePartial = this.usePartial || result.usePartial;

      this.children[guid] = result;

      for(var i=0, l=result.depths.list.length; i<l; i++) {
        depth = result.depths.list[i];

        if(depth < 2) { continue; }
        else { this.addDepth(depth - 1); }
      }

      return guid;
    },

    block: function(block) {
      var mustache = block.mustache;
      var depth, child, inverse, inverseGuid;

      var params = this.setupStackForMustache(mustache);

      var programGuid = this.compileProgram(block.program);

      if(block.program.inverse) {
        inverseGuid = this.compileProgram(block.program.inverse);
        this.declare('inverse', inverseGuid);
      }

      this.opcode('invokeProgram', programGuid, params.length, !!mustache.hash);
      this.declare('inverse', null);
      this.opcode('append');
    },

    inverse: function(block) {
      var params = this.setupStackForMustache(block.mustache);

      var programGuid = this.compileProgram(block.program);

      this.declare('inverse', programGuid);

      this.opcode('invokeProgram', null, params.length, !!block.mustache.hash);
      this.declare('inverse', null);
      this.opcode('append');
    },

    hash: function(hash) {
      var pairs = hash.pairs, pair, val;

      this.opcode('push', '{}');

      for(var i=0, l=pairs.length; i<l; i++) {
        pair = pairs[i];
        val  = pair[1];

        this.accept(val);
        this.opcode('assignToHash', pair[0]);
      }
    },

    partial: function(partial) {
      var id = partial.id;
      this.usePartial = true;

      if(partial.context) {
        this.ID(partial.context);
      } else {
        this.opcode('push', 'depth0');
      }

      this.opcode('invokePartial', id.original);
      this.opcode('append');
    },

    content: function(content) {
      this.opcode('appendContent', content.string);
    },

    mustache: function(mustache) {
      var params = this.setupStackForMustache(mustache);

      this.opcode('invokeMustache', params.length, mustache.id.original, !!mustache.hash);

      if(mustache.escaped && !this.options.noEscape) {
        this.opcode('appendEscaped');
      } else {
        this.opcode('append');
      }
    },

    ID: function(id) {
      this.addDepth(id.depth);

      this.opcode('getContext', id.depth);

      this.opcode('lookupWithHelpers', id.parts[0] || null, id.isScoped || false);

      for(var i=1, l=id.parts.length; i<l; i++) {
        this.opcode('lookup', id.parts[i]);
      }
    },

    STRING: function(string) {
      this.opcode('pushString', string.string);
    },

    INTEGER: function(integer) {
      this.opcode('push', integer.integer);
    },

    BOOLEAN: function(bool) {
      this.opcode('push', bool.bool);
    },

    comment: function() {},

    // HELPERS
    pushParams: function(params) {
      var i = params.length, param;

      while(i--) {
        param = params[i];

        if(this.options.stringParams) {
          if(param.depth) {
            this.addDepth(param.depth);
          }

          this.opcode('getContext', param.depth || 0);
          this.opcode('pushStringParam', param.string);
        } else {
          this[param.type](param);
        }
      }
    },

    opcode: function(name, val1, val2, val3) {
      this.opcodes.push(Compiler.OPCODE_MAP[name]);
      if(val1 !== undefined) { this.opcodes.push(val1); }
      if(val2 !== undefined) { this.opcodes.push(val2); }
      if(val3 !== undefined) { this.opcodes.push(val3); }
    },

    declare: function(name, value) {
      this.opcodes.push('DECLARE');
      this.opcodes.push(name);
      this.opcodes.push(value);
    },

    addDepth: function(depth) {
      if(depth === 0) { return; }

      if(!this.depths[depth]) {
        this.depths[depth] = true;
        this.depths.list.push(depth);
      }
    },

    setupStackForMustache: function(mustache) {
      var params = mustache.params;

      this.pushParams(params);

      if(mustache.hash) {
        this.hash(mustache.hash);
      }

      this.ID(mustache.id);

      return params;
    }
  };

  JavaScriptCompiler.prototype = {
    // PUBLIC API: You can override these methods in a subclass to provide
    // alternative compiled forms for name lookup and buffering semantics
    nameLookup: function(parent, name, type) {
			if (/^[0-9]+$/.test(name)) {
        return parent + "[" + name + "]";
      } else if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
	    	return parent + "." + name;
			}
			else {
				return parent + "['" + name + "']";
      }
    },

    appendToBuffer: function(string) {
      if (this.environment.isSimple) {
        return "return " + string + ";";
      } else {
        return "buffer += " + string + ";";
      }
    },

    initializeBuffer: function() {
      return this.quotedString("");
    },

    namespace: "Handlebars",
    // END PUBLIC API

    compile: function(environment, options, context, asObject) {
      this.environment = environment;
      this.options = options || {};

      this.name = this.environment.name;
      this.isChild = !!context;
      this.context = context || {
        programs: [],
        aliases: { self: 'this' },
        registers: {list: []}
      };

      this.preamble();

      this.stackSlot = 0;
      this.stackVars = [];

      this.compileChildren(environment, options);

      var opcodes = environment.opcodes, opcode;

      this.i = 0;

      for(l=opcodes.length; this.i<l; this.i++) {
        opcode = this.nextOpcode(0);

        if(opcode[0] === 'DECLARE') {
          this.i = this.i + 2;
          this[opcode[1]] = opcode[2];
        } else {
          this.i = this.i + opcode[1].length;
          this[opcode[0]].apply(this, opcode[1]);
        }
      }

      return this.createFunctionContext(asObject);
    },

    nextOpcode: function(n) {
      var opcodes = this.environment.opcodes, opcode = opcodes[this.i + n], name, val;
      var extraParams, codes;

      if(opcode === 'DECLARE') {
        name = opcodes[this.i + 1];
        val  = opcodes[this.i + 2];
        return ['DECLARE', name, val];
      } else {
        name = Compiler.DISASSEMBLE_MAP[opcode];

        extraParams = Compiler.multiParamSize(opcode);
        codes = [];

        for(var j=0; j<extraParams; j++) {
          codes.push(opcodes[this.i + j + 1 + n]);
        }

        return [name, codes];
      }
    },

    eat: function(opcode) {
      this.i = this.i + opcode.length;
    },

    preamble: function() {
      var out = [];

      // this register will disambiguate helper lookup from finding a function in
      // a context. This is necessary for mustache compatibility, which requires
      // that context functions in blocks are evaluated by blockHelperMissing, and
      // then proceed as if the resulting value was provided to blockHelperMissing.
      this.useRegister('foundHelper');

      if (!this.isChild) {
        var namespace = this.namespace;
        var copies = "helpers = helpers || " + namespace + ".helpers;";
        if(this.environment.usePartial) { copies = copies + " partials = partials || " + namespace + ".partials;"; }
        out.push(copies);
      } else {
        out.push('');
      }

      if (!this.environment.isSimple) {
        out.push(", buffer = " + this.initializeBuffer());
      } else {
        out.push("");
      }

      // track the last context pushed into place to allow skipping the
      // getContext opcode when it would be a noop
      this.lastContext = 0;
      this.source = out;
    },

    createFunctionContext: function(asObject) {
      var locals = this.stackVars;
      if (!this.isChild) {
        locals = locals.concat(this.context.registers.list);
      }

      if(locals.length > 0) {
        this.source[1] = this.source[1] + ", " + locals.join(", ");
      }

      // Generate minimizer alias mappings
      if (!this.isChild) {
        var aliases = []
        for (var alias in this.context.aliases) {
          this.source[1] = this.source[1] + ', ' + alias + '=' + this.context.aliases[alias];
        }
      }

      if (this.source[1]) {
        this.source[1] = "var " + this.source[1].substring(2) + ";";
      }

      // Merge children
      if (!this.isChild) {
        this.source[1] += '\n' + this.context.programs.join('\n') + '\n';
      }

      if (!this.environment.isSimple) {
        this.source.push("return buffer;");
      }

      var params = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];

      for(var i=0, l=this.environment.depths.list.length; i<l; i++) {
        params.push("depth" + this.environment.depths.list[i]);
      }

      if (asObject) {
        params.push(this.source.join("\n  "));

        return Function.apply(this, params);
      } else {
        var functionSource = 'function ' + (this.name || '') + '(' + params.join(',') + ') {\n  ' + this.source.join("\n  ") + '}';
        Handlebars.log(Handlebars.logger.DEBUG, functionSource + "\n\n");
        return functionSource;
      }
    },

    appendContent: function(content) {
      this.source.push(this.appendToBuffer(this.quotedString(content)));
    },

    append: function() {
      var local = this.popStack();
      this.source.push("if(" + local + " || " + local + " === 0) { " + this.appendToBuffer(local) + " }");
      if (this.environment.isSimple) {
        this.source.push("else { " + this.appendToBuffer("''") + " }");
      }
    },

    appendEscaped: function() {
      var opcode = this.nextOpcode(1), extra = "";
      this.context.aliases.escapeExpression = 'this.escapeExpression';

      if(opcode[0] === 'appendContent') {
        extra = " + " + this.quotedString(opcode[1][0]);
        this.eat(opcode);
      }

      this.source.push(this.appendToBuffer("escapeExpression(" + this.popStack() + ")" + extra));
    },

    getContext: function(depth) {
      if(this.lastContext !== depth) {
        this.lastContext = depth;
      }
    },

    lookupWithHelpers: function(name, isScoped) {
      if(name) {
        var topStack = this.nextStack();

        this.usingKnownHelper = false;

        var toPush;
        if (!isScoped && this.options.knownHelpers[name]) {
          toPush = topStack + " = " + this.nameLookup('helpers', name, 'helper');
          this.usingKnownHelper = true;
        } else if (isScoped || this.options.knownHelpersOnly) {
          toPush = topStack + " = " + this.nameLookup('depth' + this.lastContext, name, 'context');
        } else {
          this.register('foundHelper', this.nameLookup('helpers', name, 'helper'));
          toPush = topStack + " = foundHelper || " + this.nameLookup('depth' + this.lastContext, name, 'context');
        }

        toPush += ';';
        this.source.push(toPush);
      } else {
        this.pushStack('depth' + this.lastContext);
      }
    },

    lookup: function(name) {
      var topStack = this.topStack();
      this.source.push(topStack + " = (" + topStack + " === null || " + topStack + " === undefined || " + topStack + " === false ? " +
 				topStack + " : " + this.nameLookup(topStack, name, 'context') + ");");
    },

    pushStringParam: function(string) {
      this.pushStack('depth' + this.lastContext);
      this.pushString(string);
    },

    pushString: function(string) {
      this.pushStack(this.quotedString(string));
    },

    push: function(name) {
      this.pushStack(name);
    },

    invokeMustache: function(paramSize, original, hasHash) {
      this.populateParams(paramSize, this.quotedString(original), "{}", null, hasHash, function(nextStack, helperMissingString, id) {
        if (!this.usingKnownHelper) {
          this.context.aliases.helperMissing = 'helpers.helperMissing';
          this.context.aliases.undef = 'void 0';
          this.source.push("else if(" + id + "=== undef) { " + nextStack + " = helperMissing.call(" + helperMissingString + "); }");
          if (nextStack !== id) {
            this.source.push("else { " + nextStack + " = " + id + "; }");
          }
        }
      });
    },

    invokeProgram: function(guid, paramSize, hasHash) {
      var inverse = this.programExpression(this.inverse);
      var mainProgram = this.programExpression(guid);

      this.populateParams(paramSize, null, mainProgram, inverse, hasHash, function(nextStack, helperMissingString, id) {
        if (!this.usingKnownHelper) {
          this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';
          this.source.push("else { " + nextStack + " = blockHelperMissing.call(" + helperMissingString + "); }");
        }
      });
    },

    populateParams: function(paramSize, helperId, program, inverse, hasHash, fn) {
      var needsRegister = hasHash || this.options.stringParams || inverse || this.options.data;
      var id = this.popStack(), nextStack;
      var params = [], param, stringParam, stringOptions;

      if (needsRegister) {
        this.register('tmp1', program);
        stringOptions = 'tmp1';
      } else {
        stringOptions = '{ hash: {} }';
      }

      if (needsRegister) {
        var hash = (hasHash ? this.popStack() : '{}');
        this.source.push('tmp1.hash = ' + hash + ';');
      }

      if(this.options.stringParams) {
        this.source.push('tmp1.contexts = [];');
      }

      for(var i=0; i<paramSize; i++) {
        param = this.popStack();
        params.push(param);

        if(this.options.stringParams) {
          this.source.push('tmp1.contexts.push(' + this.popStack() + ');');
        }
      }

      if(inverse) {
        this.source.push('tmp1.fn = tmp1;');
        this.source.push('tmp1.inverse = ' + inverse + ';');
      }

      if(this.options.data) {
        this.source.push('tmp1.data = data;');
      }

      params.push(stringOptions);

      this.populateCall(params, id, helperId || id, fn, program !== '{}');
    },

    populateCall: function(params, id, helperId, fn, program) {
      var paramString = ["depth0"].concat(params).join(", ");
      var helperMissingString = ["depth0"].concat(helperId).concat(params).join(", ");

      var nextStack = this.nextStack();

      if (this.usingKnownHelper) {
        this.source.push(nextStack + " = " + id + ".call(" + paramString + ");");
      } else {
        this.context.aliases.functionType = '"function"';
        var condition = program ? "foundHelper && " : ""
        this.source.push("if(" + condition + "typeof " + id + " === functionType) { " + nextStack + " = " + id + ".call(" + paramString + "); }");
      }
      fn.call(this, nextStack, helperMissingString, id);
      this.usingKnownHelper = false;
    },

    invokePartial: function(context) {
      params = [this.nameLookup('partials', context, 'partial'), "'" + context + "'", this.popStack(), "helpers", "partials"];

      if (this.options.data) {
        params.push("data");
      }

      this.pushStack("self.invokePartial(" + params.join(", ") + ");");
    },

    assignToHash: function(key) {
      var value = this.popStack();
      var hash = this.topStack();

      this.source.push(hash + "['" + key + "'] = " + value + ";");
    },

    // HELPERS

    compiler: JavaScriptCompiler,

    compileChildren: function(environment, options) {
      var children = environment.children, child, compiler;

      for(var i=0, l=children.length; i<l; i++) {
        child = children[i];
        compiler = new this.compiler();

        this.context.programs.push('');     // Placeholder to prevent name conflicts for nested children
        var index = this.context.programs.length;
        child.index = index;
        child.name = 'program' + index;
        this.context.programs[index] = compiler.compile(child, options, this.context);
      }
    },

    programExpression: function(guid) {
      if(guid == null) { return "self.noop"; }

      var child = this.environment.children[guid],
          depths = child.depths.list;
      var programParams = [child.index, child.name, "data"];

      for(var i=0, l = depths.length; i<l; i++) {
        depth = depths[i];

        if(depth === 1) { programParams.push("depth0"); }
        else { programParams.push("depth" + (depth - 1)); }
      }

      if(depths.length === 0) {
        return "self.program(" + programParams.join(", ") + ")";
      } else {
        programParams.shift();
        return "self.programWithDepth(" + programParams.join(", ") + ")";
      }
    },

    register: function(name, val) {
      this.useRegister(name);
      this.source.push(name + " = " + val + ";");
    },

    useRegister: function(name) {
      if(!this.context.registers[name]) {
        this.context.registers[name] = true;
        this.context.registers.list.push(name);
      }
    },

    pushStack: function(item) {
      this.source.push(this.nextStack() + " = " + item + ";");
      return "stack" + this.stackSlot;
    },

    nextStack: function() {
      this.stackSlot++;
      if(this.stackSlot > this.stackVars.length) { this.stackVars.push("stack" + this.stackSlot); }
      return "stack" + this.stackSlot;
    },

    popStack: function() {
      return "stack" + this.stackSlot--;
    },

    topStack: function() {
      return "stack" + this.stackSlot;
    },

    quotedString: function(str) {
      return '"' + str
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r') + '"';
    }
  };

  var reservedWords = (
    "break else new var" +
    " case finally return void" +
    " catch for switch while" +
    " continue function this with" +
    " default if throw" +
    " delete in try" +
    " do instanceof typeof" +
    " abstract enum int short" +
    " boolean export interface static" +
    " byte extends long super" +
    " char final native synchronized" +
    " class float package throws" +
    " const goto private transient" +
    " debugger implements protected volatile" +
    " double import public let yield"
  ).split(" ");

  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

  for(var i=0, l=reservedWords.length; i<l; i++) {
    compilerWords[reservedWords[i]] = true;
  }

	JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
		if(!JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(name)) {
			return true;
		}
		return false;
	}

})(Handlebars.Compiler, Handlebars.JavaScriptCompiler);

Handlebars.precompile = function(string, options) {
  options = options || {};

  var ast = Handlebars.parse(string);
  var environment = new Handlebars.Compiler().compile(ast, options);
  return new Handlebars.JavaScriptCompiler().compile(environment, options);
};

Handlebars.compile = function(string, options) {
  options = options || {};

  var compiled;
  function compile() {
    var ast = Handlebars.parse(string);
    var environment = new Handlebars.Compiler().compile(ast, options);
    var templateSpec = new Handlebars.JavaScriptCompiler().compile(environment, options, undefined, true);
    return Handlebars.template(templateSpec);
  }

  // Template is only compiled on first use and cached after that point.
  return function(context, options) {
    if (!compiled) {
      compiled = compile();
    }
    return compiled.call(this, context, options);
  };
};
;
// lib/handlebars/runtime.js
Handlebars.VM = {
  template: function(templateSpec) {
    // Just add water
    var container = {
      escapeExpression: Handlebars.Utils.escapeExpression,
      invokePartial: Handlebars.VM.invokePartial,
      programs: [],
      program: function(i, fn, data) {
        var programWrapper = this.programs[i];
        if(data) {
          return Handlebars.VM.program(fn, data);
        } else if(programWrapper) {
          return programWrapper;
        } else {
          programWrapper = this.programs[i] = Handlebars.VM.program(fn);
          return programWrapper;
        }
      },
      programWithDepth: Handlebars.VM.programWithDepth,
      noop: Handlebars.VM.noop
    };

    return function(context, options) {
      options = options || {};
      return templateSpec.call(container, Handlebars, context, options.helpers, options.partials, options.data);
    };
  },

  programWithDepth: function(fn, data, $depth) {
    var args = Array.prototype.slice.call(arguments, 2);

    return function(context, options) {
      options = options || {};

      return fn.apply(this, [context, options.data || data].concat(args));
    };
  },
  program: function(fn, data) {
    return function(context, options) {
      options = options || {};

      return fn(context, options.data || data);
    };
  },
  noop: function() { return ""; },
  invokePartial: function(partial, name, context, helpers, partials, data) {
    options = { helpers: helpers, partials: partials, data: data };

    if(partial === undefined) {
      throw new Handlebars.Exception("The partial " + name + " could not be found");
    } else if(partial instanceof Function) {
      return partial(context, options);
    } else if (!Handlebars.compile) {
      throw new Handlebars.Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
    } else {
      partials[name] = Handlebars.compile(partial);
      return partials[name](context, options);
    }
  }
};

Handlebars.template = Handlebars.VM.template;
;
/*
	Masked Input plugin for jQuery
	Copyright (c) 2007-2011 Josh Bush (digitalbush.com)
	Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license) 
	Version: 1.3
*/
(function($) {
	var pasteEventName = ($.browser.msie ? 'paste' : 'input') + ".mask";
	var iPhone = (window.orientation != undefined);

	$.mask = {
		//Predefined character definitions
		definitions: {
			'9': "[0-9]",
			'a': "[A-Za-z]",
			'*': "[A-Za-z0-9]"
		},
		dataName:"rawMaskFn"
	};

	$.fn.extend({
		//Helper Function for Caret positioning
		caret: function(begin, end) {
			if (this.length == 0) return;
			if (typeof begin == 'number') {
				end = (typeof end == 'number') ? end : begin;
				return this.each(function() {
					if (this.setSelectionRange) {
						this.setSelectionRange(begin, end);
					} else if (this.createTextRange) {
						var range = this.createTextRange();
						range.collapse(true);
						range.moveEnd('character', end);
						range.moveStart('character', begin);
						range.select();
					}
				});
			} else {
				if (this[0].setSelectionRange) {
					begin = this[0].selectionStart;
					end = this[0].selectionEnd;
				} else if (document.selection && document.selection.createRange) {
					var range = document.selection.createRange();
					begin = 0 - range.duplicate().moveStart('character', -100000);
					end = begin + range.text.length;
				}
				return { begin: begin, end: end };
			}
		},
		unmask: function() { return this.trigger("unmask"); },
		mask: function(mask, settings) {
			if (!mask && this.length > 0) {
				var input = $(this[0]);
				return input.data($.mask.dataName)();
			}
			settings = $.extend({
				placeholder: "_",
				completed: null
			}, settings);

			var defs = $.mask.definitions;
			var tests = [];
			var partialPosition = mask.length;
			var firstNonMaskPos = null;
			var len = mask.length;

			$.each(mask.split(""), function(i, c) {
				if (c == '?') {
					len--;
					partialPosition = i;
				} else if (defs[c]) {
					tests.push(new RegExp(defs[c]));
					if(firstNonMaskPos==null)
						firstNonMaskPos =  tests.length - 1;
				} else {
					tests.push(null);
				}
			});

			return this.trigger("unmask").each(function() {
				var input = $(this);
				var buffer = $.map(mask.split(""), function(c, i) { if (c != '?') return defs[c] ? settings.placeholder : c });
				var focusText = input.val();

				function seekNext(pos) {
					while (++pos <= len && !tests[pos]);
					return pos;
				};
				function seekPrev(pos) {
					while (--pos >= 0 && !tests[pos]);
					return pos;
				};

				function shiftL(begin,end) {
					if(begin<0)
					   return;
					for (var i = begin,j = seekNext(end); i < len; i++) {
						if (tests[i]) {
							if (j < len && tests[i].test(buffer[j])) {
								buffer[i] = buffer[j];
								buffer[j] = settings.placeholder;
							} else
								break;
							j = seekNext(j);
						}
					}
					writeBuffer();
					input.caret(Math.max(firstNonMaskPos, begin));
				};

				function shiftR(pos) {
					for (var i = pos, c = settings.placeholder; i < len; i++) {
						if (tests[i]) {
							var j = seekNext(i);
							var t = buffer[i];
							buffer[i] = c;
							if (j < len && tests[j].test(t))
								c = t;
							else
								break;
						}
					}
				};

				function keydownEvent(e) {
					var k=e.which;

					//backspace, delete, and escape get special treatment
					if(k == 8 || k == 46 || (iPhone && k == 127)){
						var pos = input.caret(),
							begin = pos.begin,
							end = pos.end;
						
						if(end-begin==0){
							begin=k!=46?seekPrev(begin):(end=seekNext(begin-1));
							end=k==46?seekNext(end):end;
						}
						clearBuffer(begin, end);
						shiftL(begin,end-1);

						return false;
					} else if (k == 27) {//escape
						input.val(focusText);
						input.caret(0, checkVal());
						return false;
					}
				};

				function keypressEvent(e) {
					var k = e.which,
						pos = input.caret();
					if (e.ctrlKey || e.altKey || e.metaKey || k<32) {//Ignore
						return true;
					} else if (k) {
						if(pos.end-pos.begin!=0){
							clearBuffer(pos.begin, pos.end);
							shiftL(pos.begin, pos.end-1);
						}

						var p = seekNext(pos.begin - 1);
						if (p < len) {
							var c = String.fromCharCode(k);
							if (tests[p].test(c)) {
								shiftR(p);
								buffer[p] = c;
								writeBuffer();
								var next = seekNext(p);
								input.caret(next);
								if (settings.completed && next >= len)
									settings.completed.call(input);
							}
						}
						return false;
					}
				};

				function clearBuffer(start, end) {
					for (var i = start; i < end && i < len; i++) {
						if (tests[i])
							buffer[i] = settings.placeholder;
					}
				};

				function writeBuffer() { return input.val(buffer.join('')).val(); };

				function checkVal(allow) {
					//try to place characters where they belong
					var test = input.val();
					var lastMatch = -1;
					for (var i = 0, pos = 0; i < len; i++) {
						if (tests[i]) {
							buffer[i] = settings.placeholder;
							while (pos++ < test.length) {
								var c = test.charAt(pos - 1);
								if (tests[i].test(c)) {
									buffer[i] = c;
									lastMatch = i;
									break;
								}
							}
							if (pos > test.length)
								break;
						} else if (buffer[i] == test.charAt(pos) && i!=partialPosition) {
							pos++;
							lastMatch = i;
						}
					}
					if (!allow && lastMatch + 1 < partialPosition) {
						input.val("");
						clearBuffer(0, len);
					} else if (allow || lastMatch + 1 >= partialPosition) {
						writeBuffer();
						if (!allow) input.val(input.val().substring(0, lastMatch + 1));
					}
					return (partialPosition ? i : firstNonMaskPos);
				};

				input.data($.mask.dataName,function(){
					return $.map(buffer, function(c, i) {
						return tests[i]&&c!=settings.placeholder ? c : null;
					}).join('');
				})

				if (!input.attr("readonly"))
					input
					.one("unmask", function() {
						input
							.unbind(".mask")
							.removeData($.mask.dataName);
					})
					.bind("focus.mask", function() {
						focusText = input.val();
						var pos = checkVal();
						writeBuffer();
						var moveCaret=function(){
							if (pos == mask.length)
								input.caret(0, pos);
							else
								input.caret(pos);
						};
						($.browser.msie ? moveCaret:function(){setTimeout(moveCaret,0)})();
					})
					.bind("blur.mask", function() {
						checkVal();
						if (input.val() != focusText)
							input.change();
					})
					.bind("keydown.mask", keydownEvent)
					.bind("keypress.mask", keypressEvent)
					.bind(pasteEventName, function() {
						setTimeout(function() { input.caret(checkVal(true)); }, 0);
					});

				checkVal(); //Perform initial check for existing values
			});
		}
	});
})(jQuery);
/* JQuery Searchable DropDown Plugin | Copyright (c) 2012 xhaggi */
(function($){var B=register("searchable");B.defaults={maxListSize:100,maxMultiMatch:50,exactMatch:false,wildcards:true,ignoreCase:true,warnMultiMatch:"top {0} matches ...",warnNoMatch:"no matches ...",latency:200,zIndex:"auto"};B.execute=function(g,h){var j=null;var k=null;var l=null;if($.browser.msie&&parseInt(jQuery.browser.version)<7)return this;if(this.nodeName!="SELECT"||this.size>1)return this;var m=$(this);var n={index:-1,options:null};var o="lang";var p=false;$.browser.chrome=/chrome/.test(navigator.userAgent.toLowerCase());if($.browser.chrome)$.browser.safari=false;if($.meta){g=$.extend({},options,m.data())}var q=$("<div/>");var r=$("<div/>");var t=$("<input/>");var u=$("<select/>");var x=$("<option>"+g.warnMultiMatch.replace(/\{0\}/g,g.maxMultiMatch)+"</option>").attr("disabled","true");var y=$("<option>"+g.warnNoMatch+"</option>").attr("disabled","true");var z={option:function(a){return $(u.get(0).options[a])},selected:function(){return u.find(":selected")},selectedIndex:function(a){if(a>-1)u.get(0).selectedIndex=a;return u.get(0).selectedIndex},size:function(a){u.attr("size",Math.max(2,Math.min(a,20)))},reset:function(){if((m.get(0).selectedIndex-1)==m.data("index"))return;var a=m.get(0).selectedIndex;var b=m.get(0).length;var c=Math.floor(g.maxMultiMatch/2);var d=Math.max(1,(a-c));var e=Math.min(b,Math.max(g.maxMultiMatch,(a+c)));var f=a-d;u.empty();this.size(e-d);for(var i=d;i<e;i++)u.append($(m.get(0).options[i]).clone().attr(o,i-1));if(e>g.maxMultiMatch)u.append(x);u.get(0).selectedIndex=f}};draw();var A=false;r.mouseover(function(){A=true});r.mouseout(function(){A=false});u.mouseover(function(){A=true});u.mouseout(function(){A=false});t.click(function(e){if(!p)enable(e,true);else disable(e,true)});t.blur(function(e){if(!A&&p)disable(e,true)});m.keydown(function(e){if(e.keyCode!=9&&!e.shiftKey&&!e.ctrlKey&&!e.altKey)t.click()});m.click(function(e){u.focus()});u.click(function(e){if(z.selectedIndex()<0)return;disable(e)});u.focus(function(e){t.focus()});u.blur(function(e){if(!A)disable(e,true)});u.mousemove(function(e){if($.browser.opera&&parseFloat(jQuery.browser.version)>=9.8)return true;var a=Math.floor(parseFloat(/([0-9\.]+)px/.exec(z.option(0).css("font-size"))));var b=4;if($.browser.opera)b=2.5;if($.browser.safari||$.browser.chrome)b=3;a+=Math.round(a/b);z.selectedIndex(Math.floor((e.pageY-u.offset().top+this.scrollTop)/a))});r.click(function(e){t.click()});t.keyup(function(e){if(jQuery.inArray(e.keyCode,new Array(9,13,16,33,34,35,36,38,40))>-1)return true;l=$.trim(t.val().toLowerCase());clearSearchTimer();j=setTimeout(searching,g.latency)});t.keydown(function(e){if(e.keyCode==9){disable(e)}if(e.shiftKey||e.ctrlKey||e.altKey)return;switch(e.keyCode){case 13:disable(e);m.focus();break;case 27:disable(e,true);m.focus();break;case 33:if(z.selectedIndex()-u.attr("size")>0){z.selectedIndex(z.selectedIndex()-u.attr("size"))}else{z.selectedIndex(0)}synchronize();break;case 34:if(z.selectedIndex()+u.attr("size")<u.get(0).options.length-1){z.selectedIndex(z.selectedIndex()+u.attr("size"))}else{z.selectedIndex(u.get(0).options.length-1)}synchronize();break;case 38:if(z.selectedIndex()>0){z.selectedIndex(z.selectedIndex()-1);synchronize()}break;case 40:if(z.selectedIndex()<u.get(0).options.length-1){z.selectedIndex(z.selectedIndex()+1);synchronize()}break;default:return true}return false});function draw(){m.css("text-decoration","none");m.width(m.outerWidth());m.height(m.outerHeight());q.css("position","relative");q.css("width",m.outerWidth());if($.browser.msie)q.css("z-index",h);r.css({"position":"absolute","top":0,"left":0,"width":m.outerWidth(),"height":m.outerHeight(),"background-color":"#FFFFFF","opacity":"0.01"});t.attr("type","text");t.hide();t.height(m.outerHeight());t.css({"position":"absolute","top":0,"left":0,"margin":"0px","padding":"0px","outline-style":"none","border-style":"solid","border-bottom-style":"none","border-color":"transparent","background-color":"transparent"});var a=new Array();a.push("border-left-width");a.push("border-top-width");a.push("font-size");a.push("font-stretch");a.push("font-variant");a.push("font-weight");a.push("color");a.push("text-align");a.push("text-indent");a.push("text-shadow");a.push("text-transform");a.push("padding-left");a.push("padding-top");for(var i=0;i<a.length;i++)t.css(a[i],m.css(a[i]));if($.browser.msie&&parseInt(jQuery.browser.version)<8){t.css("padding","0px");t.css("padding-left","3px");t.css("border-left-width","2px");t.css("border-top-width","3px")}else if($.browser.chrome){t.height(m.innerHeight());t.css("text-transform","none");t.css("padding-left",parseFloatPx(t.css("padding-left"))+3);t.css("padding-top",2)}else if($.browser.safari){t.height(m.innerHeight());t.css("padding-top",2);t.css("padding-left",3);t.css("text-transform","none")}else if($.browser.opera){t.height(m.innerHeight());var b=parseFloatPx(m.css("padding-left"));t.css("padding-left",b==1?b+1:b);t.css("padding-top",0)}else if($.browser.mozilla){t.css("padding-top","0px");t.css("border-top","0px");t.css("padding-left",parseFloatPx(m.css("padding-left"))+3)}else{t.css("padding-left",parseFloatPx(m.css("padding-left"))+3);t.css("padding-top",parseFloatPx(m.css("padding-top"))+1)}var c=parseFloatPx(m.css("padding-left"))+parseFloatPx(m.css("padding-right"))+parseFloatPx(m.css("border-left-width"))+parseFloatPx(m.css("border-left-width"))+23;t.width(m.outerWidth()-c);var w=m.css("width");var d=m.outerWidth();m.css("width","auto");d=d>m.outerWidth()?d:m.outerWidth();m.css("width",w);u.hide();z.size(m.get(0).length);u.css({"position":"absolute","top":m.outerHeight(),"left":0,"width":d,"border":"1px solid #333","font-weight":"normal","padding":0,"background-color":m.css("background-color"),"text-transform":m.css("text-transform")});var e=/^\d+$/.test(m.css("z-index"))?m.css("z-index"):1;if(g.zIndex&&/^\d+$/.test(g.zIndex))e=g.zIndex;r.css("z-index",(e).toString(10));t.css("z-index",(e+1).toString(10));u.css("z-index",(e+2).toString(10));m.wrap(q);m.after(r);m.after(t);m.after(u)};function enable(e,s,v){if(m.attr("disabled"))return false;m.prepend("<option />");if(typeof v=="undefined")p=!p;z.reset();synchronize();store();if(s)u.show();t.show();t.focus();t.select();m.get(0).selectedIndex=0;if(typeof e!="undefined")e.stopPropagation()};function disable(e,a){p=false;m.find(":first").remove();clearSearchTimer();t.hide();u.hide();if(typeof a!="undefined")restore();populate();if(typeof e!="undefined")e.stopPropagation()};function clearSearchTimer(){if(j!=null)clearTimeout(j)};function populate(){if(z.selectedIndex()<0||z.selected().get(0).disabled)return;m.get(0).selectedIndex=parseInt(u.find(":selected").attr(o));m.change();m.data("index",new Number(m.get(0).selectedIndex))};function synchronize(){if(z.selectedIndex()>-1&&!z.selected().get(0).disabled)t.val(u.find(":selected").text());else t.val(m.find(":selected").text())};function store(){n.index=z.selectedIndex();n.options=new Array();for(var i=0;i<u.get(0).options.length;i++)n.options.push(u.get(0).options[i])};function restore(){u.empty();for(var i=0;i<n.options.length;i++)u.append(n.options[i]);z.selectedIndex(n.index);z.size(n.options.length)};function escapeRegExp(a){var b=["/",".","*","+","?","|","(",")","[","]","{","}","\\","^","$"];var c=new RegExp("(\\"+b.join("|\\")+")","g");return a.replace(c,"\\$1")};function searching(){if(k==l){j=null;return}var a=0;k=l;u.hide();u.empty();var b=escapeRegExp(l);if(g.exactMatch)b="^"+b;if(g.wildcards){b=b.replace(/\\\*/g,".*");b=b.replace(/\\\?/g,".")}var c=null;if(g.ignoreCase)c="i";l=new RegExp(b,c);for(var i=1;i<m.get(0).length&&a<g.maxMultiMatch;i++){if(l.length==0||l.test(m.get(0).options[i].text)){var d=$(m.get(0).options[i]).clone().attr(o,i-1);if(m.data("index")==i)d.text(m.data("text"));u.append(d);a++}}if(a>=1){z.selectedIndex(0)}else if(a==0){u.append(y)}if(a>=g.maxMultiMatch){u.append(x)}z.size(a);u.show();j=null};function parseFloatPx(a){try{a=parseFloat(a.replace(/[\s]*px/,""));if(!isNaN(a))return a}catch(e){}return 0};return};function register(d){var e=$[d]={};$.fn[d]=function(b){b=$.extend(e.defaults,b);var c=this.size();return this.each(function(a){e.execute.call(this,b,c-a)})};return e}})(jQuery);
/*
 * 
 * TableSorter 2.0 - Client-side table sorting with ease!
 * Version 2.0.5b
 * @requires jQuery v1.2.3
 * 
 * Copyright (c) 2007 Christian Bach
 * Examples and docs at: http://tablesorter.com
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * 
 */
/**
 * 
 * @description Create a sortable table with multi-column sorting capabilitys
 * 
 * @example $('table').tablesorter();
 * @desc Create a simple tablesorter interface.
 * 
 * @example $('table').tablesorter({ sortList:[[0,0],[1,0]] });
 * @desc Create a tablesorter interface and sort on the first and secound column column headers.
 * 
 * @example $('table').tablesorter({ headers: { 0: { sorter: false}, 1: {sorter: false} } });
 *          
 * @desc Create a tablesorter interface and disableing the first and second  column headers.
 *      
 * 
 * @example $('table').tablesorter({ headers: { 0: {sorter:"integer"}, 1: {sorter:"currency"} } });
 * 
 * @desc Create a tablesorter interface and set a column parser for the first
 *       and second column.
 * 
 * 
 * @param Object
 *            settings An object literal containing key/value pairs to provide
 *            optional settings.
 * 
 * 
 * @option String cssHeader (optional) A string of the class name to be appended
 *         to sortable tr elements in the thead of the table. Default value:
 *         "header"
 * 
 * @option String cssAsc (optional) A string of the class name to be appended to
 *         sortable tr elements in the thead on a ascending sort. Default value:
 *         "headerSortUp"
 * 
 * @option String cssDesc (optional) A string of the class name to be appended
 *         to sortable tr elements in the thead on a descending sort. Default
 *         value: "headerSortDown"
 * 
 * @option String sortInitialOrder (optional) A string of the inital sorting
 *         order can be asc or desc. Default value: "asc"
 * 
 * @option String sortMultisortKey (optional) A string of the multi-column sort
 *         key. Default value: "shiftKey"
 * 
 * @option String textExtraction (optional) A string of the text-extraction
 *         method to use. For complex html structures inside td cell set this
 *         option to "complex", on large tables the complex option can be slow.
 *         Default value: "simple"
 * 
 * @option Object headers (optional) An array containing the forces sorting
 *         rules. This option let's you specify a default sorting rule. Default
 *         value: null
 * 
 * @option Array sortList (optional) An array containing the forces sorting
 *         rules. This option let's you specify a default sorting rule. Default
 *         value: null
 * 
 * @option Array sortForce (optional) An array containing forced sorting rules.
 *         This option let's you specify a default sorting rule, which is
 *         prepended to user-selected rules. Default value: null
 * 
 * @option Boolean sortLocaleCompare (optional) Boolean flag indicating whatever
 *         to use String.localeCampare method or not. Default set to true.
 * 
 * 
 * @option Array sortAppend (optional) An array containing forced sorting rules.
 *         This option let's you specify a default sorting rule, which is
 *         appended to user-selected rules. Default value: null
 * 
 * @option Boolean widthFixed (optional) Boolean flag indicating if tablesorter
 *         should apply fixed widths to the table columns. This is usefull when
 *         using the pager companion plugin. This options requires the dimension
 *         jquery plugin. Default value: false
 * 
 * @option Boolean cancelSelection (optional) Boolean flag indicating if
 *         tablesorter should cancel selection of the table headers text.
 *         Default value: true
 * 
 * @option Boolean debug (optional) Boolean flag indicating if tablesorter
 *         should display debuging information usefull for development.
 * 
 * @type jQuery
 * 
 * @name tablesorter
 * 
 * @cat Plugins/Tablesorter
 * 
 * @author Christian Bach/christian.bach@polyester.se
 */

(function ($) {
    $.extend({
        tablesorter: new
        function () {

            var parsers = [],
                widgets = [];

            this.defaults = {
                cssHeader: "header",
                cssAsc: "headerSortUp",
                cssDesc: "headerSortDown",
                cssChildRow: "expand-child",
                sortInitialOrder: "asc",
                sortMultiSortKey: "shiftKey",
                sortForce: null,
                sortAppend: null,
                sortLocaleCompare: true,
                textExtraction: "simple",
                parsers: {}, widgets: [],
                widgetZebra: {
                    css: ["even", "odd"]
                }, headers: {}, widthFixed: false,
                cancelSelection: true,
                sortList: [],
                headerList: [],
                dateFormat: "us",
                decimal: '/\.|\,/g',
                onRenderHeader: null,
                selectorHeaders: 'thead th',
                debug: false
            };

            /* debuging utils */

            function benchmark(s, d) {
                log(s + "," + (new Date().getTime() - d.getTime()) + "ms");
            }

            this.benchmark = benchmark;

            function log(s) {
                if (typeof console != "undefined" && typeof console.debug != "undefined") {
                    console.log(s);
                } else {
                    alert(s);
                }
            }

            /* parsers utils */

            function buildParserCache(table, $headers) {

                if (table.config.debug) {
                    var parsersDebug = "";
                }

                if (table.tBodies.length == 0) return; // In the case of empty tables
                var rows = table.tBodies[0].rows;

                if (rows[0]) {

                    var list = [],
                        cells = rows[0].cells,
                        l = cells.length;

                    for (var i = 0; i < l; i++) {

                        var p = false;

                        if ($.metadata && ($($headers[i]).metadata() && $($headers[i]).metadata().sorter)) {

                            p = getParserById($($headers[i]).metadata().sorter);

                        } else if ((table.config.headers[i] && table.config.headers[i].sorter)) {

                            p = getParserById(table.config.headers[i].sorter);
                        }
                        if (!p) {

                            p = detectParserForColumn(table, rows, -1, i);
                        }

                        if (table.config.debug) {
                            parsersDebug += "column:" + i + " parser:" + p.id + "\n";
                        }

                        list.push(p);
                    }
                }

                if (table.config.debug) {
                    log(parsersDebug);
                }

                return list;
            };

            function detectParserForColumn(table, rows, rowIndex, cellIndex) {
                var l = parsers.length,
                    node = false,
                    nodeValue = false,
                    keepLooking = true;
                while (nodeValue == '' && keepLooking) {
                    rowIndex++;
                    if (rows[rowIndex]) {
                        node = getNodeFromRowAndCellIndex(rows, rowIndex, cellIndex);
                        nodeValue = trimAndGetNodeText(table.config, node);
                        if (table.config.debug) {
                            log('Checking if value was empty on row:' + rowIndex);
                        }
                    } else {
                        keepLooking = false;
                    }
                }
                for (var i = 1; i < l; i++) {
                    if (parsers[i].is(nodeValue, table, node)) {
                        return parsers[i];
                    }
                }
                // 0 is always the generic parser (text)
                return parsers[0];
            }

            function getNodeFromRowAndCellIndex(rows, rowIndex, cellIndex) {
                return rows[rowIndex].cells[cellIndex];
            }

            function trimAndGetNodeText(config, node) {
                return $.trim(getElementText(config, node));
            }

            function getParserById(name) {
                var l = parsers.length;
                for (var i = 0; i < l; i++) {
                    if (parsers[i].id.toLowerCase() == name.toLowerCase()) {
                        return parsers[i];
                    }
                }
                return false;
            }

            /* utils */

            function buildCache(table) {

                if (table.config.debug) {
                    var cacheTime = new Date();
                }

                var totalRows = (table.tBodies[0] && table.tBodies[0].rows.length) || 0,
                    totalCells = (table.tBodies[0].rows[0] && table.tBodies[0].rows[0].cells.length) || 0,
                    parsers = table.config.parsers,
                    cache = {
                        row: [],
                        normalized: []
                    };

                for (var i = 0; i < totalRows; ++i) {

                    /** Add the table data to main data array */
                    var c = $(table.tBodies[0].rows[i]),
                        cols = [];

                    // if this is a child row, add it to the last row's children and
                    // continue to the next row
                    if (c.hasClass(table.config.cssChildRow)) {
                        cache.row[cache.row.length - 1] = cache.row[cache.row.length - 1].add(c);
                        // go to the next for loop
                        continue;
                    }

                    cache.row.push(c);

                    for (var j = 0; j < totalCells; ++j) {
                        cols.push(parsers[j].format(getElementText(table.config, c[0].cells[j]), table, c[0].cells[j]));
                    }

                    cols.push(cache.normalized.length); // add position for rowCache
                    cache.normalized.push(cols);
                    cols = null;
                };

                if (table.config.debug) {
                    benchmark("Building cache for " + totalRows + " rows:", cacheTime);
                }

                return cache;
            };

            function getElementText(config, node) {

                var text = "";

                if (!node) return "";

                if (!config.supportsTextContent) config.supportsTextContent = node.textContent || false;

                if (config.textExtraction == "simple") {
                    if (config.supportsTextContent) {
                        text = node.textContent;
                    } else {
                        if (node.childNodes[0] && node.childNodes[0].hasChildNodes()) {
                            text = node.childNodes[0].innerHTML;
                        } else {
                            text = node.innerHTML;
                        }
                    }
                } else {
                    if (typeof(config.textExtraction) == "function") {
                        text = config.textExtraction(node);
                    } else {
                        text = $(node).text();
                    }
                }
                return text;
            }

            function appendToTable(table, cache) {

                if (table.config.debug) {
                    var appendTime = new Date()
                }

                var c = cache,
                    r = c.row,
                    n = c.normalized,
                    totalRows = n.length,
                    checkCell = (n[0].length - 1),
                    tableBody = $(table.tBodies[0]),
                    rows = [];


                for (var i = 0; i < totalRows; i++) {
                    var pos = n[i][checkCell];

                    rows.push(r[pos]);

                    if (!table.config.appender) {

                        //var o = ;
                        var l = r[pos].length;
                        for (var j = 0; j < l; j++) {
                            tableBody[0].appendChild(r[pos][j]);
                        }

                        // 
                    }
                }



                if (table.config.appender) {

                    table.config.appender(table, rows);
                }

                rows = null;

                if (table.config.debug) {
                    benchmark("Rebuilt table:", appendTime);
                }

                // apply table widgets
                applyWidget(table);

                // trigger sortend
                setTimeout(function () {
                    $(table).trigger("sortEnd");
                }, 0);

            };

            function buildHeaders(table) {

                if (table.config.debug) {
                    var time = new Date();
                }

                var meta = ($.metadata) ? true : false;
                
                var header_index = computeTableHeaderCellIndexes(table);

                $tableHeaders = $(table.config.selectorHeaders, table).each(function (index) {

                    this.column = header_index[this.parentNode.rowIndex + "-" + this.cellIndex];
                    // this.column = index;
                    this.order = formatSortingOrder(table.config.sortInitialOrder);
                    
					
					this.count = this.order;

                    if (checkHeaderMetadata(this) || checkHeaderOptions(table, index)) this.sortDisabled = true;
					if (checkHeaderOptionsSortingLocked(table, index)) this.order = this.lockedOrder = checkHeaderOptionsSortingLocked(table, index);

                    if (!this.sortDisabled) {
                        var $th = $(this).addClass(table.config.cssHeader);
                        if (table.config.onRenderHeader) table.config.onRenderHeader.apply($th);
                    }

                    // add cell to headerList
                    table.config.headerList[index] = this;
                });

                if (table.config.debug) {
                    benchmark("Built headers:", time);
                    log($tableHeaders);
                }

                return $tableHeaders;

            };

            // from:
            // http://www.javascripttoolbox.com/lib/table/examples.php
            // http://www.javascripttoolbox.com/temp/table_cellindex.html


            function computeTableHeaderCellIndexes(t) {
                var matrix = [];
                var lookup = {};
                var thead = t.getElementsByTagName('THEAD')[0];
                var trs = thead.getElementsByTagName('TR');

                for (var i = 0; i < trs.length; i++) {
                    var cells = trs[i].cells;
                    for (var j = 0; j < cells.length; j++) {
                        var c = cells[j];

                        var rowIndex = c.parentNode.rowIndex;
                        var cellId = rowIndex + "-" + c.cellIndex;
                        var rowSpan = c.rowSpan || 1;
                        var colSpan = c.colSpan || 1
                        var firstAvailCol;
                        if (typeof(matrix[rowIndex]) == "undefined") {
                            matrix[rowIndex] = [];
                        }
                        // Find first available column in the first row
                        for (var k = 0; k < matrix[rowIndex].length + 1; k++) {
                            if (typeof(matrix[rowIndex][k]) == "undefined") {
                                firstAvailCol = k;
                                break;
                            }
                        }
                        lookup[cellId] = firstAvailCol;
                        for (var k = rowIndex; k < rowIndex + rowSpan; k++) {
                            if (typeof(matrix[k]) == "undefined") {
                                matrix[k] = [];
                            }
                            var matrixrow = matrix[k];
                            for (var l = firstAvailCol; l < firstAvailCol + colSpan; l++) {
                                matrixrow[l] = "x";
                            }
                        }
                    }
                }
                return lookup;
            }

            function checkCellColSpan(table, rows, row) {
                var arr = [],
                    r = table.tHead.rows,
                    c = r[row].cells;

                for (var i = 0; i < c.length; i++) {
                    var cell = c[i];

                    if (cell.colSpan > 1) {
                        arr = arr.concat(checkCellColSpan(table, headerArr, row++));
                    } else {
                        if (table.tHead.length == 1 || (cell.rowSpan > 1 || !r[row + 1])) {
                            arr.push(cell);
                        }
                        // headerArr[row] = (i+row);
                    }
                }
                return arr;
            };

            function checkHeaderMetadata(cell) {
                if (($.metadata) && ($(cell).metadata().sorter === false)) {
                    return true;
                };
                return false;
            }

            function checkHeaderOptions(table, i) {
                if ((table.config.headers[i]) && (table.config.headers[i].sorter === false)) {
                    return true;
                };
                return false;
            }
			
			 function checkHeaderOptionsSortingLocked(table, i) {
                if ((table.config.headers[i]) && (table.config.headers[i].lockedOrder)) return table.config.headers[i].lockedOrder;
                return false;
            }
			
            function applyWidget(table) {
                var c = table.config.widgets;
                var l = c.length;
                for (var i = 0; i < l; i++) {

                    getWidgetById(c[i]).format(table);
                }

            }

            function getWidgetById(name) {
                var l = widgets.length;
                for (var i = 0; i < l; i++) {
                    if (widgets[i].id.toLowerCase() == name.toLowerCase()) {
                        return widgets[i];
                    }
                }
            };

            function formatSortingOrder(v) {
                if (typeof(v) != "Number") {
                    return (v.toLowerCase() == "desc") ? 1 : 0;
                } else {
                    return (v == 1) ? 1 : 0;
                }
            }

            function isValueInArray(v, a) {
                var l = a.length;
                for (var i = 0; i < l; i++) {
                    if (a[i][0] == v) {
                        return true;
                    }
                }
                return false;
            }

            function setHeadersCss(table, $headers, list, css) {
                // remove all header information
                $headers.removeClass(css[0]).removeClass(css[1]);

                var h = [];
                $headers.each(function (offset) {
                    if (!this.sortDisabled) {
                        h[this.column] = $(this);
                    }
                });

                var l = list.length;
                for (var i = 0; i < l; i++) {
                    h[list[i][0]].addClass(css[list[i][1]]);
                }
            }

            function fixColumnWidth(table, $headers) {
                var c = table.config;
                if (c.widthFixed) {
                    var colgroup = $('<colgroup>');
                    $("tr:first td", table.tBodies[0]).each(function () {
                        colgroup.append($('<col>').css('width', $(this).width()));
                    });
                    $(table).prepend(colgroup);
                };
            }

            function updateHeaderSortCount(table, sortList) {
                var c = table.config,
                    l = sortList.length;
                for (var i = 0; i < l; i++) {
                    var s = sortList[i],
                        o = c.headerList[s[0]];
                    o.count = s[1];
                    o.count++;
                }
            }

            /* sorting methods */

            function multisort(table, sortList, cache) {

                if (table.config.debug) {
                    var sortTime = new Date();
                }

                var dynamicExp = "var sortWrapper = function(a,b) {",
                    l = sortList.length;

                // TODO: inline functions.
                for (var i = 0; i < l; i++) {

                    var c = sortList[i][0];
                    var order = sortList[i][1];
                    // var s = (getCachedSortType(table.config.parsers,c) == "text") ?
                    // ((order == 0) ? "sortText" : "sortTextDesc") : ((order == 0) ?
                    // "sortNumeric" : "sortNumericDesc");
                    // var s = (table.config.parsers[c].type == "text") ? ((order == 0)
                    // ? makeSortText(c) : makeSortTextDesc(c)) : ((order == 0) ?
                    // makeSortNumeric(c) : makeSortNumericDesc(c));
                    var s = (table.config.parsers[c].type == "text") ? ((order == 0) ? makeSortFunction("text", "asc", c) : makeSortFunction("text", "desc", c)) : ((order == 0) ? makeSortFunction("numeric", "asc", c) : makeSortFunction("numeric", "desc", c));
                    var e = "e" + i;

                    dynamicExp += "var " + e + " = " + s; // + "(a[" + c + "],b[" + c
                    // + "]); ";
                    dynamicExp += "if(" + e + ") { return " + e + "; } ";
                    dynamicExp += "else { ";

                }

                // if value is the same keep orignal order
                var orgOrderCol = cache.normalized[0].length - 1;
                dynamicExp += "return a[" + orgOrderCol + "]-b[" + orgOrderCol + "];";

                for (var i = 0; i < l; i++) {
                    dynamicExp += "}; ";
                }

                dynamicExp += "return 0; ";
                dynamicExp += "}; ";

                if (table.config.debug) {
                    benchmark("Evaling expression:" + dynamicExp, new Date());
                }

                eval(dynamicExp);

                cache.normalized.sort(sortWrapper);

                if (table.config.debug) {
                    benchmark("Sorting on " + sortList.toString() + " and dir " + order + " time:", sortTime);
                }

                return cache;
            };

            function makeSortFunction(type, direction, index) {
                var a = "a[" + index + "]",
                    b = "b[" + index + "]";
                if (type == 'text' && direction == 'asc') {
                    return "(" + a + " == " + b + " ? 0 : (" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : (" + a + " < " + b + ") ? -1 : 1 )));";
                } else if (type == 'text' && direction == 'desc') {
                    return "(" + a + " == " + b + " ? 0 : (" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : (" + b + " < " + a + ") ? -1 : 1 )));";
                } else if (type == 'numeric' && direction == 'asc') {
                    return "(" + a + " === null && " + b + " === null) ? 0 :(" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : " + a + " - " + b + "));";
                } else if (type == 'numeric' && direction == 'desc') {
                    return "(" + a + " === null && " + b + " === null) ? 0 :(" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : " + b + " - " + a + "));";
                }
            };

            function makeSortText(i) {
                return "((a[" + i + "] < b[" + i + "]) ? -1 : ((a[" + i + "] > b[" + i + "]) ? 1 : 0));";
            };

            function makeSortTextDesc(i) {
                return "((b[" + i + "] < a[" + i + "]) ? -1 : ((b[" + i + "] > a[" + i + "]) ? 1 : 0));";
            };

            function makeSortNumeric(i) {
                return "a[" + i + "]-b[" + i + "];";
            };

            function makeSortNumericDesc(i) {
                return "b[" + i + "]-a[" + i + "];";
            };

            function sortText(a, b) {
                if (table.config.sortLocaleCompare) return a.localeCompare(b);
                return ((a < b) ? -1 : ((a > b) ? 1 : 0));
            };

            function sortTextDesc(a, b) {
                if (table.config.sortLocaleCompare) return b.localeCompare(a);
                return ((b < a) ? -1 : ((b > a) ? 1 : 0));
            };

            function sortNumeric(a, b) {
                return a - b;
            };

            function sortNumericDesc(a, b) {
                return b - a;
            };

            function getCachedSortType(parsers, i) {
                return parsers[i].type;
            }; /* public methods */
            this.construct = function (settings) {
                return this.each(function () {
                    // if no thead or tbody quit.
                    if (!this.tHead || !this.tBodies) return;
                    // declare
                    var $this, $document, $headers, cache, config, shiftDown = 0,
                        sortOrder;
                    // new blank config object
                    this.config = {};
                    // merge and extend.
                    config = $.extend(this.config, $.tablesorter.defaults, settings);
                    // store common expression for speed
                    $this = $(this);
                    // save the settings where they read
                    $.data(this, "tablesorter", config);
                    // build headers
                    $headers = buildHeaders(this);
                    // try to auto detect column type, and store in tables config
                    this.config.parsers = buildParserCache(this, $headers);
                    // build the cache for the tbody cells
                    cache = buildCache(this);
                    // get the css class names, could be done else where.
                    var sortCSS = [config.cssDesc, config.cssAsc];
                    // fixate columns if the users supplies the fixedWidth option
                    fixColumnWidth(this);
                    // apply event handling to headers
                    // this is to big, perhaps break it out?
                    $headers.click(

                    function (e) {
                        var totalRows = ($this[0].tBodies[0] && $this[0].tBodies[0].rows.length) || 0;
                        if (!this.sortDisabled && totalRows > 0) {
                            // Only call sortStart if sorting is
                            // enabled.
                            $this.trigger("sortStart");
                            // store exp, for speed
                            var $cell = $(this);
                            // get current column index
                            var i = this.column;
                            // get current column sort order
                            this.order = this.count++ % 2;
							// always sort on the locked order.
							if(this.lockedOrder) this.order = this.lockedOrder;
							
							// user only whants to sort on one
                            // column
                            if (!e[config.sortMultiSortKey]) {
                                // flush the sort list
                                config.sortList = [];
                                if (config.sortForce != null) {
                                    var a = config.sortForce;
                                    for (var j = 0; j < a.length; j++) {
                                        if (a[j][0] != i) {
                                            config.sortList.push(a[j]);
                                        }
                                    }
                                }
                                // add column to sort list
                                config.sortList.push([i, this.order]);
                                // multi column sorting
                            } else {
                                // the user has clicked on an all
                                // ready sortet column.
                                if (isValueInArray(i, config.sortList)) {
                                    // revers the sorting direction
                                    // for all tables.
                                    for (var j = 0; j < config.sortList.length; j++) {
                                        var s = config.sortList[j],
                                            o = config.headerList[s[0]];
                                        if (s[0] == i) {
                                            o.count = s[1];
                                            o.count++;
                                            s[1] = o.count % 2;
                                        }
                                    }
                                } else {
                                    // add column to sort list array
                                    config.sortList.push([i, this.order]);
                                }
                            };
                            setTimeout(function () {
                                // set css for headers
                                setHeadersCss($this[0], $headers, config.sortList, sortCSS);
                                appendToTable(
	                                $this[0], multisort(
	                                $this[0], config.sortList, cache)
								);
                            }, 1);
                            // stop normal event by returning false
                            return false;
                        }
                        // cancel selection
                    }).mousedown(function () {
                        if (config.cancelSelection) {
                            this.onselectstart = function () {
                                return false
                            };
                            return false;
                        }
                    });
                    // apply easy methods that trigger binded events
                    $this.bind("update", function () {
                        var me = this;
                        setTimeout(function () {
                            // rebuild parsers.
                            me.config.parsers = buildParserCache(
                            me, $headers);
                            // rebuild the cache map
                            cache = buildCache(me);
                        }, 1);
                    }).bind("updateCell", function (e, cell) {
                        var config = this.config;
                        // get position from the dom.
                        var pos = [(cell.parentNode.rowIndex - 1), cell.cellIndex];
                        // update cache
                        cache.normalized[pos[0]][pos[1]] = config.parsers[pos[1]].format(
                        getElementText(config, cell), cell);
                    }).bind("sorton", function (e, list) {
                        $(this).trigger("sortStart");
                        config.sortList = list;
                        // update and store the sortlist
                        var sortList = config.sortList;
                        // update header count index
                        updateHeaderSortCount(this, sortList);
                        // set css for headers
                        setHeadersCss(this, $headers, sortList, sortCSS);
                        // sort the table and append it to the dom
                        appendToTable(this, multisort(this, sortList, cache));
                    }).bind("appendCache", function () {
                        appendToTable(this, cache);
                    }).bind("applyWidgetId", function (e, id) {
                        getWidgetById(id).format(this);
                    }).bind("applyWidgets", function () {
                        // apply widgets
                        applyWidget(this);
                    });
                    if ($.metadata && ($(this).metadata() && $(this).metadata().sortlist)) {
                        config.sortList = $(this).metadata().sortlist;
                    }
                    // if user has supplied a sort list to constructor.
                    if (config.sortList.length > 0) {
                        $this.trigger("sorton", [config.sortList]);
                    }
                    // apply widgets
                    applyWidget(this);
                });
            };
            this.addParser = function (parser) {
                var l = parsers.length,
                    a = true;
                for (var i = 0; i < l; i++) {
                    if (parsers[i].id.toLowerCase() == parser.id.toLowerCase()) {
                        a = false;
                    }
                }
                if (a) {
                    parsers.push(parser);
                };
            };
            this.addWidget = function (widget) {
                widgets.push(widget);
            };
            this.formatFloat = function (s) {
                var i = parseFloat(s);
                return (isNaN(i)) ? 0 : i;
            };
            this.formatInt = function (s) {
                var i = parseInt(s);
                return (isNaN(i)) ? 0 : i;
            };
            this.isDigit = function (s, config) {
                // replace all an wanted chars and match.
                return /^[-+]?\d*$/.test($.trim(s.replace(/[,.']/g, '')));
            };
            this.clearTableBody = function (table) {
                if ($.browser.msie) {
                    function empty() {
                        while (this.firstChild)
                        this.removeChild(this.firstChild);
                    }
                    empty.apply(table.tBodies[0]);
                } else {
                    table.tBodies[0].innerHTML = "";
                }
            };
        }
    });

    // extend plugin scope
    $.fn.extend({
        tablesorter: $.tablesorter.construct
    });

    // make shortcut
    var ts = $.tablesorter;

    // add default parsers
    ts.addParser({
        id: "text",
        is: function (s) {
            return true;
        }, format: function (s) {
            return $.trim(s.toLocaleLowerCase());
        }, type: "text"
    });

    ts.addParser({
        id: "digit",
        is: function (s, table) {
            var c = table.config;
            return $.tablesorter.isDigit(s, c);
        }, format: function (s) {
            return $.tablesorter.formatFloat(s);
        }, type: "numeric"
    });

    ts.addParser({
        id: "currency",
        is: function (s) {
            return /^[£$€?.]/.test(s);
        }, format: function (s) {
            return $.tablesorter.formatFloat(s.replace(new RegExp(/[£$€]/g), ""));
        }, type: "numeric"
    });

    ts.addParser({
        id: "ipAddress",
        is: function (s) {
            return /^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(s);
        }, format: function (s) {
            var a = s.split("."),
                r = "",
                l = a.length;
            for (var i = 0; i < l; i++) {
                var item = a[i];
                if (item.length == 2) {
                    r += "0" + item;
                } else {
                    r += item;
                }
            }
            return $.tablesorter.formatFloat(r);
        }, type: "numeric"
    });

    ts.addParser({
        id: "url",
        is: function (s) {
            return /^(https?|ftp|file):\/\/$/.test(s);
        }, format: function (s) {
            return jQuery.trim(s.replace(new RegExp(/(https?|ftp|file):\/\//), ''));
        }, type: "text"
    });

    ts.addParser({
        id: "isoDate",
        is: function (s) {
            return /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(s);
        }, format: function (s) {
            return $.tablesorter.formatFloat((s != "") ? new Date(s.replace(
            new RegExp(/-/g), "/")).getTime() : "0");
        }, type: "numeric"
    });

    ts.addParser({
        id: "percent",
        is: function (s) {
            return /\%$/.test($.trim(s));
        }, format: function (s) {
            return $.tablesorter.formatFloat(s.replace(new RegExp(/%/g), ""));
        }, type: "numeric"
    });

    ts.addParser({
        id: "usLongDate",
        is: function (s) {
            return s.match(new RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/));
        }, format: function (s) {
            return $.tablesorter.formatFloat(new Date(s).getTime());
        }, type: "numeric"
    });

    ts.addParser({
        id: "shortDate",
        is: function (s) {
            return /\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(s);
        }, format: function (s, table) {
            var c = table.config;
            s = s.replace(/\-/g, "/");
            if (c.dateFormat == "us") {
                // reformat the string in ISO format
                s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$1/$2");
            } else if (c.dateFormat == "uk") {
                // reformat the string in ISO format
                s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$2/$1");
            } else if (c.dateFormat == "dd/mm/yy" || c.dateFormat == "dd-mm-yy") {
                s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/, "$1/$2/$3");
            }
            return $.tablesorter.formatFloat(new Date(s).getTime());
        }, type: "numeric"
    });
    ts.addParser({
        id: "time",
        is: function (s) {
            return /^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(s);
        }, format: function (s) {
            return $.tablesorter.formatFloat(new Date("2000/01/01 " + s).getTime());
        }, type: "numeric"
    });
    ts.addParser({
        id: "metadata",
        is: function (s) {
            return false;
        }, format: function (s, table, cell) {
            var c = table.config,
                p = (!c.parserMetadataName) ? 'sortValue' : c.parserMetadataName;
            return $(cell).metadata()[p];
        }, type: "numeric"
    });
    // add default widgets
    ts.addWidget({
        id: "zebra",
        format: function (table) {
            if (table.config.debug) {
                var time = new Date();
            }
            var $tr, row = -1,
                odd;
            // loop through the visible rows
            $("tr:visible", table.tBodies[0]).each(function (i) {
                $tr = $(this);
                // style children rows the same way the parent
                // row was styled
                if (!$tr.hasClass(table.config.cssChildRow)) row++;
                odd = (row % 2 == 0);
                $tr.removeClass(
                table.config.widgetZebra.css[odd ? 0 : 1]).addClass(
                table.config.widgetZebra.css[odd ? 1 : 0])
            });
            if (table.config.debug) {
                $.tablesorter.benchmark("Applying Zebra widget", time);
            }
        }
    });
})(jQuery);
/*!
 * jQuery Tools v1.2.7 - The missing UI library for the Web
 * 
 * dateinput/dateinput.js
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/
 * 
 */
(function(a,b){a.tools=a.tools||{version:"v1.2.7"};var c=[],d={},e,f=[75,76,38,39,74,72,40,37],g={};e=a.tools.dateinput={conf:{format:"mm/dd/yy",formatter:"default",selectors:!1,yearRange:[-5,5],lang:"en",offset:[0,0],speed:0,firstDay:0,min:b,max:b,trigger:0,toggle:0,editable:0,css:{prefix:"cal",input:"date",root:0,head:0,title:0,prev:0,next:0,month:0,year:0,days:0,body:0,weeks:0,today:0,current:0,week:0,off:0,sunday:0,focus:0,disabled:0,trigger:0}},addFormatter:function(a,b){d[a]=b},localize:function(b,c){a.each(c,function(a,b){c[a]=b.split(",")}),g[b]=c}},e.localize("en",{months:"January,February,March,April,May,June,July,August,September,October,November,December",shortMonths:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",days:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",shortDays:"Sun,Mon,Tue,Wed,Thu,Fri,Sat"});function h(a,b){return(new Date(a,b+1,0)).getDate()}function i(a,b){a=""+a,b=b||2;while(a.length<b)a="0"+a;return a}var j=a("<a/>");function k(a,b,c,e){var f=b.getDate(),h=b.getDay(),k=b.getMonth(),l=b.getFullYear(),m={d:f,dd:i(f),ddd:g[e].shortDays[h],dddd:g[e].days[h],m:k+1,mm:i(k+1),mmm:g[e].shortMonths[k],mmmm:g[e].months[k],yy:String(l).slice(2),yyyy:l},n=d[a](c,b,m,e);return j.html(n).html()}e.addFormatter("default",function(a,b,c,d){return a.replace(/d{1,4}|m{1,4}|yy(?:yy)?|"[^"]*"|'[^']*'/g,function(a){return a in c?c[a]:a})}),e.addFormatter("prefixed",function(a,b,c,d){return a.replace(/%(d{1,4}|m{1,4}|yy(?:yy)?|"[^"]*"|'[^']*')/g,function(a,b){return b in c?c[b]:a})});function l(a){return parseInt(a,10)}function m(a,b){return a.getFullYear()===b.getFullYear()&&a.getMonth()==b.getMonth()&&a.getDate()==b.getDate()}function n(a){if(a!==b){if(a.constructor==Date)return a;if(typeof a=="string"){var c=a.split("-");if(c.length==3)return new Date(l(c[0]),l(c[1])-1,l(c[2]));if(!/^-?\d+$/.test(a))return;a=l(a)}var d=new Date;d.setDate(d.getDate()+a);return d}}function o(d,e){var i=this,j=new Date,o=j.getFullYear(),p=e.css,q=g[e.lang],r=a("#"+p.root),s=r.find("#"+p.title),t,u,v,w,x,y,z=d.attr("data-value")||e.value||d.val(),A=d.attr("min")||e.min,B=d.attr("max")||e.max,C,D;A===0&&(A="0"),z=n(z)||j,A=n(A||new Date(o+e.yearRange[0],1,1)),B=n(B||new Date(o+e.yearRange[1]+1,1,-1));if(!q)throw"Dateinput: invalid language: "+e.lang;if(d.attr("type")=="date"){var D=d.clone(),E=D.wrap("<div/>").parent().html(),F=a(E.replace(/type/i,"type=text data-orig-type"));e.value&&F.val(e.value),d.replaceWith(F),d=F}d.addClass(p.input);var G=d.add(i);if(!r.length){r=a("<div><div><a/><div/><a/></div><div><div/><div/></div></div>").hide().css({position:"absolute"}).attr("id",p.root),r.children().eq(0).attr("id",p.head).end().eq(1).attr("id",p.body).children().eq(0).attr("id",p.days).end().eq(1).attr("id",p.weeks).end().end().end().find("a").eq(0).attr("id",p.prev).end().eq(1).attr("id",p.next),s=r.find("#"+p.head).find("div").attr("id",p.title);if(e.selectors){var H=a("<select/>").attr("id",p.month),I=a("<select/>").attr("id",p.year);s.html(H.add(I))}var J=r.find("#"+p.days);for(var K=0;K<7;K++)J.append(a("<span/>").text(q.shortDays[(K+e.firstDay)%7]));a("body").append(r)}e.trigger&&(t=a("<a/>").attr("href","#").addClass(p.trigger).click(function(a){e.toggle?i.toggle():i.show();return a.preventDefault()}).insertAfter(d));var L=r.find("#"+p.weeks);I=r.find("#"+p.year),H=r.find("#"+p.month);function M(b,c,e){z=b,w=b.getFullYear(),x=b.getMonth(),y=b.getDate(),e||(e=a.Event("api")),e.type=="click"&&!a.browser.msie&&d.focus(),e.type="beforeChange",G.trigger(e,[b]);e.isDefaultPrevented()||(d.val(k(c.formatter,b,c.format,c.lang)),e.type="change",G.trigger(e),d.data("date",b),i.hide(e))}function N(b){b.type="onShow",G.trigger(b),a(document).on("keydown.d",function(b){if(b.ctrlKey)return!0;var c=b.keyCode;if(c==8||c==46){d.val("");return i.hide(b)}if(c==27||c==9)return i.hide(b);if(a(f).index(c)>=0){if(!C){i.show(b);return b.preventDefault()}var e=a("#"+p.weeks+" a"),g=a("."+p.focus),h=e.index(g);g.removeClass(p.focus);if(c==74||c==40)h+=7;else if(c==75||c==38)h-=7;else if(c==76||c==39)h+=1;else if(c==72||c==37)h-=1;h>41?(i.addMonth(),g=a("#"+p.weeks+" a:eq("+(h-42)+")")):h<0?(i.addMonth(-1),g=a("#"+p.weeks+" a:eq("+(h+42)+")")):g=e.eq(h),g.addClass(p.focus);return b.preventDefault()}if(c==34)return i.addMonth();if(c==33)return i.addMonth(-1);if(c==36)return i.today();c==13&&(a(b.target).is("select")||a("."+p.focus).click());return a([16,17,18,9]).index(c)>=0}),a(document).on("click.d",function(b){var c=b.target;!a(c).parents("#"+p.root).length&&c!=d[0]&&(!t||c!=t[0])&&i.hide(b)})}a.extend(i,{show:function(b){if(!(d.attr("readonly")||d.attr("disabled")||C)){b=b||a.Event(),b.type="onBeforeShow",G.trigger(b);if(b.isDefaultPrevented())return;a.each(c,function(){this.hide()}),C=!0,H.off("change").change(function(){i.setValue(l(I.val()),l(a(this).val()))}),I.off("change").change(function(){i.setValue(l(a(this).val()),l(H.val()))}),u=r.find("#"+p.prev).off("click").click(function(a){u.hasClass(p.disabled)||i.addMonth(-1);return!1}),v=r.find("#"+p.next).off("click").click(function(a){v.hasClass(p.disabled)||i.addMonth();return!1}),i.setValue(z);var f=d.offset();/iPad/i.test(navigator.userAgent)&&(f.top-=a(window).scrollTop()),r.css({top:f.top+d.outerHeight({margins:!0})+e.offset[0],left:f.left+e.offset[1]}),e.speed?r.show(e.speed,function(){N(b)}):(r.show(),N(b));return i}},setValue:function(c,d,f){var g=l(d)>=-1?new Date(l(c),l(d),l(f==b||isNaN(f)?1:f)):c||z;g<A?g=A:g>B&&(g=B),typeof c=="string"&&(g=n(c)),c=g.getFullYear(),d=g.getMonth(),f=g.getDate(),d==-1?(d=11,c--):d==12&&(d=0,c++);if(!C){M(g,e);return i}x=d,w=c,y=f;var k=new Date(c,d,1-e.firstDay),o=k.getDay(),r=h(c,d),t=h(c,d-1),D;if(e.selectors){H.empty(),a.each(q.months,function(b,d){A<new Date(c,b+1,1)&&B>new Date(c,b,0)&&H.append(a("<option/>").html(d).attr("value",b))}),I.empty();var E=j.getFullYear();for(var F=E+e.yearRange[0];F<E+e.yearRange[1];F++)A<new Date(F+1,0,1)&&B>new Date(F,0,0)&&I.append(a("<option/>").text(F));H.val(d),I.val(c)}else s.html(q.months[d]+" "+c);L.empty(),u.add(v).removeClass(p.disabled);for(var G=o?0:-7,J,K;G<(o?42:35);G++)J=a("<a/>"),G%7===0&&(D=a("<div/>").addClass(p.week),L.append(D)),G<o?(J.addClass(p.off),K=t-o+G+1,g=new Date(c,d-1,K)):G<o+r?(K=G-o+1,g=new Date(c,d,K),m(z,g)?J.attr("id",p.current).addClass(p.focus):m(j,g)&&J.attr("id",p.today)):(J.addClass(p.off),K=G-r-o+1,g=new Date(c,d+1,K)),A&&g<A&&J.add(u).addClass(p.disabled),B&&g>B&&J.add(v).addClass(p.disabled),J.attr("href","#"+K).text(K).data("date",g),D.append(J);L.find("a").click(function(b){var c=a(this);c.hasClass(p.disabled)||(a("#"+p.current).removeAttr("id"),c.attr("id",p.current),M(c.data("date"),e,b));return!1}),p.sunday&&L.find("."+p.week).each(function(){var b=e.firstDay?7-e.firstDay:0;a(this).children().slice(b,b+1).addClass(p.sunday)});return i},setMin:function(a,b){A=n(a),b&&z<A&&i.setValue(A);return i},setMax:function(a,b){B=n(a),b&&z>B&&i.setValue(B);return i},today:function(){return i.setValue(j)},addDay:function(a){return this.setValue(w,x,y+(a||1))},addMonth:function(a){var b=x+(a||1),c=h(w,b),d=y<=c?y:c;return this.setValue(w,b,d)},addYear:function(a){return this.setValue(w+(a||1),x,y)},destroy:function(){d.add(document).off("click.d keydown.d"),r.add(t).remove(),d.removeData("dateinput").removeClass(p.input),D&&d.replaceWith(D)},hide:function(b){if(C){b=a.Event(),b.type="onHide",G.trigger(b);if(b.isDefaultPrevented())return;a(document).off("click.d keydown.d"),r.hide(),C=!1}return i},toggle:function(){return i.isOpen()?i.hide():i.show()},getConf:function(){return e},getInput:function(){return d},getCalendar:function(){return r},getValue:function(a){return a?k(e.formatter,z,a,e.lang):z},isOpen:function(){return C}}),a.each(["onBeforeShow","onShow","change","onHide"],function(b,c){a.isFunction(e[c])&&a(i).on(c,e[c]),i[c]=function(b){b&&a(i).on(c,b);return i}}),e.editable||d.on("focus.d click.d",i.show).keydown(function(b){var c=b.keyCode;if(C||a(f).index(c)<0)(c==8||c==46)&&d.val("");else{i.show(b);return b.preventDefault()}return b.shiftKey||b.ctrlKey||b.altKey||c==9?!0:b.preventDefault()}),n(d.val())&&M(z,e)}a.expr[":"].date=function(b){var c=b.getAttribute("type");return c&&c=="date"||a(b).data("dateinput")},a.fn.dateinput=function(b){if(this.data("dateinput"))return this;b=a.extend(!0,{},e.conf,b),a.each(b.css,function(a,c){!c&&a!="prefix"&&(b.css[a]=(b.css.prefix||"")+(c||a))});var d;this.each(function(){var e=new o(a(this),b);c.push(e);var f=e.getInput().data("dateinput",e);d=d?d.add(f):f});return d?d:this}})(jQuery);

/*!
 * jQuery Tools v1.2.7 - The missing UI library for the Web
 * 
 * dateinput/dateinput.js
 * rangeinput/rangeinput.js
 * validator/validator.js
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/
 * 
 */
(function(d,D){function M(b,a){b=""+b;for(a=a||2;b.length<a;)b="0"+b;return b}function N(b,a,d,g){var f=a.getDate(),l=a.getDay(),k=a.getMonth(),c=a.getFullYear(),f={d:f,dd:M(f),ddd:r[g].shortDays[l],dddd:r[g].days[l],m:k+1,mm:M(k+1),mmm:r[g].shortMonths[k],mmmm:r[g].months[k],yy:(""+c).slice(2),yyyy:c},b=O[b](d,a,f,g);return S.html(b).html()}function l(b){return parseInt(b,10)}function P(b,a){return b.getFullYear()===a.getFullYear()&&b.getMonth()==a.getMonth()&&b.getDate()==a.getDate()}function w(b){if(b!==
D){if(b.constructor==Date)return b;if("string"==typeof b){var a=b.split("-");if(3==a.length)return new Date(l(a[0]),l(a[1])-1,l(a[2]));if(!/^-?\d+$/.test(b))return;b=l(b)}a=new Date;a.setDate(a.getDate()+b);return a}}function T(b,a){function j(a,t,c){o=a;z=a.getFullYear();B=a.getMonth();A=a.getDate();c||(c=d.Event("api"));"click"==c.type&&!d.browser.msie&&b.focus();c.type="beforeChange";C.trigger(c,[a]);c.isDefaultPrevented()||(b.val(N(t.formatter,a,t.format,t.lang)),c.type="change",C.trigger(c),
b.data("date",a),f.hide(c))}function g(a){a.type="onShow";C.trigger(a);d(document).on("keydown.d",function(a){if(a.ctrlKey)return!0;var e=a.keyCode;if(8==e||46==e)return b.val(""),f.hide(a);if(27==e||9==e)return f.hide(a);if(0<=d(Q).index(e)){if(!u)return f.show(a),a.preventDefault();var h=d("#"+c.weeks+" a"),j=d("."+c.focus),g=h.index(j);j.removeClass(c.focus);if(74==e||40==e)g+=7;else if(75==e||38==e)g-=7;else if(76==e||39==e)g+=1;else if(72==e||37==e)g-=1;41<g?(f.addMonth(),j=d("#"+c.weeks+" a:eq("+
(g-42)+")")):0>g?(f.addMonth(-1),j=d("#"+c.weeks+" a:eq("+(g+42)+")")):j=h.eq(g);j.addClass(c.focus);return a.preventDefault()}if(34==e)return f.addMonth();if(33==e)return f.addMonth(-1);if(36==e)return f.today();13==e&&(d(a.target).is("select")||d("."+c.focus).click());return 0<=d([16,17,18,9]).index(e)});d(document).on("click.d",function(a){var e=a.target;!d(e).parents("#"+c.root).length&&e!=b[0]&&(!E||e!=E[0])&&f.hide(a)})}var f=this,q=new Date,k=q.getFullYear(),c=a.css,F=r[a.lang],i=d("#"+c.root),
K=i.find("#"+c.title),E,G,H,z,B,A,o=b.attr("data-value")||a.value||b.val(),n=b.attr("min")||a.min,p=b.attr("max")||a.max,u,I;0===n&&(n="0");o=w(o)||q;n=w(n||new Date(k+a.yearRange[0],1,1));p=w(p||new Date(k+a.yearRange[1]+1,1,-1));if(!F)throw"Dateinput: invalid language: "+a.lang;"date"==b.attr("type")&&(I=b.clone(),k=I.wrap("<div/>").parent().html(),k=d(k.replace(/type/i,"type=text data-orig-type")),a.value&&k.val(a.value),b.replaceWith(k),b=k);b.addClass(c.input);var C=b.add(f);if(!i.length){i=
d("<div><div><a/><div/><a/></div><div><div/><div/></div></div>").hide().css({position:"absolute"}).attr("id",c.root);i.children().eq(0).attr("id",c.head).end().eq(1).attr("id",c.body).children().eq(0).attr("id",c.days).end().eq(1).attr("id",c.weeks).end().end().end().find("a").eq(0).attr("id",c.prev).end().eq(1).attr("id",c.next);K=i.find("#"+c.head).find("div").attr("id",c.title);if(a.selectors){var x=d("<select/>").attr("id",c.month),y=d("<select/>").attr("id",c.year);K.html(x.add(y))}for(var k=
i.find("#"+c.days),L=0;7>L;L++)k.append(d("<span/>").text(F.shortDays[(L+a.firstDay)%7]));d("body").append(i)}a.trigger&&(E=d("<a/>").attr("href","#").addClass(c.trigger).click(function(e){a.toggle?f.toggle():f.show();return e.preventDefault()}).insertAfter(b));var J=i.find("#"+c.weeks),y=i.find("#"+c.year),x=i.find("#"+c.month);d.extend(f,{show:function(e){if(!b.attr("readonly")&&!b.attr("disabled")&&!u){e=e||d.Event();e.type="onBeforeShow";C.trigger(e);if(!e.isDefaultPrevented()){d.each(R,function(){this.hide()});
u=true;x.off("change").change(function(){f.setValue(l(y.val()),l(d(this).val()))});y.off("change").change(function(){f.setValue(l(d(this).val()),l(x.val()))});G=i.find("#"+c.prev).off("click").click(function(){G.hasClass(c.disabled)||f.addMonth(-1);return false});H=i.find("#"+c.next).off("click").click(function(){H.hasClass(c.disabled)||f.addMonth();return false});f.setValue(o);var t=b.offset();if(/iPad/i.test(navigator.userAgent))t.top=t.top-d(window).scrollTop();i.css({top:t.top+b.outerHeight({margins:true})+
a.offset[0],left:t.left+a.offset[1]});if(a.speed)i.show(a.speed,function(){g(e)});else{i.show();g(e)}return f}}},setValue:function(e,b,g){var h=l(b)>=-1?new Date(l(e),l(b),l(g==D||isNaN(g)?1:g)):e||o;h<n?h=n:h>p&&(h=p);typeof e=="string"&&(h=w(e));e=h.getFullYear();b=h.getMonth();g=h.getDate();if(b==-1){b=11;e--}else if(b==12){b=0;e++}if(!u){j(h,a);return f}B=b;z=e;A=g;var g=(new Date(e,b,1-a.firstDay)).getDay(),i=(new Date(e,b+1,0)).getDate(),k=(new Date(e,b-1+1,0)).getDate(),r;if(a.selectors){x.empty();
d.each(F.months,function(a,b){n<new Date(e,a+1,1)&&p>new Date(e,a,0)&&x.append(d("<option/>").html(b).attr("value",a))});y.empty();for(var h=q.getFullYear(),m=h+a.yearRange[0];m<h+a.yearRange[1];m++)n<new Date(m+1,0,1)&&p>new Date(m,0,0)&&y.append(d("<option/>").text(m));x.val(b);y.val(e)}else K.html(F.months[b]+" "+e);J.empty();G.add(H).removeClass(c.disabled);for(var m=!g?-7:0,s,v;m<(!g?35:42);m++){s=d("<a/>");if(m%7===0){r=d("<div/>").addClass(c.week);J.append(r)}if(m<g){s.addClass(c.off);v=k-
g+m+1;h=new Date(e,b-1,v)}else if(m>=g+i){s.addClass(c.off);v=m-i-g+1;h=new Date(e,b+1,v)}else{v=m-g+1;h=new Date(e,b,v);P(o,h)?s.attr("id",c.current).addClass(c.focus):P(q,h)&&s.attr("id",c.today)}n&&h<n&&s.add(G).addClass(c.disabled);p&&h>p&&s.add(H).addClass(c.disabled);s.attr("href","#"+v).text(v).data("date",h);r.append(s)}J.find("a").click(function(b){var e=d(this);if(!e.hasClass(c.disabled)){d("#"+c.current).removeAttr("id");e.attr("id",c.current);j(e.data("date"),a,b)}return false});c.sunday&&
J.find("."+c.week).each(function(){var b=a.firstDay?7-a.firstDay:0;d(this).children().slice(b,b+1).addClass(c.sunday)});return f},setMin:function(a,b){n=w(a);b&&o<n&&f.setValue(n);return f},setMax:function(a,b){p=w(a);b&&o>p&&f.setValue(p);return f},today:function(){return f.setValue(q)},addDay:function(a){return this.setValue(z,B,A+(a||1))},addMonth:function(a){var a=B+(a||1),b=(new Date(z,a+1,0)).getDate();return this.setValue(z,a,A<=b?A:b)},addYear:function(a){return this.setValue(z+(a||1),B,A)},
destroy:function(){b.add(document).off("click.d keydown.d");i.add(E).remove();b.removeData("dateinput").removeClass(c.input);I&&b.replaceWith(I)},hide:function(a){if(u){a=d.Event();a.type="onHide";C.trigger(a);if(a.isDefaultPrevented())return;d(document).off("click.d keydown.d");i.hide();u=false}return f},toggle:function(){return f.isOpen()?f.hide():f.show()},getConf:function(){return a},getInput:function(){return b},getCalendar:function(){return i},getValue:function(b){return b?N(a.formatter,o,b,
a.lang):o},isOpen:function(){return u}});d.each(["onBeforeShow","onShow","change","onHide"],function(b,c){if(d.isFunction(a[c]))d(f).on(c,a[c]);f[c]=function(a){if(a)d(f).on(c,a);return f}});a.editable||b.on("focus.d click.d",f.show).keydown(function(a){var c=a.keyCode;if(!u&&d(Q).index(c)>=0){f.show(a);return a.preventDefault()}(c==8||c==46)&&b.val("");return a.shiftKey||a.ctrlKey||a.altKey||c==9?true:a.preventDefault()});w(b.val())&&j(o,a)}d.tools=d.tools||{version:"@VERSION"};var R=[],O={},q,Q=
[75,76,38,39,74,72,40,37],r={};q=d.tools.dateinput={conf:{format:"mm/dd/yy",formatter:"default",selectors:!1,yearRange:[-5,5],lang:"en",offset:[0,0],speed:0,firstDay:0,min:D,max:D,trigger:0,toggle:0,editable:0,css:{prefix:"cal",input:"date",root:0,head:0,title:0,prev:0,next:0,month:0,year:0,days:0,body:0,weeks:0,today:0,current:0,week:0,off:0,sunday:0,focus:0,disabled:0,trigger:0}},addFormatter:function(b,a){O[b]=a},localize:function(b,a){d.each(a,function(b,d){a[b]=d.split(",")});r[b]=a}};q.localize("en",
{months:"January,February,March,April,May,June,July,August,September,October,November,December",shortMonths:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",days:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",shortDays:"Sun,Mon,Tue,Wed,Thu,Fri,Sat"});var S=d("<a/>");q.addFormatter("default",function(b,a,d){return b.replace(/d{1,4}|m{1,4}|yy(?:yy)?|"[^"]*"|'[^']*'/g,function(a){return a in d?d[a]:a})});q.addFormatter("prefixed",function(b,a,d){return b.replace(/%(d{1,4}|m{1,4}|yy(?:yy)?|"[^"]*"|'[^']*')/g,
function(a,b){return b in d?d[b]:a})});d.expr[":"].date=function(b){var a=b.getAttribute("type");return a&&"date"==a||!!d(b).data("dateinput")};d.fn.dateinput=function(b){if(this.data("dateinput"))return this;b=d.extend(!0,{},q.conf,b);d.each(b.css,function(a,d){!d&&"prefix"!=a&&(b.css[a]=(b.css.prefix||"")+(d||a))});var a;this.each(function(){var j=new T(d(this),b);R.push(j);j=j.getInput().data("dateinput",j);a=a?a.add(j):j});return a?a:this}})(jQuery);
(function(a){function z(c,b){var a=Math.pow(10,b);return Math.round(c*a)/a}function m(c,b){var a=parseInt(c.css(b),10);return a?a:(a=c[0].currentStyle)&&a.width&&parseInt(a.width,10)}function y(a){return(a=a.data("events"))&&a.onSlide}function A(c,b){function e(a,d,f,e){void 0===f?f=d/i*v:e&&(f-=b.min);s&&(f=Math.round(f/s)*s);if(void 0===d||s)d=f*i/v;if(isNaN(f))return g;d=Math.max(0,Math.min(d,i));f=d/i*v;if(e||!n)f+=b.min;n&&(e?d=i-d:f=b.max-f);var f=z(f,r),h="click"==a.type;if(u&&void 0!==k&&
!h&&(a.type="onSlide",w.trigger(a,[f,d]),a.isDefaultPrevented()))return g;e=h?b.speed:0;h=h?function(){a.type="change";w.trigger(a,[f])}:null;n?(j.animate({top:d},e,h),b.progress&&x.animate({height:i-d+j.height()/2},e)):(j.animate({left:d},e,h),b.progress&&x.animate({width:d+j.width()/2},e));k=f;c.val(f);return g}function o(){(n=b.vertical||m(h,"height")>m(h,"width"))?(i=m(h,"height")-m(j,"height"),l=h.offset().top+i):(i=m(h,"width")-m(j,"width"),l=h.offset().left)}function q(){o();g.setValue(void 0!==
b.value?b.value:b.min)}var g=this,p=b.css,h=a("<div><div/><a href='#'/></div>").data("rangeinput",g),n,k,l,i;c.before(h);var j=h.addClass(p.slider).find("a").addClass(p.handle),x=h.find("div").addClass(p.progress);a.each(["min","max","step","value"],function(a,d){var f=c.attr(d);parseFloat(f)&&(b[d]=parseFloat(f,10))});var v=b.max-b.min,s="any"==b.step?0:b.step,r=b.precision;void 0===r&&(r=s.toString().split("."),r=2===r.length?r[1].length:0);if("range"==c.attr("type")){var t=c.clone().wrap("<div/>").parent().html(),
t=a(t.replace(/type/i,"type=text data-orig-type"));t.val(b.value);c.replaceWith(t);c=t}c.addClass(p.input);var w=a(g).add(c),u=!0;a.extend(g,{getValue:function(){return k},setValue:function(b,d){o();return e(d||a.Event("api"),void 0,b,true)},getConf:function(){return b},getProgress:function(){return x},getHandle:function(){return j},getInput:function(){return c},step:function(c,d){d=d||a.Event();g.setValue(k+(b.step=="any"?1:b.step)*(c||1),d)},stepUp:function(a){return g.step(a||1)},stepDown:function(a){return g.step(-a||
-1)}});a.each(["onSlide","change"],function(c,d){if(a.isFunction(b[d]))a(g).on(d,b[d]);g[d]=function(b){if(b)a(g).on(d,b);return g}});j.drag({drag:!1}).on("dragStart",function(){o();u=y(a(g))||y(c)}).on("drag",function(a,b,f){if(c.is(":disabled"))return false;e(a,n?b:f)}).on("dragEnd",function(a){if(!a.isDefaultPrevented()){a.type="change";w.trigger(a,[k])}}).click(function(a){return a.preventDefault()});h.click(function(a){if(c.is(":disabled")||a.target==j[0])return a.preventDefault();o();var b=
n?j.height()/2:j.width()/2;e(a,n?i-l-b+a.pageY:a.pageX-l-b)});b.keyboard&&c.keydown(function(b){if(!c.attr("readonly")){var d=b.keyCode,f=a([75,76,38,33,39]).index(d)!=-1,e=a([74,72,40,34,37]).index(d)!=-1;if((f||e)&&!b.shiftKey&&!b.altKey&&!b.ctrlKey){f?g.step(d==33?10:1,b):e&&g.step(d==34?-10:-1,b);return b.preventDefault()}}});c.blur(function(b){var c=a(this).val();c!==k&&g.setValue(c,b)});a.extend(c[0],{stepUp:g.stepUp,stepDown:g.stepDown});q();i||a(window).load(q)}a.tools=a.tools||{version:"@VERSION"};
var u;u=a.tools.rangeinput={conf:{min:0,max:100,step:"any",steps:0,value:0,precision:void 0,vertical:0,keyboard:!0,progress:!1,speed:100,css:{input:"range",slider:"slider",progress:"progress",handle:"handle"}}};var q,l;a.fn.drag=function(c){document.ondragstart=function(){return!1};c=a.extend({x:!0,y:!0,drag:!0},c);q=q||a(document).on("mousedown mouseup",function(b){var e=a(b.target);if("mousedown"==b.type&&e.data("drag")){var o=e.position(),m=b.pageX-o.left,g=b.pageY-o.top,p=!0;q.on("mousemove.drag",
function(a){var b=a.pageX-m,a=a.pageY-g,k={};c.x&&(k.left=b);c.y&&(k.top=a);p&&(e.trigger("dragStart"),p=!1);c.drag&&e.css(k);e.trigger("drag",[a,b]);l=e});b.preventDefault()}else try{l&&l.trigger("dragEnd")}finally{q.off("mousemove.drag"),l=null}});return this.data("drag",!0)};a.expr[":"].range=function(c){var b=c.getAttribute("type");return b&&"range"==b||!!a(c).filter("input").data("rangeinput")};a.fn.rangeinput=function(c){if(this.data("rangeinput"))return this;var c=a.extend(!0,{},u.conf,c),
b;this.each(function(){var e=new A(a(this),a.extend(!0,{},c)),e=e.getInput().data("rangeinput",e);b=b?b.add(e):e});return b?b:this}})(jQuery);
(function(c){function i(b,a,f){var a=c(a).first()||a,d=b.offset().top,e=b.offset().left,g=f.position.split(/,?\s+/),j=g[0],g=g[1],d=d-(a.outerHeight()-f.offset[0]),e=e+(b.outerWidth()+f.offset[1]);/iPad/i.test(navigator.userAgent)&&(d-=c(window).scrollTop());f=a.outerHeight()+b.outerHeight();"center"==j&&(d+=f/2);"bottom"==j&&(d+=f);b=b.outerWidth();"center"==g&&(e-=(b+a.outerWidth())/2);"left"==g&&(e-=b);return{top:d,left:e}}function q(b){function a(){return this.getAttribute("type")==b}a.key='[type="'+
b+'"]';return a}function n(b,a,f){function p(a,b,e){if(f.grouped||!a.length){var g;!1===e||c.isArray(e)?(g=d.messages[b.key||b]||d.messages["*"],g=g[f.lang]||d.messages["*"].en,(b=g.match(/\$\d/g))&&c.isArray(e)&&c.each(b,function(a){g=g.replace(this,e[a])})):g=e[f.lang]||e;a.push(g)}}var e=this,g=a.add(e),b=b.not(":button, :image, :reset, :submit");a.attr("novalidate","novalidate");c.extend(e,{getConf:function(){return f},getForm:function(){return a},getInputs:function(){return b},reflow:function(){b.each(function(){var a=
c(this),b=a.data("msg.el");b&&(a=i(a,b,f),b.css({top:a.top,left:a.left}))});return e},invalidate:function(a,h){if(!h){var d=[];c.each(a,function(a,f){var c=b.filter("[name='"+a+"']");c.length&&(c.trigger("OI",[f]),d.push({input:c,messages:[f]}))});a=d;h=c.Event()}h.type="onFail";g.trigger(h,[a]);h.isDefaultPrevented()||l[f.effect][0].call(e,a,h);return e},reset:function(a){a=a||b;a.removeClass(f.errorClass).each(function(){var a=c(this).data("msg.el");a&&(a.remove(),c(this).data("msg.el",null))}).off(f.errorInputEvent+
".v"||"");return e},destroy:function(){a.off(f.formEvent+".V reset.V");b.off(f.inputEvent+".V change.V");return e.reset()},checkValidity:function(a,h){var a=a||b,a=a.not(":disabled"),d={},a=a.filter(function(){var a=c(this).attr("name");if(!d[a])return d[a]=!0,c(this)});if(!a.length)return!0;h=h||c.Event();h.type="onBeforeValidate";g.trigger(h,[a]);if(h.isDefaultPrevented())return h.result;var k=[];a.each(function(){var a=[],b=c(this).data("messages",a),d=m&&b.is(":date")?"onHide.v":f.errorInputEvent+
".v";b.off(d);c.each(o,function(){var c=this[0];if(b.filter(c).length){var d=this[1].call(e,b,b.val());if(!0!==d){h.type="onBeforeFail";g.trigger(h,[b,c]);if(h.isDefaultPrevented())return!1;var j=b.attr(f.messageAttr);if(j)return a=[j],!1;p(a,c,d)}}});if(a.length&&(k.push({input:b,messages:a}),b.trigger("OI",[a]),f.errorInputEvent))b.on(d,function(a){e.checkValidity(b,a)});if(f.singleError&&k.length)return!1});var i=l[f.effect];if(!i)throw'Validator: cannot find effect "'+f.effect+'"';if(k.length)return e.invalidate(k,
h),!1;i[1].call(e,a,h);h.type="onSuccess";g.trigger(h,[a]);a.off(f.errorInputEvent+".v");return!0}});c.each(["onBeforeValidate","onBeforeFail","onFail","onSuccess"],function(a,b){if(c.isFunction(f[b]))c(e).on(b,f[b]);e[b]=function(a){if(a)c(e).on(b,a);return e}});if(f.formEvent)a.on(f.formEvent+".V",function(b){if(!e.checkValidity(null,b))return b.preventDefault();b.target=a;b.type=f.formEvent});a.on("reset.V",function(){e.reset()});b[0]&&b[0].validity&&b.each(function(){this.oninvalid=function(){return!1}});
a[0]&&(a[0].checkValidity=e.checkValidity);if(f.inputEvent)b.on(f.inputEvent+".V",function(a){e.checkValidity(c(this),a)});b.filter(":checkbox, select").filter("[required]").on("change.V",function(a){var b=c(this);(this.checked||b.is("select")&&c(this).val())&&l[f.effect][1].call(e,b,a)});b.filter(":radio[required]").on("change.V",function(a){var b=c("[name='"+c(a.srcElement).attr("name")+"']");b!=null&&b.length!=0&&e.checkValidity(b,a)});c(window).resize(function(){e.reflow()})}c.tools=c.tools||
{version:"@VERSION"};var r=/\[type=([a-z]+)\]/,s=/^-?[0-9]*(\.[0-9]+)?$/,m=c.tools.dateinput,t=/^([a-z0-9_\.\-\+]+)@([\da-z\.\-]+)\.([a-z\.]{2,6})$/i,u=/^(https?:\/\/)?[\da-z\.\-]+\.[a-z\.]{2,6}[#&+_\?\/\w \.\-=]*$/i,d;d=c.tools.validator={conf:{grouped:!1,effect:"default",errorClass:"invalid",inputEvent:null,errorInputEvent:"keyup",formEvent:"submit",lang:"en",message:"<div/>",messageAttr:"data-message",messageClass:"error",offset:[0,0],position:"center right",singleError:!1,speed:"normal"},messages:{"*":{en:"Please correct this value"}},
localize:function(b,a){c.each(a,function(a,c){d.messages[a]=d.messages[a]||{};d.messages[a][b]=c})},localizeFn:function(b,a){d.messages[b]=d.messages[b]||{};c.extend(d.messages[b],a)},fn:function(b,a,f){c.isFunction(a)?f=a:("string"==typeof a&&(a={en:a}),this.messages[b.key||b]=a);(a=r.exec(b))&&(b=q(a[1]));o.push([b,f])},addEffect:function(b,a,f){l[b]=[a,f]}};var o=[],l={"default":[function(b){var a=this.getConf();c.each(b,function(b,d){var e=d.input;e.addClass(a.errorClass);var g=e.data("msg.el");
g||(g=c(a.message).addClass(a.messageClass).appendTo(document.body),e.data("msg.el",g));g.css({visibility:"hidden"}).find("p").remove();c.each(d.messages,function(a,b){c("<p/>").html(b).appendTo(g)});g.outerWidth()==g.parent().width()&&g.add(g.find("p")).css({display:"inline"});e=i(e,g,a);g.css({visibility:"visible",position:"absolute",top:e.top,left:e.left}).fadeIn(a.speed)})},function(b){var a=this.getConf();b.removeClass(a.errorClass).each(function(){var a=c(this).data("msg.el");a&&a.css({visibility:"hidden"})})}]};
c.each(["email","url","number"],function(b,a){c.expr[":"][a]=function(b){return b.getAttribute("type")===a}});c.fn.oninvalid=function(b){return this[b?"on":"trigger"]("OI",b)};d.fn(":email","Please enter a valid email address",function(b,a){return!a||t.test(a)});d.fn(":url","Please enter a valid URL",function(b,a){return!a||u.test(a)});d.fn(":number","Please enter a numeric value.",function(b,a){return s.test(a)});d.fn("[max]","Please enter a value no larger than $1",function(b,a){if(""===a||m&&b.is(":date"))return!0;
var c=b.attr("max");return parseFloat(a)<=parseFloat(c)?!0:[c]});d.fn("[min]","Please enter a value of at least $1",function(b,a){if(""===a||m&&b.is(":date"))return!0;var c=b.attr("min");return parseFloat(a)>=parseFloat(c)?!0:[c]});d.fn("[required]","Please complete this mandatory field.",function(b,a){return b.is(":checkbox")?b.is(":checked"):!!a});d.fn("[pattern]",function(b,a){return""===a||RegExp("^"+b.attr("pattern")+"$").test(a)});d.fn(":radio","Please select an option.",function(b){var a=!1;
c("[name='"+b.attr("name")+"']").each(function(b,d){c(d).is(":checked")&&(a=!0)});return a?!0:!1});c.fn.validator=function(b){var a=this.data("validator");a&&(a.destroy(),this.removeData("validator"));b=c.extend(!0,{},d.conf,b);if(this.is("form"))return this.each(function(){var d=c(this);a=new n(d.find(":input"),d,b);d.data("validator",a)});a=new n(this,this.eq(0).closest("form"),b);return this.data("validator",a)}})(jQuery);
/*
 XDate v0.7
 Docs & Licensing: http://arshaw.com/xdate/
*/
var XDate=function(g,m,A,p){function f(){var a=this instanceof f?this:new f,c=arguments,b=c.length,d;typeof c[b-1]=="boolean"&&(d=c[--b],c=q(c,0,b));if(b)if(b==1)if(b=c[0],b instanceof g||typeof b=="number")a[0]=new g(+b);else if(b instanceof f){var c=a,h=new g(+b[0]);if(l(b))h.toString=w;c[0]=h}else{if(typeof b=="string"){a[0]=new g(0);a:{for(var c=b,b=d||!1,h=f.parsers,r=0,e;r<h.length;r++)if(e=h[r](c,b,a)){a=e;break a}a[0]=new g(c)}}}else a[0]=new g(n.apply(g,c)),d||(a[0]=s(a[0]));else a[0]=new g;
typeof d=="boolean"&&B(a,d);return a}function l(a){return a[0].toString===w}function B(a,c,b){if(c){if(!l(a))b&&(a[0]=new g(n(a[0].getFullYear(),a[0].getMonth(),a[0].getDate(),a[0].getHours(),a[0].getMinutes(),a[0].getSeconds(),a[0].getMilliseconds()))),a[0].toString=w}else l(a)&&(a[0]=b?s(a[0]):new g(+a[0]));return a}function C(a,c,b,d,h){var e=k(j,a[0],h),a=k(D,a[0],h),h=c==1?b%12:e(1),f=!1;d.length==2&&typeof d[1]=="boolean"&&(f=d[1],d=[b]);a(c,d);f&&e(1)!=h&&(a(1,[e(1)-1]),a(2,[E(e(0),e(1))]))}
function F(a,c,b,d){var b=Number(b),h=m.floor(b);a["set"+o[c]](a["get"+o[c]]()+h,d||!1);h!=b&&c<6&&F(a,c+1,(b-h)*G[c],d)}function H(a,c,b){var a=a.clone().setUTCMode(!0,!0),c=f(c).setUTCMode(!0,!0),d=0;if(b==0||b==1){for(var h=6;h>=b;h--)d/=G[h],d+=j(c,!1,h)-j(a,!1,h);b==1&&(d+=(c.getFullYear()-a.getFullYear())*12)}else b==2?(b=a.toDate().setUTCHours(0,0,0,0),d=c.toDate().setUTCHours(0,0,0,0),d=m.round((d-b)/864E5)+(c-d-(a-b))/864E5):d=(c-a)/[36E5,6E4,1E3,1][b-3];return d}function t(a){var c=a(0),
b=a(1),a=a(2),b=new g(n(c,b,a)),d=u(c),a=d;b<d?a=u(c-1):(c=u(c+1),b>=c&&(a=c));return m.floor(m.round((b-a)/864E5)/7)+1}function u(a){a=new g(n(a,0,4));a.setUTCDate(a.getUTCDate()-(a.getUTCDay()+6)%7);return a}function I(a,c,b,d){var h=k(j,a,d),e=k(D,a,d),b=u(b===p?h(0):b);d||(b=s(b));a.setTime(+b);e(2,[h(2)+(c-1)*7])}function J(a,c,b,d,e){var r=f.locales,g=r[f.defaultLocale]||{},i=k(j,a,e),b=(typeof b=="string"?r[b]:b)||{};return x(a,c,function(a){if(d)for(var b=(a==7?2:a)-1;b>=0;b--)d.push(i(b));
return i(a)},function(a){return b[a]||g[a]},e)}function x(a,c,b,d,e){for(var f,g,i="";f=c.match(M);){i+=c.substr(0,f.index);if(f[1]){g=i;for(var i=a,j=f[1],l=b,m=d,n=e,k=j.length,o=void 0,q="";k>0;)o=N(i,j.substr(0,k),l,m,n),o!==p?(q+=o,j=j.substr(k),k=j.length):k--;i=g+(q+j)}else f[3]?(g=x(a,f[4],b,d,e),parseInt(g.replace(/\D/g,""),10)&&(i+=g)):i+=f[7]||"'";c=c.substr(f.index+f[0].length)}return i+c}function N(a,c,b,d,e){var g=f.formatters[c];if(typeof g=="string")return x(a,g,b,d,e);else if(typeof g==
"function")return g(a,e||!1,d);switch(c){case "fff":return i(b(6),3);case "s":return b(5);case "ss":return i(b(5));case "m":return b(4);case "mm":return i(b(4));case "h":return b(3)%12||12;case "hh":return i(b(3)%12||12);case "H":return b(3);case "HH":return i(b(3));case "d":return b(2);case "dd":return i(b(2));case "ddd":return d("dayNamesShort")[b(7)]||"";case "dddd":return d("dayNames")[b(7)]||"";case "M":return b(1)+1;case "MM":return i(b(1)+1);case "MMM":return d("monthNamesShort")[b(1)]||"";
case "MMMM":return d("monthNames")[b(1)]||"";case "yy":return(b(0)+"").substring(2);case "yyyy":return b(0);case "t":return v(b,d).substr(0,1).toLowerCase();case "tt":return v(b,d).toLowerCase();case "T":return v(b,d).substr(0,1);case "TT":return v(b,d);case "z":case "zz":case "zzz":return e?c="Z":(d=a.getTimezoneOffset(),a=d<0?"+":"-",b=m.floor(m.abs(d)/60),d=m.abs(d)%60,e=b,c=="zz"?e=i(b):c=="zzz"&&(e=i(b)+":"+i(d)),c=a+e),c;case "w":return t(b);case "ww":return i(t(b));case "S":return c=b(2),c>
10&&c<20?"th":["st","nd","rd"][c%10-1]||"th"}}function v(a,c){return a(3)<12?c("amDesignator"):c("pmDesignator")}function y(a){return!isNaN(+a[0])}function j(a,c,b){return a["get"+(c?"UTC":"")+o[b]]()}function D(a,c,b,d){a["set"+(c?"UTC":"")+o[b]].apply(a,d)}function s(a){return new g(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds())}function E(a,c){return 32-(new g(n(a,c,32))).getUTCDate()}function z(a){return function(){return a.apply(p,
[this].concat(q(arguments)))}}function k(a){var c=q(arguments,1);return function(){return a.apply(p,c.concat(q(arguments)))}}function q(a,c,b){return A.prototype.slice.call(a,c||0,b===p?a.length:b)}function K(a,c){for(var b=0;b<a.length;b++)c(a[b],b)}function i(a,c){c=c||2;for(a+="";a.length<c;)a="0"+a;return a}var o="FullYear,Month,Date,Hours,Minutes,Seconds,Milliseconds,Day,Year".split(","),L=["Years","Months","Days"],G=[12,31,24,60,60,1E3,1],M=/(([a-zA-Z])\2*)|(\((('.*?'|\(.*?\)|.)*?)\))|('(.*?)')/,
n=g.UTC,w=g.prototype.toUTCString,e=f.prototype;e.length=1;e.splice=A.prototype.splice;e.getUTCMode=z(l);e.setUTCMode=z(B);e.getTimezoneOffset=function(){return l(this)?0:this[0].getTimezoneOffset()};K(o,function(a,c){e["get"+a]=function(){return j(this[0],l(this),c)};c!=8&&(e["getUTC"+a]=function(){return j(this[0],!0,c)});c!=7&&(e["set"+a]=function(a){C(this,c,a,arguments,l(this));return this},c!=8&&(e["setUTC"+a]=function(a){C(this,c,a,arguments,!0);return this},e["add"+(L[c]||a)]=function(a,d){F(this,
c,a,d);return this},e["diff"+(L[c]||a)]=function(a){return H(this,a,c)}))});e.getWeek=function(){return t(k(j,this,!1))};e.getUTCWeek=function(){return t(k(j,this,!0))};e.setWeek=function(a,c){I(this,a,c,!1);return this};e.setUTCWeek=function(a,c){I(this,a,c,!0);return this};e.addWeeks=function(a){return this.addDays(Number(a)*7)};e.diffWeeks=function(a){return H(this,a,2)/7};f.parsers=[function(a,c,b){if(a=a.match(/^(\d{4})(-(\d{2})(-(\d{2})([T ](\d{2}):(\d{2})(:(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/)){var d=
new g(n(a[1],a[3]?a[3]-1:0,a[5]||1,a[7]||0,a[8]||0,a[10]||0,a[12]?Number("0."+a[12])*1E3:0));a[13]?a[14]&&d.setUTCMinutes(d.getUTCMinutes()+(a[15]=="-"?1:-1)*(Number(a[16])*60+(a[18]?Number(a[18]):0))):c||(d=s(d));return b.setTime(+d)}}];f.parse=function(a){return+f(""+a)};e.toString=function(a,c,b){return a===p||!y(this)?this[0].toString():J(this,a,c,b,l(this))};e.toUTCString=e.toGMTString=function(a,c,b){return a===p||!y(this)?this[0].toUTCString():J(this,a,c,b,!0)};e.toISOString=function(){return this.toUTCString("yyyy-MM-dd'T'HH:mm:ss(.fff)zzz")};
f.defaultLocale="";f.locales={"":{monthNames:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),monthNamesShort:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),dayNames:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),dayNamesShort:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),amDesignator:"AM",pmDesignator:"PM"}};f.formatters={i:"yyyy-MM-dd'T'HH:mm:ss(.fff)",u:"yyyy-MM-dd'T'HH:mm:ss(.fff)zzz"};K("getTime,valueOf,toDateString,toTimeString,toLocaleString,toLocaleDateString,toLocaleTimeString,toJSON".split(","),
function(a){e[a]=function(){return this[0][a]()}});e.setTime=function(a){this[0].setTime(a);return this};e.valid=z(y);e.clone=function(){return new f(this)};e.clearTime=function(){return this.setHours(0,0,0,0)};e.toDate=function(){return new g(+this[0])};f.now=function(){return+new g};f.today=function(){return(new f).clearTime()};f.UTC=n;f.getDaysInMonth=E;if(typeof module!=="undefined"&&module.exports)module.exports=f;return f}(Date,Math,Array);

function parseDMY(str) {
	var parts = str.split('/');
	if (parts.length == 3) {
		return new XDate(parseInt(parts[2]), parseInt(parts[1] ? parts[1]-1 : 0), parseInt(parts[0]));
	}
}

function parseDMYWithTime(str) {
	var parts = str.split('-');
	
	if(parts.length == 2)
	{	
		var date = parts[0];
		var time = parts[1];
	
		var date = date.split("/")
		var time = time.split(":");
	
		if (date.length == 3 && time.length == 2) {
			return new XDate(parseInt(date[2]), parseInt(date[1] ? date[1]-1 : 0), parseInt(date[0]), time[0], time[1]);
		}
	}
}

XDate.prototype.getTimestamp = function()
{
	
	return Math.round(this.getTime() / 1000);
	
}

XDate.parsers.push(parseDMYWithTime);
XDate.parsers.push(parseDMY);


(function(){

	var methodMap = {
	    'create': 'create',
	    'update': 'update',
	    'delete': 'delete',
	    'read':   'search',
		'block':  'block',
		'emitir':  'emitir',
		'anular':  'anular'
	  };

	Backbone.sync = function(method, model, options) {
	    var segment = methodMap[method];

		if(options.alternate_url)
		{
			segment = options.alternate_url;
		}
		
		//prevents update if id is empty
		if(segment == "update" && model.get("id") == "")
		{
			segment = "create";
			model.unset("id");
		}

		var query = model.toJSON();

		if(segment == "search" && options.is_model == true)
		{
			segment = "get";
			query = {id:model.id};
		}
		
		if(segment == "search" && options.is_model == undefined)
		{
			query = {};
		}

	    // Default options, unless specified.
	    options || (options = {});

	    // Default JSON-request options.
	    var params = {type: "POST", dataType:"json"};

	    // Ensure that we have a URL.
	    if (!options.url) {
	      params.url = model.namespace+"/"+segment;
	    }
	
		if(	document.help_vars && 	document.help_vars.base_url)
		{
			params.url = document.help_vars.base_url+params.url;
		}

		params.data = {};
		params.data.data = JSON.stringify(query);
		
	    
	    return AppRequest(_.extend(params, options));
	  };
	
})()


Handlebars.registerHelper('draw_select_options', function(options, option_selected) {

    var result = "";
    $.each(options, function(index, option){
        var selected = "";
        if(option_selected == option.value) selected = 'selected="selected"';
        result += '<option '+selected+' value="'+option.value+'">'+option.label+'</option>';
    });
    return new Handlebars.SafeString(result);
});


Handlebars.registerHelper('translate_date_for_calendar', function(date) {

    if(date === undefined || date == "") return "";

	var date = new XDate(date);

	var result = date.toString("yyyy-MM-dd");
	
    return new Handlebars.SafeString(result);
});

Handlebars.registerHelper("object_each", function(obj, fn) {
    var buffer = "",
        key;
 
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            buffer += fn({key: key, value: obj[key]});
        }
    }
 
    return buffer;
});

Handlebars.registerHelper('draw_checked', function(current_id, values_to_check) {

    var result = "";

    if($.inArray(current_id, values_to_check) != -1)
    {
        result = "checked='checked'";
    }

    return new Handlebars.SafeString(result);
});

Handlebars.registerHelper('timestamp_to_string', function(timestamp) {

    if(timestamp === undefined || timestamp == "") return "";

    var date = new XDate(timestamp*1000);

    var result = date.toString("dd/MM/yyyy");

    return new Handlebars.SafeString(result);
});

Handlebars.registerHelper('toJSON', function(object) {

    var result = JSON.stringify(object);
    
    return new Handlebars.SafeString(result);
});

Handlebars.registerHelper('get_notas_class', function(nota) {

    var css = "label-important";
    if(nota <= 80 && nota >= 60) css = "label-warning";
    if(nota >= 80) css = "label-success";
    return new Handlebars.SafeString(css);
});

Handlebars.registerHelper('compare', function(lvalue, rvalue, options) {

    if (arguments.length < 3)
        throw new Error("Handlerbars Helper 'compare' needs 2 parameters");

    operator = options.hash.operator || "==";

    var operators = {
        '==':       function(l,r) { return l == r; },
        '===':      function(l,r) { return l === r; },
        '!=':       function(l,r) { return l != r; },
        '<':        function(l,r) { return l < r; },
        '>':        function(l,r) { return l > r; },
        '<=':       function(l,r) { return l <= r; },
        '>=':       function(l,r) { return l >= r; },
        'typeof':   function(l,r) { return typeof l == r; }
    }

    if (!operators[operator])
        throw new Error("Handlerbars Helper 'compare' doesn't know the operator "+operator);

    var result = operators[operator](lvalue,rvalue);

    if( result ) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }

});

$.tools.validator.fn("[class=cedula]", "",  function(el, value) {

  return Validator.cedula(value);

});

$.tools.validator.fn("[class=integer]", "",  function(el, value) {

  return Validator.integer(value);

});

$.tools.validator.fn("[class=float]", "",  function(el, value) {

  return Validator.floats(value);

});

$.tools.validator.fn("[class=retype_password]", "",  function(el, value) {

  var password_input = el.parents("form").find("input.password");

  return Validator.same_values(value, password_input.val());

});

$.tools.validator.fn("[class*=timespan_end]", "", function(el, value){

  var start_date_input = el.parents("form").find("input.timespan_start");
  var start_date = new XDate("11/07/2011-"+start_date_input.val()).getTimestamp();
  var end_date = new XDate("11/07/2011-"+value).getTimestamp();

  return (end_date > start_date);

})

$.tools.validator.fn("[class*=date_end]", "", function(el, value){

  var start_date_input = el.parents("form").find("input.date_start");
  var start_date = new XDate(start_date_input.val()).getTimestamp();
  var end_date = new XDate(value).getTimestamp();

  return (end_date >= start_date);

})

$.tools.validator.localize("es", {
  ":email"  		: 'Por favor, introduzca una dirección email válida.',
  "[required]" 		: 'Por favor, complete este campo obligatorio.',
  "[class=retype_password]" 		: 'Las contraseñas deben ser iguales.',
  "[class=cedula]" 		: 'Debes introducir una cédula valida.',
  "[class=enfermedad_code]" 		: 'Debes introcudir un código valido para el sistema seleccionado.'
  });

$.tools.dateinput.localize("es",  {
	   months:        "Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre",
	   shortMonths:   "ene,feb,mar,abr,may,jun,jul,ago,sep,oct,nov,dic",
	   days:          "Domingo,Lunes,Martes,Mi&eacute;rcoles,Jueves,Viernes,Sabado",
	   shortDays:     "Dom,Lun,Mar,Mie,Jue,Vie,Sab"
	});
$.tools.validator.addEffect("custom", function(errors, event) {
 
	$.each(errors, function(index, error) {

		var container = $(error.input).parents(".control-group");
		container.find("span.help-inline").remove();
		
		/*$.each(error.messages, function(index, message){
			$("<span class='help-inline'>"+message+"</span>").appendTo(container);
		})*/

	});
 
// the effect does nothing when all inputs are valid
}, function(inputs)  {
 
	$.each(inputs, function(index, input){
		var container = $(input).parents(".control-group");
		container.find("span.help-inline").remove();
	})

});
$.mask.definitions['H']='[012]';
$.mask.definitions['N']='[012345]';
$.mask.definitions['n']='[0123456789]';

$.mask.definitions['U']='[0123456789]';
$.mask.definitions['D']='[0123456789]';
$.mask.definitions['C']='[0123456789]';
function parseDMY(str) {
	var parts = str.split('/');
	if (parts.length == 3) {
		return new XDate(parseInt(parts[2]), parseInt(parts[1] ? parts[1]-1 : 0), parseInt(parts[0]));
	}
}

function parseDMYWithTime(str) {
	var parts = str.split('-');
	
	if(parts.length == 2)
	{	
		var date = parts[0];
		var time = parts[1];
	
		var date = date.split("/")
		var time = time.split(":");
	
		if (date.length == 3 && time.length == 2) {
			return new XDate(parseInt(date[2]), parseInt(date[1] ? date[1]-1 : 0), parseInt(date[0]), time[0], time[1]);
		}
	}
}

XDate.prototype.getTimestamp = function()
{
	return Math.round(this.getTime() / 1000);	
}

XDate.parsers.push(parseDMYWithTime);
XDate.parsers.push(parseDMY);


var EventBus = _.extend({}, Backbone.Events);

var Menu;
(function(){
	
	var views = [];
	
	Menu = function(container_id)
	{
		this.container = $("#"+container_id);
		this.bus = EventBus;
		this.views = [];
	};
	
	Menu.prototype.add_view = function(view, event_to_active)
	{
		if(event_to_active !== undefined)
		{
			this.bus.on(event_to_active, $.proxy(this.active_view, this, view));
		}
		
		views.push(view);
		this.views.push(view);
	};
	
	Menu.prototype.render = function()
	{
		$.each(this.views, $.proxy(function(index, view){this.render_view(view);}, this));
	};
	
	Menu.prototype.render_view = function(view)
	{
		view.render();
		view.atach(this.container);
	};
	
	Menu.prototype.unactive_all_views = function()
	{
		$.each(views, $.proxy(function(index, view){
			
			$(view.el).removeClass("active");
			
		}, this));
	};

	Menu.prototype.active_view = function(view)
	{		
		this.unactive_all_views();
		
		$(view.el).addClass("active");
	};
	
})();

(function(){
	
	AppRequest = function(options)
	{
		if(options === undefined) options = {};
		if(!options.type) options.type = "POST";
		if(!options.dataType) options.dataType = "json";
		if(options.startEvent === undefined) options.startEvent = true;

        options.complete = get_on_complete();
        options.error = get_on_error(options);
        options.success = get_on_success(options);		
		
		if(options.startEvent === true)
			EventBus.trigger("request:started");
			
		return $.ajax(options);
	};
	
	AppRequest.redirect = function(url)
	{
		window.location.href = url;
	};
	
	function get_on_complete()
	{
		return function()
		{
			EventBus.trigger("request:finished");
		};
	}
	
	function get_on_error(options)
	{
		if(options.error)
			var passed_error_function = options.error;
		
		return function(response)
		{
			EventBus.trigger("request:error", response, $.proxy(AppRequest, this, options));
			
			if(passed_error_function)
			{
				passed_error_function.apply(this, arguments);
			}	
		};
	}
	
	function get_on_success(options)
	{

		if(options.success)
			var passed_success_function = options.success;
		
		return function(response)
		{
			if(response.exception && response.exception != null)
			{
				EventBus.trigger("exception:thrown", response.exception);
				return false;
			}
			
			if($.inArray("error_not_loggedin", response.errors) != -1)
			{
				AppRequest.redirect("login");
			}
			
			if(passed_success_function)			
				passed_success_function.apply(this, arguments);
		};
	}
	
})();

var Auth;
(function(){
	
	var permissions = [];
	var current_user;
	
	Auth = function(){};
	
	Auth.prototype.check = function(to_check_perms)
	{	
		if(to_check_perms.length === 0) return true;
		
		for(var counter = 0; counter < to_check_perms.length; counter++)
		{
			if($.inArray(to_check_perms[counter], permissions) != -1)
				return true;
		}
		
		return false;
	};
	
	Auth.prototype.add_permission = function(permission)
	{
		permissions.push(permission);
	};
	
	Auth.prototype.set_current_user = function(user)
	{
		current_user = user;
	};
	
	Auth.prototype.get_current_user = function()
	{
		return current_user;
	};
	
})();

var Loader;
(function(){
	
    var current_requests = 0;

	Loader = function()
	{
		this.bus = EventBus;
		this.element = $("<span id='app_loader' class='label label-warning' style='display:none;position:absolute;z-index:9999'>Cargando...</span>");
		this.element.appendTo($(document.body));
		
		this.bus.on("request:started", $.proxy(this.start_loader, this));
		
		this.bus.on("request:finished", $.proxy(this.stop_loader, this));
		
		this.set_position();
		
		$(window).on("scroll", $.proxy(function(){this.set_position();}, this));
		$(window).on("resize", $.proxy(function(){this.set_position();}, this));	
	};
	
	Loader.prototype.start_loader = function()
	{
		this.element.css("display", "block");
		current_requests++;
	};
	
	Loader.prototype.stop_loader = function()
	{
		current_requests--;
		if(current_requests === 0 || current_requests < 0)
		{
			current_requests = 0;
			this.element.css("display", "none");
		}
			
	};
	
	Loader.prototype.set_position = function()
	{
		var window_width = $(window).width();
		var element_width = this.element.width();
		
		var center_position = (window_width / 2) - (element_width / 2);
		
		var scroll_top = $(window).scrollTop();
		this.element.css("left", center_position);
		this.element.css("top", scroll_top);
	};
	
}.call(this));

var MainMenu;
(function(){

  MainMenu = function(container_id)
  {
    Menu.call(this, container_id);
    this.set_up();
    var template_proxy = new TemplateProxy();
    template_proxy.get(MenuItem.prototype.template);
  };

  MainMenu.prototype = new Menu();
  MainMenu.prototype.constructor = MainMenu;

  MainMenu.prototype.set_up = function()
  {

    var cursos = new MenuItem({values:{url:"#cursos", icon:"icon-pencil", label:"Cursos"}});
    this.add_view(cursos, "cursos:section");

    if(auth.check(["Administrador", "Director", "Counter"])){
      var cursos_report = new MenuItem({values:{url:"#cursos-report", icon:"icon-pencil", label:"Reporte Cursos"}});
      this.add_view(cursos_report, "cursos-report:section");

      var alumnos = new MenuItem({values:{url:"#alumnos", icon:"icon-user", label:"Alumnos"}});
      this.add_view(alumnos, "alumnos:section");

      var alumnos_switch = new MenuItem({values:{url:"#alumnos-switch", icon:"icon-user", label:"Mover alumnos"}});
      this.add_view(alumnos_switch, "alumnos-switch:section");
    }

    if(auth.check(["Administrador", "Director"])){
      var users = new MenuItem({values:{url:"#users", icon:"icon-user", label:"Profesores"}});
      this.add_view(users, "users:section");

      var users_nomina = new MenuItem({values:{url:"#users-nomina", icon:"icon-pencil", label:"Nómina Profesores"}});
      this.add_view(users_nomina, "users-nomina:section");
    }

    if(auth.check(["Administrador"])){
      var roles = new MenuItem({values:{url:"#roles", icon:"icon-user", label:"Roles"}});
      this.add_view(roles, "roles:section");
    } 

    if(auth.check(["Administrador", "Director", "profesor"])){
      var sesiones = new MenuItem({values:{url:"#sesiones", icon:"icon-time", label:"Sesiones"}});
      this.add_view(sesiones, "sesiones:section");

      var examenes = new MenuItem({values:{url:"#examenes", icon:"icon-th-list", label:"Actividades"}});
      this.add_view(examenes, "examenes:section");
    }

    if(auth.check(["Administrador"])){      
      var pagos = new MenuItem({values:{url:"#pagos", icon:"icon-envelope", label:"Pagos"}});
      this.add_view(pagos, "pagos:section");
    }
  };

})();

(function($){  
	$.fn.swap_list = function() {  

		var left_select = this[0];
		var right_select = this[1];

		var SwapList = function(left_select, right_select)
		{
			this.left_select = left_select;
			this.right_select = right_select;
			this.create_buttons();
			this.set_up_events();
		};

		SwapList.prototype = {

			set_up_events: function()
			{
				$(this.right_select).delegate("option", "dblclick", $.proxy(right_to_left, this));
				$(this.left_select).delegate("option", "dblclick", $.proxy(left_to_right, this));

				this.buttons_container.find("a.left_to_right").on("click", $.proxy(left_to_right, this));
				this.buttons_container.find("a.right_to_left").on("click", $.proxy(right_to_left, this));
			},

			create_buttons: function()
			{
				this.buttons_container = $("<div class='switch_buttons'><a href='#' class='left_to_right icon-forward'></a><a href='#' class='right_to_left icon-backward'></a></div>");
				$(this.left_select).after(this.buttons_container);
			}
		};

		function left_to_right(event)
		{
			event.preventDefault();
			move_to_target(this.right_select, this.left_select);
		}

		function right_to_left(event)
		{
			event.preventDefault();
			move_to_target(this.left_select, this.right_select);
		}

		function move_to_target(target, origin)
		{
			var target_options = get_target_option_values(target);
			var options_to_move = $(origin).find("option:selected").filter(function(index, option){
				return ($.inArray($(option).val(), target_options) == -1);
			});

			check_for_repeated_options(target, origin);

			options_to_move.appendTo(target);
		}

		function check_for_repeated_options(target, origin)
		{
			var target_options = get_target_option_values(target);
			var repeated_options = $(origin).find("option:selected").filter(function(index, option){
				return ($.inArray($(option).val(), target_options) != -1);
			});

			var repeated_labels = [];

			$.each(repeated_options, function(index, option){
				repeated_labels.push($(option).html());
			});

			if(repeated_labels.length > 0) EventBus.trigger("swap_list:repeated:values", repeated_labels);
		}

		function get_target_options(target)
		{
			return $(target).find("option");
		}

		function get_target_option_values(target)
		{
			var values = [];
			$.each(get_target_options(target), function(index, option){
				values.push($(option).val());
			});

			return values;
		}

		return new SwapList(left_select, right_select);

	};  
})(jQuery); 
var TemplateProxy;

(function(){
	
    var cache = {};
	
	TemplateProxy = function()
	{
		this.bus = EventBus;
	};
	
	_.extend(TemplateProxy.prototype, Backbone.Events);
	
	TemplateProxy.prototype.get = function(path)
	{
		var url = path;
		
		if(document.help_vars)
			url = document.help_vars.base_url+path;
		
		if(cache[path])
			return emit.call(this, path, cache[path]);
		
        new AppRequest({
			type:"GET",
			dataType:"text",
			url:url,	
			cache:false,
			success: $.proxy(success, this, path)
		});
	};
	
	TemplateProxy.prototype.set_template = function(path, template)
	{
		cache[path] = template;
	};
	
	function success(path, response)
	{
		cache[path] = response;
		emit.call(this, path, response);
	}
	
	function emit(path, template)
	{
		this.bus.trigger("template:"+path+":complete", template);
		this.trigger("template:"+path+":complete", template);		
	}
	
})();

var Validator = {};
(function(){
	
	Validator.same_values = function(value1, value2)
	{
		return value1 == value2;
	};
	
	Validator.cedula = function(cedula)
	{	
		var not_only_numbers = !cedula.match(/^[0-9]+$/, cedula);
		var not_10_characters = (cedula.length != 10);
		var third_digit_greater_than_5 = parseInt((cedula.substring(2, 3)), 10) > 5;	
		
		if(not_only_numbers || not_10_characters || third_digit_greater_than_5) 
			return false;
		
		var province_code = parseInt(cedula.substring(0, 2), 10);
		if((1 > province_code) || (province_code > 24))
			return false;
			
		if(!Validator.luhn(cedula))
			return false;
		
		return true;
	};
	
	Validator.luhn = function(string)
	{
		var odd = false;
		var sum = 0;
        var digit;
		for (var i=0; i<string.length; i++ ) {
			digit = parseInt(string.substring(i,i+1), 10);
			if(odd)
				digit = digit * 2;
            sum += digit;
		}

		var mod10 = sum % 10;
		mod10 = 10 - mod10; 
		if (mod10==10) {      
			mod10=0;
		}
		return mod10;
	};

	Validator.integer = function(to_check)
	{
		if(to_check === "") return true;
		
		var matches = to_check.match(/^\d+$/);
		return (matches !== null);
	};
	
	Validator.floats = function(to_check)
	{
		if(to_check === "") return true;

		var matches = to_check.match(/^\d+(\.\d+)?$/);
		return (matches !== null);
	};
	
})();

(function(){
    
    var root = this;
    var ViewSwitcher;
   
    ViewSwitcher = root.ViewSwitcher = {};
    ViewSwitcher.views = {};
    
    var last_view_rendered;
    var last_container_rendered;

    ViewSwitcher.load = function(view, container_id)
    {
        var previous_view = get_previous_view(container_id);
 
        if(last_view_rendered == view && last_container_rendered == container_id) return;
        if(previous_view) previous_view.detach();
 
        attach_view(view, container_id);
        last_view_rendered = view;
        last_container_rendered = container_id;
    };

    function attach_view(view, container_id)
    {
        view.atach($('#'+container_id));
        view.delegate_events();
        ViewSwitcher.views[container_id] = view;
    }

    function get_previous_view(container_id)
    {
        if(ViewSwitcher.views[container_id] !== undefined) return ViewSwitcher.views[container_id];
        return false;
    }

}.call(this));

var BaseView = Backbone.View.extend({

  template:"default",

  renderer:undefined,

  initialize: function(options)
  {
    this.template_values = {};

    this.template_proxy = new TemplateProxy();

    if(options && options.values)
      this.template_values = options.values;

    if(options && options.template)
      this.template = options.template;	

    this.set_template_file(this.template);

    this.bus = EventBus;

    this.permissions = [];

    this.on("got:template", $.proxy(this.render_template, this));

    this.modal_mode = false;
  },

  add_permission: function(permission)
  {
    this.permissions.push(permission);
  },

  set_template_file: function(template_file)
  {
    this.template = template_file;

    this.template_proxy.on("template:"+this.template+":complete", $.proxy(function(template){
      this.set_template(template);
      this.trigger("got:template");
    },this));
  },

  set_template: function(template)
  {
    this.renderer = Handlebars.compile(template);
  },

  request_template: function()
  {
    this.template_proxy.get(this.template);
  },

  render_template: function()
  {	
    if(!this.can_render()) return false;

    var output = "";

    if(this.renderer)
      output = this.renderer(this.template_values);

    $(this.el).html(output);
  },

  render : function() {

    this.request_template();

    return this;
  },

  detach: function()
  {
    $(this.el).detach();
    this.remove_inner_elements();
  },

  remove_inner_elements: function()
  {
    $(this.el).children().remove();
  },

  atach: function(container)
  {
    $(this.el).appendTo(container);
  },

  as_modal: function(as_modal)
  {
    if(as_modal === undefined) as_modal = true;
    this.modal_mode = as_modal;
  },

  delegate_events: function()
  {
    this.delegateEvents();
  },

  resubscribe_template_event: function()
  {
    this.off("got:template");
    this.on("got:template", $.proxy(function(){
      this.trigger_can_render();
    }, this));
  },

  trigger_can_render: function()
  {
    this.trigger("can:render");
  },

  can_render: function()
  {
    if(typeof auth == "undefined")
      return true;

    if(typeof auth != "undefined" && auth.check(this.permissions))
      return true;

    return false;	
  }
});

var BaseForm = BaseView.extend({
	
	bus:EventBus,
	
	events: {
		"submit form"         : "submit_event",	
		"click a.cancel"      : "cancel_event",
		"click .save_and_new" : "save_and_new_event",
		"keyup input.masked-time" :"check_time_event"
	},
	
	initialize:function(options)
	{
		BaseView.prototype.initialize.call(this, options);
		if(options && options.namespace)
			this.namespace = options.namespace;
		
		this.no_url = false;
		this.error_view = new ErrorView();
		this.template_helpers = {};
	},

	save_and_new_event: function(event)
	{
		event.preventDefault();
		this.save_and_new();
	},
	
	check_time_event: function(event)
	{
		var input = event.currentTarget;
		var value = $(input).val();

		if(value.match(/^2[5-9].*/))
		{
			$(input).unmask();
			$(input).val("2400");
			$(input).mask("Hn:Nn");
		}	
		
	}, 

	save_and_new: function()
	{
		this.submit(true);
	},

	no_url_mode: function()
	{
		this.no_url = true;
	},
	
	cancel_event: function(event)
	{
		if(this.modal_mode || this.no_url)
		{
			event.preventDefault();
			this.trigger("cancel");
		}
	},
	
	set_values: function(values)
	{
		this.template_values = values; 
	},
	
	render_template: function()
	{
		this.template_values = _.extend(this.template_values, this.template_helpers);
		BaseView.prototype.render_template.call(this);
		$(this.el).find("[type=date]").attr("autocomplete", "off");
		$(this.el).find("[type=date]").dateinput({trigger:true, lang: "es", format:"dd/mm/yyyy", firstDay: 1, selectors: true, yearRange:[-80, 5]});
		$(this.el).find("form").validator(this.get_validator_options());
		$($(this.el).find("input, select")[0]).focus();
		$(this.el).find("select.searchable").searchable({maxMultiMatch: 500});

		var time_inputs = $(this.el).find(".masked-time");
		time_inputs.mask("Hn:Nn");
	},
	
	submit_event: function(e)
	{
		e.preventDefault();
		this.submit();
	},

	submit: function(save_and_new)
	{
		if(this.validate_form())
		{
			var values = this.get_values();
			this.bus.trigger(this.namespace+":form:submit", values, save_and_new);
			this.trigger("submit", values, save_and_new);
            return true;
		}	
	
        this.focus_first_error_field();
	},

	focus_first_error_field: function()
	{
		var error_field = $($(this.el).find("div.error")[0]);
		error_field.find("input").focus();
	},
	
	validate_form: function()
	{
		var form_validator = $(this.el).find("form").data("validator");
		return form_validator.checkValidity();
	},
	
	get_values: function()
	{
		var fields = $(this.el).find("form :not(.ignore)").serializeArray();
		fields = this.add_unchecked_checkboxes(fields);
		
        var result = {};
		
		$.each(fields, $.proxy(function(index, field){
			
			result = this.extract_field_value(field, result);

        }, this));

        result = this.add_json_fields(result);
	
		return result;
	},

	add_json_fields: function(fields) 
	{
		var json_fields = $(this.el).find("input.json");

		$.each(json_fields, $.proxy(function(index, field){
			
			fields[$(field).attr("name")] = $.parseJSON($(field).val());

		}, this));

		return fields;
	}, 

	add_unchecked_checkboxes: function(fields)
	{

		var selector = "input[type='checkbox']:not(:checked)";
		$(this.el).find(selector).each(function(index, input){

			fields.push({name:$(input).attr("name"), value:0});
			
		});

		return fields;

	},

    extract_field_value:  function(field, result) 
    {
        if(this.parse_object_format(field.name))
            return this.extract_object_value(field, result);

        result[field.name] = field.value;
        
        return result;
    },
	
	extract_object_value: function(field, result)
	{
        var matchObject = this.parse_object_format(field.name); 
		var objectName = matchObject[1];
		var keyName = matchObject[2];	
	
		if(!result[objectName])
            result[objectName] = {};
	    
        result[objectName][keyName] = field.value;
		
        return result;
	},
	
	parse_object_format: function(field_name)
	{
		return field_name.match(/(.*)\[(.*)\]/);
	},
	
	render_errors: function(errors)
	{
		this.error_view.template_values = {errors:errors};
		this.error_view.render();	
		$(this.el).before($(this.error_view.el));
	},
	
	clear_errors: function()
	{
		if(!this.error_view) return;
		this.error_view.template_values = {errors:[]};
		this.error_view.detach();
	},
	
	detach: function()
	{
		if(this.error_view)
			$(this.error_view.el).detach();
		BaseView.prototype.detach.call(this);
	},
	
	validation_fail: function(event, validations)
	{	
		$.each(validations, function(index, validation){
			$(validation.input).parents(".control-group").removeClass("success");
			$(validation.input).parents(".control-group").addClass("error");
        });
	},
	
	validation_success: function(event, validations)
	{	
		$.each(validations, function(index, input){
			$(input).parents(".control-group").removeClass("error");
			$(input).parents(".control-group").addClass("success");
        });
	},
	
	get_validator_options: function()
	{
		var validator_options = {};
		validator_options.inputEvent = "blur";
		validator_options.formEvent = null;
		validator_options.effect = 'custom';
		validator_options.lang = 'es';		
		validator_options.onFail = $.proxy(this.validation_fail, this);
		validator_options.onSuccess = $.proxy(this.validation_success, this);
		return validator_options;
	}
	
});

var BaseListView = BaseView.extend({
	
	render_template: function()
	{
		this.template_values.collection = this.collection.toJSON();
		BaseView.prototype.render_template.call(this);
	}

});
var BaseModel = Backbone.Model.extend({
	
	bus:EventBus,
	
	validations:{},
	
	namespace:"default",
	
	data_types : {},

	initialize:function(attributes)
	{
		Backbone.Model.prototype.initialize.call(this, attributes);
		this.on("error", this.error);
		this.on("add", $.proxy(this.transform_input_data, this));
	},

	error: function(model, data)
	{
		this.bus.trigger(this.namespace+":data:error");
	},
	
	set_auth_namespace: function(namespace)
	{
		this.auth_namespace = namespace;
	},
	
	add_validation: function(attribute, validation)
	{
		this.validations[attribute] = validation;
	},

	trigger_response_errors: function(errors, model)
	{	
		this.bus.trigger(this.namespace+":response:error", errors, model);
		this.trigger(this.namespace+":response:error", errors, model);
		this.trigger("error", errors, model);
	},
	
	success_callback: function(type, model, data)
	{		
		if(data.errors && data.errors.length > 0)
		{
			this.trigger_response_errors(data.errors, model);
			return false;
		}

		this.transform_input_data();

		this.bus.trigger(this.namespace+":"+type+":success", model, data);
		this.trigger(this.namespace+":"+type+":success", model, data);
		this.trigger(type, model, data);
	},

	save: function(attributes)
	{	
		if(this.can("create"))
		{
			var callbacks = {success: $.proxy(this.success_callback, this, "save")};
			this.transform_output_data();
			Backbone.Model.prototype.save.call(this, attributes, callbacks);
		}
		else
			this.bus.trigger("authorization:error");
	},

	transform_input_data: function()
	{
		this.transform_data("input");
	},

	transform_output_data: function()
	{
		this.transform_data("output");
	},

	transform_data: function(transform_type)
	{
		$.each(this.toJSON(), $.proxy(function(property, value){
		
			if(this.data_types[property])
				this.set(property, this.data_types[property][transform_type](value));
				
		}, this));
	},
	
	destroy: function(options)
	{	
		if(this.can("delete"))
		{
			if(options === undefined)
				options = {};

			var callbacks = {success: $.proxy(this.success_callback, this, "delete")};
			options = $.extend(callbacks, options);
			Backbone.Model.prototype.destroy.call(this, callbacks);
		}
		else
			this.bus.trigger("authorization:error");
	},
	
	fetch: function(options)
	{
		if(this.can("get"))
		{
			if(options === undefined)
				options = {};
			
			var callbacks = {success: $.proxy(this.success_callback, this, "fetch")};
		
			options = $.extend(callbacks, options);
			options.is_model = true;
		
			Backbone.Model.prototype.fetch.call(this, options);
		}
		else
			this.bus.trigger("authorization:error");
	},
	
	block: function(block, options)
	{
		if(this.can("block"))
		{
			if(block === undefined)
			{
				block = true;
			}
			
			this.set("blocked", block);
			
			var action = "block";
			if(block === false)
				action = "unblock";
			
			if(options === undefined)
				options = {};
			
				var callbacks = {success: $.proxy(this.success_callback, this, action, this)};
				Backbone.sync.call(this, "block", this, callbacks);
		}
		else
			this.bus.trigger("authorization:error");
	},
	
	parse: function(response, xhr)
	{		
		if(response.data)
			return response.data;
		return response;	
	},
	
	can: function(permission)
	{
		if(this.auth_namespace === undefined)
			return true;
		
		if(typeof auth === "undefined")
			return true;
			
		if(typeof auth !== "undefined" && auth.check([this.auth_namespace+permission]))
			return true;
		
		return false;
	}
});

var BaseController;
(function(){

    var container_id = "main_container";

    BaseController = function(router)
	{
		this.router = router;
		this.container = $("#"+container_id);
		this.bus = EventBus;
		this.modal_mode = false;
		this.modal_id = "modal_"+Math.floor((Math.random()*1000000)+1); 
		this.modal_container = $("<div id="+this.modal_id+" class='modal custom-modal' data-dynamic='true'><button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button></div>");
	};

	BaseController.prototype.options = {
		container_id:"main_container"
	};

	BaseController.prototype.as_modal = function(as_modal)
	{
		if(as_modal === undefined)
			this.modal_mode = true;
		else
			this.modal_mode = as_modal;
	};

	BaseController.prototype.modal = function(view, modal_options, as_modal)
	{
		if(as_modal === undefined) as_modal = true;
			
		$(this.modal_container).modal(modal_options);
		ViewSwitcher.load(view, this.modal_id);
		
		view.as_modal(as_modal);
	};
	
	BaseController.prototype.close_modal = function()
	{
		$(this.modal_container).modal("hide");
	};

	BaseController.prototype.view = function(view)
	{	
		if(this.modal_mode) 
		{
			this.modal(view);
			return;
		}	
		
		if($('#'+this.modal_id))
			$('#'+this.modal_id).modal("hide");
		
		ViewSwitcher.load(view, this.container.attr('id'));
	};
	
})();

var BooleanType = {
	
	output: function(value)
	{
		return (value == "on" || value == 1 || value == "true");
	},

	input: function(value)
	{
		return (value == 1);
	}

}
var DateType = {

    output: function(value)
    {
        return new XDate(value).getTimestamp();
    },

    input: function(value)
    {
        return new XDate(value*1000).toString("dd/MM/yyyy");
    }

};

var DefaultType = {

    output: function(value)
    {
        return value;
    },

    input: function(value)
    {
        return value;
    }

};

window.auth = {
    check: function() {
        return true;
    }
};
var BaseCollection = Backbone.Collection.extend({
  model: BaseModel,

  namespace:"",

  bus:EventBus,

  initialize: function()
  {
    this.status = {};
    this.auth_namespace = undefined;
  },

  set_auth_namespace: function(namespace)
  {
    this.auth_namespace = namespace;
  },

  fetch: function(options) 
  {
    if(this.can("search"))
      {
        if(options === undefined) options = {};
        options = this.add_status_to_options(options);
        options.success = $.proxy(this.fetch_success, this);
        Backbone.Collection.prototype.fetch.call(this, options);
      }
      else
        this.bus.trigger("authorization:error");
  },

  fetch_success: function(collection, response)
  {	
    this.trigger("fetch:success", response);
  },

  parse: function(response, xhr) 
  {
    return response.data.list;
  },

  reset_status: function()
  {
    this.status = {};
  },

  add_filter: function(property, pattern, method)
  {
    if(this.status.filters === undefined) this.status.filters = [];

    this.remove_filter(property);

    this.status.filters.push({'property':property,'pattern':pattern,'method':method});
  },

  remove_filter: function(property)
  {	
    if(this.status.filters === undefined) return;
    this.status.filters = jQuery.grep(this.status.filters, function(filter) {
      return filter.property != property;
    });
  },

  set_limit: function(limit)
  {
    this.status.paginator = {'page_size':limit};
  },

  set_order: function(field, direction)
  {
    this.status.order = {'field':field,'direction':direction};
  },

  add_status_to_options: function(options)
  {
    options.data = {data: JSON.stringify(this.status)};
    return options;
  },

  can: function(permission)
  {
    if(this.auth_namespace === undefined)
      return true;

    if(typeof auth == "undefined")
      return true;

    if(typeof auth != "undefined" && auth.check([this.auth_namespace+permission]))
      return true;

    return false;
  },

  add: function(models, options)
  {
    if(options === undefined)
      options = {};

    options["silent"] = false;
    Backbone.Collection.prototype.add.call(this, models, options);
  }
});

var BaseRouter = Backbone.Router.extend({

	bus:EventBus,
	
	routes: {"":""},
	
	create_namespaced_route: function(route, event_name, namespace)
	{
		this.route(route, event_name, $.proxy(function(){
			var args = Array.prototype.slice.call(arguments);
		    args.unshift(event_name);
			this.bus.trigger.apply(this.bus, args);
			this.bus.trigger(namespace+":section");
		},this));
	},
	
	create_crud_for: function(namespace)
	{
		this.create_namespaced_route(namespace, namespace+":route:index", namespace);
		this.create_namespaced_route(namespace+"/new", namespace+":route:new", namespace);
		this.create_namespaced_route(namespace+"/edit/:id", namespace+":route:edit", namespace);
		this.create_namespaced_route(namespace+"/show/:id", namespace+":route:show", namespace);
	}
	
});

var ConfirmModal = BaseView.extend({
	
	template: "public/templates/confirm_modal.html",
	
	events:{
		"click a.execute":"execute_action",
		"click a.close_modal":"close"
	},
	
	action:function(){},
	
	execute_action: function(event)
	{
		if(event)
			event.preventDefault();
		
		this.action();
		this.close(event);
	},
	
	close: function(event)
	{
		if(event)
			event.preventDefault();
			
		$(this.el).modal("hide");
	},
	
	set_action: function(action)
	{
		this.action = action;
	},
	
	confirm: function(message, action)
	{
		this.action = action;
		this.template_values.message = message;
		this.render();
		
		$(this.el).modal();
	}
	
});
var CrudController;
(function(){

  CrudController = function(namespace, router)
  {
    BaseController.call(this, router);

    this.no_url = false;

    this.namespace = namespace;
    this.set_up_model();
    this.set_up_collection();
    this.set_up_list();
    this.set_up_form();
    this.set_up_modal();

    set_up_event_subscription.call(this);

    if(namespace && router)
      {
        this.router.create_crud_for(namespace);
        this.subscribe_to_crud(namespace);
      }

      this.feedback_view = new FeedbackView();
  };

  CrudController.prototype = new BaseController();
  CrudController.prototype.constructor = CrudController;

  CrudController.prototype.index = function()
  {        
    $(this.list.el).empty();
    this.collection.fetch();
    this.view(this.list);
  }; 

  CrudController.prototype.add = function()
  {
    this.form.template_values = {};
    this.form.render();
    this.show_form();
  };

  CrudController.prototype.show_form = function(id)
  {
    this.view(this.form);
  };

  CrudController.prototype.edit = function(id)
  {	
    this.form.template_values = {};
    $(this.form.el).empty();
    var model = new this.model({id:id});
    model.on(this.namespace+":fetch:success", $.proxy(this.edit_form, this));
    model.fetch();
    this.show_form();
  };

  CrudController.prototype.render_list = function()
  {
    this.list.render();
  };

  CrudController.prototype.set_auth_namespace = function(namespace)
  {
    this.collection.set_auth_namespace(namespace);
    this.model.prototype.auth_namespace = namespace;
  };

  CrudController.prototype.edit_form = function(model)
  {
    this.form.set_values(model.toJSON());
    this.form.render();
  };

  function save_form(data, save_and_new)
  {
    var model = new this.model(data);
    model.on(this.namespace+":response:error", $.proxy(show_form_errors, this)); 
    model.on(this.namespace+":save:success", $.proxy(this.form_save_success, this, save_and_new));
    model.save();
  }

  CrudController.prototype.form_save_success = function(save_and_new)
  {
    if(save_and_new === true)
      {
        this.feedback_view.template_values.message = this.get_feedback_message_on_save_success();
        this.feedback_view.atach($("#content"));
        this.feedback_view.render();
        if(document.location.hash.match(/new/))
          this.router.navigate(this.namespace, true);

        this.router.navigate(this.namespace+"/new", true);

        return;
      }

      if(this.modal_mode || this.no_url)
        this.index();
      else
        this.router.navigate(this.namespace, true);
  };

  CrudController.prototype.get_feedback_message_on_save_success = function() 
  {
    return "Datos Guardados correctamente !";
  };

  CrudController.prototype.modal = function(view, modal_options, as_modal)
  {
    this.form.clear_errors();
    BaseController.prototype.modal.call(this, view, modal_options, as_modal);
  };

  function show_form_errors(errors)
  {
    this.form.render_errors(errors);
  }

  CrudController.prototype.set_up_model = function()
  {
    this.model = BaseModel.extend({namespace:this.namespace});
  };

  CrudController.prototype.set_up_collection = function()
  {
    this.collection = new BaseCollection({model:new this.model()});
    this.collection.namespace = this.namespace;
  };

  CrudController.prototype.set_up_list = function()
  {
    this.list = new TableView({collection:this.collection});
  };

  CrudController.prototype.set_up_form = function()
  {
    this.form = new BaseForm();
    this.form.namespace = this.namespace;
  };

  CrudController.prototype.set_up_modal = function()
  {
    this.confirm_modal = new ConfirmModal();
  };

  CrudController.prototype.no_url_mode = function()
  {
    this.no_url = true;
    this.form.no_url_mode();
    this.list.no_url_mode();		
  };

  CrudController.prototype.subscribe_to_crud = function(namespace)
  {
    this.bus.on(namespace+":route:index", $.proxy(this.index, this));
    this.bus.on(namespace+":route:show", $.proxy(this.show, this));
    this.bus.on(namespace+":route:new", $.proxy(this.add, this));
    this.bus.on(namespace+":route:edit", $.proxy(this.edit, this));
  };

  CrudController.prototype.get_delete_message = function(model)
  {
    return "Seguro que quiere eliminar este registro ?";
  };

  CrudController.prototype.get_block_message = function(model)
  {
    return "Seguro que quiere bloquear este registro ?";
  };

  CrudController.prototype.get_unblock_message = function(model)
  {
    return "Seguro que quiere desbloquear este registro ?";
  };

  CrudController.prototype.delete_model = function(id, version)
  {
    var model = new this.model({id:id, version:version});
    $(this.list.el).empty();
    model.on(this.namespace+':delete:success', $.proxy(function(response){this.index();}, this));
    model.on(this.namespace+':response:error', $.proxy(function(errors, model){this.delete_model_error(errors, model);}, this));
    model.destroy({wait: true});
  };

  CrudController.prototype.delete_model_error = function(errors, model){};

  CrudController.prototype.block_model = function(id, version)
  {
    var model = new this.model({id:id, version:version});
    model.on(this.namespace+':block:success', $.proxy(function(response){this.index();}, this));
    model.on(this.namespace+':response:error', $.proxy(function(errors, model){this.block_model_error(errors, model);}, this));
    model.block(true);
  };

  CrudController.prototype.block_model_error = function(errors, model){};

  CrudController.prototype.unblock_model = function(id, version)
  {
    var model = new this.model({id:id, version:version});
    model.on(this.namespace+':unblock:success', $.proxy(function(response){this.index();}, this));
    model.block(false);
  };

  function confirm_delete(id)
  {
    var model = this.collection.get(id);
    var version = model.attributes.version;
    var message = this.get_delete_message(model);
    this.confirm_modal.confirm(message, $.proxy(this.delete_model, this, id, version));
  }

  function confirm_block(id)
  {
    var model = this.collection.get(id);
    var version = model.attributes.version;
    var message = this.get_block_message(model);
    this.confirm_modal.confirm(message, $.proxy(this.block_model, this, id, version));
  }

  function confirm_unblock(id)
  {
    var model = this.collection.get(id);
    var version = model.attributes.version;
    var message = this.get_unblock_message(model);
    this.confirm_modal.confirm(message, $.proxy(this.unblock_model, this, id, version, false));
  }

  function set_up_event_subscription()
  {
    this.form.on("submit", $.proxy(save_form, this));
    this.form.on("ui:cancel", $.proxy(function(){this.index();}, this));
    this.list.collection.on('fetch:success', $.proxy(this.render_list, this));
    this.list.on('ui:delete', $.proxy(confirm_delete, this));
    this.list.on('ui:block', $.proxy(confirm_block, this));
    this.list.on('ui:unblock', $.proxy(confirm_unblock, this));
    this.list.on("ui:refresh", $.proxy(function(){this.index();}, this));
    this.list.on("ui:edit", $.proxy(function(id){this.edit(id);}, this));
    this.list.on("ui:new", $.proxy(function(){this.add();}, this));
  }

})();

var ErrorView = BaseView.extend({
	
	tagName: "ul",
	
	template: "public/templates/errors_list.html",
	
	className: "alert alert-error",
	
	initialize: function(options)
	{
		BaseView.prototype.initialize.call(this, options);
		this.translated_errors = {};
	    //this.translated_errors["error_consultorio_not_exist"] = "La consultorios no existe";
	},
	
	render_template: function()
	{
		if(this.template_values.errors !== undefined)
		{
			var errors = this.get_translated_errors();
			this.template_values.errors = errors;
			BaseView.prototype.render_template.call(this);
		}
	},
	
	get_translated_errors: function()
	{
		
		var result = [];
		
		$.each(this.template_values.errors, $.proxy(function(index, error){
			
			if(this.translated_errors[error])
				result.push(this.translated_errors[error]);
			else
				result.push(error);
			
        },this));
		
		return result;
	}
	
});

var FeedbackView = BaseView.extend({

	template : "public/templates/feedback_view.html",

	initialize: function(options)
	{
		BaseView.prototype.initialize.call(this, options);

		$(window).on("scroll", $.proxy(function(){this.set_position();}, this));
		$(window).on("resize", $.proxy(function(){this.set_position();}, this));
		$(this.el).addClass("custom-feedback");
	},

	render_template: function()
	{
		$(this.el).fadeIn(1);
		BaseView.prototype.render_template.call(this);
		this.set_position();

		setTimeout($.proxy(function(){
			$(this.el).fadeOut();
		},this), 2000);
	},

	set_position: function()
	{
		var window_width = $(window).width();
		var element_width = $(this.el).width();
		
		var center_position = (window_width / 2) - (element_width / 2);
		
		var scroll_top = $(window).scrollTop();
		$(this.el).css("left", center_position);
		$(this.el).css("top", scroll_top+10);
	}
});
var MenuItem = BaseView.extend({
	
	template:"public/templates/menu_item.html",
	
	tagName:"li"
	
});

var SearchForm = BaseForm.extend({

  template:"public/templates/search_form.html",

  transform_dates : true,

  initialize: function()
  {
    BaseForm.prototype.initialize.call(this, {namespace:"search"});
  },

  submit: function()
  {
    var values = this.get_values();

    var search_term = values.search;

    if(this.transform_dates && search_term.match(/\d\d\/\d\d\/\d\d\d\d/))
      search_term = new XDate(search_term).getTimestamp();

    this.trigger("submit", search_term);
    this.set_status(values.search);
  },

  set_status: function(search_term)
  {
    this.search_term = search_term;
    this.render_status();
  },

  render_template: function()
  {
    if(!this.rendered)
      BaseForm.prototype.render_template.call(this);

    this.rendered = true;
    this.render_status();
  },

  render_status: function()
  {
    if(this.search_term !== undefined)
      $(this.el).find("[name='search']").val(this.search_term);
  }
});

var TableControls = BaseView.extend({
	
	template:"public/templates/table_controls.html",
	
	className:"table_controls_container",
	
	events:{
		"click button.refresh":"refresh",
		"click a.new":"new_event"
	},
	
	initialize: function(options)
	{
		BaseView.prototype.initialize.call(this, options);
		if(this.template_values.can_create === undefined)
		{
			this.template_values.can_create = true;
		}
		
		this.no_url = false;
	},
	
	no_url_mode: function()
	{
		this.no_url = true;
	},
	
	refresh: function(event)
	{
		event.preventDefault();
		this.trigger("ui:refresh");
	},
	
	new_event: function(event)
	{
		if(this.modal_mode || this.no_url)
		{
			event.preventDefault();
			this.trigger("ui:new");
		}
	}
	
});

var TableFooter = BaseView.extend({
	
	template:"public/templates/table_footer.html",
	
	events:{
		"click a.limit":"limit"
	},
	
	limit: function(event)
	{
		event.preventDefault();
		var limit = $(event.currentTarget).attr("data"); 
		this.trigger("table:limit", limit);
		this.set_status(limit);
	},
	
	set_status: function(status)
	{
		this.status = status;
		this.switch_status();
	},
	
	render_template: function()
	{
		BaseView.prototype.render_template.call(this);
		this.switch_status();
		this.show_active_options();
	},
	
	switch_status: function()
	{
		if($(this.el).children() === 0) return;
		
		$(this.el).find(".active").removeClass("active");
		$(this.el).find("[data='"+this.status+"']").parent().addClass("active");
	},
	
	set_number_of_entries: function(number)
	{
		this.template_values.number_of_entries = number;
		this.template_values.show_label = "";
		if(number > 50)
					this.template_values.show_label = "Mostrar:";
	},
	
	show_active_options: function()
	{
		var number_of_entries = this.template_values.number_of_entries;
		var options = $(this.el).find("[data]");
		
		$.each(options, $.proxy(function(index, option){
			
			if($(options[index-1]).attr("data") < number_of_entries)
			{
				$(options[index-1]).parent().removeClass("hidden");
				$(option).parent().removeClass("hidden");
			}
			
		}, this));
	}
	
});

var TableView = BaseListView.extend({
	
	events: {
		"click a.delete": "delete_event",
		"click a.order": "order_event",
		"click a.block0": "block_event",
		"click a.block1": "unblock_event",
		"click a.edit": "edit_event",
		"click a.select": "row_selected",
		"dblclick tbody tr": "row_dbl_click_event"
	}, 
	
	initialize:function(options)
	{ 
		BaseListView.prototype.initialize.call(this, options);
		this.set_up_controls(options);
		this.set_up_events();
		//this.collection.set_limit(5000);
		this.footer.set_status(50);
		this.el_container = $("<div></div>");
		$(this.el).appendTo(this.el_container);
		
		this.no_url = false;
	},
	
	row_dbl_click_event: function(event)
	{
		event.stopPropagation();	
		var edit_anchor = $(event.currentTarget).find("a.edit");
		if(edit_anchor.length == 1 && !this.no_url)
			document.location.href = edit_anchor.attr("href");
			
		if(edit_anchor.length == 1 && this.no_url)
			edit_anchor.click();
			
	},
	
	delegate_events: function()
	{
		this.delegateEvents();
		this.controls.delegate_events();
		this.footer.delegate_events();
		this.search_form.delegate_events();		
	},
	
	no_url_mode: function()
	{
		this.no_url = true;
		this.controls.no_url_mode();
	},
	
	set_up_controls: function(options)
	{
		var control_values = {};
		if(options && options.control_values)
			control_values = options.control_values;
			
		this.controls = new TableControls({values:control_values});
		this.search_form = new SearchForm();
		this.footer = new TableFooter();
	},
	
	row_selected: function(event)
	{
		event.preventDefault();
		var id = $(event.currentTarget).attr("data");
		this.trigger("ui:row:selection", this.collection.get(id));
	},
	
	edit_event:function(event)
	{
		if(this.modal_mode || this.no_url)
		{
			event.preventDefault();
			var id = $(event.currentTarget).attr("data");
			this.trigger("ui:edit", id);
		}
	},
	
	unblock_event: function(event)
	{
		event.preventDefault();
		var id = $(event.currentTarget).attr("data");
		this.trigger("ui:unblock", id);
	},
	
	block_event: function(event)
	{
		event.preventDefault();
		var id = $(event.currentTarget).attr("data");
		this.trigger("ui:block", id);
	},
	
	delete_event: function(event)
	{
		event.preventDefault();
		var id = $(event.currentTarget).attr("data");
		this.trigger("ui:delete", id);
	},
	
	order_event: function(event)
	{
		event.preventDefault();
		var property = $(event.currentTarget).attr("data");

		var order_type = "asc";
		var current_order_type = false;
		
		if(current_order_type = $(event.currentTarget).attr("order-type"))
		{
			if(current_order_type == order_type) order_type = "desc";
		}
		
		this.set_order_status(property, order_type);
		this.apply_status();
		this.trigger("ui:order", property, order_type);
	},
	
	set_order_status: function(property, order_type)
	{
		this.order = {};
		this.order.property = property;
		this.order.type = order_type;
	},
	
	apply_status: function()
	{
		if(this.order)
		{
			if(this.last_ordered)
			{
				this.last_ordered.removeClass("order-asc");
				this.last_ordered.removeClass("order-desc");
			}		
			
			var affected_element = $(this.el).find(".order[data='"+this.order.property+"']");
			affected_element.attr("order-type", this.order.type);
			affected_element.addClass("order-"+this.order.type);
			
			this.last_ordered = affected_element;
		}
	},
	
	reset_status: function()
	{
		this.collection.reset_status();
		this.search_form.set_status("");
		this.order = undefined;
	},
	
	render_template: function()
	{
		BaseListView.prototype.render_template.call(this);
		if(this.collection.status.order)
		{
			this.set_order_status(this.collection.status.order.field, this.collection.status.order.direction);
		}
		this.apply_status();
	},
	
	render: function()
	{
		BaseListView.prototype.render.call(this);
		this.controls.render();
		this.search_form.render();
		this.footer.render();
	},
	
	atach: function(container)
	{
		$(this.el_container).appendTo(container);
		
		$(this.search_form.el).prependTo($(this.el_container));
		$(this.controls.el).prependTo($(this.el_container));
		$(this.footer.el).appendTo($(this.el_container));
	},
	
	detach: function()
	{
		$(this.el_container).detach();
		this.remove_inner_elements();
	},
	
	as_modal: function(as_modal)
	{
		if(as_modal === undefined) as_modal = true;
		this.modal_mode = as_modal;
		this.controls.as_modal(as_modal);
	},
	
	set_up_events: function()
	{
		this.footer.on("table:limit", $.proxy(function(limit){
			this.collection.set_limit(limit);
			this.collection.fetch();
		},this));
		
		this.search_form.on("submit", $.proxy(function(search_term){
			this.collection.add_filter("GLOBAL", search_term, "LIKE");
			this.collection.fetch();
		}, this));
		
		this.on("ui:order", $.proxy(function(property, direction){
			$(this.el).empty();
			this.collection.set_order(property, direction);
			this.collection.fetch();
		}, this));
		
		this.collection.on("fetch:success", $.proxy(function(response){
			this.footer.set_number_of_entries(response.data.number_of_entries);
		}, this));
		
		this.controls.on("ui:refresh", $.proxy(function(response){
			this.trigger("ui:refresh");
		}, this));
		
		this.controls.on("ui:new", $.proxy(function(response){
			this.trigger("ui:new");
		}, this));
	}
});

var NominaCollection = BaseCollection.extend({

  initialize: function () {
    BaseCollection.prototype.initialize.call(this);
    this.namespace = "users";
  },
      
  fetch_nomina: function (flag) {
    if ( this.can("search") ) {   
      var options = {};   
      if (flag=='set_nomina'){
        options = {};
        //this.set_limit(5000);
        options = this.add_status_to_options(options);
        options.success = $.proxy(this.fetch_success, this);
        options.alternate_url = "set_nomina";
                         
      }else{  
        options = {};     
        //this.set_limit(5000);
        options = this.add_status_to_options(options);
        options.success = $.proxy(this.fetch_success, this);
        options.alternate_url = "get_nomina";
      }      
      Backbone.Collection.prototype.fetch.call(this, options);
    }else
       this.bus.trigger("authorization:error");
    }

});

var NominaController;
(function(){
    
  NominaController = function(router)
  {
    BaseController.call(this, router);
    this.set_up_cursos();
    this.set_up_profesores();   
    this.set_up_routes(); 
    this.set_up_collection();
    this.set_up_list();
  };
 
  NominaController.prototype = new BaseController();
  NominaController.prototype.constructor = NominaController;

  NominaController.prototype.index = function(){
            
    this.set_up_cursos();
    this.set_up_profesores();   
                                 
    this.collection.fetch_nomina('set_nomina');    
    this.view(this.list); 
    
    $("#profesor").val(-1); 
    $("#identificador").val(-1); 
    $("#fecha_desde_field").val(''); 
    $("#fecha_hasta_field").val('');   
       
  }; 
        
  NominaController.prototype.set_up_list = function(){
    this.list = new NominaTable({collection:this.collection});
  };

  NominaController.prototype.set_up_collection = function(){
    this.collection = new NominaCollection();
    this.collection.on("fetch:success", $.proxy(function(){
      this.list.render();
    }, this));
  };

  NominaController.prototype.set_up_cursos = function(){
    this.collection_cursos = new CursosCollection();
    this.collection_cursos.set_order('identificador', 'asc');

    this.collection_cursos.on("fetch:success", $.proxy(function(){
      this.list.search_form.template_values.cursos = this.collection_cursos.toJSON();
    }, this));

    this.collection_cursos.fetch_report();
  };

  NominaController.prototype.set_up_profesores = function(){
    var profesores = new ProfesoresCollection();
 
    profesores.set_order('name', 'asc');
    //profesores.set_limit(5000);
                    
    profesores.on("fetch:success", $.proxy(function(response) {
      this.list.search_form.template_values.profesores = this.set_profesores_ordered(response.data.list);
    }, this));

    profesores.fetch();
  };

  NominaController.prototype.set_profesores_ordered = function(profesores)
  {
    var options = [];
    $.each(profesores, $.proxy(function(index, profesor){
      options.push({id:profesor.id, name:profesor.name});
    }, this));

    return options;
  };

  NominaController.prototype.set_up_routes = function(){
    this.router.create_namespaced_route("users-nomina", "users-nomina:route", "users-nomina");
    this.bus.on("users-nomina:route", $.proxy(function(){this.index();}, this));
  };

})();

var NominaSearchForm = SearchForm.extend({

  template: "public/templates/nomina_form.html",

  events:_.extend({
    "click .export_csv": "export_csv_event",
    "keyup input[name='search']": "filter_data"
  }, BaseForm.prototype.events),
    
  submit: function ()
  {
    var values = this.get_values();
   
    if (values.fecha_desde && values.fecha_hasta){
        this.trigger("submit", values);
        this.set_status(values.search);
    }else{
        alert ("Por favor ingrese un rango de fechas..");
    }    
        
  },

  export_csv_event: function(event){
    event.preventDefault();
    var values = this.get_values();
      
    if (values.fecha_desde && values.fecha_hasta){
        values.export_to_csv = 1;
 
        var form_export = $(this.el).parent().find('#nomina_export'),
          input_profesor = $(this.el).parent().find('#nomina_export_profesor'),
          input_identificador = $(this.el).parent().find('#nomina_export_identificador'),
          input_fecha_desde = $(this.el).parent().find('#nomina_export_fecha_desde'),
          input_fecha_hasta = $(this.el).parent().find('#nomina_export_fecha_hasta'),
          input_search = $(this.el).parent().find('#nomina_export_search'),
          input_detailed = $(this.el).parent().find('#nomina_export_detailed'),
          input_export_to_csv = $(this.el).parent().find('#nomina_export_export_to_csv');

        input_profesor.val(values.profesor);
        input_identificador.val(values.identificador);
        input_fecha_desde.val(values.fecha_desde);
        input_fecha_hasta.val(values.fecha_hasta);
        input_search.val(values.search);
        input_detailed.val(values.detailed);
        input_export_to_csv.val(values.export_to_csv);

        form_export.submit();
    }else{
        alert ("Por favor ingrese un rango de fechas.."); 
    }

  },

  filter_data: function(event)
  {
    var search_term = $(this.el).find("input[name='search']").val();

    $(this.el).parent().find("[data-entry]").attr('class', '');

    var unmatched_containers = $(this.el).parent().find("[data-entry]").filter(function(){
      return !new RegExp(search_term, "i").test($.trim($(this).attr("data-entry")));
    });

    unmatched_containers.attr("class", "none");
  }

});

var NominaTable = TableView.extend({

  template: 'public/templates/nomina_table.html',

  initialize: function ()
  {
    TableView.prototype.initialize.call(this);

    this.controls.add_permission(false);
    this.footer.add_permission(false);

    this.search_form.off('submit');

    this.search_form.on('submit', $.proxy(function (search) {
      this.collection.remove_filter('fecha_desde');
      if (search.fecha_desde !== undefined && search.fecha_desde !== '')
        this.collection.add_filter('fecha_desde', search.fecha_desde, 'EQUALS');

      this.collection.remove_filter('fecha_hasta');
      if (search.fecha_hasta !== undefined && search.fecha_hasta !== '')
        this.collection.add_filter('fecha_hasta', search.fecha_hasta, 'EQUALS');

      this.collection.remove_filter('identificador');
      if (search.identificador !== undefined && search.identificador !== '') {
        this.collection.add_filter('identificador', search.identificador, 'LIKE');
        this.collection.add_filter('identificador', search.identificador, 'LIKE');
      }

      this.collection.remove_filter('profesor');
      if (search.profesor && search.profesor !== '')
        this.collection.add_filter('profesor', search.profesor, 'EQUALS');

      this.collection.remove_filter('detailed');
      this.collection.add_filter('detailed', search.detailed, 'EQUALS');

      this.collection.remove_filter('export_to_csv');
      this.collection.add_filter('export_to_csv', search.export_to_csv, 'EQUALS');

      this.collection.fetch_nomina();
    }, this));
  },

  set_up_controls: function (options) {
    var control_values = {};
    if (options && options.control_values)
      control_values = options.control_values;

    this.controls = new TableControls({values: control_values});
    this.search_form = new NominaSearchForm();
    this.footer = new TableFooter();
  }

});

var ProfesoresCollection = BaseCollection.extend({

	initialize: function()
	{
		BaseCollection.prototype.initialize.call(this);
		this.namespace = "users";
	}
   
});
var ProfesoresModalSelectable = {

	set_up_profesores_modal: function()
	{
		this.set_up_modal();
		this.set_up_form_profesor_selection();
	},

	set_up_modal: function()
	{
		this.profesores_modal = new UsersController();
		this.profesores_modal.as_modal();
		this.profesores_modal.no_url_mode();
		this.profesores_modal.list.template_values.selectable = true;
    this.profesores_modal.list.controls.permissions = [];
		this.profesores_modal.list.controls.add_permission("false");

		this.profesores_modal.list.on("ui:row:selection", $.proxy(function(model){
			
			this.form.template_values = this.form.get_values();
			this.form.template_values.profesor = model.toJSON();
			this.form.render_template();
			this.profesores_modal.close_modal();

		}, this));
	},

	set_up_form_profesor_selection: function() 
	{
		this.form.on("select:profesor", $.proxy(function(){
			
			this.profesores_modal.index();

		}, this));
	}

};

var ProveedoresCollection = BaseCollection.extend({

	initialize: function()
	{
		BaseCollection.prototype.initialize.call(this);
		this.namespace = "users";
	},

	fetch: function(options) 
	{
		if(options === undefined) options = {};

		options.alternate_url = "get_proveedores";
		BaseCollection.prototype.fetch.call(this, options);
	}

});
var User = BaseModel.extend({

	initialize: function(options)
	{
		BaseModel.prototype.initialize.call(this, options);
		this.namespace = "users";
	}

});
var UsersController;
(function(){

  UsersController = function(router)
  {
    CrudController.call(this, "users", router);
    this.set_auth_namespace("User::");
    this.set_up_proveedores();
  };

  UsersController.prototype = new CrudController();

  UsersController.constructor = UsersController;

  UsersController.prototype.set_up_model = function() 
  {
    this.model = User.extend();
  };

  UsersController.prototype.set_up_form = function() 
  {
    this.form = new UsersForm();
    this.form.on("can:render", $.proxy(function(){
      this.proveedores.fetch();
    }, this));
    this.form.template_helpers.admin = auth.check(["Administrador"]);
  };

  UsersController.prototype.form_save_success = function(save_and_new)
  {
    if(save_and_new === true)
      {
        this.feedback_view.template_values.message = this.get_feedback_message_on_save_success();
        this.feedback_view.atach($("#content"));
        this.feedback_view.render();

        if(document.location.hash.match(/new/))
          this.add();

        this.router.navigate(this.namespace+"/new", true);

        return;
      }

      if(this.modal_mode || this.no_url)
        this.index();
      else
        {
          var is_admin = auth.check(["Administrador"]);
          if(is_admin)
            this.router.navigate(this.namespace, true);
          else
            this.router.navigate("cursos", true);

        }  
  };

  UsersController.prototype.set_up_list = function() 
  {
    this.list = new UsersTable({collection:this.collection});
  };

  UsersController.prototype.set_up_proveedores = function() 
  {
    this.proveedores = new ProveedoresCollection();
    this.proveedores.on("fetch:success", $.proxy(function(response){

      this.form.set_proveedores(response.data.list);
      this.form.render_template();

    }, this));
  };

})();

var UsersForm = BaseForm.extend({

	template:"public/templates/users_form.html",

	events: _.extend({
		"change #proveedor_pac_field": "proveedor_change"
	}, BaseForm.prototype.events),

	proveedor_change: function(e)
	{
		var name = $(this.el).find("#proveedor_pac_field option:selected").text();
		$(this.el).find("#name_field").val(name);
	},

	initialize: function(options)
	{
		BaseForm.prototype.initialize.call(this, options);
		this.resubscribe_template_event();
	},

	set_proveedores: function(proveedores)
	{
		var transformed = [];
		$.each(proveedores, function(index, proveedor){
			transformed.push({value:proveedor.id, label:proveedor.nombre});
		});

		this.template_values.proveedores = transformed;
	},

	get_values: function()
	{
		var result = BaseForm.prototype.get_values.call(this);
		delete result["retype-password"];

		return result;
	}

});
var UsersTable = TableView.extend({

  template:"public/templates/users_table.html",

  initialize: function()
  {
    var options = {};
    options.control_values  = {"label":"Nuevo usuario", "url":"#users/new"};
    TableView.prototype.initialize.call(this, options);
    this.controls.add_permission("Administrador");
    this.template_values.can_edit = auth.check(["Administrador"]);
  }

});

var BodegasCollection = BaseCollection.extend({

	initialize: function()
	{
		BaseCollection.prototype.initialize.call(this);
		this.namespace = "cursos";
	},

	fetch: function(options) 
	{
		if(options === undefined) options = {};

		options.alternate_url = "get_bodegas";
		BaseCollection.prototype.fetch.call(this, options);
	}

});
var Curso = BaseModel.extend({

	initialize:function(attributes)
	{
		BaseModel.prototype.initialize.call(this, attributes);
		this.data_types = {};
		this.data_types.fecha_inicio = DateType;
		this.data_types.fecha_fin = DateType;
		this.namespace = "cursos";

	},

	transform_output_data: function()
	{
		BaseModel.prototype.transform_output_data.call(this);

		var result = this.get("producto_pac").split("-");

		this.set("producto_pac", result[0]);
		this.set("bodega", result[1]);
	},

	transform_input_data: function()
	{
		BaseModel.prototype.transform_input_data.call(this);

		var result = this.get("producto_pac")+"-"+this.get("bodega");

		this.set("producto_pac", result);
	},

	save_matriculas_by_curso: function(matriculas)
	{
		if(this.can("create"))
		{
			var options = {success: $.proxy(this.success_callback, this, "save")};

			options.alternate_url = "save_matriculas_by_curso";
			Backbone.Model.prototype.save.call(this, matriculas, options);
		}
		else
			this.bus.trigger("authorization:error");
	},

	save_pesos: function(pesos)
	{
		if(this.can("create"))
		{
			var options = {success: $.proxy(this.success_callback, this, "save")};

			options.alternate_url = "save_pesos";
			Backbone.Model.prototype.save.call(this, pesos, options);
		}
		else
			this.bus.trigger("authorization:error");
	},

	save_notas_finales: function(notas_finales){

		if(this.can("create"))
		{
			var options = {success: $.proxy(this.success_callback, this, "save")};

			options.alternate_url = "save_notas_finales";
			Backbone.Model.prototype.save.call(this, notas_finales, options);
		}
		else
			this.bus.trigger("authorization:error");
	}, 

	get_overview: function(curso_id){
		
		if(this.can("get"))
		{
			var options = {};
			
			var callbacks = {success: $.proxy(this.success_callback, this, "fetch")};
		
			options = $.extend(callbacks, options);
			options.is_model = true;
			options.alternate_url = "get_overview";

			options.data = {};
			options.data.data = JSON.stringify({id:curso_id});

			Backbone.Model.prototype.fetch.call(this, options);
		}
		else
			this.bus.trigger("authorization:error");
	}

});
var CursosCollection = BaseCollection.extend({

  initialize: function ()
  {
    BaseCollection.prototype.initialize.call(this);
    this.namespace = "cursos";
  },

  fetch_report: function ()
  {
    if(this.can("search"))
    {
      var options = {};
      //this.set_limit(5000);
      options = this.add_status_to_options(options);
      options.success = $.proxy(this.fetch_success, this);
      options.alternate_url = "get_report";
      Backbone.Collection.prototype.fetch.call(this, options);
    }
    else
      this.bus.trigger("authorization:error");
  }

});

var CursosController;
(function () {

    CursosController = function (router) {
        CrudController.call(this, "cursos", router);
        this.form.on("can:render", $.proxy(function () {
            this.render_form();
        }, this));
        this.set_up_pac_products_collection();
        this.set_up_profesores_modal();
    };

    CursosController.prototype = new CrudController();
    CursosController.prototype.constructor = CursosController;

    CursosController.prototype = _.extend(CursosController.prototype, ProfesoresModalSelectable);
 
    CursosController.prototype.set_up_model = function () {
        this.model = Curso.extend({namespace: this.namespace});
    };

    CursosController.prototype.index = function () {
        if (document.help_vars.current_user.rol == "profesor") {
            this.list.search_form.set_status(document.help_vars.current_user.name);
            this.list.collection.add_filter("GLOBAL", document.help_vars.current_user.name, "LIKE");
        } 
     
        CrudController.prototype.index.call(this);
    };

    CursosController.prototype.add = function () {
        this.form.template_values = {};

        this.form.template_values.precio_prematricula = 25;
        this.form.template_values.cupos_minimo = 6;
        this.form.template_values.cupos_maximo = 12;

        this.form.render();
        this.show_form();
    };

    CursosController.prototype.set_up_form = function () {
        this.form = new CursosForm();
    };

    CursosController.prototype.set_up_list = function () {
        this.list = new CursosTable({collection: this.collection});  
        this.list.template_values.is_admin = auth.check(["Administrador", "Director", "Counter"]);
    };          
  
    CursosController.prototype.edit_form = function (model) {
        this.form.set_values(model.toJSON());
        this.form.template_helpers.can_modify_hours = auth.check(["Administrador"]);
        this.form.render();         
    };

    CursosController.prototype.render_form = function () {
        this.pac_products.fetch();
    };

    CursosController.prototype.set_up_pac_products_collection = function () {
        this.pac_products = new PacProductCollection();
        this.pac_products.on("fetch:success", $.proxy(function (response) {
            this.form.set_pac_products(response.data.list);
            this.form.render_template();
        }, this));
    };

    CursosController.prototype.delete_model_error = function (errors, model) {
        if ($.inArray("actividades_or_sesiones_atached", errors) != -1) {
            this.bus.trigger("custom:error", "Para borrar este curso primero debe borrar las actividades o sesiones que tenga asociadas !");
            this.collection.fetch();
        }
    };
})();

var CursosForm = BaseForm.extend({

  template:"public/templates/cursos_form.html",

  events: _.extend({

    "click .select_profesor" : "select_profesor_event",
    "change #producto_pac_field" : "producto_pac_changed_event"

  }, BaseForm.prototype.events),

  initialize: function(options)
  {
    BaseForm.prototype.initialize.call(this, options);
    this.resubscribe_template_event();
    this.template_helpers.can_modify_hours = true;
  },

  producto_pac_changed_event: function(event)
  {
    var value = $("#producto_pac_field").val();
    var label = $("#producto_pac_field option[value='"+value+"']").text();

    var labels = label.split(" - ");

    label = "";
    if(labels.length == 2)
      label = labels[0];

    $("input[name='sucursal']").val(label);
  },

  select_profesor_event: function(event)
  {
    event.preventDefault();
    this.select_profesor();
  },

  select_profesor: function() 
  {
    this.trigger("select:profesor");
  },

  set_pac_products: function(products)
  {
    var transformed = [];

    $.each(products, function(index, object){

      transformed[index] = {label:object.nombre_bodega+" - "+object.nombre, value:object.id+"-"+object.id_bodega};

    });

    this.template_helpers.pac_products = transformed;
  },

  set_values: function(values)
  {
    this.template_values = values; 
  },

  set_bodegas: function(bodegas)
  {
    this.template_helpers.bodegas = this.to_select_options(bodegas);
  },

  set_profesores: function(profesores)
  {

    var transformed = [];

    $.each(profesores, function(index, object){

      transformed[index] = {label:object.name, value:object.id};

    });

    this.template_helpers.profesores = transformed;
  },

  to_select_options: function(collection)
  {
    var transformed = [];

    $.each(collection, function(index, object){

      transformed[index] = {label:object.nombre, value:object.id};

    });

    return transformed;
  },

  render_template: function()
  {
    var estado_options = [];
    estado_options.push({label:"Prematricula", value:'Prematricula'});		
    estado_options.push({label:"Cursando", value:'Cursando'});		
    estado_options.push({label:"Terminado", value:'Terminado'});		

    this.template_values.is_admin = auth.check(["Administrador"]);
    this.template_values.is_admin_director = auth.check(["Director"]);
 
    this.template_helpers.estados = estado_options;

    BaseForm.prototype.render_template.call(this);
    this.template_helpers.can_modify_hours = true;
  }

});

var CursosModalSelection = {

  set_up_cursos_modal: function() 
  {
    this.cursos_modal = new CursosController();
    this.cursos_modal.as_modal();
    this.cursos_modal.no_url_mode();
    this.cursos_modal.list.template_values.selectable = true;
    this.cursos_modal.list.controls.permissions = [];
    this.cursos_modal.list.controls.add_permission("false");
    this.cursos_modal.collection.add_filter("estado", "Terminado", "NOT EQUALS");

    this.cursos_modal.list.on("ui:row:selection", $.proxy(function(curso){

      var profesores_setted;

      if(this.form.template_values.profesores)
        profesores_setted = this.form.template_values.profesores; 

      this.form.template_values = this.form.get_values();

      if(profesores_setted !== undefined)
        this.form.template_values.profesores = profesores_setted;

      if(document.help_vars.current_user.rol == "Administrador")
        this.form.template_values.administrador = true;

      this.form.template_values.curso = curso.toJSON();

      this.form.render_template();
      this.cursos_modal.close_modal();

    }, this));
  },

  set_up_form_select_curso: function() 
  {

    this.form.on("select:curso", $.proxy(function(){

      if(document.help_vars.current_user.rol == "profesor")
        {
          this.cursos_modal.list.search_form.set_status(document.help_vars.current_user.name);
          this.cursos_modal.list.collection.add_filter("GLOBAL", document.help_vars.current_user.name, "LIKE");
        }

        this.cursos_modal.index();

    }, this));

  },

  set_up_cursos_modal_selection: function()
  {
    this.set_up_cursos_modal();
    this.set_up_form_select_curso();	
  }

};

var CursosTable = TableView.extend({

	template:"public/templates/cursos_table.html",

	initialize: function()
	{
		var options = {};
		options.control_values  = {"label":"Nuevo curso", "url":"#cursos/new"};
		TableView.prototype.initialize.call(this, options);
                this.controls.add_permission("Administrador");       
                this.controls.add_permission("Director");
                this.controls.add_permission("Counter"); 
                                                                     
                this.template_values.can_edit = auth.check(["Administrador"]); 
         
     
	}

});

var PacProductCollection = BaseCollection.extend({

	initialize: function()
	{
		BaseCollection.prototype.initialize.call(this);
		this.namespace = "cursos";
	},

	fetch: function(options) 
	{
		if(options === undefined) options = {};

		options.alternate_url = "get_pac_products";
		BaseCollection.prototype.fetch.call(this, options);
	},

	fetch_for_pagos: function(options) 
	{
		if(options === undefined) options = {};

		options.alternate_url = "get_pac_products_for_pagos";
		BaseCollection.prototype.fetch.call(this, options);
	}

});
var ReportController;
(function(){

  ReportController = function(router)
  {
    BaseController.call(this, router);
    this.set_up_routes();
    this.set_up_collection();
    this.set_up_list();
  };

  ReportController.prototype = new BaseController();
  ReportController.prototype.constructor = ReportController;

  ReportController.prototype.index = function(){
    this.collection.fetch_report();
    this.view(this.list);
  };

  ReportController.prototype.set_up_list = function(){
    this.list = new ReportTable({collection:this.collection});
  };

  ReportController.prototype.set_up_collection = function(){
    this.collection = new CursosCollection();
    this.collection.on("fetch:success", $.proxy(function(){
      var cursos = this.collection.toJSON();
      this.list.search_form.template_values.cursos = this.collection.toJSON();
      this.list.search_form.template_values.profesores = this.get_profesores_from_cursos(cursos);
      this.list.search_form.template_values.nombres = this.get_nombres_from_cursos(cursos);
      this.list.search_form.template_values.sucursales = this.get_sucursales_from_cursos(cursos);
      this.list.search_form.template_values.horarios = this.get_horarios_from_cursos(cursos);
      this.list.render();
    }, this));
  };

  ReportController.prototype.get_horarios_from_cursos = function(cursos)
  {
    var horarios = {};
    $.each(cursos, function(index, curso){
      var value = curso.hora_inicio+","+curso.hora_fin;
      var label = curso.hora_inicio+" - "+curso.hora_fin;
      horarios[value] = label;
    });
    return horarios;
  };

  ReportController.prototype.get_sucursales_from_cursos = function(cursos)
  {
    var sucursales = {};
    $.each(cursos, function(index, curso){
      sucursales[curso.sucursal] = curso.sucursal;
    });
    return sucursales;
  };

  ReportController.prototype.get_nombres_from_cursos = function(cursos)
  {
    var nombres = {};
    $.each(cursos, function(index, curso){
      nombres[curso.nombre] = curso.nombre;
    });
    return nombres;
  };

  ReportController.prototype.get_profesores_from_cursos = function(cursos)
  {
    var profesores = {};
    $.each(cursos, function(index, curso){
      profesores[curso.profesor.id] = curso.profesor;
    });
    return profesores;
  };
  
  ReportController.prototype.set_up_routes = function(){
    this.router.create_namespaced_route("cursos-report", "cursos-report:route", "cursos-report");
    this.bus.on("cursos-report:route", $.proxy(function(){this.index();}, this));
  };

})();

var ReportSearchForm = SearchForm.extend({
	
	template:"public/templates/report_search_form.html",
	
	submit: function()
	{
		var values = this.get_values();

		this.trigger("submit", values);
		this.set_status(values.search);
	}
	
});

var ReportTable = TableView.extend({

  template:"public/templates/report_cursos_table.html",

  initialize: function()
  {
    TableView.prototype.initialize.call(this);
    
    this.controls.add_permission(false);
    this.footer.add_permission(false);

    this.off("ui:order");
    this.on("ui:order", $.proxy(function(property, direction){
      $(this.el).empty();
      this.collection.set_order(property, direction);
      this.collection.fetch_report();
    }, this));
    
    this.search_form.off("submit");
    this.search_form.on("submit", $.proxy(function(search){

      this.collection.remove_filter("identificador");
      if(search.identificador !== undefined && search.identificador !== "")
        this.collection.add_filter("identificador", search.identificador, "EQUALS");

      this.collection.remove_filter("mes");
      if(search.mes && search.mes !== "")
        this.collection.add_filter("mes", search.mes, "EQUALS");

      this.collection.remove_filter("profesor");
      if(search.profesor && search.profesor !== "")
        this.collection.add_filter("profesor", search.profesor, "EQUALS");

      this.collection.remove_filter("nombre");
      if(search.nombre && search.nombre !== "")
        this.collection.add_filter("nombre", search.nombre, "EQUALS");

      this.collection.remove_filter("sucursal");
      if(search.sucursal && search.sucursal !== "")
        this.collection.add_filter("sucursal", search.sucursal, "EQUALS");

      this.collection.remove_filter("estado");
      if(search.estado && search.estado !== "")
        this.collection.add_filter("estado", search.estado, "EQUALS");

      this.filter_horario(search); 

      this.collection.add_filter("GLOBAL", search.search, "LIKE");
      this.collection.fetch_report();

    }, this));
  },

  filter_horario: function(search)
  {
      this.collection.remove_filter("hora_inicio");
      this.collection.remove_filter("hora_fin");

      if(search.horario && search.horario !== "")
      {
        var inicio_fin = search.horario.split(",");
        this.collection.add_filter("hora_inicio", inicio_fin[0], "EQUALS");
        this.collection.add_filter("hora_fin", inicio_fin[1], "EQUALS");
      }
  },

  set_up_controls: function(options)
  {
    var control_values = {};
    if(options && options.control_values)
      control_values = options.control_values;

    this.controls = new TableControls({values:control_values});
    this.search_form = new ReportSearchForm();
    this.footer = new TableFooter();
  }

});

var AlumnosHistoryCollection = BaseCollection.extend({

	initialize: function(){

		BaseCollection.prototype.initialize.call(this);
		this.namespace = "alumnos";

	},

	fetch: function(alumno) {
		
		if(this.can("search"))
		{
			var options = {};
			options.success = $.proxy(this.fetch_success, this);
			options.alternate_url = "get_alumnos_history";
			options.data = {data:JSON.stringify({alumno:alumno})};
			Backbone.Collection.prototype.fetch.call(this, options);
		}
		else
			this.bus.trigger("authorization:error");
	}

});
var AlumnosHistoryController;
(function(){

	AlumnosHistoryController = function(router)
	{
		BaseController.call(this, router);
		this.set_up_routes();
		this.set_up_collection();
		this.set_up_model();
		this.set_up_list();
	};

	AlumnosHistoryController.prototype = new BaseController();
	AlumnosHistoryController.prototype.constructor = AlumnosHistoryController;

	AlumnosHistoryController.prototype.index = function(alumno_id) 
	{
		var model = new this.model();
		model.set("id", alumno_id);

		model.on("fetch", $.proxy(function(model){
			this.list.template_values.alumno = model.toJSON();
			this.collection.fetch(alumno_id);
		}, this));

		model.fetch();
		this.view(this.list);
	};

	AlumnosHistoryController.prototype.set_up_routes = function() 
	{
		this.router.create_namespaced_route("alumno-history/:id", "alumnos:route:history", "alumnos");
		this.bus.on("alumnos:route:history", $.proxy(function(alumno_id){this.index(alumno_id);}, this));
	};

	AlumnosHistoryController.prototype.set_up_list = function() 
	{
		this.list = new AlumnosHistoryTable({collection:this.collection});
	};

	AlumnosHistoryController.prototype.set_up_collection = function() 
	{
		this.collection = new AlumnosHistoryCollection();
		this.collection.on("fetch:success", $.proxy(function(response){
			this.list.render();
		}, this));	
	};

	AlumnosHistoryController.prototype.set_up_model = function() 
	{
		this.model = Alumno.extend();
	};

})();

var AlumnosHistoryTable = TableView.extend({

	template: "public/templates/alumnos_history_table.html",

	initialize: function(options)
	{
		TableView.prototype.initialize.call(this, options);
		this.controls.add_permission("false");
		//this.search_form.add_permission("false");
		this.footer.add_permission("false");
		this.reset_search_form_event();
	},

	render_template: function()
	{
		this.template_values.options = {hash:{operator:"!="}};
		TableView.prototype.render_template.call(this);
		$(this.el).find("table").tablesorter();
		this.search_form.submit();
	},

	reset_search_form_event: function()
	{

		this.search_form.transform_dates = false;
		this.search_form.off("submit");
		this.search_form.on("submit", $.proxy(function(search_term){
			this.filter_table(search_term);
		}, this));

	},

	filter_table: function(search_term)
	{

		if(search_term === undefined) return;

		$(this.el).find("table tbody tr").hide();
		
		var data = search_term.split(" ");
		var rows =  $(this.el).find("table tbody tr");

		$.each(data, function(index, value){
			rows = rows.filter("*:contains('"+value+"')");
		});

		rows.show();
	}


});
var AlumnosSwitchController;
(function(){

	AlumnosSwitchController = function(router)
	{
		BaseController.call(this, router);
		this.set_up_routes();
		this.set_up_form();
		this.set_up_alumnos();
		this.set_up_cursos();

		this.form.on("cursos:changed", $.proxy(function(left_curso, right_curso){

			this.form.template_values.left_curso_id = left_curso;
			this.form.template_values.right_curso_id = right_curso;
			this.cursos.fetch();

		}, this));

		this.form.on("submit", $.proxy(function(values){
			
			var model = new this.model();

			model.on("cursos:save:success", $.proxy(function(){
				this.feedback.atach($("#content"));
				this.feedback.template_values.message = "Matriculas guardadas correctamente.";
				this.feedback.render();
			}, this));

			model.save_matriculas_by_curso(values);

		}, this));

		this.bus.on("swap_list:repeated:values", $.proxy(function(repeated_values){

			var message = "Los siguientes Alumnos ya existen en el curso objetivo y no se pueden mover:";
			$.each(repeated_values, function(index, alumno){
				message += "<br/>"+alumno;
			});

			this.bus.trigger("custom:info", message);

		}, this));

		this.model = Curso.extend({});
		this.feedback = new FeedbackView();
	};

	AlumnosSwitchController.prototype = new BaseController();
	AlumnosSwitchController.prototype.constructor = AlumnosSwitchController;

	AlumnosSwitchController.prototype.index = function() 
	{
		this.cursos.fetch();
	};

	AlumnosSwitchController.prototype.set_up_routes = function() 
	{
		this.router.create_namespaced_route("alumnos-switch", "alumnos:route:switch", "alumnos-switch");
		this.bus.on("alumnos:route:switch", $.proxy(function(){this.index();}, this));
	};

	AlumnosSwitchController.prototype.set_up_form = function() 
	{
		this.form = new AlumnosSwitchForm();
	};

	AlumnosSwitchController.prototype.set_up_alumnos = function() 
	{
		this.alumnos_right = new AlumnosCollection();
		this.alumnos_right.on("fetch:success", $.proxy(function(response){
			this.form.template_values.alumnos_right = response.data.list;
			this.form.render();
			this.view(this.form);
		}, this));

		this.alumnos_left = new AlumnosCollection();
		this.alumnos_left.on("fetch:success", $.proxy(function(response){
			this.form.template_values.alumnos_left = response.data.list;

			var filter_curso = this.cursos.at(1).id;
			if(this.form.template_values.right_curso_id)
			{
				filter_curso = this.cursos.get(this.form.template_values.right_curso_id).id;
			}

			this.form.template_values.right_curso_id = filter_curso;

			this.alumnos_right.add_filter("curso", filter_curso, "EQUALS");
			this.alumnos_right.fetch();
		}, this));
	};

	AlumnosSwitchController.prototype.set_up_cursos = function() 
	{
		this.cursos = new CursosCollection();
		this.cursos.add_filter("estado", "Terminado", "NOT EQUALS");
		this.cursos.on("fetch:success", $.proxy(function(response){
  
                  this.cursos.add(response.data.list);
                  this.form.set_cursos(response.data.list);
 
                  if (this.cursos.at(0)){ 
                    var filter_curso = this.cursos.at(0).id;
                    filter_curso = this.cursos.at(0).id; 
                    if(this.form.template_values.left_curso_id)
                    {
                            filter_curso = this.cursos.get(this.form.template_values.left_curso_id).id;
                    }
 
                    this.form.template_values.left_curso_id = filter_curso;
                    this.alumnos_left.add_filter("curso", filter_curso, "EQUALS");
                    this.alumnos_left.fetch();
                } 
 
		}, this));
	};

})();

var AlumnosSwitchForm = BaseForm.extend({

	template: "public/templates/alumnos_switch_form.html",

	events:_.extend({
		"change #curso_left_field": "cursos_change",
		"change #curso_right_field": "cursos_change"
	}, BaseForm.prototype.events),

	render_template: function()
	{
		BaseView.prototype.render_template.call(this);
		$(this.el).find("select.searchable").searchable();
		this.swap_list = $(this.el).find("select[multiple]").swap_list();
	},

	cursos_change: function(event)
	{
		var left_curso = $(this.el).find("#curso_left_field").val();
		var right_curso = $(this.el).find("#curso_right_field").val();
		this.trigger("cursos:changed", left_curso, right_curso);
	},

	set_cursos: function(cursos)
	{
            var transformed = [];
              
            if (cursos.length != 0){
                $.each(cursos, function(index, curso){

                  var date = new XDate(curso.fecha_inicio*1000);
                  var fecha = date.toString("yyyy-MM-dd");
                  var label = curso.identificador+" - "+curso.bodega_nombre+" - "+curso.nombre+" - "+curso.profesor.name+" - "+fecha; 
                  transformed.push({label:label, value:curso.id});
 
                });
                     
            }else{
                transformed.push({label:'', value:''});    
            }
            
            this.template_values.cursos = transformed;
            
	},

	get_values: function()
	{
                var left_curso = $(this.el).find("#curso_left_field").val();
		var right_curso = $(this.el).find("#curso_right_field").val();

		var left_alumnos = [];
		$.each($(this.el).find("#alumnos_left_field option"), function(index, option){
			left_alumnos.push($(option).val());
		});

		var right_alumnos = [];
		$.each($(this.el).find("#alumnos_right_field option"), function(index, option){
			right_alumnos.push($(option).val());
		});

		var result = {};
		result[left_curso] = left_alumnos;
		result[right_curso] = right_alumnos;

		return result;
	},

	submit: function()
	{
		var values = this.get_values();
		this.bus.trigger(this.namespace+":form:submit", values);
		this.trigger("submit", values);
	}

});

var Alumno = BaseModel.extend({
	
	initialize: function(attributes)
	{
		BaseModel.prototype.initialize.call(this, attributes);
		this.namespace = "alumnos";
	},

	save_matriculas: function(matriculas)
	{
		if(this.can("create"))
		{
			var options = {success: $.proxy(this.success_callback, this, "save")};

			options.alternate_url = "save_matriculas";

			this.transform_output_data();
			Backbone.Model.prototype.save.call(this, matriculas, options);
		}
		else
			this.bus.trigger("authorization:error");
	}

});
var AlumnosCollection = BaseCollection.extend({

	initialize: function()
	{
		BaseCollection.prototype.initialize.call(this);
		this.namespace = "alumnos";
	}
});
var AlumnosController;
(function(){

  AlumnosController = function(router)
  {
    CrudController.call(this, "alumnos", router);
    this.form.on("got:template", $.proxy(function(){this.render_form();}, this));
    this.set_up_pac_clients();
    this.set_up_matriculas();
    this.set_up_cursos();
    this.subscribe_to_custom_routes();
  };

  AlumnosController.prototype = new CrudController();
  AlumnosController.prototype.constructor = AlumnosController;

  AlumnosController.prototype.matricula = function(alumno_id) 
  {
    this.current_alumno_id = alumno_id;
    this.form_matriculas.render();
    this.view(this.form_matriculas);
  };

  AlumnosController.prototype.set_up_model = function()
  {
    this.model = Alumno.extend();
  };

  AlumnosController.prototype.set_up_form = function()
  {
    this.form = new AlumnosForm();
  };

  AlumnosController.prototype.set_up_collection = function() 
  {
    this.collection = new AlumnosCollection();
  };

  AlumnosController.prototype.set_up_list = function()
  {
    this.list = new AlumnosTable({collection:this.collection});
  };

  AlumnosController.prototype.render_form = function()
  {
    this.pac_clients.fetch();
  };

  AlumnosController.prototype.set_up_pac_clients = function() 
  {
    this.pac_clients = new PacClientsCollection();
    this.pac_clients.on("fetch:success", $.proxy(function(response){

      this.form.set_pac_clients(response.data.list);
      this.form.render_template();

    }, this));
  };

  AlumnosController.prototype.set_up_cursos = function() 
  {
    this.cursos = new CursosCollection();
    this.cursos.on("fetch:success", $.proxy(function(response){
      this.form_matriculas.set_cursos(response.data.list);

      this.matriculas.fetch(this.current_alumno_id);
    }, this));
  };

  AlumnosController.prototype.set_up_matriculas = function() 
  {
    this.form_matriculas = new MatriculasForm();
    this.form_matriculas.on("can:render", $.proxy(function(){
      var alumno = new this.model();
      alumno.set("id", this.current_alumno_id);
      alumno.on("alumnos:fetch:success", $.proxy(this.alumno_for_matriculas_fetched, this));
      alumno.fetch();
    }, this));

    this.matriculas = new MatriculasCollection();
    this.matriculas.on("fetch:success", $.proxy(function(response){
      this.form_matriculas.template_values.matriculas = response.data;
      this.form_matriculas.render_template();

    }, this));

    this.form_matriculas.on("submit", $.proxy(function(matriculas){
      var alumno = new this.model();
      alumno.on("alumnos:save:success", $.proxy(function(){
        this.router.navigate(this.namespace, true);
      }, this));

      alumno.save_matriculas({matriculas:matriculas});
    }, this));

  };

  AlumnosController.prototype.subscribe_to_custom_routes = function() 
  {
    this.router.create_namespaced_route("alumnos/matricula/:id", "alumnos:route:matricula", "alumnos");
    this.bus.on("alumnos:route:matricula", $.proxy(function(alumno_id){this.matricula(alumno_id);}, this));
  };

  AlumnosController.prototype.alumno_for_matriculas_fetched = function(model) 
  {
    this.form_matriculas.template_values.alumno = model.toJSON();
    //this.cursos.add_filter("estado", "Terminado", "NOT EQUALS");
    this.cursos.fetch();
  };

})();

var AlumnosForm = BaseForm.extend({

  template:"public/templates/alumnos_form.html",
  
  events: _.extend({

    "change #cliente_pac_field" : "client_changed"

  }, BaseForm.prototype.events),

  initialize: function(options)
  {
    BaseView.prototype.initialize.call(this, options);
    this.resubscribe_template_event();
    this.pac_clients = undefined;
  },

  fecha_changed: function()
  {
    var fecha = $(this.el).find("#fecha_nacimiento_field").val();
    fecha = fecha.split("/");
    var current_year = new XDate();
    var birth_date = new XDate(fecha[2], fecha[1], fecha[0]);
    var age = parseInt(birth_date.diffYears(current_year), 10);
    $(this.el).find("input#edad_field").val(age);
  },

  client_changed: function()
  {
    var client_id = $(this.el).find("#cliente_pac_field").val();
    var client_selected = this.pac_clients.get(client_id);

    if(client_selected === undefined) return false;

    $(this.el).find("[name='celular']").val(client_selected.get("celular"));
    $(this.el).find("[name='direccion']").val(client_selected.get("direccion"));
    $(this.el).find("[name='email']").val(client_selected.get("email"));
    $(this.el).find("[name='telefono']").val(client_selected.get("telefono"));
  },

  render_template: function()
  {
    BaseForm.prototype.render_template.call(this);
    $(this.el).find("#fecha_nacimiento_field").change($.proxy(this.fecha_changed, this));
  },

  set_pac_clients: function(clients)
  {
    this.pac_clients = new PacClientsCollection(clients);

    var transformed = [];

    $.each(clients, function(index, client){
      transformed[index] = {label:client.nombre, value:client.id};
    });

     this.template_values.pac_clients = transformed;
  }

});

var AlumnosTable = TableView.extend({

	template: "public/templates/alumnos_table.html",

	initialize: function()
	{

		var options = {};
		options.control_values  = {"label":"Nuevo alumno", "url":"#alumnos/new"};

		TableView.prototype.initialize.call(this, options);

	}

});
var MatriculasCollection = BaseCollection.extend({

	initialize: function()
	{
		BaseCollection.prototype.initialize.call(this);
		this.namespace = "alumnos";
	},

	fetch: function(alumno) 
	{
		if(this.can("search"))
		{
			var options = {};
			options.success = $.proxy(this.fetch_success, this);
			options.alternate_url = "get_matriculas";
			options.data = {data:JSON.stringify({alumno:alumno})};
			Backbone.Collection.prototype.fetch.call(this, options);
		}
		else
			this.bus.trigger("authorization:error");
	}
	
});
var MatriculasForm = BaseForm.extend({

	template: "public/templates/matriculas_form.html",

	events: _.extend({

		"keyup input[name='search_field']": "filter_cursos"

	}, BaseForm.prototype.events),

	initialize: function(options)
	{
		BaseView.prototype.initialize.call(this, options);
		this.resubscribe_template_event();
	},

	get_values: function()
	{
		var fields = $(this.el).find("form input[type='checkbox']:checked");
		var alumno = $(this.el).find("input[name='alumno']").val();

		var result = {};
		result[alumno] = [];

		$.each(fields, function(index, field){
			result[alumno].push($(field).val());
		});

		return result;
	},

	filter_cursos: function(event)
	{
		$(this.el).find("[search]").css("display", "table-row");

		var search_term = $(this.el).find("input[name='search_field']").val();
		var unmatched_containers = $(this.el).find("[search]").filter(function(){ 
			return !new RegExp(search_term, "i").test($.trim($(this).attr("search")));
		});

		unmatched_containers.css("display", "none");

	},

    set_cursos: function(cursos)
    {
        var opened_cursos = [];
        var closed_cursos = [];

        $.each(cursos, function(index, curso){
            if(curso.estado != "Terminado")
                opened_cursos.push(curso);
            else
                closed_cursos.push(curso);
        });

        this.template_values.opened_cursos = opened_cursos;
        this.template_values.closed_cursos = closed_cursos;
    }

});

var PacClientsCollection = BaseCollection.extend({

	initialize: function()
	{
		BaseCollection.prototype.initialize.call(this);
		this.namespace = "alumnos";
	},

	fetch: function(options) 
	{
		if(options === undefined) options = {};

		options.alternate_url = "get_pac_clients";
		BaseCollection.prototype.fetch.call(this, options);
	}

});
var AsistenciaAlumnosCollection = BaseCollection.extend({

	initialize: function()
	{
		BaseCollection.prototype.initialize.call(this);
		this.namespace = "sesiones";
		this.model = EmptyModel.extend();
	},

	fetch: function(alumno) 
	{
		if(this.can("search"))
		{
			var options = {};
			options.success = $.proxy(this.fetch_success, this);
			options.alternate_url = "get_asistencia_alumnos";
			options.data = {data:JSON.stringify({alumno:alumno})};
			Backbone.Collection.prototype.fetch.call(this, options);
		}
		else
			this.bus.trigger("authorization:error");
	}

});
var AsistenciaAlumnosController;
(function(){

	AsistenciaAlumnosController = function(router)
	{
		BaseController.call(this, router);
		this.set_up_routes();
		this.set_up_collection();
		this.set_up_table();
		this.set_up_model();
	};

	AsistenciaAlumnosController.prototype = new BaseController();
	AsistenciaAlumnosController.prototype.constructor = AsistenciaAlumnosController;

	AsistenciaAlumnosController.prototype.index = function(alumno_id) 
	{
		var model = new this.model();
		model.set("id", alumno_id);

		this.view(this.list);

		model.on("fetch", $.proxy(function(model){
			this.list.template_values.alumno = model.toJSON();
			this.collection.fetch(alumno_id);
		}, this));


		model.fetch();
	};

	AsistenciaAlumnosController.prototype.set_up_routes = function() 
	{
		this.router.create_namespaced_route("asistencia-alumnos/:id", "alumnos:route:asistencia", "alumnos");
		this.bus.on("alumnos:route:asistencia", $.proxy(function(alumno_id){this.index(alumno_id);}, this));
	};

	AsistenciaAlumnosController.prototype.set_up_collection = function() 
	{
		this.collection = new AsistenciaAlumnosCollection();
		this.collection.on("fetch:success", $.proxy(function(response){

			this.list.render();
		}, this));
	};

	AsistenciaAlumnosController.prototype.set_up_table = function() 
	{
		this.list = new AsistenciaAlumnosTable({collection: this.collection});
	};

	AsistenciaAlumnosController.prototype.set_up_model = function() 
	{
		this.model = Alumno.extend();
	};

})();
var AsistenciaAlumnosTable = TableView.extend({

	template: "public/templates/asistencia_alumnos_table.html",

	initialize: function(options)
	{
		TableView.prototype.initialize.call(this, options);
		this.controls.add_permission("false");
		//this.search_form.add_permission("false");
		this.footer.add_permission("false");
		this.reset_search_form_event();
	},

	render_template: function()
	{
		this.template_values.no_asistio = "No asistio";
		TableView.prototype.render_template.call(this);
		$(this.el).find("table").tablesorter();
		this.search_form.submit();
	},

	reset_search_form_event: function()
	{

		this.search_form.transform_dates = false;
		this.search_form.off("submit");
		this.search_form.on("submit", $.proxy(function(search_term){
			this.filter_table(search_term);
		}, this));

	},

	filter_table: function(search_term)
	{

		if(search_term === undefined) return;

		$(this.el).find("table tbody tr").hide();
		
		var data = search_term.split(" ");
		var rows =  $(this.el).find("table tbody tr");

		$.each(data, function(index, value){
			rows = rows.filter("*:contains('"+value+"')");
		});

		rows.show();
	}


});
var EmptyModel = BaseModel.extend({

	initialize:function(attributes)
	{
		BaseModel.prototype.initialize.call(this, attributes);
		this.data_types = {};
		this.data_types.fecha = DateType;
	}

});
var AsistenciaProfesorCollection = BaseCollection.extend({

	initialize: function()
	{
		BaseCollection.prototype.initialize.call(this);
		this.namespace = "sesiones";
	},

	fetch: function(profesor) 
	{
		if(this.can("search"))
		{
			var options = {};
			options.success = $.proxy(this.fetch_success, this);
			options.alternate_url = "get_asistencia_profesores";
			options.data = {data:JSON.stringify({profesor:profesor})};
			Backbone.Collection.prototype.fetch.call(this, options);
		}
		else
			this.bus.trigger("authorization:error");
	}

});
var AsistenciaProfesorController;
(function(){

	AsistenciaProfesorController = function(router)
	{
		BaseController.call(this, router);
		this.set_up_routes();
		this.set_up_collection();
		this.set_up_list();
		this.set_up_model();
	};

	AsistenciaProfesorController.prototype = new BaseController();
	AsistenciaProfesorController.prototype.constructor = AsistenciaProfesorController;

	AsistenciaProfesorController.prototype.index = function(profesor_id) 
	{
		var model = new this.model();
		model.set("id", profesor_id);

		model.on("fetch", $.proxy(function(model){
			
			this.list.template_values.profesor = model.toJSON();
			this.collection.fetch(profesor_id);

		}, this));

		model.fetch();
		this.view(this.list);
	};

	AsistenciaProfesorController.prototype.set_up_list = function() 
	{
		this.list = new AsistenciaProfesoresTable({collection:this.collection});
	};

	AsistenciaProfesorController.prototype.set_up_collection = function() 
	{
		this.collection = new AsistenciaProfesorCollection();
		this.collection.on("fetch:success", $.proxy(function(response){
			
			this.list.render();

		}, this));
	};

	AsistenciaProfesorController.prototype.set_up_routes = function() 
	{
		this.router.create_namespaced_route("asistencia-profesores/:id", "profesores:route:asistencia", "users");
		this.bus.on("profesores:route:asistencia", $.proxy(function(profesor_id){this.index(profesor_id);}, this));
	};

	AsistenciaProfesorController.prototype.set_up_model = function() 
	{
		this.model = User.extend();
	};

})();
var AsistenciaProfesoresTable = TableView.extend({

	template: "public/templates/asistencia_profesores_table.html",

	initialize: function(options)
	{
		TableView.prototype.initialize.call(this, options);
		this.controls.add_permission("false");
		//this.search_form.add_permission("false");
		this.footer.add_permission("false");
		this.reset_search_form_event();
	},

	render_template: function()
	{

		this.template_values.collection = this.collection.toJSON()[0].sesiones;
		this.template_values.total_horas = this.collection.toJSON()[0].total_horas;
		this.template_values.total_valor = this.collection.toJSON()[0].total_valor;

		this.template_values.options = {hash:{operator:"!="}};

		BaseView.prototype.render_template.call(this);

		$(this.el).find("table").tablesorter();
		$(this.el).find("table").on("sortEnd", $.proxy(function(){
			$(this.el).find("table tr.ignore").appendTo($(this.el).find("table tbody"));
		}, this));
		this.search_form.submit();
	},

	reset_search_form_event: function()
	{

		this.search_form.transform_dates = false;
		this.search_form.off("submit");
		this.search_form.on("submit", $.proxy(function(search_term){
			this.filter_table(search_term);
		}, this));

	},

	filter_table: function(search_term)
	{

		if(search_term === undefined) return;

		$(this.el).find("table tbody tr:not(.ignore)").hide();
		
		var data = search_term.split(" ");
		var rows =  $(this.el).find("table tbody tr:not(.ignore)");

		$.each(data, function(index, value){
			rows = rows.filter("*:contains('"+value+"')");
		});

		rows.show();
	}


});
var ErrorsController;
(function(){
	
	ErrorsController = function(container_id)
	{
		this.bus = EventBus;
		this.view = new GeneralErrorView();
		this.container = $("#"+container_id);
		
		this.bus.on("request:error", $.proxy(render_errors, this));
		this.bus.on("authorization:error", $.proxy(render_auth_errors, this));
		this.bus.on("exception:thrown", $.proxy(render_exception, this));
		this.bus.on("custom:error", $.proxy(render_custom_error, this));
		this.bus.on("custom:info", $.proxy(render_custom_info, this));
	};
	
	function render_errors(error, current_execution)
	{
		error = customize_error(error);

		if(current_execution !== undefined)
			this.view.retry_function = current_execution;
			
		this.view.template_values.status = error.status;
		this.view.template_values.statusText = error.statusText;
		this.view.template_values.responseText = error.responseText;
		this.view.template_values.button_label = "Reintentar";		
		
		this.view.render();
	}
	
	function render_auth_errors()
	{
		this.view.retry_function = function(){};
			
		this.view.template_values.status = "";
		this.view.template_values.statusText = "Authorization Error";
		this.view.template_values.responseText = "No tienes permiso para esta acción";
		this.view.template_values.button_label = "Cerrar";
			
		this.view.render();
	}
	
	function render_exception(exception_message)
	{
		this.view.retry_function = function(){};
			
		this.view.template_values.status = "";
		this.view.template_values.statusText = "Exception has been thrown";
		this.view.template_values.responseText = "<pre>"+exception_message+"</pre>";
		this.view.template_values.button_label = "Cerrar";
			
		this.view.render();
	}
	
	function render_custom_error(message)
	{
		this.view.retry_function = function(){};
			
		this.view.template_values.status = "";
		this.view.template_values.statusText = "Error";
		this.view.template_values.responseText = message;
		this.view.template_values.button_label = "Ok";
			
		this.view.render();
	}
	
	
	function render_custom_info(message)
	{
		this.view.retry_function = function(){};
			
		this.view.template_values.status = "";
		this.view.template_values.statusText = "";
		this.view.template_values.responseText = message;
		this.view.template_values.button_label = "Ok";
			
		this.view.render();
	}
	
	function customize_error(error)
	{
		if(error.status == 200 || error.status == 304)
		{
			error.statusText = "Debug Info";
			error.status = "";
			return error;
		}
		else {
			console.log(error);
		}
		
		if(error.status !== 0) return error;
	
		error.statusText = "El servidor no responde";
		error.status = "";
		
		return error;
	}
	
})();

var GeneralErrorView = BaseView.extend({
	
	tagName: "div",
	
	className: "modal",
	
	template:"error/modal",
	
	events: {
		"click a.retry":"retry"
	},
	
	initialize: function(options)
	{
		BaseView.prototype.initialize.call(this, options);
		
		var template = '<div class="modal" id="myModal">'+
		  '<div class="modal-header">'+
		    '<h3>{{statusText}} {{status}}</h3>'+
		  '</div>'+
		  '<div class="modal-body">'+
		    '{{responseText}}'+
		  '</div>'+
		  '<div class="modal-footer">'+
		    '<a href="#" class="retry btn btn-primary">{{button_label}}</a>'+	
		  '</div>'+
		'</div>';
		var template_proxy = new TemplateProxy();
		template_proxy.set_template(this.template, template);	
	},
	
	render: function()
	{
		$(this.el).modal({backdrop:"static", keyboard:false});
		BaseView.prototype.render.call(this);
	},
	
	render_template: function()
	{
		BaseView.prototype.render_template.call(this);
		var body = $(this.el).find(".modal-body");
		var html = body.text();
		body.html(html);
	},
	
	retry_function: function(){},
	
	retry: function(event)
	{
		$(this.el).empty();
		$(this.el).modal("hide");
		event.preventDefault();
		this.retry_function();
	}
});

var Examen = BaseModel.extend({

	initialize: function(options)
	{
		BaseModel.prototype.initialize.call(this, options);
		this.namespace = "examenes";
		this.data_types.fecha = DateType;
	},

	save_notas: function(notas)
	{
		if(this.can("create"))
		{
			var options = {success: $.proxy(this.success_callback, this, "save")};

			options.alternate_url = "save_notas";

			this.transform_output_data();
			Backbone.Model.prototype.save.call(this, notas, options);
		}
		else
			this.bus.trigger("authorization:error");
	}

});
var ExamenesController;
(function(){

	ExamenesController = function(router)
	{
		CrudController.call(this, "examenes", router);
		this.set_auth_namespace("Examen::");
		this.set_up_profesores();
		this.subscribe_to_custom_routes();
		this.set_up_alumnos();
		this.set_up_notas_collection();
		this.set_up_notas_form();
		
		this.set_up_cursos_modal_selection();
		this.set_up_profesores_modal();
	};

	ExamenesController.prototype = new CrudController();
	
	ExamenesController.constructor = ExamenesController;

	ExamenesController.prototype = _.extend(ExamenesController.prototype, CursosModalSelection);
	ExamenesController.prototype = _.extend(ExamenesController.prototype, ProfesoresModalSelectable);

	ExamenesController.prototype.set_up_model = function()
	{
		this.model = Examen.extend();
	};

	ExamenesController.prototype.notas = function(examen_id) 
	{
		
		var examen = new this.model({id:examen_id});

		$(this.notas_form.el).empty();
		this.notas_form.template_values = {};
		this.notas_form.examen_id = examen_id;
		this.notas_form.render();
		this.view(this.notas_form);

		examen.on(this.namespace+":fetch:success", $.proxy(function(response){

			this.current_examen = response.toJSON();
			this.notas_form.template_values.examen = this.current_examen;
			this.notas_collection.fetch(examen_id);

		}, this));

		examen.fetch();

	};

	ExamenesController.prototype.set_up_form = function() 
	{
		this.form = new ExamenesForm();
		
		this.form.on("can:render", $.proxy(function(){

			if(document.help_vars.current_user.rol == "Administrador")
			{
				this.form.template_helpers.administrador = true;
				this.profesores.fetch();
				return;
			}
			this.form.render_template();
		
        }, this));
	};

	ExamenesController.prototype.set_up_list = function() 
	{
		this.list = new ExamenesTable({collection:this.collection});
	};

	ExamenesController.prototype.set_up_profesores = function() 
	{
		this.profesores = new ProfesoresCollection();
		this.profesores.on("fetch:success", $.proxy(function(response){
			this.form.set_profesores(response.data.list);
			this.form.render_template();
		}, this));
	};

	ExamenesController.prototype.subscribe_to_custom_routes = function() 
	{
		this.router.create_namespaced_route("examenes/notas/:id", "examenes:route:notas", "examenes");
		this.bus.on("examenes:route:notas", $.proxy(function(examen_id){this.notas(examen_id);}, this));
	};

	ExamenesController.prototype.set_up_alumnos = function() 
	{
		this.alumnos = new AlumnosCollection();
		this.alumnos.on("fetch:success", $.proxy(function(response){

			this.notas_form.set_alumnos(response.data.list);
			this.notas_form.render_template();

		}, this));
	};

	ExamenesController.prototype.set_up_notas_collection = function() 
	{
		this.notas_collection = new NotasCollection();
		this.notas_collection.on("fetch:success", $.proxy(function(response){

			this.notas_form.template_values.notas = response.data.list;
			this.alumnos.add_filter("curso", this.current_examen.curso.id, "EQUALS");
			this.alumnos.fetch();

		}, this));
	};

	ExamenesController.prototype.set_up_notas_form = function() 
	{
		this.notas_form = new NotasForm();
		this.notas_form.on("submit", $.proxy(function(values){

			var model = new this.model();
			model.on(this.namespace+":save:success", $.proxy(function(){

				this.router.navigate("examenes", true);

			}, this));

			model.save_notas({notas:values});

		}, this));
	};

})();

var ExamenesForm = BaseForm.extend({

	template:"public/templates/examenes_form.html",

	events: _.extend({

		"click .select_curso": "select_curso_event",
		"click .select_profesor": "select_profesor_event"

	}, BaseForm.prototype.events),

	initialize: function(options){

		BaseForm.prototype.initialize.call(this, options);
		this.resubscribe_template_event();


		this.template_helpers.categorias_options = [{label:"LAB", value:"LAB"},
		{label:"GVR", value:"GVR"},
		{label:"ORAL", value:"ORAL"},
		{label:"Categoria 4", value:"Categoria 4"},
		{label:"Categoria 5", value:"Categoria 5"},
		{label:"Categoria 6", value:"Categoria 6"}];
	},

	select_profesor_event: function(event){
		event.preventDefault();
		this.select_profesor();
	},

	select_profesor: function() 
	{
		this.trigger("select:profesor");
	}, 

	select_curso: function(){
		this.trigger("select:curso");
	}, 

	select_curso_event: function(event){
		event.preventDefault();
		this.select_curso();
	},

	set_profesores: function(profesores){

		var transformed = [];
		$.each(profesores, function(index, profesor){

			transformed.push({label:profesor.name, value:profesor.id});

		});

		this.template_values.profesores = transformed;
	}	

});

var ExamenesTable = TableView.extend({

	template:"public/templates/examenes_table.html",

	initialize: function()
	{
		var options = {};
		options.control_values  = {"label":"Nueva Actividad", "url":"#examenes/new"};
		
		TableView.prototype.initialize.call(this, options);
	}


});
var NotasCollection = BaseCollection.extend({

	initialize: function()
	{
		BaseCollection.prototype.initialize.call(this);
		this.namespace = "examenes";
	},

	fetch: function(examen) 
	{
		if(this.can("search"))
		{
			var options = {};
			options.success = $.proxy(this.fetch_success, this);
			options.alternate_url = "get_notas";
			options.data = {data:JSON.stringify({examen:examen})};
			Backbone.Collection.prototype.fetch.call(this, options);
		}
		else
			this.bus.trigger("authorization:error");
	}
	
});
var NotasForm = BaseForm.extend({

	template: "public/templates/notas_form.html",

	events: _.extend({

		"keypress input[name='nota']":"nota_insert_event",
		"keyup input[name='nota']":"check_max_event",
		"blur input[name='nota']":"to_number_event"

	}, BaseForm.prototype.events),

	submit: function(save_and_new)
	{
		if(this.validate_form())
		{
			var values = this.get_values(this.examen_id);
			this.bus.trigger(this.namespace+":form:submit", values, save_and_new);
			this.trigger("submit", values, save_and_new);
			return true;
		}	
	
		this.focus_first_error_field();
	},

	nota_insert_event: function(event)
	{
		var charTyped = String.fromCharCode(event.which);

		var pattern = /[\d|.]/i;
		if($(event.currentTarget).val().match(/[.]/))
			pattern = /[\d]/i;

		var valid_chars = pattern.test(charTyped);
		if(this.isCharacterKeyPress(event) && !valid_chars)
			event.preventDefault();
	},

	check_max_event: function(event)
	{
		var input = event.currentTarget;
		var nota = Number($(input).val());
		if(nota > 100) $(input).val("100");
	},

	to_number_event: function(event)
	{
		var input = event.currentTarget;
		var nota = Number($(input).val());
		$(input).val(nota);
	},

	isCharacterKeyPress: function(evt) {

		if (typeof evt.which == "undefined")
			return true;

		if (typeof evt.which == "number" && evt.which > 0)
			return !evt.ctrlKey && !evt.metaKey && !evt.altKey && evt.which != 8;

		return false;
	},

	get_values: function(examen_id) {

		var values = [];

		var alumnos = $(this.el).find("div.alumno");

		$.each(alumnos, $.proxy(function(index, alumno_container){

			
			var nota_object = {};
			nota_object.examen = examen_id;
			nota_object.alumno = $(alumno_container).find("[name='alumno']").val();
			nota_object.nota = $(alumno_container).find("[name='nota']").val();
			nota_object.observaciones = $(alumno_container).find("[name='observaciones']").val();

			values.push(nota_object);

		},this));

		return values;

	},

	render_template: function()
	{
		BaseForm.prototype.render_template.call(this);
	},

	set_alumnos: function(alumnos)
	{
		var notas = this.template_values.notas;
		$.each(alumnos, $.proxy(function(index, alumno){

			alumno.nota = "";
			alumno.observaciones = "";

			var result = $.grep(notas, function(e){ return e.alumno == alumno.id; });
			if(result.length > 0)
			{	
				alumno.nota = result[0].nota;
				alumno.observaciones = result[0].observaciones;
			}

		}, this));

		this.template_values.alumnos = alumnos;
	}

});
var NotasGridController;
(function(){

	NotasGridController = function(router)
	{
		BaseController.call(this, router);
		this.set_up_routes();
		this.set_up_model();
		this.set_up_grid();
		this.feedback = new FeedbackView();
	};
 
	NotasGridController.prototype = new BaseController();
	NotasGridController.prototype.constructor = NotasGridController;

	NotasGridController.prototype.index = function(curso_id) 
	{ 
		$(this.grid.el).empty();
		this.grid.template_values = {};
                this.grid.template_values.is_admin = auth.check(["Administrador", "Director"]);
		this.grid.render();  
		this.view(this.grid);

		var model = new this.model();

		model.on("cursos:fetch:success", $.proxy(function(model, response){

			this.grid.template_values.overview = response.data.overview;
			this.grid.render_template();

		}, this));

		model.get_overview(curso_id);
	};

	NotasGridController.prototype.set_up_routes = function() 
	{
		this.router.create_namespaced_route("curso-overview/:id", "curso:route:overview", "cursos");
		this.bus.on("curso:route:overview", $.proxy(function(id){this.index(id);}, this));
	};

	NotasGridController.prototype.set_up_model = function() 
	{
		this.model = Curso.extend();
	};

	NotasGridController.prototype.set_up_grid = function() 
	{
		this.grid = new NotasGridView();
		this.grid.on("save:pesos", $.proxy(function(values){
			
			var model = new this.model({id:values.curso});
			model.save_pesos(values);
			model.on("save", $.proxy(function(){
				this.feedback.atach($("#content"));
				this.feedback.template_values.message = "Pesos guardados correctamente.";
				this.feedback.render();
			}, this));

		}, this));

		this.grid.on("close:curso", $.proxy(function(curso){
			
			var model = new this.model(curso);
			var model2 = new this.model(curso);
			model.transform_input_data();

			model.on("save", $.proxy(function(){
				
				model2.save_notas_finales({notas:this.grid.get_notas_finales()});

			}, this));

			model2.on("save", $.proxy(function(model){

				this.index(curso.id);

			}, this));	
			
			model.save();

		}, this));
	};

})();

var NotasGridView = BaseView.extend({

	template: "public/templates/notas_grid.html",

	events: {
		"keyup input.peso": "peso_change",
		"click button.save": "save_event",
		"click button.close_curso": "close_event",
		"click button.disabled" : "prevent_event"
	},

	initialize: function(options)
	{
		BaseView.prototype.initialize.call(this, options);
	},

	save_event: function(event)
	{
		event.preventDefault();
		this.trigger("save:pesos", this.get_values());
	},

	prevent_event: function(event)
	{
		event.preventDefault();
	},

	close_event: function(event)
	{
		event.preventDefault();

		var values = this.get_values();

		var curso = this.template_values.overview.curso;

		curso.estado = "Terminado";
		curso.pesos = JSON.stringify(values.pesos);

		this.trigger("close:curso", curso);
	},

	peso_change: function(event)
	{
		this.save_pesos();
		this.calculate_totals();
		this.update_total_percent();
	},

	get_values: function()
	{
		var values = {};
		values.pesos = {};
		values.curso = $(this.el).find("input[name='curso']").val();

		var inputs = $(this.el).find("thead input.peso");
		$.each(inputs, $.proxy(function(index, input){
				values.pesos[$(input).attr("name")] = $(input).val();
		}, this));

		return values;
	},

	get_notas_finales: function(){

		var notas = [];
		var curso = $(this.el).find("input[name='curso']").val();

		var alumnos = $(this.el).find("tr.alumno");

		$.each(alumnos, $.proxy(function(index, alumno_row){

			var alumno = $(alumno_row).find("td.alumno").attr("data");
			var nota = $(alumno_row).find("td.nota_final span").text();
			notas.push({curso:curso, alumno:alumno, nota:nota});

		}, this));

		return notas;

	}, 

	calculate_totals: function()
	{
		var alumnos = $(this.el).find("tr.alumno");

		$.each(alumnos, $.proxy(function(index, alumno_tr){
			
			this.calculate_for_alumno(alumno_tr);

		}, this));

	},

	calculate_for_alumno: function(alumno_tr)
	{
		var pruebas = $(alumno_tr).find("td.nota");
		var nota_final = 0;

		$.each(this.pesos, $.proxy(function(name, peso){
			var pruebas = $(alumno_tr).find("span[name='"+name+"']");

			var nota = 0;
			$.each(pruebas, $.proxy(function(index, prueba){
					
				var value = $(prueba).text();
				if(value == "-") value = 0;

				nota += Number(value);

			}, this));

			nota = nota/pruebas.length;

			var percent = this.pesos[name];

			nota_final += ((nota*percent)/100);

		}, this));


		$(alumno_tr).find(".nota_final span").removeClass("label-important");
		$(alumno_tr).find(".nota_final span").removeClass("label-success");
		$(alumno_tr).find(".nota_final span").removeClass("label-warning");

		var css = "label-important";
		if(nota_final <= 80 && nota_final >= 60) css = "label-warning";
		if(nota_final >= 80) css = "label-success";

		$(alumno_tr).find(".nota_final span").addClass(css);
		$(alumno_tr).find(".nota_final span").text(nota_final.toFixed(1));

	},

	save_pesos: function() 
	{
		var pesos = {};
		var inputs = $(this.el).find("thead input.peso");

		$.each(inputs, $.proxy(function(index, input){
			
			pesos[$(input).attr("name")] = $(input).val();

		}, this));

		this.pesos = pesos;
	},

	render_template: function()
	{
		BaseView.prototype.render_template.call(this);
		//$(this.el).find("input.peso").mask("U?DC");
		$('.nota').tooltip();
		this.add_default_percents();
		this.peso_change();

		if(this.template_values.overview && this.template_values.overview.curso.estado == "Terminado")
		{
			$(this.el).find("thead input.peso").attr("disabled", "disabled");
			$(this.el).find("button.btn-primary").detach();
			$(this.el).find("button.btn-success").detach();
		}

	},

	add_default_percents: function()
	{
		var pesos = $(this.el).find("thead input.peso");
		var default_percent =( 100/pesos.length).toFixed(0);

		if(!this.all_pesos_blank(pesos))
			return;


		$.each(pesos, $.proxy(function(index, input){
			
			$(input).val(default_percent);

		}, this));
	},

	all_pesos_blank: function(pesos)
	{
		var result = true;
		$.each(pesos, $.proxy(function(index, input){
			if($(input).val() !== "") result = false;
		}, this));

		return result;
	},

	update_total_percent: function()
	{
		var pesos = $(this.el).find("thead input.peso");
		var total_percent = 0;

		$.each(pesos, $.proxy(function(index, input){
			
			total_percent += Number($(input).val());

		}, this));

		$(this.el).find("th.total_percent span").text(total_percent);

		$(this.el).find("th.total_percent").removeClass("fail");
		$(this.el).find("button.btn-primary").removeClass("disabled");
		$(this.el).find("button.btn-success").removeClass("disabled");

		$(this.el).find("button.btn-primary").addClass("save");
		$(this.el).find("button.btn-success").addClass("close_curso");

		if(total_percent > 100) 
		{
			$(this.el).find("th.total_percent").addClass("fail");
			$(this.el).find("button.btn-primary").addClass("disabled");
			
			$(this.el).find("button.btn-primary").removeClass("save");
		}

		if(total_percent != 100)
		{
			$(this.el).find("button.btn-success").addClass("disabled");
			$(this.el).find("button.btn-success").removeClass("close_curso");
		}
	}

});
var Pago = BaseModel.extend({
	
        initialize: function(attributes)
	{
		BaseModel.prototype.initialize.call(this, attributes);
		this.namespace = "sesiones";
	}, 
           
	save_pagos: function(pagos)
	{
		if(this.can("create"))
		{
			var options = {success: $.proxy(this.success_callback, this, "save")};

			options.alternate_url = "save_pagos";

			this.transform_output_data();
			Backbone.Model.prototype.save.call(this, pagos, options);
		}
		else
			this.bus.trigger("authorization:error");
	} 

});
var PagosController;
(function(){

  PagosController = function(router)
  {
    BaseController.call(this, router);
    this.set_up_routes();
    this.set_up_form();
    this.set_up_profesores();
    this.set_up_sesiones();
    this.set_up_model();
    this.set_up_bodegas();
    this.set_up_products();
  };

  PagosController.prototype = new BaseController();
  PagosController.prototype.constructor = PagosController;

  PagosController.prototype.index = function() 
  {  
    this.form.render();
    this.view(this.form);
  };

  PagosController.prototype.set_up_routes = function() 
  {
    this.router.create_namespaced_route("pagos", "pagos:route", "pagos");
    this.bus.on("pagos:route", $.proxy(function(){this.index();}, this));
  };

  PagosController.prototype.set_up_form = function() 
  {
    this.form = new PagosForm();
    this.form.on("can:render", $.proxy(function(){
      this.profesores.fetch();
    }, this));

    this.form.on("profesor:change", $.proxy(function(profesor_id){
      this.form.template_values.profesor = profesor_id;
      this.sesiones.add_filter("profesor", profesor_id, "EQUALS");
      this.sesiones.add_filter("estado", "1", "EQUALS");
      this.sesiones.add_filter("pagado", "0", "EQUALS");
      this.sesiones.fetch();

      $('#total_sessions').html(this.sesiones.length);
    }, this));

    this.form.on("bodega:change", $.proxy(function(bodega_id){

      var products = this.original_products.filter(function(product){
        return product.id_bodega == bodega_id;
      });

      this.form.set_productos(new Backbone.Collection(products).toJSON());

      this.form.template_values.bodega = bodega_id;
      this.sesiones.add_filter("bodega", bodega_id, "EQUALS");
      this.sesiones.fetch();

      $('#total_sessions').html(this.sesiones.length);
    }, this));

    this.form.on("submit", $.proxy(function(values){

      if(values.sesiones.length === 0)
        return;

      var model = new this.model();
      model.on("sesiones:save:success", $.proxy(function(model){

        var values = model.toJSON();

        delete values.sesiones;
        delete values.profesor;

        this.go_to_pac_pagos(values);

      }, this));
      model.save_pagos(values);

    }, this));

  };    

  PagosController.prototype.set_up_profesores = function()
  {
    this.profesores = new ProfesoresCollection();
    this.profesores.set_order('name', 'asc');
    //this.profesores.set_limit(5000);
    this.profesores.on("fetch:success", $.proxy(function(response){

      this.form.set_profesores(response.data.list);
      this.bodegas.fetch();

    }, this));
  };

  PagosController.prototype.set_up_sesiones = function()
  {
    this.sesiones = new SesionesCollection();

    this.sesiones.on("fetch:success", $.proxy(function(response){

      this.form.template_values = _.extend(this.form.template_values, this.form.get_values());
      this.form.template_values.sesiones = this.sesiones.toJSON();
      this.form.render_template();

      this.set_hours_total(this.form.template_values.sesiones);

    }, this));
  };

  PagosController.prototype.set_up_model = function()
  {
    this.model = Pago.extend();
  };

  PagosController.prototype.go_to_pac_pagos = function(pagos_info)
  {
    var url = document.help_vars.base_url+"../orprog/or61fr.php?ID=1172&IDB="+pagos_info.bodega_destino+"&numdoc="+pagos_info.numdoc;
    window.open(url);
    this.sesiones.fetch();
  };

  PagosController.prototype.set_up_bodegas = function()
  {
    this.bodegas = new BodegasCollection();
    this.bodegas.on("fetch:success", $.proxy(function(response){
      this.sesiones.add_filter("bodega", response.data.list[0].id, "EQUALS");
      this.current_bodega = response.data.list[0].id;
      this.products.fetch_for_pagos();
      this.form.set_bodegas(response.data.list);
    }, this));
  };

  PagosController.prototype.set_up_products = function()
  {
    this.products = new PacProductCollection();
    this.products.on("fetch:success", $.proxy(function(response){

      this.original_products = response.data.list;

      var products = new Backbone.Collection(response.data.list).filter($.proxy(function(product){
        return product.get("id_bodega") == this.current_bodega;
      }, this));

      this.form.set_productos(new Backbone.Collection(products).toJSON());
      this.form.render_template();

    }, this));
  };

  PagosController.prototype.set_hours_total = function ( models )
  {
    var date_ini = new Date(),
      date_end = new Date(),
      total_hours = 0;

    $.each(models, function(index, model){
      var h_ini = String(model.hora_inicio).split(':'),
        h_end = String(model.hora_fin).split(':');

      date_ini.setHours(h_ini[0]);
      date_ini.setMinutes(h_ini[1]);
      date_ini.setSeconds(0);
      date_ini.setMilliseconds(0);

      date_end.setHours(h_end[0]);
      date_end.setMinutes(h_end[1]);
      date_end.setSeconds(0);
      date_end.setMilliseconds(0);

      var diff_ms = (date_end - date_ini),
        diff_s = Math.round(diff_ms / 1000),
        diff_m = Math.round(diff_s / 60),
        diff_h = Math.round(diff_m / 60);

      total_hours += diff_h;
    });

    $('#total_hours').html(total_hours);
  };

})();

var PagosForm = BaseForm.extend({

	template: "public/templates/pagos_form.html",

	events: _.extend({
		"change select#profesor_field": "profesor_change",
		"change select#bodega_field": "bodega_change",
		"keyup input[id='type_search_curso']": "filter_cursos",
    "change input[id='select_all']": "toggle_all_event"
	}, BaseForm.prototype.events),

	initialize: function(options)
	{
		BaseForm.prototype.initialize.call(this, {namespace:"search"});
		BaseView.prototype.initialize.call(this, options);
		this.resubscribe_template_event();
		this.template_helpers = {};
	},

	filter_cursos: function(event)
	{
    var date_ini = new Date(),
      date_end = new Date(),
      search_term = $(this.el).find("input[id='type_search_curso']").val(),
      total_hours = 0;

    $(this.el).find("[data-curso]").attr("class", "");

		var unmatched_containers = $(this.el).find("[data-curso]").filter(function(){ 
			return !new RegExp(search_term, "i").test($.trim($(this).attr("data-curso")));
		});

    var matched_containers = $(this.el).find("[data-curso]").filter(function(){
      return new RegExp(search_term, "i").test($.trim($(this).attr("data-curso")));
    });

		unmatched_containers.attr("class", "none");

    $('#total_sessions').html(matched_containers.length);

    $.each(matched_containers, function(index, item) {
      var h_ini = String($(this).find('td[data-hora-ini]').html()).split(':'),
        h_end = String($(this).find('td[data-hora-end]').html()).split(':');

      date_ini.setHours(h_ini[0]);
      date_ini.setMinutes(h_ini[1]);
      date_ini.setSeconds(0);
      date_ini.setMilliseconds(0);

      date_end.setHours(h_end[0]);
      date_end.setMinutes(h_end[1]);
      date_end.setSeconds(0);
      date_end.setMilliseconds(0);

      var diff_ms = (date_end - date_ini),
        diff_s = Math.round(diff_ms / 1000),
        diff_m = Math.round(diff_s / 60),
        diff_h = Math.round(diff_m / 60);

      total_hours += diff_h;
    });

    $('#total_hours').html(total_hours);
    $(this.el).find('#select_all').prop('checked', false);
    this.toggle_all(false);
	},

  toggle_all_event: function( event )
  {
    var check_all = $(this.el).find('#select_all');
    this.toggle_all(check_all.prop('checked'));
  },

  toggle_all: function ( checked )
  {
    var tr_visible = $('tr[data-curso]').not('.none'),
      checkboxes_all = $(this.el).find(':checkbox');

    checkboxes_all.splice(0, 1);
    checkboxes_all.prop('checked', false);

    $.each( tr_visible, function( key, value ) {
      $(this).find(':checkbox').prop('checked', checked);
    });
  },

	set_profesores: function(profesores){

		var options = [];

		$.each(profesores, $.proxy(function(index, profesor){

			options.push({value:profesor.id, label:profesor.name});

		}, this));

		this.template_values.profesores = options;
	},

	set_bodegas: function(bodegas)
	{
		var options = [];

		$.each(bodegas, $.proxy(function(index, bodega){
			options.push({value: bodega.id, label:bodega.nombre});
		}, this));

		this.template_values.bodegas = options;
	},

	bodega_change: function(event)
	{
		event.preventDefault();
		this.trigger_bodega_change();
	},  

	trigger_bodega_change: function()
	{
		var bodega_id = $(this.el).find("#bodega_field").val();
		this.trigger("bodega:change", bodega_id);
	},

	profesor_change: function(event) 
	{
		event.preventDefault();
		this.trigger_profesor_change();
	},

	trigger_profesor_change: function() 
	{
		var profesor_id = $(this.el).find("#profesor_field").val();
		this.trigger("profesor:change", profesor_id);
	},

	get_values: function()
	{
		var values = {};

		values.profesor = $(this.el).find("#profesor_field").val();
		values.producto = $(this.el).find("#product_field").val();
		values.bodega = $(this.el).find("#bodega_field").val();
		values.search = $(this.el).find("#search_field").val();
		values.sesiones = [];

		$.each($(this.el).find("input[name='sesion']:checked"), function(index, sesion_field){
			values.sesiones.push($(sesion_field).val());
		});

		return values;
	},

	set_productos: function(products)
	{
		var transformed = [];

		$.each(products, function(index, object){
			transformed[index] = {label:object.nombre_bodega+" - "+object.nombre, value:object.id+"-"+object.id_bodega};
		});

		this.template_helpers.productos = transformed;
	},

	set_status: function(search_term)
	{
	    this.search_term = search_term;
	    this.render_status();
	},

	render_status: function()
	{
	    if(this.search_term !== undefined)
	      $(this.el).find("[name='search']").val(this.search_term);
	}
});

var PacUsersCollection = BaseCollection.extend({

	initialize: function(){
		BaseCollection.prototype.initialize.call(this);
		this.namespace = "roles";
	},

  fetch: function(options){
    if(options === undefined) options = {};

    options.alternate_url = "get_pac_users";
    BaseCollection.prototype.fetch.call(this, options);
  }

});


var Rol = BaseModel.extend({

	initialize: function(options)
	{
		BaseModel.prototype.initialize.call(this, options);
		this.namespace = "roles";
	}

});

var RolesController;
(function(){

  RolesController = function(router)
  {
    CrudController.call(this, "roles", router);
    this.set_auth_namespace("Rol::");
    this.form.on("got:template", $.proxy(function(){this.render_form();}, this));
    this.set_up_pac_users();
  };

  RolesController.prototype = new CrudController();

  RolesController.constructor = RolesController;

  RolesController.prototype.render_form = function() 
  {
    this.pac_users.fetch();
  };

  RolesController.prototype.set_up_model = function() 
  {
    this.model = Rol.extend();
  };

  RolesController.prototype.set_up_form = function() 
  {
    this.form = new RolesForm();
  };

  RolesController.prototype.set_up_list = function() 
  {
    this.list = new RolesTable({collection:this.collection});
    this.list.template_values.is_admin = auth.check(["Administrador"]);
  };

  RolesController.prototype.set_up_pac_users = function() 
  {
    this.pac_users = new PacUsersCollection();
    this.pac_users.on("fetch:success", $.proxy(function(response){
      this.form.template_values.pac_users = response.data.list;
      this.form.render_template();
    }, this)); 
  };

})();

var RolesForm = BaseForm.extend({

	template:"public/templates/roles_form.html",

  initialize: function(options)
  {
    BaseView.prototype.initialize.call(this, options);
    this.resubscribe_template_event();
    this.template_values.username = "";
    var roles = [];
    if(auth.check(["Administrador"])){
      roles.push({label: "Administrador", value: "Administrador"});
    }
    roles.push({label: "Director", value: "Director"});
    roles.push({label: "Counter", value:"Counter"});

    this.template_helpers = {};
    this.template_helpers.roles = roles;
  }

});

var RolesTable = TableView.extend({

	template:"public/templates/roles_table.html",

	initialize: function()
	{
		var options = {};
		options.control_values  = {"label":"Asignar o editar Rol", "url":"#roles/new"};
		
		TableView.prototype.initialize.call(this, options);
	}

});

var AsistenciasCollection = BaseCollection.extend({

	initialize: function()
	{
		BaseCollection.prototype.initialize.call(this);
		this.namespace = "sesiones";
	},

	fetch: function(sesion) 
	{
		if(this.can("search"))
		{
			var options = {};
			options.success = $.proxy(this.fetch_success, this);
			options.alternate_url = "get_asistencias";
			options.data = {data:JSON.stringify({sesion:sesion})};
			Backbone.Collection.prototype.fetch.call(this, options);
		}
		else
			this.bus.trigger("authorization:error");
	}

});
var AsistenciasForm = BaseForm.extend({

	template: "public/templates/asistencias_form.html",

	initialize: function(options)
	{
		BaseForm.prototype.initialize.call(this, options);
		this.resubscribe_template_event();
	},

	get_values: function() 
	{
		var values = {};

		$.each($(this.el).find("div.asistencia"), $.proxy(function(index, container){
			
			var sesion = $(container).find("input[name='sesion']").val();
			var alumno = $(container).find("input[name='alumno']").val();
			var observaciones = $(container).find("textarea[name='observaciones']").val();
			var estado = $(container).find("select[name='estado']").val();

			if(!values[sesion])
				values[sesion] = {};

			values[sesion][alumno] = {estado:estado, observaciones:observaciones};

		}, this));

		return values;
	}

});
var Sesion = BaseModel.extend({

	initialize: function(options)
	{
		BaseModel.prototype.initialize.call(this, options);
		this.namespace = "sesiones";
		this.data_types.fecha = DateType;
		this.data_types.sin_profesor = BooleanType;
		this.data_types.estado = BooleanType; 
                this.data_types.pagado = BooleanType;        

	},   
 
	save_asistencia: function(matriculas)
	{
		if(this.can("create"))
		{
			var options = {success: $.proxy(this.success_callback, this, "save")};

			options.alternate_url = "save_asistencia";
			Backbone.Model.prototype.save.call(this, matriculas, options);
		}
		else
			this.bus.trigger("authorization:error");
	}

});
var SesionesCollection = BaseCollection.extend({

  initialize: function () {
    BaseCollection.prototype.initialize.call(this);
    this.namespace = "sesiones";
  },

  fetch_sessions: function () {
    if (this.can("search")) {
      var options = {};
      //this.set_limit(5000);
      options = this.add_status_to_options(options);
      options.success = $.proxy(this.fetch_success, this);
      options.alternate_url = "search";
      Backbone.Collection.prototype.fetch.call(this, options);
    }
    else
      this.bus.trigger("authorization:error");
  }

});

var SesionesController;
(function(){

  SesionesController = function(router)
  {
    
      
    CrudController.call(this, "sesiones", router);
    this.set_auth_namespace("Sesion::");

    this.form.on("can:render", $.proxy(function(){
      this.profesores.fetch();
    }, this));

    this.set_up_profesores();
    this.set_up_alumnos();
    this.set_up_asistencias_form();
    this.subscribe_to_custom_routes();
    this.set_up_asistencias();

    this.set_up_cursos_modal_selection();
    this.set_up_profesores_modal();
    this.set_up_events();
  };

  SesionesController.prototype = new CrudController();
  SesionesController.constructor = SesionesController;
  SesionesController.prototype = _.extend(SesionesController.prototype, CursosModalSelection);
  SesionesController.prototype = _.extend(SesionesController.prototype, ProfesoresModalSelectable);

  SesionesController.prototype.index = function()
  {
    if(document.help_vars.current_user.rol == "profesor"){
      this.list.search_form.set_status(document.help_vars.current_user.name);
      this.list.collection.add_filter("GLOBAL", document.help_vars.current_user.name, "LIKE");
    }
    CrudController.prototype.index.call(this);
  };

  SesionesController.prototype.set_up_model = function() 
  {
    this.model = Sesion.extend();
  };

  SesionesController.prototype.set_up_form = function() 
  {
    this.form = new SesionesForm();
  };

  SesionesController.prototype.asistencia = function(curso_id, sesion_id) 
  {

    this.alumnos.add_filter("curso", curso_id, "EQUALS");

    var estado_options = [];
    estado_options.push({label:"Asistio", value:'Asistio'});
    estado_options.push({label:"No asistio", value:'No asistio'});
    estado_options.push({label:"Llego tarde", value:'Llego tarde'});
    estado_options.push({label:"Se fue temprano", value:'Se fue temprano'});

    this.asistencias_form.template_values.estado_options = estado_options;

    this.asistencias_form.template_values.sesion = sesion_id;
    this.asistencias_form.render();
    this.view(this.asistencias_form);

  };

  SesionesController.prototype.edit_form = function(model)
  {
    if(model.get("estado") && document.help_vars.current_user.rol == "profesor")
      return;

    this.form.set_values(model.toJSON());
    this.form.render();
  };

  SesionesController.prototype.set_up_list = function() 
  {    
    this.list = new SesionesTable({collection:this.collection});
    this.list.template_values.is_admin = auth.check(["Administrador", "Director"]);
    this.list.template_values.user_id = document.help_vars.current_user.id;             
  };  
   
  SesionesController.prototype.set_up_collection = function(){
    this.collection = new SesionesCollection();
    this.collection.on("fetch:success", $.proxy(function(){
      this.list.render();
    }, this));
  };

  SesionesController.prototype.set_up_profesores = function() 
  {
    this.profesores = new ProfesoresCollection();
    this.profesores.on("fetch:success", $.proxy(function(response){
      this.form.set_profesores(response.data.list);

      if(this.form.template_values.profesor === undefined && document.help_vars.current_user.rol == "profesor")
        this.form.template_values.profesor = {id:document.help_vars.current_user.id}; 

      this.form.render_template();
    }, this));
  };

  SesionesController.prototype.set_up_alumnos = function() 
  {
    this.alumnos = new AlumnosCollection();
    this.alumnos.on("fetch:success", $.proxy(function(response){

      var alumnos  = response.data.list;
      var asistencias = this.asistencias_form.template_values.asistencias;

      var template_alumnos = this.add_asistencia_info_to_alumnos(alumnos, asistencias);

      this.asistencias_form.template_values.alumnos = template_alumnos;
      this.asistencias_form.render_template();

    }, this));
  };

  SesionesController.prototype.add_asistencia_info_to_alumnos = function(alumnos, asistencias) 
  {
    var template_alumnos = [];

    $.each(alumnos, $.proxy(function(index, alumno){

      $.each(asistencias, $.proxy(function(index, asistencia){

        if(alumno.id === asistencia.alumno)
          {
            alumno.estado = asistencia.estado;
            alumno.observaciones = asistencia.observaciones;
          }

      }, this));

      template_alumnos.push(alumno);

    }, this));

    return template_alumnos;
  };

  SesionesController.prototype.set_up_asistencias_form = function() 
  {
    this.asistencias_form = new AsistenciasForm();
    this.asistencias_form.on("can:render", $.proxy(function(){
      this.asistencias.fetch(this.asistencias_form.template_values.sesion);
    }, this));

    this.asistencias_form.on("submit", $.proxy(function(values){

      var model = new this.model();

      model.on(this.namespace+":save:success", $.proxy(function(){

        this.router.navigate(this.namespace, true);

      }, this));

      model.save_asistencia(values);

    }, this));
  };

  SesionesController.prototype.subscribe_to_custom_routes = function() 
  {

    this.router.create_namespaced_route("sesiones/asistencia/:id/:id", "sesiones:route:asistencia", "sesiones");
    this.bus.on("sesiones:route:asistencia", $.proxy(function(sesion_id, curso_id){this.asistencia(curso_id, sesion_id);}, this));

  };

  SesionesController.prototype.set_up_asistencias = function() 
  {
    this.asistencias = new AsistenciasCollection();
    this.asistencias.on("fetch:success", $.proxy(function(response){

      this.asistencias_form.template_values.asistencias = response.data.collection;
      this.alumnos.fetch();

    }, this));
  };

  SesionesController.prototype.set_up_events = function() 
  {
    this.list.on("sesion:validation", $.proxy(function(id, estado, element){

      var JSON = this.collection.get(id).toJSON();
      delete JSON.profesor_curso;

      var model = new Sesion(JSON);
      model.set("estado", estado);

      model.on("save", $.proxy(function(){

        this.collection.fetch();

      },this));

      model.save();

    },this));
  };

})();

var SesionesForm = BaseForm.extend({

	template:"public/templates/sesiones_form.html",

	events:_.extend({
		"click a.validate_sesion": "validate_sesion",
		"click a.invalidate_sesion": "invalidate_sesion",
		"click .select_curso": "select_curso_event",
                "click .select_profesor": "select_profesor_event",
                "click .btn_go": "form_go"
	}, BaseForm.prototype.events),
   
	initialize: function(options){
		BaseForm.prototype.initialize.call(this, options);
		this.resubscribe_template_event();
	},

	form_go: function(event){
 
            var values = this.get_values(),
              date_ini = new Date(),
              date_end = new Date(),
              max_hours = 1,
              total_hours_session = 0,
              total_hours = 0; 
            
            if ( values.curso != null && values.hora_inicio.length && values.hora_fin.length ) {

              var h_ini = String(values.hora_inicio).split(':'),
               h_end = String(values.hora_fin).split(':');
 
              max_hours = parseInt(values.curso.horas);
                      
              date_ini.setHours(h_ini[0]);
              date_ini.setMinutes(h_ini[1]);
              date_ini.setSeconds(0);
              date_ini.setMilliseconds(0);

              date_end.setHours(h_end[0]);
              date_end.setMinutes(h_end[1]);
              date_end.setSeconds(0);
              date_end.setMilliseconds(0);

              var diff_ms = (date_end - date_ini),
                diff_s = Math.round(diff_ms / 1000),
                diff_m = Math.round(diff_s / 60),
                diff_h = Math.round(diff_m / 60);
  
              total_hours = parseInt(diff_h);  
            }
                 
            var hours_avail = max_hours - total_hours_session,
                hours_to_validate, control_horas=0;
            
            if ($("input[name='id']").val()){//is edit  

                var date_ini = new Date(),
                  date_end = new Date();

                var h_ini = String(values.curso.hora_inicio_original_of_sesion).split(':'),
                  h_end = String(values.curso.hora_fin_original_of_sesion).split(':');

                date_ini.setHours(h_ini[0]);
                date_ini.setMinutes(h_ini[1]);
                date_ini.setSeconds(0);
                date_ini.setMilliseconds(0);
        
                date_end.setHours(h_end[0]);
                date_end.setMinutes(h_end[1]);
                date_end.setSeconds(0);
                date_end.setMilliseconds(0);


                var diff_ms = (date_end - date_ini),
                  diff_s = Math.round(diff_ms / 1000),
                  diff_m = Math.round(diff_s / 60),
                  diff_h = Math.round(diff_m / 60);

                var total_horas_originales_sesion = parseInt(diff_h);
                
                if (total_hours > values.curso.horas ){
                    control_horas=0;
                     
                }else{
                
                    if (values.curso.hours_avail>0){//Si existen horas disnponibles
                        if (total_hours>0 && total_hours <= values.curso.hours_avail){
                            hours_to_validate = values.curso.hours_avail;   
                            control_horas=1
                        }else{
                            hours_to_validate = total_hours;
                            control_horas=1;
                        }   
                    }else{
                        control_horas=1;
                        hours_to_validate = total_horas_originales_sesion;         
                    }
                }
                 
            }else{//is new
                total_hours <= values.curso.hours_avail ? control_horas=1 : control_horas=0;   
                hours_to_validate = values.curso.hours_avail;  
            }         
      
            if ( total_hours <= hours_to_validate && hours_to_validate > 0 &&  control_horas==1 ) {       
                $(this.el).find('.btn_go').prop('disabled', false);
                $(this.el).find('#alert_danger').attr('class', 'none');
                this.submit();
            }     
            else {    
                $(this.el).find('#alert_incorrect_hours').attr('class', 'none');
                $(this.el).find('#alert_danger').attr('class', 'none'); 
                if (total_hours <= 0){   
                    $(this.el).find('#alert_incorrect_hours').attr('class', 'alert alert-danger');
                }else{
                    $(this.el).find('#alert_danger').attr('class', 'alert alert-danger');
                }
            }
	},
 
        select_profesor_event: function(event){
          event.preventDefault();
          this.select_profesor();
        },

	select_profesor: function() 
	{
		this.trigger("select:profesor");
	}, 

	select_curso_event: function(event){
		event.preventDefault();
		this.select_curso();
	},

	select_curso: function(){
		this.trigger("select:curso");
	},
  
	validate_sesion: function(event)
	{
		event.preventDefault();
		$(this.el).find("input[name='estado']").val(1);
                this.form_go();          
	},

	invalidate_sesion: function(event)
	{  
		event.preventDefault();
		$(this.el).find("input[name='estado']").val(0);
                this.form_go();                            
	},

	render_template: function(){
    var tarifas = [];
    tarifas.push({label:"Tarifa normal", value:"price"});
    tarifas.push({label:"Tarifa fin de semana", value:"weekend_price"});
    tarifas.push({label:"Tarifa fuera de academia", value:"out_academy_price"});
  
		this.template_values.is_admin = auth.check(["Administrador", "Director"]);
    this.template_values.tarifas = tarifas;  

		BaseForm.prototype.render_template.call(this);

		if($(this.el).find("#fecha_field").length === 0) return;

		var calendar_object = $(this.el).find("#fecha_field").data("dateinput");
		calendar_object.hide();
	},

	set_profesores: function(profesores){
		var transformed = [];

		$.each(profesores, function(index, profesor){
			transformed.push({label:profesor.name, value:profesor.id});
		});

		this.template_values.profesores = transformed;
	}
	
});

var SesionesSearchForm = SearchForm.extend({

  template: "public/templates/sesiones_search_form.html",

  events:_.extend({
    "click .estado_off": "set_estado_off",
    "click .estado_on": "set_estado_on",
    "click .pagado_on": "set_pagado_on",
    "keyup input[name='search']": "filter_data"
  }, BaseForm.prototype.events),

  initialize: function(options)
  {
    SearchForm.prototype.initialize.call(this, options);

    if ( this.template_values.can_create === undefined )
    {
      this.template_values.can_create = true;
    }

    this.template_values.label = options.values.label;
    this.template_values.url = options.values.url;

    this.no_url = false;
  },

  set_estado_off: function ( event )
  {
    var input = $(this.el).find("input[name='estado_off']"),
      icon = $(this.el).find("i[data-icon='estado_off']"),
      value = parseInt(input.val()) ? false : true;

    input.val( value ? 1 : 0 );
    icon.attr('class', ( value ? 'icon-ok-circle' : 'icon-remove-circle' ) + ' icon-white');
  },

  set_estado_on: function ( event )
  {
    var input = $(this.el).find("input[name='estado_on']"),
      icon = $(this.el).find("i[data-icon='estado_on']"),
      value = parseInt(input.val()) ? false : true;

    input.val( value ? 1 : 0 );
    icon.attr('class', ( value ? 'icon-ok-circle' : 'icon-remove-circle' ) + ' icon-white');
  },

  set_pagado_on: function ( event )
  {
    var input = $(this.el).find("input[name='pagado_on']"),
      icon = $(this.el).find("i[data-icon='pagado_on']"),
      value = parseInt(input.val()) ? false : true;

    input.val( value ? 1 : 0 );
    icon.attr('class', ( value ? 'icon-ok-circle' : 'icon-remove-circle' ) + ' icon-white');
  },

  filter_data: function(event)
  {
    var search_term = $(this.el).find("input[name='search']").val();

    $(this.el).parent().find("[data-entry]").attr('class', '');

    var unmatched_containers = $(this.el).parent().find("[data-entry]").filter(function(){
      return !new RegExp(search_term, "i").test($.trim($(this).attr("data-entry")));
    });

    unmatched_containers.attr("class", "none");
  }

});

var SesionesTable = TableView.extend({

  template: 'public/templates/sesiones_table.html',

  initialize: function ()
  { 
    this.collection.add_filter('estado', 0, 'EQUALS');      
      
    var options = {};
    options.control_values  = {"label":"Nueva sesion", "url":"#sesiones/new"};
    TableView.prototype.initialize.call(this, options);
 
    this.controls.add_permission(false); 
    this.search_form.off('submit');
    this.search_form.on('submit', $.proxy(function (search) {
        
          
      var values = this.search_form.get_values(); 

      this.collection.remove_filter('estado');
      this.collection.remove_filter('pagado'); 
      
      
     if ( parseInt(values.estado_off) === 0 && values.estado_on == 1 && values.pagado_on == 1 ) {
         this.collection.add_filter('estado', 1, 'EQUALS');    
      }else if ( parseInt(values.estado_off) === 1 && values.estado_on == 1 ) {
         this.collection.remove_filter('estado');
         this.collection.remove_filter('pagado'); 
  
       }else if ( parseInt(values.estado_off) === 1 && values.estado_on !== 1 ) {
        this.collection.add_filter('estado', 0, 'EQUALS');
      }
      else if ( parseInt(values.estado_on) === 1 && values.estado_off !== 1 ) {
        this.collection.add_filter('estado', 1, 'EQUALS');
      }
 
      if ( parseInt(values.pagado_on) === 1 ) {
        this.collection.add_filter('pagado', 1, 'EQUALS');
      }

      this.collection.fetch_sessions();

    }, this));
    
           
  },   
  
  set_up_controls: function (options) {
      
    var control_values = {};
    if (options && options.control_values)
      control_values = options.control_values;

    this.controls = new TableControls();
    this.search_form = new SesionesSearchForm({values: control_values});
    this.footer = new TableFooter();
  }

});

$(document).ready(function(){

	set_initial_state();
	
	var router = new BaseRouter();

	var main_container_id		= "main_container";
	
	var errors_controller = new ErrorsController(main_container_id);
	var cursos_controller = new CursosController(router);
  var report_cursos_controller = new ReportController(router);
  var report_nomina_controller = new NominaController(router);
	var alumnos_controller = new AlumnosController(router);
	var alumnos_switch_controller = new AlumnosSwitchController(router);
	var sesiones_controller = new SesionesController(router);
	var users_controller = new UsersController(router);
	var examenes_controller = new ExamenesController(router);
	var pagos_controller = new PagosController(router);
	var notas_grid_controller = new NotasGridController(router);
	var roles_controller = new RolesController(router);
	
	var asistencia_profesores = new AsistenciaProfesorController(router);
	var asistencia_alumnos = new AsistenciaAlumnosController(router);
	var historico_alumnos = new AlumnosHistoryController(router);

	var loader = new Loader();
	
	var main_menu = new MainMenu("main_menu");
	main_menu.render();
	
	Backbone.history.start();

	set_initial_url();

	$('.dropdown-toggle').dropdown()

});


function set_initial_state()
{
	if(document.help_vars.current_user.id == null)
	{
		document.location.href = "login";
		return;
	}
	
	template_proxy = new TemplateProxy();
	
	auth = new Auth();
	auth.set_current_user(document.help_vars.current_user);
	auth.add_permission(document.help_vars.user_type);
	auth.add_permission("user_"+document.help_vars.current_user.id);
	if(document.help_vars.current_user.rol == "Administrador")
		auth.add_permission("Administrador");
	if(document.help_vars.current_user.rol == "Director")
		auth.add_permission("Director");
	if(document.help_vars.current_user.rol == "Counter")
		auth.add_permission("Counter");

	auth.add_permission(document.help_vars.current_user.rol);	
	
	$.each(document.help_vars.user_permissions, function(permission, has_permission){
		if(has_permission)
		{
			auth.add_permission(permission);
		}
	})
}

function set_initial_url()
{
	if(document.location.hash != "") return false;
		
	if(document.help_vars.current_user.rol == "profesor")
	{
		document.location.href = "#sesiones";
		return false;
	}

	document.location.href = "#cursos";
	
}
