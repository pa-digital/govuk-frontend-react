import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { CTAButton } from '../../UI/Buttons/CTAButton';

const meta = {
  title: 'Components/Buttons/CTA Button',
  component: CTAButton,
} satisfies Meta<typeof CTAButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
    to: 'www.google.co.uk',
    assistiveText: 'Search using google',
  },
  render: function Render(args) {
    return (
      <Router>
        <CTAButton {...args}></CTAButton>
      </Router>
    );
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
    to: 'www.google.co.uk',
    assistiveText: 'Search using google',
  },
  render: function Render(args) {
    return (
      <Router>
        <CTAButton {...args}></CTAButton>
      </Router>
    );
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Button',
    to: 'www.google.co.uk',
    assistiveText: 'Search using google',
  },
  render: function Render(args) {
    return (
      <Router>
        <CTAButton {...args}></CTAButton>
      </Router>
    );
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
    to: 'www.google.co.uk',
    assistiveText: 'Search using google',
    disabled: true,
  },
  render: function Render(args) {
    return (
      <Router>
        <CTAButton {...args}></CTAButton>
      </Router>
    );
  },
};
