import React from 'react';
import { render, axe, toHaveNoViolations } from '../src/Helper/testHelper';
import { Button } from '../src/UI/Buttons/Button';
import { ButtonGroup } from '../src/UI/Buttons/ButtonGroup';

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
