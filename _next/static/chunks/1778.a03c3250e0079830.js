"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1778],{18503:function(e,r,n){n(29427).v.IncludesShadersStore.kernelBlurVaryingDeclaration="varying vec2 sampleCoord{X};"},1778:function(e,r,n){n.r(r),n.d(r,{kernelBlurVertexShader:function(){return l}});var a=n(29427);n(18503),a.v.IncludesShadersStore.kernelBlurVertex="sampleCoord{X}=sampleCenter+delta*KERNEL_OFFSET{X};";let t="kernelBlurVertexShader",i=`attribute vec2 position;uniform vec2 delta;varying vec2 sampleCenter;
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
sampleCenter=(position*madd+madd);
#include<kernelBlurVertex>[0..varyingCount]
gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;a.v.ShadersStore[t]=i;let l={name:t,shader:i}}}]);