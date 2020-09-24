const path = require("path");
const webpackModule = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

function webpack(
  webpackConfig = {},
  { loadPartially, loadCSSinHTML, packageName } = {
    loadPartially: false,
    loadCSSinHTML: false,
    packageName: undefined,
  }
) {
  const prod = process.env.NODE_ENV === "production";

  let pnp;

  try {
    // @ts-ignore
    pnp = require("pnpapi");
  } catch (error) {
    // not in PnP; not a problem
  }

  let cesiumSource;

  if (pnp) {
    const topLevelLocation = packageName
      ? packageName
      : pnp.getPackageInformation(pnp.topLevel).packageLocation;

    cesiumSource = path.resolve(
      pnp.resolveToUnqualified("cesium", topLevelLocation, {
        considerBuiltins: false,
      }),
      "Source"
    );
  } else {
    cesiumSource = "node_modules/cesium/Source";
  }

  const { module = {}, resolve = {}, resolveLoader = {} } = webpackConfig;

  // if (loadPartially) {
  // https://cesium.com/docs/tutorials/cesium-and-webpack/

  // FIXME: throws error at build time
  // if (prod) {
  //   // Strip cesium pragmas
  //   webpackConfig.module = { ...webpackConfig.module } || {};
  //   webpackConfig.module.rules = webpackConfig.module.rules || [];
  //   webpackConfig.module.rules.push({
  //     test: /.js$/,
  //     enforce: "pre",
  //     include: cesiumSource,
  //     use: [
  //       {
  //         loader: "strip-pragma-loader",
  //         options: {
  //           pragmas: {
  //             debug: false,
  //           },
  //         },
  //       },
  //     ],
  //   });
  // }

  webpackConfig.resolve.alias = {
    ...webpackConfig.resolve.alias,
    cesium$: "cesium/Cesium",
    cesium: "cesium/Source",
  };

  webpackConfig.plugins.push(
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(cesiumSource, "../Build/Cesium/Workers"),
          to: "cesium/Workers",
        },
        {
          from: path.join(cesiumSource, "Assets"),
          to: "cesium/Assets",
        },
        {
          from: path.join(cesiumSource, "Widgets"),
          to: "cesium/Widgets",
        },
        {
          from: path.join(cesiumSource, "ThirdParty"),
          to: "cesium/ThirdParty",
        },
      ],
    }),

    new webpackModule.DefinePlugin({
      CESIUM_BASE_URL: JSON.stringify("cesium"),
    })
  );

  webpackConfig.output = {
    ...webpackConfig.output,
    // Needed to compile multiline strings in Cesium
    sourcePrefix: "",
  };

  webpackConfig.amd = {
    ...webpackConfig.amd,
    // Enable webpack-friendly use of require in Cesium
    toUrlUndefined: true,
  };

  webpackConfig.node = {
    ...webpackConfig.node,
    // Resolve node module use of f
    fs: "empty",
  };

  console.log(webpackConfig.module.rules[3]);
  return webpackConfig;
}

module.exports = { webpack };
