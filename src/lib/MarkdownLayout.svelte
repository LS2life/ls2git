<script>
	import { transition_in } from 'svelte/internal';
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

<div class="post" in:fade={{ delay: 500 }} out:fade>
	<h1>{title}</h1>
	<p><time>{update}</time></p>
	<categorie>{categories}</categorie>
	<hr />
	<slot />
</div>

<style>
	.post {
		margin-left: 5%;
		margin-right: 5%;
	}

	h1 {
		font-size: 2.5em;
		margin-left: 3%;
		font-weight: bold;
		font-family: 'Noto Serif KR', serif;
		/* font-family: 'Do Hyeon', sans-serif; */
		/* font-family: 'East Sea Dokdo', cursive; */
		/* font-family: 'Hi Melody', cursive; */
		/* font-family: 'Stylish', sans-serif; */
	}
	div,
	p {
		font-size: 1.2em;
		line-height: 1;
		text-align: left;
		/* font-family: 'Hi-Melody'; */
		/* font-family: 'Do Hyeon', sans-serif; */
		/* font-family: 'East Sea Dokdo', cursive; */
		/* font-family: 'Hi Melody', cursive; */
		font-family: 'Stylish', sans-serif;
	}
</style>
