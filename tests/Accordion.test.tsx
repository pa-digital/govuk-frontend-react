import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
  userEvent,
} from '../src/Helper/testHelper';
import { Content } from '../src/UI/Typography/Content';
import { Accordion, AccordionElement } from '../src/UI/Accordion/Accordion';

expect.extend(toHaveNoViolations);

const accordionElementData: AccordionElement[] = [
  {
    title: 'First Element',
    expanded: false,
    content: (
      <>
        <Content>This is the first element</Content>
      </>
    ),
  },
  {
    title: 'Second Element',
    expanded: false,
    content: (
      <>
        <Content>This is the second element</Content>
      </>
    ),
  },
  {
    title: 'Third Element',
    expanded: false,
    content: (
      <>
        <Content>This is the third element</Content>
      </>
    ),
  },
];

const accordionExpandedElementData: AccordionElement[] = [
  {
    title: 'First Element',
    expanded: false,
    content: (
      <>
        <Content>This is the first element</Content>
      </>
    ),
  },
  {
    title: 'Second Element',
    expanded: true,
    content: (
      <>
        <Content>This is the second element</Content>
      </>
    ),
  },
  {
    title: 'Third Element',
    expanded: false,
    content: (
      <>
        <Content>This is the third element</Content>
      </>
    ),
  },
];

const accordionSummaryContentElementData: AccordionElement[] = [
  {
    title: 'First Element',
    expanded: false,
    summary: (
      <>
        <Content>This is the optional summary</Content>
      </>
    ),
    content: (
      <>
        <Content>This is the first element first paragraph</Content>
        <Content>This is the first element second paragraph</Content>
      </>
    ),
  },
  {
    title: 'Second Element',
    expanded: false,
    content: (
      <>
        <Content>This is the second element</Content>
      </>
    ),
  },
  {
    title: 'Third Element',
    expanded: false,
    content: (
      <>
        <Content>This is the third element</Content>
      </>
    ),
  },
];

