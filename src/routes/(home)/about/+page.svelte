<script lang="ts">
	import ShapeDivider from '$lib/assets/shape-divider.svelte';
	import PageHeader from '$lib/components/pageHeader.svelte';
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
	<div class="container mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
		<div class="prose">
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
		<div class="prose">
			<h2>What can I make?</h2>
			<p>
				<strong>Anything</strong>! bring your arts, tech, science, engineering, business, law,
				creative, med, and education/social work friends along, and make the most terrible shit you
				can imagine.
			</p>
			<p>
				More specifically, this hackathon is about finally going out and making all the bad ideas
				you’ve had or heard. It’s a celebration of failure, creativity, and stupid decisions. Still
				not sure what that means? Keep scrolling for some examples.
			</p>
		</div>
	</div>
</div>

<ShapeDivider width={100} rotate inverted color="#033620" />
<div class="bg-forest text-forest-content relative -mt-px p-4">
	<div class="container mx-auto mt-10">
		<div class="w-full text-center">
			<img
				src="/art/worth-reading.png"
				class="mx-auto w-full max-w-md invert lg:max-w-lg"
				alt="Note: Worth Reading!"
			/>
			<h2 class="text-4xl font-bold lg:text-5xl">More About the Weekend</h2>
			<div class="mx-auto my-6 h-1 w-42 bg-white"></div>
		</div>
		<div class="prose mx-auto grid max-w-5xl text-white md:grid-cols-2">
			<div>
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
			</div>
		</div>
	</div>
</div>
