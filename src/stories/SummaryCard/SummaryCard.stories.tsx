import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MemoryRouter as Router } from 'react-router-dom';
import { SummaryCardList } from '../../UI/SummaryCard/SummaryCardList';
import { SummaryCardListProps } from '../../UI/SummaryCard/SummaryCardProps';

const meta = {
  title: 'Components/Summary Card/New Implementation',
  component: SummaryCardList,
} satisfies Meta<typeof SummaryCardList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const args: SummaryCardListProps = {
      identifier: 'no-action-list',
      cards: [
        {
          title: 'Lead tenant',
          summaryList: [
            {
              key: 'Age',
              value: '38',
              links: [
                {
                  to: '/update-age',
                  text: 'Change',
                },
              ],
            },
            {
              key: 'Nationality',
              value: 'UK national resident in UK',
              links: [
                {
                  to: '/update-nationality',
                  text: 'Change',
                },
              ],
            },
            {
              key: 'Working situation',
              value: 'Part time – less than 30 hours a week',
              links: [
                {
                  to: '/update-working',
                  text: 'Change',
                },
              ],
            },
          ],
        },
        {
          title: 'Person 2',
          summaryList: [
            {
              key: 'Details known',
              value: 'Yes',
              links: [
                {
                  to: '/update-details-known',
                  text: 'Change',
                },
              ],
            },
            {
              key: 'Relationship to lead tenant',
              value: 'Partner',
              links: [
                {
                  to: '/update-relationship',
                  text: 'Change',
                },
              ],
            },
            {
              key: 'Age',
              value: '42',
              links: [
                {
                  to: '/update-age',
                  text: 'Change',
                },
              ],
            },
            {
              key: 'Working situation',
              value:
                'Unable to work because of long-term sickness or disability',
              links: [
                {
                  to: '/update-working',
                  text: 'Change',
                },
              ],
            },
          ],
        },
        {
          title: 'Person 3',
          summaryList: [
            {
              key: 'Details known',
              value: 'Yes',
              links: [
                {
                  to: '/update-details-known',
                  text: 'Change',
                },
              ],
            },
            {
              key: 'Relationship to lead tenant',
              value: 'Child',
              links: [
                {
                  to: '/update-relationship',
                  text: 'Change',
                },
              ],
            },
            {
              key: 'Age',
              value: '7',
              links: [
                {
                  to: '/update-age',
                  text: 'Change',
                },
              ],
            },
            {
              key: 'Working situation',
              value: 'Child under 16',
              links: [
                {
                  to: '/update-working',
                  text: 'Change',
                },
              ],
            },
          ],
        },
      ],
      handleAction: action('handleAction'),
    };
    return (
      <Router>
        <SummaryCardList {...args} />
      </Router>
    );
  },
};

export const Actions: Story = {
  render: () => {
    const args: SummaryCardListProps = {
      identifier: 'action-list',
      cards: [
        {
          title: 'University of Gloucestershire',
          summaryList: [
            {
              key: 'Course',
              value: (
                <>
                  English (3DMD)
                  <br />
                  PGCE with QTS full time
                </>
              ),
            },
            {
              key: 'Location',
              value: (
                <>
                  School name
                  <br />
                  Road, City, SW1 1AA
                </>
              ),
            },
          ],
          cardActions: [
            {
              text: 'Delete choice',
              extendedText:
                'of University of Gloucestershire (University of Gloucestershire)',
              action: 'delete',
            },
            {
              text: 'Withdraw',
              extendedText:
                'from University of Gloucestershire (University of Gloucestershire)',
              action: 'withdraw',
            },
          ],
        },
        {
          title: 'University of Bristol',
          summaryList: [
            {
              key: 'Course',
              value: (
                <>
                  English (Q3X1)
                  <br />
                  PGCE with QTS full time
                </>
              ),
            },
            {
              key: 'Location',
              value: (
                <>
                  School name
                  <br />
                  Road, City, SW2 1AA
                </>
              ),
            },
          ],
          cardActions: [
            {
              text: 'Delete choice',
              extendedText: 'of University of Bristol (University of Bristol)',
              action: 'delete',
            },
            {
              text: 'Withdraw',
              extendedText:
                'from University of Bristol (University of Bristol)',
              action: 'withdraw',
            },
          ],
        },
      ],
      handleAction: action('handleAction'),
    };
    return (
      <Router>
        <SummaryCardList {...args} />
      </Router>
    );
  },
};
