import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Card from './Card'; // Make sure to import CardProps if you're using it in the story

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    imgUrl: { control: 'text' },
    title: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  imgUrl: './backery/cake.jpg', // Example image URL
  title: 'Card Title',
};
