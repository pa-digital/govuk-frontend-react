import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Content } from '../../UI/Typography/Content';

export default {
  title: 'Components/Typography/Content/Implementation',
  component: Content,
} as ComponentMeta<typeof Content>;

export const Paragraph: Story = {
  args: {
    as: 'p',
    children: 'This is the content',
  },
};

export const Pre: Story = {
  args: {
    as: 'pre',
    children: 'This is the content',
  },
};
