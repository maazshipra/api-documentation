const menuConfig = [
  {
    title: 'ET  ERP',
    type: 'group',
    children: [
      { label: 'Introduction', path: '/' },
      { label: 'Getting Started', path: '/' },
      { label: 'Errors and Response Codes', path: '/' },
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
            path: '/',
          },
          {
            method: 'POST',
            label: 'Logout',
            path: '/',
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
            path: '/',
          },
          {
            method: 'PUT',
            label: 'Update Order',
            path: '/',
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
            path: '/',
          },
        ],
      },
    ],
  },
];

export default menuConfig;
