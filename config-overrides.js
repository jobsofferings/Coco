const path = require("path");
const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addLessLoader,
  useBabelRc,
  addWebpackAlias,
} = require("customize-cra");

module.exports = {
  webpack: override(
    useBabelRc(),
    addDecoratorsLegacy(),
    disableEsLint(),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: {
        '@primary-color': '#fb7268',
        "@primary-menu-background-color": "rgba(118, 56, 255, 0.05)",
        "@darker-color": "rgba(0,0,0,0.85)",
        "@dark-color": "rgba(0,0,0,0.65)",
        "@light-color": "rgba(0,0,0,0.45)",
        "@layout-header-background": "#FFFFFF",
        "@font-family": "PingFang SC",
        "@card-shadow": "0px 10px 20px 0px rgba(151,151,151,0.12)",
        "@border": "solid 1px rgba(0,0,0,0.1)",
        "@border-radius-base": "4px",
      },
    }),
    addWebpackAlias({
      ["@"]: path.resolve(__dirname, "src"),
    })
  ),
};
