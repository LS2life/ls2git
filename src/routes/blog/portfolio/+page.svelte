<script>
    import { fly } from 'svelte/transition';
</script>

<div in:fly="{{delay:300}}">
    <h1>Portfolio</h1>
    <hr class="hline">
    <div class="내용">
        <h2><a href="https://ls2life.github.io/ls2git">&#123; Laboratory Page &#125;</a></h2>
        <hr>
        <h2><a href="https://ls2life.github.io/ls2git/blog">&#123; Resume Blog &#125;</a></h2>
        <hr>
        <a href="https://github.com/LS2life"><h2>&#123; GitHub &#125;</h2></a>
        <hr>
    </div>
</div>

<style>
    h1 {
        text-transform: uppercase;
    }
    a {
        color: black;
        list-style: none;
        text-decoration: none;
    
    }
    .hline {
        display: flex;
        width: 14rem;
    }
    .내용 {
        margin-top: 3rem;
    }

    hr {
        display: inline;
    }

</style>