import { lazy } from 'react';

export default [
  {
    path: '/',
    Page: lazy(() => import('pages/Home')),
  },
];
