import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionElement } from '../../UI/Accordion/Accordion';
import { Content } from '../../UI/Typography/Content';

const meta = {
  title: 'Components/Accordion/Implementation',
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

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

const accordionMultipleContentElementData: AccordionElement[] = [
  {
    title: 'First Element',
    expanded: true,
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

export const Default: Story = {
  args: {
    expanded: false,
    id: 'default',
    elements: accordionElementData,
  },
};

export const ElementExpanded: Story = {
  args: {
    expanded: false,
    id: 'element-expanded',
    elements: accordionExpandedElementData,
  },
};

export const OptionalSummary: Story = {
  args: {
    expanded: false,
    id: 'summary',
    elements: accordionSummaryContentElementData,
  },
};

export const ComplexContent: Story = {
  args: {
    expanded: false,
    id: 'complex',
    elements: accordionMultipleContentElementData,
  },
};

export const AllExpanded: Story = {
  args: {
    expanded: true,
    id: 'expanded',
    elements: accordionElementData,
  },
};
