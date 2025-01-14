import { RadioButtonDataProps } from './RadioButtonCommon';

export const WhereDoYouLiveData: RadioButtonDataProps[] = [
  {
    text: 'England',
    value: 'England',
  },
  {
    text: 'Scotland',
    value: 'Scotland',
  },
  {
    text: 'Wales',
    value: 'Wales',
  },
  {
    text: 'Northern Ireland',
    value: 'NIreland',
  },
];

export const NameChangeData: RadioButtonDataProps[] = [
  {
    text: 'Yes',
    value: 'Yes',
  },
  {
    text: 'No',
    value: 'No',
  },
];

export const PreSelectedNameChangeData: RadioButtonDataProps[] = [
  {
    text: 'Yes',
    value: 'Yes',
  },
  {
    text: 'No',
    value: 'No',
    checked: true,
  },
];

export const SignInData: RadioButtonDataProps[] = [
  {
    text: 'Sign in with Government Gateway',
    value: 'GovGateway',
    hint: "You'll have a user ID if you've registered for Self Assessment or filed a tax return online before.",
  },
  {
    text: 'Sign in with GOV.UK Verify',
    value: 'GovVerify',
    hint: "You'll have an account if you've already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.",
  },
];

export const WhereDoYouLiveExtData: RadioButtonDataProps[] = [
  {
    text: 'England',
    value: 'England',
  },
  {
    text: 'Scotland',
    value: 'Scotland',
  },
  {
    text: 'Wales',
    value: 'Wales',
  },
  {
    text: 'Northern Ireland',
    value: 'NIreland',
  },
  {
    text: 'or',
    value: '',
    divider: true,
  },
  {
    text: 'I am a British citizen living abroad',
    value: 'Abroad',
  },
];

export const ConditionalContact: RadioButtonDataProps[] = [
  {
    text: 'Email',
    value: 'email',
    conditionalInput: {
      context: 'contact-by-email',
      identifier: 'emailAddress',
      label: 'Email address',
      inputType: 'email',
    },
  },
  {
    text: 'Phone',
    value: 'phone',
    conditionalInput: {
      context: 'contact-by-phone',
      identifier: 'phone',
      label: 'Phone number',
      inputMode: 'numeric',
    },
  },
  {
    text: 'Text message',
    value: 'text',
  },
];

export const PrePopulatedConditionalContact: RadioButtonDataProps[] = [
  {
    text: 'Email',
    value: 'email',
    checked: true,
    conditionalInput: {
      context: 'contact-by-email',
      identifier: 'emailAddress',
      label: 'Email address',
      inputType: 'email',
      value: 'test@test.com',
    },
  },
  {
    text: 'Phone',
    value: 'phone',
    conditionalInput: {
      context: 'contact-by-phone',
      identifier: 'phone',
      label: 'Phone number',
      inputMode: 'numeric',
    },
  },
  {
    text: 'Text message',
    value: 'text',
  },
];

export const PrefixedConditionalContact: RadioButtonDataProps[] = [
  {
    text: 'Sterling (GBP)',
    value: 'gbp',
    conditionalInput: {
      context: 'payment-in-sterling',
      identifier: 'sterling-payment',
      label: 'Sterling (GBP) Amount',
      prefix: '£',
    },
  },
  {
    text: 'Euro (EUR)',
    value: 'eur',
    conditionalInput: {
      context: 'payment-in-euros',
      identifier: 'euro-payment',
      label: 'Euro (EUR) Amount',
      prefix: '€',
    },
  },
  {
    text: 'US Dollars (USD)',
    value: 'usd',
    conditionalInput: {
      context: 'payment-in-usd',
      identifier: 'usd-payment',
      label: 'US Dollars (USD) Amount',
      prefix: '$',
    },
  },
];

export const SuffixedConditionalContact: RadioButtonDataProps[] = [
  {
    text: 'Miles Per Hour',
    value: 'mph',
    conditionalInput: {
      context: 'speed-in-mph',
      identifier: 'mph-speed',
      label: 'Miles per hour',
      suffix: 'mph',
    },
  },
  {
    text: 'Kilometers Per Hour',
    value: 'kph',
    conditionalInput: {
      context: 'speed-in-kph',
      identifier: 'kph-speed',
      label: 'Kilometers per hour',
      suffix: 'kph',
    },
  },
];

export const ErrorConditionalContact: RadioButtonDataProps[] = [
  {
    text: 'Email',
    value: 'email',
    checked: true,
    conditionalInput: {
      context: 'contact-by-email',
      identifier: 'emailAddress',
      label: 'Email address',
      inputType: 'email',
      value: '',
      error: 'You must provide a valid email address',
    },
  },
  {
    text: 'Phone',
    value: 'phone',
    conditionalInput: {
      context: 'contact-by-phone',
      identifier: 'phone',
      label: 'Phone number',
      inputMode: 'numeric',
    },
  },
  {
    text: 'Text message',
    value: 'text',
  },
];
