<script>
	import { fade } from 'svelte/transition';

	export let title = '';
	export let summary = '';
	export let update = '';
	export let categories = '' + '';
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Do+Hyeon&family=East+Sea+Dokdo&family=Hi+Melody&family=Noto+Serif+KR:wght@700&display=Stylish&display=Gothic+A1:100,700=swap"
		rel="stylesheet"
	/>
	<title>{title} | ProgrammingTIL</title>
	<meta name="description" content={summary} />
</svelte:head>

<div class="post" in:fade={{ delay: 300 }}>
	<h1>{title}</h1>
	<p><time>{update}</time></p>
	<categorie>{categories}</categorie>
	<hr />
	<main>
		<slot />
	</main>
</div>

<style>
	h1 {
		font-size: 2.5em;
		margin-left: 3%;
		font-weight: bold;
		font-family: 'Noto Serif KR', serif;
	}
	div,
	categorie,
	p {
		/* border: 1px solid red; */

		margin: 0 3%;
		font-size: 1.2rem;
		line-height: 1.2;
		text-align: left;
		font-family: 'Stylish', sans-serif;
	}
	main {
		padding: 0 1rem;
		text-decoration: none;
	}
</style>
