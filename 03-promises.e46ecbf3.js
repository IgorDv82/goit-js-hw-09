var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("iQIUW");const i={form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),btn:document.querySelector('[type="submit"]')};let l=0,u=0,a=0;function s(e,t){const o=Math.random()>.3;return new Promise(((n,r)=>{setTimeout((()=>{o?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))}i.form.addEventListener("submit",(function(e){e.preventDefault(),l=parseInt(i.delay.value),u=parseInt(i.step.value),a=parseInt(i.amount.value);for(let e=1;e<=a;e+=1)s(e,l).then((({position:e,delay:t})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`,{position:"right-top",timeout:3e3})})).catch((({position:e,delay:t})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`,{position:"right-top",timeout:3e3})})),l+=u;i.form.reset()}));
//# sourceMappingURL=03-promises.e46ecbf3.js.map