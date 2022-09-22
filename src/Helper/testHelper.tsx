import { render, RenderOptions } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

export * from '@testing-library/react';
export * from '@testing-library/jest-dom';
export * from '@testing-library/user-event';
export { axe, toHaveNoViolations } from 'jest-axe';

interface RenderProps {
  children?: any;
  initialRoutes?: { [name: string]: string }[];
}

const AppProvider = ({ children, initialRoutes }: RenderProps) => {
  return (
    <MemoryRouter initialEntries={initialRoutes ?? ['/']}>
      {children}
    </MemoryRouter>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
  initialRoutes?: { [name: string]: string }[]
) => {
  return render(ui, {
    wrapper: (args) => AppProvider({ ...args, initialRoutes }),
    ...options,
  });
};

export { customRender as render, userEvent };
