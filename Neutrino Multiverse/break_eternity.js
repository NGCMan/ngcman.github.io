"use strict";function _instanceof(t,r){return null!=r&&"undefined"!=typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](t):t instanceof r}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t,r){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t=t||self).Decimal=r()}(void 0,function(){var t=Math.log10(9e15),r=function(){for(var t=[],r=-323;r<=308;r++)t.push(Number("1e"+r));return function(r){return t[r+323]}}(),i=function(t){return o.fromValue_noAlloc(t)},e=function(t,r,i){return o.fromComponents(t,r,i)},n=function(t,r,i){return o.fromComponents_noNormalize(t,r,i)},a=function(t,r){var i=r+1,e=Math.ceil(Math.log10(Math.abs(t))),n=Math.round(t*Math.pow(10,i-e))*Math.pow(10,e-i);return parseFloat(n.toFixed(Math.max(i-e,0)))},o=function(){function o(t){this.sign=Number.NaN,this.layer=Number.NaN,this.mag=Number.NaN,_instanceof(t,o)?this.fromDecimal(t):"number"==typeof t?this.fromNumber(t):"string"==typeof t?this.fromString(t):(this.sign=0,this.layer=0,this.mag=0)}Object.defineProperty(o.prototype,"m",{get:function(){if(0===this.sign)return 0;if(0===this.layer){var t,i=Math.floor(Math.log10(this.mag));return t=5e-324===this.mag?5:this.mag/r(i),this.sign*t}if(1===this.layer){var e=this.mag-Math.floor(this.mag);return this.sign*Math.pow(10,e)}return this.sign},set:function(t){this.layer<=2?this.fromMantissaExponent(t,this.e):(this.sign=Math.sign(t),0===this.sign&&(this.layer,this.exponent))},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"e",{get:function(){return 0===this.sign?0:0===this.layer?Math.floor(Math.log10(this.mag)):1===this.layer?Math.floor(this.mag):2===this.layer?Math.floor(Math.pow(10,this.mag)):Number.POSITIVE_INFINITY},set:function(t){this.fromMantissaExponent(this.m,t)},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"s",{get:function(){return this.sign},set:function(t){0===t?(this.sign=0,this.layer=0,this.mag=0):this.sign=t},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"mantissa",{get:function(){return this.m},set:function(t){this.m=t},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"exponent",{get:function(){return this.e},set:function(t){this.e=t},enumerable:!0,configurable:!0}),o.fromComponents=function(t,r,i){return(new o).fromComponents(t,r,i)},o.fromComponents_noNormalize=function(t,r,i){return(new o).fromComponents_noNormalize(t,r,i)},o.fromMantissaExponent=function(t,r){return(new o).fromMantissaExponent(t,r)},o.fromMantissaExponent_noNormalize=function(t,r){return(new o).fromMantissaExponent_noNormalize(t,r)},o.fromDecimal=function(t){return(new o).fromDecimal(t)},o.fromNumber=function(t){return(new o).fromNumber(t)},o.fromString=function(t){return(new o).fromString(t)},o.fromValue=function(t){return(new o).fromValue(t)},o.fromValue_noAlloc=function(t){return _instanceof(t,o)?t:new o(t)},o.abs=function(t){return i(t).abs()},o.neg=function(t){return i(t).neg()},o.negate=function(t){return i(t).neg()},o.negated=function(t){return i(t).neg()},o.sign=function(t){return i(t).sign()},o.sgn=function(t){return i(t).sign()},o.round=function(t){return i(t).round()},o.floor=function(t){return i(t).floor()},o.ceil=function(t){return i(t).ceil()},o.trunc=function(t){return i(t).trunc()},o.add=function(t,r){return i(t).add(r)},o.plus=function(t,r){return i(t).add(r)},o.sub=function(t,r){return i(t).sub(r)},o.subtract=function(t,r){return i(t).sub(r)},o.minus=function(t,r){return i(t).sub(r)},o.mul=function(t,r){return i(t).mul(r)},o.multiply=function(t,r){return i(t).mul(r)},o.times=function(t,r){return i(t).mul(r)},o.div=function(t,r){return i(t).div(r)},o.divide=function(t,r){return i(t).div(r)},o.recip=function(t){return i(t).recip()},o.reciprocal=function(t){return i(t).recip()},o.reciprocate=function(t){return i(t).reciprocate()},o.cmp=function(t,r){return i(t).cmp(r)},o.cmpabs=function(t,r){return i(t).cmpabs(r)},o.compare=function(t,r){return i(t).cmp(r)},o.eq=function(t,r){return i(t).eq(r)},o.equals=function(t,r){return i(t).eq(r)},o.neq=function(t,r){return i(t).neq(r)},o.notEquals=function(t,r){return i(t).notEquals(r)},o.lt=function(t,r){return i(t).lt(r)},o.lte=function(t,r){return i(t).lte(r)},o.gt=function(t,r){return i(t).gt(r)},o.gte=function(t,r){return i(t).gte(r)},o.max=function(t,r){return i(t).max(r)},o.min=function(t,r){return i(t).min(r)},o.minabs=function(t,r){return i(t).minabs(r)},o.maxabs=function(t,r){return i(t).maxabs(r)},o.cmp_tolerance=function(t,r,e){return i(t).cmp_tolerance(r,e)},o.compare_tolerance=function(t,r,e){return i(t).cmp_tolerance(r,e)},o.eq_tolerance=function(t,r,e){return i(t).eq_tolerance(r,e)},o.equals_tolerance=function(t,r,e){return i(t).eq_tolerance(r,e)},o.neq_tolerance=function(t,r,e){return i(t).neq_tolerance(r,e)},o.notEquals_tolerance=function(t,r,e){return i(t).notEquals_tolerance(r,e)},o.lt_tolerance=function(t,r,e){return i(t).lt_tolerance(r,e)},o.lte_tolerance=function(t,r,e){return i(t).lte_tolerance(r,e)},o.gt_tolerance=function(t,r,e){return i(t).gt_tolerance(r,e)},o.gte_tolerance=function(t,r,e){return i(t).gte_tolerance(r,e)},o.log10=function(t){return i(t).log10()},o.log=function(t,r){return i(t).log(r)},o.log2=function(t){return i(t).log2()},o.ln=function(t){return i(t).ln()},o.logarithm=function(t,r){return i(t).logarithm(r)},o.pow10=function(t){return i(t).powbase10()},o.pow=function(t,r){return i(t).pow(r)},o.root=function(t,r){return i(t).root(r)},o.factorial=function(t,r){return i(t).factorial()},o.gamma=function(t,r){return i(t).gamma()},o.exp=function(t){return i(t).exp()},o.sqr=function(t){return i(t).sqr()},o.sqrt=function(t){return i(t).sqrt()},o.cube=function(t){return i(t).cube()},o.cbrt=function(t){return i(t).cbrt()},o.tetrate=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n(1,0,1);return i(t).tetrate(r,e)},o.pentate=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n(1,0,1);return i(t).pentate(r,e)},o.iteratedlog=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return i(t).iteratedlog(r,e)},o.slog=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return i(t).slog(r)},o.affordGeometricSeries=function(t,r,e,n){return this.affordGeometricSeries_core(i(t),i(r),i(e),n)},o.sumGeometricSeries=function(t,r,e,n){return this.sumGeometricSeries_core(t,i(r),i(e),n)},o.affordArithmeticSeries=function(t,r,e,n){return this.affordArithmeticSeries_core(i(t),i(r),i(e),i(n))},o.sumArithmeticSeries=function(t,r,e,n){return this.sumArithmeticSeries_core(i(t),i(r),i(e),i(n))},o.efficiencyOfPurchase=function(t,r,e){return this.efficiencyOfPurchase_core(i(t),i(r),i(e))},o.randomDecimalForTesting=function(t){if(20*Math.random()<1)return n(0,0,0);var r=Math.random()>.5?1:-1;if(20*Math.random()<1)return n(r,0,1);var i=Math.floor(Math.random()*(t+1)),a=0===i?616*Math.random()-308:16*Math.random();Math.random()>.9&&(a=Math.trunc(a));var o=Math.pow(10,a);return Math.random()>.9&&(o=Math.trunc(o)),e(r,i,o)},o.affordGeometricSeries_core=function(t,r,i,e){var n=r.mul(i.pow(e));return o.floor(t.div(n).mul(i.sub(1)).add(1).log10().div(i.log10()))},o.sumGeometricSeries_core=function(t,r,i,e){return r.mul(i.pow(e)).mul(o.sub(1,i.pow(t))).div(o.sub(1,i))},o.affordArithmeticSeries_core=function(t,r,i,e){var n=r.add(e.mul(i)).sub(i.div(2)),a=n.pow(2);return n.neg().add(a.add(i.mul(t).mul(2)).sqrt()).div(i).floor()},o.sumArithmeticSeries_core=function(t,r,i,e){var n=r.add(e.mul(i));return t.div(2).mul(n.mul(2).plus(t.sub(1).mul(i)))},o.efficiencyOfPurchase_core=function(t,r,i){return t.div(r).add(t.div(i))},o.prototype.normalize=function(){if(0===this.sign||0===this.mag&&0===this.layer)return this.sign=0,this.mag=0,this.layer=0,this;if(this.mag>=9e15)return 0===this.layer&&this.mag<0&&(this.mag=-this.mag,this.sign=-this.sign),this.layer+=1,this.mag=Math.log10(this.mag),this;for(;this.mag<t&&this.layer>0;)this.layer-=1,this.mag=Math.pow(10,this.mag);return 0===this.layer&&this.mag<0?(this.mag=-this.mag,this.sign=-this.sign):0===this.mag&&0===this.layer&&(this.sign=0),this},o.prototype.fromComponents=function(t,r,i){return this.sign=t,this.layer=r,this.mag=i,this.normalize(),this},o.prototype.fromComponents_noNormalize=function(t,r,i){return this.sign=t,this.layer=r,this.mag=i,this},o.prototype.fromMantissaExponent=function(t,r){return this.layer=1,this.sign=Math.sign(t),t=Math.abs(t),this.mag=r+Math.log10(t),this.normalize(),this},o.prototype.fromMantissaExponent_noNormalize=function(t,r){return this.fromMantissaExponent(t,r),this},o.prototype.fromDecimal=function(t){return this.sign=t.sign,this.layer=t.layer,this.mag=t.mag,this},o.prototype.fromNumber=function(t){return this.mag=Math.abs(t),this.sign=Math.sign(t),this.layer=0,this.normalize(),this};return o.prototype.fromString=function(t){var r=(t=t.replace(",","")).split("^^^");if(2===r.length){var n=parseFloat(r[0]),a=parseFloat(r[1]),s=1;if(2===(g=r[1].split(";")).length){s=parseFloat(g[1]);isFinite(s)||(s=1)}if(isFinite(n)&&isFinite(a)){var u=o.pentate(n,a,s);return this.sign=u.sign,this.layer=u.layer,this.mag=u.mag,this}}var h=t.split("^^");if(2===h.length){var g;n=parseFloat(h[0]),a=parseFloat(h[1]);if(2===(g=h[1].split(";")).length){s=parseFloat(g[1]);isFinite(s)||(s=1)}if(isFinite(n)&&isFinite(a)){u=o.tetrate(n,a,s);return this.sign=u.sign,this.layer=u.layer,this.mag=u.mag,this}}var l,m=t.split("^");if(2===m.length){n=parseFloat(m[0]);var f=parseFloat(m[1]);if(isFinite(n)&&isFinite(f)){u=o.pow(n,f);return this.sign=u.sign,this.layer=u.layer,this.mag=u.mag,this}}if(2===(l=(t=t.trim().toLowerCase()).split("pt")).length){n=10,a=parseFloat(l[0]),l[1]=l[1].replace("(",""),l[1]=l[1].replace(")","");s=parseFloat(l[1]);if(isFinite(s)||(s=1),isFinite(n)&&isFinite(a)){u=o.tetrate(n,a,s);return this.sign=u.sign,this.layer=u.layer,this.mag=u.mag,this}}if(2===(l=t.split("p")).length){n=10,a=parseFloat(l[0]),l[1]=l[1].replace("(",""),l[1]=l[1].replace(")","");s=parseFloat(l[1]);if(isFinite(s)||(s=1),isFinite(n)&&isFinite(a)){u=o.tetrate(n,a,s);return this.sign=u.sign,this.layer=u.layer,this.mag=u.mag,this}}var c=t.split("e"),p=c.length-1;if(p<2){var y=parseFloat(t);if(isFinite(y))return this.fromNumber(y)}var d=t.split("e^");if(2===d.length)for(var M="",b=0;b<d[1].length;++b){var v=d[1].charCodeAt(b);if(!(v>=43&&v<=57||101==v))return this.layer=parseFloat(M),this.mag=parseFloat(d[1].substr(b+1)),this.normalize(),this;M+=d[1].charAt(b)}if(p<1)return this.sign=0,this.layer=0,this.mag=0,this;var N=parseFloat(c[0]);if(0===N)return this.sign=0,this.layer=0,this.mag=0,this;f=parseFloat(c[c.length-1]);if(p>=2){var _=parseFloat(c[c.length-2]);isFinite(_)&&(f+=Math.log10(_))}if(isFinite(N))if(1===p)this.sign=Math.sign(N),this.layer=1,this.mag=f+Math.log10(Math.abs(N));else{if(this.sign=Math.sign(N),this.layer=p,2===p){u=o.mul(e(1,2,f),i(N));return this.sign=u.sign,this.layer=u.layer,this.mag=u.mag,this}this.mag=f}else this.sign="-"===c[0]?-1:1,this.layer=p,this.mag=f;return this.normalize(),this},o.prototype.fromValue=function(t){return _instanceof(t,o)?this.fromDecimal(t):"number"==typeof t?this.fromNumber(t):"string"==typeof t?this.fromString(t):(this.sign=0,this.layer=0,this.mag=0,this)},o.prototype.toNumber=function(){return 0===this.layer?this.sign*this.mag:1===this.layer?this.sign*Math.pow(10,this.mag):Number.POSITIVE_INFINITY},o.prototype.mantissaWithDecimalPlaces=function(t){return isNaN(this.m)?Number.NaN:0===this.m?0:a(this.m,t)},o.prototype.magnitudeWithDecimalPlaces=function(t){return isNaN(this.mag)?Number.NaN:0===this.mag?0:a(this.mag,t)},o.prototype.toString=function(){return 0===this.layer?this.mag<1e21&&this.mag>1e-7||0==this.mag?(this.sign*this.mag).toString():this.m+"e"+this.e:1===this.layer?this.m+"e"+this.e:this.layer<=5?(-1==this.sign?"-":"")+"e".repeat(this.layer)+this.mag:(-1==this.sign?"-":"")+"(e^"+this.layer+")"+this.mag},o.prototype.toExponential=function(t){return 0===this.layer?(this.sign*this.mag).toExponential(t):this.toStringWithDecimalPlaces(t)},o.prototype.toFixed=function(t){return 0===this.layer?(this.sign*this.mag).toFixed(t):this.toStringWithDecimalPlaces(t)},o.prototype.toPrecision=function(t){return this.e<=-7?this.toExponential(t-1):t>this.e?this.toFixed(t-this.exponent-1):this.toExponential(t-1)},o.prototype.valueOf=function(){return this.toString()},o.prototype.toJSON=function(){return this.toString()},o.prototype.toStringWithDecimalPlaces=function(t){return 0===this.layer?this.mag<1e21&&this.mag>1e-7||0==this.mag?(this.sign*this.mag).toFixed(t):a(this.m,t)+"e"+a(this.e,t):1===this.layer?a(this.m,t)+"e"+a(this.e,t):this.layer<=5?(-1==this.sign?"-":"")+"e".repeat(this.layer,t)+a(this.mag,t):(-1==this.sign?"-":"")+"(e^"+this.layer+")"+a(this.mag,t)},o.prototype.abs=function(){return n(0===this.sign?0:1,this.layer,this.mag)},o.prototype.neg=function(){return n(-this.sign,this.layer,this.mag)},o.prototype.negate=function(){return this.neg()},o.prototype.negated=function(){return this.neg()},o.prototype.sign=function(){return this.sign},o.prototype.sgn=function(){return this.sign},o.prototype.round=function(){return 0===this.layer?e(this.sign,0,Math.round(this.sign*this.mag)):this},o.prototype.floor=function(){return 0===this.layer?e(this.sign,0,Math.floor(this.sign*this.mag)):this},o.prototype.ceil=function(){return 0===this.layer?e(this.sign,0,this.Math.ceil(this.sign*this.mag)):this},o.prototype.trunc=function(){return 0===this.layer?e(this.sign,0,Math.trunc(this.sign*this.mag)):this},o.prototype.add=function(t){var r,a,s=i(t);if(this.sign==-s.sign&&this.layer==s.layer&&this.mag==s.mag)return n(0,0,0);if(o.cmpabs(this,s)>0?(r=this,a=s):(r=s,a=this),r.layer>=2||a.layer>=2)return r;if(0==r.layer&&0==a.layer)return i(r.sign*r.mag+a.sign*a.mag);if(1==r.layer&&0==a.layer){if(r.mag-Math.log10(a.mag)>17)return r;var u=Math.pow(10,r.mag-Math.log10(a.mag)),h=1*a.sign+r.sign*u;return e(Math.sign(h),1,Math.log10(a.mag)+Math.log10(Math.abs(h)))}if(1==r.layer&&1==a.layer){if(r.mag-a.mag>17)return r;u=Math.pow(10,r.mag-a.mag),h=1*a.sign+r.sign*u;return e(Math.sign(h),1,a.mag+Math.log10(Math.abs(h)))}throw Error("Bad arguments to add: "+this+", "+t)},o.prototype.plus=function(t){return this.add(t)},o.prototype.sub=function(t){return this.add(i(t).neg())},o.prototype.subtract=function(t){return this.sub(t)},o.prototype.minus=function(t){return this.sub(t)},o.prototype.mul=function(t){var r,a,s=i(t);if(0==this.sign||0==s.sign)return n(0,0,0);if(o.cmpabs(this,s)>0?(r=this,a=s):(r=s,a=this),r.layer>=3||a.layer>=3||r.layer-a.layer>=2)return e(r.sign*a.sign,r.layer,r.mag);if(0==r.layer&&0==a.layer)return i(r.sign*a.sign*r.mag*a.mag);if(1==r.layer&&0==a.layer)return e(r.sign*a.sign,1,r.mag+Math.log10(a.mag));if(1==r.layer&&1==a.layer)return e(r.sign*a.sign,1,r.mag+a.mag);if(2==r.layer&&1==a.layer){if(r.mag-Math.log10(a.mag)>17)return e(r.sign*a.sign,r.layer,r.mag);var u=1+Math.pow(10,r.mag-Math.log10(a.mag));return e(r.sign*a.sign,2,Math.log10(a.mag)+Math.log10(Math.abs(u)))}if(2==r.layer&&2==a.layer){if(r.mag-a.mag>17)return e(r.sign*a.sign,r.layer,r.mag);u=1+Math.pow(10,r.mag-a.mag);return e(r.sign*a.sign,2,a.mag+Math.log10(Math.abs(u)))}throw Error("Bad arguments to mul: "+this+", "+t)},o.prototype.multiply=function(t){return this.mul(t)},o.prototype.times=function(t){return this.mul(t)},o.prototype.div=function(t){var r=this,a=i(t);if(r.layer==a.layer&&r.mag==a.mag)return n(r.sign*a.sign,0,1);if(0==r.sign)return n(0,0,0);if(0==a.sign)throw Error("Divide by 0");if(a.layer-r.layer>=2)return n(0,0,0);if(r.layer-a.layer>=2)return e(r.sign*a.sign,r.layer,r.mag);if(r.layer>=3||a.layer>=3)return r.cmpabs(a)>0?e(r.sign*a.sign,r.layer,r.mag):n(0,0,0);if(0==r.layer&&0==a.layer)return i(r.sign*a.sign*r.mag/a.mag);if(1==r.layer&&0==a.layer)return e(r.sign*a.sign,1,r.mag-Math.log10(a.mag));if(0==r.layer&&1==a.layer)return e(r.sign*a.sign,1,Math.log10(r.mag)-a.mag);if(1==r.layer&&1==a.layer)return e(r.sign*a.sign,1,r.mag-a.mag);if(2==r.layer&&1==a.layer){if(r.mag<Math.log10(a.mag))return n(0,0,0);if(r.mag-Math.log10(a.mag)>17)return e(r.sign*a.sign,r.layer,r.mag);var o=-1+Math.pow(10,r.mag-Math.log10(a.mag));return e(r.sign*a.sign,2,Math.log10(a.mag)+Math.log10(Math.abs(o)))}if(1==r.layer&&2==a.layer)return n(0,0,0);if(2==r.layer&&2==a.layer){if(r.mag<a.mag)return n(0,0,0);if(r.mag-a.mag>17)return e(r.sign*a.sign,r.layer,r.mag);o=-1+Math.pow(10,r.mag-a.mag);return e(r.sign*a.sign,2,a.mag+Math.log10(Math.abs(o)))}throw Error("Bad arguments to div: "+this+", "+t)},o.prototype.divide=function(t){return this.div(t)},o.prototype.divideBy=function(t){return this.div(t)},o.prototype.dividedBy=function(t){return this.div(t)},o.prototype.recip=function(){return 0==this.layer?e(this.sign,0,1/this.mag):1==this.layer?e(this.sign,1,-this.mag):n(0,0,0)},o.prototype.reciprocal=function(){return this.recip()},o.prototype.reciprocate=function(){return this.recip()},o.prototype.cmp=function(t){var r=i(t);return this.sign>r.sign?1:this.sign<r.sign?-1:this.sign*this.cmpabs(t)},o.prototype.cmpabs=function(t){var r=i(t);return this.layer>r.layer?1:this.layer<r.layer?-1:this.mag>r.mag?1:this.mag<r.mag?-1:0},o.prototype.compare=function(t){return this.cmp(t)},o.prototype.eq=function(t){var r=i(t);return this.sign===r.sign&&this.layer===r.layer&&this.mag===r.mag},o.prototype.equals=function(t){return this.eq(t)},o.prototype.neq=function(t){return!this.eq(t)},o.prototype.notEquals=function(t){return this.neq(t)},o.prototype.lt=function(t){i(t);return-1==this.cmp(t)},o.prototype.lte=function(t){return!this.gt(t)},o.prototype.gt=function(t){i(t);return 1==this.cmp(t)},o.prototype.gte=function(t){return!this.lt(t)},o.prototype.max=function(t){var r=i(t);return this.lt(r)?r:this},o.prototype.min=function(t){var r=i(t);return this.gt(r)?r:this},o.prototype.maxabs=function(t){var r=i(t);return this.cmpabs(r)<0?r:this},o.prototype.minabs=function(t){var r=i(t);return this.cmpabs(r)>0?r:this},o.prototype.cmp_tolerance=function(t,r){var e=i(t);return this.eq_tolerance(e,r)?0:this.cmp(e)},o.prototype.compare_tolerance=function(t,r){return this.cmp_tolerance(t,r)},o.prototype.eq_tolerance=function(t,r){var e=i(t);if(this.sign!=e.sign)return!1;if(Math.abs(this.layer-e.layer)>1)return!1;var n=this.mag,a=e.mag;return this.layer>e.layer&&(a=Math.log10(a)),this.layer<e.layer&&(n=Math.log10(n)),Math.abs(n-a)<=r*Math.max(Math.abs(n),Math.abs(a))},o.prototype.equals_tolerance=function(t,r){return this.eq_tolerance(t,r)},o.prototype.neq_tolerance=function(t,r){return!this.eq_tolerance(t,r)},o.prototype.notEquals_tolerance=function(t,r){return this.neq_tolerance(t,r)},o.prototype.lt_tolerance=function(t,r){var e=i(t);return!this.eq_tolerance(e,r)&&this.lt(e)},o.prototype.lte_tolerance=function(t,r){var e=i(t);return this.eq_tolerance(e,r)||this.lt(e)},o.prototype.gt_tolerance=function(t,r){var e=i(t);return!this.eq_tolerance(e,r)&&this.gt(e)},o.prototype.gte_tolerance=function(t,r){var e=i(t);return this.eq_tolerance(e,r)||this.gt(e)},o.prototype.abslog10=function(){if(0===this.sign)throw Error("abslog10(0) is undefined");return this.layer>0?n(this.sign,this.layer-1,this.mag):n(this.sign,0,Math.log10(Math.abs(this.mag)))},o.prototype.log10=function(){if(this.sign<=0)throw Error("log10 is undefined for numbers <= 0");return this.layer>0?n(this.sign,this.layer-1,this.mag):n(this.sign,0,Math.log10(this.mag))},o.prototype.log=function(t){if(t=i(t),this.sign<=0)throw Error("log is undefined for numbers <= 0");if(t.sign<=0)throw Error("log is undefined for bases <= 0");if(1===t.sign&&0===t.layer&&1===t.mag)throw Error("log is undefined for base === 1");return 0===this.layer&&0===t.layer?n(this.sign,0,Math.log(this.mag)/Math.log(t.mag)):o.div(this.log10(),t.log10())},o.prototype.log2=function(){if(this.sign<=0)throw Error("log2 is undefined for numbers <= 0");return 0===this.layer?n(this.sign,0,Math.log2(this.mag)):1===this.layer?e(1,0,3.321928094887362*this.mag):2===this.layer?e(1,1,this.mag+.5213902276543247):n(1,this.layer-1,this.mag)},o.prototype.ln=function(){if(this.sign<=0)throw Error("ln is undefined for numbers <= 0");return 0===this.layer?n(this.sign,0,Math.log(this.mag)):1===this.layer?e(1,0,2.302585092994046*this.mag):2===this.layer?e(1,1,this.mag+.36221568869946325):n(1,this.layer-1,this.mag)},o.prototype.logarithm=function(t){return this.log(t)},o.prototype.pow=function(t){var r,a=this,s=i(t);if(1===a.sign&&0===a.layer&&1===a.mag)return a;if(0===s.sign)return n(1,0,1);if(1===s.sign&&0===s.layer&&1===s.mag)return a;if(1===a.sign&&0===a.layer&&10===a.mag)return s.powbase10();if(0===a.layer&&0===s.layer){var u=Math.pow(a.sign*a.mag,s.sign*s.mag);return isFinite(u)?e(1,0,u):e(1,1,Math.log10(a.mag)*s.mag)}return 0===a.layer&&a.mag<1?n(0,0,0):1===a.layer&&0===s.layer?e(1,2,Math.log10(a.mag)+Math.log10(s.mag)):0===a.layer&&1===s.layer?e(1,2,Math.log10(Math.log10(a.mag))+s.mag):1===a.layer&&1===s.layer?e(1,2,Math.log10(a.mag)+s.mag):2===a.layer&&s.layer<=2?((r=o.mul(n(a.sign,1,a.mag),n(s.sign,s.layer,s.mag))).layer+=1,r.normalize()):s.layer>=2&&s.layer-a.layer>=0?e(1,s.layer+1,s.mag):((r=o.mul(n(a.sign,a.layer-1,a.mag),n(s.sign,s.layer,s.mag))).layer+=1,r)},o.prototype.powbase10=function(){if(0===this.sign)return n(1,0,1);if(1===this.sign)return e(1,this.layer+1,this.mag);if(0===this.layer){var t=Math.pow(10,-this.mag);return 0===t?n(0,0,0):n(1,0,t)}return n(0,0,0)},o.prototype.pow_base=function(t){return i(t).pow(this)},o.prototype.root=function(t){var r,a=this,s=i(t);if(0===a.sign)return a;if(0===s.sign)return n(Number.NaN,Number.NaN,Number.NaN);if(1===a.sign&&0===a.layer&&1===a.mag)return a;if(1===s.sign&&0===s.layer&&1===s.mag)return a;if(0===a.layer&&0===s.layer){var u=Math.pow(a.sign*a.mag,s.sign*(1/s.mag));return isFinite(u)?e(1,0,u):e(1,1,Math.log10(a.mag)/s.mag)}return 1===a.layer&&0===s.layer?e(1,2,Math.log10(a.mag)-Math.log10(s.mag)):0===a.layer&&1===s.layer?e(1,2,Math.log10(Math.log10(a.mag))-s.mag):1===a.layer&&1===s.layer?e(1,2,Math.log10(a.mag)-s.mag):2===a.layer&&s.layer<=2?((r=o.div(n(a.sign,1,a.mag),n(s.sign,s.layer,s.mag))).layer+=1,r.normalize(),r):s.layer>=2&&s.layer-a.layer>=0?n(0,0,0):((r=o.div(n(a.sign,a.layer-1,a.mag),n(s.sign,s.layer,s.mag))).layer+=1,r.normalize(),r)},o.prototype.factorial=function(){return 0===this.layer?this.add(1).gamma():1===this.layer?o.exp(o.mul(this,o.ln(this).sub(1))):o.exp(this)},o.prototype.gamma=function(){if(0===this.layer){if(this.lt(n(1,0,24)))return i(function(t){if(!isFinite(t))return t;if(t<-50)return t==Math.trunc(t)?Number.NEGATIVE_INFINITY:0;for(var r=1;t<10;)r*=t,++t;var i=.9189385332046727;i+=(.5+(t-=1))*Math.log(t),i-=t;var e=t*t,n=t;return i+=1/(12*n),i+=1/(360*(n*=e)),i+=1/(1260*(n*=e)),i+=1/(1680*(n*=e)),i+=1/(1188*(n*=e)),i+=691/(360360*(n*=e)),i+=7/(1092*(n*=e)),i+=3617/(122400*(n*=e)),Math.exp(i)/r}(this.sign*this.mag));var t=this.mag-1,r=.9189385332046727;r+=(t+.5)*Math.log(t);var e=t*t,a=t,s=12*a,u=1/s,h=(r-=t)+u;if(h===r)return o.exp(r);if((h=(r=h)-(u=1/(s=360*(a*=e))))===r)return o.exp(r);r=h;var g=1/(s=1260*(a*=e));return r+=g,r-=g=1/(s=1680*(a*=e)),o.exp(r)}return 1===this.layer?o.exp(o.mul(this,o.ln(this).sub(1))):o.exp(this)},o.prototype.exp=function(){return 0===this.layer&&this.mag<=709.7?e(1,0,Math.exp(this.mag)):0===this.layer?e(1,1,Math.log10(Math.E)*this.mag):1===this.layer?e(1,2,Math.log10(.4342944819032518)+this.mag):e(this.sign,this.layer+1,this.mag)},o.prototype.sqr=function(){return this.pow(2)},o.prototype.sqrt=function(){if(0==this.layer)return i(Math.sqrt(this.sign*this.mag));if(1==this.layer)return e(1,2,Math.log10(this.mag)-.3010299956639812);var t=o.div(n(this.sign,this.layer-1,this.mag),n(1,0,2));return t.layer+=1,t.normalize(),t},o.prototype.cube=function(){return this.pow(3)},o.prototype.cbrt=function(){return this.pow(1/3)},o.prototype.tetrate=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n(1,0,1);r=i(r);var a=t-(t=Math.trunc(t));if(0!=a&&(++t,r=o.pow(a,r)),0==t)return n(1,0,1);if(1==this.sign&&0==this.layer&&10==this.mag)return e(r.sign,r.layer+t,r.mag);for(var s=0;s<t;++s){if(r=this.pow(r),!isFinite(r.layer)||!isFinite(r.mag))return r;if(r.layer-this.layer>3)return n(r.sign,r.layer+(t-s-1),r.mag);if(s>100)return r}return r},o.prototype.pentate=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n(1,0,1);if(r=i(r),0==(t=Math.trunc(t)))return n(1,0,1);for(var e=0;e<t;++e){if(r=this.tetrate(r),!isFinite(r.layer)||!isFinite(r.mag))return r;if(e>10)return r}return r},o.prototype.iteratedlog=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;t=i(t);var e=this;if(e.layer-t.layer>3){var n=Math.min(r,e.layer-t.layer-3);r-=n,e.layer-=n}if(r<1)return e;for(var a=0;a<r;++a){if(e=e.log(t),!isFinite(e.layer)||!isFinite(e.mag))return e;if(a>100)return e}return e},o.prototype.slog=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;t=i(t);var r=0,e=i(this);if(e.layer-t.layer>3){var n=e.layer-t.layer-3;r+=n,e.layer-=n}for(var a=0;a<100;++a)if(e.lt(o.dZero))e=o.pow(t,e),r-=1;else{if(e.lte(o.dOne))return i(r-1+e.toNumber());r+=1,e=o.log(e,t)}return i(r)},o.prototype.sin=function(){return 0===this.layer?i(Math.sin(this.sign*this.mag)):n(0,0,0)},o.prototype.cos=function(){return 0===this.layer?i(Math.cos(this.sign*this.mag)):n(0,0,0)},o.prototype.tan=function(){return 0===this.layer?i(Math.tan(this.sign*this.mag)):n(0,0,0)},o.prototype.asin=function(){return 0===this.layer?i(Math.asin(this.sign*this.mag)):n(Number.NaN,Number.NaN,Number.NaN)},o.prototype.acos=function(){return 0===this.layer?i(Math.acos(this.sign*this.mag)):n(Number.NaN,Number.NaN,Number.NaN)},o.prototype.atan=function(){return 0===this.layer?i(Math.atan(this.sign*this.mag)):i(Math.atan(Infinity*this.sign))},o.prototype.sinh=function(){return this.exp().sub(this.negate().exp()).div(2)},o.prototype.cosh=function(){return this.exp().add(this.negate().exp()).div(2)},o.prototype.tanh=function(){return this.sinh().div(this.cosh())},o.prototype.asinh=function(){return o.ln(this.add(this.sqr().add(1).sqrt()))},o.prototype.acosh=function(){return o.ln(this.add(this.sqr().sub(1).sqrt()))},o.prototype.atanh=function(){return this.abs().gte(1)?n(Number.NaN,Number.NaN,Number.NaN):o.ln(this.add(1).div(i(1).sub(this))).div(2)},o.prototype.ascensionPenalty=function(t){return 0===t?this:this.root(o.pow(10,t))},o.prototype.egg=function(){return this.add(9)},o.prototype.lessThanOrEqualTo=function(t){return this.cmp(t)<1},o.prototype.lessThan=function(t){return this.cmp(t)<0},o.prototype.greaterThanOrEqualTo=function(t){return this.cmp(t)>-1},o.prototype.greaterThan=function(t){return this.cmp(t)>0},o}();return o.dZero=n(0,0,0),o.dOne=n(1,0,1),o.dNegOne=n(-1,0,1),o.dTwo=n(1,0,2),o.dTen=n(1,0,10),o.dNaN=n(Number.NaN,Number.NaN,Number.NaN),o.dInf=n(1,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),o.dNegInf=n(-1,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),o});