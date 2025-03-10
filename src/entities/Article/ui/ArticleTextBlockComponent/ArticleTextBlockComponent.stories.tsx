import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleBlockType } from '../../model/contst/articleConsts';
import { ArticleTextBlock } from '../../model/types/article';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
  title: 'entities/Article/ArticleTextBlockComponent',
  component: ArticleTextBlockComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticleTextBlockComponent>;

const Template: ComponentStory<typeof ArticleTextBlockComponent> = (args) => (
  <ArticleTextBlockComponent {...args} />
);

const blockArgs: ArticleTextBlock = {
  id: '4',
  type: ArticleBlockType.TEXT,
  paragraphs: [
    'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
    'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
    'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
  ],
};

export const Normal = Template.bind({});
Normal.args = { block: blockArgs };

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = { block: blockArgs };
NormalRedesigned.decorators = [NewDesignDecorator];
