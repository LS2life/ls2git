<script>
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import Footer from '../lib/Footer.svelte';

	import '../styles.css';
	import Vitelogo from '../lib/images/vite.svg';
	import Sveltelogo from '../lib/images/svelte.svg';
	import GitHublogo from '../lib/images/github_logo.svg';
	import Gitlablogo from '../lib/images/lab_icon2.svg';
	import Blog from '../lib/images/blog_icon_b.svg';
</script>

<!--
	* Use Better Commentes

    * 기본 프레임은 Blog, Laboratory로 구분

    ! Blog는 최대한 정상적으로 만들 것 실험적사용 금지.

	? Laboratory는 최대한 실험적 목적을 가질 것. 

    * Page command hotkey를 vim type으로 구성.

	* vue, react 코드 비교.

	Todo : npm 추가 후 실행 할 것.
    ! npm install -save [svelte-routing, marked, svelte-markdown]
-->

<div class="app" transition:fade={{ delay: 500 }}>
	<main>
		<div class="config">
			<a href="https://vitejs.dev" target="_blank">
				<img src={Vitelogo} class="logo vite" alt="Vite Logo" title="Vite" />
			</a>
			<a href="https://svelte.dev" target="_blank">
				<img src={Sveltelogo} class="logo svelte" alt="Svelte Logo" title="Svelte" />
			</a>
			<h3>Made by</h3>
			<h1>Vite + Svelte</h1>
		</div>
		<div>
			<a class:active={$page.url.pathname === '/blog'} href="/blog" target="_blank">
				<img class="logo blog" src={Blog} alt="blog" title="Normal Blog" />
			</a>
			<a href="https://github.com/LS2life" target="_blank">
				<img class="logo github" src={GitHublogo} alt="GitHub Logo" title="GitHub" />
			</a>
			<a class:active={$page.url.pathname === '/lab'} href="/lab">
				<img class="logo gitlab" src={Gitlablogo} alt="GitHub Lab Logo" title="Laboratory" />
			</a>
		</div>

		<div>
			<p>
				Check out
				<a href="https://github.com/sveltejs/kit#readme" target="_blank"> GitHub</a>,
				<a href="https://ls2life.github.io/ls2git/lab" target="_self" title="GitHub Lab href">
					My Lap</a
				>! and I love you 3000 !
			</p>
		</div>
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	a {
		color: var(--color-theme-1);
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}

	h1,
	p {
		font-weight: 400;
	}

	h1 {
		font-size: 2rem;
		text-align: center;
	}

	p {
		line-height: 1.5;
	}

	.config {
		border: 2px solid darkgray;
		border-radius: 3em;
		margin: 30px;
	}
	.logo.vite,
	.logo.svelte {
		height: 6em;
		padding: 2em;
		will-change: filter;
	}

	.logo.blog,
	.logo.github,
	.logo.gitlab {
		height: 5em;
		padding: 1em;
	}

	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}
	.logo.svelte:hover {
		filter: drop-shadow(0 0 2em #ff3e00aa);
	}
	.logo.github:hover {
		filter: drop-shadow(0 0 2em #ff0000aa);
	}
	.logo.gitlab:hover {
		filter: drop-shadow(0 0 2em #00c3ffed);
	}
</style>
