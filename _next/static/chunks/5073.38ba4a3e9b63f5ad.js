"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5073],{75073:function(e,n,r){r.r(n),r.d(n,{boundingBoxRendererPixelShaderWGSL:function(){return i}});var t=r(35606);let u="boundingBoxRendererPixelShader",o=`uniform color: vec4f;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
fragmentOutputs.color=uniforms.color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;t.v.ShadersStoreWGSL[u]=o;let i={name:u,shader:o}}}]);