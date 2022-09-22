import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tag } from '../../UI/Tag/tag';

export default {
  title: 'Components/Tags/Implementation',
  component: Tag,
} as ComponentMeta<typeof Tag>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Tag text',
};
