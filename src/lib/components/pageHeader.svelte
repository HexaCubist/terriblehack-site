<script lang="ts">
	import Menu from './menu.svelte';
	type tokens = 'kea' | 'raccoon';
	type backgroundPresets = 'hero' | 'aurora' | 'hero-no-overlay';

	const {
		children,
		prop = undefined,
		animated = false,
		rough = false,
		minHeight = undefined,
		bg = 'hero'
	}: {
		children?: any;
		prop?: tokens;
		animated?: boolean;
		rough?: boolean;
		minHeight?: 'screen' | number;
		bg?: backgroundPresets | string;
	} = $props();
</script>

<div
	class="header-wrapper relative flex flex-col overflow-clip"
	class:pb-15={prop}
	class:mask-rough={rough}
	class:mask-bottom={rough}
	class:min-h-screen={minHeight === 'screen'}
	style:min-height={typeof minHeight === 'number' ? `${minHeight}px` : undefined}
>
	<div class="header-bg">
		{#if bg.includes('hero')}
			<img
				src="/art/hero-banner-alt.webp"
				alt=""
				class:ken-burns={animated}
				class="absolute top-0 left-0 h-full w-full object-cover object-bottom"
			/>
			<div
				class="overlay-1 absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black/40 from-0% to-transparent to-[8rem]"
			></div>
			{#if !bg.includes('no-overlay')}
				<div
					class="overlay-1 absolute top-0 left-0 h-full w-full bg-gradient-to-tr from-black to-transparent"
				></div>
			{/if}
		{:else if bg === 'aurora'}
			<video
				autoplay
				loop
				muted
				preload="auto"
				src="/art/aurora.webm"
				class="absolute inset-0 h-full w-full object-cover"
			></video>
			<div
				class="absolute inset-0 bg-repeat"
				style:background-image="url(/art/grid-overlay.svg)"
			></div>
			<div
				class="overlay-1 absolute top-0 left-0 h-full w-full bg-gradient-to-tr from-black/40 to-transparent/30"
			></div>
		{:else}
			<img
				src={bg}
				alt=""
				class:ken-burns={animated}
				class="absolute top-0 left-0 h-full w-full object-cover object-center"
			/>
			<div
				class="overlay-1 absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black/40 from-0% to-transparent to-[8rem]"
			></div>
			<div
				class="overlay-1 absolute top-0 left-0 h-full w-full bg-gradient-to-tr from-black to-transparent"
			></div>
		{/if}
	</div>
	<div class="header-contents relative z-10 flex h-full grow flex-col">
		<Menu backdrop />
		<div class="container mx-auto flex h-full grow flex-col px-6 text-white">
			{@render children?.()}
		</div>
	</div>
</div>
{#if prop}
	<div
		class="bird-wrapper ease-bounce absolute left-20 z-20 size-0 -translate-y-1/2 drop-shadow-sm transition duration-300 hover:-rotate-12 hover:duration-500 md:size-40 lg:size-60"
	>
		<img
			src="/art/{prop}.webp"
			alt=""
			class="object-fit absolute top-0 right-0 h-full w-full object-right"
		/>
	</div>
{/if}
