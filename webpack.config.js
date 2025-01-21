const path = require("path");
const webpack = require("webpack");
const pkg = require("./package.json");
const TerserPlugin = require("terser-webpack-plugin");

// const env = process.env.NODE_ENV;

module.exports = function(env, argv) {
  let builddir = argv.mode == "production" ? "helpers" : "test/helpers";

  let baseConf = {
    watch: argv.mode != "production",
    target: "web",
    optimization: {
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          terserOptions: {
            format: {
              comments: false,
            },
          },
        }),
      ],
    },
    mode: argv.mode,
    entry: {
      "vega-embed": "./src/vega-embed.js",
      cover: "./src/cover.js",
      "dsv-render": "./src/dsv-render.js",
      "headers-nav": "./src/headers-nav.js",
      placeholders: "./src/placeholders.js",
      "data-saver": "./src/data-saver",
      "qr-code": "./src/qr-code.js",
      navbar: "./src/navbar.js",
      metadata: "./src/metadata.js",
    },
    devtool: argv.mode != "production" ? "inline-source-map" : false,
    devServer:
      argv.mode != "production"
        ? { contentBase: "docs" }
        : { contentBase: "test" },
    output: {
      path: path.resolve(__dirname, builddir, ""),
    },
    module: {
      rules: [
        {
          test: /\.svg$/,
          resourceQuery: /raw/,
          type: "asset/source",
        },

        {
          test: /\.svg$/,
          resourceQuery: { not: [/raw/] },
          type: "asset/inline",
        },

        {
          test: /\.(less|css|scss)$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        // Definitions...
        VERSION: JSON.stringify(pkg.version),
      }),
    ],
  };

  // let libConf = Object.assign({} , baseConf);

  return baseConf;
};
