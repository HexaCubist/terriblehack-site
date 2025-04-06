<script lang="ts">
	import { filetoURL, imagePreset } from '$lib/clientUtils.svelte';
	import type { Collections } from '$lib/server/.directus/generated/client';

	let { project, card = true }: { project: Collections.Projects; card?: boolean } = $props();
</script>

<a href="/projects/{project.slug}" target="_blank">
	<article
		class="group relative w-full {card
			? 'rounded-box aspect-square max-w-xs overflow-hidden shadow-lg'
			: 'h-full w-full'}"
	>
		{#if project.image}
			<img
				class="absolute inset-0 h-full w-full object-cover transition duration-700 will-change-auto group-hover:scale-110"
				src={filetoURL(project.image, imagePreset.thumbnail)}
				alt={typeof project.image === 'string' ? undefined : project.image?.description}
			/>
		{/if}
		<div
			class="overlay absolute top-0 left-0 h-[200%] w-full translate-y-1/3 bg-gradient-to-b from-black/0 from-15% to-black/70 to-30% transition duration-700 group-hover:-translate-y-1/2 lg:translate-y-0"
		></div>
		<div
			class="relative z-10 flex h-full w-full flex-col justify-end gap-4 p-8 opacity-0 transition duration-700 group-hover:opacity-100 lg:opacity-100"
		>
			<div
				class="hidden shrink overflow-hidden opacity-0 transition duration-700 group-hover:opacity-100 lg:block"
			>
				<p>{project.subtitle}</p>
			</div>
			<div class="caption shrink-0">
				<p class="overflow-x-hidden font-bold break-words hyphens-auto sm:text-sm lg:text-xl">
					{project.title}
				</p>
			</div>
		</div>
	</article>
</a>
