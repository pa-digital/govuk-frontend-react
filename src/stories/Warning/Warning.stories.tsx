import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Warning } from '../../UI/Warning/Warning';

export default {
  title: 'Components/Warning/Implementation',
  component: Warning,
} as ComponentMeta<typeof Warning>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Warning> = (args) => (
  <div className="js-enabled">
    <Warning {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
    children: "You can be fined up to £5,000 if you do not register."
};