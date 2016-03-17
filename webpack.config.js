module.exports = {
  entry: "./app/root.ts",
  debug: true,
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  output: {
    path: "./build",
    filename: "bundle.js"
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader', exclude: [ /\.(spec|e2e).ts$/] }
    ]
  }
};