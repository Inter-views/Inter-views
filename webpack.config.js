const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    mainFields: ["main", "module", "browser"],
  },
  entry: './src/main.tsx',
  mode: process.env.NODE_ENV,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg|ico|jpeg)$/,
        use: {
          loader: 'url-loader',
        },
    },
    ],
  },
  devServer: {
    host:'localhost',
    publicPath:'/dist',
    hot: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 8000,
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy:{
      "*": "http://localhost:3000"
    }
  },
  plugins: [new HtmlWebpackPlugin()],
};

//nodemon file contents

// {
//   "watch": ["src"],
//   "ext": "ts,json",
//   "ignore": ["src/**/*.spec.ts"],
//   "exec": "ts-node ./src/index.ts"      
// }