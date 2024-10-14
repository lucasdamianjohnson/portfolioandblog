"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7889],{47889:function(e,i,t){t.r(i),t.d(i,{postprocessVertexShader:function(){return c}});var o=t(35606);let s="postprocessVertexShader",n=`attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;o.v.ShadersStore[s]=n;let c={name:s,shader:n}}}]);