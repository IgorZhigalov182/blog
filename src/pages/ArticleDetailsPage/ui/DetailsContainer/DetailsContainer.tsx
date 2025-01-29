import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui';

interface DetailsContainerProps {
  className?: string;
}

export const DetailsContainer = ({ className }: DetailsContainerProps) => {
  const { id } = useParams<{ id: string }>();

  return (
    <Card
      max
      className={className}
      padding="24"
      border="partial"
    >
      <ArticleDetails id={id} />
    </Card>
  );
};
