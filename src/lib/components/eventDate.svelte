<script lang="ts">
	import type { Schema } from '$lib/server/.directus/generated/client';
	import { DateTime } from 'luxon';

	let { event }: { event: Schema['events'][0] } = $props();
	const start = event.start && DateTime.fromJSDate(new Date(event.start));
	const end = event.end && DateTime.fromJSDate(new Date(event.end));

	// Function to add ordinal suffix to day number
	// https://stackoverflow.com/a/76930885
	function addOrdinal(number: number) {
		const suffixes = ['th', 'st', 'nd', 'rd'];
		const v = number % 100;
		return number + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
	}
</script>

{#if start && end}
	{start.toFormat('LLLL')}
	{addOrdinal(start.day)} -
	{#if start.month === end.month}
		{addOrdinal(end.day)}
	{:else}
		{end.toFormat('LLLL')}
		{addOrdinal(end.day)}
	{/if}
{/if}
