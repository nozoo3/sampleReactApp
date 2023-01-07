import { Suspense } from 'react';
import { Outlet, useRoutes } from 'react-router-dom';

import { MainLayout } from '@/components/ui/Layout/MainLayout';
import NoMatch from '@/components/pages/Nomatch/Nomatch';
import { Spinner } from '@/components/ui/Spinner';
import { lazyImport } from '@/utils/lazyImport';

const { Home } = lazyImport(() => import('@/components/pages/Home'), 'Home');
const { About } = lazyImport(() => import('@/components/pages/About'), 'About');
const { Contact } = lazyImport(() => import('@/components/pages/Contact'), 'Contact');

export const AppRoutes = () => {
  const App = () => {
    return (
      <MainLayout>
        <Suspense
          fallback={
            <div className="h-full w-full flex items-center justify-center">
              <Spinner size="xl" />
              loading
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </MainLayout>
    );
  };

  const commonRoutes = [
    {
      element: <App />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/contact', element: <Contact /> },
        { path: '*', element: <NoMatch /> },
      ],
    },
  ];

  const element = useRoutes([...commonRoutes]);

  return <>{element}</>;
};
