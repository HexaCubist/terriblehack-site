<script lang="ts">
	import Icon from '@iconify/svelte';
	import { canShowDate, filetoURL, getLocalEvent, imagePreset } from '$lib/clientUtils.svelte';
	import EventDate from '$lib/components/eventDate.svelte';
	import { page } from '$app/state';

	let { events } = page.data;
	let mainEvent = $derived(getLocalEvent(events));

	let { bg }: { bg?: boolean } = $props();
</script>

<div class="event-cards mask-rough relative w-full" class:has-bg={bg}>
	{#if bg}
		<div class="absolute inset-0 -z-10 bg-gray-950">
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
			<!-- svelte-ignore a11y_distracting_elements -->
		</div>
	{/if}
	<div class=" card-row text-base-content grid gap-4 p-8 transform-3d md:grid-cols-3">
		{#each events as event, i}
			{@const isMain = i === mainEvent}
			<div
				class:glow={isMain}
				class="card event-card-ticket card-sm card-side bg-base-100 @container mx-auto w-full max-w-sm overflow-clip rounded-lg shadow-sm outline-2 outline-offset-0"
				style:outline-color={event.color}
			>
				<figure class="relative shrink-0">
					<img
						src={filetoURL(event.Event_Image, imagePreset.tiny)}
						alt=""
						class="h-full w-14 object-cover"
					/>
					<div
						class="absolute inset-0 opacity-60 mix-blend-hard-light"
						style:background={event.color}
					></div>
					<div class="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
					<Icon
						icon="material-symbols:local-activity-outline-rounded"
						class="absolute size-10 text-white"
					></Icon>
				</figure>
				<div class="card-body gap-0 p-0">
					<div class="grow p-4">
						<h2 class="card-title text-xl font-bold">{event.name}</h2>
						<p class="text-sm font-semibold">
							{#if canShowDate(event)}
								<EventDate {event} />
							{:else}
								Dates TBA
							{/if}
						</p>
						<p>{event.location}</p>
					</div>
					<div class="card-actions grid w-full gap-0 @[35ch]:grid-cols-2">
						{#if event.status === 'register'}
							<a
								class="border-base-300 bg-accent hover:bg-secondary text-accent-content hover:text-secondary-content flex border-t p-2 px-3 transition lg:border-r"
								href={event.register_link}
								target="_blank"
							>
								<p class="font-semibold">Register Now</p>
								<Icon icon="material-symbols:arrow-right-alt-rounded" class="size-4" />
							</a>
						{:else}
							<div
								class="border-base-300 bg-base-200 text-accent-content flex cursor-not-allowed border-t p-2 px-3 transition lg:border-r"
							>
								<p class="font-semibold">Register Soon</p>
								<Icon icon="material-symbols:lock-clock-outline-rounded" class="size-4" />
							</div>
						{/if}

						<a
							class="border-base-300 hover:bg-secondary text-accent-content hover:text-secondary-content flex border-t p-2 px-3 transition"
							href="/events/{event.slug}"
						>
							<p class="font-semibold">Learn More</p>
							<Icon icon="material-symbols:arrow-right-alt-rounded" class="size-4" />
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
	{#if bg}
		<div class="marquee pointer-events-none -mt-10 flex w-full overflow-hidden whitespace-nowrap">
			{#each [0, 1] as i}
				<p
					aria-hidden="true"
					class="marquee-item rotate-z-[30] p-4 text-3xl font-black text-white uppercase"
				>
					HACK TRY BUTCHER SLASH CRAFT FIX DECONSTRUCT CAUSE CLIMATE CHANGE CROCHET BREAK LASER CUT
					REPAIR ROLEPLAY DESTROY IDEATE STOP CLIMATE CHANGE TATTOO EXAMPLE TEXT
				</p>
			{/each}
		</div>
	{/if}
</div>

<style lang="postcss">
	.card-row {
		perspective: 1000px;
		perspective-origin: bottom;
	}
	.marquee {
		transform: perspective(30px) rotateX(1deg);
		mix-blend-mode: soft-light;
		& .marquee-item {
			animation-name: marquee-content;
			animation-iteration-count: infinite;
			animation-timing-function: linear;
			animation-duration: 200s;
		}
	}
	@media screen and (min-width: 1025px) {
		.event-card-ticket {
			transform: rotateX(5deg) translateZ(-50px);
			transform-style: preserve-3d;
			transition:
				transform 0.3s ease,
				box-shadow 0.3s ease;
			box-shadow:
				10px 20px 20px 0 #00000099,
				0 10px 20px 0px #00000059;
			&:hover {
				transform: rotateX(0deg);
				transform-style: preserve-3d;
				z-index: 10;
			}
		}
	}
	@keyframes marquee-content {
		/* Element one fully ON screen at left-edge of container. */
		from {
			transform: translateX(0%);
		}
		/* Element one fully OFF screen (just beyond left-ledge of container). */
		to {
			transform: translateX(-100%);
		}
	}
</style>
