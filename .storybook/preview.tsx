import React from 'react'
import { Preview, Renderer } from "@storybook/react";
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { ThemeProvider } from '@emotion/react'
import { Global, css } from '@emotion/react';
import { Title, Subtitle, Primary, ArgTypes, Stories } from '@storybook/blocks'
import theme from '../src/components/theme/defaultTheme'
import diamondbacksTheme from '../src/components/theme/teamThemes'
import { bravesTheme, oriolesTheme } from '../src/components/theme/teamThemes';

const GlobalStyles = () => (
  <Global styles={css`
    button {
      font-family: 'Helvetica Neue', 'Sans-serif';
    }
  `} 
  />
)

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
  decorators: [
    withThemeFromJSXProvider<Renderer>({
      themes: {
        default: theme,
        ['Diamondbacks']: diamondbacksTheme,
        ['Braves']: bravesTheme,
        ['Orioles']: oriolesTheme
      },
      defaultTheme: 'theme',
      Provider: ThemeProvider,
      GlobalStyles: GlobalStyles
    })
  ]
};

export default preview;
