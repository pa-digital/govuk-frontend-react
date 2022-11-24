import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { CTAButton } from '../../src/UI/Buttons/CTAButton';

export default {
  title: 'Components/Buttons/CTAButton',
  component: CTAButton,
} as ComponentMeta<typeof CTAButton>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof CTAButton> = (args) => (
  <Router>
    <CTAButton {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
  children: 'Button',
  to: 'www.google.co.uk',
  assistiveText: 'Search using google',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Button',
  to: 'www.google.co.uk',
  assistiveText: 'Search using google',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  children: 'Button',
  to: 'www.google.co.uk',
  assistiveText: 'Search using google',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'primary',
  children: 'Button',
  to: 'www.google.co.uk',
  assistiveText: 'Search using google',
  disabled: true,
};
