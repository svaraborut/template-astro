// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
	output: 'static',
	build: {
		assets: 'assets'
	},
	devToolbar: {
		enabled: false
	},
	vite: {
		plugins: [tailwindcss()]
	}
})
