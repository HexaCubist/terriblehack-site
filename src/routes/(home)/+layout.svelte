<script lang="ts">
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	let { children, data } = $props();
	let events = $derived(data.events);

	let drawer_state = $state(false);

	beforeNavigate(() => {
		if (drawer_state) {
			drawer_state = false;
		}
	});
</script>

<div class="drawer">
	<input id="mobile-menu" type="checkbox" class="drawer-toggle" bind:checked={drawer_state} />
	<div class="drawer-content flex flex-col">
		{@render children()}
	</div>
	<div class="drawer-side z-50">
		<label for="mobile-menu" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu bg-base-200 min-h-full w-80 p-4">
			<li><a href="/about">⁉️ About the weekend</a></li>
			<li>
				<details>
					<summary>📍 Locations</summary>
					<ul class="bg-base-100 text-base-content z-10 mt-0! rounded-t-none p-2">
						{#each events as event}
							<li>
								<a href={`/events/${event.slug}`}>{event.name}</a>
							</li>
						{/each}
					</ul>
				</details>
			</li>
			<li>
				<a href="/code-of-conduct">❤️ Code of Conduct</a>
			</li>
			<li><a href="/projects">🤯 Projects</a></li>
		</ul>
	</div>
</div>
