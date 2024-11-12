import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getScroll } from './getScroll';

export const getScrollByPath = createSelector(
  getScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0
);
