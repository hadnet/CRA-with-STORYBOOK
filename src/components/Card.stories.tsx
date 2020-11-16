import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
// eslint-disable-next-line import/no-webpack-loader-syntax
// import '!style-loader!css-loader!sass-loader!../assets/globals.storybook.scss';

import {Card, CardProps} from './Card';

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    primary: {control: 'boolean'},
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};
