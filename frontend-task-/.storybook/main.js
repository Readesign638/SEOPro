/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../my-spa/src/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../my-spa/src/components/**/*.mdx"
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-docs"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  }
};

export default config;