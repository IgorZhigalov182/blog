import path from 'path';
import webpack from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options;

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
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    /**
     * При сжатии бандла не разобрать в каком месте случилась ошибка
     * при помощи этого свойства в последствии можно отследить место,
     *  где приложение свалилось
     */
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  };
}
