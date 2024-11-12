import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../contst/validateProfileError';

export interface EditableProfilePageSchema {
  isLoading: boolean;
  error?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: ValidateProfileError[];
}

