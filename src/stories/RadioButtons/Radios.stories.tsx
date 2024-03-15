import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { RadioButtons } from '../../UI/Radios/RadioButtons';
import {
  PreSelectedNameChangeData,
  SignInData,
  WhereDoYouLiveData,
  WhereDoYouLiveExtData,
} from '../../UI/Radios/RadioButtonTestData';

const meta = {
  title: 'Components/Radios/Implementation',
  component: RadioButtons,
} satisfies Meta<typeof RadioButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    identifier: 'radiobuttons',
    header: 'Radio button list',
    data: WhereDoYouLiveData,
    onValueChange: fn(),
  },
};

export const Compact: Story = {
  args: {
    identifier: 'radiobuttons',
    header: 'Radio button list in compact mode',
    data: WhereDoYouLiveData,
    compact: true,
    onValueChange: fn(),
  },
};

export const MultiQuestion: Story = {
  args: {
    identifier: 'radiobuttons',
    header: 'Radio button list in multi question mode',
    data: WhereDoYouLiveData,
    multiQuestion: true,
    onValueChange: fn(),
  },
};

export const Divider: Story = {
  args: {
    identifier: 'radiobuttons',
    header: 'Radio button list with divider',
    data: WhereDoYouLiveExtData,
    onValueChange: fn(),
  },
};

export const Hint: Story = {
  args: {
    identifier: 'radiobuttons',
    header: 'Radio button list with hints',
    hint: 'Radio button list hint',
    data: SignInData,
    onValueChange: fn(),
  },
};

export const Inline: Story = {
  args: {
    identifier: 'radiobuttons',
    header: 'Radio button list as an inline display',
    render: 'inline',
    data: WhereDoYouLiveData,
    onValueChange: fn(),
  },
};

export const Preset: Story = {
  args: {
    identifier: 'radiobuttons',
    header: 'Radio button list with present options',
    data: PreSelectedNameChangeData,
    onValueChange: fn(),
  },
};

export const Error: Story = {
  args: {
    identifier: 'radiobuttons',
    header: 'Radio button list with error message',
    error: 'You must select a value',
    data: WhereDoYouLiveData,
    onValueChange: fn(),
  },
};
