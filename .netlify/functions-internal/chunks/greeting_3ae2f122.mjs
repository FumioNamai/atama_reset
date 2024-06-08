export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/greeting_be1c3ff3.mjs').then(n => n.g);

export { page };
