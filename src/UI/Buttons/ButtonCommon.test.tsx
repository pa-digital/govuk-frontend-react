import { GetVariantClass } from './ButtonCommon';

describe('Button Common Logic works correctly', () => {
  it('must return correct className by default', async () => {
    const assignedClass = GetVariantClass('');
    expect(assignedClass).toBe('');
  });
  it('must return correct className by default', async () => {
    const assignedClass = GetVariantClass('secondary');
    expect(assignedClass).toBe(' govuk-button--secondary');
  });
  it('must return correct className by default', async () => {
    const assignedClass = GetVariantClass('warning');
    expect(assignedClass).toBe(' govuk-button--warning');
  });
});
