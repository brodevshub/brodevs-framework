import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@assets': '/src/assets',
			'@components': '/src/components',
			'@contexts': '/src/contexts',
			'@hooks': '/src/hooks',
			'@pages': '/src/pages',
			'@layouts': '/src/layouts',
			'@services': '/src/services',
			'@icons': '/src/components/icons',
			'@util': '/src/util',
			'@lib': '/src/lib',
			'@config': '/config',
		},
	},
})
