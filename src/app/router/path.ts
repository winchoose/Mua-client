export const routePath = {
  MAIN: '/',
  MY: '/MY',
  CREATE: '/create',
} as const;

export type Routes = (typeof routePath)[keyof typeof routePath];
