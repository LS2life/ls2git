<script>
	import { fly } from 'svelte/transition';
</script>

<h1 in:fly="{{delay:300}}">RESUME</h1>

<style>
	h1 {
		font-size: 3em;
		font-weight: 900;
		/* font-family: 'Noto Serif KR', serif; */
		/* font-family: 'Do Hyeon', sans-serif; */
		/* font-family: 'East Sea Dokdo', cursive; */
		/* font-family: 'Hi Melody', cursive; */
		font-family: 'Stylish', sans-serif;
	}
</style>
