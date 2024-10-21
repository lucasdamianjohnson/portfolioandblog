"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6018],{96018:function(e,n,r){r.r(n),r.d(n,{boundingBoxRendererVertexShaderWGSL:function(){return u}});var t=r(29427);let o="boundingBoxRendererVertexShader",i=`attribute position: vec3f;uniform world: mat4x4f;uniform viewProjection: mat4x4f;
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
var worldPos: vec4f=uniforms.world* vec4f(input.position,1.0);vertexOutputs.position=uniforms.viewProjection*worldPos;
#define CUSTOM_VERTEX_MAIN_END
}
`;t.v.ShadersStoreWGSL[o]=i;let u={name:o,shader:i}}}]);