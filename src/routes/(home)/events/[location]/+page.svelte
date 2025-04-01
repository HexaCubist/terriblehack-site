<script lang="ts">
	import { page } from '$app/state';
	import EventDate from '$lib/components/eventDate.svelte';
	import Menu from '$lib/components/menu.svelte';
	import { canShowDate } from '$lib/directusClient';
	import type { Schema } from '$lib/server/.directus/generated/client';
	import Icon from '@iconify/svelte';
	import { DateTime } from 'luxon';
	const { event }: { event: Schema['events'][0] } = page.data as any;
	const start = event.start && DateTime.fromJSDate(new Date(event.start));
	const end = event.end && DateTime.fromJSDate(new Date(event.end));
</script>

<img
	src="/events/map-akl.webp"
	alt=""
	class="pointer-events-none absolute top-0 max-h-screen w-full object-cover object-top"
	style:mask-image="linear-gradient(to bottom, #fff, #ffffffd4, #fff0)"
/>
<div class="relative z-10">
	<Menu />
	<div class="container mx-auto grid w-screen max-w-7xl gap-4 px-4 md:grid-cols-2">
		<div
			class="card bg-base-100 overflow-clip border-t-3 shadow-sm"
			style:border-top-color={event.color}
		>
			<div class="card-body">
				<h2 class="card-title my-0 text-5xl leading-none">{event.name}</h2>
				<p class="text-2xl">
					<EventDate {event} />
				</p>
				<hr />
				<div class="prose text-base">
					{@html event.about}
				</div>
				<div class="card-actions -mx-6 mt-2 -mb-6 grid grid-cols-2 gap-0 text-base">
					<div class="border-base-300 flex border-t border-r p-4">
						<Icon icon="material-symbols:map-search-outline" class="size-6" />
						<p class="ml-4">{event.location}</p>
					</div>
					<div class="border-base-300 flex border-t p-4">
						<Icon icon="material-symbols:attach-money-rounded" class="size-6" />
						<p class="ml-4">{event.cost}</p>
					</div>
					{#if canShowDate(event) && event.register_link}
						<a
							class="border-base-300 bg-accent hover:bg-secondary text-accent-content hover:text-secondary-content col-span-2 flex border-t p-4 transition"
							href={event.register_link}
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
	<div class="my-10 text-center lg:my-20">
		<h3 class="md: mx-auto max-w-prose px-20 text-center text-3xl font-bold text-balance">
			Join us in {event.location} for a celebration of Terrible Ideas!
		</h3>
		{#if canShowDate(event) && event.register_link}
			<a href={event.register_link} class="btn btn-lg btn-primary mx-auto mt-4">
				<Icon icon="material-symbols:location-on-outline-rounded" class="size-4" />
				Register - {event.name}
			</a>
		{/if}
	</div>
	<div class="mx-4">
		<div class="card bg-base-100 container mx-auto overflow-clip shadow-sm xl:max-w-3xl">
			<div class="card-body">
				<div class="card-title">Schedule</div>
				<div class="prose mx-auto max-w-full text-base">
					{@html event.schedule_prefix}
					<div class="flex flex-col gap-4">
						{#each event.schedule_accordion as day}
							<div class="collapse-arrow bg-base-100 border-base-300 collapse border">
								<input type="radio" name="schedule-accordion" />
								<div class="collapse-title font-semibold">{day.header}</div>
								<div class="collapse-content prose text-sm">
									{@html day.body}
								</div>
							</div>
						{/each}
					</div>
					{@html event.schedule_suffix}
				</div>
			</div>
		</div>
	</div>
</div>
