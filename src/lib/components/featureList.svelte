<script lang="ts">
	import Icon from '@iconify/svelte';

	interface featureItem {
		icon: string;
		title: string;
		description: string;
	}
	const { title, items }: { title?: string; items: featureItem[] } = $props();
</script>

<section class="container mx-auto px-4 py-12">
	{#if title}
		<h2 class="text-center text-4xl font-bold">{title}</h2>
	{/if}
	<div class="mx-auto my-8 flex w-auto items-center justify-center gap-8">
		{#each items as item}
			<div class="">
				<div
					class="bg-base-content text-base-100 flex h-16 w-16 items-center justify-center rounded-full"
				>
					<Icon icon={item.icon} class="h-8 w-8" />
				</div>
			</div>
			<div class="max-w-prose grow">
				<h3 class="font-bold">{item.title}</h3>
				<p>{item.description}</p>
			</div>
		{/each}
	</div>
</section>
