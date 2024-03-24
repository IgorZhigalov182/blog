import { Loader } from 'shared/ui/Loader/Loader';
import type { PropsWithChildren } from 'react';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = (props: PropsWithChildren<PageLoaderProps>) => {
    const { className } = props;

    return (
        <div className={cls.pageLoader}>
            <Loader />
        </div>
    );
};
