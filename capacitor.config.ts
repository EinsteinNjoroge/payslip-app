import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.payslips.app',
  appName: 'payslips-app',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