describe('All Accordion is accessible', () => {
  it('default Accordion is accessible', async () => {
    const { container } = render(
      <Accordion
        expanded={false}
        id="default"
        elements={accordionElementData}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('expanded Accordion is accessible', async () => {
    const { container } = render(
      <Accordion expanded={true} id="default" elements={accordionElementData} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('summary Accordion is accessible', async () => {
    const { container } = render(
      <Accordion
        expanded={true}
        id="summary"
        elements={accordionSummaryContentElementData}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('expanded Element Accordion is accessible', async () => {
    const { container } = render(
      <Accordion
        expanded={true}
        id="expanded"
        elements={accordionExpandedElementData}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Accordion wrapper renders correctly', () => {
  it('default accordion renders correct content', async () => {
    render(
      <Accordion
        expanded={false}
        id="default"
        elements={accordionElementData}
      />
    );
    const showAllElement = screen.getByText('Show all sections');
    expect(showAllElement).toBeInTheDocument();
    expect(showAllElement).toHaveClass('govuk-accordion__show-all-text');

    const showAllButton = showAllElement.parentNode as HTMLElement;
    expect(showAllButton).toBeInTheDocument();
    expect(showAllButton).toHaveClass('govuk-accordion__show-all');
    expect(showAllButton).toHaveAttribute('type', 'button');
    expect(showAllButton).toHaveAttribute('aria-expanded', 'false');

    const toggleAllIcon = showAllButton.firstChild as HTMLElement;
    expect(toggleAllIcon).toBeInTheDocument();
    expect(toggleAllIcon).toHaveClass(
      'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down'
    );

    const showAllWrapper = showAllButton.parentNode as HTMLElement;
    expect(showAllWrapper).toBeInTheDocument();
    expect(showAllWrapper).toHaveClass('govuk-accordion__controls');

    const accordionWrapper = showAllWrapper.parentNode as HTMLElement;
    expect(accordionWrapper).toBeInTheDocument();
    expect(accordionWrapper).toHaveClass('govuk-accordion');
    expect(accordionWrapper).toHaveAttribute('data-module', 'govuk-accordion');
    expect(accordionWrapper).toHaveAttribute('id', 'accordion-default');
  });

  it('partially expanded accordion renders correct content', async () => {
    render(
      <Accordion
        expanded={false}
        id="partial-expanded"
        elements={accordionExpandedElementData}
      />
    );
    const showAllElement = screen.getByText('Show all sections');
    expect(showAllElement).toBeInTheDocument();
    expect(showAllElement).toHaveClass('govuk-accordion__show-all-text');

    const showAllButton = showAllElement.parentNode as HTMLElement;
    expect(showAllButton).toBeInTheDocument();
    expect(showAllButton).toHaveClass('govuk-accordion__show-all');
    expect(showAllButton).toHaveAttribute('type', 'button');
    expect(showAllButton).toHaveAttribute('aria-expanded', 'false');

    const toggleAllIcon = showAllButton.firstChild as HTMLElement;
    expect(toggleAllIcon).toBeInTheDocument();
    expect(toggleAllIcon).toHaveClass('govuk-accordion-nav__chevron');

    const showAllWrapper = showAllButton.parentNode as HTMLElement;
    expect(showAllWrapper).toBeInTheDocument();
    expect(showAllWrapper).toHaveClass('govuk-accordion__controls');

    const accordionWrapper = showAllWrapper.parentNode as HTMLElement;
    expect(accordionWrapper).toBeInTheDocument();
    expect(accordionWrapper).toHaveClass('govuk-accordion');
    expect(accordionWrapper).toHaveAttribute('data-module', 'govuk-accordion');
    expect(accordionWrapper).toHaveAttribute(
      'id',
      'accordion-partial-expanded'
    );
  });

  it('all expanded accordion renders correct content', async () => {
    render(
      <Accordion expanded={true} id="default" elements={accordionElementData} />
    );
    const showAllElement = screen.getByText('Hide all sections');
    expect(showAllElement).toBeInTheDocument();
    expect(showAllElement).toHaveClass('govuk-accordion__show-all-text');

    const showAllButton = showAllElement.parentNode as HTMLElement;
    expect(showAllButton).toBeInTheDocument();
    expect(showAllButton).toHaveClass('govuk-accordion__show-all');
    expect(showAllButton).toHaveAttribute('type', 'button');
    expect(showAllButton).toHaveAttribute('aria-expanded', 'true');

    const toggleAllIcon = showAllButton.firstChild as HTMLElement;
    expect(toggleAllIcon).toBeInTheDocument();
    expect(toggleAllIcon).toHaveClass('govuk-accordion-nav__chevron');

    const showAllWrapper = showAllButton.parentNode as HTMLElement;
    expect(showAllWrapper).toBeInTheDocument();
    expect(showAllWrapper).toHaveClass('govuk-accordion__controls');

    const accordionWrapper = showAllWrapper.parentNode as HTMLElement;
    expect(accordionWrapper).toBeInTheDocument();
    expect(accordionWrapper).toHaveClass('govuk-accordion');
    expect(accordionWrapper).toHaveAttribute('data-module', 'govuk-accordion');
    expect(accordionWrapper).toHaveAttribute('id', 'accordion-default');
  });
});

describe('Accordion elements render correctly', () => {
  it('default accordion renders elements content', async () => {
    render(
      <Accordion
        expanded={false}
        id="default"
        elements={accordionElementData}
      />
    );

    const firstElementTitle = screen.getByText('First Element');
    expect(firstElementTitle).toBeInTheDocument();
    expect(firstElementTitle).toHaveClass(
      'govuk-accordion__section-heading-text-focus'
    );
    const firstElementTitleWrapper =
      firstElementTitle.parentNode as HTMLElement;
    expect(firstElementTitleWrapper).toBeInTheDocument();
    expect(firstElementTitleWrapper).toHaveClass(
      'govuk-accordion__section-heading-text'
    );
    expect(firstElementTitleWrapper).toHaveAttribute(
      'id',
      'accordion-default-heading-1'
    );
    const firstElementButton =
      firstElementTitleWrapper.parentNode as HTMLElement;
    expect(firstElementButton).toBeInTheDocument();
    expect(firstElementButton).toHaveClass('govuk-accordion__section-button');
    expect(firstElementButton).toHaveAttribute('type', 'button');
    expect(firstElementButton).toHaveAttribute('aria-expanded', 'false');
    expect(firstElementButton).toHaveAttribute(
      'aria-label',
      'First Element, Show this section'
    );
    expect(firstElementButton).toHaveAttribute(
      'aria-controls',
      'accordion-default-content-1'
    );
    const firstElementHeader = firstElementButton.parentNode as HTMLElement;
    expect(firstElementHeader).toBeInTheDocument();
    expect(firstElementHeader).toHaveClass('govuk-accordion__section-heading');
    const firstElementHeaderWrapper =
      firstElementHeader.parentNode as HTMLElement;
    expect(firstElementHeaderWrapper).toBeInTheDocument();
    expect(firstElementHeaderWrapper).toHaveClass(
      'govuk-accordion__section-header'
    );
    const firstElementWrapper =
      firstElementHeaderWrapper.parentNode as HTMLElement;
    expect(firstElementWrapper).toBeInTheDocument();
    expect(firstElementWrapper).toHaveClass('govuk-accordion__section');
    const firstElementText = screen.getByText('This is the first element');
    expect(firstElementText).toBeInTheDocument();
    expect(firstElementText).toHaveClass('govuk-body');
    const firstElementTextWrapper = firstElementText.parentNode as HTMLElement;
    expect(firstElementTextWrapper).toBeInTheDocument();
    expect(firstElementTextWrapper).toHaveClass(
      'govuk-accordion__section-content'
    );
    expect(firstElementTextWrapper).toHaveAttribute(
      'aria-labelledby',
      'accordion-default-heading-1'
    );
    expect(firstElementTextWrapper).toHaveAttribute(
      'id',
      'accordion-default-content-1'
    );

    const secondElementTitle = screen.getByText('Second Element');
    expect(secondElementTitle).toBeInTheDocument();
    expect(secondElementTitle).toHaveClass(
      'govuk-accordion__section-heading-text-focus'
    );
    const secondElementTitleWrapper =
      secondElementTitle.parentNode as HTMLElement;
    expect(secondElementTitleWrapper).toBeInTheDocument();
    expect(secondElementTitleWrapper).toHaveClass(
      'govuk-accordion__section-heading-text'
    );
    expect(secondElementTitleWrapper).toHaveAttribute(
      'id',
      'accordion-default-heading-2'
    );
    const secondElementButton =
      secondElementTitleWrapper.parentNode as HTMLElement;
    expect(secondElementButton).toBeInTheDocument();
    expect(secondElementButton).toHaveClass('govuk-accordion__section-button');
    expect(secondElementButton).toHaveAttribute('type', 'button');
    expect(secondElementButton).toHaveAttribute('aria-expanded', 'false');
    expect(secondElementButton).toHaveAttribute(
      'aria-label',
      'Second Element, Show this section'
    );
    expect(secondElementButton).toHaveAttribute(
      'aria-controls',
      'accordion-default-content-2'
    );
    const secondElementHeader = secondElementButton.parentNode as HTMLElement;
    expect(secondElementHeader).toBeInTheDocument();
    expect(secondElementHeader).toHaveClass('govuk-accordion__section-heading');
    const secondElementHeaderWrapper =
      secondElementHeader.parentNode as HTMLElement;
    expect(secondElementHeaderWrapper).toBeInTheDocument();
    expect(secondElementHeaderWrapper).toHaveClass(
      'govuk-accordion__section-header'
    );
    const secondElementWrapper =
      secondElementHeaderWrapper.parentNode as HTMLElement;
    expect(secondElementWrapper).toBeInTheDocument();
    expect(secondElementWrapper).toHaveClass('govuk-accordion__section');
    const secondElementText = screen.getByText('This is the second element');
    expect(secondElementText).toBeInTheDocument();
    expect(secondElementText).toHaveClass('govuk-body');
    const secondElementTextWrapper =
      secondElementText.parentNode as HTMLElement;
    expect(secondElementTextWrapper).toBeInTheDocument();
    expect(secondElementTextWrapper).toHaveClass(
      'govuk-accordion__section-content'
    );
    expect(secondElementTextWrapper).toHaveAttribute(
      'aria-labelledby',
      'accordion-default-heading-2'
    );
    expect(secondElementTextWrapper).toHaveAttribute(
      'id',
      'accordion-default-content-2'
    );

    const thirdElementTitle = screen.getByText('Third Element');
    expect(thirdElementTitle).toBeInTheDocument();
    expect(thirdElementTitle).toHaveClass(
      'govuk-accordion__section-heading-text-focus'
    );
    const thirdElementTitleWrapper =
      thirdElementTitle.parentNode as HTMLElement;
    expect(thirdElementTitleWrapper).toBeInTheDocument();
    expect(thirdElementTitleWrapper).toHaveClass(
      'govuk-accordion__section-heading-text'
    );
    expect(thirdElementTitleWrapper).toHaveAttribute(
      'id',
      'accordion-default-heading-3'
    );
    const thirdElementButton =
      thirdElementTitleWrapper.parentNode as HTMLElement;
    expect(thirdElementButton).toBeInTheDocument();
    expect(thirdElementButton).toHaveClass('govuk-accordion__section-button');
    expect(thirdElementButton).toHaveAttribute('type', 'button');
    expect(thirdElementButton).toHaveAttribute('aria-expanded', 'false');
    expect(thirdElementButton).toHaveAttribute(
      'aria-label',
      'Third Element, Show this section'
    );
    expect(thirdElementButton).toHaveAttribute(
      'aria-controls',
      'accordion-default-content-3'
    );
    const thirdElementHeader = thirdElementButton.parentNode as HTMLElement;
    expect(thirdElementHeader).toBeInTheDocument();
    expect(thirdElementHeader).toHaveClass('govuk-accordion__section-heading');
    const thirdElementHeaderWrapper =
      thirdElementHeader.parentNode as HTMLElement;
    expect(thirdElementHeaderWrapper).toBeInTheDocument();
    expect(thirdElementHeaderWrapper).toHaveClass(
      'govuk-accordion__section-header'
    );
    const thirdElementWrapper =
      thirdElementHeaderWrapper.parentNode as HTMLElement;
    expect(thirdElementWrapper).toBeInTheDocument();
    expect(thirdElementWrapper).toHaveClass('govuk-accordion__section');
    const thirdElementText = screen.getByText('This is the third element');
    expect(thirdElementText).toBeInTheDocument();
    expect(thirdElementText).toHaveClass('govuk-body');
    const thirdElementTextWrapper = thirdElementText.parentNode as HTMLElement;
    expect(thirdElementTextWrapper).toBeInTheDocument();
    expect(thirdElementTextWrapper).toHaveClass(
      'govuk-accordion__section-content'
    );
    expect(thirdElementTextWrapper).toHaveAttribute(
      'aria-labelledby',
      'accordion-default-heading-3'
    );
    expect(thirdElementTextWrapper).toHaveAttribute(
      'id',
      'accordion-default-content-3'
    );
  });

  it('partially expanded accordion renders elements content', async () => {
    render(
      <Accordion
        expanded={false}
        id="partially-expanded"
        elements={accordionExpandedElementData}
      />
    );

    const firstElementTitle = screen.getByText('First Element');
    expect(firstElementTitle).toBeInTheDocument();
    expect(firstElementTitle).toHaveClass(
      'govuk-accordion__section-heading-text-focus'
    );
    const firstElementTitleWrapper =
      firstElementTitle.parentNode as HTMLElement;
    expect(firstElementTitleWrapper).toBeInTheDocument();
    expect(firstElementTitleWrapper).toHaveClass(
      'govuk-accordion__section-heading-text'
    );
    expect(firstElementTitleWrapper).toHaveAttribute(
      'id',
      'accordion-partially-expanded-heading-1'
    );
    const firstElementButton =
      firstElementTitleWrapper.parentNode as HTMLElement;
    expect(firstElementButton).toBeInTheDocument();
    expect(firstElementButton).toHaveClass('govuk-accordion__section-button');
    expect(firstElementButton).toHaveAttribute('type', 'button');
    expect(firstElementButton).toHaveAttribute('aria-expanded', 'false');
    expect(firstElementButton).toHaveAttribute(
      'aria-label',
      'First Element, Show this section'
    );
    expect(firstElementButton).toHaveAttribute(
      'aria-controls',
      'accordion-partially-expanded-content-1'
    );
    const firstElementHeader = firstElementButton.parentNode as HTMLElement;
    expect(firstElementHeader).toBeInTheDocument();
    expect(firstElementHeader).toHaveClass('govuk-accordion__section-heading');
    const firstElementHeaderWrapper =
      firstElementHeader.parentNode as HTMLElement;
    expect(firstElementHeaderWrapper).toBeInTheDocument();
    expect(firstElementHeaderWrapper).toHaveClass(
      'govuk-accordion__section-header'
    );
    const firstElementWrapper =
      firstElementHeaderWrapper.parentNode as HTMLElement;
    expect(firstElementWrapper).toBeInTheDocument();
    expect(firstElementWrapper).toHaveClass('govuk-accordion__section');
    const firstElementText = screen.getByText('This is the first element');
    expect(firstElementText).toBeInTheDocument();
    expect(firstElementText).toHaveClass('govuk-body');
    const firstElementTextWrapper = firstElementText.parentNode as HTMLElement;
    expect(firstElementTextWrapper).toBeInTheDocument();
    expect(firstElementTextWrapper).toHaveClass(
      'govuk-accordion__section-content'
    );
    expect(firstElementTextWrapper).toHaveAttribute(
      'aria-labelledby',
      'accordion-partially-expanded-heading-1'
    );
    expect(firstElementTextWrapper).toHaveAttribute(
      'id',
      'accordion-partially-expanded-content-1'
    );

    const secondElementTitle = screen.getByText('Second Element');
    expect(secondElementTitle).toBeInTheDocument();
    expect(secondElementTitle).toHaveClass(
      'govuk-accordion__section-heading-text-focus'
    );
    const secondElementTitleWrapper =
      secondElementTitle.parentNode as HTMLElement;
    expect(secondElementTitleWrapper).toBeInTheDocument();
    expect(secondElementTitleWrapper).toHaveClass(
      'govuk-accordion__section-heading-text'
    );
    expect(secondElementTitleWrapper).toHaveAttribute(
      'id',
      'accordion-partially-expanded-heading-2'
    );
    const secondElementButton =
      secondElementTitleWrapper.parentNode as HTMLElement;
    expect(secondElementButton).toBeInTheDocument();
    expect(secondElementButton).toHaveClass('govuk-accordion__section-button');
    expect(secondElementButton).toHaveAttribute('type', 'button');
    expect(secondElementButton).toHaveAttribute('aria-expanded', 'true');
    expect(secondElementButton).toHaveAttribute(
      'aria-label',
      'Second Element, Hide this section'
    );
    expect(secondElementButton).toHaveAttribute(
      'aria-controls',
      'accordion-partially-expanded-content-2'
    );
    const secondElementHeader = secondElementButton.parentNode as HTMLElement;
    expect(secondElementHeader).toBeInTheDocument();
    expect(secondElementHeader).toHaveClass('govuk-accordion__section-heading');
    const secondElementHeaderWrapper =
      secondElementHeader.parentNode as HTMLElement;
    expect(secondElementHeaderWrapper).toBeInTheDocument();
    expect(secondElementHeaderWrapper).toHaveClass(
      'govuk-accordion__section-header'
    );
    const secondElementWrapper =
      secondElementHeaderWrapper.parentNode as HTMLElement;
    expect(secondElementWrapper).toBeInTheDocument();
    expect(secondElementWrapper).toHaveClass(
      'govuk-accordion__section govuk-accordion__section--expanded'
    );
    const secondElementText = screen.getByText('This is the second element');
    expect(secondElementText).toBeInTheDocument();
    expect(secondElementText).toHaveClass('govuk-body');
    const secondElementTextWrapper =
      secondElementText.parentNode as HTMLElement;
    expect(secondElementTextWrapper).toBeInTheDocument();
    expect(secondElementTextWrapper).toHaveClass(
      'govuk-accordion__section-content'
    );
    expect(secondElementTextWrapper).toHaveAttribute(
      'aria-labelledby',
      'accordion-partially-expanded-heading-2'
    );
    expect(secondElementTextWrapper).toHaveAttribute(
      'id',
      'accordion-partially-expanded-content-2'
    );

    const thirdElementTitle = screen.getByText('Third Element');
    expect(thirdElementTitle).toBeInTheDocument();
    expect(thirdElementTitle).toHaveClass(
      'govuk-accordion__section-heading-text-focus'
    );
    const thirdElementTitleWrapper =
      thirdElementTitle.parentNode as HTMLElement;
    expect(thirdElementTitleWrapper).toBeInTheDocument();
    expect(thirdElementTitleWrapper).toHaveClass(
      'govuk-accordion__section-heading-text'
    );
    expect(thirdElementTitleWrapper).toHaveAttribute(
      'id',
      'accordion-partially-expanded-heading-3'
    );
    const thirdElementButton =
      thirdElementTitleWrapper.parentNode as HTMLElement;
    expect(thirdElementButton).toBeInTheDocument();
    expect(thirdElementButton).toHaveClass('govuk-accordion__section-button');
    expect(thirdElementButton).toHaveAttribute('type', 'button');
    expect(thirdElementButton).toHaveAttribute('aria-expanded', 'false');
    expect(thirdElementButton).toHaveAttribute(
      'aria-label',
      'Third Element, Show this section'
    );
    expect(thirdElementButton).toHaveAttribute(
      'aria-controls',
      'accordion-partially-expanded-content-3'
    );
    const thirdElementHeader = thirdElementButton.parentNode as HTMLElement;
    expect(thirdElementHeader).toBeInTheDocument();
    expect(thirdElementHeader).toHaveClass('govuk-accordion__section-heading');
    const thirdElementHeaderWrapper =
      thirdElementHeader.parentNode as HTMLElement;
    expect(thirdElementHeaderWrapper).toBeInTheDocument();
    expect(thirdElementHeaderWrapper).toHaveClass(
      'govuk-accordion__section-header'
    );
    const thirdElementWrapper =
      thirdElementHeaderWrapper.parentNode as HTMLElement;
    expect(thirdElementWrapper).toBeInTheDocument();
    expect(thirdElementWrapper).toHaveClass('govuk-accordion__section');
    const thirdElementText = screen.getByText('This is the third element');
    expect(thirdElementText).toBeInTheDocument();
    expect(thirdElementText).toHaveClass('govuk-body');
    const thirdElementTextWrapper = thirdElementText.parentNode as HTMLElement;
    expect(thirdElementTextWrapper).toBeInTheDocument();
    expect(thirdElementTextWrapper).toHaveClass(
      'govuk-accordion__section-content'
    );
    expect(thirdElementTextWrapper).toHaveAttribute(
      'aria-labelledby',
      'accordion-partially-expanded-heading-3'
    );
    expect(thirdElementTextWrapper).toHaveAttribute(
      'id',
      'accordion-partially-expanded-content-3'
    );
  });

  it('summary accordion renders elements content', async () => {
    render(
      <Accordion
        expanded={false}
        id="with-summary"
        elements={accordionSummaryContentElementData}
      />
    );

    const firstElementTitle = screen.getByText('First Element');
    expect(firstElementTitle).toBeInTheDocument();
    expect(firstElementTitle).toHaveClass(
      'govuk-accordion__section-heading-text-focus'
    );
    const firstElementTitleWrapper =
      firstElementTitle.parentNode as HTMLElement;
    expect(firstElementTitleWrapper).toBeInTheDocument();
    expect(firstElementTitleWrapper).toHaveClass(
      'govuk-accordion__section-heading-text'
    );
    expect(firstElementTitleWrapper).toHaveAttribute(
      'id',
      'accordion-with-summary-heading-1'
    );
    const firstElementSummary = screen.getByText(
      'This is the optional summary'
    );
    expect(firstElementSummary).toHaveClass('govuk-body');
    const firstElementSummaryContainer =
      firstElementSummary.parentNode as HTMLElement;
    expect(firstElementSummaryContainer).toBeInTheDocument();
    expect(firstElementSummaryContainer).toHaveClass(
      'govuk-accordion__section-summary-focus'
    );
    const firstElementSummaryWrapper =
      firstElementSummaryContainer.parentNode as HTMLElement;
    expect(firstElementSummaryWrapper).toBeInTheDocument();
    expect(firstElementSummaryWrapper).toHaveClass(
      'govuk-accordion__section-summary govuk-body'
    );
    expect(firstElementSummaryWrapper).toHaveAttribute(
      'id',
      'accordion-with-summary-summary-1'
    );
    const firstElementButton =
      firstElementTitleWrapper.parentNode as HTMLElement;
    expect(firstElementButton).toBeInTheDocument();
    expect(firstElementButton).toHaveClass('govuk-accordion__section-button');
    expect(firstElementButton).toHaveAttribute('type', 'button');
    expect(firstElementButton).toHaveAttribute('aria-expanded', 'false');
    expect(firstElementButton).toHaveAttribute(
      'aria-label',
      'First Element, Show this section'
    );
    expect(firstElementButton).toHaveAttribute(
      'aria-controls',
      'accordion-with-summary-content-1'
    );
    const firstElementHeader = firstElementButton.parentNode as HTMLElement;
    expect(firstElementHeader).toBeInTheDocument();
    expect(firstElementHeader).toHaveClass('govuk-accordion__section-heading');
    const firstElementHeaderWrapper =
      firstElementHeader.parentNode as HTMLElement;
    expect(firstElementHeaderWrapper).toBeInTheDocument();
    expect(firstElementHeaderWrapper).toHaveClass(
      'govuk-accordion__section-header'
    );
    const firstElementWrapper =
      firstElementHeaderWrapper.parentNode as HTMLElement;
    expect(firstElementWrapper).toBeInTheDocument();
    expect(firstElementWrapper).toHaveClass('govuk-accordion__section');
    const firstElementText = screen.getByText(
      'This is the first element first paragraph'
    );
    expect(firstElementText).toBeInTheDocument();
    expect(firstElementText).toHaveClass('govuk-body');
    const firstElementTextWrapper = firstElementText.parentNode as HTMLElement;
    expect(firstElementTextWrapper).toBeInTheDocument();
    expect(firstElementTextWrapper).toHaveClass(
      'govuk-accordion__section-content'
    );
    expect(firstElementTextWrapper).toHaveAttribute(
      'aria-labelledby',
      'accordion-with-summary-heading-1'
    );
    expect(firstElementTextWrapper).toHaveAttribute(
      'id',
      'accordion-with-summary-content-1'
    );

    const secondElementTitle = screen.getByText('Second Element');
    expect(secondElementTitle).toBeInTheDocument();
    expect(secondElementTitle).toHaveClass(
      'govuk-accordion__section-heading-text-focus'
    );
    const secondElementTitleWrapper =
      secondElementTitle.parentNode as HTMLElement;
    expect(secondElementTitleWrapper).toBeInTheDocument();
    expect(secondElementTitleWrapper).toHaveClass(
      'govuk-accordion__section-heading-text'
    );
    expect(secondElementTitleWrapper).toHaveAttribute(
      'id',
      'accordion-with-summary-heading-2'
    );
    const secondElementButton =
      secondElementTitleWrapper.parentNode as HTMLElement;
    expect(secondElementButton).toBeInTheDocument();
    expect(secondElementButton).toHaveClass('govuk-accordion__section-button');
    expect(secondElementButton).toHaveAttribute('type', 'button');
    expect(secondElementButton).toHaveAttribute('aria-expanded', 'false');
    expect(secondElementButton).toHaveAttribute(
      'aria-label',
      'Second Element, Show this section'
    );
    expect(secondElementButton).toHaveAttribute(
      'aria-controls',
      'accordion-with-summary-content-2'
    );
    const secondElementHeader = secondElementButton.parentNode as HTMLElement;
    expect(secondElementHeader).toBeInTheDocument();
    expect(secondElementHeader).toHaveClass('govuk-accordion__section-heading');
    const secondElementHeaderWrapper =
      secondElementHeader.parentNode as HTMLElement;
    expect(secondElementHeaderWrapper).toBeInTheDocument();
    expect(secondElementHeaderWrapper).toHaveClass(
      'govuk-accordion__section-header'
    );
    const secondElementWrapper =
      secondElementHeaderWrapper.parentNode as HTMLElement;
    expect(secondElementWrapper).toBeInTheDocument();
    expect(secondElementWrapper).toHaveClass('govuk-accordion__section');
    const secondElementText = screen.getByText('This is the second element');
    expect(secondElementText).toBeInTheDocument();
    expect(secondElementText).toHaveClass('govuk-body');
    const secondElementTextWrapper =
      secondElementText.parentNode as HTMLElement;
    expect(secondElementTextWrapper).toBeInTheDocument();
    expect(secondElementTextWrapper).toHaveClass(
      'govuk-accordion__section-content'
    );
    expect(secondElementTextWrapper).toHaveAttribute(
      'aria-labelledby',
      'accordion-with-summary-heading-2'
    );
    expect(secondElementTextWrapper).toHaveAttribute(
      'id',
      'accordion-with-summary-content-2'
    );

    const thirdElementTitle = screen.getByText('Third Element');
    expect(thirdElementTitle).toBeInTheDocument();
    expect(thirdElementTitle).toHaveClass(
      'govuk-accordion__section-heading-text-focus'
    );
    const thirdElementTitleWrapper =
      thirdElementTitle.parentNode as HTMLElement;
    expect(thirdElementTitleWrapper).toBeInTheDocument();
    expect(thirdElementTitleWrapper).toHaveClass(
      'govuk-accordion__section-heading-text'
    );
    expect(thirdElementTitleWrapper).toHaveAttribute(
      'id',
      'accordion-with-summary-heading-3'
    );
    const thirdElementButton =
      thirdElementTitleWrapper.parentNode as HTMLElement;
    expect(thirdElementButton).toBeInTheDocument();
    expect(thirdElementButton).toHaveClass('govuk-accordion__section-button');
    expect(thirdElementButton).toHaveAttribute('type', 'button');
    expect(thirdElementButton).toHaveAttribute('aria-expanded', 'false');
    expect(thirdElementButton).toHaveAttribute(
      'aria-label',
      'Third Element, Show this section'
    );
    expect(thirdElementButton).toHaveAttribute(
      'aria-controls',
      'accordion-with-summary-content-3'
    );
    const thirdElementHeader = thirdElementButton.parentNode as HTMLElement;
    expect(thirdElementHeader).toBeInTheDocument();
    expect(thirdElementHeader).toHaveClass('govuk-accordion__section-heading');
    const thirdElementHeaderWrapper =
      thirdElementHeader.parentNode as HTMLElement;
    expect(thirdElementHeaderWrapper).toBeInTheDocument();
    expect(thirdElementHeaderWrapper).toHaveClass(
      'govuk-accordion__section-header'
    );
    const thirdElementWrapper =
      thirdElementHeaderWrapper.parentNode as HTMLElement;
    expect(thirdElementWrapper).toBeInTheDocument();
    expect(thirdElementWrapper).toHaveClass('govuk-accordion__section');
    const thirdElementText = screen.getByText('This is the third element');
    expect(thirdElementText).toBeInTheDocument();
    expect(thirdElementText).toHaveClass('govuk-body');
    const thirdElementTextWrapper = thirdElementText.parentNode as HTMLElement;
    expect(thirdElementTextWrapper).toBeInTheDocument();
    expect(thirdElementTextWrapper).toHaveClass(
      'govuk-accordion__section-content'
    );
    expect(thirdElementTextWrapper).toHaveAttribute(
      'aria-labelledby',
      'accordion-with-summary-heading-3'
    );
    expect(thirdElementTextWrapper).toHaveAttribute(
      'id',
      'accordion-with-summary-content-3'
    );
  });

  it('expanded accordion renders elements content', async () => {
    render(
      <Accordion
        expanded={true}
        id="expanded"
        elements={accordionElementData}
      />
    );

    const firstElementTitle = screen.getByText('First Element');
    expect(firstElementTitle).toBeInTheDocument();
    expect(firstElementTitle).toHaveClass(
      'govuk-accordion__section-heading-text-focus'
    );
    const firstElementTitleWrapper =
      firstElementTitle.parentNode as HTMLElement;
    expect(firstElementTitleWrapper).toBeInTheDocument();
    expect(firstElementTitleWrapper).toHaveClass(
      'govuk-accordion__section-heading-text'
    );
    expect(firstElementTitleWrapper).toHaveAttribute(
      'id',
      'accordion-expanded-heading-1'
    );
    const firstElementButton =
      firstElementTitleWrapper.parentNode as HTMLElement;
    expect(firstElementButton).toBeInTheDocument();
    expect(firstElementButton).toHaveClass('govuk-accordion__section-button');
    expect(firstElementButton).toHaveAttribute('type', 'button');
    expect(firstElementButton).toHaveAttribute('aria-expanded', 'true');
    expect(firstElementButton).toHaveAttribute(
      'aria-label',
      'First Element, Hide this section'
    );
    expect(firstElementButton).toHaveAttribute(
      'aria-controls',
      'accordion-expanded-content-1'
    );
    const firstElementHeader = firstElementButton.parentNode as HTMLElement;
    expect(firstElementHeader).toBeInTheDocument();
    expect(firstElementHeader).toHaveClass('govuk-accordion__section-heading');
    const firstElementHeaderWrapper =
      firstElementHeader.parentNode as HTMLElement;
    expect(firstElementHeaderWrapper).toBeInTheDocument();
    expect(firstElementHeaderWrapper).toHaveClass(
      'govuk-accordion__section-header'
    );
    const firstElementWrapper =
      firstElementHeaderWrapper.parentNode as HTMLElement;
    expect(firstElementWrapper).toBeInTheDocument();
    expect(firstElementWrapper).toHaveClass(
      'govuk-accordion__section govuk-accordion__section--expanded'
    );
    const firstElementText = screen.getByText('This is the first element');
    expect(firstElementText).toBeInTheDocument();
    expect(firstElementText).toHaveClass('govuk-body');
    const firstElementTextWrapper = firstElementText.parentNode as HTMLElement;
    expect(firstElementTextWrapper).toBeInTheDocument();
    expect(firstElementTextWrapper).toHaveClass(
      'govuk-accordion__section-content'
    );
    expect(firstElementTextWrapper).toHaveAttribute(
      'aria-labelledby',
      'accordion-expanded-heading-1'
    );
    expect(firstElementTextWrapper).toHaveAttribute(
      'id',
      'accordion-expanded-content-1'
    );

    const secondElementTitle = screen.getByText('Second Element');
    expect(secondElementTitle).toBeInTheDocument();
    expect(secondElementTitle).toHaveClass(
      'govuk-accordion__section-heading-text-focus'
    );
    const secondElementTitleWrapper =
      secondElementTitle.parentNode as HTMLElement;
    expect(secondElementTitleWrapper).toBeInTheDocument();
    expect(secondElementTitleWrapper).toHaveClass(
      'govuk-accordion__section-heading-text'
    );
    expect(secondElementTitleWrapper).toHaveAttribute(
      'id',
      'accordion-expanded-heading-2'
    );
    const secondElementButton =
      secondElementTitleWrapper.parentNode as HTMLElement;
    expect(secondElementButton).toBeInTheDocument();
    expect(secondElementButton).toHaveClass('govuk-accordion__section-button');
    expect(secondElementButton).toHaveAttribute('type', 'button');
    expect(secondElementButton).toHaveAttribute('aria-expanded', 'true');
    expect(secondElementButton).toHaveAttribute(
      'aria-label',
      'Second Element, Hide this section'
    );
    expect(secondElementButton).toHaveAttribute(
      'aria-controls',
      'accordion-expanded-content-2'
    );
    const secondElementHeader = secondElementButton.parentNode as HTMLElement;
    expect(secondElementHeader).toBeInTheDocument();
    expect(secondElementHeader).toHaveClass('govuk-accordion__section-heading');
    const secondElementHeaderWrapper =
      secondElementHeader.parentNode as HTMLElement;
    expect(secondElementHeaderWrapper).toBeInTheDocument();
    expect(secondElementHeaderWrapper).toHaveClass(
      'govuk-accordion__section-header'
    );
    const secondElementWrapper =
      secondElementHeaderWrapper.parentNode as HTMLElement;
    expect(secondElementWrapper).toBeInTheDocument();
    expect(secondElementWrapper).toHaveClass(
      'govuk-accordion__section govuk-accordion__section--expanded'
    );
    const secondElementText = screen.getByText('This is the second element');
    expect(secondElementText).toBeInTheDocument();
    expect(secondElementText).toHaveClass('govuk-body');
    const secondElementTextWrapper =
      secondElementText.parentNode as HTMLElement;
    expect(secondElementTextWrapper).toBeInTheDocument();
    expect(secondElementTextWrapper).toHaveClass(
      'govuk-accordion__section-content'
    );
    expect(secondElementTextWrapper).toHaveAttribute(
      'aria-labelledby',
      'accordion-expanded-heading-2'
    );
    expect(secondElementTextWrapper).toHaveAttribute(
      'id',
      'accordion-expanded-content-2'
    );

    const thirdElementTitle = screen.getByText('Third Element');
    expect(thirdElementTitle).toBeInTheDocument();
    expect(thirdElementTitle).toHaveClass(
      'govuk-accordion__section-heading-text-focus'
    );
    const thirdElementTitleWrapper =
      thirdElementTitle.parentNode as HTMLElement;
    expect(thirdElementTitleWrapper).toBeInTheDocument();
    expect(thirdElementTitleWrapper).toHaveClass(
      'govuk-accordion__section-heading-text'
    );
    expect(thirdElementTitleWrapper).toHaveAttribute(
      'id',
      'accordion-expanded-heading-3'
    );
    const thirdElementButton =
      thirdElementTitleWrapper.parentNode as HTMLElement;
    expect(thirdElementButton).toBeInTheDocument();
    expect(thirdElementButton).toHaveClass('govuk-accordion__section-button');
    expect(thirdElementButton).toHaveAttribute('type', 'button');
    expect(thirdElementButton).toHaveAttribute('aria-expanded', 'true');
    expect(thirdElementButton).toHaveAttribute(
      'aria-label',
      'Third Element, Hide this section'
    );
    expect(thirdElementButton).toHaveAttribute(
      'aria-controls',
      'accordion-expanded-content-3'
    );
    const thirdElementHeader = thirdElementButton.parentNode as HTMLElement;
    expect(thirdElementHeader).toBeInTheDocument();
    expect(thirdElementHeader).toHaveClass('govuk-accordion__section-heading');
    const thirdElementHeaderWrapper =
      thirdElementHeader.parentNode as HTMLElement;
    expect(thirdElementHeaderWrapper).toBeInTheDocument();
    expect(thirdElementHeaderWrapper).toHaveClass(
      'govuk-accordion__section-header'
    );
    const thirdElementWrapper =
      thirdElementHeaderWrapper.parentNode as HTMLElement;
    expect(thirdElementWrapper).toBeInTheDocument();
    expect(thirdElementWrapper).toHaveClass(
      'govuk-accordion__section govuk-accordion__section--expanded'
    );
    const thirdElementText = screen.getByText('This is the third element');
    expect(thirdElementText).toBeInTheDocument();
    expect(thirdElementText).toHaveClass('govuk-body');
    const thirdElementTextWrapper = thirdElementText.parentNode as HTMLElement;
    expect(thirdElementTextWrapper).toBeInTheDocument();
    expect(thirdElementTextWrapper).toHaveClass(
      'govuk-accordion__section-content'
    );
    expect(thirdElementTextWrapper).toHaveAttribute(
      'aria-labelledby',
      'accordion-expanded-heading-3'
    );
    expect(thirdElementTextWrapper).toHaveAttribute(
      'id',
      'accordion-expanded-content-3'
    );
  });
});

describe('Accordion hide and show elements render correctly', () => {
  it('default accordion renders elements content', async () => {
    render(
      <Accordion
        expanded={false}
        id="default"
        elements={accordionElementData}
      />
    );

    const accordionButtons = screen.getAllByRole('button');
    expect(accordionButtons).toHaveLength(4);

    const firstToggleElements = accordionButtons[1].childNodes;
    expect(firstToggleElements).toHaveLength(3);
    expect(firstToggleElements[1]).toHaveClass(
      'govuk-visually-hidden govuk-accordion__section-heading-divider'
    );
    expect(firstToggleElements[1]).toHaveTextContent(',');
    const firstToggle = firstToggleElements[2];
    expect(firstToggle).toBeInTheDocument();
    expect(firstToggle).toHaveClass('govuk-accordion__section-toggle');
    const firstToggleFocus = firstToggle.firstChild as HTMLElement;
    expect(firstToggleFocus).toBeInTheDocument();
    expect(firstToggleFocus).toHaveClass(
      'govuk-accordion__section-toggle-focus'
    );
    const firstToggleIcon = firstToggleFocus.firstChild as HTMLElement;
    expect(firstToggleIcon).toBeInTheDocument();
    expect(firstToggleIcon).toHaveClass(
      'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down'
    );
    const firstToggleText = firstToggleIcon.nextSibling as HTMLElement;
    expect(firstToggleText).toBeInTheDocument();
    expect(firstToggleText).toHaveClass('govuk-accordion__section-toggle-text');
    expect(firstToggleText).toHaveTextContent('Show');

    const secondToggleElements = accordionButtons[2].childNodes;
    expect(secondToggleElements).toHaveLength(3);
    expect(secondToggleElements[1]).toHaveClass(
      'govuk-visually-hidden govuk-accordion__section-heading-divider'
    );
    expect(secondToggleElements[1]).toHaveTextContent(',');
    const secondToggle = secondToggleElements[2];
    expect(secondToggle).toBeInTheDocument();
    expect(secondToggle).toHaveClass('govuk-accordion__section-toggle');
    const secondToggleFocus = secondToggle.firstChild as HTMLElement;
    expect(secondToggleFocus).toBeInTheDocument();
    expect(secondToggleFocus).toHaveClass(
      'govuk-accordion__section-toggle-focus'
    );
    const secondToggleIcon = secondToggleFocus.firstChild as HTMLElement;
    expect(secondToggleIcon).toBeInTheDocument();
    expect(secondToggleIcon).toHaveClass(
      'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down'
    );
    const secondToggleText = secondToggleIcon.nextSibling as HTMLElement;
    expect(secondToggleText).toBeInTheDocument();
    expect(secondToggleText).toHaveClass(
      'govuk-accordion__section-toggle-text'
    );
    expect(secondToggleText).toHaveTextContent('Show');

    const thirdToggleElements = accordionButtons[3].childNodes;
    expect(thirdToggleElements).toHaveLength(3);
    expect(thirdToggleElements[1]).toHaveClass(
      'govuk-visually-hidden govuk-accordion__section-heading-divider'
    );
    expect(thirdToggleElements[1]).toHaveTextContent(',');
    const thirdToggle = thirdToggleElements[2];
    expect(thirdToggle).toBeInTheDocument();
    expect(thirdToggle).toHaveClass('govuk-accordion__section-toggle');
    const thirdToggleFocus = thirdToggle.firstChild as HTMLElement;
    expect(thirdToggleFocus).toBeInTheDocument();
    expect(thirdToggleFocus).toHaveClass(
      'govuk-accordion__section-toggle-focus'
    );
    const thirdToggleIcon = thirdToggleFocus.firstChild as HTMLElement;
    expect(thirdToggleIcon).toBeInTheDocument();
    expect(thirdToggleIcon).toHaveClass(
      'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down'
    );
    const thirdToggleText = thirdToggleIcon.nextSibling as HTMLElement;
    expect(thirdToggleText).toBeInTheDocument();
    expect(thirdToggleText).toHaveClass('govuk-accordion__section-toggle-text');
    expect(thirdToggleText).toHaveTextContent('Show');
  });

  it('partially accordion renders elements content', async () => {
    render(
      <Accordion
        expanded={false}
        id="partial-expanded"
        elements={accordionExpandedElementData}
      />
    );

    const accordionButtons = screen.getAllByRole('button');
    expect(accordionButtons).toHaveLength(4);

    const firstToggleElements = accordionButtons[1].childNodes;
    expect(firstToggleElements).toHaveLength(3);
    expect(firstToggleElements[1]).toHaveClass(
      'govuk-visually-hidden govuk-accordion__section-heading-divider'
    );
    expect(firstToggleElements[1]).toHaveTextContent(',');
    const firstToggle = firstToggleElements[2];
    expect(firstToggle).toBeInTheDocument();
    expect(firstToggle).toHaveClass('govuk-accordion__section-toggle');
    const firstToggleFocus = firstToggle.firstChild as HTMLElement;
    expect(firstToggleFocus).toBeInTheDocument();
    expect(firstToggleFocus).toHaveClass(
      'govuk-accordion__section-toggle-focus'
    );
    const firstToggleIcon = firstToggleFocus.firstChild as HTMLElement;
    expect(firstToggleIcon).toBeInTheDocument();
    expect(firstToggleIcon).toHaveClass(
      'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down'
    );
    const firstToggleText = firstToggleIcon.nextSibling as HTMLElement;
    expect(firstToggleText).toBeInTheDocument();
    expect(firstToggleText).toHaveClass('govuk-accordion__section-toggle-text');
    expect(firstToggleText).toHaveTextContent('Show');

    const secondToggleElements = accordionButtons[2].childNodes;
    expect(secondToggleElements).toHaveLength(3);
    expect(secondToggleElements[1]).toHaveClass(
      'govuk-visually-hidden govuk-accordion__section-heading-divider'
    );
    expect(secondToggleElements[1]).toHaveTextContent(',');
    const secondToggle = secondToggleElements[2];
    expect(secondToggle).toBeInTheDocument();
    expect(secondToggle).toHaveClass('govuk-accordion__section-toggle');
    const secondToggleFocus = secondToggle.firstChild as HTMLElement;
    expect(secondToggleFocus).toBeInTheDocument();
    expect(secondToggleFocus).toHaveClass(
      'govuk-accordion__section-toggle-focus'
    );
    const secondToggleIcon = secondToggleFocus.firstChild as HTMLElement;
    expect(secondToggleIcon).toBeInTheDocument();
    expect(secondToggleIcon).toHaveClass('govuk-accordion-nav__chevron');
    const secondToggleText = secondToggleIcon.nextSibling as HTMLElement;
    expect(secondToggleText).toBeInTheDocument();
    expect(secondToggleText).toHaveClass(
      'govuk-accordion__section-toggle-text'
    );
    expect(secondToggleText).toHaveTextContent('Hide');

    const thirdToggleElements = accordionButtons[3].childNodes;
    expect(thirdToggleElements).toHaveLength(3);
    expect(thirdToggleElements[1]).toHaveClass(
      'govuk-visually-hidden govuk-accordion__section-heading-divider'
    );
    expect(thirdToggleElements[1]).toHaveTextContent(',');
    const thirdToggle = thirdToggleElements[2];
    expect(thirdToggle).toBeInTheDocument();
    expect(thirdToggle).toHaveClass('govuk-accordion__section-toggle');
    const thirdToggleFocus = thirdToggle.firstChild as HTMLElement;
    expect(thirdToggleFocus).toBeInTheDocument();
    expect(thirdToggleFocus).toHaveClass(
      'govuk-accordion__section-toggle-focus'
    );
    const thirdToggleIcon = thirdToggleFocus.firstChild as HTMLElement;
    expect(thirdToggleIcon).toBeInTheDocument();
    expect(thirdToggleIcon).toHaveClass(
      'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down'
    );
    const thirdToggleText = thirdToggleIcon.nextSibling as HTMLElement;
    expect(thirdToggleText).toBeInTheDocument();
    expect(thirdToggleText).toHaveClass('govuk-accordion__section-toggle-text');
    expect(thirdToggleText).toHaveTextContent('Show');
  });

  it('expanded accordion renders elements content', async () => {
    render(
      <Accordion expanded={true} id="default" elements={accordionElementData} />
    );

    const accordionButtons = screen.getAllByRole('button');
    expect(accordionButtons).toHaveLength(4);

    const firstToggleElements = accordionButtons[1].childNodes;
    expect(firstToggleElements).toHaveLength(3);
    expect(firstToggleElements[1]).toHaveClass(
      'govuk-visually-hidden govuk-accordion__section-heading-divider'
    );
    expect(firstToggleElements[1]).toHaveTextContent(',');
    const firstToggle = firstToggleElements[2];
    expect(firstToggle).toBeInTheDocument();
    expect(firstToggle).toHaveClass('govuk-accordion__section-toggle');
    const firstToggleFocus = firstToggle.firstChild as HTMLElement;
    expect(firstToggleFocus).toBeInTheDocument();
    expect(firstToggleFocus).toHaveClass(
      'govuk-accordion__section-toggle-focus'
    );
    const firstToggleIcon = firstToggleFocus.firstChild as HTMLElement;
    expect(firstToggleIcon).toBeInTheDocument();
    expect(firstToggleIcon).toHaveClass('govuk-accordion-nav__chevron');
    const firstToggleText = firstToggleIcon.nextSibling as HTMLElement;
    expect(firstToggleText).toBeInTheDocument();
    expect(firstToggleText).toHaveClass('govuk-accordion__section-toggle-text');
    expect(firstToggleText).toHaveTextContent('Hide');

    const secondToggleElements = accordionButtons[2].childNodes;
    expect(secondToggleElements).toHaveLength(3);
    expect(secondToggleElements[1]).toHaveClass(
      'govuk-visually-hidden govuk-accordion__section-heading-divider'
    );
    expect(secondToggleElements[1]).toHaveTextContent(',');
    const secondToggle = secondToggleElements[2];
    expect(secondToggle).toBeInTheDocument();
    expect(secondToggle).toHaveClass('govuk-accordion__section-toggle');
    const secondToggleFocus = secondToggle.firstChild as HTMLElement;
    expect(secondToggleFocus).toBeInTheDocument();
    expect(secondToggleFocus).toHaveClass(
      'govuk-accordion__section-toggle-focus'
    );
    const secondToggleIcon = secondToggleFocus.firstChild as HTMLElement;
    expect(secondToggleIcon).toBeInTheDocument();
    expect(secondToggleIcon).toHaveClass('govuk-accordion-nav__chevron');
    const secondToggleText = secondToggleIcon.nextSibling as HTMLElement;
    expect(secondToggleText).toBeInTheDocument();
    expect(secondToggleText).toHaveClass(
      'govuk-accordion__section-toggle-text'
    );
    expect(secondToggleText).toHaveTextContent('Hide');

    const thirdToggleElements = accordionButtons[3].childNodes;
    expect(thirdToggleElements).toHaveLength(3);
    expect(thirdToggleElements[1]).toHaveClass(
      'govuk-visually-hidden govuk-accordion__section-heading-divider'
    );
    expect(thirdToggleElements[1]).toHaveTextContent(',');
    const thirdToggle = thirdToggleElements[2];
    expect(thirdToggle).toBeInTheDocument();
    expect(thirdToggle).toHaveClass('govuk-accordion__section-toggle');
    const thirdToggleFocus = thirdToggle.firstChild as HTMLElement;
    expect(thirdToggleFocus).toBeInTheDocument();
    expect(thirdToggleFocus).toHaveClass(
      'govuk-accordion__section-toggle-focus'
    );
    const thirdToggleIcon = thirdToggleFocus.firstChild as HTMLElement;
    expect(thirdToggleIcon).toBeInTheDocument();
    expect(thirdToggleIcon).toHaveClass('govuk-accordion-nav__chevron');
    const thirdToggleText = thirdToggleIcon.nextSibling as HTMLElement;
    expect(thirdToggleText).toBeInTheDocument();
    expect(thirdToggleText).toHaveClass('govuk-accordion__section-toggle-text');
    expect(thirdToggleText).toHaveTextContent('Hide');
  });
});

describe('Accordion changes state correctly', () => {
  it('default accordion changes state on mouse click correctly', async () => {
    render(
      <Accordion
        expanded={false}
        id="default"
        elements={accordionElementData}
      />
    );

    const accordionButtons = screen.getAllByRole('button');
    expect(accordionButtons).toHaveLength(4);

    const showAllButton = accordionButtons[0];
    expect(showAllButton).toBeInTheDocument();
    expect(showAllButton).toHaveAttribute('aria-expanded', 'false');

    const firstButton = accordionButtons[1];
    expect(firstButton).toBeInTheDocument();
    expect(firstButton).toHaveAttribute('aria-expanded', 'false');
    expect(firstButton).toHaveAttribute(
      'aria-label',
      'First Element, Show this section'
    );
    const firstToggleElements = accordionButtons[1].childNodes;
    const firstToggle = firstToggleElements[2];
    const firstToggleFocus = firstToggle.firstChild as HTMLElement;
    const firstToggleIcon = firstToggleFocus.firstChild as HTMLElement;
    expect(firstToggleIcon).toHaveClass(
      'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down'
    );
    const firstToggleText = firstToggleIcon.nextSibling as HTMLElement;
    expect(firstToggleText).toHaveTextContent('Show');

    const secondButton = accordionButtons[2];
    expect(secondButton).toBeInTheDocument();
    expect(secondButton).toHaveAttribute('aria-expanded', 'false');
    expect(secondButton).toHaveAttribute(
      'aria-label',
      'Second Element, Show this section'
    );
    const secondToggleElements = accordionButtons[2].childNodes;
    const secondToggle = secondToggleElements[2];
    const secondToggleFocus = secondToggle.firstChild as HTMLElement;
    const secondToggleIcon = secondToggleFocus.firstChild as HTMLElement;
    expect(secondToggleIcon).toHaveClass(
      'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down'
    );
    const secondToggleText = secondToggleIcon.nextSibling as HTMLElement;
    expect(secondToggleText).toHaveTextContent('Show');

    const thirdButton = accordionButtons[3];
    expect(thirdButton).toBeInTheDocument();
    expect(thirdButton).toHaveAttribute('aria-expanded', 'false');
    expect(thirdButton).toHaveAttribute(
      'aria-label',
      'Third Element, Show this section'
    );
    const thirdToggleElements = accordionButtons[2].childNodes;
    const thirdToggle = thirdToggleElements[2];
    const thirdToggleFocus = thirdToggle.firstChild as HTMLElement;
    const thirdToggleIcon = thirdToggleFocus.firstChild as HTMLElement;
    expect(thirdToggleIcon).toHaveClass(
      'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down'
    );
    const thirdToggleText = thirdToggleIcon.nextSibling as HTMLElement;
    expect(thirdToggleText).toHaveTextContent('Show');

    await userEvent.click(firstButton);

    expect(showAllButton).toHaveAttribute('aria-expanded', 'false');

    expect(firstButton).toHaveAttribute('aria-expanded', 'true');
    expect(firstButton).toHaveAttribute(
      'aria-label',
      'First Element, Hide this section'
    );
    expect(firstToggleIcon).toHaveClass('govuk-accordion-nav__chevron');
    expect(firstToggleText).toHaveTextContent('Hide');

    expect(secondButton).toHaveAttribute('aria-expanded', 'false');
    expect(secondButton).toHaveAttribute(
      'aria-label',
      'Second Element, Show this section'
    );
    expect(secondToggleIcon).toHaveClass(
      'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down'
    );
    expect(secondToggleText).toHaveTextContent('Show');

    expect(thirdButton).toHaveAttribute('aria-expanded', 'false');
    expect(thirdButton).toHaveAttribute(
      'aria-label',
      'Third Element, Show this section'
    );
    expect(thirdToggleIcon).toHaveClass(
      'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down'
    );
    expect(thirdToggleText).toHaveTextContent('Show');

    await userEvent.click(firstButton);

    expect(showAllButton).toHaveAttribute('aria-expanded', 'false');

    expect(firstButton).toHaveAttribute('aria-expanded', 'false');
    expect(firstButton).toHaveAttribute(
      'aria-label',
      'First Element, Show this section'
    );
    expect(firstToggleIcon).toHaveClass(
      'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down'
    );
    expect(firstToggleText).toHaveTextContent('Show');

    expect(secondButton).toHaveAttribute('aria-expanded', 'false');
    expect(secondButton).toHaveAttribute(
      'aria-label',
      'Second Element, Show this section'
    );
    expect(secondToggleIcon).toHaveClass(
      'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down'
    );
    expect(secondToggleText).toHaveTextContent('Show');

    expect(thirdButton).toHaveAttribute('aria-expanded', 'false');
    expect(thirdButton).toHaveAttribute(
      'aria-label',
      'Third Element, Show this section'
    );
    expect(thirdToggleIcon).toHaveClass(
      'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down'
    );
    expect(thirdToggleText).toHaveTextContent('Show');
  });

  it('default accordion changes state on mouse click all correctly', async () => {
    render(
      <Accordion
        expanded={false}
        id="default"
        elements={accordionElementData}
      />
    );

    const accordionButtons = screen.getAllByRole('button');
    expect(accordionButtons).toHaveLength(4);

    const showAllButton = accordionButtons[0];
    expect(showAllButton).toBeInTheDocument();
    expect(showAllButton).toHaveAttribute('aria-expanded', 'false');

    const firstButton = accordionButtons[1];
    expect(firstButton).toBeInTheDocument();
    expect(firstButton).toHaveAttribute('aria-expanded', 'false');
    expect(firstButton).toHaveAttribute(
      'aria-label',
      'First Element, Show this section'
    );
    const firstToggleElements = accordionButtons[1].childNodes;
    const firstToggle = firstToggleElements[2];
    const firstToggleFocus = firstToggle.firstChild as HTMLElement;
    const firstToggleIcon = firstToggleFocus.firstChild as HTMLElement;
    expect(firstToggleIcon).toHaveClass(
      'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down'
    );
    const firstToggleText = firstToggleIcon.nextSibling as HTMLElement;
    expect(firstToggleText).toHaveTextContent('Show');

    const secondButton = accordionButtons[2];
    expect(secondButton).toBeInTheDocument();
    expect(secondButton).toHaveAttribute('aria-expanded', 'false');
    expect(secondButton).toHaveAttribute(
      'aria-label',
      'Second Element, Show this section'
    );
    const secondToggleElements = accordionButtons[2].childNodes;
    const secondToggle = secondToggleElements[2];
    const secondToggleFocus = secondToggle.firstChild as HTMLElement;
    const secondToggleIcon = secondToggleFocus.firstChild as HTMLElement;
    expect(secondToggleIcon).toHaveClass(
      'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down'
    );
    const secondToggleText = secondToggleIcon.nextSibling as HTMLElement;
    expect(secondToggleText).toHaveTextContent('Show');

    const thirdButton = accordionButtons[3];
    expect(thirdButton).toBeInTheDocument();
    expect(thirdButton).toHaveAttribute('aria-expanded', 'false');
    expect(thirdButton).toHaveAttribute(
      'aria-label',
      'Third Element, Show this section'
    );
    const thirdToggleElements = accordionButtons[2].childNodes;
    const thirdToggle = thirdToggleElements[2];
    const thirdToggleFocus = thirdToggle.firstChild as HTMLElement;
    const thirdToggleIcon = thirdToggleFocus.firstChild as HTMLElement;
    expect(thirdToggleIcon).toHaveClass(
      'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down'
    );
    const thirdToggleText = thirdToggleIcon.nextSibling as HTMLElement;
    expect(thirdToggleText).toHaveTextContent('Show');

    await userEvent.click(showAllButton);

    expect(showAllButton).toHaveAttribute('aria-expanded', 'true');

    expect(firstButton).toHaveAttribute('aria-expanded', 'true');
    expect(firstButton).toHaveAttribute(
      'aria-label',
      'First Element, Hide this section'
    );
    expect(firstToggleIcon).toHaveClass('govuk-accordion-nav__chevron');
    expect(firstToggleText).toHaveTextContent('Hide');

    expect(secondButton).toHaveAttribute('aria-expanded', 'true');
    expect(secondButton).toHaveAttribute(
      'aria-label',
      'Second Element, Hide this section'
    );
    expect(secondToggleIcon).toHaveClass('govuk-accordion-nav__chevron');
    expect(secondToggleText).toHaveTextContent('Hide');

    expect(thirdButton).toHaveAttribute('aria-expanded', 'true');
    expect(thirdButton).toHaveAttribute(
      'aria-label',
      'Third Element, Hide this section'
    );
    expect(thirdToggleIcon).toHaveClass('govuk-accordion-nav__chevron');
    expect(thirdToggleText).toHaveTextContent('Hide');

    await userEvent.click(showAllButton);

    expect(showAllButton).toHaveAttribute('aria-expanded', 'false');

    expect(firstButton).toHaveAttribute('aria-expanded', 'false');
    expect(firstButton).toHaveAttribute(
      'aria-label',
      'First Element, Show this section'
    );
    expect(firstToggleIcon).toHaveClass(
      'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down'
    );
    expect(firstToggleText).toHaveTextContent('Show');

    expect(secondButton).toHaveAttribute('aria-expanded', 'false');
    expect(secondButton).toHaveAttribute(
      'aria-label',
      'Second Element, Show this section'
    );
    expect(secondToggleIcon).toHaveClass(
      'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down'
    );
    expect(secondToggleText).toHaveTextContent('Show');

    expect(thirdButton).toHaveAttribute('aria-expanded', 'false');
    expect(thirdButton).toHaveAttribute(
      'aria-label',
      'Third Element, Show this section'
    );
    expect(thirdToggleIcon).toHaveClass(
      'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down'
    );
    expect(thirdToggleText).toHaveTextContent('Show');
  });

  it('default accordion changes state on keypress correctly', async () => {
    render(
      <Accordion
        expanded={false}
        id="default"
        elements={accordionElementData}
      />
    );

    const accordionButtons = screen.getAllByRole('button');
    expect(accordionButtons).toHaveLength(4);

    const showAllButton = accordionButtons[0];
    expect(showAllButton).toBeInTheDocument();
    expect(showAllButton).toHaveAttribute('aria-expanded', 'false');

    const firstButton = accordionButtons[1];
    expect(firstButton).toBeInTheDocument();
    expect(firstButton).toHaveAttribute('aria-expanded', 'false');
    expect(firstButton).toHaveAttribute(
      'aria-label',
      'First Element, Show this section'
    );
    const firstToggleElements = accordionButtons[1].childNodes;
    const firstToggle = firstToggleElements[2];
    const firstToggleFocus = firstToggle.firstChild as HTMLElement;
    const firstToggleIcon = firstToggleFocus.firstChild as HTMLElement;
    expect(firstToggleIcon).toHaveClass(
      'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down'
    );
    const firstToggleText = firstToggleIcon.nextSibling as HTMLElement;
    expect(firstToggleText).toHaveTextContent('Show');

    const secondButton = accordionButtons[2];
    expect(secondButton).toBeInTheDocument();
    expect(secondButton).toHaveAttribute('aria-expanded', 'false');
    expect(secondButton).toHaveAttribute(
      'aria-label',
      'Second Element, Show this section'
    );
    const secondToggleElements = accordionButtons[2].childNodes;
    const secondToggle = secondToggleElements[2];
    const secondToggleFocus = secondToggle.firstChild as HTMLElement;
    const secondToggleIcon = secondToggleFocus.firstChild as HTMLElement;
    expect(secondToggleIcon).toHaveClass(
      'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down'
    );
    const secondToggleText = secondToggleIcon.nextSibling as HTMLElement;
    expect(secondToggleText).toHaveTextContent('Show');

    const thirdButton = accordionButtons[3];
    expect(thirdButton).toBeInTheDocument();
    expect(thirdButton).toHaveAttribute('aria-expanded', 'false');
    expect(thirdButton).toHaveAttribute(
      'aria-label',
      'Third Element, Show this section'
    );
    const thirdToggleElements = accordionButtons[2].childNodes;
    const thirdToggle = thirdToggleElements[2];
    const thirdToggleFocus = thirdToggle.firstChild as HTMLElement;
    const thirdToggleIcon = thirdToggleFocus.firstChild as HTMLElement;
    expect(thirdToggleIcon).toHaveClass(
      'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down'
    );
    const thirdToggleText = thirdToggleIcon.nextSibling as HTMLElement;
    expect(thirdToggleText).toHaveTextContent('Show');

    await userEvent.type(firstButton, '{space}');

    expect(showAllButton).toHaveAttribute('aria-expanded', 'false');

    expect(firstButton).toHaveAttribute('aria-expanded', 'true');
    expect(firstButton).toHaveAttribute(
      'aria-label',
      'First Element, Hide this section'
    );
    expect(firstToggleIcon).toHaveClass('govuk-accordion-nav__chevron');
    expect(firstToggleText).toHaveTextContent('Hide');

    expect(secondButton).toHaveAttribute('aria-expanded', 'false');
    expect(secondButton).toHaveAttribute(
      'aria-label',
      'Second Element, Show this section'
    );
    expect(secondToggleIcon).toHaveClass(
      'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down'
    );
    expect(secondToggleText).toHaveTextContent('Show');

    expect(thirdButton).toHaveAttribute('aria-expanded', 'false');
    expect(thirdButton).toHaveAttribute(
      'aria-label',
      'Third Element, Show this section'
    );
    expect(thirdToggleIcon).toHaveClass(
      'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down'
    );
    expect(thirdToggleText).toHaveTextContent('Show');

    await userEvent.type(firstButton, '{space}');

    expect(showAllButton).toHaveAttribute('aria-expanded', 'false');

    expect(firstButton).toHaveAttribute('aria-expanded', 'false');
    expect(firstButton).toHaveAttribute(
      'aria-label',
      'First Element, Show this section'
    );
    expect(firstToggleIcon).toHaveClass(
      'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down'
    );
    expect(firstToggleText).toHaveTextContent('Show');

    expect(secondButton).toHaveAttribute('aria-expanded', 'false');
    expect(secondButton).toHaveAttribute(
      'aria-label',
      'Second Element, Show this section'
    );
    expect(secondToggleIcon).toHaveClass(
      'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down'
    );
    expect(secondToggleText).toHaveTextContent('Show');

    expect(thirdButton).toHaveAttribute('aria-expanded', 'false');
    expect(thirdButton).toHaveAttribute(
      'aria-label',
      'Third Element, Show this section'
    );
    expect(thirdToggleIcon).toHaveClass(
      'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down'
    );
    expect(thirdToggleText).toHaveTextContent('Show');
  });
});
