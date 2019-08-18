import { configure, addParameters, addDecorator } from '@storybook/react';
import { themes } from '@storybook/theming';
import centered from '@storybook/addon-centered/react';

addDecorator(centered);

addParameters({
  options: {
    theme: themes.dark,
  },
  backgrounds: [
    { name: 'Twitter', value: '#00aced' },
    { name: 'Facebook', value: '#3b5998' },
    { name: 'Light', value: '#FFF' },
    { name: 'Dark', value: '#2F', default: true },
  ]
});
// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
