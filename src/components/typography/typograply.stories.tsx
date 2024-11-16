// Typography.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Typography } from './Typography'; // Adjust the path as needed

export default {
  title: 'Components/Typography', // Storybook folder structure
  component: Typography,
  argTypes: {
    fontSize: {
      control: { type: 'select' },
      options: ['title', 'heading2', 'heading3', 'description'],
    },
    className: { control: 'text' },
    children: { control: 'text' },
  },
} as Meta<typeof Typography>;

// Template for creating stories
const Template: StoryFn<typeof Typography> = (args) => <Typography {...args} />;

// Variants of the Typography component
export const Title = Template.bind({});
Title.args = {
  children: 'This is a Title',
  fontSize: 'title',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  children: 'This is Heading 2',
  fontSize: 'heading2',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  children: 'This is Heading 3',
  fontSize: 'heading3',
};

export const Description = Template.bind({});
Description.args = {
  children: 'This is a description',
  fontSize: 'description',
};
