import MiniCssExtractPlugin, { loader } from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoaders';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    /**
   * babel не нужен, тк как есть tsLoader
   */
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_module/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [['i18next-extract', { locales: ['ru', 'en'], keyAsDefaultValue: true }]]
            }
        }
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    };

    const cssLoader = buildCssLoader(isDev);

    return [
    /**
     * для всех типов файлов, не являющихся js. (ts, gif, png...)
     */
        fileLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
        svgLoader
    ];
}
