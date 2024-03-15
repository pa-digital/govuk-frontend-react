import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../../UI/Typography/Header';

export default {
  title: 'Components/Typography/Header/Implementation',
  component: Header,
} as ComponentMeta<typeof Header>;

export const H1: Story = {
  args: {
    as: 'h1',
    children: 'Heading 1 Text',
  },
};

export const H2: Story = {
  args: {
    as: 'h2',
    children: 'Heading 2 Text',
  },
};

export const H3: Story = {
  args: {
    as: 'h3',
    children: 'Heading 3 Text',
  },
};

export const H4: Story = {
  args: {
    as: 'h4',
    children: 'Heading 4 Text',
  },
};
