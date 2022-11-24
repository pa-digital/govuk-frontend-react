import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tabs, TabContent } from '../../src/UI/Tabs/Tabs';

export default {
  title: 'Components/Tabs/Implementation',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const TabData: TabContent[] = [
  { title: 'Tab 1', children: <>Tab 1 content</>, selected: true },
  { title: 'Tab 2', children: <>Tab 2 content</> },
  { title: 'Tab 3', children: <>Tab 3 content</> },
];

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Tabs> = (args) => (
  <div className="js-enabled">
    <Tabs {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  heading: 'tab caption',
  tabs: TabData,
};
