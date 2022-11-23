const deps = require('./package.json').dependencies;
const { name, apps, entryPoint } = require('./manifest.json');

module.exports = {
  name,
  remotes: Object.keys(apps).reduce((acc, item) => {
    const domain = process.env.PRODUCTION_DOMAIN
      ? `${process.env.PRODUCTION_DOMAIN}/${item}/latest`
      : `http://localhost:${apps[item]}`;
    acc[item] = `${item}@${domain}/remoteEntry.js`;
    return acc;
  }, {}),
  filename: entryPoint,
  shared: {
    ...deps,
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
