import { useTranslation } from 'react-i18next';
import { User } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar, Button, HStack, Text, VStack } from '@/shared/ui';
import cls from './ArticleAdditionalInfo.module.scss';

type ArticleAdditionalInfoProps = {
  className?: string;
  author: User;
  createdAt: string;
  views: number;
  onEdit: () => void;
};

export const ArticleAdditionalInfo = (props: ArticleAdditionalInfoProps) => {
  const { className, createdAt, author, views, onEdit } = props;
  const { t } = useTranslation();

  return (
    <VStack
      gap="32"
      className={classNames(cls.ArticleAdditionalInfo, {}, [className])}
    >
      <HStack gap="8">
        <Avatar
          src={author.avatar}
          size={32}
        />
        <Text
          bold
          text={author.username}
        />
        <Text text={createdAt} />
      </HStack>
      <Button onClick={onEdit}>{t('Редактировать')}</Button>
      <Text text={t('{{count}} просмотров', { count: views })} />
    </VStack>
  );
};
