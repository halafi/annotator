module.exports = {
  moduleFileExtensions: ["js", "jsx", "json"],
  rootDir: "src",
  coverageDirectory: "../coverage",
  testEnvironment: "jsdom",
  verbose: true,
  transform: {
    "^.+\\.js$": "babel-jest",
  },
};
