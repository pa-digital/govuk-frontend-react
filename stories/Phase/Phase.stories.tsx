import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Phase } from '../../src/UI/Phase/Phase';

export default {
  title: 'Components/Phase/Implementation',
  component: Phase,
} as ComponentMeta<typeof Phase>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Phase> = (args) => <Phase {...args} />;

export const Default = Template.bind({});
Default.args = {
  phase: 'ALPHA',
  children: 'Phase content which can contain a link',
};
