import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { UserSchema, User } from './model/types/user';
import { userReducer, userActions } from './model/slice/userSlice';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';
import {
  getUserIsAdmin,
  getUserIsManager,
  getUserRoles,
} from './model/selectors/getUserRoles.ts/getUserRoles';
import { UserRole } from './model/consts/userRole';

export {
  getUserIsManager,
  getUserIsAdmin,
  userReducer,
  userActions,
  getUserAuthData,
  getUserInited,
  getUserRoles,
  UserRole,
};

export type { UserSchema, User };
