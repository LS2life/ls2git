import * as server from '../entries/pages/todos/_page.server.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/todos/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/todos/_page.svelte-7c1543fa.js';
export { server };
export const imports = ["_app/immutable/components/pages/todos/_page.svelte-7c1543fa.js","_app/immutable/chunks/index-66220184.js","_app/immutable/chunks/singletons-91c366fa.js","_app/immutable/chunks/index-e366d1ab.js"];
export const stylesheets = ["_app/immutable/assets/_page-5c3529b5.css"];
