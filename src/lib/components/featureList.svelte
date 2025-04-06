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
		class="relative mx-auto my-4 flex w-auto flex-row justify-center gap-4 sm:my-8 sm:items-center sm:gap-8"
	>
		<div
			class="sm:bg-base-content sm:text-base-100 absolute left-0 flex h-full items-start justify-center rounded-xl p-2 sm:relative sm:size-16 sm:items-center sm:rounded-full"
		>
			<Icon icon={item.icon} class="size-4 sm:size-8" />
		</div>
		<div class="ml-11 max-w-prose grow sm:ml-0">
			<h3 class="font-bold">{item.title}</h3>
			<p class="text-sm sm:text-base">{item.description}</p>
		</div>
	</div>
{/each}
