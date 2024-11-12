import { Story } from '@storybook/react';
import { Suspense } from 'react';
import { Loader } from '@/shared/ui/Loader/Loader';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader';

export const SuspenseDecorator = (StoryComponent: Story) => (
  <Suspense fallback={<PageLoader />}>
    <StoryComponent />
  </Suspense>
);
