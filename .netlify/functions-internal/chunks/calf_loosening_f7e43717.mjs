export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/calf_loosening_b0161603.mjs').then(n => n.c);

export { page };
