export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./prerender_d8e693b6.mjs').then(n => n.s);

export { page };
