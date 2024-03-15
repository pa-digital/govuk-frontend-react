import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Pagination } from '../../UI/Paging/Pagination';

const meta = {
  title: 'Components/Pagination/Implementation',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const args = {
      pageNumbers: 5,
      currentPage: 3,
      label: 'results 1',
    };
    return (
      <Router>
        <Pagination {...args} />
      </Router>
    );
  },
};

export const HiddenPrevious: Story = {
  render: () => {
    const args = {
      pageNumbers: 5,
      currentPage: 1,
      label: 'results 1',
    };
    return (
      <Router>
        <Pagination {...args} />
      </Router>
    );
  },
};

export const HiddenNext: Story = {
  render: () => {
    const args = {
      pageNumbers: 5,
      currentPage: 5,
      label: 'results 1',
    };
    return (
      <Router>
        <Pagination {...args} />
      </Router>
    );
  },
};

export const LargeRange: Story = {
  render: () => {
    const args = {
      pageNumbers: 20,
      currentPage: 6,
      label: 'results 1',
    };
    return (
      <Router>
        <Pagination {...args} />
      </Router>
    );
  },
};

export const SmallRange: Story = {
  render: () => {
    const args = {
      pageNumbers: 3,
      currentPage: 2,
      label: 'results 1',
    };
    return (
      <Router>
        <Pagination {...args} />
      </Router>
    );
  },
};
