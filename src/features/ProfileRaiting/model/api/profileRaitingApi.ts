import { rtkApi } from '@/shared/api/rtkApi';
import { ProfileRaiting } from '../types/ProfileRaiting';
import { Raiting } from '@/entities/Raiting';

interface RateProfile {
  profileId: string;
  userId: string;
  rate: number;
  feedback?: string;
}

const raitingApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    getProfileRaiting: build.query<Raiting[], ProfileRaiting>({
      query: ({ profileId, userId }) => ({
        url: '/profile-ratings',
        params: {
          profileId,
          userId,
        },
      }),
    }),

    rateProfile: build.mutation<void, RateProfile>({
      query: args => ({
        url: '/profile-ratings',
        method: 'POST',
        body: args,
      }),
    }),
  }),
});

export const { useGetProfileRaitingQuery } = raitingApi;
export const { useRateProfileMutation } = raitingApi;
