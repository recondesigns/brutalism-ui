import React from 'react'
import { Title, Subtitle, Primary, ArgTypes, Stories } from '@storybook/blocks'
import type { Preview } from "@storybook/react";

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
      toc: {
        title: 'Contents',
        disabled: false,
        headingSelector: 'h1, h2, h3'
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
  },
};

export default preview;
