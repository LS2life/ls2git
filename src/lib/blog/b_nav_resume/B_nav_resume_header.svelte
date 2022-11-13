<script>
    import src from '$lib/images/ca.png'
</script>

<div class="header">
    <div class="history">
        <hr class="historyline">
    </div>
    <span class="namecard">
        <span class="nametext">
            <hr>
            <h1 class="korname">이 상 수</h1>
            <h2 class="engname">Lee Sang Su</h2>
        </span>
        <img {src} alt="pic ture">
    </span>
</div>

<style>
    div.history {
        padding: 0 3rem;
        display: flex;
    }
    div.header {
        display: flex;
    }
    .historyline {
        text-align: left;
        margin-left: 0;
        display: inline-block;
        width: 0.5px;
        height: 200px;
    }
    span.namecard {
        display: flex;
        justify-content: space-between;
        margin: 0 100px;
        align-items: center;
    }
    h2 {
        text-align: right;
    }
    img {
        width: 10rem;

        text-align: left;
        margin-left: 25rem;
    } 

    
</style>