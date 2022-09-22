import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../../UI/Buttons/Button';

export default {
  title: 'Components/Buttons/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
  type: 'button',
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  type: 'button',
  children: 'Button',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  type: 'button',
  children: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  type: 'button',
  children: 'Button',
  disabled: true,
};
