<script lang="ts">
	import { canShowDate } from '$lib/clientUtils.svelte';
	import type { Schema } from '$lib/server/.directus/generated/client';

	let {
		loc,
		color = 'secondary'
	}: { loc?: Schema['events'][0]; color?: 'primary' | 'secondary' | 'accent' } = $props();
</script>

{#if loc}
	{#if canShowDate(loc)}
		<a
			href={loc.register_link}
			class="btn btn-lg uppercase"
			class:btn-primary={color === 'primary'}
			class:btn-secondary={color === 'secondary'}
			class:btn-accent={color === 'accent'}>Register!!!</a
		>
	{:else}
		<a
			href="/events/{loc.slug}"
			class="btn btn-lg uppercase"
			class:btn-primary={color === 'primary'}
			class:btn-secondary={color === 'secondary'}
			class:btn-accent={color === 'accent'}>{loc.location} Event</a
		>
	{/if}
{:else}
	<a
		href="/events"
		class="btn btn-lg uppercase"
		class:btn-primary={color === 'primary'}
		class:btn-secondary={color === 'secondary'}
		class:btn-accent={color === 'accent'}>Register!!!</a
	>
{/if}
