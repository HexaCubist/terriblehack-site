<script lang="ts">
	import Icon from '@iconify/svelte';

	interface featureItem {
		icon: string;
		title: string;
		description: string;
	}
	const { items }: { items: featureItem[] } = $props();
</script>

{#each items as item}
	<div
		class="mx-auto my-4 flex w-auto flex-col items-center justify-center gap-4 sm:my-8 sm:flex-row sm:gap-8"
	>
		<div class="">
			<div
				class="bg-base-content text-base-100 flex size-10 items-center justify-center rounded-full sm:size-16"
			>
				<Icon icon={item.icon} class="size-6 sm:size-8" />
			</div>
		</div>
		<div class="max-w-prose grow">
			<h3 class="font-bold">{item.title}</h3>
			<p class="text-sm sm:text-base">{item.description}</p>
		</div>
	</div>
{/each}
