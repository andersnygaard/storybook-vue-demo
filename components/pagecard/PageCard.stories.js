import { linkTo } from '@storybook/addon-links';
import PageCard from './PageCard';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
    title: 'PageCard',
    component: PageCard,
    decorators: [withKnobs]
};

export const ToStorybook = () => ({
    components: { PageCard },
    props: {
        text: {
          default: text('Text', 'Hello Storybook')
        }
      },
      template: `<page-card>{{ text }}</page-card>`
});


ToStorybook.story = {
    name: 'Text content',
};
