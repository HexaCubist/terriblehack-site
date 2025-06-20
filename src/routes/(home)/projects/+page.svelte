<script lang="ts">
	import { page } from '$app/state';
	import PageFooter from '$lib/components/pageFooter.svelte';

	import PageHeader from '$lib/components/pageHeader.svelte';
	import ProjectCard from '$lib/components/projectCard.svelte';
	import type { Collections } from '$lib/server/.directus/generated/client';
	import Icon from '@iconify/svelte';
	import type { PageProps } from './$types';
	import { onMount } from 'svelte';
	import {
		filetoURL,
		getLocalEvent,
		getLocalEventFromTimezone,
		imagePreset
	} from '$lib/clientUtils.svelte';
	import { shuffle } from 'fast-shuffle';

	let { data }: PageProps & { projects: Collections.Projects[] } = $props();
	let events = $derived(data.events);
	let projects = $derived(shuffle(data.projects));

	let seasons = $derived([...new Set(projects.map((p) => p.season).sort())].sort().reverse());

	let selectedSeason = $derived(page.url.hash.replace('#', '') || seasons[0]);
	let visibleSeason: undefined | string = $state(undefined);

	let derivedSelectedSeason = $derived(selectedSeason || visibleSeason);

	function isVisible(el: HTMLElement): boolean {
		const rect = el.getBoundingClientRect();
		const windowWidth = window.innerWidth || document.documentElement.clientWidth;
		const windowHeight = window.innerHeight || document.documentElement.clientHeight;

		return rect.bottom > 0 && rect.right > 0 && rect.left < windowWidth && rect.top < windowHeight;
	}

	let scrollContainer: HTMLDivElement | null = $state(null);
	onMount(() => {
		const handleScroll = () => {
			const seasonElements = document.querySelectorAll<HTMLDivElement>('div.card[id]');
			seasonElements.forEach((element) => {
				if (isVisible(element)) {
					visibleSeason = element.id;
				}
			});
		};

		scrollContainer?.addEventListener('scroll', handleScroll);
		handleScroll(); // Initial check

		return () => {
			scrollContainer?.removeEventListener('scroll', handleScroll);
		};
	});

	// Sort event list so that the local event is first
	// let localEvent = $derived(getLocalEvent(events));
	// svelte-ignore state_referenced_locally
	let sortedEvents = $state([...events]);
	// let sortedEvents = $derived(
	// 	[events[localEvent], ...events.filter((_, i) => i !== localEvent)].filter(Boolean)
	// );
	onMount(() => {
		const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
		let localEvent = getLocalEventFromTimezone(events, tz);
		sortedEvents = [events[localEvent], ...events.filter((_, i) => i !== localEvent)].filter(
			Boolean
		);
	});
</script>

<div class="h-screen overflow-x-auto pb-20" bind:this={scrollContainer}>
	<PageHeader rough>
		<div class="pt-10 pb-20">
			<h1 class="mb-4 text-4xl font-bold">
				<span class="font-bold"> Projects </span>
				<div class="mt-4 hidden flex-wrap gap-4 sm:flex">
					{#each seasons as season, i}
						<a class="btn btn-lg btn-secondary" href="#{season}">{season} Projects</a>
					{/each}
				</div>
			</h1>
		</div>
	</PageHeader>
	<div class="px-4">
		<div class="container mx-auto grid gap-8 lg:grid-cols-12">
			<div class="hidden lg:col-span-3 lg:block">
				<div class="card bg-base-100 sticky top-4 container mx-auto -mt-10 mb-4 shadow-sm">
					<div class="card-body">
						<h2 class="w-full text-xl font-bold">Projects by Year</h2>
						<div class="prose prose-sm">
							<ul>
								{#each seasons as season}
									{@const seasonProjects = projects.filter((p) => p.season === season)}
									<li>
										<a class="link" href="#{season}" class:font-bold={season === visibleSeason}
											>{season} Projects</a
										>
										<ul>
											{#each sortedEvents.filter( (e) => seasonProjects.some((p) => p.event === e.id) ) as event}
												<li>
													<a class="link" href="#{season}-{event.slug}">
														{event.name}
													</a>
												</li>
											{/each}
										</ul>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="lg:col-span-9">
				<!-- Featured Projects -->
				<div class="card bg-base-100 container mx-auto -mt-10 mb-4 shadow-sm" id="featured">
					<div class="card-body lg:mx-10">
						<div class="bg-base-100 top-0 z-10 max-w-full">
							<div class="mt-4 mb-4 flex items-center justify-center gap-4">
								<div class="border-base-300 hidden grow border-b-2 border-dotted sm:block"></div>
								<h2 class="text-5xl font-bold sm:text-center">Featured Projects ✨</h2>
								<div class="border-base-300 hidden grow border-b-2 border-dotted sm:block"></div>
							</div>
						</div>
						<div
							class="grid grid-cols-2 content-center justify-items-center gap-4 md:grid-cols-3 lg:grid-cols-3"
						>
							{#key sortedEvents}
								{#each projects.filter((p) => p.featured && p.image) as project}
									{#key `featured-${project.slug}`}
										<ProjectCard {project} />
									{/key}
								{/each}
							{/key}
						</div>
					</div>
				</div>
				{#each seasons as season, i}
					{@const seasonProjects = projects.filter((p) => p.season === season && p.image)}
					<div class="card bg-base-100 container mx-auto mb-4 shadow-sm" id={season}>
						<div class="card-body lg:mx-10">
							<div class="bg-base-100 top-0 z-10 max-w-full">
								<div class="mt-4 mb-4 flex items-center justify-center gap-4">
									<div class="border-base-300 hidden grow border-b-2 border-dotted sm:block"></div>
									<h2 class="text-5xl font-bold sm:text-center">{season} Projects</h2>
									<div class="border-base-300 hidden grow border-b-2 border-dotted sm:block"></div>
								</div>
							</div>
							{#each sortedEvents.filter( (e) => seasonProjects.some((p) => p.event === e.id) ) as event}
								{@const eventProjects = seasonProjects.filter((p) => p.event === event.id)}
								<h3 class="mt-4 text-3xl font-bold" id="{season}-{event.slug}">
									{season} - {event.name}
								</h3>
								<div
									class="grid content-center justify-items-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4"
								>
									{#each eventProjects as project}
										{#key `${season}-${event.slug}-${project.slug}`}
											<ProjectCard {project} />
										{/key}
									{/each}
								</div>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<PageFooter />
</div>
<div class="dock fixed bottom-0 z-50 md:hidden">
	{#each seasons as season}
		<a class:dock-active={visibleSeason === season} href="#{season}">
			<Icon icon="material-symbols:local-activity-outline-rounded" class="size-4" />
			<span class="dock-label">{season}</span>
		</a>
	{/each}
</div>
