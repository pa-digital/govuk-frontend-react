import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Details } from '../../UI/Details/Details';

export default {
  title: 'Components/Details/Implementation',
  component: Details,
} as ComponentMeta<typeof Details>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Details> = (args) => (
  <Details {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Details title',
  children: 'Content that is placed within the expandable details element',
};
