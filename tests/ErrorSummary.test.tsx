import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
} from '../src/Helper/testHelper';
import { ErrorSummary } from '../src/UI/ErrorSummary/ErrorSummary';

expect.extend(toHaveNoViolations);

const singleFormError = {
  firstName: {
    message: 'First name is required',
    type: 'required',
    ref: { name: 'firstName' },
  },
};

const multiFormError = {
  firstName: {
    message: 'First name is required',
    type: 'required',
    ref: { name: 'firstName' },
  },
  lastName: {
    message: 'Last name is required',
    type: 'required',
    ref: { name: 'lastName' },
  },
};

describe('Error Summary component is accessible', () => {
  it('must not fail any accessibility tests when empty', async () => {
    const { container } = render(
      <ErrorSummary identifier="error-summary" errors={{}} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests when populated with a single error', async () => {
    const { container } = render(
      <ErrorSummary identifier="error-summary" errors={singleFormError} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests when populated with multiple errors', async () => {
    const { container } = render(
      <ErrorSummary identifier="error-summary" errors={multiFormError} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Error Summary renders correctly', () => {
  it('does not render when no errors are present', async () => {
    render(<ErrorSummary identifier="error-summary" errors={{}} />);

    expect(screen.queryByRole('alert')).toBeNull();
    expect(screen.queryByRole('heading', { level: 2 })).toBeNull();
  });
  it('renders correct content for single error', async () => {
    render(
      <ErrorSummary identifier="error-summary" errors={singleFormError} />
    );
    const summaryWrapper = screen.getByRole('alert');
    expect(summaryWrapper).toBeInTheDocument();
    expect(summaryWrapper).toHaveClass('govuk-error-summary');
    expect(summaryWrapper).toHaveAttribute(
      'data-module',
      'govuk-error-summary'
    );
    expect(summaryWrapper).toHaveAttribute(
      'aria-labelledby',
      'error-summary-title'
    );

    const summaryHeading = screen.getByRole('heading', { level: 2 });
    expect(summaryHeading).toBeInTheDocument();
    expect(summaryHeading).toHaveTextContent('There is a problem');
    expect(summaryHeading).toHaveClass('govuk-error-summary__title');
    expect(summaryHeading).toHaveAttribute('id', 'error-summary-title');

    const errorMessage = screen.getByText('First name is required');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveAttribute('href', '#firstName');

    const errorListItem = errorMessage.parentNode as HTMLElement;
    expect(errorListItem).toBeInTheDocument();
    const errorList = errorListItem.parentNode as HTMLElement;
    expect(errorList).toBeInTheDocument();
    expect(errorList).toHaveClass('govuk-list govuk-error-summary__list');
    const errorListContainer = errorList.parentNode as HTMLElement;
    expect(errorListContainer).toBeInTheDocument();
    expect(errorListContainer).toHaveClass('govuk-error-summary__body');
  });
  it('renders correct content for multiple errors', async () => {
    render(<ErrorSummary identifier="error-summary" errors={multiFormError} />);

    const firstNameErrorMessage = screen.getByText('First name is required');
    expect(firstNameErrorMessage).toBeInTheDocument();
    expect(firstNameErrorMessage).toHaveAttribute('href', '#firstName');

    const lastNameErrorMessage = screen.getByText('Last name is required');
    expect(lastNameErrorMessage).toBeInTheDocument();
    expect(lastNameErrorMessage).toHaveAttribute('href', '#lastName');
  });
});
