import { matchRoutes, useLocation } from 'react-router-dom';
import { routes } from './routes';

export function useBreadcrumbs() {
  const location = useLocation();
  const matches = matchRoutes(routes, location);
  const breadcrumbs =
    matches?.map((match) => {
      const route = match.route;
      return { path: match.pathname, label: route.breadcrumb };
    }) ?? [];
  return { breadcrumbs };
}
