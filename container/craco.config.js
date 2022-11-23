const cracoModuleFederation = require('module-federation-cra');
const { name, devPort } = require('./manifest.json');

module.exports = {
  output: {
    publicPath:
      process.env.NODE_ENV === 'production'
        ? `/${name}/latest/`
        : `http://localhost:${devPort}`,
  },
  devServer: {
    client: {
      overlay: false,
      logging: 'warn',
    },
    port: devPort,
  },
  plugins: [
    {
      plugin: cracoModuleFederation,
      options: { useNamedChunkIds: true }, //THIS LINE IS OPTIONAL
    },
  ],
};
