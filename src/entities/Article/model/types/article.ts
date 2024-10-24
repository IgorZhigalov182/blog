import { User } from 'entities/User';

export enum ArticleBlockType {
  TEXT = 'TEXT',
  CODE = 'CODE',
  IMAGE = 'IMAGE',
}

export enum ArticleView {
  LIST = 'LIST',
  GRID = 'GRID',
}

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export enum ArticleType {
  ALL = 'ALL',
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

export interface Article {
  id: string;
  title: string;
  user: User;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}

export interface ArticleDetailsSchema {
  isLoading: boolean;
  error?: string;
  data?: Article;
}

export enum ArticleSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'createdAt',
}
