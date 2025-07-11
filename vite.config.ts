import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import { checker } from 'vite-plugin-checker';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react({ tsDecorators: true }),
		svgr({ include: '**/*.svg' }),
		checker({ typescript: true }),
	],
});
