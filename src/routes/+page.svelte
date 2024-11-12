<script>
	import { getData, test } from '$lib/fetch';
	import { onMount } from 'svelte';

	test();

	onMount(() => {
		console.log('mounted');
		getData().then((data) => {
			console.log(data);
		});
	});
</script>

<h1>Hello World</h1>
