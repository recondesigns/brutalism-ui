import React from 'react'
import { Preview } from "@storybook/react";
import { Title, Subtitle,  Primary, ArgTypes, Stories } from '@storybook/blocks'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      controls: { exclude: ['label']},
      toc: {
        title: 'Contents',
        disabled: false,
        headingSelector: 'h2, h3'
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Primary />
          <ArgTypes />
          <Stories />
        </>
      ),
    },
  }
};

export default preview;
