import React, { useEffect, useState } from 'react';

export interface AccordionElement {
  expanded: boolean;
  title: string;
  summary?: any;
  content: any;
}

export interface AccordionProps {
  id: string;
  expanded: boolean;
  elements: AccordionElement[];
}

export function Accordion({ id, expanded, elements }: AccordionProps) {
  const [allExpanded, setAllExpanded] = useState(expanded);
  const [toggleButtonText, setToggleButtonText] = useState(
    expanded ? 'Hide all sections' : 'Show all sections'
  );
  const [controlButtonExpandedAttr, setControlButtonExpandedAttr] = useState({
    'aria-expanded': expanded,
  });
  const [accordionElements, setAccordionElements] =
    useState<AccordionElement[]>(elements);

  const validateActionKey = (e: React.KeyboardEvent): boolean => {
    if (
      e.key === ' ' ||
      e.code === 'Space' ||
      e.keyCode === 32 ||
      e.code === 'Enter' ||
      e.keyCode === 13
    ) {
      return true;
    }
    return false;
  };

  const toggleAllClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    toggleAll();
    return false;
  };

  const toggleAllKeyPress = (e: React.KeyboardEvent) => {
    if (validateActionKey(e)) {
      e.preventDefault();
      toggleAll();
      return false;
    }
    return true;
  };

  const toggleAll = () => {
    const clonedElements: AccordionElement[] = [];
    accordionElements.map((val) => clonedElements.push({ ...val }));
    clonedElements.forEach((element) => {
      element.expanded = !allExpanded;
    });
    setAccordionElements(clonedElements);
    setAllExpanded(!allExpanded);
  };

  const toggleElementClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number,
    isExpanded: boolean
  ) => {
    e.preventDefault();
    toggleElements(index, isExpanded);
    return false;
  };

  const toggleElementKeyPress = (
    e: React.KeyboardEvent,
    index: number,
    isExpanded: boolean
  ) => {
    if (validateActionKey(e)) {
      e.preventDefault();
      toggleElements(index, isExpanded);
      return false;
    }
    return true;
  };

  const toggleElements = (index: number, isExpanded: boolean) => {
    const clonedElements: AccordionElement[] = [];
    accordionElements.map((val) => clonedElements.push({ ...val }));
    clonedElements.forEach((element, i) => {
      i === index
        ? (element.expanded = !isExpanded)
        : (element.expanded = element.expanded);
    });
    setAccordionElements(clonedElements);
  };

  useEffect(() => {
    if (accordionElements.find((e) => e.expanded === false)) {
      setAllExpanded(false);
      setToggleButtonText('Show all sections');
      setControlButtonExpandedAttr({ 'aria-expanded': false });
    } else {
      setToggleButtonText('Hide all sections');
      setControlButtonExpandedAttr({ 'aria-expanded': true });
    }
  }, [allExpanded, accordionElements]);

  useEffect(() => {
    if (expanded) {
      const clonedElements: AccordionElement[] = [];
      accordionElements.map((val) => clonedElements.push({ ...val }));
      clonedElements.forEach((element) => {
        element.expanded = true;
      });
      setAccordionElements(clonedElements);
    }
  }, []);

  const controlButtonIconAttr = {
    className: allExpanded
      ? 'govuk-accordion-nav__chevron'
      : 'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down',
  };
  return (
    <div
      className="govuk-accordion"
      data-module="govuk-accordion"
      id={`accordion-${id}`}
    >
      <div className="govuk-accordion__controls">
        <>
          <button
            type="button"
            className="govuk-accordion__show-all"
            {...controlButtonExpandedAttr}
            onClick={(e) => toggleAllClick(e)}
            onKeyDown={(e) => toggleAllKeyPress(e)}
          >
            <span {...controlButtonIconAttr} />
            <span className="govuk-accordion__show-all-text">
              {toggleButtonText}
            </span>
          </button>
          {accordionElements &&
            accordionElements.map((element, index) => {
              const elementWrapper = element.expanded
                ? 'govuk-accordion__section govuk-accordion__section--expanded'
                : 'govuk-accordion__section';
              const elementButtonAttr = {
                'aria-controls': `accordion-${id}-content-${index + 1}`,
                className: 'govuk-accordion__section-button',
                'aria-expanded': element.expanded,
                'aria-label': element.expanded
                  ? `${element.title}, Hide this section`
                  : `${element.title}, Show this section`,
              };
              const elementChevronAttr = {
                className: element.expanded
                  ? 'govuk-accordion-nav__chevron'
                  : 'govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down',
              };
              return (
                <div className={elementWrapper} key={`${id}-${index}`}>
                  <div className="govuk-accordion__section-header">
                    <h2 className="govuk-accordion__section-heading">
                      <button
                        type="button"
                        {...elementButtonAttr}
                        onClick={(e) =>
                          toggleElementClick(e, index, element.expanded)
                        }
                        onKeyDown={(e) =>
                          toggleElementKeyPress(e, index, element.expanded)
                        }
                      >
                        <span
                          className="govuk-accordion__section-heading-text"
                          id={`accordion-${id}-heading-${index + 1}`}
                        >
                          <span className="govuk-accordion__section-heading-text-focus">
                            {element.title}
                          </span>
                        </span>
                        <span className="govuk-visually-hidden govuk-accordion__section-heading-divider">
                          ,{' '}
                        </span>

                        {element.summary && (
                          <>
                            <span
                              className="govuk-accordion__section-summary govuk-body"
                              id={`accordion-${id}-summary-${index + 1}`}
                            >
                              <span className="govuk-accordion__section-summary-focus">
                                {element.summary}
                              </span>
                            </span>
                            <span className="govuk-visually-hidden govuk-accordion__section-heading-divider">
                              ,{' '}
                            </span>
                          </>
                        )}
                        <span
                          className="govuk-accordion__section-toggle"
                          data-nosnippet=""
                        >
                          <span className="govuk-accordion__section-toggle-focus">
                            <span {...elementChevronAttr} />
                            <span className="govuk-accordion__section-toggle-text">
                              {element.expanded ? 'Hide' : 'Show'}
                            </span>
                          </span>
                        </span>
                      </button>
                    </h2>
                  </div>
                  <div
                    id={`accordion-${id}-content-${index + 1}`}
                    className="govuk-accordion__section-content"
                    aria-labelledby={`accordion-${id}-heading-${index + 1}`}
                  >
                    {element.content}
                  </div>
                </div>
              );
            })}
        </>
      </div>
    </div>
  );
}
