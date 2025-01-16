const firstCharToUppercase = require('../firstCharUpperCase');

module.exports = (componentName) => {
  const upperName = firstCharToUppercase(componentName);

  return `
import { classNames } from '@/shared/lib/classNames/classNames';
import {  memo, PropsWithChildren } from 'react';
import cls from './${upperName}.module.scss';

interface ${upperName}Props {
    className?: string;
}

export const ${upperName} = memo((props: PropsWithChildren<${upperName}Props>) => {
    const {
        className,
        children,
    } = props;

    return (
        <div
            className={classNames(cls.${componentName}, {}, [className])}
        >
            {children}
        </div>
    );
});
`;
};
