import { type PropsWithChildren } from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'> & {
  className?: string;
};

export const VStack = (props: PropsWithChildren<VStackProps>) => {
  const { align = 'start' } = props;

  return <Flex direction="column" {...props} align={align} />;
};
