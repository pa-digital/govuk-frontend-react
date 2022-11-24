import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Panel } from '../../src/UI/Panel/Panel';

export default {
  title: 'Components/Panel/Implementation',
  component: Panel,
} as ComponentMeta<typeof Panel>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Panel> = (args) => <Panel {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: 'Panel title',
  children: 'Panel content',
};
