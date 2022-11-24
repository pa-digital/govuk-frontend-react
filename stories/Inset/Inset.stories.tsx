import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Inset } from '../../src/UI/Inset/Inset';

export default {
  title: 'Components/Inset/Implementation',
  component: Inset,
} as ComponentMeta<typeof Inset>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Inset> = (args) => <Inset {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'This has content within it',
};
