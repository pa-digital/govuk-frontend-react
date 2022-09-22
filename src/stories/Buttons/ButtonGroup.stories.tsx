import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../../UI/Buttons/Button';
import { ButtonGroup } from '../../UI/Buttons/ButtonGroup';

export default {
  title: 'Components/Buttons/ButtonGroup',
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof ButtonGroup> = (args) => (
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

export const Default = Template.bind({});
