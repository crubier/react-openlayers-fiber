// jest.config.js
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: '.',
})

// Add any custom config to be passed to Jest
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const customJestConfig = {
  // preset: 'ts-jest',
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  // moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
}

const jestConfig = async () => {
  const nextJestConfig = await createJestConfig(customJestConfig)();
  // See https://github.com/vercel/next.js/issues/35634#issuecomment-1080942525
  const veryCustomJestConfig = {
    ...nextJestConfig,
    transformIgnorePatterns: [
      '^.+\\.module\\.(css|sass|scss)$',
      // '<rootDir>/node_modules/(?!(ol/|labelgun/|@mapbox/mapbox-gl-style-spec/|mapbox-to-ol-style/|ol-mapbox-style/|geotiff/|fetch-blob/))'
      '/node_modules/(?!(ol/))'
    ]
  };
  return veryCustomJestConfig;
};


// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default jestConfig;