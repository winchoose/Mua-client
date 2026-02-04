export const routePath = {
  MAIN: '/',
  MY: '/MY',
} as const;

export type Routes = (typeof routePath)[keyof typeof routePath];
