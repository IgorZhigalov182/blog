import './Loader.scss';

import type { PropsWithChildren } from 'react';

interface LoaderProps {
    className?: string;
}

export const Loader = (props: PropsWithChildren<LoaderProps>) => {
    const { className } = props;

    return (
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    )
}