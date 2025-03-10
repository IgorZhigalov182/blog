import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from './ProfileCard';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
  title: 'entities/Profile/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

const args = {
  data: {
    username: 'admin',
    age: 25,
    country: Country.Russia,
    firstname: 'Igor',
    lastname: 'Zhigalov',
    city: 'Saint-Petersburg',
    currency: Currency.RUB,
    avatar:
      'https://img01.rl0.ru/afisha/e1200x800i/daily.afisha.ru/uploads/images/b/1e/b1e50b3d4d29c03bda90bde2593ead14.jpeg',
  },
};

export const Primary = Template.bind({});
Primary.args = args;

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.args = args;
PrimaryRedesigned.decorators = [NewDesignDecorator];

export const WithError = Template.bind({});
WithError.args = {
  error: 'error message',
};

export const WithErrorRedesigned = Template.bind({});
WithErrorRedesigned.args = {
  error: 'error message',
};
WithErrorRedesigned.decorators = [NewDesignDecorator];

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const LoadingRedesigned = Template.bind({});
LoadingRedesigned.args = {
  isLoading: true,
};
LoadingRedesigned.decorators = [NewDesignDecorator];
