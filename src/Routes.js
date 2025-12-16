import React, { useRoutes } from 'react-router-dom';
import Layout from 'src/components/Layout/Layout';
import { ACTIONS } from 'src/utils/roles/actions';
import AccessControl from 'src/components/AccessControl';
import StatusCode403 from 'src/pages/StatusCode/403';
import StatusCode404 from 'src/pages/StatusCode/404';
import Test1 from 'src/pages/Test/Test1';
import Test2 from 'src/pages/Test/Test2';

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: 'test1/',
          element: (
            <AccessControl
              action={ACTIONS.TEST.VISIT}
              optionalChildren={<StatusCode403 />}
            >
              <Test1 />
            </AccessControl>
          ),
        },
        {
          path: 'test2/',
          element: <Test2 />,
        },
      ],
    },
    {
      path: '*',
      element: <StatusCode404 />,
    },
  ]);

  return routes;
}
