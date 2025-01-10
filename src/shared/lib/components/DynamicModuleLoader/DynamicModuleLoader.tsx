import { Reducer } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { useStore } from 'react-redux';
import { StateSchema, StateSchemaKey } from '@/app/providers/StoreProvider/config/StateSchema';
import { ReduxStoreWithManager } from '@/app/providers/StoreProvider';
import { useAppDispatch } from '../../hooks';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
  children?: ReactNode;
}

type ReducersListEntry = [StateSchemaKey, Reducer];

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const { children, reducers, removeAfterUnmount = true } = props;
  const dispatch = useAppDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    const mountedReducers = store.reducerManager.getMountedReducers();

    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKey];

      if (!mounted) {
        store.reducerManager.add(name as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@Remove ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return (
    // eslint-disable-next-line
    <>{children}</>
  );
};
