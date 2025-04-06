<script lang="ts">
	import EventCards from '$lib/components/eventCards.svelte';
	import PageFooter from '$lib/components/pageFooter.svelte';

	import PageHeader from '$lib/components/pageHeader.svelte';
</script>

<PageHeader bg="aurora" minHeight="screen">
	<div class="flex h-full grow flex-col items-center justify-center pt-10 pb-20">
		<h1 class="mb-4 text-center text-4xl font-bold">Choose an event:</h1>
		<EventCards />
	</div>
	<PageFooter inverted />
</PageHeader>
