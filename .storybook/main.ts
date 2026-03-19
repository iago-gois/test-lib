import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "@tailwindcss/vite";

const storybookDir = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-a11y", "@storybook/addon-interactions"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    config.plugins ??= [];
    config.plugins.push(tailwindcss());

    config.resolve ??= {};
    config.resolve.alias ??= {};
    config.resolve.alias = {
      ...(typeof config.resolve.alias === "object" ? config.resolve.alias : {}),
      "@": resolve(storybookDir, "../src"),
    };

    return config;
  },
};

export default config;
