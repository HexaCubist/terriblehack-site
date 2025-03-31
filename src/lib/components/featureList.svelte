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
	<div class="mx-auto my-8 flex w-auto items-center justify-center gap-8">
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
	</div>
{/each}
