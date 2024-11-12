import cls from './StarRaiting.module.scss';
import { memo, useState, type PropsWithChildren } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '../Icon/Icon';
import Star from '@/shared/assets/icons/star.svg';

interface StarRaitingProps {
  className?: string;
  size?: number;
  selectedStars?: number;
  onSelect?: (value: number) => void;
}

const stars = [1, 2, 3, 4, 5];

export const StarRaiting = memo((props: PropsWithChildren<StarRaitingProps>) => {
  const { className, size = 30, selectedStars = 0, onSelect } = props;
  const [hoveredRaiting, setHoveredRating] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (starNumber: number) => () => {
    if (!isSelected) {
      setHoveredRating(starNumber);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setHoveredRating(0);
    }
  };

  const onClick = (starNumber: number) => () => {
    if (!isSelected) {
      onSelect?.(starNumber);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames(cls.StarRaiting, {}, [className])}>
      {stars.map(star => (
        <Icon
          onMouseEnter={onHover(star)}
          onMouseLeave={onLeave}
          onClick={onClick(star)}
          className={classNames(
            cls.Icon,
            {
              [hoveredRaiting >= star ? cls.hovered : cls.normal]: true,
              [cls.selected]: isSelected,
            },
            []
          )}
          width={size}
          height={size}
          key={star}
          Svg={Star}
        />
      ))}
    </div>
  );
});