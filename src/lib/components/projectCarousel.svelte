<script lang="ts">
	import { filetoURL, imagePreset } from '$lib/clientUtils.svelte';
	import type { Collections } from '$lib/server/.directus/generated/client';
	import type { EmblaCarouselType, EmblaOptionsType, EmblaPluginType } from 'embla-carousel';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import emblaAutoplay from 'embla-carousel-autoplay';
	import ProjectCard from './projectCard.svelte';
	import Icon from '@iconify/svelte';

	let { projects, dots = true }: { projects: Collections.Projects[]; dots?: boolean } = $props();

	let index = $state(0);

	const autoplay = emblaAutoplay({
		delay: 3000,
		stopOnInteraction: true
	});

	let emblaApi: EmblaCarouselType | undefined = $state();
	let config: {
		options: EmblaOptionsType;
		plugins: EmblaPluginType[];
	} = {
		options: {
			loop: true
		},
		plugins: [autoplay]
	};

	function onInit(event: CustomEvent<EmblaCarouselType>) {
		emblaApi = event.detail;
		emblaApi.on('select', () => {
			index = emblaApi?.selectedScrollSnap() ?? 0;
		});
	}
</script>

<div class="flex flex-col gap-2">
	<div
		class="embla lg:rounded-box w-full lg:aspect-square lg:max-w-xs lg:overflow-hidden lg:shadow-lg"
		use:emblaCarouselSvelte={config}
		onemblaInit={onInit}
	>
		<div class="embla__container flex h-full">
			{#each projects as project}
				{#if project.image}
					<div
						class="embla__slide mr-4 aspect-square max-w-40 flex-shrink-0 lg:max-w-xs"
						style="flex: 0 0 100%"
						onpointerenter={() => autoplay.stop()}
					>
						<ProjectCard {project} />
					</div>
				{/if}
			{/each}
		</div>
	</div>

	<!-- UI -->
	{#if dots}
		<div class="hidden justify-center sm:flex">
			<div class="dots flex gap-1">
				{#each projects as project, i}
					<button
						class="size-2 rounded-full bg-current opacity-30"
						class:opacity-100={index === i}
						onclick={() => emblaApi?.scrollTo(i)}
						aria-label={`Go to slide ${i + 1}`}
					>
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>
