if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let a={};const l=e=>i(e,t),o={module:{uri:t},exports:a,require:l};s[t]=Promise.all(n.map((e=>o[e]||l(e)))).then((e=>(r(...e),a)))}}define(["./workbox-f51ab5e4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.c7f44e8c.js",revision:null},{url:"assets/app.732dc4a4.js",revision:null},{url:"assets/home.cc57072b.js",revision:null},{url:"assets/index.cd64d4e8.css",revision:null},{url:"assets/virtual_pwa-register.c6d71602.js",revision:null},{url:"index.html",revision:"d3261aa73092a768dc7ec001b1716c75"},{url:"favicon.svg",revision:"5b06a5bf216a012826ee3faf687acef2"},{url:"safari-pinned-tab.svg",revision:"5b06a5bf216a012826ee3faf687acef2"},{url:"pwa-192x192.png",revision:"2e0a48009edcea6ee5b18772e1b1fd33"},{url:"pwa-512x512.png",revision:"d60c68066d7600bb26bae8a1ce34b8ac"},{url:"manifest.webmanifest",revision:"a0296dd6e2475c00d358e32ac0788092"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
