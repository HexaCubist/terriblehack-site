<script lang="ts">
	import FeatureList from '$lib/components/featureList.svelte';
	import PageHeader from '$lib/components/pageHeader.svelte';
	import Icon from '@iconify/svelte';

	interface Project {
		title: string;
		subtitle: string;
		description: string;
		image: string;
	}

	const featured_projects: Project[] = Array(3).fill({
		title: 'Indispensable',
		subtitle: 'It’s a gacha machine for your medication.',
		description:
			'Created using paper mache, cardboard, and a lot of love. This project was a hit at the 2024 event, showing just how far we can take the intersection between gambling and healthcare.',
		image: '/art/alumni.webp'
	});
</script>

<PageHeader>
	<div class="max-w-prose py-4 pb-20">
		<h2 class="mb-2 text-4xl font-black">A weekend adventure in creating strange things✨</h2>
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
	<FeatureList
		title="In 46 Hours, You Will:"
		items={[
			{
				icon: 'material-symbols:lightbulb-outline-rounded',
				title: 'Come up with a terrible idea',
				description: `Your goal should be to enter this weekend with an empty head. Bring friends, but not ideas! Participants will spend the first night meeting new people, building a team, and deciding what mad scientist invention they want to make over the next two days.`
			},
			{
				icon: 'fa6-solid:explosion',
				title: 'MAKE THAT IDEA',
				description:
					'We’ll provide the tools, expert help, and a room full of clever people: you make your worst nightmare. You’ll spend most of the weekend making: We’ll get in your way as little as possible.'
			},
			{
				icon: 'carbon:group-presentation',
				title: 'Present your creation!',
				description:
					'At the end of the weekend, we leave time for you to share what you’ve made. Wrap everything up neatly and explore a world of terrible creations!'
			}
		]}
	/>
	<div class="flex items-center justify-center gap-4">
		<a href="/about" class="btn btn-lg btn-accent">More about the event</a>
		<a href="/register" class="btn btn-lg btn-secondary uppercase">Register!!!</a>
	</div>
</section>
<section class="mask-rough relative overflow-clip bg-black px-4 py-16">
	<img
		src="/art/alumni.webp"
		alt="Past Terrible Ideas Alumni"
		class="absolute top-0 left-0 h-auto w-full"
	/>
	<div
		class="bg-overlay absolute inset-0 bg-gradient-to-b from-black/0 from-[200px] to-black/100 to-[400px]"
	></div>
	<h2
		class="mx-auto max-w-prose pb-8 text-center text-4xl font-bold text-balance text-white drop-shadow"
	>
		Our Terrible Ideas alumni:
	</h2>
	<div
		class="bg-base-100 text-base-content rounded-box relative mx-auto grid w-full max-w-4xl grid-cols-1 gap-4 rounded p-8"
	>
		{#each featured_projects as project, i}
			<div class="project grid grid-cols-6 gap-4">
				<div
					class="col-span-6 flex flex-col justify-center sm:col-span-3"
					class:order-1={i % 3 === 2}
					class:md:col-span-4={i % 3 !== 1}
					class:md:col-span-2={i % 3 === 1}
				>
					<h2 class="-mt-2 max-w-prose text-xl font-bold">{project.title}</h2>
					<p class="mb-2 max-w-prose text-lg italic">{project.subtitle}</p>
					<p class="max-w-prose" class:md:hidden={i % 3 === 1} class:pr-20={i % 3 === 2}>
						{project.description}
					</p>
				</div>
				<img
					src={project.image}
					alt={project.title}
					class="col-span-6 aspect-square w-full rounded-xl object-cover shadow sm:col-span-3 md:col-span-2"
				/>
				{#if i % 3 === 1}
					<div class="col-span-2 hidden max-w-prose flex-col justify-center md:flex">
						<p>{project.description}</p>
					</div>
				{/if}
			</div>
		{/each}
		<img
			src="/art/raccoon.webp"
			alt="Raccoon"
			class="raccoon absolute -right-10 bottom-0 size-60 translate-1/6 object-contain"
		/>
	</div>
</section>
