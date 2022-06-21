import{o as u,c as f,a as A,d as x,r as y,b as c,w as m,e as v,f as w,F as D,g as I,h as R,i as T}from"./vendor.7b4ba159.js";import*as l from"https://dpalmer.in/Art-Project/three.module.js";const O=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}};O();const V="modulepreload",z={},C="/",d=function(o,i){return!i||i.length===0?o():Promise.all(i.map(e=>{if(e=`${C}${e}`,e in z)return;z[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const a=document.createElement("link");if(a.rel=t?"stylesheet":V,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t)return new Promise((S,L)=>{a.addEventListener("load",S),a.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o())};var P="/Dicon.png",M="/assets/github.svg",H="/assets/linkedin.svg",N="/assets/instagram.svg",W="/assets/behance.svg",q="/assets/mail.svg";var E=(r,o)=>{const i=r.__vccOpts||r;for(const[e,t]of o)i[e]=t;return i};const B={name:"SocialLinks",setup(){return{}}},j={class:"grow text-r social-links"},F=A('<a href="https://github.com/Dpalme" target="_blank"><img src="'+M+'" alt="Github" height="24"></a><a href="https://www.linkedin.com/in/diego-palmerin/" target="_blank"><img src="'+H+'" alt="LinkedIn" height="24"></a><a href="https://www.instagram.com/diegoo_pb2/" target="_blank"><img src="'+N+'" alt="Instagram" height="24"></a><a href="https://www.behance.com/dpalme/" target="_blank"><img src="'+W+'" alt="Behance" height="24"></a><a href="mailto:dpalme@me.com" target="_blank"><img src="'+q+'" alt="Email" height="24"></a>',5),G=[F];function U(r,o,i,e,t,n){return u(),f("div",j,G)}var k=E(B,[["render",U]]);const K={id:"nav",class:"pt-md pb-sm px-md night sticky z-2 top w-f flex-row"},Q=v("img",{src:P,alt:"Diego Palmer\xEDn",height:"32"},null,-1),Y={class:"grow"},J=w("Home"),X=w("My Work"),Z=w("About Me"),ee=x({setup(r){return(o,i)=>{const e=y("router-link");return u(),f("header",K,[c(e,{to:"/",class:"logo"},{default:m(()=>[Q]),_:1}),v("div",Y,[c(e,{class:"nav-link",to:"/"},{default:m(()=>[J]),_:1}),c(e,{class:"nav-link",to:"/projects"},{default:m(()=>[X]),_:1}),c(e,{class:"nav-link",to:"/about"},{default:m(()=>[Z]),_:1})]),c(k)])}}});let s=null,p=null,g=null,h=null,b,_,te=Date.now();async function oe(){p=new l.Scene,h=30,b=window.innerWidth/window.innerHeight,s=new l.PerspectiveCamera(60,b,1,1e3),s.position.set(100,100,100),s.lookAt(0,0,0),p.add(s);var r=new l.SphereGeometry(75,50,50);const o=new l.ShaderMaterial({uniforms:{time:{type:"f",value:0},seed:{type:"f",value:(Date.now()>>10)*Math.random()}},vertexShader:`vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
        vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
        vec3 fade(vec3 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }
        float noise(vec3 P) {
            vec3 i0 = mod289(floor(P)), i1 = mod289(i0 + vec3(1.0));
            vec3 f0 = fract(P), f1 = f0 - vec3(1.0), f = fade(f0);
            vec4 ix = vec4(i0.x, i1.x, i0.x, i1.x), iy = vec4(i0.yy, i1.yy);
            vec4 iz0 = i0.zzzz, iz1 = i1.zzzz;
            vec4 ixy = permute(permute(ix) + iy), ixy0 = permute(ixy + iz0), ixy1 = permute(ixy + iz1);
            vec4 gx0 = ixy0 * (1.0 / 7.0), gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
            vec4 gx1 = ixy1 * (1.0 / 7.0), gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
            gx0 = fract(gx0); gx1 = fract(gx1);
            vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0), sz0 = step(gz0, vec4(0.0));
            vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1), sz1 = step(gz1, vec4(0.0));
            gx0 -= sz0 * (step(0.0, gx0) - 0.5); gy0 -= sz0 * (step(0.0, gy0) - 0.5);
            gx1 -= sz1 * (step(0.0, gx1) - 0.5); gy1 -= sz1 * (step(0.0, gy1) - 0.5);
            vec3 g0 = vec3(gx0.x,gy0.x,gz0.x), g1 = vec3(gx0.y,gy0.y,gz0.y),
                g2 = vec3(gx0.z,gy0.z,gz0.z), g3 = vec3(gx0.w,gy0.w,gz0.w),
                g4 = vec3(gx1.x,gy1.x,gz1.x), g5 = vec3(gx1.y,gy1.y,gz1.y),
                g6 = vec3(gx1.z,gy1.z,gz1.z), g7 = vec3(gx1.w,gy1.w,gz1.w);
            vec4 norm0 = taylorInvSqrt(vec4(dot(g0,g0), dot(g2,g2), dot(g1,g1), dot(g3,g3)));
            vec4 norm1 = taylorInvSqrt(vec4(dot(g4,g4), dot(g6,g6), dot(g5,g5), dot(g7,g7)));
            g0 *= norm0.x; g2 *= norm0.y; g1 *= norm0.z; g3 *= norm0.w;
            g4 *= norm1.x; g6 *= norm1.y; g5 *= norm1.z; g7 *= norm1.w;
            vec4 nz = mix(vec4(dot(g0, vec3(f0.x, f0.y, f0.z)), dot(g1, vec3(f1.x, f0.y, f0.z)),
                dot(g2, vec3(f0.x, f1.y, f0.z)), dot(g3, vec3(f1.x, f1.y, f0.z))),
                vec4(dot(g4, vec3(f0.x, f0.y, f1.z)), dot(g5, vec3(f1.x, f0.y, f1.z)),
                    dot(g6, vec3(f0.x, f1.y, f1.z)), dot(g7, vec3(f1.x, f1.y, f1.z))), f.z);
            return 2.2 * mix(mix(nz.x,nz.z,f.y), mix(nz.y,nz.w,f.y), f.x);
        }
        float noise(vec2 P) { return noise(vec3(P, 0.0)); }
        varying vec2 vUv;
        varying vec3 noiseTex;
        uniform float time;
        uniform float seed;
        varying vec3 newPosition;

        float turbulence(vec3 P) {
          float f = 0., s = 1.;
          for (int i = 0 ; i < 5 ; i++) {
              f += abs(noise(s * P)) / s;
              s *= 2.5;
              P = vec3(.866 * P.x + .25 * P.z, P.y + 100., -.5 * P.x + .0066 * P.z);
          }
          return f;
        }

        void main() {
          vUv = uv;
          float nnoise = 10. * turbulence(((position + seed * 2.) / 50.));
          float mnoise = 30. * turbulence(((time / 500.) + (position + seed) / 250.));


          newPosition = position + normal * (nnoise - mnoise);
          noiseTex = (newPosition / 15.) - (mnoise / 15.);
          gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );

        }`,fragmentShader:`varying vec2 vUv;
      varying vec3 noiseTex;
      varying vec3 newPosition;

      void main() {
        vec3 color = vec3(.52,.68,.98) - (vec3(.92,.98,.68) * noiseTex.y / 10.);
        gl_FragColor = vec4(color, .90);
      }`,side:l.DoubleSide,transparent:!0});_=new l.Mesh(r,o),_.position.y=5,p.add(_),g=new l.WebGLRenderer({antialias:!0,alpha:!0}),g.setPixelRatio(window.devicePixelRatio),g.setSize(window.innerWidth,window.innerHeight),document.getElementById("canvas").appendChild(g.domElement),$()}function $(){requestAnimationFrame(()=>{$()}),_.material.uniforms.time.value=.05*(Date.now()-te),g.render(p,s)}document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&oe()});window.addEventListener("resize",async()=>{s.aspect=window.innerWidth/window.innerHeight,s.left=s.bottom=h*s.aspect/-2,s.right=s.top=h*s.aspect/2,s.updateProjectionMatrix(),g.setSize(window.innerWidth,window.innerHeight)},!1);window.addEventListener("wheel",r=>{_.rotation.y+=-r.deltaY/2e3});const ne={name:"Animation",setup(){return{}}},re={id:"canvas",class:"overflow-h fixed center-a fullscreen z--1"};function ie(r,o,i,e,t,n){return u(),f("div",re)}var se=E(ne,[["render",ie]]);const ae={class:"py-md px-md night mt-lg"},ce={class:"container"},le={class:"flex-row"},de=v("img",{src:P,alt:"Diego Palmer\xEDn",height:"96"},null,-1),ge=x({setup(r){return(o,i)=>{const e=y("router-link");return u(),f("footer",ae,[v("div",ce,[v("div",le,[c(e,{to:"/",class:"logo"},{default:m(()=>[de]),_:1}),c(k)])])])}}});const me=x({setup(r){return(o,i)=>{const e=y("router-view");return u(),f(D,null,[c(ee),c(se),c(e),c(ge)],64)}}}),_e=[{path:"/",name:"Home",component:()=>d(()=>import("./Home.6b6a8519.js"),["assets/Home.6b6a8519.js","assets/Home.8d84db70.css","assets/ProjectsReel.6091c2e8.js","assets/ProjectsReel.3b35304b.css","assets/vendor.7b4ba159.js"])},{path:"/about",name:"About",component:()=>d(()=>import("./About.699fb64e.js"),["assets/About.699fb64e.js","assets/vendor.7b4ba159.js"])},{path:"/projects",name:"Projects",component:()=>d(()=>import("./Projects.c1646193.js"),["assets/Projects.c1646193.js","assets/ProjectsReel.6091c2e8.js","assets/ProjectsReel.3b35304b.css","assets/vendor.7b4ba159.js"]),children:[{path:"metabase-q",name:"Metabase Q",component:()=>d(()=>import("./MetabaseQ.15ab0fef.js"),["assets/MetabaseQ.15ab0fef.js","assets/ProjectTitle.97d7d303.js","assets/ProjectTitle.c32d21cf.css","assets/vendor.7b4ba159.js"])},{path:"andreas",name:"Andreas",component:()=>d(()=>import("./Andreas.20b92d3f.js"),["assets/Andreas.20b92d3f.js","assets/ProjectTitle.97d7d303.js","assets/ProjectTitle.c32d21cf.css","assets/vendor.7b4ba159.js"])},{path:"refugio-san-gregorio",name:"Refugio San Gregorio",component:()=>d(()=>import("./RefugioGregorio.7a87e3a6.js"),["assets/RefugioGregorio.7a87e3a6.js","assets/ProjectTitle.97d7d303.js","assets/ProjectTitle.c32d21cf.css","assets/vendor.7b4ba159.js"])}]}],ve=I({history:R(window.location.host),routes:_e,scrollBehavior(){document.getElementById("app").scrollIntoView({behavior:"smooth"})}});T(me).use(ve).mount("#app");export{E as _};
