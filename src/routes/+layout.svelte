<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { onMount } from 'svelte';
	import '../app.css';
	import '@fontsource-variable/manrope';
	let { children } = $props();

	onMount(() => {
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			window.dataLayer.push(arguments);
		}
		// @ts-ignore
		gtag('js', new Date());

		// @ts-ignore
		gtag('config', env.PUBLIC_GOOGLE_ANALYTICS);
	});
</script>

<svelte:head>
	<!-- Google tag (gtag.js) -->
	<script
		async
		src="https://www.googletagmanager.com/gtag/js?id={env.PUBLIC_GOOGLE_ANALYTICS}"
	></script>
</svelte:head>

{@render children()}
