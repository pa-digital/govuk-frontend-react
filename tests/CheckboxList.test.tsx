import React from 'react';
import {
  act,
  fireEvent,
  render,
  screen,
  axe,
  toHaveNoViolations,
} from '../src/Helper/testHelper';
import { CheckBoxDataProps, CheckBoxList } from '../src/UI/Checkboxes/CheckboxList';

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
  it('default values must not fail any accessibility tests', async () => {
    const initData: CheckBoxDataProps[] = [];
    DividerCheckBoxData.forEach((data) => {
      initData.push({
        text: data.text,
        value: data.value,
        hint: data.hint,
        divider: data.divider,
        checked: data.checked,
      });
    });
    const { container } = render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={initData}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('checked values must not fail any accessibility tests', async () => {
    const initData: CheckBoxDataProps[] = [];
    DividerCheckBoxData.forEach((data) => {
      initData.push({
        text: data.text,
        value: data.value,
        hint: data.hint,
        divider: data.divider,
        checked: data.checked,
      });
    });
    initData[0].checked = true;
    initData[1].checked = true;
    const { container } = render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={initData}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('hint state must not fail any accessibility tests', async () => {
    const initData: CheckBoxDataProps[] = [];
    DividerCheckBoxData.forEach((data) => {
      initData.push({
        text: data.text,
        value: data.value,
        hint: data.hint,
        divider: data.divider,
        checked: data.checked,
      });
    });
    const { container } = render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={initData}
        hint="This is a hint"
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('multi question state must not fail any accessibility tests', async () => {
    const initData: CheckBoxDataProps[] = [];
    DividerCheckBoxData.forEach((data) => {
      initData.push({
        text: data.text,
        value: data.value,
        hint: data.hint,
        divider: data.divider,
        checked: data.checked,
      });
    });
    const { container } = render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={initData}
        multiQuestion
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('compact state must not fail any accessibility tests', async () => {
    const initData: CheckBoxDataProps[] = [];
    DividerCheckBoxData.forEach((data) => {
      initData.push({
        text: data.text,
        value: data.value,
        hint: data.hint,
        divider: data.divider,
        checked: data.checked,
      });
    });
    const { container } = render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={initData}
        compact
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('error state must not fail any accessibility tests', async () => {
    const initData: CheckBoxDataProps[] = [];
    DividerCheckBoxData.forEach((data) => {
      initData.push({
        text: data.text,
        value: data.value,
        hint: data.hint,
        divider: data.divider,
        checked: data.checked,
      });
    });
    const { container } = render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={initData}
        error="You must select a value"
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
describe('Checkbox list renders correctly', () => {
  it('default checkboxlist renders correctly', async () => {
    const initData: CheckBoxDataProps[] = [];
    DividerCheckBoxData.forEach((data) => {
      initData.push({
        text: data.text,
        value: data.value,
        hint: data.hint,
        divider: data.divider,
        checked: data.checked,
      });
    });
    render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={initData}
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
    const initData: CheckBoxDataProps[] = [];
    DividerCheckBoxData.forEach((data) => {
      initData.push({
        text: data.text,
        value: data.value,
        hint: data.hint,
        divider: data.divider,
        checked: data.checked,
      });
    });
    render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={initData}
        multiQuestion
      />
    );

    const checkBoxLegend = screen.getByText(
      'Will you be travelling to any of these countries?'
    );
    expect(checkBoxLegend).toBeInTheDocument();
    expect(checkBoxLegend).toHaveClass('govuk-fieldset__legend');
  });

  it('checkboxlist renders correctly with a hint', async () => {
    const initData: CheckBoxDataProps[] = [];
    CheckBoxData.forEach((data) => {
      initData.push({
        text: data.text,
        value: data.value,
        hint: data.hint,
        divider: data.divider,
        checked: data.checked,
      });
    });
    render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={initData}
        hint="This is a hint"
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
    const initData: CheckBoxDataProps[] = [];
    CheckBoxData.forEach((data) => {
      initData.push({
        text: data.text,
        value: data.value,
        hint: data.hint,
        divider: data.divider,
        checked: data.checked,
      });
    });
    initData[0].checked = true;
    render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={initData}
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
    const initData: CheckBoxDataProps[] = [];
    DividerCheckBoxData.forEach((data) => {
      initData.push({
        text: data.text,
        value: data.value,
        hint: data.hint,
        divider: data.divider,
        checked: data.checked,
      });
    });
    render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={initData}
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

  it('checkboxlist renders correctly with an error', async () => {
    const initData: CheckBoxDataProps[] = [];
    CheckBoxData.forEach((data) => {
      initData.push({
        text: data.text,
        value: data.value,
        hint: data.hint,
        divider: data.divider,
        checked: data.checked,
      });
    });
    initData[0].checked = true;
    render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={initData}
        error="You must select at least one country"
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
    const initData: CheckBoxDataProps[] = [];
    const resultData: CheckBoxDataProps[] = [];
    CheckBoxData.forEach((data) => {
      resultData.push({
        text: data.text,
        value: data.value,
        hint: data.hint,
        divider: data.divider,
        checked: data.checked,
      });
      initData.push({
        text: data.text,
        value: data.value,
        hint: data.hint,
        divider: data.divider,
        checked: data.checked,
      });
    });

    resultData[0].checked = true;

    render(
      <CheckBoxList
        identifier="nations"
        header="Will you be travelling to any of these countries?"
        data={initData}
        onValueChange={mockOnValueChange}
      />
    );

    const checkBoxes = screen.getAllByRole('checkbox');
    expect(checkBoxes[0]).not.toBeChecked();
    expect(checkBoxes[1]).not.toBeChecked();
    expect(checkBoxes[2]).not.toBeChecked();

    act(() => {
      fireEvent.click(checkBoxes[0]);
    });

    expect(checkBoxes[0]).toBeChecked();
    expect(checkBoxes[1]).not.toBeChecked();
    expect(checkBoxes[2]).not.toBeChecked();

    expect(mockOnValueChange).toHaveBeenCalledTimes(1);
    expect(mockOnValueChange).toHaveBeenCalledWith(resultData);
  });

  it('selected values are updated correctly on un-checking a single checkbox', async () => {
    const mockOnValueChange = jest.fn();
    const initData: CheckBoxDataProps[] = [];
    const resultData: CheckBoxDataProps[] = [];
    CheckBoxData.forEach((data) => {
      initData.push({
        text: data.text,
        value: data.value,
        hint: data.hint,
        divider: data.divider,
        checked: data.checked,
      });
      resultData.push({
        text: data.text,
        value: data.value,
        hint: data.hint,
        divider: data.divider,
        checked: data.checked,
      });
    });

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

    act(() => {
      fireEvent.click(checkBoxes[0]);
    });

    expect(checkBoxes[0]).not.toBeChecked();
    expect(checkBoxes[1]).not.toBeChecked();
    expect(checkBoxes[2]).not.toBeChecked();

    expect(mockOnValueChange).toHaveBeenCalledTimes(1);
    expect(mockOnValueChange).toHaveBeenCalledWith(resultData);
  });

  it('selected values are updated correctly on un-checking multiple checkboxes', async () => {
    const mockOnValueChange = jest.fn();
    const initData: CheckBoxDataProps[] = [];
    const resultData: CheckBoxDataProps[] = [];
    CheckBoxData.forEach((data) => {
      initData.push({
        text: data.text,
        value: data.value,
        hint: data.hint,
        divider: data.divider,
        checked: data.checked,
      });
      resultData.push({
        text: data.text,
        value: data.value,
        hint: data.hint,
        divider: data.divider,
        checked: data.checked,
      });
    });

    initData[0].checked = true;
    initData[2].checked = true;
    resultData[0].checked = false;
    resultData[2].checked = false;

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

    act(() => {
      fireEvent.click(checkBoxes[0]);
    });
    act(() => {
      fireEvent.click(checkBoxes[2]);
    });

    expect(checkBoxes[0]).not.toBeChecked();
    expect(checkBoxes[1]).not.toBeChecked();
    expect(checkBoxes[2]).not.toBeChecked();

    expect(mockOnValueChange).toHaveBeenCalledTimes(2);
    expect(mockOnValueChange).toHaveBeenCalledWith(resultData);
  });
});
