import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { TaskList, TaskListItemStatus } from '../../UI/TaskList/TaskList';

const meta = {
  title: 'Components/Task List/Implementation',
  component: TaskList,
} satisfies Meta<typeof TaskList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    identifier: 'task-list',
    tasks: [
      {
        content: 'Company Directors',
        to: '/c-d',
        statusText: 'Completed',
        statusTag: TaskListItemStatus.Complete,
      },
      {
        content: 'Registered company details',
        to: '/r-c-d',
        statusText: 'Incomplete',
        statusTag: TaskListItemStatus.Incomplete,
      },
      {
        content: 'Financial History',
        to: '/f-h',
        hint: 'Include 5 years of the company’s relevant financial information.',
        statusText: 'Incomplete',
        statusTag: TaskListItemStatus.Incomplete,
      },
    ],
  },
  render: function Render(args) {
    return (
      <Router>
        <TaskList {...args} />
      </Router>
    );
  },
};
