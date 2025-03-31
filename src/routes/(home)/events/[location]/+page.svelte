<script lang="ts">
	import { page } from '$app/state';
	import Menu from '$lib/components/menu.svelte';
	import type { EventLocation } from '$lib/models';
	import Icon from '@iconify/svelte';
	import { json } from '@sveltejs/kit';
	import { DateTime } from 'luxon';
	const { event } = page.data;
	const start = DateTime.fromJSDate(event.start);
	const end = DateTime.fromJSDate(event.end);

	// Function to add ordinal suffix to day number
	// https://stackoverflow.com/a/76930885
	function addOrdinal(number: number) {
		const suffixes = ['th', 'st', 'nd', 'rd'];
		const v = number % 100;
		return number + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
	}
</script>

<img
	src="/events/map-akl.webp"
	alt=""
	class="pointer-events-none absolute top-0 max-h-screen w-full object-cover object-top"
	style:mask-image="linear-gradient(to bottom, #fff, #ffffffd4, #fff0)"
/>
<div class="relative z-10">
	<Menu />
	<div class="container mx-auto grid grid-cols-2 gap-4 px-4">
		<div
			class="card bg-base-100 overflow-clip border-t-3 shadow-sm"
			style:border-top-color={event.color}
		>
			<div class="card-body">
				<h2 class="card-title my-0 text-5xl leading-none">{event.name}</h2>
				<p class="text-2xl">
					{start.toFormat('LLLL')}
					{addOrdinal(start.day)} -
					{#if start.month === end.month}
						{addOrdinal(end.day)}
					{:else}
						{end.toFormat('LLLL')}
						{addOrdinal(end.day)}
					{/if}
				</p>
				<hr />
				<div class="prose flex flex-col gap-2 text-base">
					{@html event.details.blurb}
				</div>
				<div class="card-actions -mx-6 mt-2 -mb-6 grid grid-cols-2 gap-0 text-lg">
					<div class="border-base-300 flex border-t border-r p-4">
						<Icon icon="material-symbols:map-search-outline" class="size-6" />
						<p class="ml-4">{event.location}</p>
					</div>
					<div class="border-base-300 flex border-t p-4">
						<Icon icon="material-symbols:attach-money-rounded" class="size-6" />
						<p class="ml-4">{event.details.cost}</p>
					</div>
					{#if event.registrations || true}
						<a
							class="border-base-300 bg-accent hover:bg-secondary text-accent-content hover:text-secondary-content col-span-2 flex border-t p-4 transition"
							href={event.registrations || '#'}
							target="_blank"
						>
							<p class="font-semibold">Register Now</p>
							<Icon icon="material-symbols:arrow-right-alt-rounded" class="size-6" />
						</a>
					{/if}
				</div>
			</div>
		</div>
		<div class="flex items-center justify-center">
			<img src="/art/raccoon-hero.png" alt="" class="max-w-sm" />
		</div>
	</div>
</div>
