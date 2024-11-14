import { Story } from '@storybook/react';
import { Suspense } from 'react';
import { PageLoader } from '@/widgets/PageLoader';

export const SuspenseDecorator = (StoryComponent: Story) => (
  <Suspense fallback={<PageLoader />}>
    <StoryComponent />
  </Suspense>
);
