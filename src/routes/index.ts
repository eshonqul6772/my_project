import { lazy } from 'react';

export default [
  {
    path: '/',
    Page: lazy(() => import('@/pages/Home')),
  },
  {
    path: '/about',
    Page: lazy(() => import('@/pages/About')),
  },
  {
    path: '/resume',
    Page: lazy(() => import('@/pages/Resume')),
  },
  {
    path: '/services',
    Page: lazy(() => import('@/pages/Services')),
  },
  {
    path: '/portfolio',
    Page: lazy(() => import('@/pages/Portfolio')),
  },
  {
    path: '/contact',
    Page: lazy(() => import('@/pages/Contact')),
  },
];
