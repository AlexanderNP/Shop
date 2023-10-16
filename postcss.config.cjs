const nested = require("postcss-nested")
const postCssPresetEnv = require("postcss-preset-env")
const customMedia = require("postcss-custom-media")

module.exports = {
  plugins: [
    nested(),
    postCssPresetEnv(),
    customMedia({}),
  ]
}