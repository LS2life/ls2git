<script>
	import BHeader from '$lib/blog/BHeader.svelte';
	import BNav from '../../lib/blog/BNav.svelte';
	import Footer from '../../lib/Footer.svelte';
</script>

<div class="app">
	<BNav />
	<BHeader />
	<main>
		<slot><!-- optional fallback --></slot>
	</main>
	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	div {
		background-color: white;
	}
	main {
		border: 1px solid red;
		flex: 1;
		padding: 1rem;
		width: 100%;
		max-width: 70rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
