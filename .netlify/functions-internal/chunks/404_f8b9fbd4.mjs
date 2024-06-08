export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/404_e0b52eba.mjs').then(n => n._);

export { page };
