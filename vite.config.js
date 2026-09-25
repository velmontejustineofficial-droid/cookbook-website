import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    __APP_NAME__: JSON.stringify('Kusina ni bonbon'),
    __APP_VERSION__: JSON.stringify('1.4.0'),
    __SUPPORT_EMAIL__: JSON.stringify('support@kusinacraft.app'),
  }
})
