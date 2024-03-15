import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabContent } from '../../UI/Tabs/Tabs';

const meta = {
  title: 'Components/Tabs/Implementation',
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const TabData: TabContent[] = [
  { title: 'Tab 1', children: <>Tab 1 content</>, selected: true },
  { title: 'Tab 2', children: <>Tab 2 content</> },
  { title: 'Tab 3', children: <>Tab 3 content</> },
];

export const Default: Story = {
  args: {
    heading: 'tab caption',
    tabs: TabData,
  },
};
