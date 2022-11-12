<script>
    import src from '$lib/images/ca.png'
</script>

<span>
    <hr class="inline">
</span>
<span>
    <span class="">
        <hr/>
        <h1 class="korname">이 상 수</h1>
        <h2 class="engname">Lee Sang Su</h2>
    </span>
    <span>
        <img {src} alt="pic ture">
    </span>
</span>



<style>
    span,h1,h2 {

        border: 1px solid red;
    }
    span {
        display:flex; 
    }

    .inline{
        display: inline;
        width: 1px
    }
    h2{
        text-align: right;
        line-height: 1rem;
    }
    h1 {
        text-align: center;

    }
    img {
        height: 10rem;
    }
    
</style>