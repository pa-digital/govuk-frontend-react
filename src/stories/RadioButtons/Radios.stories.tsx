import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioButtons } from '../../UI/Radios/RadioButtons';
import {
  PreSelectedNameChangeData,
  SignInData,
  WhereDoYouLiveData,
  WhereDoYouLiveExtData,
} from '../../UI/Radios/RadioButtonTestData';

export default {
  title: 'Components/RadioButtons/Implementation',
  component: RadioButtons,
} as ComponentMeta<typeof RadioButtons>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof RadioButtons> = (args) => (
  <RadioButtons {...args} />
);

export const Default = Template.bind({});
Default.args = {
  identifier: 'radiobuttons',
  header: 'Radio button list',
  data: WhereDoYouLiveData,
};

export const Compact = Template.bind({});
Compact.args = {
  identifier: 'radiobuttons',
  header: 'Radio button list in compact mode',
  data: WhereDoYouLiveData,
  compact: true,
};

export const MultiQuestion = Template.bind({});
MultiQuestion.args = {
  identifier: 'radiobuttons',
  header: 'Radio button list in multi question mode',
  data: WhereDoYouLiveData,
  multiQuestion: true,
};

export const Divider = Template.bind({});
Divider.args = {
  identifier: 'radiobuttons',
  header: 'Radio button list with divider',
  data: WhereDoYouLiveExtData,
};

export const Hint = Template.bind({});
Hint.args = {
  identifier: 'radiobuttons',
  header: 'Radio button list with hints',
  hint: 'Radio button list hint',
  data: SignInData,
};

export const Inline = Template.bind({});
Inline.args = {
  identifier: 'radiobuttons',
  header: 'Radio button list as an inline display',
  render: 'inline',
  data: WhereDoYouLiveData,
};

export const Preset = Template.bind({});
Preset.args = {
  identifier: 'radiobuttons',
  header: 'Radio button list with present options',
  data: PreSelectedNameChangeData,
};

export const Error = Template.bind({});
Error.args = {
  identifier: 'radiobuttons',
  header: 'Radio button list with error message',
  error: 'You must select a value',
  data: WhereDoYouLiveData,
};
