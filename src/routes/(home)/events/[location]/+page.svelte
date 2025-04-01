<script lang="ts">
	import { page } from '$app/state';
	import EventDate from '$lib/components/eventDate.svelte';
	import Menu from '$lib/components/menu.svelte';
	import type { EventLocation } from '$lib/models';
	import Icon from '@iconify/svelte';
	import { json } from '@sveltejs/kit';
	import { DateTime } from 'luxon';
	const { event } = page.data;
	const start = DateTime.fromJSDate(event.start);
	const end = DateTime.fromJSDate(event.end);
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
		<div class="card bg-base-100 border-t-3 shadow-sm" style:border-top-color={event.color}>
			<div class="card-body">
				<h2 class="card-title my-0 text-5xl leading-none">{event.name}</h2>
				<p class="text-2xl">
					<EventDate {event} />
				</p>
				<hr />
				<div class="prose flex flex-col gap-2 text-base">
					{@html event.details.blurb}
				</div>
				<div class="card-actions -mx-6 mt-2 -mb-6 grid grid-cols-2 gap-0 text-base">
					<div class="border-base-300 flex border-t border-r p-4">
						<Icon icon="material-symbols:map-search-outline" class="size-6" />
						<p class="ml-4">{event.location}</p>
					</div>
					<div class="border-base-300 flex border-t p-4">
						<Icon icon="material-symbols:attach-money-rounded" class="size-6" />
						<p class="ml-4">{event.details.cost}</p>
					</div>
					{#if event.registrations}
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
	<div class="my-10 text-center">
		<h3 class="mx-auto max-w-prose text-center text-3xl font-bold text-balance">
			Join us in {event.location} for a celebration of Terrible Ideas!
		</h3>
		{#if event.register || true}
			<a href={event.register} class="btn btn-lg btn-primary mx-auto mt-4"> Register Now </a>
		{/if}
	</div>
	<div class="card bg-base-100 overflow-clip shadow-sm">
		<div class="card-title">
			<h2 class="text-3xl">Event Details</h2>
		</div>
	</div>
</div>
