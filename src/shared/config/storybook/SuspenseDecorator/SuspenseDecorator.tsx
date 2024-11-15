import { Story } from '@storybook/react';
import { Suspense } from 'react';
// eslint-disable-next-line
import { PageLoader } from '@/widgets/PageLoader';

export const SuspenseDecorator = (StoryComponent: Story) => (
  <Suspense fallback={<PageLoader />}>
    <StoryComponent />
  </Suspense>
);
