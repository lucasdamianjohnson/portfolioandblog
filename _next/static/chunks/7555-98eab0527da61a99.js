"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7555,2901],{10955:function(e,r,t){t.r(r),t.d(r,{bumpFragmentWGSL:function(){return f}});var a=t(35606);let o="bumpFragment",i=`var uvOffset: vec2f= vec2f(0.0,0.0);
#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)
#ifdef NORMALXYSCALE
var normalScale: f32=1.0;
#elif defined(BUMP)
var normalScale: f32=uniforms.vBumpInfos.y;
#else
var normalScale: f32=1.0;
#endif
#if defined(TANGENT) && defined(NORMAL)
var TBN: mat3x3f=mat3x3<f32>(input.vTBN0,input.vTBN1,input.vTBN2); 
#elif defined(BUMP)
var TBNUV: vec2f=select(-fragmentInputs.vBumpUV,fragmentInputs.vBumpUV,fragmentInputs.frontFacing);var TBN: mat3x3f=cotangent_frame(normalW*normalScale,input.vPositionW,TBNUV,uniforms.vTangentSpaceParams);
#else
var TBNUV: vec2f=select(-fragmentInputs.vDetailUV,fragmentInputs.vDetailUV,fragmentInputs.frontFacing);var TBN: mat3x3f=cotangent_frame(normalW*normalScale,input.vPositionW,TBNUV, vec2f(1.,1.));
#endif
#elif defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL)
var TBN: mat3x3f=mat3x3<f32>(input.vTBN0,input.vTBN1,input.vTBN2); 
#else
var TBNUV: vec2f=select( -fragmentInputs.vMainUV1,fragmentInputs.vMainUV1,fragmentInputs.frontFacing);var TBN: mat3x3f=cotangent_frame(normalW,input.vPositionW,TBNUV, vec2f(1.,1.));
#endif
#endif
#ifdef PARALLAX
var invTBN: mat3x3f=transposeMat3(TBN);
#ifdef PARALLAXOCCLUSION
uvOffset=parallaxOcclusion(invTBN*-viewDirectionW,invTBN*normalW,fragmentInputs.vBumpUV,uniforms.vBumpInfos.z);
#else
uvOffset=parallaxOffset(invTBN*viewDirectionW,uniforms.vBumpInfos.z);
#endif
#endif
#ifdef DETAIL
var detailColor: vec4f=textureSample(detailSampler,detailSamplerSampler,fragmentInputs.vDetailUV+uvOffset);var detailNormalRG: vec2f=detailColor.wy*2.0-1.0;var detailNormalB: f32=sqrt(1.-saturate(dot(detailNormalRG,detailNormalRG)));var detailNormal: vec3f= vec3f(detailNormalRG,detailNormalB);
#endif
#ifdef BUMP
#ifdef OBJECTSPACE_NORMALMAP
#define CUSTOM_FRAGMENT_BUMP_FRAGMENT
normalW=normalize(textureSample(bumpSampler,bumpSamplerSampler,fragmentInputs.vBumpUV).xyz *2.0-1.0);normalW=normalize(mat3x3f(uniforms.normalMatrix[0].xyz,uniforms.normalMatrix[1].xyz,uniforms.normalMatrix[2].xyz)*normalW);
#elif !defined(DETAIL)
normalW=perturbNormal(TBN,textureSample(bumpSampler,bumpSamplerSampler,fragmentInputs.vBumpUV+uvOffset).xyz,uniforms.vBumpInfos.y);
#else
var bumpNormal: vec3f=textureSample(bumpSampler,bumpSamplerSampler,fragmentInputs.vBumpUV+uvOffset).xyz*2.0-1.0;
#if DETAIL_NORMALBLENDMETHOD==0 
detailNormal=vec3f(detailNormal.xy*uniforms.vDetailInfos.z,detailNormal.z);var blendedNormal: vec3f=normalize( vec3f(bumpNormal.xy+detailNormal.xy,bumpNormal.z*detailNormal.z));
#elif DETAIL_NORMALBLENDMETHOD==1 
detailNormal=vec3f(detailNormal.xy*uniforms.vDetailInfos.z,detailNormal.z);bumpNormal+= vec3f(0.0,0.0,1.0);detailNormal*= vec3f(-1.0,-1.0,1.0);var blendedNormal: vec3f=bumpNormal*dot(bumpNormal,detailNormal)/bumpNormal.z-detailNormal;
#endif
normalW=perturbNormalBase(TBN,blendedNormal,uniforms.vBumpInfos.y);
#endif
#elif defined(DETAIL)
detailNormal=vec3f(detailNormal.xy*uniforms.vDetailInfos.z,detailNormal.z);normalW=perturbNormalBase(TBN,detailNormal,uniforms.vDetailInfos.z);
#endif
`;a.v.IncludesShadersStoreWGSL[o]=i;let f={name:o,shader:i}},93523:function(e,r,t){t.r(r),t.d(r,{bumpFragmentFunctionsWGSL:function(){return f}});var a=t(35606);t(55985);let o="bumpFragmentFunctions",i=`#if defined(BUMP)
#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)
#endif
#if defined(DETAIL)
#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)
#endif
#if defined(BUMP) && defined(PARALLAX)
const minSamples: f32=4.;const maxSamples: f32=15.;const iMaxSamples: i32=15;fn parallaxOcclusion(vViewDirCoT: vec3f,vNormalCoT: vec3f,texCoord: vec2f,parallaxScale: f32)->vec2f {var parallaxLimit: f32=length(vViewDirCoT.xy)/vViewDirCoT.z;parallaxLimit*=parallaxScale;var vOffsetDir: vec2f=normalize(vViewDirCoT.xy);var vMaxOffset: vec2f=vOffsetDir*parallaxLimit;var numSamples: f32=maxSamples+(dot(vViewDirCoT,vNormalCoT)*(minSamples-maxSamples));var stepSize: f32=1.0/numSamples;var currRayHeight: f32=1.0;var vCurrOffset: vec2f= vec2f(0,0);var vLastOffset: vec2f= vec2f(0,0);var lastSampledHeight: f32=1.0;var currSampledHeight: f32=1.0;var keepWorking: bool=true;for (var i: i32=0; i<iMaxSamples; i++)
{currSampledHeight=textureSample(bumpSampler,bumpSamplerSampler,texCoord+vCurrOffset).w;if (!keepWorking)
{}
else if (currSampledHeight>currRayHeight)
{var delta1: f32=currSampledHeight-currRayHeight;var delta2: f32=(currRayHeight+stepSize)-lastSampledHeight;var ratio: f32=delta1/(delta1+delta2);vCurrOffset=(ratio)* vLastOffset+(1.0-ratio)*vCurrOffset;keepWorking=false;}
else
{currRayHeight-=stepSize;vLastOffset=vCurrOffset;
#ifdef PARALLAX_RHS
vCurrOffset-=stepSize*vMaxOffset;
#else
vCurrOffset+=stepSize*vMaxOffset;
#endif
lastSampledHeight=currSampledHeight;}}
return vCurrOffset;}
fn parallaxOffset(viewDir: vec3f,heightScale: f32)->vec2f
{var height: f32=textureSample(bumpSampler,bumpSamplerSampler,fragmentInputs.vBumpUV).w;var texCoordOffset: vec2f=heightScale*viewDir.xy*height;
#ifdef PARALLAX_RHS
return texCoordOffset;
#else
return -texCoordOffset;
#endif
}
#endif
`;a.v.IncludesShadersStoreWGSL[o]=i;let f={name:o,shader:i}},40809:function(e,r,t){t.r(r),t.d(r,{bumpFragmentMainFunctionsWGSL:function(){return f}});var a=t(35606);let o="bumpFragmentMainFunctions",i=`#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)
#if defined(TANGENT) && defined(NORMAL) 
varying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;
#endif
#ifdef OBJECTSPACE_NORMALMAP
uniform normalMatrix: mat4x4f;fn toNormalMatrix(m: mat4x4f)->mat4x4f
{var a00=m[0][0];var a01=m[0][1];var a02=m[0][2];var a03=m[0][3];var a10=m[1][0];var a11=m[1][1];var a12=m[1][2];var a13=m[1][3];var a20=m[2][0]; 
var a21=m[2][1];var a22=m[2][2];var a23=m[2][3];var a30=m[3][0]; 
var a31=m[3][1];var a32=m[3][2];var a33=m[3][3];var b00=a00*a11-a01*a10;var b01=a00*a12-a02*a10;var b02=a00*a13-a03*a10;var b03=a01*a12-a02*a11;var b04=a01*a13-a03*a11;var b05=a02*a13-a03*a12;var b06=a20*a31-a21*a30;var b07=a20*a32-a22*a30;var b08=a20*a33-a23*a30;var b09=a21*a32-a22*a31;var b10=a21*a33-a23*a31;var b11=a22*a33-a23*a32;var det=b00*b11-b01*b10+b02*b09+b03*b08-b04*b07+b05*b06;var mi=mat4x4<f32>(
(a11*b11-a12*b10+a13*b09)/det,
(a02*b10-a01*b11-a03*b09)/det,
(a31*b05-a32*b04+a33*b03)/det,
(a22*b04-a21*b05-a23*b03)/det,
(a12*b08-a10*b11-a13*b07)/det,
(a00*b11-a02*b08+a03*b07)/det,
(a32*b02-a30*b05-a33*b01)/det,
(a20*b05-a22*b02+a23*b01)/det,
(a10*b10-a11*b08+a13*b06)/det,
(a01*b08-a00*b10-a03*b06)/det,
(a30*b04-a31*b02+a33*b00)/det,
(a21*b02-a20*b04-a23*b00)/det,
(a11*b07-a10*b09-a12*b06)/det,
(a00*b09-a01*b07+a02*b06)/det,
(a31*b01-a30*b03-a32*b00)/det,
(a20*b03-a21*b01+a22*b00)/det);return mat4x4<f32>(mi[0][0],mi[1][0],mi[2][0],mi[3][0],
mi[0][1],mi[1][1],mi[2][1],mi[3][1],
mi[0][2],mi[1][2],mi[2][2],mi[3][2],
mi[0][3],mi[1][3],mi[2][3],mi[3][3]);}
#endif
fn perturbNormalBase(cotangentFrame: mat3x3f,normal: vec3f,scale: f32)->vec3f
{var output=normal;
#ifdef NORMALXYSCALE
output=normalize(output* vec3f(scale,scale,1.0));
#endif
return normalize(cotangentFrame*output);}
fn perturbNormal(cotangentFrame: mat3x3f,textureSample: vec3f,scale: f32)->vec3f
{return perturbNormalBase(cotangentFrame,textureSample*2.0-1.0,scale);}
fn cotangent_frame(normal: vec3f,p: vec3f,uv: vec2f,tangentSpaceParams: vec2f)->mat3x3f
{var dp1: vec3f=dpdx(p);var dp2: vec3f=dpdy(p);var duv1: vec2f=dpdx(uv);var duv2: vec2f=dpdy(uv);var dp2perp: vec3f=cross(dp2,normal);var dp1perp: vec3f=cross(normal,dp1);var tangent: vec3f=dp2perp*duv1.x+dp1perp*duv2.x;var bitangent: vec3f=dp2perp*duv1.y+dp1perp*duv2.y;tangent*=tangentSpaceParams.x;bitangent*=tangentSpaceParams.y;var det: f32=max(dot(tangent,tangent),dot(bitangent,bitangent));var invmax: f32=select(inverseSqrt(det),0.0,det==0.0);return mat3x3f(tangent*invmax,bitangent*invmax,normal);}
#endif
`;a.v.IncludesShadersStoreWGSL[o]=i;let f={name:o,shader:i}},56506:function(e,r,t){t.r(r),t.d(r,{clipPlaneFragmentWGSL:function(){return f}});var a=t(35606);let o="clipPlaneFragment",i=`#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)
if (false) {}
#endif
#ifdef CLIPPLANE
else if (fragmentInputs.fClipDistance>0.0)
{discard;}
#endif
#ifdef CLIPPLANE2
else if (fragmentInputs.fClipDistance2>0.0)
{discard;}
#endif
#ifdef CLIPPLANE3
else if (fragmentInputs.fClipDistance3>0.0)
{discard;}
#endif
#ifdef CLIPPLANE4
else if (fragmentInputs.fClipDistance4>0.0)
{discard;}
#endif
#ifdef CLIPPLANE5
else if (fragmentInputs.fClipDistance5>0.0)
{discard;}
#endif
#ifdef CLIPPLANE6
else if (fragmentInputs.fClipDistance6>0.0)
{discard;}
#endif
`;a.v.IncludesShadersStoreWGSL[o]=i;let f={name:o,shader:i}},78122:function(e,r,t){t.r(r),t.d(r,{clipPlaneFragmentDeclarationWGSL:function(){return f}});var a=t(35606);let o="clipPlaneFragmentDeclaration",i=`#ifdef CLIPPLANE
varying fClipDistance: f32;
#endif
#ifdef CLIPPLANE2
varying fClipDistance2: f32;
#endif
#ifdef CLIPPLANE3
varying fClipDistance3: f32;
#endif
#ifdef CLIPPLANE4
varying fClipDistance4: f32;
#endif
#ifdef CLIPPLANE5
varying fClipDistance5: f32;
#endif
#ifdef CLIPPLANE6
varying fClipDistance6: f32;
#endif
`;a.v.IncludesShadersStoreWGSL[o]=i;let f={name:o,shader:i}},55836:function(e,r,t){var a=t(35606);let o=`#ifdef DECAL
var decalTempColor=decalColor.rgb;var decalTempAlpha=decalColor.a;
#ifdef GAMMADECAL
decalTempColor=toLinearSpaceVec3(decalColor.rgb);
#endif
#ifdef DECAL_SMOOTHALPHA
decalTempAlpha=decalColor.a*decalColor.a;
#endif
surfaceAlbedo=mix(surfaceAlbedo.rgb,decalTempColor,decalTempAlpha);
#endif
`;a.v.IncludesShadersStoreWGSL.decalFragment=o},64558:function(e,r,t){var a=t(35606);t(68447),t(79514);let o=`uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f;uniform emissiveRightColor: vec4f;uniform vDiffuseInfos: vec2f;uniform vAmbientInfos: vec2f;uniform vOpacityInfos: vec2f;uniform vReflectionInfos: vec2f;uniform vReflectionPosition: vec3f;uniform vReflectionSize: vec3f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vSpecularInfos: vec2f;uniform vBumpInfos: vec3f;uniform diffuseMatrix: mat4x4f;uniform ambientMatrix: mat4x4f;uniform opacityMatrix: mat4x4f;uniform reflectionMatrix: mat4x4f;uniform emissiveMatrix: mat4x4f;uniform lightmapMatrix: mat4x4f;uniform specularMatrix: mat4x4f;uniform bumpMatrix: mat4x4f;uniform vTangentSpaceParams: vec2f;uniform pointSize: f32;uniform alphaCutOff: f32;uniform refractionMatrix: mat4x4f;uniform vRefractionInfos: vec4f;uniform vRefractionPosition: vec3f;uniform vRefractionSize: vec3f;uniform vSpecularColor: vec4f;uniform vEmissiveColor: vec3f;uniform vDiffuseColor: vec4f;uniform vAmbientColor: vec3f;
#define ADDITIONAL_UBO_DECLARATION
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;a.v.IncludesShadersStoreWGSL.defaultUboDeclaration=o},82842:function(e,r,t){var a=t(35606);let o=`#ifdef DEPTHPREPASS
fragmentOutputs.color= vec4f(0.,0.,0.,1.0);return fragmentOutputs;
#endif
`;a.v.IncludesShadersStoreWGSL.depthPrePass=o},59712:function(e,r,t){var a=t(35606);let o=`#ifdef FOG
var fog: f32=CalcFogFactor();
#ifdef PBR
fog=toLinearSpace(fog);
#endif
color= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);
#endif
`;a.v.IncludesShadersStoreWGSL.fogFragment=o},38632:function(e,r,t){t.r(r),t.d(r,{fogFragmentDeclarationWGSL:function(){return f}});var a=t(35606);let o="fogFragmentDeclaration",i=`#ifdef FOG
#define FOGMODE_NONE 0.
#define FOGMODE_EXP 1.
#define FOGMODE_EXP2 2.
#define FOGMODE_LINEAR 3.
const E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32
{var fogCoeff: f32=1.0;var fogStart: f32=uniforms.vFogInfos.y;var fogEnd: f32=uniforms.vFogInfos.z;var fogDensity: f32=uniforms.vFogInfos.w;var fogDistance: f32=length(fragmentInputs.vFogDistance);if (FOGMODE_LINEAR==uniforms.vFogInfos.x)
{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}
else if (FOGMODE_EXP==uniforms.vFogInfos.x)
{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}
else if (FOGMODE_EXP2==uniforms.vFogInfos.x)
{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}
return clamp(fogCoeff,0.0,1.0);}
#endif
`;a.v.IncludesShadersStoreWGSL[o]=i;let f={name:o,shader:i}},38958:function(e,r,t){var a=t(35606);let o=`#ifdef FRESNEL
fn computeFresnelTerm(viewDirection: vec3f,worldNormal: vec3f,bias: f32,power: f32)->f32
{let fresnelTerm: f32=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}
#endif
`;a.v.IncludesShadersStoreWGSL.fresnelFunction=o},57104:function(e,r,t){t.r(r),t.d(r,{helperFunctionsWGSL:function(){return f}});var a=t(35606);let o="helperFunctions",i=`const PI: f32=3.1415926535897932384626433832795;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const HALF_MIN: f32=5.96046448e-08; 
const LinearEncodePowerApprox: f32=2.2;const GammaEncodePowerApprox: f32=1.0/LinearEncodePowerApprox;const LuminanceEncodeApprox: vec3<f32>=vec3<f32> (0.2126,0.7152,0.0722);const Epsilon:f32=0.0000001;fn square(x: f32)->f32 {return x*x;}
fn saturate(x: f32)->f32 {return clamp(x,0.0,1.0);}
fn saturateVec3(x: vec3f)->vec3f {return clamp(x,vec3f(0.0),vec3f(1.0));}
fn saturateEps(x: f32)->f32 {return clamp(x,Epsilon,1.0);} 
fn maxEps(x: f32)->f32 {return max(x,Epsilon);}
fn maxEpsVec3(x: vec3f)->vec3f {return max(x,vec3f(Epsilon));}
fn absEps(x: f32)->f32 {return abs(x)+Epsilon;}
fn transposeMat3(inMatrix: mat3x3f)->mat3x3f {let i0: vec3<f32>=inMatrix[0];let i1: vec3<f32>=inMatrix[1];let i2: vec3<f32>=inMatrix[2];let outMatrix:mat3x3f=mat3x3f(
vec3(i0.x,i1.x,i2.x),
vec3(i0.y,i1.y,i2.y),
vec3(i0.z,i1.z,i2.z)
);return outMatrix;}
fn inverseMat3(inMatrix: mat3x3f)->mat3x3f {let a00: f32=inMatrix[0][0];let a01: f32=inMatrix[0][1];let a02: f32=inMatrix[0][2];let a10: f32=inMatrix[1][0];let a11: f32=inMatrix[1][1];let a12: f32=inMatrix[1][2];let a20: f32=inMatrix[2][0];let a21: f32=inMatrix[2][1];let a22: f32=inMatrix[2][2];let b01: f32=a22*a11-a12*a21;let b11: f32=-a22*a10+a12*a20;let b21: f32=a21*a10-a11*a20;let det: f32=a00*b01+a01*b11+a02*b21;return mat3x3f(b01/det,(-a22*a01+a02*a21)/det,(a12*a01-a02*a11)/det,
b11/det,(a22*a00-a02*a20)/det,(-a12*a00+a02*a10)/det,
b21/det,(-a21*a00+a01*a20)/det,(a11*a00-a01*a10)/det);}
#if USE_EXACT_SRGB_CONVERSIONS
fn toLinearSpaceExact(color: vec3<f32>)->vec3<f32>
{let nearZeroSection: vec3<f32>=0.0773993808*color;let remainingSection: vec3<f32>=pow(0.947867299*(color+vec3<f32>(0.055)),vec3<f32>(2.4));return mix(remainingSection,nearZeroSection,lessThanEqual(color,vec3<f32>(0.04045)));}
fn toGammaSpaceExact(color: vec3<f32>)->vec3<f32>
{let nearZeroSection: vec3<f32>=12.92*color;let remainingSection: vec3<f32>=1.055*pow(color,vec3<f32>(0.41666))-vec3<f32>(0.055);return mix(remainingSection,nearZeroSection,lessThanEqual(color,vec3<f32>(0.0031308)));}
#endif
fn toLinearSpace(color: f32)->f32
{
#if USE_EXACT_SRGB_CONVERSIONS
var nearZeroSection=0.0773993808*color;var remainingSection=pow(0.947867299*(color+0.055),2.4);return select(remainingSection,nearZeroSection,color<=0.04045);
#else
return pow(color,LinearEncodePowerApprox);
#endif
}
fn toLinearSpaceVec3(color: vec3<f32>)->vec3<f32>
{
#if USE_EXACT_SRGB_CONVERSIONS
return toLinearSpaceExact(color);
#else
return pow(color,vec3<f32>(LinearEncodePowerApprox));
#endif
}
fn toLinearSpaceVec4(color: vec4<f32>)->vec4<f32>
{
#if USE_EXACT_SRGB_CONVERSIONS
return vec4f(toLinearSpaceExact(color.rgb),color.a);
#else
return vec4f(pow(color.rgb,vec3f(LinearEncodePowerApprox)),color.a);
#endif
}
fn toGammaSpace(color: vec4<f32>)->vec4<f32>
{
#if USE_EXACT_SRGB_CONVERSIONS
return vec4<f32>(toGammaSpaceExact(color.rgb),color.a);
#else
return vec4<f32>(pow(color.rgb,vec3<f32>(GammaEncodePowerApprox)),color.a);
#endif
}
fn toGammaSpaceVec3(color: vec3<f32>)->vec3<f32>
{
#if USE_EXACT_SRGB_CONVERSIONS
return toGammaSpaceExact(color);
#else
return pow(color,vec3<f32>(GammaEncodePowerApprox));
#endif
}
fn squareVec3(value: vec3<f32>)->vec3<f32>
{return value*value;}
fn pow5(value: f32)->f32 {let sq: f32=value*value;return sq*sq*value;}
fn getLuminance(color: vec3<f32>)->f32
{return clamp(dot(color,LuminanceEncodeApprox),0.,1.);}
fn getRand(seed: vec2<f32>)->f32 {return fract(sin(dot(seed.xy ,vec2<f32>(12.9898,78.233)))*43758.5453);}
fn dither(seed: vec2<f32>,varianceAmount: f32)->f32 {let rand: f32=getRand(seed);let normVariance: f32=varianceAmount/255.0;let dither: f32=mix(-normVariance,normVariance,rand);return dither;}
const rgbdMaxRange: f32=255.0;fn toRGBD(color: vec3<f32>)->vec4<f32> {let maxRGB: f32=max(max(color.r,max(color.g,color.b)),Epsilon);var D: f32 =max(rgbdMaxRange/maxRGB,1.);D =clamp(floor(D)/255.0,0.,1.);var rgb: vec3<f32> =color.rgb*D;rgb=toGammaSpaceVec3(rgb);return vec4<f32>(clamp(rgb,vec3<f32>(0.,0.,0.),vec3<f32>(1.,1.,1.)),D); }
fn fromRGBD(rgbd: vec4<f32>)->vec3<f32> {let rgb=toLinearSpaceVec3(rgbd.rgb);return rgb/rgbd.a;}
fn parallaxCorrectNormal(vertexPos: vec3<f32>,origVec: vec3<f32>,cubeSize: vec3<f32>,cubePos: vec3<f32>)->vec3<f32> {let invOrigVec: vec3<f32>=vec3<f32>(1.0,1.0,1.0)/origVec;let halfSize: vec3<f32>=cubeSize*0.5;let intersecAtMaxPlane: vec3<f32>=(cubePos+halfSize-vertexPos)*invOrigVec;let intersecAtMinPlane: vec3<f32>=(cubePos-halfSize-vertexPos)*invOrigVec;let largestIntersec: vec3<f32>=max(intersecAtMaxPlane,intersecAtMinPlane);let distance: f32=min(min(largestIntersec.x,largestIntersec.y),largestIntersec.z);let intersectPositionWS: vec3<f32>=vertexPos+origVec*distance;return intersectPositionWS-cubePos;}
`;a.v.IncludesShadersStoreWGSL[o]=i;let f={name:o,shader:i}},87552:function(e,r,t){t.r(r),t.d(r,{imageProcessingDeclarationWGSL:function(){return f}});var a=t(35606);let o="imageProcessingDeclaration",i=`#ifdef EXPOSURE
uniform exposureLinear: f32;
#endif
#ifdef CONTRAST
uniform contrast: f32;
#endif
#if defined(VIGNETTE) || defined(DITHER)
uniform vInverseScreenSize: vec2f;
#endif
#ifdef VIGNETTE
uniform vignetteSettings1: vec4f;uniform vignetteSettings2: vec4f;
#endif
#ifdef COLORCURVES
uniform vCameraColorCurveNegative: vec4f;uniform vCameraColorCurveNeutral: vec4f;uniform vCameraColorCurvePositive: vec4f;
#endif
#ifdef COLORGRADING
#ifdef COLORGRADING3D
var txColorTransformSampler: sampler;var txColorTransform: texture_3d<f32>;
#else
var txColorTransformSampler: sampler;var txColorTransform: texture_2d<f32>;
#endif
uniform colorTransformSettings: vec4f;
#endif
#ifdef DITHER
uniform ditherIntensity: f32;
#endif
`;a.v.IncludesShadersStoreWGSL[o]=i;let f={name:o,shader:i}},18472:function(e,r,t){t.r(r),t.d(r,{imageProcessingFunctionsWGSL:function(){return f}});var a=t(35606);let o="imageProcessingFunctions",i=`#if TONEMAPPING==3
const PBRNeutralStartCompression: f32=0.8-0.04;const PBRNeutralDesaturation: f32=0.15;fn PBRNeutralToneMapping( color: vec3f )->vec3f {var x: f32=min(color.r,min(color.g,color.b));var offset: f32=select(0.04,x-6.25*x*x,x<0.08);var result=color;result-=offset;var peak: f32=max(result.r,max(result.g,result.b));if (peak<PBRNeutralStartCompression) {return result;}
var d: f32=1.-PBRNeutralStartCompression;var newPeak: f32=1.-d*d/(peak+d-PBRNeutralStartCompression);result*=newPeak/peak;var g: f32=1.-1./(PBRNeutralDesaturation*(peak-newPeak)+1.);return mix(result,newPeak* vec3f(1,1,1),g);}
#endif
#if TONEMAPPING==2
const ACESInputMat: mat3x3f= mat3x3f(
vec3f(0.59719,0.07600,0.02840),
vec3f(0.35458,0.90834,0.13383),
vec3f(0.04823,0.01566,0.83777)
);const ACESOutputMat: mat3x3f= mat3x3f(
vec3f( 1.60475,-0.10208,-0.00327),
vec3f(-0.53108, 1.10813,-0.07276),
vec3f(-0.07367,-0.00605, 1.07602)
);fn RRTAndODTFit(v: vec3f)->vec3f
{var a: vec3f=v*(v+0.0245786)-0.000090537;var b: vec3f=v*(0.983729*v+0.4329510)+0.238081;return a/b;}
fn ACESFitted(color: vec3f)->vec3f
{var output=ACESInputMat*color;output=RRTAndODTFit(output);output=ACESOutputMat*output;output=saturateVec3(output);return output;}
#endif
#define CUSTOM_IMAGEPROCESSINGFUNCTIONS_DEFINITIONS
fn applyImageProcessing(result: vec4f)->vec4f {
#define CUSTOM_IMAGEPROCESSINGFUNCTIONS_UPDATERESULT_ATSTART
var rgb=result.rgb;;
#ifdef EXPOSURE
rgb*=uniforms.exposureLinear;
#endif
#ifdef VIGNETTE
var viewportXY: vec2f=fragmentInputs.position.xy*uniforms.vInverseScreenSize;viewportXY=viewportXY*2.0-1.0;var vignetteXY1: vec3f= vec3f(viewportXY*uniforms.vignetteSettings1.xy+uniforms.vignetteSettings1.zw,1.0);var vignetteTerm: f32=dot(vignetteXY1,vignetteXY1);var vignette: f32=pow(vignetteTerm,uniforms.vignetteSettings2.w);var vignetteColor: vec3f=uniforms.vignetteSettings2.rgb;
#ifdef VIGNETTEBLENDMODEMULTIPLY
var vignetteColorMultiplier: vec3f=mix(vignetteColor, vec3f(1,1,1),vignette);rgb*=vignetteColorMultiplier;
#endif
#ifdef VIGNETTEBLENDMODEOPAQUE
rgb=mix(vignetteColor,rgb,vignette);
#endif
#endif
#if TONEMAPPING==3
rgb=PBRNeutralToneMapping(rgb);
#elif TONEMAPPING==2
rgb=ACESFitted(rgb);
#elif TONEMAPPING==1
const tonemappingCalibration: f32=1.590579;rgb=1.0-exp2(-tonemappingCalibration*rgb);
#endif
rgb=toGammaSpaceVec3(rgb);rgb=saturateVec3(rgb);
#ifdef CONTRAST
var resultHighContrast: vec3f=rgb*rgb*(3.0-2.0*rgb);if (uniforms.contrast<1.0) {rgb=mix( vec3f(0.5,0.5,0.5),rgb,uniforms.contrast);} else {rgb=mix(rgb,resultHighContrast,uniforms.contrast-1.0);}
#endif
#ifdef COLORGRADING
var colorTransformInput: vec3f=rgb*uniforms.colorTransformSettings.xxx+uniforms.colorTransformSettings.yyy;
#ifdef COLORGRADING3D
var colorTransformOutput: vec3f=textureSample(txColorTransform,txColorTransformSampler,colorTransformInput).rgb;
#else
var colorTransformOutput: vec3f=textureSample(txColorTransform,txColorTransformSampler,colorTransformInput,uniforms.colorTransformSettings.yz).rgb;
#endif
rgb=mix(rgb,colorTransformOutput,uniforms.colorTransformSettings.www);
#endif
#ifdef COLORCURVES
var luma: f32=getLuminance(rgb);var curveMix: vec2f=clamp( vec2f(luma*3.0-1.5,luma*-3.0+1.5), vec2f(0.0), vec2f(1.0));var colorCurve: vec4f=uniforms.vCameraColorCurveNeutral+curveMix.x*uniforms.vCameraColorCurvePositive-curveMix.y*uniforms.vCameraColorCurveNegative;rgb*=colorCurve.rgb;rgb=mix( vec3f(luma),rgb,colorCurve.a);
#endif
#ifdef DITHER
var rand: f32=getRand(fragmentInputs.position.xy*uniforms.vInverseScreenSize);var dither: f32=mix(-uniforms.ditherIntensity,uniforms.ditherIntensity,rand);rgb=saturateVec3(rgb+ vec3f(dither));
#endif
#define CUSTOM_IMAGEPROCESSINGFUNCTIONS_UPDATERESULT_ATEND
return vec4f(rgb,result.a);}`;a.v.IncludesShadersStoreWGSL[o]=i;let f={name:o,shader:i}},55960:function(e,r,t){t.r(r),t.d(r,{lightFragmentWGSL:function(){return f}});var a=t(35606);let o="lightFragment",i=`#ifdef LIGHT{X}
#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})
#else
var diffuse{X}: vec4f=light{X}.vLightDiffuse;
#define CUSTOM_LIGHT{X}_COLOR 
#ifdef PBR
#ifdef SPOTLIGHT{X}
preInfo=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW,fragmentInputs.vPositionW);
#elif defined(POINTLIGHT{X})
preInfo=computePointAndSpotPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW,fragmentInputs.vPositionW);
#elif defined(HEMILIGHT{X})
preInfo=computeHemisphericPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#elif defined(DIRLIGHT{X})
preInfo=computeDirectionalPreLightingInfo(light{X}.vLightData,viewDirectionW,normalW);
#endif
preInfo.NdotV=NdotV;
#ifdef SPOTLIGHT{X}
#ifdef LIGHT_FALLOFF_GLTF{X}
preInfo.attenuation=computeDistanceLightFalloff_GLTF(preInfo.lightDistanceSquared,light{X}.vLightFalloff.y);preInfo.attenuation*=computeDirectionalLightFalloff_GLTF(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightFalloff.z,light{X}.vLightFalloff.w);
#elif defined(LIGHT_FALLOFF_PHYSICAL{X})
preInfo.attenuation=computeDistanceLightFalloff_Physical(preInfo.lightDistanceSquared);preInfo.attenuation*=computeDirectionalLightFalloff_Physical(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w);
#elif defined(LIGHT_FALLOFF_STANDARD{X})
preInfo.attenuation=computeDistanceLightFalloff_Standard(preInfo.lightOffset,light{X}.vLightFalloff.x);preInfo.attenuation*=computeDirectionalLightFalloff_Standard(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w,light{X}.vLightData.w);
#else
preInfo.attenuation=computeDistanceLightFalloff(preInfo.lightOffset,preInfo.lightDistanceSquared,light{X}.vLightFalloff.x,light{X}.vLightFalloff.y);preInfo.attenuation*=computeDirectionalLightFalloff(light{X}.vLightDirection.xyz,preInfo.L,light{X}.vLightDirection.w,light{X}.vLightData.w,light{X}.vLightFalloff.z,light{X}.vLightFalloff.w);
#endif
#elif defined(POINTLIGHT{X})
#ifdef LIGHT_FALLOFF_GLTF{X}
preInfo.attenuation=computeDistanceLightFalloff_GLTF(preInfo.lightDistanceSquared,light{X}.vLightFalloff.y);
#elif defined(LIGHT_FALLOFF_PHYSICAL{X})
preInfo.attenuation=computeDistanceLightFalloff_Physical(preInfo.lightDistanceSquared);
#elif defined(LIGHT_FALLOFF_STANDARD{X})
preInfo.attenuation=computeDistanceLightFalloff_Standard(preInfo.lightOffset,light{X}.vLightFalloff.x);
#else
preInfo.attenuation=computeDistanceLightFalloff(preInfo.lightOffset,preInfo.lightDistanceSquared,light{X}.vLightFalloff.x,light{X}.vLightFalloff.y);
#endif
#else
preInfo.attenuation=1.0;
#endif
#ifdef HEMILIGHT{X}
preInfo.roughness=roughness;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(roughness,light{X}.vLightSpecular.a,preInfo.lightDistance);
#endif
#ifdef IRIDESCENCE
preInfo.iridescenceIntensity=iridescenceIntensity;
#endif
#ifdef HEMILIGHT{X}
info.diffuse=computeHemisphericDiffuseLighting(preInfo,diffuse{X}.rgb,light{X}.vLightGround);
#elif defined(SS_TRANSLUCENCY)
info.diffuse=computeDiffuseAndTransmittedLighting(preInfo,diffuse{X}.rgb,subSurfaceOut.transmittance);
#else
info.diffuse=computeDiffuseLighting(preInfo,diffuse{X}.rgb);
#endif
#ifdef SPECULARTERM
#ifdef ANISOTROPIC
info.specular=computeAnisotropicSpecularLighting(preInfo,viewDirectionW,normalW,anisotropicOut.anisotropicTangent,anisotropicOut.anisotropicBitangent,anisotropicOut.anisotropy,clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,AARoughnessFactors.x,diffuse{X}.rgb);
#else
info.specular=computeSpecularLighting(preInfo,normalW,clearcoatOut.specularEnvironmentR0,specularEnvironmentR90,AARoughnessFactors.x,diffuse{X}.rgb);
#endif
#endif
#ifdef SHEEN
#ifdef SHEEN_LINKWITHALBEDO
preInfo.roughness=sheenOut.sheenIntensity;
#else
#ifdef HEMILIGHT{X}
preInfo.roughness=sheenOut.sheenRoughness;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(sheenOut.sheenRoughness,light{X}.vLightSpecular.a,preInfo.lightDistance);
#endif
#endif
info.sheen=computeSheenLighting(preInfo,normalW,sheenOut.sheenColor,specularEnvironmentR90,AARoughnessFactors.x,diffuse{X}.rgb);
#endif
#ifdef CLEARCOAT
#ifdef HEMILIGHT{X}
preInfo.roughness=clearcoatOut.clearCoatRoughness;
#else
preInfo.roughness=adjustRoughnessFromLightProperties(clearcoatOut.clearCoatRoughness,light{X}.vLightSpecular.a,preInfo.lightDistance);
#endif
info.clearCoat=computeClearCoatLighting(preInfo,clearcoatOut.clearCoatNormalW,clearcoatOut.clearCoatAARoughnessFactors.x,clearcoatOut.clearCoatIntensity,diffuse{X}.rgb);
#ifdef CLEARCOAT_TINT
absorption=computeClearCoatLightingAbsorption(clearcoatOut.clearCoatNdotVRefract,preInfo.L,clearcoatOut.clearCoatNormalW,clearcoatOut.clearCoatColor,clearcoatOut.clearCoatThickness,clearcoatOut.clearCoatIntensity);info.diffuse*=absorption;
#ifdef SPECULARTERM
info.specular*=absorption;
#endif
#endif
info.diffuse*=info.clearCoat.w;
#ifdef SPECULARTERM
info.specular*=info.clearCoat.w;
#endif
#ifdef SHEEN
info.sheen*=info.clearCoat.w;
#endif
#endif
#else
#ifdef SPOTLIGHT{X}
info=computeSpotLighting(viewDirectionW,normalW,light{X}.vLightData,light{X}.vLightDirection,diffuse{X}.rgb,light{X}.vLightSpecular.rgb,diffuse{X}.a,glossiness);
#elif defined(HEMILIGHT{X})
info=computeHemisphericLighting(viewDirectionW,normalW,light{X}.vLightData,diffuse{X}.rgb,light{X}.vLightSpecular.rgb,light{X}.vLightGround,glossiness);
#elif defined(POINTLIGHT{X}) || defined(DIRLIGHT{X})
info=computeLighting(viewDirectionW,normalW,light{X}.vLightData,diffuse{X}.rgb,light{X}.vLightSpecular.rgb,diffuse{X}.a,glossiness);
#endif
#endif
#ifdef PROJECTEDLIGHTTEXTURE{X}
info.diffuse*=computeProjectionTextureDiffuseLighting(projectionLightTexture{X},projectionLightTexture{X}Sampler,uniforms.textureProjectionMatrix{X},fragmentInputs.vPositionW);
#endif
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSMDEBUG{X}
var shadowDebug{X}: vec3f;
#endif
#ifdef SHADOWCSM{X}
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
var index{X}: i32=-1;
#else
var index{X}: i32=SHADOWCSMNUM_CASCADES{X}-1;
#endif
var diff{X}: f32=0.;vPositionFromLight{X}[0]=fragmentInputs.vPositionFromLight{X}_0;vPositionFromLight{X}[1]=fragmentInputs.vPositionFromLight{X}_1;vPositionFromLight{X}[2]=fragmentInputs.vPositionFromLight{X}_2;vPositionFromLight{X}[3]=fragmentInputs.vPositionFromLight{X}_3;vDepthMetric{X}[0]=fragmentInputs.vDepthMetric{X}_0;vDepthMetric{X}[1]=fragmentInputs.vDepthMetric{X}_1;vDepthMetric{X}[2]=fragmentInputs.vDepthMetric{X}_2;vDepthMetric{X}[3]=fragmentInputs.vDepthMetric{X}_3;for (var i:i32=0; i<SHADOWCSMNUM_CASCADES{X}; i++) 
{
#ifdef SHADOWCSM_RIGHTHANDED{X}
diff{X}=uniforms.viewFrustumZ{X}[i]+fragmentInputs.vPositionFromCamera{X}.z;
#else
diff{X}=uniforms.viewFrustumZ{X}[i]-fragmentInputs.vPositionFromCamera{X}.z;
#endif
if (diff{X}>=0.) {index{X}=i;break;}}
#ifdef SHADOWCSMUSESHADOWMAXZ{X}
if (index{X}>=0)
#endif
{
#if defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithCSMPCF1(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithCSMPCF3(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithCSMPCF5(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithCSMPCSS16(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},depthTexture{X}Sampler,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,uniforms.lightSizeUVCorrection{X}[index{X}],uniforms.depthCorrection{X}[index{X}],uniforms.penumbraDarkness{X});
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithCSMPCSS32(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},depthTexture{X}Sampler,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,uniforms.lightSizeUVCorrection{X}[index{X}],uniforms.depthCorrection{X}[index{X}],uniforms.penumbraDarkness{X});
#else
shadow=computeShadowWithCSMPCSS64(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},depthTexture{X}Sampler,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,uniforms.lightSizeUVCorrection{X}[index{X}],uniforms.depthCorrection{X}[index{X}],uniforms.penumbraDarkness{X});
#endif
#else
shadow=computeShadowCSM(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#ifdef SHADOWCSMDEBUG{X}
shadowDebug{X}=vec3f(shadow)*vCascadeColorsMultiplier{X}[index{X}];
#endif
#ifndef SHADOWCSMNOBLEND{X}
var frustumLength:f32=uniforms.frustumLengths{X}[index{X}];var diffRatio:f32=clamp(diff{X}/frustumLength,0.,1.)*uniforms.cascadeBlendFactor{X};if (index{X}<(SHADOWCSMNUM_CASCADES{X}-1) && diffRatio<1.)
{index{X}+=1;var nextShadow: f32=0.;
#if defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
nextShadow=computeShadowWithCSMPCF1(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],,shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
nextShadow=computeShadowWithCSMPCF3(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
nextShadow=computeShadowWithCSMPCF5(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
nextShadow=computeShadowWithCSMPCSS16(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},depthTexture{X}Sampler,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,uniforms.lightSizeUVCorrection{X}[index{X}],uniforms.depthCorrection{X}[index{X}],uniforms.penumbraDarkness{X});
#elif defined(SHADOWMEDIUMQUALITY{X})
nextShadow=computeShadowWithCSMPCSS32(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},depthTexture{X}Sampler,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,uniforms.lightSizeUVCorrection{X}[index{X}],uniforms.depthCorrection{X}[index{X}],uniforms.penumbraDarkness{X});
#else
nextShadow=computeShadowWithCSMPCSS64(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],depthTexture{X},depthTexture{X}Sampler,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w,uniforms.lightSizeUVCorrection{X}[index{X}],uniforms.depthCorrection{X}[index{X}],uniforms.penumbraDarkness{X});
#endif
#else
nextShadow=computeShadowCSM(index{X},vPositionFromLight{X}[index{X}],vDepthMetric{X}[index{X}],shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
shadow=mix(nextShadow,shadow,diffRatio);
#ifdef SHADOWCSMDEBUG{X}
shadowDebug{X}=mix(vec3(nextShadow)*vCascadeColorsMultiplier{X}[index{X}],shadowDebug{X},diffRatio);
#endif
}
#endif
}
#elif defined(SHADOWCLOSEESM{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithCloseESMCube(fragmentInputs.vPositionW,light{X}.vLightData.xyz,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.depthValues);
#else
shadow=computeShadowWithCloseESM(fragmentInputs.vPositionFromLight{X},fragmentInputs.vDepthMetric{X},shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWESM{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithESMCube(fragmentInputs.vPositionW,light{X}.vLightData.xyz,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.depthValues);
#else
shadow=computeShadowWithESM(fragmentInputs.vPositionFromLight{X},fragmentInputs.vDepthMetric{X},shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.shadowsInfo.z,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPOISSON{X})
#if defined(SHADOWCUBE{X})
shadow=computeShadowWithPoissonSamplingCube(fragmentInputs.vPositionW,light{X}.vLightData.xyz,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.x,light{X}.depthValues);
#else
shadow=computeShadowWithPoissonSampling(fragmentInputs.vPositionFromLight{X},fragmentInputs.vDepthMetric{X},shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCF{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithPCF1(fragmentInputs.vPositionFromLight{X},fragmentInputs.vDepthMetric{X},shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithPCF3(fragmentInputs.vPositionFromLight{X},fragmentInputs.vDepthMetric{X},shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithPCF5(fragmentInputs.vPositionFromLight{X},fragmentInputs.vDepthMetric{X},shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.yz,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#elif defined(SHADOWPCSS{X})
#if defined(SHADOWLOWQUALITY{X})
shadow=computeShadowWithPCSS16(fragmentInputs.vPositionFromLight{X},fragmentInputs.vDepthMetric{X},depthTexture{X},depthTexture{X}Sampler,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#elif defined(SHADOWMEDIUMQUALITY{X})
shadow=computeShadowWithPCSS32(fragmentInputs.vPositionFromLight{X},fragmentInputs.vDepthMetric{X},depthTexture{X},depthTexture{X}Sampler,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#else
shadow=computeShadowWithPCSS64(fragmentInputs.vPositionFromLight{X},fragmentInputs.vDepthMetric{X},depthTexture{X},depthTexture{X}Sampler,shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.y,light{X}.shadowsInfo.z,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#else
#if defined(SHADOWCUBE{X})
shadow=computeShadowCube(fragmentInputs.vPositionW,light{X}.vLightData.xyz,shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.depthValues);
#else
shadow=computeShadow(fragmentInputs.vPositionFromLight{X},fragmentInputs.vDepthMetric{X},shadowTexture{X},shadowTexture{X}Sampler,light{X}.shadowsInfo.x,light{X}.shadowsInfo.w);
#endif
#endif
#ifdef SHADOWONLY
#ifndef SHADOWINUSE
#define SHADOWINUSE
#endif
globalShadow+=shadow;shadowLightCount+=1.0;
#endif
#else
shadow=1.;
#endif
aggShadow+=shadow;numLights+=1.0;
#ifndef SHADOWONLY
#ifdef CUSTOMUSERLIGHTING
diffuseBase+=computeCustomDiffuseLighting(info,diffuseBase,shadow);
#ifdef SPECULARTERM
specularBase+=computeCustomSpecularLighting(info,specularBase,shadow);
#endif
#elif defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X})
diffuseBase+=lightmapColor.rgb*shadow;
#ifdef SPECULARTERM
#ifndef LIGHTMAPNOSPECULAR{X}
specularBase+=info.specular*shadow*lightmapColor.rgb;
#endif
#endif
#ifdef CLEARCOAT
#ifndef LIGHTMAPNOSPECULAR{X}
clearCoatBase+=info.clearCoat.rgb*shadow*lightmapColor.rgb;
#endif
#endif
#ifdef SHEEN
#ifndef LIGHTMAPNOSPECULAR{X}
sheenBase+=info.sheen.rgb*shadow;
#endif
#endif
#else
#ifdef SHADOWCSMDEBUG{X}
diffuseBase+=info.diffuse*shadowDebug{X};
#else 
diffuseBase+=info.diffuse*shadow;
#endif
#ifdef SPECULARTERM
specularBase+=info.specular*shadow;
#endif
#ifdef CLEARCOAT
clearCoatBase+=info.clearCoat.rgb*shadow;
#endif
#ifdef SHEEN
sheenBase+=info.sheen.rgb*shadow;
#endif
#endif
#endif
#endif
`;a.v.IncludesShadersStoreWGSL[o]=i;let f={name:o,shader:i}},59754:function(e,r,t){t.r(r),t.d(r,{lightUboDeclarationWGSL:function(){return f}});var a=t(35606);let o="lightUboDeclaration",i=`#ifdef LIGHT{X}
struct Light{X}
{vLightData: vec4f,
vLightDiffuse: vec4f,
vLightSpecular: vec4f,
#ifdef SPOTLIGHT{X}
vLightDirection: vec4f,
vLightFalloff: vec4f,
#elif defined(POINTLIGHT{X})
vLightFalloff: vec4f,
#elif defined(HEMILIGHT{X})
vLightGround: vec3f,
#endif
shadowsInfo: vec4f,
depthValues: vec2f} ;var<uniform> light{X} : Light{X};
#ifdef PROJECTEDLIGHTTEXTURE{X}
uniform textureProjectionMatrix{X}: mat4x4f;var projectionLightTexture{X}Sampler: sampler;var projectionLightTexture{X}: texture_2d<f32>;
#endif
#ifdef SHADOW{X}
#ifdef SHADOWCSM{X}
uniform lightMatrix{X}: array<mat4x4f,SHADOWCSMNUM_CASCADES{X}>;uniform viewFrustumZ{X}: array<f32,SHADOWCSMNUM_CASCADES{X}>;uniform frustumLengths{X}: array<f32,SHADOWCSMNUM_CASCADES{X}>;uniform cascadeBlendFactor{X}: f32;varying vPositionFromLight{X}_0: vec4f;varying vDepthMetric{X}_0: f32;varying vPositionFromLight{X}_1: vec4f;varying vDepthMetric{X}_1: f32;varying vPositionFromLight{X}_2: vec4f;varying vDepthMetric{X}_2: f32;varying vPositionFromLight{X}_3: vec4f;varying vDepthMetric{X}_3: f32;varying vPositionFromCamera{X}: vec4f;var<private> vPositionFromLight{X}: array<vec4f,4>;var<private> vDepthMetric{X} : array<f32,4>;
#if defined(SHADOWPCSS{X})
var shadowTexture{X}Sampler: sampler_comparison; 
var shadowTexture{X}: texture_depth_2d_array;var depthTexture{X}Sampler: sampler;var depthTexture{X}: texture_2d_array<f32>;uniform lightSizeUVCorrection{X}: array<vec2f,SHADOWCSMNUM_CASCADES{X}>;uniform depthCorrection{X}: array<f32,SHADOWCSMNUM_CASCADES{X}>;uniform penumbraDarkness{X}: f32;
#elif defined(SHADOWPCF{X})
var shadowTexture{X}Sampler: sampler_comparison;var shadowTexture{X}: texture_depth_2d_array;
#else 
var shadowTexture{X}Sampler: sampler; 
var shadowTexture{X}: texture_2d_array<f32>;
#endif
#ifdef SHADOWCSMDEBUG{X}
const vCascadeColorsMultiplier{X}: array<vec3f,8>=array<vec3f,8>
(
vec3f ( 1.5,0.0,0.0 ),
vec3f ( 0.0,1.5,0.0 ),
vec3f ( 0.0,0.0,5.5 ),
vec3f ( 1.5,0.0,5.5 ),
vec3f ( 1.5,1.5,0.0 ),
vec3f ( 1.0,1.0,1.0 ),
vec3f ( 0.0,1.0,5.5 ),
vec3f ( 0.5,3.5,0.75 )
);
#endif
#elif defined(SHADOWCUBE{X})
var shadowTexture{X}Sampler: sampler;var shadowTexture{X}: texture_cube<f32>;
#else
varying vPositionFromLight{X}: vec4f;varying vDepthMetric{X}: f32;
#if defined(SHADOWPCSS{X})
var shadowTexture{X}Sampler: sampler_comparison; 
var shadowTexture{X}: texture_depth_2d;var depthTexture{X}Sampler: sampler; 
var depthTexture{X}: texture_2d<f32>;
#elif defined(SHADOWPCF{X})
var shadowTexture{X}Sampler: sampler_comparison;var shadowTexture{X}: texture_depth_2d;
#else
var shadowTexture{X}Sampler: sampler; 
var shadowTexture{X}: texture_2d<f32>;
#endif
uniform lightMatrix{X}: mat4x4f;
#endif
#endif
#endif
`;a.v.IncludesShadersStoreWGSL[o]=i;let f={name:o,shader:i}},16925:function(e,r,t){t.r(r),t.d(r,{lightsFragmentFunctionsWGSL:function(){return f}});var a=t(35606);let o="lightsFragmentFunctions",i=`struct lightingInfo
{diffuse: vec3f,
#ifdef SPECULARTERM
specular: vec3f,
#endif
#ifdef NDOTL
ndl: f32,
#endif
};fn computeLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;var lightVectorW: vec3f;var attenuation: f32=1.0;if (lightData.w==0.)
{var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;var attenuation: f32=max(0.,1.0-length(direction)/range);lightVectorW=normalize(direction);}
else
{lightVectorW=normalize(-lightData.xyz);}
var ndl: f32=max(0.,dot(vNormal,lightVectorW));
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=ndl*diffuseColor*attenuation;
#ifdef SPECULARTERM
var angleW: vec3f=normalize(viewDirectionW+lightVectorW);var specComp: f32=max(0.,dot(vNormal,angleW));specComp=pow(specComp,max(1.,glossiness));result.specular=specComp*specularColor*attenuation;
#endif
return result;}
fn computeSpotLighting(viewDirectionW: vec3f,vNormal: vec3f ,lightData: vec4f,lightDirection: vec4f,diffuseColor: vec3f,specularColor: vec3f,range: f32,glossiness: f32)->lightingInfo {var result: lightingInfo;var direction: vec3f=lightData.xyz-fragmentInputs.vPositionW;var lightVectorW: vec3f=normalize(direction);var attenuation: f32=max(0.,1.0-length(direction)/range);var cosAngle: f32=max(0.,dot(lightDirection.xyz,-lightVectorW));if (cosAngle>=lightDirection.w)
{cosAngle=max(0.,pow(cosAngle,lightData.w));attenuation*=cosAngle;var ndl: f32=max(0.,dot(vNormal,lightVectorW));
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=ndl*diffuseColor*attenuation;
#ifdef SPECULARTERM
var angleW: vec3f=normalize(viewDirectionW+lightVectorW);var specComp: f32=max(0.,dot(vNormal,angleW));specComp=pow(specComp,max(1.,glossiness));result.specular=specComp*specularColor*attenuation;
#endif
return result;}
result.diffuse=vec3f(0.);
#ifdef SPECULARTERM
result.specular=vec3f(0.);
#endif
#ifdef NDOTL
result.ndl=0.;
#endif
return result;}
fn computeHemisphericLighting(viewDirectionW: vec3f,vNormal: vec3f,lightData: vec4f,diffuseColor: vec3f,specularColor: vec3f,groundColor: vec3f,glossiness: f32)->lightingInfo {var result: lightingInfo;var ndl: f32=dot(vNormal,lightData.xyz)*0.5+0.5;
#ifdef NDOTL
result.ndl=ndl;
#endif
result.diffuse=mix(groundColor,diffuseColor,ndl);
#ifdef SPECULARTERM
var angleW: vec3f=normalize(viewDirectionW+lightData.xyz);var specComp: f32=max(0.,dot(vNormal,angleW));specComp=pow(specComp,max(1.,glossiness));result.specular=specComp*specularColor;
#endif
return result;}
fn computeProjectionTextureDiffuseLighting(projectionLightTexture: texture_2d<f32>,projectionLightSampler: sampler,textureProjectionMatrix: mat4x4f,posW: vec3f)->vec3f {var strq: vec4f=textureProjectionMatrix*vec4f(posW,1.0);strq/=strq.w;var textureColor: vec3f=textureSample(projectionLightTexture,projectionLightSampler,strq.xy).rgb;return textureColor;}`;a.v.IncludesShadersStoreWGSL[o]=i;let f={name:o,shader:i}},22706:function(e,r,t){var a=t(35606);let o=`#ifdef LOGARITHMICDEPTH
uniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;
#endif
`;a.v.IncludesShadersStoreWGSL.logDepthDeclaration=o},24636:function(e,r,t){var a=t(35606);let o=`#ifdef LOGARITHMICDEPTH
fragmentOutputs.fragDepth=log2(fragmentInputs.vFragmentDepth)*uniforms.logarithmicDepthConstant*0.5;
#endif
`;a.v.IncludesShadersStoreWGSL.logDepthFragment=o},29524:function(e,r,t){var a=t(35606);let o=`#ifdef MAINUV{X}
varying vMainUV{X}: vec2f;
#endif
`;a.v.IncludesShadersStoreWGSL.mainUVVaryingDeclaration=o},79514:function(e,r,t){var a=t(35606);let o=`struct Mesh {world : mat4x4<f32>,
visibility : f32,};var<uniform> mesh : Mesh;
#define WORLD_UBO
`;a.v.IncludesShadersStoreWGSL.meshUboDeclaration=o},7675:function(e,r,t){var a=t(35606);let o=`#ifdef ORDER_INDEPENDENT_TRANSPARENCY
#define MAX_DEPTH 99999.0
var oitDepthSamplerSampler: sampler;var oitDepthSampler: texture_2d<f32>;var oitFrontColorSamplerSampler: sampler;var oitFrontColorSampler: texture_2d<f32>;
#endif
`;a.v.IncludesShadersStoreWGSL.oitDeclaration=o},95613:function(e,r,t){var a=t(35606);let o=`#ifdef ORDER_INDEPENDENT_TRANSPARENCY
var fragDepth: f32=fragmentInputs.position.z; 
#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS
var halfFloat: i32=packHalf2x16( vec2f(fragDepth));var full: vec2f=unpackHalf2x16(halfFloat);fragDepth=full.x;
#endif
var fragCoord: vec2i=vec2i(fragmentInputs.position.xy);var lastDepth: vec2f=textureLoad(oitDepthSampler,fragCoord,0).rg;var lastFrontColor: vec4f=textureLoad(oitFrontColorSampler,fragCoord,0);fragmentOutputs.depth=vec2f(-MAX_DEPTH);fragmentOutputs.frontColor=lastFrontColor;fragmentOutputs.backColor= vec4f(0.0);
#ifdef USE_REVERSE_DEPTHBUFFER
var furthestDepth: f32=-lastDepth.x;var nearestDepth: f32=lastDepth.y;
#else
var nearestDepth: f32=-lastDepth.x;var furthestDepth: f32=lastDepth.y;
#endif
var alphaMultiplier: f32=1.0-lastFrontColor.a;
#ifdef USE_REVERSE_DEPTHBUFFER
if (fragDepth>nearestDepth || fragDepth<furthestDepth) {
#else
if (fragDepth<nearestDepth || fragDepth>furthestDepth) {
#endif
return fragmentOutputs;}
#ifdef USE_REVERSE_DEPTHBUFFER
if (fragDepth<nearestDepth && fragDepth>furthestDepth) {
#else
if (fragDepth>nearestDepth && fragDepth<furthestDepth) {
#endif
fragmentOutputs.depth=vec2f(-fragDepth,fragDepth);return fragmentOutputs;}
#endif
`;a.v.IncludesShadersStoreWGSL.oitFragment=o},55203:function(e,r,t){var a=t(35606);let o=`#ifdef PREPASS
#ifdef PREPASS_LOCAL_POSITION
varying vPosition : vec3f;
#endif
#ifdef PREPASS_DEPTH
varying vViewPos: vec3f;
#endif
#if defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)
varying vCurrentPosition: vec4f;varying vPreviousPosition: vec4f;
#endif
#endif
`;a.v.IncludesShadersStoreWGSL.prePassDeclaration=o},53584:function(e,r,t){t.r(r),t.d(r,{reflectionFunctionWGSL:function(){return f}});var a=t(35606);let o="reflectionFunction",i=`fn computeFixedEquirectangularCoords(worldPos: vec4f,worldNormal: vec3f,direction: vec3f)->vec3f
{var lon: f32=atan2(direction.z,direction.x);var lat: f32=acos(direction.y);var sphereCoords: vec2f= vec2f(lon,lat)*RECIPROCAL_PI2*2.0;var s: f32=sphereCoords.x*0.5+0.5;var t: f32=sphereCoords.y;return vec3f(s,t,0); }
fn computeMirroredFixedEquirectangularCoords(worldPos: vec4f,worldNormal: vec3f,direction: vec3f)->vec3f
{var lon: f32=atan2(direction.z,direction.x);var lat: f32=acos(direction.y);var sphereCoords: vec2f= vec2f(lon,lat)*RECIPROCAL_PI2*2.0;var s: f32=sphereCoords.x*0.5+0.5;var t: f32=sphereCoords.y;return vec3f(1.0-s,t,0); }
fn computeEquirectangularCoords(worldPos: vec4f,worldNormal: vec3f,eyePosition: vec3f,reflectionMatrix: mat4x4f)->vec3f
{var cameraToVertex: vec3f=normalize(worldPos.xyz-eyePosition);var r: vec3f=normalize(reflect(cameraToVertex,worldNormal));r= (reflectionMatrix* vec4f(r,0)).xyz;var lon: f32=atan2(r.z,r.x);var lat: f32=acos(r.y);var sphereCoords: vec2f= vec2f(lon,lat)*RECIPROCAL_PI2*2.0;var s: f32=sphereCoords.x*0.5+0.5;var t: f32=sphereCoords.y;return vec3f(s,t,0);}
fn computeSphericalCoords(worldPos: vec4f,worldNormal: vec3f,view: mat4x4f,reflectionMatrix: mat4x4f)->vec3f
{var viewDir: vec3f=normalize((view*worldPos).xyz);var viewNormal: vec3f=normalize((view* vec4f(worldNormal,0.0)).xyz);var r: vec3f=reflect(viewDir,viewNormal);r= (reflectionMatrix* vec4f(r,0)).xyz;r.z=r.z-1.0;var m: f32=2.0*length(r);return vec3f(r.x/m+0.5,1.0-r.y/m-0.5,0);}
fn computePlanarCoords(worldPos: vec4f,worldNormal: vec3f,eyePosition: vec3f,reflectionMatrix: mat4x4f)->vec3f
{var viewDir: vec3f=worldPos.xyz-eyePosition;var coords: vec3f=normalize(reflect(viewDir,worldNormal));return (reflectionMatrix* vec4f(coords,1)).xyz;}
fn computeCubicCoords(worldPos: vec4f,worldNormal: vec3f,eyePosition: vec3f,reflectionMatrix: mat4x4f)->vec3f
{var viewDir: vec3f=normalize(worldPos.xyz-eyePosition);var coords: vec3f=reflect(viewDir,worldNormal);coords= (reflectionMatrix* vec4f(coords,0)).xyz;
#ifdef INVERTCUBICMAP
coords.y*=-1.0;
#endif
return coords;}
fn computeCubicLocalCoords(worldPos: vec4f,worldNormal: vec3f,eyePosition: vec3f,reflectionMatrix: mat4x4f,reflectionSize: vec3f,reflectionPosition: vec3f)->vec3f
{var viewDir: vec3f=normalize(worldPos.xyz-eyePosition);var coords: vec3f=reflect(viewDir,worldNormal);coords=parallaxCorrectNormal(worldPos.xyz,coords,reflectionSize,reflectionPosition);coords=(reflectionMatrix* vec4f(coords,0)).xyz;
#ifdef INVERTCUBICMAP
coords.y*=-1.0;
#endif
return coords;}
fn computeProjectionCoords(worldPos: vec4f,view: mat4x4f,reflectionMatrix: mat4x4f)->vec3f
{return (reflectionMatrix*(view*worldPos)).xyz;}
fn computeSkyBoxCoords(positionW: vec3f,reflectionMatrix: mat4x4f)->vec3f
{return (reflectionMatrix* vec4f(positionW,1.)).xyz;}
#ifdef REFLECTION
fn computeReflectionCoords(worldPos: vec4f,worldNormal: vec3f)->vec3f
{
#ifdef REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED
var direction: vec3f=normalize(fragmentInputs.vDirectionW);return computeMirroredFixedEquirectangularCoords(worldPos,worldNormal,direction);
#endif
#ifdef REFLECTIONMAP_EQUIRECTANGULAR_FIXED
var direction: vec3f=normalize(fragmentInputs.vDirectionW);return computeFixedEquirectangularCoords(worldPos,worldNormal,direction);
#endif
#ifdef REFLECTIONMAP_EQUIRECTANGULAR
return computeEquirectangularCoords(worldPos,worldNormal,scene.vEyePosition.xyz,uniforms.reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_SPHERICAL
return computeSphericalCoords(worldPos,worldNormal,scene.view,uniforms.reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_PLANAR
return computePlanarCoords(worldPos,worldNormal,scene.vEyePosition.xyz,uniforms.reflectionMatrix);
#endif
#ifdef REFLECTIONMAP_CUBIC
#ifdef USE_LOCAL_REFLECTIONMAP_CUBIC
return computeCubicLocalCoords(worldPos,worldNormal,scene.vEyePosition.xyz,uniforms.reflectionMatrix,uniforms.vReflectionSize,uniforms.vReflectionPosition);
#else
return computeCubicCoords(worldPos,worldNormal,scene.vEyePosition.xyz,uniforms.reflectionMatrix);
#endif
#endif
#ifdef REFLECTIONMAP_PROJECTION
return computeProjectionCoords(worldPos,scene.view,uniforms.reflectionMatrix);
#endif
#ifndef REFLECTIONMAP_CUBIC
#ifdef REFLECTIONMAP_SKYBOX
return computeSkyBoxCoords(fragmentInputs.vPositionUVW,uniforms.reflectionMatrix);
#endif
#endif
#ifdef REFLECTIONMAP_EXPLICIT
return vec3f(0,0,0);
#endif
}
#endif
`;a.v.IncludesShadersStoreWGSL[o]=i;let f={name:o,shader:i}},55985:function(e,r,t){var a=t(35606);let o=`#ifdef _DEFINENAME_
#if _DEFINENAME_DIRECTUV==1
#define v_VARYINGNAME_UV vMainUV1
#elif _DEFINENAME_DIRECTUV==2
#define v_VARYINGNAME_UV vMainUV2
#elif _DEFINENAME_DIRECTUV==3
#define v_VARYINGNAME_UV vMainUV3
#elif _DEFINENAME_DIRECTUV==4
#define v_VARYINGNAME_UV vMainUV4
#elif _DEFINENAME_DIRECTUV==5
#define v_VARYINGNAME_UV vMainUV5
#elif _DEFINENAME_DIRECTUV==6
#define v_VARYINGNAME_UV vMainUV6
#else
varying v_VARYINGNAME_UV: vec2f;
#endif
var _SAMPLERNAME_SamplerSampler: sampler;var _SAMPLERNAME_Sampler: texture_2d<f32>;
#endif
`;a.v.IncludesShadersStoreWGSL.samplerFragmentDeclaration=o},68447:function(e,r,t){var a=t(35606);let o=`struct Scene {viewProjection : mat4x4<f32>,
#ifdef MULTIVIEW
viewProjectionR : mat4x4<f32>,
#endif 
view : mat4x4<f32>,
projection : mat4x4<f32>,
vEyePosition : vec4<f32>,};var<uniform> scene : Scene;
`;a.v.IncludesShadersStoreWGSL.sceneUboDeclaration=o},519:function(e,r,t){t.r(r),t.d(r,{shadowsFragmentFunctionsWGSL:function(){return f}});var a=t(35606);let o="shadowsFragmentFunctions",i=`#ifdef SHADOWS
#ifndef SHADOWFLOAT
fn unpack(color: vec4f)->f32
{const bit_shift: vec4f= vec4f(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);return dot(color,bit_shift);}
#endif
fn computeFallOff(value: f32,clipSpace: vec2f,frustumEdgeFalloff: f32)->f32
{var mask: f32=smoothstep(1.0-frustumEdgeFalloff,1.00000012,clamp(dot(clipSpace,clipSpace),0.,1.));return mix(value,1.0,mask);}
fn computeShadowCube(worldPos: vec3f,lightPosition: vec3f,shadowTexture: texture_cube<f32>,shadowSampler: sampler,darkness: f32,depthValues: vec2f)->f32
{var directionToLight: vec3f=worldPos-lightPosition;var depth: f32=length(directionToLight);depth=(depth+depthValues.x)/(depthValues.y);depth=clamp(depth,0.,1.0);directionToLight=normalize(directionToLight);directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
var shadow: f32=unpack(textureSample(shadowTexture,shadowSampler,directionToLight));
#else
var shadow: f32=textureSample(shadowTexture,shadowSampler,directionToLight).x;
#endif
return select(darkness,1.0,depth>shadow);}
fn computeShadowWithPoissonSamplingCube(worldPos: vec3f,lightPosition: vec3f,shadowTexture: texture_cube<f32>,shadowSampler: sampler,mapSize: f32,darkness: f32,depthValues: vec2f)->f32
{var directionToLight: vec3f=worldPos-lightPosition;var depth: f32=length(directionToLight);depth=(depth+depthValues.x)/(depthValues.y);depth=clamp(depth,0.,1.0);directionToLight=normalize(directionToLight);directionToLight.y=-directionToLight.y;var visibility: f32=1.;var poissonDisk: array<vec3f,4>;poissonDisk[0]= vec3f(-1.0,1.0,-1.0);poissonDisk[1]= vec3f(1.0,-1.0,-1.0);poissonDisk[2]= vec3f(-1.0,-1.0,-1.0);poissonDisk[3]= vec3f(1.0,-1.0,1.0);
#ifndef SHADOWFLOAT
if (unpack(textureSample(shadowTexture,shadowSampler,directionToLight+poissonDisk[0]*mapSize))<depth) {visibility-=0.25;};if (unpack(textureSample(shadowTexture,shadowSampler,directionToLight+poissonDisk[1]*mapSize))<depth) {visibility-=0.25;};if (unpack(textureSample(shadowTexture,shadowSampler,directionToLight+poissonDisk[2]*mapSize))<depth) {visibility-=0.25;};if (unpack(textureSample(shadowTexture,shadowSampler,directionToLight+poissonDisk[3]*mapSize))<depth) {visibility-=0.25;};
#else
if (textureSample(shadowTexture,shadowSampler,directionToLight+poissonDisk[0]*mapSize).x<depth) {visibility-=0.25;};if (textureSample(shadowTexture,shadowSampler,directionToLight+poissonDisk[1]*mapSize).x<depth) {visibility-=0.25;};if (textureSample(shadowTexture,shadowSampler,directionToLight+poissonDisk[2]*mapSize).x<depth) {visibility-=0.25;};if (textureSample(shadowTexture,shadowSampler,directionToLight+poissonDisk[3]*mapSize).x<depth) {visibility-=0.25;};
#endif
return min(1.0,visibility+darkness);}
fn computeShadowWithESMCube(worldPos: vec3f,lightPosition: vec3f,shadowTexture: texture_cube<f32>,shadowSampler: sampler,darkness: f32,depthScale: f32,depthValues: vec2f)->f32
{var directionToLight: vec3f=worldPos-lightPosition;var depth: f32=length(directionToLight);depth=(depth+depthValues.x)/(depthValues.y);var shadowPixelDepth: f32=clamp(depth,0.,1.0);directionToLight=normalize(directionToLight);directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
var shadowMapSample: f32=unpack(textureSample(shadowTexture,shadowSampler,directionToLight));
#else
var shadowMapSample: f32=textureSample(shadowTexture,shadowSampler,directionToLight).x;
#endif
var esm: f32=1.0-clamp(exp(min(87.,depthScale*shadowPixelDepth))*shadowMapSample,0.,1.-darkness);return esm;}
fn computeShadowWithCloseESMCube(worldPos: vec3f,lightPosition: vec3f,shadowTexture: texture_cube<f32>,shadowSampler: sampler,darkness: f32,depthScale: f32,depthValues: vec2f)->f32
{var directionToLight: vec3f=worldPos-lightPosition;var depth: f32=length(directionToLight);depth=(depth+depthValues.x)/(depthValues.y);var shadowPixelDepth: f32=clamp(depth,0.,1.0);directionToLight=normalize(directionToLight);directionToLight.y=-directionToLight.y;
#ifndef SHADOWFLOAT
var shadowMapSample: f32=unpack(textureSample(shadowTexture,shadowSampler,directionToLight));
#else
var shadowMapSample: f32=textureSample(shadowTexture,shadowSampler,directionToLight).x;
#endif
var esm: f32=clamp(exp(min(87.,-depthScale*(shadowPixelDepth-shadowMapSample))),darkness,1.);return esm;}
fn computeShadowCSM(layer: i32,vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_2d_array<f32>,shadowSampler: sampler,darkness: f32,frustumEdgeFalloff: f32)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uv: vec2f=0.5*clipSpace.xy+ vec2f(0.5);var shadowPixelDepth: f32=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
var shadow: f32=unpack(textureSample(shadowTexture,shadowSampler,uv,layer));
#else
var shadow: f32=textureSample(shadowTexture,shadowSampler,uv,layer).x;
#endif
return select(1.,computeFallOff(darkness,clipSpace.xy,frustumEdgeFalloff),shadowPixelDepth>shadow );}
fn computeShadow(vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_2d<f32>,shadowSampler: sampler,darkness: f32,frustumEdgeFalloff: f32)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uv: vec2f=0.5*clipSpace.xy+ vec2f(0.5);if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{return 1.0;}
else
{var shadowPixelDepth: f32=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
var shadow: f32=unpack(textureSampleLevel(shadowTexture,shadowSampler,uv,0.));
#else
var shadow: f32=textureSampleLevel(shadowTexture,shadowSampler,uv,0.).x;
#endif
return select(1.,computeFallOff(darkness,clipSpace.xy,frustumEdgeFalloff),shadowPixelDepth>shadow );}}
fn computeShadowWithPoissonSampling(vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_2d<f32>,shadowSampler: sampler,mapSize: f32,darkness: f32,frustumEdgeFalloff: f32)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uv: vec2f=0.5*clipSpace.xy+ vec2f(0.5);if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{return 1.0;}
else
{var shadowPixelDepth: f32=clamp(depthMetric,0.,1.0);var visibility: f32=1.;var poissonDisk: array<vec2f,4>;poissonDisk[0]= vec2f(-0.94201624,-0.39906216);poissonDisk[1]= vec2f(0.94558609,-0.76890725);poissonDisk[2]= vec2f(-0.094184101,-0.92938870);poissonDisk[3]= vec2f(0.34495938,0.29387760);
#ifndef SHADOWFLOAT
if (unpack(textureSampleLevel(shadowTexture,shadowSampler,uv+poissonDisk[0]*mapSize,0.))<shadowPixelDepth) {visibility-=0.25;}
if (unpack(textureSampleLevel(shadowTexture,shadowSampler,uv+poissonDisk[1]*mapSize,0.))<shadowPixelDepth) {visibility-=0.25;}
if (unpack(textureSampleLevel(shadowTexture,shadowSampler,uv+poissonDisk[2]*mapSize,0.))<shadowPixelDepth) {visibility-=0.25;}
if (unpack(textureSampleLevel(shadowTexture,shadowSampler,uv+poissonDisk[3]*mapSize,0.))<shadowPixelDepth) {visibility-=0.25;}
#else
if (textureSampleLevel(shadowTexture,shadowSampler,uv+poissonDisk[0]*mapSize,0.).x<shadowPixelDepth) {visibility-=0.25;}
if (textureSampleLevel(shadowTexture,shadowSampler,uv+poissonDisk[1]*mapSize,0.).x<shadowPixelDepth) {visibility-=0.25;}
if (textureSampleLevel(shadowTexture,shadowSampler,uv+poissonDisk[2]*mapSize,0.).x<shadowPixelDepth) {visibility-=0.25;}
if (textureSampleLevel(shadowTexture,shadowSampler,uv+poissonDisk[3]*mapSize,0.).x<shadowPixelDepth) {visibility-=0.25;}
#endif
return computeFallOff(min(1.0,visibility+darkness),clipSpace.xy,frustumEdgeFalloff);}}
fn computeShadowWithESM(vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_2d<f32>,shadowSampler: sampler,darkness: f32,depthScale: f32,frustumEdgeFalloff: f32)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uv: vec2f=0.5*clipSpace.xy+ vec2f(0.5);if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{return 1.0;}
else
{var shadowPixelDepth: f32=clamp(depthMetric,0.,1.0);
#ifndef SHADOWFLOAT
var shadowMapSample: f32=unpack(textureSampleLevel(shadowTexture,shadowSampler,uv,0.));
#else
var shadowMapSample: f32=textureSampleLevel(shadowTexture,shadowSampler,uv,0.).x;
#endif
var esm: f32=1.0-clamp(exp(min(87.,depthScale*shadowPixelDepth))*shadowMapSample,0.,1.-darkness);return computeFallOff(esm,clipSpace.xy,frustumEdgeFalloff);}}
fn computeShadowWithCloseESM(vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_2d<f32>,shadowSampler: sampler,darkness: f32,depthScale: f32,frustumEdgeFalloff: f32)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uv: vec2f=0.5*clipSpace.xy+ vec2f(0.5);if (uv.x<0. || uv.x>1.0 || uv.y<0. || uv.y>1.0)
{return 1.0;}
else
{var shadowPixelDepth: f32=clamp(depthMetric,0.,1.0); 
#ifndef SHADOWFLOAT
var shadowMapSample: f32=unpack(textureSampleLevel(shadowTexture,shadowSampler,uv,0.));
#else
var shadowMapSample: f32=textureSampleLevel(shadowTexture,shadowSampler,uv,0.).x;
#endif
var esm: f32=clamp(exp(min(87.,-depthScale*(shadowPixelDepth-shadowMapSample))),darkness,1.);return computeFallOff(esm,clipSpace.xy,frustumEdgeFalloff);}}
fn getZInClip(clipSpace: vec3f,uvDepth: vec3f)->f32
{
#ifdef IS_NDC_HALF_ZRANGE
return clipSpace.z;
#else
return uvDepth.z;
#endif
}
const GREATEST_LESS_THAN_ONE: f32=0.99999994;
#define DISABLE_UNIFORMITY_ANALYSIS
fn computeShadowWithCSMPCF1(layer: i32,vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_depth_2d_array,shadowSampler: sampler_comparison,darkness: f32,frustumEdgeFalloff: f32)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uvDepth: vec3f= vec3f(0.5*clipSpace.xyz+ vec3f(0.5));uvDepth.z=clamp(getZInClip(clipSpace,uvDepth),0.,GREATEST_LESS_THAN_ONE);var shadow: f32=textureSampleCompare(shadowTexture,shadowSampler,uvDepth.xy,layer,uvDepth.z);shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}
fn computeShadowWithCSMPCF3(layer: i32,vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_depth_2d_array,shadowSampler: sampler_comparison,shadowMapSizeAndInverse: vec2f,darkness: f32,frustumEdgeFalloff: f32)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uvDepth: vec3f= vec3f(0.5*clipSpace.xyz+ vec3f(0.5));uvDepth.z=clamp(getZInClip(clipSpace,uvDepth),0.,GREATEST_LESS_THAN_ONE);var uv: vec2f=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
var st: vec2f=fract(uv); 
var base_uv: vec2f=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
var uvw0: vec2f=3.-2.*st;var uvw1: vec2f=1.+2.*st;var u: vec2f= vec2f((2.-st.x)/uvw0.x-1.,st.x/uvw1.x+1.)*shadowMapSizeAndInverse.y;var v: vec2f= vec2f((2.-st.y)/uvw0.y-1.,st.y/uvw1.y+1.)*shadowMapSizeAndInverse.y;var shadow: f32=0.;shadow+=uvw0.x*uvw0.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[0],v[0]),layer,uvDepth.z);shadow+=uvw1.x*uvw0.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[1],v[0]),layer,uvDepth.z);shadow+=uvw0.x*uvw1.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[0],v[1]),layer,uvDepth.z);shadow+=uvw1.x*uvw1.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[1],v[1]),layer,uvDepth.z);shadow=shadow/16.;shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}
fn computeShadowWithCSMPCF5(layer: i32,vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_depth_2d_array,shadowSampler: sampler_comparison,shadowMapSizeAndInverse: vec2f,darkness: f32,frustumEdgeFalloff: f32)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uvDepth: vec3f= vec3f(0.5*clipSpace.xyz+ vec3f(0.5));uvDepth.z=clamp(getZInClip(clipSpace,uvDepth),0.,GREATEST_LESS_THAN_ONE);var uv: vec2f=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
var st: vec2f=fract(uv); 
var base_uv: vec2f=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
var uvw0: vec2f=4.-3.*st;var uvw1: vec2f= vec2f(7.);var uvw2: vec2f=1.+3.*st;var u: vec3f= vec3f((3.-2.*st.x)/uvw0.x-2.,(3.+st.x)/uvw1.x,st.x/uvw2.x+2.)*shadowMapSizeAndInverse.y;var v: vec3f= vec3f((3.-2.*st.y)/uvw0.y-2.,(3.+st.y)/uvw1.y,st.y/uvw2.y+2.)*shadowMapSizeAndInverse.y;var shadow: f32=0.;shadow+=uvw0.x*uvw0.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[0],v[0]),layer,uvDepth.z);shadow+=uvw1.x*uvw0.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[1],v[0]),layer,uvDepth.z);shadow+=uvw2.x*uvw0.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[2],v[0]),layer,uvDepth.z);shadow+=uvw0.x*uvw1.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[0],v[1]),layer,uvDepth.z);shadow+=uvw1.x*uvw1.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[1],v[1]),layer,uvDepth.z);shadow+=uvw2.x*uvw1.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[2],v[1]),layer,uvDepth.z);shadow+=uvw0.x*uvw2.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[0],v[2]),layer,uvDepth.z);shadow+=uvw1.x*uvw2.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[1],v[2]),layer,uvDepth.z);shadow+=uvw2.x*uvw2.y*textureSampleCompare(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[2],v[2]),layer,uvDepth.z);shadow=shadow/144.;shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}
fn computeShadowWithPCF1(vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_depth_2d,shadowSampler: sampler_comparison,darkness: f32,frustumEdgeFalloff: f32)->f32
{if (depthMetric>1.0 || depthMetric<0.0) {return 1.0;}
else
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uvDepth: vec3f= vec3f(0.5*clipSpace.xyz+ vec3f(0.5));uvDepth.z=getZInClip(clipSpace,uvDepth);var shadow: f32=textureSampleCompareLevel(shadowTexture,shadowSampler,uvDepth.xy,uvDepth.z);shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}}
fn computeShadowWithPCF3(vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_depth_2d,shadowSampler: sampler_comparison,shadowMapSizeAndInverse: vec2f,darkness: f32,frustumEdgeFalloff: f32)->f32
{if (depthMetric>1.0 || depthMetric<0.0) {return 1.0;}
else
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uvDepth: vec3f= vec3f(0.5*clipSpace.xyz+ vec3f(0.5));uvDepth.z=getZInClip(clipSpace,uvDepth);var uv: vec2f=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
var st: vec2f=fract(uv); 
var base_uv: vec2f=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
var uvw0: vec2f=3.-2.*st;var uvw1: vec2f=1.+2.*st;var u: vec2f= vec2f((2.-st.x)/uvw0.x-1.,st.x/uvw1.x+1.)*shadowMapSizeAndInverse.y;var v: vec2f= vec2f((2.-st.y)/uvw0.y-1.,st.y/uvw1.y+1.)*shadowMapSizeAndInverse.y;var shadow: f32=0.;shadow+=uvw0.x*uvw0.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[0],v[0]),uvDepth.z);shadow+=uvw1.x*uvw0.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[1],v[0]),uvDepth.z);shadow+=uvw0.x*uvw1.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[0],v[1]),uvDepth.z);shadow+=uvw1.x*uvw1.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[1],v[1]),uvDepth.z);shadow=shadow/16.;shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}}
fn computeShadowWithPCF5(vPositionFromLight: vec4f,depthMetric: f32,shadowTexture: texture_depth_2d,shadowSampler: sampler_comparison,shadowMapSizeAndInverse: vec2f,darkness: f32,frustumEdgeFalloff: f32)->f32
{if (depthMetric>1.0 || depthMetric<0.0) {return 1.0;}
else
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uvDepth: vec3f= vec3f(0.5*clipSpace.xyz+ vec3f(0.5));uvDepth.z=getZInClip(clipSpace,uvDepth);var uv: vec2f=uvDepth.xy*shadowMapSizeAndInverse.x; 
uv+=0.5; 
var st: vec2f=fract(uv); 
var base_uv: vec2f=floor(uv)-0.5; 
base_uv*=shadowMapSizeAndInverse.y; 
var uvw0: vec2f=4.-3.*st;var uvw1: vec2f= vec2f(7.);var uvw2: vec2f=1.+3.*st;var u: vec3f= vec3f((3.-2.*st.x)/uvw0.x-2.,(3.+st.x)/uvw1.x,st.x/uvw2.x+2.)*shadowMapSizeAndInverse.y;var v: vec3f= vec3f((3.-2.*st.y)/uvw0.y-2.,(3.+st.y)/uvw1.y,st.y/uvw2.y+2.)*shadowMapSizeAndInverse.y;var shadow: f32=0.;shadow+=uvw0.x*uvw0.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[0],v[0]),uvDepth.z);shadow+=uvw1.x*uvw0.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[1],v[0]),uvDepth.z);shadow+=uvw2.x*uvw0.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[2],v[0]),uvDepth.z);shadow+=uvw0.x*uvw1.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[0],v[1]),uvDepth.z);shadow+=uvw1.x*uvw1.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[1],v[1]),uvDepth.z);shadow+=uvw2.x*uvw1.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[2],v[1]),uvDepth.z);shadow+=uvw0.x*uvw2.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[0],v[2]),uvDepth.z);shadow+=uvw1.x*uvw2.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[1],v[2]),uvDepth.z);shadow+=uvw2.x*uvw2.y*textureSampleCompareLevel(shadowTexture,shadowSampler, base_uv.xy+ vec2f(u[2],v[2]),uvDepth.z);shadow=shadow/144.;shadow=mix(darkness,1.,shadow);return computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff);}}
const PoissonSamplers32: array<vec3f,64>=array<vec3f,64> (
vec3f(0.06407013,0.05409927,0.),
vec3f(0.7366577,0.5789394,0.),
vec3f(-0.6270542,-0.5320278,0.),
vec3f(-0.4096107,0.8411095,0.),
vec3f(0.6849564,-0.4990818,0.),
vec3f(-0.874181,-0.04579735,0.),
vec3f(0.9989998,0.0009880066,0.),
vec3f(-0.004920578,-0.9151649,0.),
vec3f(0.1805763,0.9747483,0.),
vec3f(-0.2138451,0.2635818,0.),
vec3f(0.109845,0.3884785,0.),
vec3f(0.06876755,-0.3581074,0.),
vec3f(0.374073,-0.7661266,0.),
vec3f(0.3079132,-0.1216763,0.),
vec3f(-0.3794335,-0.8271583,0.),
vec3f(-0.203878,-0.07715034,0.),
vec3f(0.5912697,0.1469799,0.),
vec3f(-0.88069,0.3031784,0.),
vec3f(0.5040108,0.8283722,0.),
vec3f(-0.5844124,0.5494877,0.),
vec3f(0.6017799,-0.1726654,0.),
vec3f(-0.5554981,0.1559997,0.),
vec3f(-0.3016369,-0.3900928,0.),
vec3f(-0.5550632,-0.1723762,0.),
vec3f(0.925029,0.2995041,0.),
vec3f(-0.2473137,0.5538505,0.),
vec3f(0.9183037,-0.2862392,0.),
vec3f(0.2469421,0.6718712,0.),
vec3f(0.3916397,-0.4328209,0.),
vec3f(-0.03576927,-0.6220032,0.),
vec3f(-0.04661255,0.7995201,0.),
vec3f(0.4402924,0.3640312,0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.),
vec3f(0.)
);const PoissonSamplers64: array<vec3f,64>=array<vec3f,64> (
vec3f(-0.613392,0.617481,0.),
vec3f(0.170019,-0.040254,0.),
vec3f(-0.299417,0.791925,0.),
vec3f(0.645680,0.493210,0.),
vec3f(-0.651784,0.717887,0.),
vec3f(0.421003,0.027070,0.),
vec3f(-0.817194,-0.271096,0.),
vec3f(-0.705374,-0.668203,0.),
vec3f(0.977050,-0.108615,0.),
vec3f(0.063326,0.142369,0.),
vec3f(0.203528,0.214331,0.),
vec3f(-0.667531,0.326090,0.),
vec3f(-0.098422,-0.295755,0.),
vec3f(-0.885922,0.215369,0.),
vec3f(0.566637,0.605213,0.),
vec3f(0.039766,-0.396100,0.),
vec3f(0.751946,0.453352,0.),
vec3f(0.078707,-0.715323,0.),
vec3f(-0.075838,-0.529344,0.),
vec3f(0.724479,-0.580798,0.),
vec3f(0.222999,-0.215125,0.),
vec3f(-0.467574,-0.405438,0.),
vec3f(-0.248268,-0.814753,0.),
vec3f(0.354411,-0.887570,0.),
vec3f(0.175817,0.382366,0.),
vec3f(0.487472,-0.063082,0.),
vec3f(-0.084078,0.898312,0.),
vec3f(0.488876,-0.783441,0.),
vec3f(0.470016,0.217933,0.),
vec3f(-0.696890,-0.549791,0.),
vec3f(-0.149693,0.605762,0.),
vec3f(0.034211,0.979980,0.),
vec3f(0.503098,-0.308878,0.),
vec3f(-0.016205,-0.872921,0.),
vec3f(0.385784,-0.393902,0.),
vec3f(-0.146886,-0.859249,0.),
vec3f(0.643361,0.164098,0.),
vec3f(0.634388,-0.049471,0.),
vec3f(-0.688894,0.007843,0.),
vec3f(0.464034,-0.188818,0.),
vec3f(-0.440840,0.137486,0.),
vec3f(0.364483,0.511704,0.),
vec3f(0.034028,0.325968,0.),
vec3f(0.099094,-0.308023,0.),
vec3f(0.693960,-0.366253,0.),
vec3f(0.678884,-0.204688,0.),
vec3f(0.001801,0.780328,0.),
vec3f(0.145177,-0.898984,0.),
vec3f(0.062655,-0.611866,0.),
vec3f(0.315226,-0.604297,0.),
vec3f(-0.780145,0.486251,0.),
vec3f(-0.371868,0.882138,0.),
vec3f(0.200476,0.494430,0.),
vec3f(-0.494552,-0.711051,0.),
vec3f(0.612476,0.705252,0.),
vec3f(-0.578845,-0.768792,0.),
vec3f(-0.772454,-0.090976,0.),
vec3f(0.504440,0.372295,0.),
vec3f(0.155736,0.065157,0.),
vec3f(0.391522,0.849605,0.),
vec3f(-0.620106,-0.328104,0.),
vec3f(0.789239,-0.419965,0.),
vec3f(-0.545396,0.538133,0.),
vec3f(-0.178564,-0.596057,0.)
);fn computeShadowWithCSMPCSS(layer: i32,vPositionFromLight: vec4f,depthMetric: f32,depthTexture: texture_2d_array<f32>,depthSampler: sampler,shadowTexture: texture_depth_2d_array,shadowSampler: sampler_comparison,shadowMapSizeInverse: f32,lightSizeUV: f32,darkness: f32,frustumEdgeFalloff: f32,searchTapCount: i32,pcfTapCount: i32,poissonSamplers: array<vec3f,64>,lightSizeUVCorrection: vec2f,depthCorrection: f32,penumbraDarkness: f32)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uvDepth: vec3f= vec3f(0.5*clipSpace.xyz+ vec3f(0.5));uvDepth.z=clamp(getZInClip(clipSpace,uvDepth),0.,GREATEST_LESS_THAN_ONE);var uvDepthLayer: vec4f= vec4f(uvDepth.x,uvDepth.y,f32(layer),uvDepth.z);var blockerDepth: f32=0.0;var sumBlockerDepth: f32=0.0;var numBlocker: f32=0.0;for (var i: i32=0; i<searchTapCount; i ++) {blockerDepth=textureSample(depthTexture,depthSampler, uvDepth.xy+(lightSizeUV*lightSizeUVCorrection*shadowMapSizeInverse*PoissonSamplers32[i].xy),layer).r;numBlocker+=select(0.,1.,blockerDepth<depthMetric);sumBlockerDepth+=select(0.,blockerDepth,blockerDepth<depthMetric);}
var avgBlockerDepth: f32=sumBlockerDepth/numBlocker;var AAOffset: f32=shadowMapSizeInverse*10.;var penumbraRatio: f32=((depthMetric-avgBlockerDepth)*depthCorrection+AAOffset);var filterRadius: vec4f= vec4f(penumbraRatio*lightSizeUV*lightSizeUVCorrection*shadowMapSizeInverse,0.,0.);var random: f32=getRand(vPositionFromLight.xy);var rotationAngle: f32=random*3.1415926;var rotationVector: vec2f= vec2f(cos(rotationAngle),sin(rotationAngle));var shadow: f32=0.;for (var i: i32=0; i<pcfTapCount; i++) {var offset: vec4f= vec4f(poissonSamplers[i],0.);offset= vec4f(offset.x*rotationVector.x-offset.y*rotationVector.y,offset.y*rotationVector.x+offset.x*rotationVector.y,0.,0.);let coords=uvDepthLayer+offset*filterRadius;shadow+=textureSampleCompare(shadowTexture,shadowSampler,coords.xy,i32(coords.z),coords.w);}
shadow/= f32(pcfTapCount);shadow=mix(shadow,1.,min((depthMetric-avgBlockerDepth)*depthCorrection*penumbraDarkness,1.));shadow=mix(darkness,1.,shadow);return select(computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff),1.0,numBlocker<1.0);}
fn computeShadowWithPCSS(vPositionFromLight: vec4f,depthMetric: f32,depthTexture: texture_2d<f32>,depthSampler: sampler,shadowTexture: texture_depth_2d,shadowSampler: sampler_comparison,shadowMapSizeInverse: f32,lightSizeUV: f32,darkness: f32,frustumEdgeFalloff: f32,searchTapCount: i32,pcfTapCount: i32,poissonSamplers: array<vec3f,64>)->f32
{var clipSpace: vec3f=vPositionFromLight.xyz/vPositionFromLight.w;var uvDepth: vec3f= vec3f(0.5*clipSpace.xyz+ vec3f(0.5));uvDepth.z=getZInClip(clipSpace,uvDepth);var blockerDepth: f32=0.0;var sumBlockerDepth: f32=0.0;var numBlocker: f32=0.0;var exitCondition: bool=depthMetric>1.0 || depthMetric<0.0;for (var i: i32=0; i<searchTapCount; i ++) {if (exitCondition) {break;}
blockerDepth=textureSampleLevel(depthTexture,depthSampler,uvDepth.xy+(lightSizeUV*shadowMapSizeInverse*PoissonSamplers32[i].xy),0).r;numBlocker+=select(0.,1.,blockerDepth<depthMetric);sumBlockerDepth+=select(0.,blockerDepth,blockerDepth<depthMetric);}
exitCondition=exitCondition || numBlocker<1.0;var avgBlockerDepth: f32=sumBlockerDepth/numBlocker;var AAOffset: f32=shadowMapSizeInverse*10.;var penumbraRatio: f32=((depthMetric-avgBlockerDepth)+AAOffset);var filterRadius: f32=penumbraRatio*lightSizeUV*shadowMapSizeInverse;var random: f32=getRand(vPositionFromLight.xy);var rotationAngle: f32=random*3.1415926;var rotationVector: vec2f= vec2f(cos(rotationAngle),sin(rotationAngle));var shadow: f32=0.;for (var i: i32=0; i<pcfTapCount; i++) {if (exitCondition) {break;}
var offset: vec3f=poissonSamplers[i];offset= vec3f(offset.x*rotationVector.x-offset.y*rotationVector.y,offset.y*rotationVector.x+offset.x*rotationVector.y,0.);let coords=uvDepth+offset*filterRadius;shadow+=textureSampleCompareLevel(shadowTexture,shadowSampler,coords.xy,coords.z);}
shadow/= f32(pcfTapCount);shadow=mix(shadow,1.,depthMetric-avgBlockerDepth);shadow=mix(darkness,1.,shadow);return select(computeFallOff(shadow,clipSpace.xy,frustumEdgeFalloff),1.0,exitCondition);}
fn computeShadowWithPCSS16(vPositionFromLight: vec4f,depthMetric: f32,depthTexture: texture_2d<f32>,depthSampler: sampler,shadowTexture: texture_depth_2d,shadowSampler: sampler_comparison,shadowMapSizeInverse: f32,lightSizeUV: f32,darkness: f32,frustumEdgeFalloff: f32)->f32
{return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthTexture,depthSampler,shadowTexture,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,16,PoissonSamplers32);}
fn computeShadowWithPCSS32(vPositionFromLight: vec4f,depthMetric: f32,depthTexture: texture_2d<f32>,depthSampler: sampler,shadowTexture: texture_depth_2d,shadowSampler: sampler_comparison,shadowMapSizeInverse: f32,lightSizeUV: f32,darkness: f32,frustumEdgeFalloff: f32)->f32
{return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthTexture,depthSampler,shadowTexture,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,32,PoissonSamplers32);}
fn computeShadowWithPCSS64(vPositionFromLight: vec4f,depthMetric: f32,depthTexture: texture_2d<f32>,depthSampler: sampler,shadowTexture: texture_depth_2d,shadowSampler: sampler_comparison,shadowMapSizeInverse: f32,lightSizeUV: f32,darkness: f32,frustumEdgeFalloff: f32)->f32
{return computeShadowWithPCSS(vPositionFromLight,depthMetric,depthTexture,depthSampler,shadowTexture,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,32,64,PoissonSamplers64);}
fn computeShadowWithCSMPCSS16(layer: i32,vPositionFromLight: vec4f,depthMetric: f32,depthTexture: texture_2d_array<f32>,depthSampler: sampler,shadowTexture: texture_depth_2d_array,shadowSampler: sampler_comparison,shadowMapSizeInverse: f32,lightSizeUV: f32,darkness: f32,frustumEdgeFalloff: f32,lightSizeUVCorrection: vec2f,depthCorrection: f32,penumbraDarkness: f32)->f32
{return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthTexture,depthSampler,shadowTexture,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,16,PoissonSamplers32,lightSizeUVCorrection,depthCorrection,penumbraDarkness);}
fn computeShadowWithCSMPCSS32(layer: i32,vPositionFromLight: vec4f,depthMetric: f32,depthTexture: texture_2d_array<f32>,depthSampler: sampler,shadowTexture: texture_depth_2d_array,shadowSampler: sampler_comparison,shadowMapSizeInverse: f32,lightSizeUV: f32,darkness: f32,frustumEdgeFalloff: f32,lightSizeUVCorrection: vec2f,depthCorrection: f32,penumbraDarkness: f32)->f32
{return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthTexture,depthSampler,shadowTexture,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,16,32,PoissonSamplers32,lightSizeUVCorrection,depthCorrection,penumbraDarkness);}
fn computeShadowWithCSMPCSS64(layer: i32,vPositionFromLight: vec4f,depthMetric: f32,depthTexture: texture_2d_array<f32>,depthSampler: sampler,shadowTexture: texture_depth_2d_array,shadowSampler: sampler_comparison,shadowMapSizeInverse: f32,lightSizeUV: f32,darkness: f32,frustumEdgeFalloff: f32,lightSizeUVCorrection: vec2f,depthCorrection: f32,penumbraDarkness: f32)->f32
{return computeShadowWithCSMPCSS(layer,vPositionFromLight,depthMetric,depthTexture,depthSampler,shadowTexture,shadowSampler,shadowMapSizeInverse,lightSizeUV,darkness,frustumEdgeFalloff,32,64,PoissonSamplers64,lightSizeUVCorrection,depthCorrection,penumbraDarkness);}
#endif
`;a.v.IncludesShadersStoreWGSL[o]=i;let f={name:o,shader:i}},57555:function(e,r,t){t.r(r),t.d(r,{defaultPixelShaderWGSL:function(){return f}});var a=t(35606);t(64558),t(55203),t(7675),t(29524),t(57104),t(59754),t(16925),t(519),t(55985),t(38958),t(53584),t(87552),t(18472),t(40809),t(93523),t(78122),t(22706),t(38632),t(56506),t(10955),t(55836),t(82842),t(55960),t(24636),t(59712),t(95613);let o="defaultPixelShader",i=`#include<defaultUboDeclaration>
#include<prePassDeclaration>[SCENE_MRT_COUNT]
#include<oitDeclaration>
#define CUSTOM_FRAGMENT_BEGIN
varying vPositionW: vec3f;
#ifdef NORMAL
varying vNormalW: vec3f;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vColor: vec4f;
#endif
#include<mainUVVaryingDeclaration>[1..7]
#include<helperFunctions>
#include<lightUboDeclaration>[0..maxSimultaneousLights]
#include<lightsFragmentFunctions>
#include<shadowsFragmentFunctions>
#include<samplerFragmentDeclaration>(_DEFINENAME_,DIFFUSE,_VARYINGNAME_,Diffuse,_SAMPLERNAME_,diffuse)
#include<samplerFragmentDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_SAMPLERNAME_,ambient)
#include<samplerFragmentDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_SAMPLERNAME_,opacity)
#include<samplerFragmentDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_SAMPLERNAME_,emissive)
#include<samplerFragmentDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_SAMPLERNAME_,lightmap)
#include<samplerFragmentDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_SAMPLERNAME_,decal)
#ifdef REFRACTION
#ifdef REFRACTIONMAP_3D
var refractionCubeSamplerSampler: sampler;var refractionCubeSampler: texture_cube<f32>;
#else
var refraction2DSamplerSampler: sampler;var refraction2DSampler: texture_2d<f32>;
#endif
#endif
#if defined(SPECULARTERM)
#include<samplerFragmentDeclaration>(_DEFINENAME_,SPECULAR,_VARYINGNAME_,Specular,_SAMPLERNAME_,specular)
#endif
#include<fresnelFunction>
#ifdef REFLECTION
#ifdef REFLECTIONMAP_3D
var reflectionCubeSamplerSampler: sampler;var reflectionCubeSampler: texture_cube<f32>;
#else
var reflection2DSamplerSampler: sampler;var reflection2DSampler: texture_2d<f32>;
#endif
#ifdef REFLECTIONMAP_SKYBOX
varying vPositionUVW: vec3f;
#else
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vDirectionW: vec3f;
#endif
#endif
#include<reflectionFunction>
#endif
#include<imageProcessingDeclaration>
#include<imageProcessingFunctions>
#include<bumpFragmentMainFunctions>
#include<bumpFragmentFunctions>
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
var viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-fragmentInputs.vPositionW);var baseColor: vec4f= vec4f(1.,1.,1.,1.);var diffuseColor: vec3f=uniforms.vDiffuseColor.rgb;var alpha: f32=uniforms.vDiffuseColor.a;
#ifdef NORMAL
var normalW: vec3f=normalize(fragmentInputs.vNormalW);
#else
var normalW: vec3f=normalize(-cross(dpdx(fragmentInputs.vPositionW),dpdy(fragmentInputs.vPositionW)));
#endif
#include<bumpFragment>
#ifdef TWOSIDEDLIGHTING
normalW=select(-normalW,normalW,fragmentInputs.frontFacing);
#endif
#ifdef DIFFUSE
baseColor=textureSample(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vDiffuseUV+uvOffset);
#if defined(ALPHATEST) && !defined(ALPHATEST_AFTERALLALPHACOMPUTATIONS)
if (baseColor.a<uniforms.alphaCutOff) {discard;}
#endif
#ifdef ALPHAFROMDIFFUSE
alpha*=baseColor.a;
#endif
#define CUSTOM_FRAGMENT_UPDATE_ALPHA
baseColor=vec4f(baseColor.rgb*uniforms.vDiffuseInfos.y,baseColor.a);
#endif
#if defined(DECAL) && !defined(DECAL_AFTER_DETAIL)
var decalColor: vec4f=textureSample(decalSampler,decalSamplerSampler,fragmentInputs.vDecalUV+uvOffset);
#include<decalFragment>(surfaceAlbedo,baseColor,GAMMADECAL,_GAMMADECAL_NOTUSED_)
#endif
#include<depthPrePass>
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
baseColor=vec4f(baseColor.rgb*fragmentInputs.vColor.rgb,baseColor.a);
#endif
#ifdef DETAIL
baseColor=vec4f(baseColor.rgb*2.0*mix(0.5,detailColor.r,uniforms.vDetailInfos.y),baseColor.a);
#endif
#if defined(DECAL) && defined(DECAL_AFTER_DETAIL)
var decalColor: vec4f=textureSample(decalSampler,decalSamplerSampler,fragmentInputs.vDecalUV+uvOffset);
#include<decalFragment>(surfaceAlbedo,baseColor,GAMMADECAL,_GAMMADECAL_NOTUSED_)
#endif
#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE
var baseAmbientColor: vec3f= vec3f(1.,1.,1.);
#ifdef AMBIENT
baseAmbientColor=textureSample(ambientSampler,ambientSamplerSampler,fragmentInputs.vAmbientUV+uvOffset).rgb*uniforms.vAmbientInfos.y;
#endif
#define CUSTOM_FRAGMENT_BEFORE_LIGHTS
#ifdef SPECULARTERM
var glossiness: f32=uniforms.vSpecularColor.a;var specularColor: vec3f=uniforms.vSpecularColor.rgb;
#ifdef SPECULAR
var specularMapColor: vec4f=textureSample(specularSampler,specularSamplerSampler,fragmentInputs.vSpecularUV+uvOffset);specularColor=specularMapColor.rgb;
#ifdef GLOSSINESS
glossiness=glossiness*specularMapColor.a;
#endif
#endif
#else
var glossiness: f32=0.;
#endif
var diffuseBase: vec3f= vec3f(0.,0.,0.);var info: lightingInfo;
#ifdef SPECULARTERM
var specularBase: vec3f= vec3f(0.,0.,0.);
#endif
var shadow: f32=1.;var aggShadow: f32=0.;var numLights: f32=0.;
#ifdef LIGHTMAP
var lightmapColor: vec4f=textureSample(lightmapSampler,lightmapSamplerSampler,fragmentInputs.vLightmapUV+uvOffset);
#ifdef RGBDLIGHTMAP
lightmapColor=vec4f(fromRGBD(lightmapColor),lightmapColor.a);
#endif
lightmapColor=vec4f(lightmapColor.rgb*vLightmapInfos.y,lightmapColor.a);
#endif
#include<lightFragment>[0..maxSimultaneousLights]
aggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);
#ifdef REFRACTION
var refractionVector: vec3f=normalize(refract(-viewDirectionW,normalW,uniforms.vRefractionInfos.y));
#ifdef REFRACTIONMAP_3D
#ifdef USE_LOCAL_REFRACTIONMAP_CUBIC
refractionVector=parallaxCorrectNormal(fragmentInputs.vPositionW,refractionVector,uniforms.vRefractionSize,uniforms.vRefractionPosition);
#endif
refractionVector.y=refractionVector.y*uniforms.vRefractionInfos.w;var refractionLookup: vec4f=textureSample(refractionCubeSampler,refractionCubeSamplerSampler,refractionVector);if (dot(refractionVector,viewDirectionW)<1.0) {refractionColor=refractionLookup;}
#else
var vRefractionUVW: vec3f= (uniforms.refractionMatrix*(scene.view* vec4f(fragmentInputs.vPositionW+refractionVector*uniforms.vRefractionInfos.z,1.0))).xyz;var refractionCoords: vec2f=vRefractionUVW.xy/vRefractionUVW.z;refractionCoords.y=1.0-refractionCoords.y;refractionColor=textureSample(refraction2DSampler,refraction2DSamplerSampler,refractionCoords);
#endif
#ifdef RGBDREFRACTION
refractionColor=vec4f(fromRGBD(refractionColor),refractionColor.a);
#endif
#ifdef IS_REFRACTION_LINEAR
refractionColor=vec4f(toGammaSpaceVec3(refractionColor.rgb),refractionColor.a);
#endif
refractionColor=vec4f(refractionColor.rgb*uniforms.vRefractionInfos.x,refractionColor.a);
#endif
var reflectionColor: vec4f= vec4f(0.,0.,0.,1.);
#ifdef REFLECTION
var vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);
#ifdef REFLECTIONMAP_OPPOSITEZ
vReflectionUVW=vec3f(vReflectionUVW.x,vReflectionUVW.y,vReflectionUVW.z*-1.0);
#endif
#ifdef REFLECTIONMAP_3D
#ifdef ROUGHNESS
var bias: f32=uniforms.vReflectionInfos.y;
#ifdef SPECULARTERM
#ifdef SPECULAR
#ifdef GLOSSINESS
bias*=(1.0-specularMapColor.a);
#endif
#endif
#endif
reflectionColor=textureSampleLevel(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW,bias);
#else
reflectionColor=textureSample(reflectionCubeSampler,reflectionCubeSamplerSampler,vReflectionUVW);
#endif
#else
var coords: vec2f=vReflectionUVW.xy;
#ifdef REFLECTIONMAP_PROJECTION
coords/=vReflectionUVW.z;
#endif
coords.y=1.0-coords.y;reflectionColor=textureSample(reflection2DSampler,reflection2DSamplerSampler,coords);
#endif
#ifdef RGBDREFLECTION
reflectionColor=vec4f(fromRGBD(reflectionColor),reflectionColor.a);
#endif
#ifdef IS_REFLECTION_LINEAR
reflectionColor=vec4f(toGammaSpaceVec3(reflectionColor.rgb),reflectionColor.a);
#endif
reflectionColor=vec4f(reflectionColor.rgb*uniforms.vReflectionInfos.x,reflectionColor.a);
#ifdef REFLECTIONFRESNEL
var reflectionFresnelTerm: f32=computeFresnelTerm(viewDirectionW,normalW,uniforms.reflectionRightColor.a,uniforms.reflectionLeftColor.a);
#ifdef REFLECTIONFRESNELFROMSPECULAR
#ifdef SPECULARTERM
reflectionColor=vec4f(reflectionColor.rgb*specularColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*uniforms.reflectionRightColor.rgb,reflectionColor.a);
#else
reflectionColor=vec4f(reflectionColor.rgb*uniforms.reflectionLeftColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*uniforms.reflectionRightColor.rgb,reflectionColor.a);
#endif
#else
reflectionColor=vec4f(reflectionColor.rgb*uniforms.reflectionLeftColor.rgb*(1.0-reflectionFresnelTerm)+reflectionFresnelTerm*uniforms.reflectionRightColor.rgb,reflectionColor.a);
#endif
#endif
#endif
#ifdef REFRACTIONFRESNEL
var refractionFresnelTerm: f32=computeFresnelTerm(viewDirectionW,normalW,uniforms.refractionRightColor.a,uniforms.refractionLeftColor.a);refractionColor=vec4f(refractionColor.rgb*uniforms.refractionLeftColor.rgb*(1.0-refractionFresnelTerm)+refractionFresnelTerm*uniforms.refractionRightColor.rgb,refractionColor.a);
#endif
#ifdef OPACITY
var opacityMap: vec4f=textureSample(opacitySampler,opacitySamplerSampler,fragmentInputs.vOpacityUV+uvOffset);
#ifdef OPACITYRGB
opacityMap=vec4f(opacityMap.rgb* vec3f(0.3,0.59,0.11),opacityMap.a);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* uniforms.vOpacityInfos.y;
#else
alpha*=opacityMap.a*uniforms.vOpacityInfos.y;
#endif
#endif
#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)
alpha*=fragmentInputs.vColor.a;
#endif
#ifdef OPACITYFRESNEL
var opacityFresnelTerm: f32=computeFresnelTerm(viewDirectionW,normalW,uniforms.opacityParts.z,uniforms.opacityParts.w);alpha+=uniforms.opacityParts.x*(1.0-opacityFresnelTerm)+opacityFresnelTerm*uniforms.opacityParts.y;
#endif
#ifdef ALPHATEST
#ifdef ALPHATEST_AFTERALLALPHACOMPUTATIONS
if (alpha<uniforms.alphaCutOff) {discard;}
#endif
#ifndef ALPHABLEND
alpha=1.0;
#endif
#endif
var emissiveColor: vec3f=uniforms.vEmissiveColor;
#ifdef EMISSIVE
emissiveColor+=textureSample(emissiveSampler,emissiveSamplerSampler,fragmentInputs.vEmissiveUV+uvOffset).rgb*uniforms.vEmissiveInfos.y;
#endif
#ifdef EMISSIVEFRESNEL
var emissiveFresnelTerm: f32=computeFresnelTerm(viewDirectionW,normalW,uniforms.emissiveRightColor.a,uniforms.emissiveLeftColor.a);emissiveColor*=uniforms.emissiveLeftColor.rgb*(1.0-emissiveFresnelTerm)+emissiveFresnelTerm*uniforms.emissiveRightColor.rgb;
#endif
#ifdef DIFFUSEFRESNEL
var diffuseFresnelTerm: f32=computeFresnelTerm(viewDirectionW,normalW,uniforms.diffuseRightColor.a,uniforms.diffuseLeftColor.a);diffuseBase*=uniforms.diffuseLeftColor.rgb*(1.0-diffuseFresnelTerm)+diffuseFresnelTerm*uniforms.diffuseRightColor.rgb;
#endif
#ifdef EMISSIVEASILLUMINATION
var finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;
#else
#ifdef LINKEMISSIVEWITHDIFFUSE
var finalDiffuse: vec3f=clamp((diffuseBase+emissiveColor)*diffuseColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;
#else
var finalDiffuse: vec3f=clamp(diffuseBase*diffuseColor+emissiveColor+uniforms.vAmbientColor,vec3f(0.0),vec3f(1.0))*baseColor.rgb;
#endif
#endif
#ifdef SPECULARTERM
var finalSpecular: vec3f=specularBase*specularColor;
#ifdef SPECULAROVERALPHA
alpha=clamp(alpha+dot(finalSpecular, vec3f(0.3,0.59,0.11)),0.0,1.0);
#endif
#else
var finalSpecular: vec3f= vec3f(0.0);
#endif
#ifdef REFLECTIONOVERALPHA
alpha=clamp(alpha+dot(reflectionColor.rgb, vec3f(0.3,0.59,0.11)),0.0,1.0);
#endif
#ifdef EMISSIVEASILLUMINATION
var color: vec4f= vec4f(clamp(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+emissiveColor+refractionColor.rgb,0.0,1.0),alpha);
#else
var color: vec4f= vec4f(finalDiffuse*baseAmbientColor+finalSpecular+reflectionColor.rgb+refractionColor.rgb,alpha);
#endif
#ifdef LIGHTMAP
#ifndef LIGHTMAPEXCLUDED
#ifdef USELIGHTMAPASSHADOWMAP
color=vec4f(color.rgb*lightmapColor.rgb,color.a);
#else
color=vec4f(color.rgb+lightmapColor.rgb,color.a);
#endif
#endif
#endif
#define CUSTOM_FRAGMENT_BEFORE_FOG
color=vec4f(max(color.rgb,vec3f(0.)),color.a);
#include<logDepthFragment>
#include<fogFragment>
#ifdef IMAGEPROCESSINGPOSTPROCESS
color=vec4f(toLinearSpaceVec3(color.rgb),color.a);
#else
#ifdef IMAGEPROCESSING
color=vec4f(toLinearSpaceVec3(color.rgb),color.a);color=applyImageProcessing(color);
#endif
#endif
color=vec4f(color.rgb,color.a*mesh.visibility);
#ifdef PREMULTIPLYALPHA
color=vec4f(color.rgb*color.a, color.a);
#endif
#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR
#ifdef PREPASS
var writeGeometryInfo: f32=select(0.0,1.0,color.a>0.4);var fragData: array<vec4<f32>,SCENE_MRT_COUNT>;fragData[0]=color; 
#ifdef PREPASS_POSITION
fragData[PREPASS_POSITION_INDEX]= vec4f(fragmentInputs.vPositionW,writeGeometryInfo);
#endif
#ifdef PREPASS_LOCAL_POSITION
fragData[PREPASS_LOCAL_POSITION_INDEX] =
vec4f(fragmentInputs.vPosition,writeGeometryInfo);
#endif
#ifdef PREPASS_VELOCITY
var a: vec2f=(fragmentInputs.vCurrentPosition.xy/fragmentInputs.vCurrentPosition.w)*0.5+0.5;var b: vec2f=(fragmentInputs.vPreviousPosition.xy/fragmentInputs.vPreviousPosition.w)*0.5+0.5;var velocity: vec2f=abs(a-b);velocity= vec2f(pow(velocity.x,1.0/3.0),pow(velocity.y,1.0/3.0))*sign(a-b)*0.5+0.5;fragData[PREPASS_VELOCITY_INDEX]= vec4f(velocity,0.0,writeGeometryInfo);
#elif defined(PREPASS_VELOCITY_LINEAR)
var velocity : vec2f=vec2f(0.5)*((fragmentInputs.vPreviousPosition.xy /
fragmentInputs.vPreviousPosition.w) -
(fragmentInputs.vCurrentPosition.xy /
fragmentInputs.vCurrentPosition.w));fragData[PREPASS_VELOCITY_LINEAR_INDEX] =
vec4f(velocity,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_IRRADIANCE
fragData[PREPASS_IRRADIANCE_INDEX] =
vec4f(0.0,0.0,0.0,
writeGeometryInfo); 
#endif
#ifdef PREPASS_DEPTH
fragData[PREPASS_DEPTH_INDEX]=vec4f(fragmentInputs.vViewPos.z,0.0,0.0,
writeGeometryInfo); 
#endif
#ifdef PREPASS_SCREENSPACE_DEPTH
fragData[PREPASS_SCREENSPACE_DEPTH_INDEX] =
vec4f(fragmentInputs.position.z,0.0,0.0,writeGeometryInfo);
#endif
#ifdef PREPASS_NORMAL
#ifdef PREPASS_NORMAL_WORLDSPACE
fragData[PREPASS_NORMAL_INDEX] =
vec4f(normalW,writeGeometryInfo); 
#else
fragData[PREPASS_NORMAL_INDEX] =
vec4f(normalize((scene.view*vec4f(normalW,0.0)).rgb),
writeGeometryInfo); 
#endif
#endif
#ifdef PREPASS_WORLD_NORMAL
fragData[PREPASS_WORLD_NORMAL_INDEX] =
vec4f(normalW*0.5+0.5,writeGeometryInfo); 
#endif
#ifdef PREPASS_ALBEDO_SQRT
fragData[PREPASS_ALBEDO_SQRT_INDEX] =
vec4f(0.0,0.0,0.0,
writeGeometryInfo); 
#endif
#ifdef PREPASS_REFLECTIVITY
#if defined(SPECULARTERM)
#if defined(SPECULAR)
fragData[PREPASS_REFLECTIVITY_INDEX] =
vec4f(toLinearSpaceVec4(specularMapColor)) *
writeGeometryInfo; 
#else
fragData[PREPASS_REFLECTIVITY_INDEX] =
vec4f(toLinearSpaceVec3(specularColor),1.0)*writeGeometryInfo;
#endif
#else
fragData[PREPASS_REFLECTIVITY_INDEX] =
vec4f(0.0,0.0,0.0,1.0)*writeGeometryInfo;
#endif
#endif
#if SCENE_MRT_COUNT>0
fragmentOutputs.fragData0=fragData[0];
#endif
#if SCENE_MRT_COUNT>1
fragmentOutputs.fragData1=fragData[1];
#endif
#if SCENE_MRT_COUNT>2
fragmentOutputs.fragData2=fragData[2];
#endif
#if SCENE_MRT_COUNT>3
fragmentOutputs.fragData3=fragData[3];
#endif
#if SCENE_MRT_COUNT>4
fragmentOutputs.fragData4=fragData[4];
#endif
#if SCENE_MRT_COUNT>5
fragmentOutputs.fragData5=fragData[5];
#endif
#if SCENE_MRT_COUNT>6
fragmentOutputs.fragData6=fragData[6];
#endif
#if SCENE_MRT_COUNT>7
fragmentOutputs.fragData7=fragData[7];
#endif
#endif
#if !defined(PREPASS) && !defined(ORDER_INDEPENDENT_TRANSPARENCY)
fragmentOutputs.color=color;
#endif
#include<oitFragment>
#if ORDER_INDEPENDENT_TRANSPARENCY
if (fragDepth==nearestDepth) {fragmentOutputs.frontColor=vec4f(fragmentOutputs.frontColor.rgb+color.rgb*color.a*alphaMultiplier,1.0-alphaMultiplier*(1.0-color.a));} else {fragmentOutputs.backColor+=color;}
#endif
#define CUSTOM_FRAGMENT_MAIN_END
}
`;a.v.ShadersStoreWGSL[o]=i;let f={name:o,shader:i}}}]);