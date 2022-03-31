/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  transform: { "^.+\\.(js|jsx|ts|tsx|mjs)$": "babel-jest" },
  transformIgnorePatterns: [
    '^.+\\.module\\.(css|sass|scss)$',
    // '^.*/node_modules/(?!(ol/|labelgun/|@mapbox/mapbox-gl-style-spec/|mapbox-to-ol-style/|ol-mapbox-style/|geotiff/|fetch-blob/)).*$'
    '/node_modules/(?!(ol/))'
  ],
};
