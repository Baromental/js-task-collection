var u=Object.defineProperty;var m=(o,e,l)=>e in o?u(o,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[e]=l;var r=(o,e,l)=>(m(o,typeof e!="symbol"?e+"":e,l),l);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function l(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerpolicy&&(t.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?t.credentials="include":s.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(s){if(s.ep)return;s.ep=!0;const t=l(s);fetch(s.href,t)}})();class d{constructor(e){r(this,"email");this.email=e}get email(){return this.email}set email(e){this.email=e}}class n extends d{constructor(l){super(l.email);r(this,"blacklistedEmails",[]);this.access=l.access}blacklist(l){return this.blacklistedEmails.push(l)}isBlacklisted(l){return this.blacklistedEmails.includes(l)}}r(n,"role",{BASIC:"basic",SUPERUSER:"superuser"});const i=new n({email:"mango@mail.com",access:n.role.SUPERUSER});console.log(i.email);console.log(i.access);i.blacklist("poly@mail.com");console.log(i.blacklistedEmails);console.log(i.isBlacklisted("mango@mail.com"));console.log(i.isBlacklisted("poly@mail.com"));
//# sourceMappingURL=commonHelpers.js.map
