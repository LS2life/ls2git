<script>
	import { blur } from 'svelte/transition';
	import BHeader from '$lib/blog/BHeader.svelte';
	import BNav from '../../lib/blog/BNav.svelte';
	import Footer from '../../lib/Footer.svelte';
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Do+Hyeon&family=East+Sea+Dokdo&family=Hi+Melody&family=Noto+Serif+KR:wght@700&display=Stylish&display=Gothic+A1:100,700=swap"
		rel="stylesheet"
	/>
	<title>Blog</title>
</svelte:head>
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
		flex: 1;
		padding: 1rem;
		width: 100%;
		max-width: 70rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
