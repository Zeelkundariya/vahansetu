import{c as i,u as v,f as u,a as j,r as m,j as s,L as l,X as y,l as k,s as b}from"./index-Brdytz67.js";import{L as g,D as f,M as N,T as z,Z as S,C,S as L}from"./Logo-DcU9x1eu.js";/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=i("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=i("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=i("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=i("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=i("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);function U(){var r;const{user:a,setUser:p}=v(),t=u(),d=j(),[n,c]=m.useState(!1);m.useEffect(()=>{window.lucide&&window.lucide.createIcons()},[t,n]);const h=async()=>{try{await k(),b("🛡️ Security Session Terminated","success")}catch{}p(null),d("/")},o=[{path:"/map",icon:s.jsx(N,{size:15}),label:"Map"},{path:"/fleet",icon:s.jsx(z,{size:15}),label:"Fleet"},{path:"/cpo",icon:s.jsx(S,{size:15}),label:"Host Portal"},{path:"/analytics",icon:s.jsx(C,{size:15}),label:"Analytics"}];(a==null?void 0:a.role)==="admin"&&o.push({path:"/admin",icon:s.jsx(L,{size:15}),label:"Control"});const x=((r=a==null?void 0:a.name)==null?void 0:r.split(" ").map(e=>e[0]).join("").toUpperCase().slice(0,2))||"VS";return s.jsxs("nav",{className:"vs-navbar",role:"navigation","aria-label":"Main navigation",children:[s.jsx(l,{to:"/map",className:"vs-logo","aria-label":"VahanSetu Home - Return to Map",style:{textDecoration:"none"},children:s.jsx(g,{"aria-hidden":"true"})}),s.jsxs("div",{className:`vs-nav-links${n?" nav-open":""}`,id:"navLinks",children:[o.map(e=>s.jsxs(l,{to:e.path,className:`vs-nav-link vs-icon-text${t.pathname.startsWith(e.path)?" active":""}`,onClick:()=>c(!1),children:[e.icon,s.jsx("span",{children:e.label})]},e.path)),s.jsxs(l,{to:"/premium",className:`vs-nav-link vs-icon-text premium-link${t.pathname==="/premium"?" active":""}`,onClick:()=>c(!1),children:[s.jsx(f,{size:15}),s.jsx("span",{children:"Premium"})]})]}),s.jsxs("div",{className:"vs-nav-right",children:[a&&s.jsxs(s.Fragment,{children:[s.jsxs(l,{to:"/profile",className:`vs-user-chip${t.pathname==="/profile"?" active":""}`,children:[s.jsx("div",{className:"vs-user-avatar",children:x}),s.jsxs("div",{className:"vs-user-info",children:[s.jsx("span",{className:"vs-user-name",children:a.name.split(" ")[0]}),s.jsx("span",{className:"vs-user-role",children:a.role==="admin"?s.jsxs(s.Fragment,{children:[s.jsx(F,{size:9})," Admin"]}):a.is_premium?s.jsxs(s.Fragment,{children:[s.jsx(O,{size:9})," Premium"]}):s.jsxs(s.Fragment,{children:[s.jsx(H,{size:9})," Member"]})})]})]}),s.jsxs("button",{onClick:h,className:"vs-btn vs-btn-secondary vs-btn-sm vs-icon-text",style:{display:"flex"},children:[s.jsx(M,{size:14}),s.jsx("span",{children:"Sign Out"})]})]}),s.jsx("button",{className:"vs-hamburger vs-btn-icon vs-btn",onClick:()=>c(!n),"aria-expanded":n,children:n?s.jsx(y,{size:18}):s.jsx(w,{size:18})})]})]})}export{U as N,O as S,F as a};
