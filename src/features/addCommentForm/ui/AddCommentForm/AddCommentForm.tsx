import { memo, useCallback, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  Button,
  Input,
  HStack,
  InputDeprecated,
  ButtonDeprecated,
  Card,
} from '@/shared/ui';
import {
  getAddCommentFormText,
  // @ts-ignore
} from '../../model/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';
import {
  addCommentFormActions,
  addCommentFormReducer,
  // @ts-ignore
} from '../../model/slice/addCommentFormSlice';
import { ToggleFeatures } from '@/shared/lib/features';

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
  const dispatch = useAppDispatch();

  const onCommentFormChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const onSendDecorator = useCallback(() => {
    onSendComment(text || '');
    onCommentFormChange('');
  }, [onCommentFormChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <ToggleFeatures
        feature="isAppRedesigned"
        off={
          <HStack
            justify="between"
            max
            className={classNames(cls.AddCommentForm, {}, [className])}
            data-testid="AddCommentForm"
          >
            <InputDeprecated
              placeholder={t('Введите текст комментария')}
              value={text}
              onChange={onCommentFormChange}
              className={cls.input}
              data-testid="AddCommentForm.Input"
            />
            <ButtonDeprecated
              onClick={onSendDecorator}
              data-testid="AddCommentForm.Button"
            >
              {t('Отправить')}
            </ButtonDeprecated>
          </HStack>
        }
        on={
          <Card
            padding="24"
            border="partial"
            max
          >
            <HStack
              justify="between"
              max
              gap="16"
              className={classNames(cls.AddCommentFormRedesigned, {}, [
                className,
              ])}
              data-testid="AddCommentForm"
            >
              <Input
                placeholder={t('Введите текст комментария')}
                value={text}
                onChange={onCommentFormChange}
                className={cls.input}
                data-testid="AddCommentForm.Input"
              />
              <Button
                onClick={onSendDecorator}
                data-testid="AddCommentForm.Button"
              >
                {t('Отправить')}
              </Button>
            </HStack>
          </Card>
        }
      />
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
