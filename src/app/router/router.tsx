import { createBrowserRouter } from 'react-router-dom';
import { globalRoutes } from '@app/router/routes/global-routes';
import GlobalLayout from '@app/router/global-layout';

export const router = createBrowserRouter([
  {
    element: <GlobalLayout />,
    children: globalRoutes,
  },
]);
