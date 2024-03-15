import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
} from '../../Helper/testHelper';
import { TaskListItemStatus, TaskList, TaskListTask } from './TaskList';

expect.extend(toHaveNoViolations);

const tasks: TaskListTask[] = [
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
];

describe('Task List component is accessible', () => {
  it('must not fail any accessibility tests with empty list', async () => {
    const { container } = render(
      <TaskList tasks={[]} identifier="task-list" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('must not fail any accessibility tests with a populated list with hints', async () => {
    const { container } = render(
      <TaskList tasks={tasks} identifier="populated" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Task List renders correctly', () => {
  it('renders list correctly', async () => {
    render(<TaskList tasks={tasks} identifier="task-list" />);

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    expect(list).toHaveClass('govuk-task-list');

    const listItems = list.querySelectorAll('li');
    expect(listItems).toHaveLength(3);
    expect(listItems[0]).toHaveClass(
      'govuk-task-list__item govuk-task-list__item--with-link'
    );
    expect(listItems[1]).toHaveClass(
      'govuk-task-list__item govuk-task-list__item--with-link'
    );
    expect(listItems[2]).toHaveClass(
      'govuk-task-list__item govuk-task-list__item--with-link'
    );

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
    expect(links[0]).toHaveClass('govuk-link govuk-task-list__link');
    expect(links[0]).toHaveTextContent('Company Directors');
    expect(links[0]).toHaveAttribute('href', '/c-d');
    expect(links[0]).toHaveAttribute('aria-describedby', 'task-list-0-status');
    const link1Wrapper = links[0].parentNode as HTMLElement;
    expect(link1Wrapper).toBeInTheDocument();
    expect(link1Wrapper).toHaveClass('govuk-task-list__name-and-hint');

    expect(links[1]).toHaveClass('govuk-link govuk-task-list__link');
    expect(links[1]).toHaveTextContent('Registered company details');
    expect(links[1]).toHaveAttribute('href', '/r-c-d');
    expect(links[1]).toHaveAttribute('aria-describedby', 'task-list-1-status');
    const link2Wrapper = links[1].parentNode as HTMLElement;
    expect(link2Wrapper).toBeInTheDocument();
    expect(link2Wrapper).toHaveClass('govuk-task-list__name-and-hint');

    expect(links[2]).toHaveClass('govuk-link govuk-task-list__link');
    expect(links[2]).toHaveTextContent('Financial History');
    expect(links[2]).toHaveAttribute('href', '/f-h');
    expect(links[2]).toHaveAttribute(
      'aria-describedby',
      'task-list-2-hint task-list-2-status'
    );
    const link3Wrapper = links[2].parentNode as HTMLElement;
    expect(link3Wrapper).toBeInTheDocument();
    expect(link3Wrapper).toHaveClass('govuk-task-list__name-and-hint');

    const hint = links[2].nextSibling as HTMLElement;
    expect(hint).toBeInTheDocument();
    expect(hint).toHaveClass('govuk-task-list__hint');
    expect(hint).toHaveTextContent(
      'Include 5 years of the company’s relevant financial information.'
    );

    const status1Wrapper = link1Wrapper.nextSibling as HTMLElement;
    expect(status1Wrapper).toBeInTheDocument();
    expect(status1Wrapper).toHaveClass('govuk-task-list__status');
    expect(status1Wrapper).toHaveAttribute('id', 'task-list-0-status');
    expect(status1Wrapper).toHaveTextContent('Complete');

    const status2Wrapper = link2Wrapper.nextSibling as HTMLElement;
    expect(status2Wrapper).toBeInTheDocument();
    expect(status2Wrapper).toHaveClass('govuk-task-list__status');
    expect(status2Wrapper).toHaveAttribute('id', 'task-list-1-status');
    const statusTag2 = status2Wrapper.childNodes[0] as HTMLElement;
    expect(statusTag2).toBeInTheDocument();
    expect(statusTag2).toHaveClass('govuk-tag govuk-tag--blue');
    expect(statusTag2).toHaveTextContent('Incomplete');

    const status3Wrapper = link3Wrapper.nextSibling as HTMLElement;
    expect(status3Wrapper).toBeInTheDocument();
    expect(status3Wrapper).toHaveClass('govuk-task-list__status');
    expect(status3Wrapper).toHaveAttribute('id', 'task-list-2-status');
    const statusTag3 = status3Wrapper.childNodes[0] as HTMLElement;
    expect(statusTag3).toBeInTheDocument();
    expect(statusTag3).toHaveClass('govuk-tag govuk-tag--blue');
    expect(statusTag3).toHaveTextContent('Incomplete');
  });
});
