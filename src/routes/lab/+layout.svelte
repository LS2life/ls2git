<script>
	import Header from '$lib/lab/Header.svelte';
	import Navigations from '$lib/lab/Navigitions.svelte';
	import Section from '$lib/lab/Section.svelte';
	import Footer from '$lib/Footer.svelte';
	import Navigitions from '$lib/lab/Navigitions.svelte';
</script>

<!--
		Google font:
	   'Do Hyeon', sans-serif;
	   'East Sea Dokdo', cursive;
	   'Hi Melody', cursive;
	   'Stylish', sans-serif;
	   'Noto Sans KR',sans-serif;
 -->
<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Do+Hyeon&family=East+Sea+Dokdo&family=Hi+Melody&family=Noto+Serif+KR:wght@700&display=Stylish&display=Gothic+A1:100,700=swap"
		rel="stylesheet"
	/>
	<title>Laboratory</title>
</svelte:head>

<div>
	<Header />
	<Navigations />
	<slot><!-- optional fallback --></slot>
	<!--// <Aside /> -->
	<Footer />
</div>
