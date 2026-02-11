export const routePath = {
  MAIN: '/',
  MY: '/my',
  CREATE: '/create',
  DETAIL: '/posts/:id',
  NICKNAMECHAGE: '/my/nickname',
} as const;

export type Routes = (typeof routePath)[keyof typeof routePath];
