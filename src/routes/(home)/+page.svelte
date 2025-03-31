<script lang="ts">
	import Logo from '$lib/assets/logo.svelte';
	import FeatureList from '$lib/components/featureList.svelte';
	import PageHeader from '$lib/components/pageHeader.svelte';
	import Icon from '@iconify/svelte';

	interface Project {
		title: string;
		subtitle: string;
		description: string;
		image: string;
		slug: string;
	}
	interface extra_links {
		title: string;
		url: string;
	}

	const year = new Date().getFullYear();

	const featured_projects: Project[] = Array(10)
		.fill(undefined)
		.map((_, i) => ({
			title: `Indispensable (${i + 1})`,
			subtitle: 'It’s a gacha machine for your medication.',
			description:
				'Created using paper mache, cardboard, and a lot of love. This project was a hit at the 2024 event, showing just how far we can take the intersection between gambling and healthcare.',
			image: '/art/hero.png',
			slug: 'indispensable'
		}));

	const extra_links = [
		{
			title: 'Kiwijam',
			url: 'https://kiwijam.org/'
		},
		{
			title: 'UoA Maker Club',
			url: 'https://makeuoa.nz/'
		},
		{
			title: 'ICRS',
			url: 'https://www.imperialcollegeunion.org/activities/a-to-z/robotics'
		},
		{
			title: 'Questionable Research Labs',
			url: 'https://questionable.org.nz/'
		},
		{ title: '48Hours NZ', url: 'https://www.48hours.co.nz/' },
		{ title: 'Rat World', url: 'https://www.ratworldmag.com/' }
	];
</script>

<PageHeader>
	<div class="max-w-prose py-4 sm:pb-20">
		<h2 class="mb-2 text-2xl font-black sm:text-4xl">
			A weekend adventure in creating strange things✨
		</h2>
		<p class="max-w-sm sm:text-lg">
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

<div class="mask-rough brand-gradient relative z-10 -my-4">
	<section class="container mx-auto px-4 py-8 sm:py-12">
		<h2 class="pb-2 text-center text-4xl font-bold sm:pb-0">In 46 Hours, You Will:</h2>
		<FeatureList
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
		<div class="flex flex-wrap items-center justify-center gap-4">
			<a href="/about" class="btn btn-lg btn-accent">More about the event</a>
			<a href="/register" class="btn btn-lg btn-secondary uppercase">Register!!!</a>
		</div>
	</section>
</div>
<section class="relative z-0 bg-black px-4 pt-16 pb-px">
	<div
		class="bg-overlay absolute inset-0"
		style:background-image={`linear-gradient(to bottom, rgba(10,5,27, 0) 100px, rgba(10,5,27, 1)
		400px), url('/art/alumni.webp')`}
		style:background-position="center, top"
		style:background-size="cover, auto 600px"
		style:background-repeat="repeat-x"
	></div>
	<h2
		class="relative z-10 mx-auto max-w-prose pb-8 text-center text-4xl font-bold text-balance text-white drop-shadow"
	>
		Our Terrible Ideas alumni:
	</h2>
	<div
		class="bg-base-100 text-base-content rounded-box relative z-10 mx-auto mb-8 grid w-full max-w-4xl grid-cols-1 gap-8 rounded p-8 sm:gap-4"
	>
		{#each featured_projects.slice(0, 3) as project, i}
			<div class="project grid grid-cols-6 gap-4 md:gap-8">
				<div
					class="order-1 col-span-6 flex flex-col justify-center sm:col-span-4 md:col-span-4"
					class:md:order-0={i % 2 === 0}
				>
					<h2 class="-mt-2 max-w-prose text-xl leading-none font-bold">{project.title}</h2>
					<p class="mb-1 max-w-prose text-lg italic">{project.subtitle}</p>
					<p class="max-w-prose text-sm" class:pr-20={i % 2 === 1}>
						{project.description}
					</p>
				</div>
				<a href="/projects/{project.slug}" class="col-span-6 sm:col-span-2 md:col-span-2">
					<img
						src={project.image}
						alt={project.title}
						class=" aspect-video w-full rounded-xl object-cover shadow sm:aspect-square"
					/>
				</a>
			</div>
		{/each}
		<img
			src="/art/raccoon.webp"
			alt="Raccoon"
			class="raccoon ease-bounce absolute -right-10 bottom-0 hidden size-60 translate-1/6 object-contain transition duration-300 hover:rotate-12 hover:duration-500 md:block"
		/>
	</div>
	<div
		class="w-[calc(100% + 2rem)] relative z-0 -mx-4 -mt-[500px] -mb-[320px] h-[800px] bg-repeat-x sm:-mb-[250px]"
		style:background-size="auto 800px"
		style:background-image="url('/art/dark-footer-v3.webp')"
	></div>
	<!-- Extra project gallery -->
	<div class="relative mx-auto hidden w-full max-w-6xl text-center sm:block md:px-4">
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-4 lg:gap-8">
			{#each featured_projects.slice(3, 3 + 4) as project, i}
				<a
					class="project group relative aspect-square w-full overflow-clip rounded-xl text-white shadow"
					href="/projects/{project.slug}"
				>
					<img
						src={project.image}
						alt={project.title}
						class="absolute inset-0 block size-full object-cover"
					/>
					<div
						class="absolute inset-0 h-[200%] bg-gradient-to-t from-black/80 from-50% to-black/0 transition duration-300 group-hover:-translate-y-20"
					></div>
					<div class="absolute bottom-0 left-0 flex w-full items-center justify-between px-4 py-3">
						<h3 class="text-sm font-semibold transition-transform group-hover:underline lg:text-xl">
							{project.title}
						</h3>
						<span
							><Icon
								icon="material-symbols:chevron-right-rounded"
								class="inline h-6 w-6 opacity-0 transition duration-300 group-hover:opacity-100"
							/></span
						>
					</div>
				</a>
			{/each}
		</div>
		<a href="/projects" class="btn btn-lg btn-accent btn-outline mt-8"> More Projects</a>
	</div>
	<div class="container mx-auto">
		<footer
			class="bg-base-100 text-base-content rounded-box brand-gradient relative z-10 my-8 rounded p-8 pb-6 text-center"
		>
			<div class="h-14 text-left">
				<Logo />
			</div>
			<h2 class="text-2xl font-semibold">Other Cool Events & Communities</h2>
			<ul class="mt-4 flex flex-wrap items-center justify-center gap-4">
				{#each extra_links as link, i}
					<li>
						<a href={link.url} class="font-semibold text-balance underline">{link.title}</a>
					</li>
					{#if i < extra_links.length - 1}
						<span>/</span>
					{/if}
				{/each}
			</ul>
			<div class="mt-6 grid w-full grid-cols-3 text-xs uppercase">
				<div class="col-span-1 text-left">
					<p class="mt-4">Copyright &copy; {year} - Terrible Ideas&reg;</p>
				</div>
				<div class="col-span-1"></div>
				<div class="col-span-1 flex items-end justify-end gap-4 text-right font-semibold">
					<a href="/fine-print/">Event T&Cs</a>
					&middot;
					<a href="/privacy-policy/">Privacy Policy</a>
				</div>
			</div>
		</footer>
	</div>
</section>
