import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { UserSchema, User } from './model/types/user';
import { userReducer, userActions } from './model/slice/userSlice';

export { userReducer, userActions, UserSchema, User, getUserAuthData };
