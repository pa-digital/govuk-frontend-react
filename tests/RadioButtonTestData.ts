import { RadioButtonDataProps } from '../src/UI/Radios/RadioButtons';

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
