## Декораторы (Decorators)

- [FeatureFlagDecorator](/src/shared/config/storybook/FeatureFlagDecorator) - Необходим для задания фича флагов, при редизайне или замене какого-либо функционала.

- [NewDesignDecorator](/src/shared/config/storybook/NewDesignDecorator) - Необходим для редизайна проекта. Устанавливает фича флаг isAppRedesigned (true), оборачивает стори компонент классом app_redesigned.

- [RouterDecorator](/src/shared/config/storybook/RouterDecorator) - Необходим для роутинга в стори компонентах.

- [StoreDecorator](/src/shared/config/storybook/StoreDecorator) - Необходим для поддержки redux в стори компонентах. Декоратор принимает часть стейта, и, оборачивает компонент стор провайдером.

- [StyleDecorator](/src/shared/config/storybook/StyleDecorator) - Необходим для утилизации глобальных индексных стилей

- [SuspenseDecorator](/src/shared/config/storybook/SuspenseDecorator) - Оборачивает стори компонент в Suspsense, показывая fallback в момент загрузки компонента.

- [ThemeDecorator](/src/shared/config/storybook/ThemeDecorator) - Добавляет возмонжность задать тему для стори компонента.
