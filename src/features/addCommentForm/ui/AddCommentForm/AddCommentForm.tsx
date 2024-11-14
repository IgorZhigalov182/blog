import { memo, useCallback, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { HStack } from '@/shared/ui/Stack';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: PropsWithChildren<AddCommentFormProps>) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);
  const dispatch = useAppDispatch();

  const onCommentFormChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch]
  );

  const onSendDecorator = useCallback(() => {
    onSendComment(text || '');
    onCommentFormChange('');
  }, [onCommentFormChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack justify="between" max className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input
          placeholder={t('Введите текст комментария')}
          value={text}
          onChange={onCommentFormChange}
          className={cls.input}
        />
        <Button onClick={onSendDecorator}>{t('Отправить')}</Button>
      </HStack>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
