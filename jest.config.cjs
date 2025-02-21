module.exports = {
    moduleNameMapper: {
      "\\.(css|scss)$": "identity-obj-proxy",
      '\\.(png|jpg|webp|ttf|woff|woff2|svg|mp4)$': './fileMock.ts'
    }
  }