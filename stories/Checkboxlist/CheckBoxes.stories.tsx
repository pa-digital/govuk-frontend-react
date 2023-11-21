import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  CheckBoxDataProps,
  CheckBoxList,
} from '../../src/UI/Checkboxes/CheckboxList';

export default {
  title: 'Components/CheckBoxList/Implementation',
  component: CheckBoxList,
} as ComponentMeta<typeof CheckBoxList>;

const DefaultCheckBoxData: CheckBoxDataProps[] = [
  {
    text: 'British',
    value: 'British',
  },
  {
    text: 'Irish',
    value: 'Irish',
  },
  {
    text: 'Citizen of another country',
    value: 'Other',
  },
];

const DividerCheckBoxData: CheckBoxDataProps[] = [
  {
    text: 'British',
    value: 'British',
  },
  {
    text: 'Irish',
    value: 'Irish',
  },
  {
    text: 'or',
    value: '',
    divider: true,
  },
  {
    text: 'Citizen of another country',
    value: 'Other',
  },
];

const ExclusiveCheckBoxData: CheckBoxDataProps[] = [
  {
    text: 'France',
    value: 'France',
  },
  {
    text: 'Portugal',
    value: 'Portugal',
  },
  {
    text: 'Spain',
    value: 'Spain',
  },
  {
    text: 'or',
    value: '',
    divider: true,
  },
  {
    text: 'No, I will not be travelling to any of these countries',
    value: 'none',
    exclusive: true,
  },
];

const HintCheckBoxData: CheckBoxDataProps[] = [
  {
    text: 'British',
    value: 'British',
    hint: 'including English, Scottish, Welsh and Northern Irish',
  },
  {
    text: 'Irish',
    value: 'Irish',
  },
  {
    text: 'Citizen of another country',
    value: 'Other',
  },
];

const PresetCheckBoxData: CheckBoxDataProps[] = [
  {
    text: 'British',
    value: 'British',
  },
  {
    text: 'Irish',
    value: 'Irish',
    checked: true,
  },
];

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof CheckBoxList> = (args) => (
  <CheckBoxList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  identifier: 'checkboxlist',
  header: 'Checkbox list',
  data: DefaultCheckBoxData,
};

export const Compact = Template.bind({});
Compact.args = {
  identifier: 'checkboxlist',
  header: 'Checkbox list in compact mode',
  data: DefaultCheckBoxData,
  compact: true,
};

export const MultiQuestion = Template.bind({});
MultiQuestion.args = {
  identifier: 'checkboxlist',
  header: 'Checkbox list in multi question mode',
  data: DefaultCheckBoxData,
  multiQuestion: true,
};

export const Divider = Template.bind({});
Divider.args = {
  identifier: 'checkboxlist',
  header: 'Checkbox list with divider',
  data: DividerCheckBoxData,
};

export const Hint = Template.bind({});
Hint.args = {
  identifier: 'checkboxlist',
  header: 'Checkbox list with hints',
  hint: 'Checkbox list hint',
  data: HintCheckBoxData,
};

export const PreChecked = Template.bind({});
PreChecked.args = {
  identifier: 'checkboxlist',
  header: 'Checkbox list with pre checked options',
  data: PresetCheckBoxData,
};

export const ExclusiveCheckBoxes = Template.bind({});
ExclusiveCheckBoxes.args = {
  identifier: 'checkboxlist',
  header: 'Checkbox list with exclusive options',
  hint: 'Select all countries that apply',
  data: ExclusiveCheckBoxData,
};

export const ToggleCheckBoxes = Template.bind({});
ToggleCheckBoxes.args = {
  identifier: 'checkboxlist',
  header: 'Checkbox list with toggle options',
  data: DefaultCheckBoxData,
  showToggle: true,
};

export const Error = Template.bind({});
Error.args = {
  identifier: 'checkboxlist',
  header: 'Checkbox list with error message',
  error: 'You must select a value',
  data: DefaultCheckBoxData,
};
