<script>
	import { page } from '$app/stores';
</script>

<!--
<div class="corner" class:active={$page.url.pathname ==='/'}>
  <a href="/">
    <img src={ Home } alt="GitHub Blog" title="GitHub Blog Home"/>
  </a>
</div>
-->
<header>
	<spen class:active={$page.url.pathname === '/lab' ? 'page' : undefined}>
		<a href="/lab">
			<h1>A|∀ & T|ㄱ & i|! & m|m & E|∃</h1>
		</a>
		<h2>취미로그 TechLog 한글 Eng 서체 'hi melody'</h2>
	</spen>
</header>

<style>
	header {
		background: url('$lib/images/LabHeaderImg.png') no-repeat center / cover;
	}
	a {
		color: var(--color-text);
		text-decoration: inherit;
	}

	header {
		border-bottom: 1px solid darkslategray;
		display: flex;
		line-height: 40px;
		text-align: center;
	}

	spen {
		width: 100%;
	}

	h1 {
		color: rgb(0, 0, 0);
		font-family: 'East Sea Dokdo', cursive;
		font-size: 10vmin;
		line-height: 1.1;
	}
	h2 {
		color:white;
		border: 1px soild greenyellow;
		backdrop-filter: sepia(0.9) brightness(0.5);
		/* font-family: 'Do Hyeon', sans-serif; */
		/* font-family: 'East Sea Dokdo', cursive; */
		/* font-family: 'Hi Melody', cursive; */
		font-family: 'Stylish', sans-serif;
		/* font-family: 'Noto Sans KR',sans-serif; */
		font-size: 2.5vmin;
		place-items: center;
	}
</style>
