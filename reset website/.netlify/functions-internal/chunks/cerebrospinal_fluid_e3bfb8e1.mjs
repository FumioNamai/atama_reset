export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/cerebrospinal_fluid_b2e0876d.mjs').then(n => n.c);

export { page };
