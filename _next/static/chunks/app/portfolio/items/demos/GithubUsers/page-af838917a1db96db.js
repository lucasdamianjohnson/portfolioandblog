(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5957],{40329:function(e,t,n){Promise.resolve().then(n.bind(n,81523)),Promise.resolve().then(n.bind(n,70049)),Promise.resolve().then(n.bind(n,19675)),Promise.resolve().then(n.t.bind(n,39389,23)),Promise.resolve().then(n.t.bind(n,20123,23))},19675:function(e,t,n){"use strict";n.r(t);var i=n(57437),o=n(2265),s=n(79290),r=n(37954),a=n(59638),l=n(35888),c=n(34316),d=n(75156),w=n(220),h=n(65623),p=n(12929),f=n(56503);t.default=()=>{let e=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let t=new s.xsS,n=window.innerWidth/window.innerHeight,i=new s.iKG(-(4e5*n),4e5*n,4e5,-4e5,-1e3,1e3);i.position.z=10;let o=new s.CP7({canvas:e.current,antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.setPixelRatio(Math.min(window.devicePixelRatio,2));let u=new f.xC(o),m=new f.CD(t,i);u.addPass(m);let g=new r.z(i,o.domElement);g.enableRotate=!1,g.enablePan=!0,g.enableZoom=!0;let b=new f.rk({blendFunction:s.WMw,kernelSize:3,luminanceThreshold:.2,luminanceSmoothing:.025,intensity:1.5}),x=new f.H5(i,b);x.renderToScreen=!0,u.addPass(x);let v=new s.Mig(16777215,.5);t.add(v);let M=new s.cek(16777215,1);M.position.set(50,50,50),t.add(M);let P=[],y=new Map,z=[];(async()=>{try{let e=await fetch("/assets/GithubUsers/musae_git_target.csv");for(let t of(await e.text()).split("\n").slice(1)){let[e]=t.split(",");if(e){let t=parseInt(e),n=new s.Pa4(0,0,0),i=new s.Ilk(new s.Ilk("hsl(".concat(137*t%360,", 100%, 50%)"))),o={id:t,position:n,connections:0,color:i};P.push(o),y.set(t,o)}}let n=await fetch("/assets/GithubUsers/musae_git_edges.csv");for(let e of(await n.text()).split("\n").slice(1)){let[t,n]=e.split(",");if(t&&n){let e=parseInt(t),i=parseInt(n);y.has(e)&&y.has(i)&&(z.push({from:e,to:i}),y.get(e).connections+=1,y.get(i).connections+=1)}}let i=new Map,o=z.filter(e=>!(i.has("".concat(e.from,"-").concat(e.to))||i.has("".concat(e.to,"-").concat(e.from)))&&(i.set("".concat(e.from,"-").concat(e.to),!0),i.set("".concat(e.to,"-").concat(e.from),!0),!0)),r=P.map(e=>({id:e.id,connections:e.connections})),f=o.map(e=>({source:e.from,target:e.to})),m=r.map(e=>e.connections),b=(0,p.Z)().domain([Math.min(...m),Math.max(...m)]).range([2400,800]),x=(0,d.Z)(r).force("link",(0,w.Z)(f).id(e=>e.id).distance(100).strength(2)).force("radial",(0,h.Z)(e=>b(-e.connections),0,0).strength(3).radius(1e3));for(let e=0;e<1;e++)x.tick();x.stop(),r.forEach((e,t)=>{P[t].position.set(e.x,e.y,0)});let v=function(){let e=new s.bnF;for(let t=0;t<10;t++){let n=t*Math.PI/5,i=t%2==0?50:20,o=i*Math.cos(n),s=i*Math.sin(n);0===t?e.moveTo(o,s):e.lineTo(o,s)}return e.closePath(),e}(),M=new s.O7d(v,{depth:10,bevelEnabled:!1});M.center(),M.scale(20,20,20);let k=new s.Wid({color:16777215,emissive:16777215,metalness:1,roughness:.01}),E=P.length,_=new s.SPe(M,k,E);_.instanceMatrix.setUsage(s.dj0),_.instanceMatrix.needsUpdate=!0;let W=new Float32Array(3*E);for(let e=0;e<E;e++){let t=P[e];W[3*e]=t.color.r,W[3*e+1]=t.color.g,W[3*e+2]=t.color.b}_.instanceColor=new s.lb7(W,3),t.add(_);let C=new s.Tme;for(let e=0;e<E;e++){let t=P[e];C.position.x=100*t.position.x,C.position.y=100*t.position.y,C.position.z=0,C.rotation.z=Math.random()*Math.PI,C.updateMatrix(),_.setMatrixAt(e,C.matrix)}_.instanceMatrix.needsUpdate=!0;let H=new a.Y({vertexColors:!0,linewidth:.1,resolution:new s.FM8(window.innerWidth,window.innerHeight),transparent:!0,opacity:.6}),S=new l.z,F=new Float32Array(6*o.length),I=new Float32Array(6*o.length);for(let e=0;e<o.length;e++){let t=o[e],n=y.get(t.from),i=y.get(t.to);if(n&&i){F[6*e]=100*n.position.x,F[6*e+1]=100*n.position.y,F[6*e+2]=0,F[6*e+3]=100*i.position.x,F[6*e+4]=100*i.position.y,F[6*e+5]=0;let t=n.color;I[6*e]=t.r,I[6*e+1]=t.g,I[6*e+2]=t.b,I[6*e+3]=t.r,I[6*e+4]=t.g,I[6*e+5]=t.b}}S.setPositions(F),S.setColors(I);let A=new c.w(S,H);t.add(A),window.addEventListener("resize",()=>{H.resolution.set(window.innerWidth,window.innerHeight)});let T=()=>{requestAnimationFrame(T),g.update(),u.render()};T()}catch(e){console.error("Error loading data:",e)}})();let k=()=>{let e=window.innerWidth/window.innerHeight;i.left=-(100*e),i.right=100*e,i.top=100,i.bottom=-100,i.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight),u.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",k),()=>{window.removeEventListener("resize",k),g.dispose(),o.dispose(),u.dispose()}},[]),(0,i.jsx)("canvas",{ref:e,style:{width:"100%",height:"100%"}})}},39389:function(){},20123:function(){}},function(e){e.O(0,[6523,5889,225,7455,154,1627,2971,2117,1744],function(){return e(e.s=40329)}),_N_E=e.O()}]);