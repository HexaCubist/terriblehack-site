<script lang="ts">
	import { page } from '$app/state';
	import { env } from '$env/dynamic/public';
	import Logo from '$lib/assets/logo.svelte';
	import EventDate from '$lib/components/eventDate.svelte';
	import FeatureList from '$lib/components/featureList.svelte';
	import PageHeader from '$lib/components/pageHeader.svelte';
	import { canShowDate, filetoURL, getLocalEvent, imagePreset } from '$lib/clientUtils.svelte';
	import Cta from '$lib/components/cta.svelte';
	import EventCountdown from '$lib/components/eventCountdown.svelte';
	import Icon from '@iconify/svelte';
	import { DateTime } from 'luxon';
	import { onMount } from 'svelte';
	import type { PageProps } from './$types';
	import ProjectCarousel from '$lib/components/projectCarousel.svelte';
	let { data }: PageProps = $props();

	const { events, featured_projects, globalData } = data;

	const { extra_links } = globalData;

	const year = new Date().getFullYear();
	let matched_location = $derived(getLocalEvent(events));
	let loc = $derived(matched_location === -1 ? undefined : events[matched_location]);
	let locStartDate = $derived(loc?.start && DateTime.fromJSDate(new Date(loc.start)));
	let locEndDate = $derived(loc?.end && DateTime.fromJSDate(new Date(loc.end)));
	// Get time till event starts, or till end if it's already started, or time since it ended
	let currentTime = $state(DateTime.local());
	onMount(() => {
		const interval = setInterval(() => {
			currentTime = DateTime.local();
		}, 1000);
		return () => clearInterval(interval);
	});
	let countdown = $derived.by(() => {
		if (!locStartDate || !locEndDate) return;
		if (currentTime < locStartDate) {
			return locStartDate.diff(currentTime, ['days', 'hours', 'minutes', 'seconds']);
		} else if (currentTime < locEndDate) {
			return locEndDate.diff(currentTime, ['days', 'hours', 'minutes', 'seconds']);
		} else {
			return currentTime.diff(locEndDate, ['days', 'hours', 'minutes', 'seconds']);
		}
	});
</script>

