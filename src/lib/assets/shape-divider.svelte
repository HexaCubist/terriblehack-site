<script lang="ts">
	let {
		color,
		height = 30,
		width = 100,
		inverted = false,
		rotate = false
	}: {
		color?: string;
		height?: number;
		width?: number;
		inverted: boolean;
		rotate: boolean;
	} = $props();
</script>

{#if inverted}
	<div
		style:--width={width}
		style:--height={height}
		class="shape-divider"
		class:rotate-180={rotate}
	>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
			<path d="M 1200 0 L 0 0 L 0 114.72 L 600 1 L 1200 114.72 z" style:fill={color}></path>
		</svg>
	</div>
{:else}
	<div
		style:--width={width}
		style:--height={height}
		class="shape-divider"
		class:rotate-180={rotate}
	>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
			<path d="M1200 0L0 0 598.97 114.72 1200 0z" style:fill={color}></path>
		</svg>
	</div>
{/if}

<style>
	.shape-divider {
		position: relative;
		width: 100%;
		overflow: hidden;
	}

	svg {
		position: relative;
		display: block;
		width: calc(var(--width) * 1.3%);
		height: calc(var(--height) * 1px);
	}
</style>
