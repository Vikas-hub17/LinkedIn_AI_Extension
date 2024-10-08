import { defineConfig } from 'wxt';
import react from '@vitejs/plugin-react';

export default ({

  build: {
    target: 'chrome-mv3',
    plugins: [react()],
  },

  manifest: {
    name: 'LinkedIn AI Reply',
    version: '1.0',
    manifest_version: 3,
    permissions: [
      'activeTab',
      'scripting',
      'storage',
    ],
    action: {
      default_popup: './src/popup/index.html',
    },
    content_scripts: [
      {
        matches: ['https://www.linkedin.com/*'],
        js: ['./src/contentScript.ts'],
      },
    ],
    background: {
      service_worker: './src/background.ts',
    },
  },
});


