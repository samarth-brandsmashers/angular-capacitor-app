import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sj.angularcapacitorapp',
  appName: 'angular-capacitor-app',
  webDir: 'dist',
  server: {
    url: 'http://192.168.1.30:4200',
    cleartext: true
  }
} 

export default config;
