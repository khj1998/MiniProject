import App from './App.svelte';

const app = new App({
<<<<<<< HEAD
	target: document.body
});


=======
	target: document.body,
	props: {
		name: 'world'
	}
});

>>>>>>> 1af0604fceb5949c5fd77d0e4ef1e062841821e7
export default app;