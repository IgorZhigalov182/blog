import { ReactElement } from 'react';
import { AppRoutes } from '@/shared/const/router';
import { ScrollToolbar } from '@/widgets/ScrollToolbar';
import { useRouteChange } from '@/shared/lib/route/useRouteChange';

export function useAppToolbar() {
  const currentRoute = useRouteChange();

  const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
    [AppRoutes.ARTICLE]: <ScrollToolbar />,
    [AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
    // eslint-disable-next-line
    [AppRoutes.MAIN]: <div>Main</div>,
  };

  return toolbarByAppRoute[currentRoute];
}
