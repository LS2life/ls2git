import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '200.html',
			trailingSlash: 'always',
			pages: 'docs',
			assets: 'docs'
		}),
		prerender: { entries: [] },
		paths: {
			base: dev ? '' : '/ls2git'
		}
	}
};

export default config;
