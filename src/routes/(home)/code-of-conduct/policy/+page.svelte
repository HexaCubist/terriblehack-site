<script lang="ts">
	import Menu from '$lib/components/menu.svelte';
	import PageFooter from '$lib/components/pageFooter.svelte';
	import PageHeader from '$lib/components/pageHeader.svelte';
	import Icon from '@iconify/svelte';
	import type { PageProps } from './$types';
	import { getLocalEvent } from '$lib/clientUtils.svelte';
	let { data }: PageProps = $props();
</script>

<PageHeader rough>
	<div class="pt-10 pb-20">
		<h1 class="mb-4 text-4xl">
			<span class="font-bold"> Code of Conduct </span>
			- Full Policy
		</h1>
		<a href="/code-of-conduct/" class="btn btn-accent btn-outline">
			<Icon icon="material-symbols:arrow-back-rounded" class="size-6"></Icon>
			Back to overview
		</a>
	</div>
</PageHeader>

<div class="card bg-base-100 container mx-auto -mt-10 shadow-sm">
	<div class="card-body mt-2 lg:mx-10 lg:my-8">
		<div class="prose max-w-full">
			<p>
				The Terrible Hackathon is dedicated to providing a harassment-free experience for everyone,
				regardless of gender, gender identity and expression, sexual orientation, disability,
				physical appearance, body size, race, age or religion. We do not tolerate harassment of
				anyone in any form. Participants or attendees violating these rules may be sanctioned or
				expelled from the venue at the discretion of the organizers.
			</p>
			<h2>Harassment</h2>
			<p>Harassment includes, but is not limited to:</p>
			<ul>
				<li>
					Verbal comments that reinforce social structures of domination related to gender, gender
					identity and expression, sexual orientation, disability, physical appearance, body size,
					race, age or religion
				</li>
				<li>Sexual images in public spaces</li>
				<li>Deliberate intimidation, stalking, or following</li>
				<li>Harassing photography or recording</li>
				<li>Sustained disruption of talks or other events</li>
				<li>Inappropriate physical contact</li>
				<li>Unwelcome sexual attention</li>
				<li>Advocating for, or encouraging, any of the above behaviour</li>
			</ul>
			<h2>Enforcement</h2>
			<p>Participants asked to stop any harassing behaviour are expected to comply immediately.</p>
			<p>
				If a participant engages in harassing behaviour, event organisers retain the right to take
				any actions to keep the event a welcoming environment for all participants. This includes
				warning the offender or expulsion from the event, without refund.
			</p>
			<p>
				Event organisers may take action to redress anything designed to, or with the clear impact
				of, disrupting the event or making the environment hostile for any participants.
			</p>
			<p>
				We expect participants to follow these rules at all event venues and event-related social
				activities. We think people should follow these rules outside event activities too!
			</p>
			<h2>Reporting</h2>
			<p>
				If someone makes you or anyone else feel unsafe or unwelcome, please report it as soon as
				possible. Harassment and other code of conduct violations reduce the value of our events for
				everyone. We want you to be happy at our events. People like you make our events a better
				place.
			</p>
			<h3>Personal Report</h3>
			<p>To make a personal report, please select your location:</p>
			<div class="join join-vertical bg-base-100 w-full max-w-4xl">
				{#each data.events as event, i}
					<div class="collapse-arrow join-item border-base-300 collapse border">
						<input type="radio" name="my-accordion-4" checked={i === getLocalEvent(data.events)} />
						<div class="collapse-title font-semibold">{event.name}</div>
						<div class="collapse-content text-sm">
							{#if event.code_of_conduct_contact_details}
								{@html event.code_of_conduct_contact_details}
							{:else}
								Please contact the international team at <a href="mailto:contact@terriblehack.com"
									>contact@terriblehack.com</a
								> to report any issues.
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
<PageFooter />
