import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueDevTools from 'vite-plugin-vue-devtools';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
    resolve:{
        alias:{
            '~' : path.resolve(__dirname, './src')
        },
    },
    plugins: [
        vue(),
        VueDevTools(),
    ],
    base: './',
    // @ts-ignore
    test: {
        globals: true,
        environment: 'happy-dom',
    },
});
