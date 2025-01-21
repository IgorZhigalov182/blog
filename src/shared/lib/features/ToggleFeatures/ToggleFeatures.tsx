import { ReactElement } from 'react';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { getFeatureFlag } from '../setGetFeatures';

interface ToggleFeaturesOptions {
  feature: keyof FeatureFlags;
  on: ReactElement;
  off: ReactElement;
}

export function ToggleFeatures(props: ToggleFeaturesOptions) {
  const { on, off, feature } = props;

  if (getFeatureFlag(feature)) {
    return on;
  }

  return off;
}
