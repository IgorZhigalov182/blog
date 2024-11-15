export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLE = 'article',
  ARTICLE_DETAILS = 'articles',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN = 'admin',
  FORBIDDEN = 'forbidden',

  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/', // + id
  [AppRoutes.ARTICLE]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + id
  [AppRoutes.ARTICLE_CREATE]: '/articles/new', // + id
  [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit', // + id
  [AppRoutes.ADMIN]: '/admin',
  [AppRoutes.FORBIDDEN]: '/forbidden',

  // последний
  [AppRoutes.NOT_FOUND]: '*',
};
