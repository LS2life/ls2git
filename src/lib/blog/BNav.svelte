<script>
	import { page } from '$app/stores';
	import Signposts from '$lib/images/signposts_icon.svg';
	import BlogIcon from '$lib/images/blog_icon.png';
	import Laboratory from '$lib/images/erlenmeyer_flask_icon.svg';
</script>

<nav>
	<div>
		<a class:active={$page.url.pathname === '/'} href="/">
			<img class="signposts_icon" src={Signposts} alt="Signposts" title="GitHub Page Signposts" />
		</a>
		<a class:active={$page.url.pathname === '/blog'} href="/blog">
			<img class="blog_icon" src={BlogIcon} alt="Blog Home" title="Blog Home" />
		</a>
		<a class:active={$page.url.pathname === '/lab'} href="/lab">
			<img class="lab_icon" src={Laboratory} alt="Laboratory" title="Laboratory" />
		</a>
	</div>
	<ul>
		<li class:active={$page.url.pathname === '/blog/pageinfo'}>
			<a href="/blog/pageinfo">PageInfo</a>
		</li>
		<li class:active={$page.url.pathname === '/blog/resume'}>
			<a href="/blog/resume">Resume</a>
		</li>
		<li class:active={$page.url.pathname === '/blog/portfolio'}>
			<a href="/blog/portfolio">Portfolio</a>
		</li>
		<li class:active={$page.url.pathname === '/blog/contact'}>
			<a href="/blog/contact">Contact</a>
		</li>
		<li class:active={$page.url.pathname === '/blog/about'}>
			<a href="/blog/about">About</a>
		</li>
	</ul>
</nav>

<style>
	nav {
		position: sticky;
		top: 0px;
		z-index: 1;
		display: flex;
		justify-content: space-between;
		background-image: linear-gradient(
			-90deg,
			rgb(0, 0, 0) 0%,
			rgba(0, 0, 0, 0.8) 30%,
			rgba(0, 0, 0, 0.7) 40%,
			rgba(0, 0, 0, 0.5) 50%,
			rgb(255, 255, 255) 70%
		);
	}
	div,
	ul {
		display: flex;
		align-items: center;
		list-style: none;
		/* padding: 0.5em; */
	}
	ul {
		margin-right: 5%;
	}
	div {
		margin-left: 2%;
	}

	.signposts_icon,
	.lab_icon {
		height: 2.5em;
		padding: 0.5em;
	}
	.blog_icon {
		height: 1.8em;
		padding: 1em;
	}
	li {
		padding: 1em;
	}
	a {
		font-size: 1.2em;
		color: #ffffff;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
</style>
