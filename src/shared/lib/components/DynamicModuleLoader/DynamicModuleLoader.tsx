import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { useEffect } from 'react';
import type { FC } from 'react';
import { useDispatch, useStore } from 'react-redux';

interface DynamicModuleLoaderProps {
    reducers: ReducersList,
    removeAfterUnmount?: boolean
}

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { children, reducers, removeAfterUnmount } = props;
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
                    store.reducerManager.add(name, reducer);
                    dispatch({ type: `@INIT ${name} reducer` });
                });
            }
        };
        //eslint-disable-next-line
    }, []);

    return (
        //eslint-disable-next-line
        <>
            {children}
        </>
    );
}