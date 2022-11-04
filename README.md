# Micro-frontend Boilerplate

This micro frontend POC will use webpack module federation plugin.
Will contain feature samples

# Creating sub-app

1. Run `yarn create react-app apps/YOUR_APP --template file:others/cra-template-app`
2. Go to `app/YOUR_APP` and udpdate `manifest.json` file:
   ```
   // manifest.json
   {
     "name": "APP_NAME",                // <-- update the name
     "devPort": 3000,                   // <-- update this port
     "entryPoint": "remoteEntry.js",
     "exposes": {                       // <-- add more exposed component
       "./App": "./src/bootstrap"
     }
   }
   ```
3. Run `yarn start` to start the new app in isolation.

# Import a sub-app into the Container
