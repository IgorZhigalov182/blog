import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { UserRole } from '../../consts/userRole';

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;

export const getUserIsAdmin = createSelector(getUserRoles, (roles) => roles?.includes(UserRole.ADMIN));
export const getUserIsManager = createSelector(getUserRoles, (roles) => roles?.includes(UserRole.MANAGER));
