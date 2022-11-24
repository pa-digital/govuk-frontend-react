import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Content } from '../../src/UI/Typography/Content';

export default {
  title: 'Components/Typography/Content/Implementation',
  component: Content,
} as ComponentMeta<typeof Content>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Content> = (args) => (
  <Content {...args} />
);

export const Default = Template.bind({});
Default.args = {
  as: 'p',
  children: 'This is the content',
};

export const Pre = Template.bind({});
Pre.args = {
  as: 'pre',
  children: 'This is the content',
};
