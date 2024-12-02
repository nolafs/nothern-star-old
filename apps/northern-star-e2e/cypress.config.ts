import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: { default: 'nx run northern-star:start' },
      ciWebServerCommand: 'nx run northern-star:serve-static',
    }),
    baseUrl: 'http://localhost:3000',
  },
});
