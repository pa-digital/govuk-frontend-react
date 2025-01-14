import { Meta, StoryObj } from '@storybook/react/*';
import { RadioButtons } from '../../UI/Radios/RadioButtons';
import {
  ConditionalContact,
  ConditionalContactWithHint,
  ErrorConditionalContact,
  PrefixedConditionalContact,
  PrePopulatedConditionalContact,
  SuffixedConditionalContact,
} from '../../UI/Radios/RadioButtonTestData';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Radios/Implementation (Conditional)',
  component: RadioButtons,
} satisfies Meta<typeof RadioButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    identifier: 'defaultconditionalradio',
    header: 'Default Conditional Radio',
    data: ConditionalContact,
    onValueChange: fn(),
  },
};

export const Hint: Story = {
  args: {
    identifier: 'hintconditionalradio',
    header: 'Hint Conditional Radio',
    data: ConditionalContactWithHint,
    onValueChange: fn(),
  },
};

export const PrePopulated: Story = {
  args: {
    identifier: 'prepopulatedconditional',
    header: 'Pre-Populated Conditional Radio',
    data: PrePopulatedConditionalContact,
    onValueChange: fn(),
  },
};

export const Prefix: Story = {
  args: {
    identifier: 'prefixconditional',
    header: 'Prefixed Conditional Radio',
    data: PrefixedConditionalContact,
    onValueChange: fn(),
  },
};

export const Suffix: Story = {
  args: {
    identifier: 'suffixconditional',
    header: 'Suffixed Conditional Radio',
    data: SuffixedConditionalContact,
    onValueChange: fn(),
  },
};

export const Error: Story = {
  args: {
    identifier: 'errorconditional',
    header: 'Error Mode Conditional Radio',
    data: ErrorConditionalContact,
    onValueChange: fn(),
  },
};
