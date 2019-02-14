module.exports = {
  module: {
    loaders: [
      { test: /\.(png|jpg|svg)$/, loader: 'url-loader?limit=8192' }
    ],
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
