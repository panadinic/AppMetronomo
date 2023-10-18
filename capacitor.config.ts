import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'Metronomo.app',
  appName: 'AppMetronomo',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    Camera: {
      // Configuración específica del plugin de la cámara si es necesaria
    },
    // Otros plugins...
  },
};

export default config;

