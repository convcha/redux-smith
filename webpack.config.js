module.exports = {
  entry: './src/index.tsx',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { loader: "babel-loader" },
          { loader: "ts-loader" }
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ 'tsx', '.ts', '.js' ]
  }
};
