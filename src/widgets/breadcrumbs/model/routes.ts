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
      {
        path: 'collections',
        breadcrumb: 'Коллекции',

        children: [
          {
            path: '/collections/:collectionId',
            breadcrumb: 'Вопросы коллекции',
            children: [
              {
                path: '/collections/:collectionId/questions/:id',
                breadcrumb: 'Подробный разбор',
              },
            ],
          },
        ],
      },
    ],
  },
];
