<script lang="ts">
	import PageFooter from '$lib/components/pageFooter.svelte';

	import PageHeader from '$lib/components/pageHeader.svelte';
</script>

<PageHeader rough>
	<div class="pt-10 pb-20">
		<h1 class="mb-4 text-4xl font-bold">
			<span class="font-bold"> Privacy Policy </span>
		</h1>
	</div>
</PageHeader>

<div class="card bg-base-100 container mx-auto -mt-10 shadow-sm">
	<div class="card-body mt-2 lg:mx-10 lg:my-8">
		<div class="prose max-w-full">
			<h2>Who we are</h2>

			<p>Our website address is: https://terriblehack.com/</p>

			<h2>What personal data we collect and why we collect it</h2>

			<h3>Embedded content from other websites</h3>

			<p>
				Articles on this site may include embedded content (e.g. videos, images, articles, etc.).
				Embedded content from other websites behaves in the exact same way as if the visitor has
				visited the other website.
			</p>

			<p>
				These websites may collect data about you, use cookies, embed additional third-party
				tracking, and monitor your interaction with that embedded content, including tracking your
				interaction with the embedded content if you have an account and are logged in to that
				website.
			</p>

			<h3>Analytics</h3>

			<p>
				We use Google Analytics to collect basic information about viewers and how they engage with
				our website. You can opt out of this anonymised data collection by using an adblocker (we
				recommend Ublock Origin) or installing the <a
					href="https://tools.google.com/dlpage/gaoptout">opt-out extension</a
				>. If you’re using an adblocker, you’re welcome to whitelist this website! We don’t have any
				advertisements, so the only thing you’re blocking is us knowing you’re looking.
			</p>

			<h2>Who we share your data with &amp; how long we retain it.</h2>

			<p>
				Your usage of this website is shared with Google Analytics and other third parties to help
				us keep track of site usage. We self-host this website using <a href="https://svelte.dev/"
					>SvelteKit</a
				>
				on a <a href="https://www.docker.com/">Docker</a> container with a
				<a href="https://directus.io/">Directus</a> headless CMS to manage content. If you upload a project,
				you will do so through a self-hosted instance of Directus. CloudFront + Cloudflare are used at
				different points to optimise the page load times around the world.
			</p>

			<p>
				If you register for this event, your information is shared with <a
					href="https://lilregie.com/">Lil Regie</a
				>, a New Zealand based ticket management company. You can
				<a href="https://lilregie.com/terms-and-conditions/website-users"
					>read their T&amp;C’s here</a
				>, their <a href="https://lilregie.com/privacy-policy">Privacy Policy here</a>, and their
				<a href="https://lilregie.com/security-policy">Security Policy here</a>. We use Stripe for
				payments where applicable.
			</p>

			<p>
				We use a self-hosted version of <a href="https://ghost.org/">Ghost</a> as our newsletter
				platform, and all participants are registered as a “Terrible Ideas Member” on that site. You
				can manage your email preferences and opt in or out here:
				<a href="https://updates.terriblehack.com/#/portal/account" class="__mPS2id"
					>https://updates.terriblehack.com/#/portal/account</a
				>. We retain your details even after unsubscribing in case we need to confirm attendance
				information, but you can get in touch via
				<a href="mailto:hello@terriblehack.nz">hello@terriblehack.nz</a> if you wish to opt out.
			</p>

			<h2>What rights you have over your data</h2>

			<p>
				If you have an account on this site, or your team has submitted a project, you can request
				to receive an exported file of the personal data we hold about you, including any data you
				have provided to us. You can also request that we erase any personal data we hold about you.
				This does not include any data we are obliged to keep for administrative, legal, or security
				purposes.
			</p>
		</div>
	</div>
</div>

<PageFooter />
