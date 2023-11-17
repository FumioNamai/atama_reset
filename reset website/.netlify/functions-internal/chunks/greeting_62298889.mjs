export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/greeting_9b671e54.mjs').then(n => n.g);

export { page };
