<script lang="ts">
	import type { EventLocation } from '$lib/models';
	import { DateTime } from 'luxon';

	let { event }: { event: EventLocation } = $props();
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

{start.toFormat('LLLL')}
{addOrdinal(start.day)} -
{#if start.month === end.month}
	{addOrdinal(end.day)}
{:else}
	{end.toFormat('LLLL')}
	{addOrdinal(end.day)}
{/if}
