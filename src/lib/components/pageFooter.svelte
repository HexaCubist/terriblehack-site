<script lang="ts">
	let { inverted = false }: { inverted?: boolean } = $props();
</script>

<footer class="mt-10 grid grid-cols-12 p-8 text-xs">
	<div
		class="order-1 col-span-12 flex flex-col items-center justify-center gap-4 sm:col-span-6 sm:items-start md:order-none md:col-span-3"
	>
		<p>Map Credit: © Mapbox, © OpenStreetMap</p>

		<p class="uppercase">Copyright © {new Date().getFullYear()} Terrible Ideas Hackathon®</p>
	</div>

	<div
		class="order-3 col-span-12 flex grow items-center justify-center md:order-none md:col-span-6"
	>
		<img
			src="/art/love-note.png"
			class="mt-6 h-6 opacity-80"
			class:invert={inverted}
			alt="Be awesome (a cute love heart is illustrated)"
		/>
	</div>
	<div
		class="order-2 col-span-12 flex flex-col items-center justify-center sm:col-span-6 sm:items-end md:order-none md:col-span-3"
	>
		<!-- Policy menu -->
		<ul class="menu menu-horizontal">
			<li><a href="/fine-print">Event T&amp;Cs</a></li>
			<li><a href="/privacy-policy">Privacy Policy</a></li>
		</ul>
	</div>
</footer>
