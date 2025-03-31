<script lang="ts">
	let { children, data } = $props();
	import { page } from '$app/state';
</script>

<div
	class="error-div m-0 flex h-screen items-center justify-center bg-white p-4 text-center font-light text-black sm:text-justify"
>
	<div class="max-w-prose">
		{#if page.status === 404}
			<h1 class="m-0 text-center text-6xl leading-none font-light md:text-8xl">Page Not Found</h1>

			<p class="m-0 mt-3 text-base sm:leading-10">
				You've reached a page that doesn't exist. Please check the URL and try again.
			</p>
		{/if}
	</div>
</div>

<style lang="postcss">
	p {
		font-size: 1.4em;
		text-shadow: 0 4px 5px #0001;
	}
</style>
