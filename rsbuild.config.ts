import { defineConfig } from '@rsbuild/core';
import { pluginBabel } from '@rsbuild/plugin-babel';
import { pluginSolid } from '@rsbuild/plugin-solid';

export default defineConfig({
  source: {
    entry: {
      index: './src/index.tsx',
    },
  },
  html: {
    title: 'Asterline OS - Launch your product faster',
    favicon: false,
  },
  plugins: [
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
    }),
    pluginSolid(),
  ],
});