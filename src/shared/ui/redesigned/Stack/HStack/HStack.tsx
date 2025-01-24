import { type PropsWithChildren } from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'> & {
  className?: string;
};

export const HStack = (props: PropsWithChildren<HStackProps>) => (
  <Flex
    direction="row"
    {...props}
  />
);
