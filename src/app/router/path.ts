export const routePath = {
  MAIN: '/',
  MY: '/MY',
  CREATE: '/create',
  DETAIL: '/posts/:id',
} as const;

export type Routes = (typeof routePath)[keyof typeof routePath];
