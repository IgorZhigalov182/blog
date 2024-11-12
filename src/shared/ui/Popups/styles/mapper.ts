import cls from './popup.module.scss';

export type DropdownDirection = 'top left' | 'top right' | 'bottom left' | 'bottom right';

export const mapDirection: Record<DropdownDirection, string> = {
  'top left': cls.optionTopLeft,
  'top right': cls.optionTopRight,
  'bottom right': cls.optionBottomRight,
  'bottom left': cls.optionBottomLeft,
};
