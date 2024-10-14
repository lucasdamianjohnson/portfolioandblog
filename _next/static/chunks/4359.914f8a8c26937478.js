"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4359],{44228:function(e,o,i){var n=i(29427);let r=`#ifdef WEBGL2
uniform vec4 color;uniform mat4 world;uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
#else
layout(std140,column_major) uniform;uniform BoundingBoxRenderer {vec4 color;mat4 world;mat4 viewProjection;mat4 viewProjectionR;};
#endif
`;n.v.IncludesShadersStore.boundingBoxRendererUboDeclaration=r},94359:function(e,o,i){i.r(o),i.d(o,{boundingBoxRendererVertexShader:function(){return l}});var n=i(29427);let r=`uniform mat4 world;uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
`;n.v.IncludesShadersStore.boundingBoxRendererVertexDeclaration=r,i(44228);let t="boundingBoxRendererVertexShader",d=`attribute vec3 position;
#include<__decl__boundingBoxRendererVertex>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vec4 worldPos=world*vec4(position,1.0);
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {gl_Position=viewProjection*worldPos;} else {gl_Position=viewProjectionR*worldPos;}
#else
gl_Position=viewProjection*worldPos;
#endif
#define CUSTOM_VERTEX_MAIN_END
}
`;n.v.ShadersStore[t]=d;let l={name:t,shader:d}}}]);