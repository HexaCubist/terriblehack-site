<script lang="ts">
	import '@fontsource-variable/manrope';
	let { children, data } = $props();
	import { page } from '$app/state';
</script>

<div class="error-div">
	<div>
		{#if page.status === 404}
			<h1>Page Not Found</h1>

			<p>You've reached a page that doesn't exist. Please check the URL and try again.</p>
		{/if}
	</div>
</div>

<style lang="postcss">
	.error-div {
		@apply m-0 text-left font-light sm:text-justify;
		@apply bg-white text-black;
		font-family: 'Manrope Variable', system-ui;
		& > div {
			@apply max-w-prose;
		}
		h1 {
			@apply text-center text-6xl;
		}
		p {
			@apply mt-3 text-base;
		}
	}
	h1,
	h1 {
		@apply m-0 text-6xl leading-none font-light md:text-8xl;
	}

	p {
		@apply m-0 sm:leading-10;
		font-size: 1.4em;
		text-shadow: 0 4px 5px #0001;
	}

	.error-div {
		@apply flex h-screen items-center justify-center p-4 text-center;
	}
</style>
