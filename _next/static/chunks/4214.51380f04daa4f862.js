"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4214],{12756:function(e,n,o){var r=o(35606);let i=`#ifdef WEBGL2
uniform vec4 color;uniform mat4 world;uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
#else
layout(std140,column_major) uniform;uniform BoundingBoxRenderer {vec4 color;mat4 world;mat4 viewProjection;mat4 viewProjectionR;};
#endif
`;r.v.IncludesShadersStore.boundingBoxRendererUboDeclaration=i},54214:function(e,n,o){o.r(n),o.d(n,{boundingBoxRendererPixelShader:function(){return a}});var r=o(35606);let i=`uniform vec4 color;
`;r.v.IncludesShadersStore.boundingBoxRendererFragmentDeclaration=i,o(12756);let d="boundingBoxRendererPixelShader",t=`#include<__decl__boundingBoxRendererFragment>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
gl_FragColor=color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;r.v.ShadersStore[d]=t;let a={name:d,shader:t}}}]);