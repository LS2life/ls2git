<script>
    import Signposts from '$lib/images/signposts_icon.svg'
    import Blog from '$lib/images/blog_icon.svg'
    import Lab from '$lib/images/erlenmeyer_flask_icon.svg'
	import { fly } from 'svelte/transition';
</script>

<div in:fly="{{delay:300}}">
    <h1>PAGE INFO</h1>
    <hr>
    <div>
        <div>
            <img src={Signposts} alt="Signposts"/>
            이정표
        </div>
        <div>
            <img src={Blog} alt="Blog" />
            블로그
        </div>
        <div>
            <img src={Lab} alt="Laboratory"/>
            테스트 페이지
        </div>
        <div>
            <p>Page Information : 페이지 버튼 안내.  </p>
            <p>Resume: 이력 </p>
            <p>Portfolio: 포트폴리오</p>
            <p>Contact: 연락처</p>
            <p>About: 페이지 개선에 대한 고려사항 메모</p>
            <p></p>

        </div>
    </div>
</div>

<style>
    div {
        text-align: left;
    }
    img {
        height: 2em;
    }
</style>