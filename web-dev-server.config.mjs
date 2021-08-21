import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  appIndex: 'app/index.html',
  debug: true,
  open: true,
  plugins: [esbuildPlugin({ ts: true })],
  port: 3200,
};