<PageHeader animated prop="kea">
	<div class="flex flex-wrap justify-center gap-8 lg:justify-between">
		<div class="max-w-prose grow basis-lg py-4 text-justify sm:text-center lg:pb-20 lg:text-left">
			<h2 class="mb-2 text-left text-2xl font-black sm:text-center sm:text-4xl lg:text-left">
				A weekend adventure in creating strange things✨
			</h2>
			<p class="sm:max-w-prose sm:text-lg lg:max-w-sm">
				Whether it’s a funeral piñata, freemium kettle, or milk aroma diffuser, spend a weekend with
				your friends making your worst ideas a reality!
			</p>
			<div class="mt-4 flex flex-wrap justify-center gap-2 lg:justify-start">
				{#if loc}
					{#if canShowDate(loc)}
						{#if locStartDate && currentTime < locStartDate}
							<a href={`/events/${loc.slug}`} class="btn btn-primary w-full sm:w-auto"
								>{loc.name}: Register Now!
							</a>
						{:else}
							<a href={`/events/${loc.slug}`} class="btn btn-primary w-full sm:w-auto"
								>{loc.name}: Submit Projects!
							</a>
						{/if}
					{:else}
						<a
							href={`/events/${loc.slug}`}
							class="btn btn-[white] w-full bg-gradient-to-tr from-white/20 to-white/40 bg-fixed sm:w-auto"
							class:btn-primary={!canShowDate(loc)}
							class:btn-outline={canShowDate(loc)}
							>{loc.name}: Learn More
						</a>
					{/if}
				{/if}
				{#each events as location, i}
					{#if matched_location !== i}
						<a
							href={`/events/${location.slug}`}
							class="btn btn-outline btn-[white] grow bg-gradient-to-tr from-white/20 to-white/40 bg-fixed sm:grow-0"
							>{location.name}
						</a>
					{/if}
				{/each}
			</div>
		</div>
		{#if countdown && loc}
			{#if locEndDate && locEndDate < currentTime}
				{#if locEndDate.diff(currentTime, 'days').days > -14}
					<div
						class=" hidden grow flex-col items-center justify-center text-center drop-shadow lg:-mt-8 lg:flex"
					>
						<div class="mx-auto w-60">
							<Logo />
						</div>
						<p class="text-xl tracking-wider">Thanks for joining! See you next time 💖</p>
						<a href={env.PUBLIC_HOST} target="_blank" class="btn btn-lg btn-accent btn-sm mt-4"
							>Submit Project</a
						>
					</div>
				{:else if locEndDate.diff(currentTime, 'days').days > -50}
					<div class="flex flex-col gap-2">
						<div class="mx-auto">
							<ProjectCarousel projects={featured_projects} dots={false} />
						</div>
						<div
							class=" hidden grow flex-col items-center justify-center text-center drop-shadow lg:flex"
						>
							<p class="">Thanks for joining! See you next time 💖</p>
						</div>
					</div>
				{/if}
			{:else}
				<div class="flex grow flex-col items-center justify-center lg:-mt-8">
					<EventCountdown actions={['schedule']}>
						<div class="lg:mt-8">
							<ProjectCarousel projects={featured_projects} />
						</div>
					</EventCountdown>
				</div>
			{/if}
		{/if}
	</div>
</PageHeader>

<div class="mask-rough brand-gradient relative z-10 -my-4">
	<section class="container mx-auto px-4 py-8 sm:py-12">
		<img
			src="/art/lines-2.png"
			class="absolute -top-[50px] -left-[300px] hidden h-[700px] opacity-5 md:block lg:-left-[100px]"
			alt=""
		/>
		<img
			src="/art/lines-3.png"
			class="absolute -top-[50px] -right-[300px] hidden h-[900px] opacity-5 md:block lg:-right-[200px]"
			alt=""
		/>
		<h2 class="pb-2 text-center text-4xl font-bold sm:pb-0">In 46 Hours, You Will:</h2>
		<FeatureList
			items={[
				{
					icon: 'material-symbols:lightbulb-outline-rounded',
					title: 'Come up with a terrible idea',
					description: `Your goal should be to enter this weekend with an empty head. Bring friends, but not ideas! Participants will spend the first night meeting new people, building a team, and deciding what mad scientist invention they want to make over the next two days.`
				},
				{
					icon: 'fa6-solid:explosion',
					title: 'MAKE THAT IDEA',
					description:
						'We’ll provide the tools, expert help, and a room full of clever people: you make your worst nightmare. You’ll spend most of the weekend making: We’ll get in your way as little as possible.'
				},
				{
					icon: 'carbon:group-presentation',
					title: 'Present your creation!',
					description:
						'At the end of the weekend, we leave time for you to share what you’ve made. Wrap everything up neatly and explore a world of terrible creations!'
				}
			]}
		/>
		<div class="flex flex-wrap items-center justify-center gap-4">
			<a href="/about" class="btn btn-lg btn-accent">More about the event</a>
			<Cta {loc} />
		</div>
	</section>
</div>
<section class="relative z-0 bg-black px-4 pt-16 pb-px">
	<div
		class="bg-overlay absolute inset-0"
		style:background-image={`linear-gradient(to bottom, rgba(10,5,27, 0) 100px, rgba(10,5,27, 1)
		400px), url('/art/alumni.webp')`}
		style:background-position="center, top"
		style:background-size="cover, auto 600px"
		style:background-repeat="repeat-x"
	></div>
	<h2
		class="relative z-10 mx-auto max-w-prose pb-8 text-center text-4xl font-bold text-balance text-white drop-shadow"
	>
		Our Terrible Ideas alumni:
	</h2>
	<div
		class="bg-base-100 text-base-content rounded-box relative z-10 mx-auto mb-8 grid w-full max-w-4xl grid-cols-1 gap-8 rounded p-8 sm:gap-4"
	>
		{#each featured_projects.slice(0, 3) as project, i}
			<div class="project grid grid-cols-6 gap-4 md:gap-8">
				<div
					class="order-1 col-span-6 flex flex-col justify-center sm:col-span-4 md:col-span-4"
					class:md:order-0={i % 2 === 0}
				>
					<h2 class="-mt-2 max-w-prose text-xl leading-none font-bold">{project.title}</h2>
					<p class="mb-1 max-w-prose text-lg italic">{project.subtitle}</p>
					<a href="/projects/{project.slug}" class="btn btn-accent self-end">Learn More</a>
				</div>
				<a href="/projects/{project.slug}" class="col-span-6 sm:col-span-2 md:col-span-2">
					<img
						src={filetoURL(project.image, imagePreset.small)}
						alt=""
						class=" aspect-video w-full rounded-xl object-cover shadow sm:aspect-square"
					/>
				</a>
			</div>
		{/each}
		<img
			src="/art/raccoon.webp"
			alt="Raccoon"
			class="raccoon ease-bounce absolute -right-10 bottom-0 hidden size-60 translate-1/6 object-contain transition duration-300 hover:rotate-12 hover:duration-500 md:block"
		/>
	</div>
	<div
		class="w-[calc(100% + 2rem)] relative z-0 -mx-4 -mt-[500px] -mb-[320px] h-[800px] bg-repeat-x sm:-mb-[250px]"
		style:background-size="auto 800px"
		style:background-image="url('/art/dark-footer-v3.webp')"
	></div>
	<!-- Extra project gallery -->
	<ProjectCarousel projects={featured_projects} dots={false} multiple />
	<div class="relative mt-8 flex flex-wrap items-center justify-center gap-4">
		<a href="/projects" class="btn btn-lg btn-accent btn-outline relative"> More Projects</a>
		<Cta {loc} color="primary" />
	</div>
	<div class="container mx-auto">
		<footer
			class="bg-base-100 text-base-content rounded-box brand-gradient relative z-10 my-8 rounded p-8 pb-6 text-center"
		>
			<div class="h-14 text-center lg:text-left">
				<Logo />
			</div>
			<h2 class="text-2xl font-semibold">Other Cool Events & Communities</h2>
			<ul class="mt-4 flex flex-wrap items-center justify-center gap-4 sm:px-8">
				{#each extra_links as link, i}
					<li>
						<a href={link.url} class="font-semibold text-balance underline">{link.title}</a>
					</li>
					{#if i < extra_links.length - 1}
						<span>/</span>
					{/if}
				{/each}
			</ul>
			<div class="mt-6 grid w-full grid-cols-3 text-xs uppercase">
				<div class="col-span-1 text-left">
					<p class="mt-4">Copyright &copy; {year} - Terrible Ideas&reg;</p>
				</div>
				<div class="col-span-1"></div>
				<div class="col-span-1 flex items-end justify-end gap-4 text-right font-semibold">
					<a href="/fine-print/">Event T&Cs</a>
					&middot;
					<a href="/privacy-policy/">Privacy Policy</a>
				</div>
			</div>
		</footer>
	</div>
</section>
