import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    Accordion,
    AccordionElement
} from '../../UI/Accordion/Accordion';
import {Content} from "../../UI/Typography/Content";

export default {
  title: 'Components/Accordion/Implementation',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const accordionElementData: AccordionElement[] = [
    {
        title: "First Element",
        expanded: false,
        content: <><Content>This is the first element</Content></>
    },
    {
        title: "Second Element",
        expanded: false,
        content: <><Content>This is the second element</Content></>
    },
    {
        title: "Third Element",
        expanded: false,
        content: <><Content>This is the third element</Content></>
    },
];

const accordionExpandedElementData: AccordionElement[] = [
    {
        title: "First Element",
        expanded: false,
        content: <><Content>This is the first element</Content></>
    },
    {
        title: "Second Element",
        expanded: true,
        content: <><Content>This is the second element</Content></>
    },
    {
        title: "Third Element",
        expanded: false,
        content: <><Content>This is the third element</Content></>
    },
];

const accordionMultipleContentElementData: AccordionElement[] = [
    {
        title: "First Element",
        expanded: true,
        content: <><Content>This is the first element first paragraph</Content><Content>This is the first element second paragraph</Content></>
    },
    {
        title: "Second Element",
        expanded: false,
        content: <><Content>This is the second element</Content></>
    },
    {
        title: "Third Element",
        expanded: false,
        content: <><Content>This is the third element</Content></>
    },
];

const accordionSummaryContentElementData: AccordionElement[] = [
    {
        title: "First Element",
        expanded: false,
        summary: <><Content>This is the optional summary</Content></>,
        content: <><Content>This is the first element first paragraph</Content><Content>This is the first element second paragraph</Content></>
    },
    {
        title: "Second Element",
        expanded: false,
        content: <><Content>This is the second element</Content></>
    },
    {
        title: "Third Element",
        expanded: false,
        content: <><Content>This is the third element</Content></>
    },
];

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Accordion> = (args) => (
    <div className="js-enabled"><Accordion {...args} /></div>  
);

export const Default = Template.bind({});
Default.args = {
    expanded: false,
    id: "default",
    elements: accordionElementData
};

export const ElementExpanded = Template.bind({});
ElementExpanded.args = {
    expanded: false,
    id: "element-expanded",
    elements: accordionExpandedElementData
};

export const OptionalSummary = Template.bind({});
OptionalSummary.args = {
    expanded: false,
    id: "summary",
    elements: accordionSummaryContentElementData
};

export const ComplexContent = Template.bind({});
ComplexContent.args = {
    expanded: false,
    id: "complex",
    elements: accordionMultipleContentElementData
};

export const AllExpanded = Template.bind({});
AllExpanded.args = {
    expanded: true,
    id: "expanded",
    elements: accordionElementData
};
