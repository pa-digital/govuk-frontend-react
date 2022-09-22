import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from '../../UI/Typography/Header';

export default {
  title: 'Components/Typography/Header/Implementation',
  component: Header,
} as ComponentMeta<typeof Header>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  as: 'h1',
  children: 'Heading 1 Text',
};

export const H2 = Template.bind({});
H2.args = {
  as: 'h2',
  children: 'Heading 2 Text',
};

export const H3 = Template.bind({});
H3.args = {
  as: 'h3',
  children: 'Heading 3 Text',
};

export const H4 = Template.bind({});
H4.args = {
  as: 'h4',
  children: 'Heading 4 Text',
};
