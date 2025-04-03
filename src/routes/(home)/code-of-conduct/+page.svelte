<script lang="ts">
	import Menu from '$lib/components/menu.svelte';
	import PageFooter from '$lib/components/pageFooter.svelte';
	import PageHeader from '$lib/components/pageHeader.svelte';
	import Icon from '@iconify/svelte';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<PageHeader rough>
	<div class="pt-10 pb-20">
		<h1 class="mb-4 text-4xl">
			<span class="font-bold"> Code of Conduct </span>
			- Overview
		</h1>
		<a href="/code-of-conduct/policy" class="btn btn-accent">
			Read Full Policy
			<Icon icon="material-symbols:read-more-rounded" class="size-6"></Icon>
		</a>
	</div>
</PageHeader>

<div class="card bg-base-100 container mx-auto -mt-10 shadow-sm">
	<div class="card-body mt-2 lg:mx-10 lg:my-8">
		<div class="prose max-w-full">
			<p>
				We want to help you have a good time this weekend, and part of that is making sure that this
				event is a safe space for everyone. You can use the link above to take a look at our full
				code of conduct policy, but it comes down to this:
				<strong>we want <i>everyone</i> to feel welcome, included, and safe</strong>. We’ll be
				trying to do everything we can to make sure only the best of times are had, and part of that
				is making clear the support available to you and the expectations we have during the event.
			</p>
			<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
				<div>
					<h2 class="mt-0">Checklist for your project</h2>
					<div class="list">
						<div class="list-row">
							<div
								class="bg-primary text-primary-content flex size-16 items-center justify-center rounded-full"
							>
								<Icon icon="material-symbols:info-i-rounded" class="size-7" />
							</div>
							<div>
								<h3 class="mt-0">Use Content Warnings</h3>
								<p>
									Content warnings are a great way to quickly let people know that your project
									might have sensitive content. Give people a quick heads up of what to expect when
									talking about or sharing your project! Keep in mind – the full code of conduct
									policy applies to your project too.
								</p>
							</div>
						</div>
						<div class="list-row">
							<div
								class="bg-primary text-primary-content flex size-16 items-center justify-center rounded-full"
							>
								<Icon icon="material-symbols:bomb-rounded" class="ml-1 size-7" />
							</div>
							<div>
								<h3 class="mt-0">Keep things safe!</h3>
								<p>
									Is your project dangerous? Awesome! Let us know so we can help figure out how you
									can make it work. Most of the time, there’ll be a way to make things safe while
									keeping the spirit of your idea going.
								</p>
							</div>
						</div>
						<div class="list-row">
							<div
								class="bg-primary text-primary-content flex size-16 items-center justify-center rounded-full"
							>
								<Icon icon="material-symbols:favorite-rounded" class="size-7" />
							</div>
							<div>
								<h3 class="mt-0">Let us know if you’re not sure</h3>
								<p>
									Is there something about your project which is a little bit far from normal?
									That’s fine, just let us know and we can take a look.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<h2 class="mt-0">What we’re doing</h2>
					<ul>
						<li>
							Ensuring all-gender bathrooms are available and easy to get to from the main floors.
						</li>
						<li>
							Providing a quiet rest space separate from the main room for anyone who wants a break
						</li>
						<li>Encouraging the use of pronoun labels on lanyards</li>
						<li>
							Making our code of conduct easily available, and communicating our expectations for
							the weekend
						</li>
						<li>
							Checking in with teams regularly to help make sure everyone’s working well together
						</li>
					</ul>
					<h2>What you can do</h2>
					<p>
						If you want a space to chill out and take a break, or if something happened and you want
						to check in, let us know as soon as you can &lbbrk;in person by grabbing someone with a
						crew t-shirt or online via Discord, email, or the phone number in our <a
							href="/code-of-conduct/policy/">full policy</a
						>&rbbrk;. We want you to be happy at our events. People like you make our events a
						better place.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<PageFooter />
