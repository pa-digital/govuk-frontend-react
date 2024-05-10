import React from 'react';
import {
  render,
  axe,
  screen,
  toHaveNoViolations,
} from '../../Helper/testHelper';
import { Button } from './Button';
import { ButtonGroup } from './ButtonGroup';

expect.extend(toHaveNoViolations);

describe('Button Group component is accessible', () => {
  it('must not fail any accessibility tests by default', async () => {
    const { container } = render(
      <ButtonGroup>
        <></>
      </ButtonGroup>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests when populated', async () => {
    const { container } = render(
      <ButtonGroup>
        <>
          <Button>button 1</Button>
          <Button variant="secondary">button 2</Button>
          <Button variant="warning" disabled>
            button 3
          </Button>
        </>
      </ButtonGroup>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Button Group renders correctly', () => {
  it('must render the wrapper correctly', async () => {
    render(
      <ButtonGroup>
        <>
          <Button>button 1</Button>
          <Button variant="secondary">button 2</Button>
        </>
      </ButtonGroup>
    );
    const buttons = await screen.findAllByRole('button');
    expect(buttons.length).toBe(2);
    const buttonGroupWrapper = buttons[0].parentNode as HTMLDivElement;
    expect(buttonGroupWrapper).toBeInTheDocument();
    expect(buttonGroupWrapper).toHaveClass('govuk-button-group');
  });
});
