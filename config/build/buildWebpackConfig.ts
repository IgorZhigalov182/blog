import path from 'path';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';
import webpack from 'webpack';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      /**
       * contenthash - check different between cash and new content
       */
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      /**
       * Правила для обработки loader(ов)
       */
      rules: buildLoaders()
    },
    resolve: buildResolvers()
  };
}
