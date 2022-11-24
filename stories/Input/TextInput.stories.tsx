import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextInput } from '../../src/UI/Input/TextInput';

export default {
  title: 'Components/Input/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  identifier: 'input',
  label: 'Standard label',
};

export const Password = Template.bind({});
Password.args = {
  identifier: 'input',
  label: 'Password label',
  inputType: 'password',
};

export const MultiQuestion = Template.bind({});
MultiQuestion.args = {
  identifier: 'input',
  label: 'Multi Question label',
  multiQuestion: true,
};

export const Hint = Template.bind({});
Hint.args = {
  identifier: 'input',
  label: 'Hint label',
  hint: 'Hint to assist the user',
};

export const Prefix = Template.bind({});
Prefix.args = {
  identifier: 'input',
  label: 'How much does it cost, in pounds?',
  prefix: '£',
  width: 5,
};

export const Suffix = Template.bind({});
Suffix.args = {
  identifier: 'input',
  label: 'What is the weight, in kilo grammes?',
  suffix: 'kg',
  width: 4,
};

export const Error = Template.bind({});
Error.args = {
  identifier: 'input',
  label: 'Standard label',
  error: 'You must enter a value',
};
