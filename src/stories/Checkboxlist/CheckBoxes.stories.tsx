import type { Meta, StoryObj } from '@storybook/react';
import {
  CheckBoxDataProps,
  CheckBoxList,
} from '../../UI/Checkboxes/CheckboxList';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Checkboxes/Implementation',
  component: CheckBoxList,
} satisfies Meta<typeof CheckBoxList>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const Default: Story = {
  args: {
    identifier: 'checkboxlist',
    header: 'Checkbox list',
    data: DefaultCheckBoxData,
    onValueChange: fn(),
  },
};

export const Compact: Story = {
  args: {
    identifier: 'checkboxlist',
    header: 'Checkbox list in compact mode',
    data: DefaultCheckBoxData,
    compact: true,
  },
};

export const MultiQuestion: Story = {
  args: {
    identifier: 'checkboxlist',
    header: 'Checkbox list in multi question mode',
    data: DefaultCheckBoxData,
    multiQuestion: true,
  },
};

export const Divider: Story = {
  args: {
    identifier: 'checkboxlist',
    header: 'Checkbox list with divider',
    data: DividerCheckBoxData,
  },
};

export const Hint: Story = {
  args: {
    identifier: 'checkboxlist',
    header: 'Checkbox list with hints',
    hint: 'Checkbox list hint',
    data: HintCheckBoxData,
  },
};

export const PreChecked: Story = {
  args: {
    identifier: 'checkboxlist',
    header: 'Checkbox list with pre checked options',
    data: PresetCheckBoxData,
  },
};

export const ExclusiveCheckBoxes: Story = {
  args: {
    identifier: 'checkboxlist',
    header: 'Checkbox list with exclusive options',
    hint: 'Select all countries that apply',
    data: ExclusiveCheckBoxData,
  },
};

export const ToggleCheckBoxes: Story = {
  args: {
    identifier: 'checkboxlist',
    header: 'Checkbox list with toggle options',
    data: DefaultCheckBoxData,
    showToggle: true,
  },
};

export const Error: Story = {
  args: {
    identifier: 'checkboxlist',
    header: 'Checkbox list with error message',
    error: 'You must select a value',
    data: DefaultCheckBoxData,
  },
};
