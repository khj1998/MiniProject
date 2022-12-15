import App from './Box.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;