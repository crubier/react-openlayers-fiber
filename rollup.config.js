import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import fp from "lodash/fp";
import {
  dependencies,
  devDependencies,
  peerDependencies,
  browserslist,
} from "./package.json";

export const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
  input: "./src/index.ts",
  external: fp.uniq([
    // Do not package dependencies
    ...Object.keys(dependencies || {}),
    // Do not package dev dependencies
    ...Object.keys(devDependencies || {}),
    // Do not package peer dependencies
    ...Object.keys(peerDependencies || {}),
    "lodash/fp",
  ]),
  plugins: [
    nodeResolve({ extensions, mainFields: ["module"] }),
    babel({
      babelrc: false,
      extensions,
      exclude: "**/node_modules/**",
      runtimeHelpers: true,
      presets: [
        [
          "@babel/preset-env",
          { loose: true, modules: false, targets: browserslist.join(",") },
        ],
        "@babel/preset-react",
        "@babel/preset-typescript",
      ],
    }),
    commonjs({
      extensions,
    }),
  ],
  output: [
    {
      dir: "lib",
      entryFileNames: "[name].cjs.js",
      chunkFileNames: "[name]-[hash].cjs.js",
      format: "cjs",
    },
    {
      dir: "lib",
      entryFileNames: "[name].esm.js",
      chunkFileNames: "[name]-[hash].esm.js",
      format: "es",
    },
  ],
};
