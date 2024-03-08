import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

import type { PropsWithChildren } from 'react';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = (props: PropsWithChildren<PageLoaderProps>) => {
    const { className } = props;

    return (
        <div className={cls.pageLoader}>
            <Loader />
        </div>
    )
}