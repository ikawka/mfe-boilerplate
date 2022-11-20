const deps = require('./package.json').dependencies;
const { name, apps, entryPoint } = require('./manifest.json');

module.exports = {
  name,
  remotes: Object.keys(apps).reduce((acc, item) => {
    const domain = `localhost:${apps[item]}`;
    acc[item] = `${item}@http://${domain}/remoteEntry.js`;
    return acc;
  }, {}),
  filename: entryPoint,
  shared: {
    ...zdeps,
    react: {
      singleton: true,
      requiredVersion: deps['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: deps['react-dom'],
    },
  },
};
