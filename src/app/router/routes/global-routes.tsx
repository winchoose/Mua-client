import { routePath } from '@app/router/path';
import { CreatPage, MainPage, MyPage } from '@app/router/lazy';

export const globalRoutes = [
  {
    path: routePath.MAIN,
    element: <MainPage />,
  },
  {
    path: '/my',
    element: <MyPage />,
  },
  {
    path: '/create',
    element: <CreatPage />,
  },
];
