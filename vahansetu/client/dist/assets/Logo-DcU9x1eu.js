import{c as t,j as e}from"./index-Brdytz67.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=t("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r=t("Diamond",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=t("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=t("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=t("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=t("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function l(){return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .vs-monogram{--c-cyan:#00f2ff;--c-blue:#0066ff;--c-purple:#7c4dff;--c-green:#00ff95;display:inline-flex;align-items:center;gap:16px;text-decoration:none;position:relative;cursor:pointer;perspective:1200px;user-select:none;}
        .vsm-reactor{position:relative;width:62px;height:62px;display:flex;align-items:center;justify-content:center;transform-style:preserve-3d;transition:transform .6s cubic-bezier(.2,1,.3,1);}
        .vs-monogram:hover .vsm-reactor{transform:scale(1.1) rotateX(12deg) rotateY(5deg);}
        .vsm-matrix{position:absolute;inset:0;opacity:.1;background-image:radial-gradient(var(--c-cyan) .8px,transparent .8px),linear-gradient(rgba(0,242,255,.05) 1px,transparent 1px);background-size:10px 10px,100% 10px;border-radius:14px;transform:translateZ(-25px);}
        .vsm-svg{width:100%;height:100%;overflow:visible;}
        .vsm-path-v{fill:#0066ff;opacity:.95;filter:drop-shadow(0 0 10px rgba(0,102,255,.5));}
        .vsm-path-s{fill:url(#vsm-flux-s);filter:drop-shadow(0 0 12px #00f2ff);}
        .vsm-s-rotator{transform-origin:50px 48px;animation:vsm-s-spin 7s cubic-bezier(.4,0,.2,1) infinite;transform-style:preserve-3d;}
        @keyframes vsm-s-spin{0%{transform:rotateY(0deg)}100%{transform:rotateY(360deg)}}
        .vs-monogram:hover .vsm-s-rotator{animation-duration:3.5s;}
        .vsm-orbit{transform-origin:50px 50px;animation:vsm-orbit-r 12s linear infinite;}
        @keyframes vsm-orbit-r{from{transform:rotateZ(0deg)}to{transform:rotateZ(360deg)}}
        .vsm-bloom{animation:vsm-breathe 4s ease-in-out infinite;}
        @keyframes vsm-breathe{0%,100%{opacity:.85;filter:drop-shadow(0 0 5px #00f2ff)}50%{opacity:1;filter:drop-shadow(0 0 20px #00f2ff) drop-shadow(0 0 35px rgba(0,242,255,.3))}}
        .vsm-brand{font-family:'Outfit','Syne',sans-serif;font-weight:900;font-size:1.55rem;letter-spacing:.14em;background:linear-gradient(90deg,#fff 0%,#00f2ff 33%,#00ff95 66%,#fff 100%);background-size:200% auto;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:vsm-text-flow 4s linear infinite;line-height:1;text-transform:uppercase;filter:drop-shadow(0 0 10px rgba(0,242,255,.2));}
        @keyframes vsm-text-flow{0%{background-position:100% center}100%{background-position:-100% center}}
        .vs-monogram:hover .vsm-brand{letter-spacing:.18em;animation-duration:2s;transition:all .4s ease;}
        .vsm-tag{font-size:.58rem;letter-spacing:.62em;color:rgba(255,255,255,.45);text-transform:uppercase;margin-top:6px;font-weight:800;font-family:'Inter',sans-serif;text-align:left;}
      `}),e.jsxs("div",{className:"vs-monogram",children:[e.jsxs("div",{className:"vsm-reactor",children:[e.jsx("div",{className:"vsm-matrix"}),e.jsxs("svg",{className:"vsm-svg vsm-bloom",viewBox:"0 0 100 100",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"vsm-flux-s",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#00f2ff"}),e.jsx("stop",{offset:"50%",stopColor:"#00ff95"}),e.jsx("stop",{offset:"100%",stopColor:"#00f2ff"}),e.jsx("animate",{attributeName:"x1",values:"0%;100%;0%",dur:"4s",repeatCount:"indefinite"})]})}),e.jsx("path",{d:"M50,4 L94,28 L94,72 L50,96 L6,72 L6,28 Z",fill:"none",stroke:"rgba(0,242,255,0.12)",strokeWidth:"1.5"}),e.jsx("path",{className:"vsm-path-v",d:"M15,25 L50,90 L85,25 L70,25 L50,68 L30,25 Z"}),e.jsx("path",{d:"M15,25 L50,90 L85,25",fill:"none",stroke:"rgba(255,255,255,0.2)",strokeWidth:"0.8"}),e.jsxs("g",{className:"vsm-s-rotator",children:[e.jsx("path",{className:"vsm-path-s",d:"M33,30 L67,30 L67,42 L46,42 L46,48 L67,48 L67,72 L33,72 L33,60 L54,60 L54,54 L33,54 Z"}),e.jsx("rect",{x:"33",y:"30",width:"4",height:"4",fill:"#fff",opacity:"0.8"}),e.jsx("rect",{x:"63",y:"68",width:"4",height:"4",fill:"#fff",opacity:"0.8"})]}),e.jsxs("g",{className:"vsm-orbit",children:[e.jsx("circle",{cx:"50",cy:"50",r:"48",fill:"none",stroke:"rgba(0,242,255,0.1)",strokeWidth:"0.5",strokeDasharray:"2 12"}),e.jsx("circle",{cx:"98",cy:"50",r:"2.5",fill:"#00f2ff"}),e.jsx("circle",{cx:"2",cy:"50",r:"2.5",fill:"#00ff95"})]}),e.jsxs("g",{stroke:"#00f2ff",strokeWidth:"3",fill:"none",opacity:"0.5",children:[e.jsx("path",{d:"M10,18 L10,10 L18,10"}),e.jsx("path",{d:"M90,18 L90,10 L82,10"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"vsm-brand",children:"VAHANSETU"}),e.jsx("div",{className:"vsm-tag",children:"UNIFIED EV ECOSYSTEM"})]})]})]})}export{a as C,r as D,l as L,i as M,o as S,n as T,f as Z};
