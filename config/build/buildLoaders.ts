import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  return [
    /**
     * для всех типов файлов, не являющихся js. (ts, gif, png...)
     */
    typescriptLoader
  ];
}
