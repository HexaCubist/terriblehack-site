<script lang="ts">
	import ShapeDivider from '$lib/assets/shape-divider.svelte';
	import PageHeader from '$lib/components/pageHeader.svelte';
	import Icon from '@iconify/svelte';
	import type { PageProps } from './$types';
	import PageFooter from '$lib/components/pageFooter.svelte';

	let { data }: PageProps = $props();
	let { events } = data;
</script>

<PageHeader prop="kea" rough>
	<div class="container mx-auto">
		<div class="mx-auto max-w-4xl md:my-8 lg:my-16">
			<h1 class="mb-8 text-center text-4xl font-bold md:text-5xl">About the Weekend</h1>
			<p class="text-2xl md:text-3xl">
				Creating for the sake of creating is a beautiful, wonderful thing: We love it so much, we
				made a weekend just for it. Experience: <strong>mess</strong>, <strong>disaster</strong>,
				<strong>joy</strong>, and <strong>community</strong>.
			</p>
			<div class="flex gap-4">
				<a href="#overview" class="btn btn-secondary btn-outline mt-8">Overview</a>
				<a href="#schedule" class="btn btn-secondary btn-outline mt-8">Frequently Asked Questions</a
				>
				<a href="#how-it-started" class="btn btn-secondary btn-outline mt-8">How it started</a>
				<a href="#local-details" class="btn btn-secondary btn-outline mt-8">Local details</a>
			</div>
		</div>
	</div>
</PageHeader>
<div class="p-4 md:my-16 lg:my-24 xl:my-20">
	<div class="container mx-auto max-w-3xl gap-8 md:columns-2">
		<div class="prose break-inside-avoid-column">
			<h2>What is a hackathon?</h2>
			<p>
				It’s a chance to make things! Hackathons are all about coming together to design and build
				creative solutions to interesting problems in a super short amount of time. In this one,
				you’ll have 46 hours (taking breaks to sleep and chill) to go all the way from idea to
				whatever you can hack together in time.
			</p>
			<h2>How are teams formed?</h2>
			<p>
				If you’d like to work in a team (we <i>strongly</i> recommend this – it’s much more fun) then
				we’ll help you find one on the Friday night. You’re welcome to bring your own team or friends
				who you’d like to work with, but otherwise don’t stress – we’ve got you covered.
			</p>
		</div>
		<div class="prose break-inside-avoid-column">
			<h2>What can I make?</h2>
			<p>
				<b>Anything</b>! bring your arts, tech, science, engineering, business, law, creative, med,
				and education/social work friends along, and make the most terrible shit you can imagine.
			</p>
			<p>
				More specifically, this hackathon is about finally going out and making all the bad ideas
				you’ve had or heard. It’s a celebration of failure, creativity, and stupid decisions. Still
				not sure what that means? Keep scrolling for some examples.
			</p>
		</div>
		<div class="flex h-[10em] w-full grow items-center justify-center p-4">
			<a class="btn btn-primary w-full sm:w-auto" href="/events">
				<p class="font-semibold">Local Details</p>
				<Icon icon="material-symbols:arrow-right-alt-rounded" class="size-6" />
			</a>
		</div>
	</div>
</div>

