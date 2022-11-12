<script>
    import { fly } from 'svelte/transition';
</script>

<div in:fly="{{delay:300}}">
<h1>Hiestory</h1>
<h2>&#123; null &#125;</h2>
<div>
    <span>
        <!--  Left hiestory -->

    </span>
    <hr>
    <span>
        <!-- Right heestory -->

    </span>
</div>

</div>
<style>
	h1 {
		font-size: 3em;
		font-weight: 900;
		font-family: 'Stylish', sans-serif;
	}

    hr {
        display: inline;

    }

</style>