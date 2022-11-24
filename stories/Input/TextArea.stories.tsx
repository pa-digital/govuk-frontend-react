import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextArea } from '../../src/UI/Input/TextArea';

export default {
  title: 'Components/Input/TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  identifier: 'input',
  label: 'Standard label',
};

export const Hint = Template.bind({});
Hint.args = {
  identifier: 'input',
  label: 'Hint label',
  hint: 'Hint to assist the user',
};

export const MultiQuestion = Template.bind({});
MultiQuestion.args = {
  identifier: 'input',
  label: 'Multi Question label',
  multiQuestion: true,
};

export const Error = Template.bind({});
Error.args = {
  identifier: 'input',
  label: 'Standard label',
  error: 'You must enter a value',
};
