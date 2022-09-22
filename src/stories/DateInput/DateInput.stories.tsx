import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DateInput, errorTypeEnum } from '../../UI/DateInput/DateInput';

export default {
  title: 'Components/DateInput/Implementation',
  component: DateInput,
} as ComponentMeta<typeof DateInput>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof DateInput> = (args) => (
  <DateInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  identifier: 'date-input',
  label: 'Date of birth',
};

export const Hint = Template.bind({});
Hint.args = {
  identifier: 'date-input',
  label: 'Date of birth',
  hint: 'This is the date you were born',
};

export const Error = Template.bind({});
Error.args = {
  identifier: 'date-input',
  label: 'Date of birth',
  error: 'You must enter a date of birth',
  errorType: errorTypeEnum.all,
};
