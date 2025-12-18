import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	extensions: ['.svelte', '.svg'],

	kit: {
		adapter: adapter(),

		alias: {
			'@assets': './src/assets',
			'@components': './src/components',
			'@config': './src/config',
			'@partials': './src/partials',
			'@sections': './src/sections',
			'@styles': './src/styles',
			'@types': './src/types'
		}
	}
};

export default config;