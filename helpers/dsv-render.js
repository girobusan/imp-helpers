(()=>{var e={809:function(e,t){var r,i,n;i=[],r=function e(){"use strict";var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},r=!t.document&&!!t.postMessage,i=t.IS_PAPA_WORKER||!1,n={},s=0,a={parse:function(r,i){var o=(i=i||{}).dynamicTyping||!1;if(b(o)&&(i.dynamicTypingFunction=o,o={}),i.dynamicTyping=o,i.transform=!!b(i.transform)&&i.transform,i.worker&&a.WORKERS_SUPPORTED){var u=function(){if(!a.WORKERS_SUPPORTED)return!1;var r,i,o=(r=t.URL||t.webkitURL||null,i=e.toString(),a.BLOB_URL||(a.BLOB_URL=r.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",i,")();"],{type:"text/javascript"})))),u=new t.Worker(o);return u.onmessage=m,u.id=s++,n[u.id]=u}();return u.userStep=i.step,u.userChunk=i.chunk,u.userComplete=i.complete,u.userError=i.error,i.step=b(i.step),i.chunk=b(i.chunk),i.complete=b(i.complete),i.error=b(i.error),delete i.worker,void u.postMessage({input:r,config:i,workerId:u.id})}var c=null;return a.NODE_STREAM_INPUT,"string"==typeof r?(r=function(e){return 65279===e.charCodeAt(0)?e.slice(1):e}(r),c=i.download?new h(i):new d(i)):!0===r.readable&&b(r.read)&&b(r.on)?c=new l(i):(t.File&&r instanceof File||r instanceof Object)&&(c=new f(i)),c.stream(r)},unparse:function(e,t){var r=!1,i=!0,n=",",s="\r\n",o='"',u=o+o,h=!1,f=null,d=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||a.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(n=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(r=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(h=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(o=t.quoteChar),"boolean"==typeof t.header&&(i=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");f=t.columns}void 0!==t.escapeChar&&(u=t.escapeChar+o),("boolean"==typeof t.escapeFormulae||t.escapeFormulae instanceof RegExp)&&(d=t.escapeFormulae instanceof RegExp?t.escapeFormulae:/^[=+\-@\t\r].*$/)}}();var l=new RegExp(p(o),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return c(null,e,h);if("object"==typeof e[0])return c(f||Object.keys(e[0]),e,h)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||f),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),c(e.fields||[],e.data||[],h);throw new Error("Unable to serialize unrecognized input");function c(e,t,r){var a="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var o=Array.isArray(e)&&0<e.length,u=!Array.isArray(t[0]);if(o&&i){for(var h=0;h<e.length;h++)0<h&&(a+=n),a+=g(e[h],h);0<t.length&&(a+=s)}for(var f=0;f<t.length;f++){var d=o?e.length:t[f].length,l=!1,c=o?0===Object.keys(t[f]).length:0===t[f].length;if(r&&!o&&(l="greedy"===r?""===t[f].join("").trim():1===t[f].length&&0===t[f][0].length),"greedy"===r&&o){for(var p=[],m=0;m<d;m++){var _=u?e[m]:m;p.push(t[f][_])}l=""===p.join("").trim()}if(!l){for(var y=0;y<d;y++){0<y&&!c&&(a+=n);var v=o&&u?e[y]:y;a+=g(t[f][v],y)}f<t.length-1&&(!r||0<d&&!c)&&(a+=s)}}return a}function g(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var i=!1;d&&"string"==typeof e&&d.test(e)&&(e="'"+e,i=!0);var s=e.toString().replace(l,u);return(i=i||!0===r||"function"==typeof r&&r(e,t)||Array.isArray(r)&&r[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(s,a.BAD_DELIMITERS)||-1<s.indexOf(n)||" "===s.charAt(0)||" "===s.charAt(s.length-1))?o+s+o:s}}};if(a.RECORD_SEP=String.fromCharCode(30),a.UNIT_SEP=String.fromCharCode(31),a.BYTE_ORDER_MARK="\ufeff",a.BAD_DELIMITERS=["\r","\n",'"',a.BYTE_ORDER_MARK],a.WORKERS_SUPPORTED=!r&&!!t.Worker,a.NODE_STREAM_INPUT=1,a.LocalChunkSize=10485760,a.RemoteChunkSize=5242880,a.DefaultDelimiter=",",a.Parser=g,a.ParserHandle=c,a.NetworkStreamer=h,a.FileStreamer=f,a.StringStreamer=d,a.ReadableStreamStreamer=l,t.jQuery){var o=t.jQuery;o.fn.parse=function(e){var r=e.config||{},i=[];return this.each((function(e){if("INPUT"!==o(this).prop("tagName").toUpperCase()||"file"!==o(this).attr("type").toLowerCase()||!t.FileReader||!this.files||0===this.files.length)return!0;for(var n=0;n<this.files.length;n++)i.push({file:this.files[n],inputElem:this,instanceConfig:o.extend({},r)})})),n(),this;function n(){if(0!==i.length){var t,r,n,u,h=i[0];if(b(e.before)){var f=e.before(h.file,h.inputElem);if("object"==typeof f){if("abort"===f.action)return t="AbortError",r=h.file,n=h.inputElem,u=f.reason,void(b(e.error)&&e.error({name:t},r,n,u));if("skip"===f.action)return void s();"object"==typeof f.config&&(h.instanceConfig=o.extend(h.instanceConfig,f.config))}else if("skip"===f)return void s()}var d=h.instanceConfig.complete;h.instanceConfig.complete=function(e){b(d)&&d(e,h.file,h.inputElem),s()},a.parse(h.file,h.instanceConfig)}else b(e.complete)&&e.complete()}function s(){i.splice(0,1),n()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=v(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new c(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,r){if(this.isFirstChunk&&b(this._config.beforeFirstChunk)){var n=this._config.beforeFirstChunk(e);void 0!==n&&(e=n)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var o=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var u=o.meta.cursor;this._finished||(this._partialLine=s.substring(u-this._baseIndex),this._baseIndex=u),o&&o.data&&(this._rowCount+=o.data.length);var h=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(i)t.postMessage({results:o,workerId:a.WORKER_ID,finished:h});else if(b(this._config.chunk)&&!r){if(this._config.chunk(o,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);o=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(o.data),this._completeResults.errors=this._completeResults.errors.concat(o.errors),this._completeResults.meta=o.meta),this._completed||!h||!b(this._config.complete)||o&&o.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),h||o&&o.meta.paused||this._nextChunk(),o}this._halted=!0},this._sendError=function(e){b(this._config.error)?this._config.error(e):i&&this._config.error&&t.postMessage({workerId:a.WORKER_ID,error:e,finished:!1})}}function h(e){var t;(e=e||{}).chunkSize||(e.chunkSize=a.RemoteChunkSize),u.call(this,e),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),r||(t.onload=k(this._chunkLoaded,this),t.onerror=k(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var i in e)t.setRequestHeader(i,e[i])}if(this._config.chunkSize){var n=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+n)}try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}r&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");return null===t?-1:parseInt(t.substring(t.lastIndexOf("/")+1))}(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){var r=t.statusText||e;this._sendError(new Error(r))}}function f(e){var t,r;(e=e||{}).chunkSize||(e.chunkSize=a.LocalChunkSize),u.call(this,e);var i="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,i?((t=new FileReader).onload=k(this._chunkLoaded,this),t.onerror=k(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var n=Math.min(this._start+this._config.chunkSize,this._input.size);e=r.call(e,this._start,n)}var s=t.readAsText(e,this._config.encoding);i||this._chunkLoaded({target:{result:s}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function d(e){var t;u.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,r=this._config.chunkSize;return r?(e=t.substring(0,r),t=t.substring(r)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function l(e){u.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=k((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=k((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=k((function(){this._streamCleanUp(),i=!0,this._streamData("")}),this),this._streamCleanUp=k((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function c(e){var t,r,i,n=Math.pow(2,53),s=-n,o=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,u=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,h=this,f=0,d=0,l=!1,c=!1,m=[],_={data:[],errors:[],meta:{}};if(b(e.step)){var y=e.step;e.step=function(t){if(_=t,E())w();else{if(w(),0===_.data.length)return;f+=t.data.length,e.preview&&f>e.preview?r.abort():(_.data=_.data[0],y(_,h))}}}function k(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function w(){return _&&i&&(R("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+a.DefaultDelimiter+"'"),i=!1),e.skipEmptyLines&&(_.data=_.data.filter((function(e){return!k(e)}))),E()&&function(){if(_)if(Array.isArray(_.data[0])){for(var t=0;E()&&t<_.data.length;t++)_.data[t].forEach(r);_.data.splice(0,1)}else _.data.forEach(r);function r(t,r){b(e.transformHeader)&&(t=e.transformHeader(t,r)),m.push(t)}}(),function(){if(!_||!e.header&&!e.dynamicTyping&&!e.transform)return _;function t(t,r){var i,n=e.header?{}:[];for(i=0;i<t.length;i++){var s=i,a=t[i];e.header&&(s=i>=m.length?"__parsed_extra":m[i]),e.transform&&(a=e.transform(a,s)),a=C(s,a),"__parsed_extra"===s?(n[s]=n[s]||[],n[s].push(a)):n[s]=a}return e.header&&(i>m.length?R("FieldMismatch","TooManyFields","Too many fields: expected "+m.length+" fields but parsed "+i,d+r):i<m.length&&R("FieldMismatch","TooFewFields","Too few fields: expected "+m.length+" fields but parsed "+i,d+r)),n}var r=1;return!_.data.length||Array.isArray(_.data[0])?(_.data=_.data.map(t),r=_.data.length):_.data=t(_.data,0),e.header&&_.meta&&(_.meta.fields=m),d+=r,_}()}function E(){return e.header&&0===m.length}function C(t,r){return i=t,e.dynamicTypingFunction&&void 0===e.dynamicTyping[i]&&(e.dynamicTyping[i]=e.dynamicTypingFunction(i)),!0===(e.dynamicTyping[i]||e.dynamicTyping)?"true"===r||"TRUE"===r||"false"!==r&&"FALSE"!==r&&(function(e){if(o.test(e)){var t=parseFloat(e);if(s<t&&t<n)return!0}return!1}(r)?parseFloat(r):u.test(r)?new Date(r):""===r?null:r):r;var i}function R(e,t,r,i){var n={type:e,code:t,message:r};void 0!==i&&(n.row=i),_.errors.push(n)}this.parse=function(n,s,o){var u=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var r=new RegExp(p(t)+"([^]*?)"+p(t),"gm"),i=(e=e.replace(r,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<i[0].length;if(1===i.length||s)return"\n";for(var a=0,o=0;o<i.length;o++)"\n"===i[o][0]&&a++;return a>=i.length/2?"\r\n":"\r"}(n,u)),i=!1,e.delimiter)b(e.delimiter)&&(e.delimiter=e.delimiter(n),_.meta.delimiter=e.delimiter);else{var h=function(t,r,i,n,s){var o,u,h,f;s=s||[",","\t","|",";",a.RECORD_SEP,a.UNIT_SEP];for(var d=0;d<s.length;d++){var l=s[d],c=0,p=0,m=0;h=void 0;for(var _=new g({comments:n,delimiter:l,newline:r,preview:10}).parse(t),y=0;y<_.data.length;y++)if(i&&k(_.data[y]))m++;else{var v=_.data[y].length;p+=v,void 0!==h?0<v&&(c+=Math.abs(v-h),h=v):h=v}0<_.data.length&&(p/=_.data.length-m),(void 0===u||c<=u)&&(void 0===f||f<p)&&1.99<p&&(u=c,o=l,f=p)}return{successful:!!(e.delimiter=o),bestDelimiter:o}}(n,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);h.successful?e.delimiter=h.bestDelimiter:(i=!0,e.delimiter=a.DefaultDelimiter),_.meta.delimiter=e.delimiter}var f=v(e);return e.preview&&e.header&&f.preview++,t=n,r=new g(f),_=r.parse(t,s,o),w(),l?{meta:{paused:!0}}:_||{meta:{paused:!1}}},this.paused=function(){return l},this.pause=function(){l=!0,r.abort(),t=b(e.chunk)?"":t.substring(r.getCharIndex())},this.resume=function(){h.streamer._halted?(l=!1,h.streamer.parseChunk(t,!0)):setTimeout(h.resume,3)},this.aborted=function(){return c},this.abort=function(){c=!0,r.abort(),_.meta.aborted=!0,b(e.complete)&&e.complete(_),t=""}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g(e){var t,r=(e=e||{}).delimiter,i=e.newline,n=e.comments,s=e.step,o=e.preview,u=e.fastMode,h=t=void 0===e.quoteChar||null===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(h=e.escapeChar),("string"!=typeof r||-1<a.BAD_DELIMITERS.indexOf(r))&&(r=","),n===r)throw new Error("Comment character same as delimiter");!0===n?n="#":("string"!=typeof n||-1<a.BAD_DELIMITERS.indexOf(n))&&(n=!1),"\n"!==i&&"\r"!==i&&"\r\n"!==i&&(i="\n");var f=0,d=!1;this.parse=function(a,l,c){if("string"!=typeof a)throw new Error("Input must be a string");var g=a.length,m=r.length,_=i.length,y=n.length,v=b(s),k=[],w=[],E=[],C=f=0;if(!a)return $();if(e.header&&!l){var R=a.split(i)[0].split(r),S=[],O={},x=!1;for(var I in R){var A=R[I];b(e.transformHeader)&&(A=e.transformHeader(A,I));var T=A,D=O[A]||0;for(0<D&&(x=!0,T=A+"_"+D),O[A]=D+1;S.includes(T);)T=T+"_"+D;S.push(T)}if(x){var L=a.split(i);L[0]=S.join(r),a=L.join(i)}}if(u||!1!==u&&-1===a.indexOf(t)){for(var F=a.split(i),j=0;j<F.length;j++){if(E=F[j],f+=E.length,j!==F.length-1)f+=i.length;else if(c)return $();if(!n||E.substring(0,y)!==n){if(v){if(k=[],B(E.split(r)),Q(),d)return $()}else B(E.split(r));if(o&&o<=j)return k=k.slice(0,o),$(!0)}}return $()}for(var z=a.indexOf(r,f),M=a.indexOf(i,f),P=new RegExp(p(h)+p(t),"g"),U=a.indexOf(t,f);;)if(a[f]!==t)if(n&&0===E.length&&a.substring(f,f+y)===n){if(-1===M)return $();f=M+_,M=a.indexOf(i,f),z=a.indexOf(r,f)}else if(-1!==z&&(z<M||-1===M))E.push(a.substring(f,z)),f=z+m,z=a.indexOf(r,f);else{if(-1===M)break;if(E.push(a.substring(f,M)),H(M+_),v&&(Q(),d))return $();if(o&&k.length>=o)return $(!0)}else for(U=f,f++;;){if(-1===(U=a.indexOf(t,U+1)))return c||w.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:k.length,index:f}),K();if(U===g-1)return K(a.substring(f,U).replace(P,t));if(t!==h||a[U+1]!==h){if(t===h||0===U||a[U-1]!==h){-1!==z&&z<U+1&&(z=a.indexOf(r,U+1)),-1!==M&&M<U+1&&(M=a.indexOf(i,U+1));var q=W(-1===M?z:Math.min(z,M));if(a.substr(U+1+q,m)===r){E.push(a.substring(f,U).replace(P,t)),a[f=U+1+q+m]!==t&&(U=a.indexOf(t,f)),z=a.indexOf(r,f),M=a.indexOf(i,f);break}var N=W(M);if(a.substring(U+1+N,U+1+N+_)===i){if(E.push(a.substring(f,U).replace(P,t)),H(U+1+N+_),z=a.indexOf(r,f),U=a.indexOf(t,f),v&&(Q(),d))return $();if(o&&k.length>=o)return $(!0);break}w.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:k.length,index:f}),U++}}else U++}return K();function B(e){k.push(e),C=f}function W(e){var t=0;if(-1!==e){var r=a.substring(U+1,e);r&&""===r.trim()&&(t=r.length)}return t}function K(e){return c||(void 0===e&&(e=a.substring(f)),E.push(e),f=g,B(E),v&&Q()),$()}function H(e){f=e,B(E),E=[],M=a.indexOf(i,f)}function $(e){return{data:k,errors:w,meta:{delimiter:r,linebreak:i,aborted:d,truncated:!!e,cursor:C+(l||0)}}}function Q(){s($()),k=[],w=[]}},this.abort=function(){d=!0},this.getCharIndex=function(){return f}}function m(e){var t=e.data,r=n[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var s={abort:function(){i=!0,_(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(b(r.userStep)){for(var a=0;a<t.results.data.length&&(r.userStep({data:t.results.data[a],errors:t.results.errors,meta:t.results.meta},s),!i);a++);delete t.results}else b(r.userChunk)&&(r.userChunk(t.results,s,t.file),delete t.results)}t.finished&&!i&&_(t.workerId,t.results)}function _(e,t){var r=n[e];b(r.userComplete)&&r.userComplete(t),r.terminate(),delete n[e]}function y(){throw new Error("Not implemented.")}function v(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=v(e[r]);return t}function k(e,t){return function(){e.apply(t,arguments)}}function b(e){return"function"==typeof e}return i&&(t.onmessage=function(e){var r=e.data;if(void 0===a.WORKER_ID&&r&&(a.WORKER_ID=r.workerId),"string"==typeof r.input)t.postMessage({workerId:a.WORKER_ID,results:a.parse(r.input,r.config),finished:!0});else if(t.File&&r.input instanceof File||r.input instanceof Object){var i=a.parse(r.input,r.config);i&&t.postMessage({workerId:a.WORKER_ID,results:i,finished:!0})}}),(h.prototype=Object.create(u.prototype)).constructor=h,(f.prototype=Object.create(u.prototype)).constructor=f,(d.prototype=Object.create(d.prototype)).constructor=d,(l.prototype=Object.create(u.prototype)).constructor=l,a},void 0===(n="function"==typeof r?r.apply(t,i):r)||(e.exports=n)}},t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i].call(s.exports,s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=r(809),t=r.n(e);const i=globalThis.impHelpers,n=/^@name:\s*(.+)\s*$/gm,s=/^@hide\s*$/gm;function a(e,t){t||(t="td");let r="<tr>";return e.forEach((e=>r+=`<${t}> ${e} </${t}>`)),r+"</tr>"}function o(e,r,i){const o=n.exec(e),u=s.exec(e);let h=e;if(u&&(h=h.replace(s,"")),o){let e=o[1].toLowerCase().endsWith(".json");h=h.replace(n,"");let r=h.trim();r=e?t().parse(h.trim(),{header:!(i&&"no-header"==i.toLowerCase())}).data:r,window.impData[o[1]]={type:e?"object":"string",data:r}}const f=i&&"no-header"===i.toLowerCase().trim();return u?"":function(e,r){const i=t().parse(e.trim()).data;let n="<table>\n";return i.errors&&console.error(i.errors),r?n+="<tbody>":(n+="<thead>\n",n+=`${a(i.shift(),"th")}\n`,n+="</thead>\n<tbody>\n"),i.forEach((e=>n+=`${a(e)}\n`)),n+"</tbody></table>"}(h,f)}i.register("dsv-render",{render:o,preview:function(e,t,r){return o(e,0,r)}},"raw")})()})();