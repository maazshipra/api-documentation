const menuConfig = [
  {
    title: 'ET  ERP',
    type: 'group',
    children: [
      { label: 'Introduction', path: '/' },
      { label: 'Getting Started', path: '/getting-started' },
      { label: 'Errors and Response Codes', path: '/errors' },
    ],
  },
  {
    title: 'Authentication API',
    type: 'folder',
    children: [
      {
        title: 'Token',
        type: 'folder',
        children: [
          {
            method: 'POST',
            label: 'Generate Token',
            path: '/auth/token',
          },
          {
            method: 'POST',
            label: 'Logout',
            path: '/auth/logout',
          },
        ],
      },
    ],
  },
  {
    title: 'Orders',
    type: 'folder',
    children: [
      {
        title: 'Create / Update',
        type: 'folder',
        children: [
          {
            method: 'POST',
            label: 'Create Order',
            path: '/orders/create',
          },
          {
            method: 'PUT',
            label: 'Update Order',
            path: '/orders/update',
          },
        ],
      },
      {
        title: 'Fetch',
        type: 'folder',
        children: [
          {
            method: 'GET',
            label: 'Get Order',
            path: '/orders/get',
          },
        ],
      },
    ],
  },
];

export default menuConfig;
