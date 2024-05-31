import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'es.nevent.profile',
  appName: 'nev-profile-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins:{
    PushNotifications:{
      presentationOptions: ["badge", "sound", "alert"],
    }
  }
};

export default config;
