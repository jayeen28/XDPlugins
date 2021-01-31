module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){const r=n(1),l=n(10);e.exports={types:r,showDialog:async function(e,t,n=[],r={}){const i=document.createElement("dialog");i.id=`${e}-dialog`,i.innerHTML=`\n<style>\n    form {\n        width: ${r.width||360}px;\n    }\n\n    div, main > *, label, input:not([type="checkbox"]), select, textarea {\n        display: block;\n        width: 100%;\n    }\n\t\t\n    main > * + * {\n        margin-top: 1em;\n    }\n\t\t\n    .checkbox-wrapper {\n        display: flex;\n    }\n\t\t\n    .checkbox-wrapper span, .checkbox-wrapper input{\n        display: block;\n        width: auto;\n    }\n\t\t\n    ${r.css||""}\n</style>\n<form method="dialog">\n<h1>${t}</h1><hr>\n<main></main>\n<footer>\n<button id="${e}-dialogHelperBtnCancel" uxp-variant="primary">${r.cancelButtonText||"Cancel"}</button>\n<button id="${e}-dialogHelperBtnOk" type="submit" uxp-variant="cta">${r.okButtonText||"Ok"}</button>\n</footer>\n</form>\n    `;const o=i.querySelector("main"),a=i.querySelector("form"),u=i.querySelector(`#${e}-dialogHelperBtnOk`),p=i.querySelector(`#${e}-dialogHelperBtnCancel`);let d=[],c=[];const s={close:()=>{u.disabled||i.close(JSON.stringify(s.values()))},cancel:()=>{i.close(0)},values:()=>{let e={};for(let t of c)e[t.props.id]=t.type.value(t);return e},change:()=>{u.disabled=!l(c,s.values(),r.onValidate)},registerContentElement:e=>{d.push(e)}};u.addEventListener("click",e=>{e.preventDefault(),s.close()}),a.onsubmit=s.close,p.addEventListener("click",s.cancel);const m=n.map(t=>{let n=t.type.render(e,t,s);return n.props=t,n.type=t.type,n});for(let e of m)o.appendChild(e.wrapper);c.push(...m),c.push(...d),document.body.innerHTML="",document.body.appendChild(i),r.onBeforeShow&&await r.onBeforeShow(i,c,s),s.change();const b=await i.showModal();if(0===b)throw new Error("reasonCanceled");return JSON.parse(b)},...r}},function(e,t,n){e.exports={CHECKBOX:n(2),HEADER:n(3),HR:n(4),SELECT:n(5),SLIDER:n(6),TEXT:n(7),TEXT_AREA:n(8),TEXT_INPUT:n(9)}},function(e,t){const n={render:(e,t,r)=>{const l=document.createElement("label");l.id=`${e}-${t.id}`+"-wrapper",l.className="checkbox-wrapper",Object.assign(l.style,{flexDirection:"row",alignItems:"center"});const i=document.createElement("input");i.type="checkbox",i.id=`${e}-${t.id}`,i.placeholder=t.label,l.appendChild(i);const o=document.createElement("span");if(o.id=`${e}-${t.id}`+"-label",o.innerHTML=t.label,l.appendChild(o),t.htmlAttributes)for(let e in t.htmlAttributes)i.setAttribute(e,t.htmlAttributes[e]);return void 0!==t.value&&(i.value=t.value,i.checked=!0===t.value),i.addEventListener("change",()=>{r.change()}),{wrapper:l,input:i,type:n,props:t}},valid:e=>!e.props.required||n.value(e),value:e=>e.input.checked,type:"Input"};e.exports=n},function(e,t){const n={render:(e,t)=>{const r=document.createElement("h2");if(r.innerHTML=t.label,t.htmlAttributes)for(let e in t.htmlAttributes)r.setAttribute(e,t.htmlAttributes[e]);return r.id=`${e}-${t.id}`,{wrapper:r,type:n,input:void 0,props:t}},valid:()=>!0,value:()=>void 0,type:"Header"};e.exports=n},function(e,t){const n={render:(e,t)=>{const r=document.createElement("hr");if(t.htmlAttributes)for(let e in t.htmlAttributes)r.setAttribute(e,t.htmlAttributes[e]);return r.id=`${e}-${t.id}`,{wrapper:r,type:n,props:t,input:void 0}},valid:()=>!0,value:()=>void 0,type:"Horizontal Rule"};e.exports=n},function(e,t){const n={render:(e,t,r)=>{if(void 0===t.options)return console.error("A select box must have an `options` parameter passed in the props."),null;const l=document.createElement("label");l.id=`${e}-${t.id}`+"-wrapper";const i=document.createElement("span");i.id=`${e}-${t.id}`+"-label",i.innerHTML=t.label,l.appendChild(i);const o=document.createElement("select");o.id=`${e}-${t.id}`;for(let e of t.options){let t=document.createElement("option");t.value=e.value,t.innerHTML=e.label,o.appendChild(t)}if(l.appendChild(o),t.htmlAttributes)for(let e in t.htmlAttributes)o.setAttribute(e,t.htmlAttributes[e]);return void 0!==t.value&&(o.value=t.value),o.addEventListener("change",()=>{r.change()}),{wrapper:l,input:o,type:n,props:t}},valid:()=>!0,value:e=>e.input.value,type:"Select"};e.exports=n},function(e,t){const n={render:(e,t,r)=>{if(void 0===t.htmlAttributes||void 0===t.value||void 0===t.htmlAttributes.min||void 0===t.htmlAttributes.max)return console.error("A slider must have a min, max and value parameter specified in its `htmlAttributes` (value can also be specified outside the `htmlAttributes`)."),null;const l=document.createElement("label");l.id=`${e}-${t.id}`+"-wrapper";const i=document.createElement("span");i.textContent=t.label,i.id=`${e}-${t.id}`+"-label";const o=document.createElement("span");o.id=`${e}-${t.id}-value-label`,o.textContent=(t.htmlAttributes.value||t.value)+(t.unit||"");const a=document.createElement("div");a.className="row",a.style.justifyContent="space-between",a.appendChild(i),a.appendChild(o);const u=document.createElement("input");u.id=`${e}-${t.id}`,u.setAttribute("type","range"),u.addEventListener("input",()=>{r.change(),o.textContent=Math.round(Number.parseFloat(u.value))+(t.unit||"")}),l.appendChild(a),l.appendChild(u);for(let e in t.htmlAttributes)u.setAttribute(e,t.htmlAttributes[e]);return u.value=t.value,{wrapper:l,input:u,type:n,props:t}},valid:()=>!0,value:e=>Number.parseFloat(e.input.value),type:"Slider"};e.exports=n},function(e,t){const n={render:(e,t)=>{const r=document.createElement("p");if(r.innerHTML=t.label,t.htmlAttributes)for(let e in t.htmlAttributes)r.setAttribute(e,t.htmlAttributes[e]);return r.id=`${e}-${t.id}`,{wrapper:r,type:n,props:t,input:void 0}},valid:()=>!0,value:()=>void 0,type:"Text"};e.exports=n},function(e,t){const n={render:(e,t,r)=>{let l=document.createElement("label");l.id=`${e}-${t.id}`+"-wrapper";const i=document.createElement("textarea");i.id=`${e}-${t.id}`,i.placeholder=t.label;const o=document.createElement("span");if(o.id=`${e}-${t.id}`+"-label",o.innerHTML=t.label+"",l.appendChild(o),l.appendChild(i),t.htmlAttributes)for(let e in t.htmlAttributes)i.setAttribute(e,t.htmlAttributes[e]);return void 0!==t.value&&(i.value=t.value),i.addEventListener("input",()=>{r.change()}),{wrapper:l,input:i,type:n,props:t}},valid:e=>{if(e.props.required){return n.value(e).length>0}return!0},value:e=>e.input.value,type:"Textarea"};e.exports=n},function(e,t){const n={render:(e,t,r)=>{let l=document.createElement("label");l.id=`${e}-${t.id}`+"-wrapper";const i=document.createElement("input");i.id=`${e}-${t.id}`,i.placeholder=t.label;const o=document.createElement("span");if(o.id=`${e}-${t.id}`+"-label",o.innerHTML=t.label+"",l.appendChild(o),l.appendChild(i),t.htmlAttributes)for(let e in t.htmlAttributes)i.setAttribute(e,t.htmlAttributes[e]);return void 0!==t.value&&(i.value=t.value),i.addEventListener("input",()=>{r.change()}),{wrapper:l,input:i,type:n,props:t}},valid:e=>{if(e.props.required){return n.value(e).length>0}return!0},value:e=>e.input.value,type:"Input"};e.exports=n},function(e,t){e.exports=function(e,t,n){if(n&&!n(t))return!1;for(let t of e)if(!t.type.valid(t))return!1;return!0}}]);