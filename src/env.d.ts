/// <reference types="vite/client" />

declare module 'vue3-markdown-it';
declare module 'particles.vue3';
declare module 'vue3-print-nb';
declare module '@graphql-typed-document-node/core';
declare module 'graphql';
declare module 'villus';

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
