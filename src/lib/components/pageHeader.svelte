<script lang="ts">
	import Menu from './menu.svelte';
	type tokens = 'kea' | 'raccoon';

	const { children, prop = 'kea' }: { children?: any; prop?: tokens } = $props();
</script>

<div class="header-wrapper relative overflow-clip" class:pb-15={prop}>
	<div class="header-bg">
		<img
			src="/art/hero-banner-alt.webp"
			alt=""
			class="absolute top-0 left-0 h-full w-full object-cover object-bottom"
		/>
		<div
			class="overlay-1 absolute top-0 left-0 h-full w-full bg-gradient-to-tr from-black to-transparent"
		></div>
	</div>
	<div class="header-contents relative z-10">
		<Menu />
		<div class="container mx-auto px-4 text-white">
			{@render children?.()}
		</div>
	</div>
</div>
{#if prop}
	<div
		class="bird-wrapper ease-bounce absolute left-20 z-20 size-0 -translate-y-1/2 drop-shadow-sm transition duration-300 hover:-rotate-12 hover:duration-500 md:size-40 lg:size-60"
	>
		<img
			src="/art/{prop}.png"
			alt=""
			class="object-fit absolute top-0 right-0 h-full w-full object-right"
		/>
	</div>
{/if}
