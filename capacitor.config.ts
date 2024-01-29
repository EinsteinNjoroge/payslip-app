import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.payslips.app',
  appName: 'payslips-app',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    LocalNotifications: {
      iconColor: "#488AFF",
    },
  },
  ios: {
    contentInset: 'always',
  },
};

export default config;
