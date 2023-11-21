import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
  userEvent,
} from '../src/Helper/testHelper';
import {
  CheckBoxDataProps,
  CheckBoxList,
} from '../src/UI/Checkboxes/CheckboxList';
import { clone } from '../src/Helper/helperFunctions';

expect.extend(toHaveNoViolations);

export const CheckBoxData: CheckBoxDataProps[] = [
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

export const DividerCheckBoxData: CheckBoxDataProps[] = [
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
    text: 'or',
    value: '',
    divider: true,
  },
  {
    text: 'Citizen of another country',
    value: 'Other',
  },
];

export const DataCheckCheckBoxData: CheckBoxDataProps[] = [
  {
    text: 'British',
    value: 'British',
    hint: 'including English, Scottish, Welsh and Northern Irish',
  },
  {
    text: 'Irish',
    value: 'Irish',
    checked: true,
  },
];

describe('Checkbox list component is accessible', () => {
  it('default checkbox must not fail any accessibility tests', async () => {
    const mockOnValueChange = jest.fn();
    const { container } = render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={clone<CheckBoxDataProps[]>(CheckBoxData)}
        onValueChange={mockOnValueChange}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('divider checkbox must not fail any accessibility tests', async () => {
    const mockOnValueChange = jest.fn();
    const { container } = render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={clone<CheckBoxDataProps[]>(DividerCheckBoxData)}
        onValueChange={mockOnValueChange}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('initial checked values must not fail any accessibility tests', async () => {
    const mockOnValueChange = jest.fn();
    const initData = clone<CheckBoxDataProps[]>(CheckBoxData);
    initData[0].checked = true;
    initData[1].checked = true;
    const { container } = render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={initData}
        onValueChange={mockOnValueChange}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('hint state must not fail any accessibility tests', async () => {
    const mockOnValueChange = jest.fn();
    const { container } = render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={clone<CheckBoxDataProps[]>(CheckBoxData)}
        hint="This is a hint"
        onValueChange={mockOnValueChange}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('multi question state must not fail any accessibility tests', async () => {
    const mockOnValueChange = jest.fn();
    const { container } = render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={clone<CheckBoxDataProps[]>(CheckBoxData)}
        multiQuestion
        onValueChange={mockOnValueChange}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('compact state must not fail any accessibility tests', async () => {
    const mockOnValueChange = jest.fn();
    const { container } = render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={clone<CheckBoxDataProps[]>(CheckBoxData)}
        compact
        onValueChange={mockOnValueChange}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('show all toggle must not fail any accessibility tests', async () => {
    const mockOnValueChange = jest.fn();
    const { container } = render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={clone<CheckBoxDataProps[]>(CheckBoxData)}
        showToggle={true}
        onValueChange={mockOnValueChange}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('error state must not fail any accessibility tests', async () => {
    const mockOnValueChange = jest.fn();
    const { container } = render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={clone<CheckBoxDataProps[]>(CheckBoxData)}
        error="You must select a value"
        onValueChange={mockOnValueChange}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Checkbox list renders correctly', () => {
  it('default checkboxlist renders correctly', async () => {
    const mockOnValueChange = jest.fn();
    render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={clone<CheckBoxDataProps[]>(CheckBoxData)}
        onValueChange={mockOnValueChange}
      />
    );
    const checkBoxHeader = screen.getByText(
      'Will you be travelling to any of these countries?'
    );
    expect(checkBoxHeader).toBeInTheDocument();
    expect(checkBoxHeader).toHaveClass('govuk-fieldset__heading');

    const checkBoxLegend = checkBoxHeader.parentNode;
    expect(checkBoxLegend).toBeInTheDocument();
    expect(checkBoxLegend).toHaveClass(
      'govuk-fieldset__legend govuk-fieldset__legend--l'
    );

    const checkBoxFieldset = checkBoxLegend?.parentNode as HTMLElement;
    const fieldSetAriaDescribedBy =
      checkBoxFieldset?.getAttribute('aria-describedBy');
    expect(fieldSetAriaDescribedBy).toBe('nations-legend');

    const checkBoxWrapper = checkBoxFieldset.parentNode as HTMLElement;
    expect(checkBoxWrapper).toBeInTheDocument();
    expect(checkBoxWrapper).toHaveClass('govuk-form-group');

    const checkBoxesContainer = checkBoxLegend?.nextSibling as HTMLElement;
    expect(checkBoxesContainer).toBeInTheDocument();
    expect(checkBoxesContainer).toHaveClass('govuk-checkboxes');

    const checkBoxes = screen.getAllByRole('checkbox');
    expect(checkBoxes).toHaveLength(3);

    const checkBox1Label = screen.getByText('British');
    expect(checkBox1Label).toBeInTheDocument();
    const checkBox1 = checkBoxes[0];
    const checkBox1Val = checkBox1.getAttribute('value');
    expect(checkBox1Val).toBe('British');

    const checkBox2Label = screen.getByText('British');
    expect(checkBox2Label).toBeInTheDocument();
    const checkBox2 = checkBoxes[1];
    const checkBox2Val = checkBox2.getAttribute('value');
    expect(checkBox2Val).toBe('Irish');

    const checkBox3Label = screen.getByText('Citizen of another country');
    expect(checkBox3Label).toBeInTheDocument();
    const checkBox3 = checkBoxes[2];
    const checkBox3Val = checkBox3.getAttribute('value');
    expect(checkBox3Val).toBe('Other');
  });

  it('divider checkboxlist renders correctly', async () => {
    const mockOnValueChange = jest.fn();
    render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={clone<CheckBoxDataProps[]>(DividerCheckBoxData)}
        onValueChange={mockOnValueChange}
      />
    );
    const checkBoxHeader = screen.getByText(
      'Will you be travelling to any of these countries?'
    );
    expect(checkBoxHeader).toBeInTheDocument();
    expect(checkBoxHeader).toHaveClass('govuk-fieldset__heading');

    const checkBoxLegend = checkBoxHeader.parentNode;
    expect(checkBoxLegend).toBeInTheDocument();
    expect(checkBoxLegend).toHaveClass(
      'govuk-fieldset__legend govuk-fieldset__legend--l'
    );

    const checkBoxFieldset = checkBoxLegend?.parentNode as HTMLElement;
    const fieldSetAriaDescribedBy =
      checkBoxFieldset?.getAttribute('aria-describedBy');
    expect(fieldSetAriaDescribedBy).toBe('nations-legend');

    const checkBoxWrapper = checkBoxFieldset.parentNode as HTMLElement;
    expect(checkBoxWrapper).toBeInTheDocument();
    expect(checkBoxWrapper).toHaveClass('govuk-form-group');

    const checkBoxesContainer = checkBoxLegend?.nextSibling as HTMLElement;
    expect(checkBoxesContainer).toBeInTheDocument();
    expect(checkBoxesContainer).toHaveClass('govuk-checkboxes');

    const checkBoxes = screen.getAllByRole('checkbox');
    expect(checkBoxes).toHaveLength(3);

    const checkBox1Label = screen.getByText('British');
    expect(checkBox1Label).toBeInTheDocument();
    const checkBox1 = checkBoxes[0];
    const checkBox1Val = checkBox1.getAttribute('value');
    expect(checkBox1Val).toBe('British');

    const checkBox2Label = screen.getByText('British');
    expect(checkBox2Label).toBeInTheDocument();
    const checkBox2 = checkBoxes[1];
    const checkBox2Val = checkBox2.getAttribute('value');
    expect(checkBox2Val).toBe('Irish');

    const checkBox3Label = screen.getByText('Citizen of another country');
    expect(checkBox3Label).toBeInTheDocument();
    const checkBox3 = checkBoxes[2];
    const checkBox3Val = checkBox3.getAttribute('value');
    expect(checkBox3Val).toBe('Other');

    const checkboxDivider = screen.getByText('or');
    expect(checkboxDivider).toBeInTheDocument();
  });

  it('multiQuestion checkboxlist renders correctly', async () => {
    const mockOnValueChange = jest.fn();
    render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={clone<CheckBoxDataProps[]>(DividerCheckBoxData)}
        multiQuestion
        onValueChange={mockOnValueChange}
      />
    );

    const checkBoxLegend = screen.getByText(
      'Will you be travelling to any of these countries?'
    );
    expect(checkBoxLegend).toBeInTheDocument();
    expect(checkBoxLegend).toHaveClass('govuk-fieldset__legend');
  });

  it('checkboxlist renders correctly with a hint', async () => {
    const mockOnValueChange = jest.fn();
    render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={clone<CheckBoxDataProps[]>(CheckBoxData)}
        hint="This is a hint"
        onValueChange={mockOnValueChange}
      />
    );
    const checkBoxHeader = screen.getByText(
      'Will you be travelling to any of these countries?'
    );

    const checkBoxLegend = checkBoxHeader.parentNode;
    const checkBoxFieldset = checkBoxLegend?.parentNode as HTMLElement;
    const fieldSetAriaDescribedBy =
      checkBoxFieldset?.getAttribute('aria-describedBy');
    expect(fieldSetAriaDescribedBy).toBe('nations-hint nations-legend');

    const hint = screen.getByText('This is a hint');
    expect(hint).toBeInTheDocument();
    expect(hint).toHaveClass('govuk-hint');
  });

  it('checkboxlist renders correctly with a checked element', async () => {
    const mockOnValueChange = jest.fn();
    const initData = clone<CheckBoxDataProps[]>(CheckBoxData);
    initData[0].checked = true;
    render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={initData}
        onValueChange={mockOnValueChange}
      />
    );
    const checkBoxes = screen.getAllByRole('checkbox');
    expect(checkBoxes).toHaveLength(3);
    const checkBox1 = checkBoxes[0];
    expect(checkBox1).toBeChecked();
    const checkBox2 = checkBoxes[1];
    expect(checkBox2).not.toBeChecked();
    const checkBox3 = checkBoxes[2];
    expect(checkBox3).not.toBeChecked();
  });

  it('compact checkboxlist renders correctly', async () => {
    const mockOnValueChange = jest.fn();
    render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={clone<CheckBoxDataProps[]>(DividerCheckBoxData)}
        onValueChange={mockOnValueChange}
      />
    );
    const checkBoxHeader = screen.getByText(
      'Will you be travelling to any of these countries?'
    );

    const checkBoxLegend = checkBoxHeader.parentNode;
    const checkBoxesContainer = checkBoxLegend?.nextSibling as HTMLElement;
    expect(checkBoxesContainer).toBeInTheDocument();
    expect(checkBoxesContainer).toHaveClass('govuk-checkboxes');
  });

  it('toggle checkboxlist renders correctly', async () => {
    const mockOnValueChange = jest.fn();
    render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={clone<CheckBoxDataProps[]>(CheckBoxData)}
        showToggle={true}
        onValueChange={mockOnValueChange}
      />
    );
    const checkBoxHeader = screen.getByText(
      'Will you be travelling to any of these countries?'
    );
    expect(checkBoxHeader).toBeInTheDocument();
    expect(checkBoxHeader).toHaveClass('govuk-fieldset__heading');

    const checkBoxLegend = checkBoxHeader.parentNode;
    expect(checkBoxLegend).toBeInTheDocument();
    expect(checkBoxLegend).toHaveClass(
      'govuk-fieldset__legend govuk-fieldset__legend--l'
    );

    const checkBoxFieldset = checkBoxLegend?.parentNode as HTMLElement;
    const fieldSetAriaDescribedBy =
      checkBoxFieldset?.getAttribute('aria-describedBy');
    expect(fieldSetAriaDescribedBy).toBe('nations-legend');

    const checkBoxWrapper = checkBoxFieldset.parentNode as HTMLElement;
    expect(checkBoxWrapper).toBeInTheDocument();
    expect(checkBoxWrapper).toHaveClass('govuk-form-group');

    const checkBoxesContainer = checkBoxLegend?.nextSibling as HTMLElement;
    expect(checkBoxesContainer).toBeInTheDocument();
    expect(checkBoxesContainer).toHaveClass('govuk-checkboxes');

    const checkBoxes = screen.getAllByRole('checkbox');
    expect(checkBoxes).toHaveLength(4);

    const checkBoxToggleLabel = screen.getByText('Select all');
    expect(checkBoxToggleLabel).toBeInTheDocument();
    const checkBoxToggle = checkBoxes[0];
    const checkBoxToggleVal = checkBoxToggle.getAttribute('value');
    expect(checkBoxToggleVal).toBe('All selected');

    const checkBox1Label = screen.getByText('British');
    expect(checkBox1Label).toBeInTheDocument();
    const checkBox1 = checkBoxes[1];
    const checkBox1Val = checkBox1.getAttribute('value');
    expect(checkBox1Val).toBe('British');

    const checkBox2Label = screen.getByText('British');
    expect(checkBox2Label).toBeInTheDocument();
    const checkBox2 = checkBoxes[2];
    const checkBox2Val = checkBox2.getAttribute('value');
    expect(checkBox2Val).toBe('Irish');

    const checkBox3Label = screen.getByText('Citizen of another country');
    expect(checkBox3Label).toBeInTheDocument();
    const checkBox3 = checkBoxes[3];
    const checkBox3Val = checkBox3.getAttribute('value');
    expect(checkBox3Val).toBe('Other');

    const checkboxDivider = screen.getByText('or');
    expect(checkboxDivider).toBeInTheDocument();
  });

  it('checkboxlist renders correctly with an error', async () => {
    const mockOnValueChange = jest.fn();
    render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={clone<CheckBoxDataProps[]>(CheckBoxData)}
        error="You must select at least one country"
        onValueChange={mockOnValueChange}
      />
    );
    const checkBoxHeader = screen.getByText(
      'Will you be travelling to any of these countries?'
    );
    const checkBoxLegend = checkBoxHeader.parentNode;
    const checkBoxFieldset = checkBoxLegend?.parentNode as HTMLElement;
    const fieldSetAriaDescribedBy =
      checkBoxFieldset?.getAttribute('aria-describedBy');
    expect(fieldSetAriaDescribedBy).toBe('nations-error nations-legend');

    const checkBoxWrapper = checkBoxFieldset.parentNode as HTMLElement;
    expect(checkBoxWrapper).toBeInTheDocument();
    expect(checkBoxWrapper).toHaveClass(
      'govuk-form-group govuk-form-group--error'
    );

    const error = screen.getByText('You must select at least one country');
    expect(error).toBeInTheDocument();
    expect(error).toHaveClass('govuk-error-message');
  });
});

describe('Checkbox list functions correctly', () => {
  it('selected values are updated correctly on checking a single checkbox', async () => {
    const mockOnValueChange = jest.fn();

    render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={clone<CheckBoxDataProps[]>(CheckBoxData)}
        onValueChange={mockOnValueChange}
      />
    );

    const checkBoxes = screen.getAllByRole('checkbox');
    expect(checkBoxes[0]).not.toBeChecked();
    expect(checkBoxes[1]).not.toBeChecked();
    expect(checkBoxes[2]).not.toBeChecked();

    await userEvent.click(checkBoxes[0]);

    expect(checkBoxes[0]).toBeChecked();
    expect(checkBoxes[1]).not.toBeChecked();
    expect(checkBoxes[2]).not.toBeChecked();
  });

  it('selected values are updated correctly on un-checking a single checkbox', async () => {
    const mockOnValueChange = jest.fn();
    const initData = clone<CheckBoxDataProps[]>(CheckBoxData);
    const resultData = clone<CheckBoxDataProps[]>(CheckBoxData);
    initData[0].checked = true;
    resultData[0].checked = false;

    render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={initData}
        onValueChange={mockOnValueChange}
      />
    );

    const checkBoxes = screen.getAllByRole('checkbox');
    expect(checkBoxes[0]).toBeChecked();
    expect(checkBoxes[1]).not.toBeChecked();
    expect(checkBoxes[2]).not.toBeChecked();

    await userEvent.click(checkBoxes[0]);

    expect(checkBoxes[0]).not.toBeChecked();
    expect(checkBoxes[1]).not.toBeChecked();
    expect(checkBoxes[2]).not.toBeChecked();

    expect(mockOnValueChange).toHaveBeenCalledTimes(1);
    expect(mockOnValueChange).toHaveBeenCalledWith(resultData);
  });

  it('selected values are updated correctly on un-checking multiple checkboxes', async () => {
    const mockOnValueChange = jest.fn();
    const initData = clone<CheckBoxDataProps[]>(CheckBoxData);
    initData[0].checked = true;
    initData[1].checked = false;
    initData[2].checked = true;

    render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={initData}
        onValueChange={mockOnValueChange}
      />
    );

    const checkBoxes = screen.getAllByRole('checkbox');
    expect(checkBoxes[0]).toBeChecked();
    expect(checkBoxes[1]).not.toBeChecked();
    expect(checkBoxes[2]).toBeChecked();

    await userEvent.click(checkBoxes[0]);
    await userEvent.click(checkBoxes[2]);

    expect(checkBoxes[0]).not.toBeChecked();
    expect(checkBoxes[1]).not.toBeChecked();
    expect(checkBoxes[2]).not.toBeChecked();
  });

  it('all values are updated correctly on checking a toggle checkbox', async () => {
    const mockOnValueChange = jest.fn();
    const initData = clone<CheckBoxDataProps[]>(CheckBoxData);

    render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={initData}
        onValueChange={mockOnValueChange}
        showToggle={true}
      />
    );

    let checkBoxes = screen.getAllByRole('checkbox');

    let checkBoxToggleLabel = screen.getByText('Select all');
    expect(checkBoxToggleLabel).toBeInTheDocument();
    let checkBoxToggle = checkBoxes[0];
    let checkBoxToggleVal = checkBoxToggle.getAttribute('value');
    expect(checkBoxToggleVal).toBe('All selected');

    expect(checkBoxes[0]).not.toBeChecked();
    expect(checkBoxes[1]).not.toBeChecked();
    expect(checkBoxes[2]).not.toBeChecked();
    expect(checkBoxes[3]).not.toBeChecked();

    await userEvent.click(checkBoxes[0]);

    checkBoxToggleLabel = screen.getByText('De-Select all');
    expect(checkBoxToggleLabel).toBeInTheDocument();
    checkBoxToggle = checkBoxes[0];
    checkBoxToggleVal = checkBoxToggle.getAttribute('value');
    expect(checkBoxToggleVal).toBe('All selected');

    checkBoxes = screen.getAllByRole('checkbox');

    expect(checkBoxes[0]).toBeChecked();
    expect(checkBoxes[1]).toBeChecked();
    expect(checkBoxes[2]).toBeChecked();
    expect(checkBoxes[3]).toBeChecked();

    await userEvent.click(checkBoxes[0]);

    checkBoxes = screen.getAllByRole('checkbox');

    expect(checkBoxes[0]).not.toBeChecked();
    expect(checkBoxes[1]).not.toBeChecked();
    expect(checkBoxes[2]).not.toBeChecked();
    expect(checkBoxes[3]).not.toBeChecked();
  });
});
