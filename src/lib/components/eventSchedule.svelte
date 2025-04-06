<script lang="ts">
	import type { Collections } from '$lib/server/.directus/generated/client';
	let { event }: { event: Collections.Events } = $props();
</script>

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
