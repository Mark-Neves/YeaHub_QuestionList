export const routes = [
  {
    path: '/',
    breadcrumb: 'Главная',
    children: [
      {
        path: '/questions',
        breadcrumb: 'База вопросов',
        children: [{ path: '/questions/:id', breadcrumb: 'Подробный разбор' }],
      },
    ],
  },
];
