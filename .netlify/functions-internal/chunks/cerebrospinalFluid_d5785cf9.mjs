export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/cerebrospinalFluid_ab748b1e.mjs').then(n => n.c);

export { page };
