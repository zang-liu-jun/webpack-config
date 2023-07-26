import HtmlWebpackPlugin from "html-webpack-plugin"
import path, { dirname } from "path"
import { fileURLToPath } from "url"

import { VueLoaderPlugin } from "vue-loader"

export default {
  entry: "./src/main.ts",
  output: {
    path: path.resolve(dirname(fileURLToPath(import.meta.url)), 'dist'),
    filename: 'bundle.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/.vue$/],
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          reactivityTransform: true,
          enableTsInTemplate: false
        }
      },
    ]
  },
  resolve: {
    extensions: ['.vue', '.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new VueLoaderPlugin()
  ],
  mode: "development",
  devServer: {
    host: "localhost",
    port: "3000",
    open: true
  }
}