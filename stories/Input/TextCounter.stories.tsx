import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextCounter } from '../../src/UI/Input/TextCounter';

export default {
  title: 'Components/Input/TextCounter',
  component: TextCounter,
} as ComponentMeta<typeof TextCounter>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof TextCounter> = (args) => (
  <TextCounter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  identifier: 'input',
  label: 'Standard label',
  maxCount: 200,
  counterType: 'character',
};

export const Word = Template.bind({});
Word.args = {
  identifier: 'input',
  label: 'Hint label',
  maxCount: 50,
  counterType: 'word',
};

export const Threshold = Template.bind({});
Threshold.args = {
  identifier: 'input',
  label: 'Threshold of 10',
  maxCount: 200,
  threshold: 10,
  counterType: 'character',
};

export const ExceededCountError = Template.bind({});
ExceededCountError.args = {
  identifier: 'input',
  label: 'label',
  maxCount: 5,
  counterType: 'character',
  value: 'this is a longer value than permitted',
};

export const Error = Template.bind({});
Error.args = {
  identifier: 'input',
  label: 'Standard label',
  error: 'You must enter a value',
  counterType: 'character',
  maxCount: 10,
};
