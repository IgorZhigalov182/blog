import { FC, lazy } from 'react';
// @ts-ignore
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(
  () => import('./AddCommentForm'),
);
