import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { EditableProfileCard } from './EditableProfileCard';
import { Profile } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
// eslint-disable-next-line
import { profileReducer } from '@/features/EditableProfileCard/model/slice/ProfileSlice';
import { $api } from '@/shared/api/api';

const profile: Profile = {
  id: '1',
  firstname: 'admin',
  lastname: 'admin',
  age: 25,
  currency: Currency.USD,
  country: Country.Russia,
  city: 'Saint-Petersburg',
  username: 'admin',
  avatar:
    'https://img01.rl0.ru/afisha/e1200x800i/daily.afisha.ru/uploads/images/b/1e/b1e50b3d4d29c03bda90bde2593ead14.jpeg',
};

const options = {
  initialState: {
    profile: {
      data: profile,
      form: profile,
      readonly: true,
    },
    user: {
      authData: { id: '1', username: 'admin' },
    },
  },
  asyncReducers: { profile: profileReducer },
};

describe('features/EditableProfileCard', () => {
  test('Readonly mode should be toggle', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    const editBtn = screen.getByTestId('EditableProfileCardHeader.EditBtn');

    await userEvent.click(editBtn);
    expect(editBtn).toBeInTheDocument();
  });

  test('By canceling values are returns', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    const editBtn = screen.getByTestId('EditableProfileCardHeader.EditBtn');
    await userEvent.click(editBtn);

    const inputFirstname = screen.getByTestId('ProfileCard.firstname');
    await userEvent.clear(inputFirstname);
    await userEvent.type(inputFirstname, 'user');

    expect(inputFirstname).toHaveValue('user');

    const cancelBtn = screen.getByTestId('EditableProfileCardHeader.CancelBtn');
    await userEvent.click(cancelBtn);

    expect(inputFirstname).toHaveValue(
      options.initialState.profile.data.firstname,
    );
  });

  test('Validations should be triggered', async () => {
    componentRender(<EditableProfileCard id="1" />, options);

    const editBtn = screen.getByTestId('EditableProfileCardHeader.EditBtn');
    await userEvent.click(editBtn);

    const inputFirstname = screen.getByTestId('ProfileCard.firstname');
    await userEvent.clear(inputFirstname);

    expect(inputFirstname).toHaveValue('');

    const saveBtn = screen.getByTestId('EditableProfileCardHeader.SaveBtn');
    await userEvent.click(saveBtn);

    expect(
      screen.getByTestId('EditableProfileCard.Error.Paragraph'),
    ).toBeInTheDocument();
  });

  test('Success update user profile', async () => {
    const mockPutReq = jest.spyOn($api, 'put');

    componentRender(<EditableProfileCard id="1" />, options);

    const editBtn = screen.getByTestId('EditableProfileCardHeader.EditBtn');
    await userEvent.click(editBtn);

    const inputFirstname = screen.getByTestId('ProfileCard.firstname');
    await userEvent.clear(inputFirstname);
    await userEvent.type(inputFirstname, 'Alex');
    expect(inputFirstname).toHaveValue('Alex');

    const saveBtn = screen.getByTestId('EditableProfileCardHeader.SaveBtn');
    await userEvent.click(saveBtn);

    expect(mockPutReq).toHaveBeenCalled();
  });
});
