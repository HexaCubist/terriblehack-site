<script lang="ts">
	import Logo from '$lib/assets/logo.svelte';
	import Icon from '@iconify/svelte';

	const { backdrop = false }: { backdrop?: boolean } = $props();
</script>

<div class="navbar-wrapper relative">
	{#if backdrop}
		<div
			class="backdrop-gradient pointer-events-none absolute top-0 left-0 -z-10 h-[150%] w-full bg-linear-to-b from-[#0004] to-[#0000]"
		></div>
	{/if}
	<div class="navbar relative container mx-auto px-4" class:text-white={backdrop}>
		<div class="navbar-start">
			<a
				class="btn btn-link text-x h-14 px-0"
				class:text-white={backdrop}
				class:text-base-content={!backdrop}
				href="/"
			>
				<Logo />
			</a>
		</div>
		<div class="navbar-center"></div>
		<div class="navbar-end hidden sm:inline-flex">
			<ul class="menu menu-horizontal max-w-96 justify-end px-1">
				<li><a href="/about">⁉️ About the weekend</a></li>
				<li>
					<details>
						<summary>📍 Locations</summary>
						<ul class="bg-base-100 text-base-content z-10 mt-0! rounded-t-none p-2">
							<li><a href="/events/akl">Tāmaki Makaurau</a></li>
							<li><a href="/events/syd">Sydney</a></li>
							<li><a href="/events/lon">London</a></li>
						</ul>
					</details>
				</li>
				<li><a href="/">❤️ Code of Conduct</a></li>
				<li><a href="/">🤯 Projects</a></li>
			</ul>
		</div>
		<div class="navbar-end inline-flex sm:hidden">
			<button class="btn btn-square btn-ghost hover:bg-base-100">
				<Icon icon="material-symbols:menu-rounded" class="h-6 w-6" />
			</button>
		</div>
	</div>
</div>
