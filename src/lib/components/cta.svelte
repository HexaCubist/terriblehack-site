<script lang="ts">
	import type { EventLocation } from '$lib/models';

	let {
		loc,
		color = 'secondary'
	}: { loc?: EventLocation; color?: 'primary' | 'secondary' | 'accent' } = $props();
</script>

{#if loc}
	{#if loc.registrations}
		<a
			href={loc.registrations}
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
