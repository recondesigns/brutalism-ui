import React from "react"
import { Preview } from "@storybook/react"
import { themes } from "@storybook/theming"
// import { Title, Subtitle, Primary, ArgTypes, Stories } from "@storybook/blocks"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      sort: "requiredFirst",
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: {
        title: "Contents",
        disabled: false,
        headingSelector: "h2, h3",
      },
      argTypes: {
        sort: "requiredFirst",
      },
      theme: themes.light,
      // page: () => (
      //   <>
      //     <Title />
      //     <Subtitle />
      //     <Primary />
      //     <ArgTypes />
      //     <Stories />
      //   </>
      // ),
    },
  },
}

export default preview
