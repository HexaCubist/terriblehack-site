<script lang="ts">
	import { filetoURL, imagePreset } from '$lib/clientUtils.svelte';
	import type { Collections } from '$lib/server/.directus/generated/client';

	let { project }: { project: Collections.Projects } = $props();
	let imgSrc = $derived(filetoURL(project.image as string, imagePreset.thumbnail));
</script>

<div class="card bg-base-100 w-full max-w-96 overflow-clip shadow-sm">
	<a href="/projects/{project.slug}">
		<figure>
			<img src={imgSrc} alt="" class="h-40 w-full object-cover" />
		</figure>
	</a>
	<div class="card-body">
		<h2 class="card-title">
			{project.title}
		</h2>
		<div class="relative w-full">
			<div class="gap-2 pr-2 md:flex md:overflow-y-auto">
				{#each project.tags as tag}
					<span class="badge badge-sm shrink-0">
						{tag}
					</span>
				{/each}
			</div>
			{#if project.tags?.length > 1}
				<div
					class=" absolute top-0 right-0 z-10 hidden h-full w-4 bg-gradient-to-r from-black/0 to-black opacity-5 md:block"
				></div>
			{/if}
		</div>
		<p>{project.subtitle}</p>
		<div class="card-actions justify-end">
			<a href="/projects/{project.slug}" class="btn btn-secondary">View Project</a>
		</div>
	</div>
</div>