<ShapeDivider width={100} height={3} rotate inverted flip color="#033620" />
<div class="bg-forest text-forest-content relative -mt-px p-4 pb-8">
	<div class="container mx-auto mt-10">
		<div class="w-full text-center">
			<img
				src="/art/worth-reading.png"
				class="mx-auto w-full max-w-xs invert lg:max-w-sm"
				alt="Note: Worth Reading!"
			/>
			<h2 class="text-4xl font-bold lg:text-4xl">More About the Weekend</h2>
			<div class="mx-auto my-6 h-1 w-42 bg-white"></div>
		</div>
		<div class="prose mx-auto gap-8 gap-y-10 text-white md:max-w-5xl md:columns-2">
			<div class="break-inside-avoid-column">
				<p class="mb-2 text-2xl font-semibold">
					I don’t have much experience making things, or I’m not sure I’ll be the right fit for this
					event. Should I still come?
				</p>
				<p>
					Absolutely – bring your friends too (but make sure they register)! Whether you’re gluing
					cardboard together, developing algorithms, or writing a 5,000-word Shrek fanfiction, we’d
					love to have you on board. If this is your first time and you’ve got no idea what to do,
					we’ll have an awesome group of volunteers and a great community who will help you have a
					good time. Terrible Ideas Hackathon event are open to as many people as possible, whether
					you’re a student, alumni, member of the public, or otherwise. Check out the pages for
					specific events for more info on who’s invited!
				</p>
				<div class="mx-auto my-6 h-0.5 w-42 bg-white/40"></div>
			</div>
			<div class="break-inside-avoid-column">
				<p class="mb-2 text-2xl font-semibold">What should I try and get out of the event?</p>
				<p>
					<b
						>We hope first and foremost that you’ll have a chance to make some friends, learn new
						things, and have a bit of fun.</b
					> While Terrible Hack is a celebration of bad ideas, in order to make things you’ll likely
					have to think about what makes an idea “good” or “bad” and learn a bit on how to practically
					apply your skills to solve problems.
				</p>
				<p>
					While other hackathons are often competitive, Terrible Hack is not – we won’t have any
					(serious) prizes. This is intentional, and we hope that it’ll give you the opportunity to
					be a bit more ambitious in your choices of projects than you might be normally. In the
					end, whether you finish your project or not it’s only a few dozen hours – two days!
					There’s a lot to gain from trying something crazy and not much to lose by failing, so take
					this opportunity to take chances, make mistakes, and get messy!
				</p>
				<div class="mx-auto my-6 h-0.5 w-42 bg-white/40 md:hidden"></div>
			</div>
			<div class="break-inside-avoid-column">
				<p class="mb-2 text-2xl font-semibold">What should I expect from the weekend?</p>
				<p>
					We’re excited to say that for over 50% of you, this will be your first time participating
					in a hackathon. This is awesome, and if you’re one of the many who’ve decided to give this
					a shot, go you! In the simplest sense, a hackathon is a challenge or event where people
					come together to make things or solve problems. While traditionally these events are
					focused on technology, the Terrible Ideas Hackathon is broadly about <b
						>making anything, be it through code, paintbrush, craft knife, written word, video,
						music or otherwise.</b
					>
				</p>
				<p>
					Through the event, we’ll help people pair up into teams (these can be any size, but we
					recommend 3-10). From there, you’ll pick something that you want to make – we’ll have lots
					of ideas swimming around, and you’re welcome to bring your own. For the Terrible Ideas
					Hackathon, we’ll also have a few “Diversifiers” – suggestions and themes that you can use
					if you want a place to start.
				</p>
				<div class="mx-auto my-6 h-0.5 w-42 bg-white/40"></div>
			</div>
			<div class="break-inside-avoid-column">
				<p class="mb-2 text-2xl font-semibold">
					Will we be working in teams? Is there a max team size?
				</p>
				<p>
					Generally we strongly encourage everyone to work in teams during the weekend! You’re
					welcome to bring friends and make a team with them, but <b
						>many people will be forming teams for the first time on Friday night and we’ll help you
						do this.</b
					>
				</p>
				<p>
					<strike>There is no maximum or minimum team size (anywhere from 1 to 100 is fine).</strike
					> After one team had 30 people (good on them), we’ve decided it’d be better to have MORE terrible
					ideas to enjoy so ten is the upper limit. Smaller teams can move quicker and take less time
					planning, but large teams (with good organisation) can achieve more.
				</p>
			</div>
		</div>
	</div>
</div>
<div class="alumni-img relative">
	<img src="/about/alumni-2024.webp" class="h-auto w-full" alt="" />
</div>

<figure class="mx-auto my-8 mb-12 max-w-prose p-4">
	<img
		src="/about/raccoon-icon.png"
		alt="Cartoon illustration of a raccoon"
		class="mx-auto w-full max-w-40 rounded-full"
	/>
	<figcaption>
		Say hello to Riley the Racoon! The official dumpster-diving, chaotic, do-it-yourself mascot for
		this event. Artist:
		<a class="italic underline" target="_blank" href="https://www.instagram.com/tashi_rd/"
			>Tashi Donnelly</a
		>
	</figcaption>
</figure>
<div class="container mx-auto mb-20">
	<div class="mx-4">
		<h2 class="text-4xl font-bold">How it all started</h2>
		<p class="prose max-w-full">
			In 2020, <a href="https://walt.online/">Walter Lim</a> had a chat with
			<a href="https://zac.nz/">Zac M-W</a>
			at a bar in Auckland and spawned the idea of making a New Zealand version of the
			<a href="https://stupidhackathon.com/"
				>New York Stupid Shit No One Needs &amp; Terrible Ideas Hackathon</a
			>. We got together and created the first ever New Zealand Terrible Ideas Hackathon! We changed
			a few things, and kicked it off with no idea of what to expect…
		</p>
		<div class="card sm:card-side bg-base-100 mx-auto my-8 max-w-3xl shadow-sm">
			<figure class="max-w-sm">
				<img src="/about/tattoo.webp" alt="" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">One of the Projects:</h2>
				<b>Strapping a tattoo gun to a blind robot</b>
				<i>CNC Tattoo Machine – by the Not Tattooists </i>
				<p>
					It kind of is just what the title suggests. What happens when you put a tattoo gun on a
					robot arm and try to convince it to tattoo people? Not good things, apparently.
				</p>
				<div class="card-actions justify-end">
					<a class="btn btn-primary" href="/projects" target="_blank">
						<Icon icon="material-symbols:favorite-outline" class="size-4" />
						View more projects
					</a>
				</div>
			</div>
		</div>
		<p>
			As soon as one of our friends decided to strap their tattoo gun to a 3D Printer, we knew we
			would be having a <b><i>great</i></b> weekend.
		</p>
		<h2 class="mt-8 text-4xl font-bold">Where it’s at now</h2>
		<p class="prose max-w-full">
			These days, the Terrible Ideas event is now being run in Auckland, Sydney, and London! You’d
			think this would take a lot of international coordination, but the truth is that past
			organisers have moved countries and it was just by chance we’re able to bring this crazy
			weekend to more folk.
		</p>
	</div>
</div>

<PageFooter />

<style lang="postcss">
	.alumni-img {
		clip-path: polygon(15% 6%, 85% 6%, 100% 0, 100% 100%, 20% 95%, 0 100%, 0 0);
		top: -3vw;
		margin-bottom: -4vw;
		&:after {
			content: ' ';
			background: linear-gradient(178deg, #04362082 8%, #04362000 40%);
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			position: absolute;
		}
	}
</style>
