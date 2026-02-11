import { QueryProvider } from 'src/app/providers/query-provider.tsx';
import { RouterProvider } from 'react-router-dom';
import { router } from '@app/router/router';

function App() {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  );
}

export default App;
