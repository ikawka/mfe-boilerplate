const deps = require("./package.json").dependencies;
const { name, exposes, entryPoint } = require('./manifest.json');

module.exports = {
  name,
  exposes,
  filename: entryPoint,
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};
