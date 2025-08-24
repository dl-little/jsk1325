const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: argv.mode || 'development',
    entry: './src/scripts/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      clean: true,
      publicPath: isProduction ? '' : '/',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
          ],
        },
      ],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      hot: true,
      open: true,
      port: 8080,
      historyApiFallback: true,
      client: {
        overlay: true,
      },
      devMiddleware: {
        publicPath: 'auto',
      },
    },
    watchOptions: {
      ignored: /node_modules/,
      poll: 1000,
    },
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            ecma: 2020,
            compress: {
              drop_console: true,
              drop_debugger: true,
              passes: 3,
              arrows: true,
              booleans: true,
              collapse_vars: true,
              computed_props: true,
              conditionals: true,
              dead_code: true,
              evaluate: true,
              global_defs: { DEBUG: false },
              if_return: true,
              inline: true,
              join_vars: true,
              loops: true,
              negate_iife: true,
              properties: true,
              reduce_funcs: true,
              reduce_vars: true,
              sequences: true,
              side_effects: true,
              switches: true,
              typeofs: true,
            },
            mangle: {
              properties: false,
            },
            format: {
              comments: false,
              beautify: false,
            },
          },
          extractComments: false,
        }),
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: [
              'default',
              {
                discardComments: { removeAll: true },
                normalizeWhitespace: true,
                colormin: true,
                mergeLonghand: true,
              },
            ],
          },
        }),
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.ejs',
        filename: isProduction ? '../index.html' : 'index.html',
        inject: false,
        minify: isProduction
          ? {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true,
            }
          : false,
      }),
      ...(isProduction
        ? [new MiniCssExtractPlugin({ filename: 'styles.css' })]
        : []),
    ],
  };
};
