<script lang="ts">
	import PageHeader from '$lib/components/pageHeader.svelte';
	import Icon from '@iconify/svelte';
</script>

<PageHeader>
	<div class="max-w-prose py-4 pb-20">
		<h1 class="mb-2 text-4xl font-black">A weekend adventure in creating strange things✨</h1>
		<p class="max-w-sm text-lg">
			Whether it’s a funeral piñata, freemium kettle, or milk aroma diffuser, spend a weekend with
			your friends making your worst ideas a reality!
		</p>
		<div class="mt-4 flex gap-2">
			<a
				href="/events/akl"
				class="btn btn-outline btn-[white] bg-gradient-to-tr from-white/20 to-white/40 bg-fixed mix-blend-plus-lighter"
				>Tāmaki Makaurau</a
			>
			<a
				href="/events/syd"
				class="btn btn-outline btn-[white] bg-gradient-to-tr from-white/20 to-white/40 bg-fixed mix-blend-plus-lighter"
				>Sydney</a
			>
			<a
				href="/events/lon"
				class="btn btn-outline btn-[white] bg-gradient-to-tr from-white/20 to-white/40 bg-fixed mix-blend-plus-lighter"
				>London</a
			>
		</div>
	</div>
</PageHeader>
<section class="container mx-auto px-4 py-12">
	<h2 class="text-center text-4xl font-bold">In 46 Hours, You Will:</h2>
	<div class="mx-auto my-8 flex w-auto items-center justify-center gap-8">
		<div class="">
			<div
				class="bg-base-content text-base-100 flex h-16 w-16 items-center justify-center rounded-full"
			>
				<Icon icon="material-symbols:lightbulb-outline-rounded" class="h-8 w-8" />
			</div>
		</div>
		<div class="max-w-prose grow">
			<h3 class="font-bold">Come up with a terrible idea</h3>
			<p>
				Your goal should be to enter this weekend with an empty head. Bring friends, but not ideas!
				Participants will spend the first night meeting new people, building a team, and deciding
				what mad scientist invention they want to make over the next two days.
			</p>
		</div>
	</div>
</section>
