## Декораторы (Decorators)

- [FeatureFlagDecorator](/src/shared/config/storybook/FeatureFlagDecorator/FeatureFlagDecorator.tsx) - Необходим для задания фича флагов, при редизайне или замене какого-либо функционала.

- [NewDesignDecorator](/src/shared/config/storybook/NewDesignDecorator/NewDesignDecorator.tsx) - Необходим для редизайна проекта. Устанавливает фича флаг isAppRedesigned (true), оборачивает стори компонент классом app_redesigned.

- [RouterDecorator](/src/shared/config/storybook/RouterDecorator/RouterDecorator.tsx) - Необходим для роутинга в стори компонентах.

- [StoreDecorator](/src/shared/config/storybook/StoreDecorator/StoreDecorator.tsx) - Необходим для поддержки redux в стори компонентах. Декоратор принимает часть стейта, и, оборачивает компонент стор провайдером.

- [StyleDecorator](/src/shared/config/storybook/StyleDecorator/StyleDecorator.tsx) - Необходим для утилизации глобальных индексных стилей

- [SuspenseDecorator](/src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator.tsx) - Оборачивает стори компонент в Suspsense, показывая fallback в момент загрузки компонента.

- [ThemeDecorator](/src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx) - Добавляет возмонжность задать тему для стори компонента.
