import adapter from '@sveltejs/adapter-netlify';

export default {
	kit: {
		adapter: adapter({
			split: false
		}),
		prerender: {
			crawl: true,
			enabled: true,
			onError: 'continue',
			entries: ['*']
		}
	}
};
