module.exports = {
  css: {
    sourceMap: true
  },
  devServer: {
    // proxy to use http://localhost:8080
    // this gets round CORS issues.
    proxy: "http://airlock-example.test"
  }
};
