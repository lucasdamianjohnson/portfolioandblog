(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7856],{50762:function(e,t,n){Promise.resolve().then(n.bind(n,81523)),Promise.resolve().then(n.bind(n,70049)),Promise.resolve().then(n.bind(n,22527)),Promise.resolve().then(n.t.bind(n,2293,23)),Promise.resolve().then(n.t.bind(n,20123,23))},22527:function(e,t,n){"use strict";n.r(t);var i=n(57437),r=n(2265),s=n(79290),a=n(56503),o=n(7610),d=n(84270);t.default=()=>{let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=new s.xsS,n=new s.cPb(30,window.innerWidth/window.innerHeight,.1,6e3);n.position.set(0,10,0);let i=new s.CP7({canvas:e.current,antialias:!0});i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(window.devicePixelRatio),i.setClearColor(0,1),i.shadowMap.enabled=!0,i.shadowMap.type=s.ntZ;let r=new d.m(n,i.domElement);r.movementSpeed=200,r.rollSpeed=Math.PI/24,r.dragToLook=!0;let l=new a.xC(i),w=new a.CD(t,n);l.addPass(w);let p=new s.Mig(16777215,.2);t.add(p);let h=new s.Ox3(16777215,.8);h.position.set(100,200,100),h.castShadow=!0,h.shadow.mapSize.width=2048,h.shadow.mapSize.height=2048,h.shadow.camera.near=.5,h.shadow.camera.far=1e3,h.shadow.camera.left=-100,h.shadow.camera.right=100,h.shadow.camera.top=100,h.shadow.camera.bottom=-100,t.add(h);let g=new s.cBK().load(["/assets/InfiniteForest/px.jpg","/assets/InfiniteForest/nx.jpg","/assets/InfiniteForest/py.jpg","/assets/InfiniteForest/ny.jpg","/assets/InfiniteForest/pz.jpg","/assets/InfiniteForest/nz.jpg"]);t.background=g;let u=new s.dpR,v=u.load("/assets/InfiniteForest/dirt.png"),m=u.load("/assets/InfiniteForest/grass.png");u.load("/assets/InfiniteForest/grassblades.jpg"),v.wrapS=v.wrapT=s.rpg,m.wrapS=m.wrapT=s.rpg,new s.jyz({uniforms:{dirtTexture:{value:v},grassTexture:{value:m},lowerHeight:{value:0},upperHeight:{value:5}},vertexShader:"\n        varying float vHeight;\n        varying vec2 vUv;\n\n        void main() {\n          vUv = uv;\n          vHeight = position.z;\n          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n        }\n      ",fragmentShader:"\n        uniform sampler2D dirtTexture;\n        uniform sampler2D grassTexture;\n        uniform float lowerHeight;\n        uniform float upperHeight;\n\n        varying float vHeight;\n        varying vec2 vUv;\n\n        void main() {\n          // Normalize the height for blending\n          float t = smoothstep(lowerHeight, upperHeight, vHeight);\n          \n          // Sample both textures\n          vec4 dirtColor = texture2D(dirtTexture, vUv * 10.0); // Adjust repeat as needed\n          vec4 grassColor = texture2D(grassTexture, vUv * 10.0);\n          \n          // Blend textures based on height\n          vec4 finalColor = mix(dirtColor, grassColor, t);\n          \n          gl_FragColor = finalColor;\n        }\n      ",side:s.ehD});let f=new s.Ilk(16777215);t.fog=new s.yo9(f,15e-5),(0,o.zz)();let c=new s.SUY,x=()=>{requestAnimationFrame(x);let e=c.getDelta();c.getElapsedTime(),r.update(e),l.render()};x();let b=new s.Wid,y=new s._12(300,300,50,50),S=new s.Kj0(y,b);S.rotation.x=-Math.PI/2,t.add(S);let z=()=>{let e=window.innerWidth,t=window.innerHeight;n.aspect=e/t,n.updateProjectionMatrix(),i.setSize(e,t),l.setSize(e,t)};return window.addEventListener("resize",z),()=>{window.removeEventListener("resize",z),i.dispose(),l.dispose(),t.traverse(e=>{if(e.geometry&&e.geometry.dispose(),e.material){let t=e.material;Array.isArray(t)?t.forEach(e=>e.dispose()):t.dispose()}})}},[]),(0,i.jsx)("canvas",{ref:e,style:{width:"100%",height:"100%",display:"block"}})}},2293:function(){},20123:function(){}},function(e){e.O(0,[5604,5889,225,7455,8652,2971,2117,1744],function(){return e(e.s=50762)}),_N_E=e.O()}]);