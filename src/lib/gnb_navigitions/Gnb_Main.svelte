<script>
	import { page } from '$app/stores';
	import HomeIcon from '../images/baby_groot.svg';
	import GithubIcon from '../images/git_spider.svg';
	let url = '';
</script>

<nav>
	<div class="corner" class:active={$page.url.pathname === '/'}>
		<a href="/">
			<img src={HomeIcon} alt="GitHub lab" title="GitHub lab Home" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li class:active={$page.url.pathname === '/lab/infotech'}>
				<a href="/lab/infotech">InfoTech</a>
			</li>
			<li class:active={$page.url.pathname === '/lab/engineering'}>
				<a href="/lab/engineering">Engineering</a>
			</li>
			<li class:active={$page.url.pathname === '/lab/scific'}>
				<a href="/lab/scific">SciFic</a>
			</li>
			<li class:active={$page.url.pathname === '/lab/language'}>
				<a href="/lab/language">Language</a>
			</li>
			<li class:active={$page.url.pathname === '/lab/cosmos'}>
				<a href="/lab/cosmos">Cosmos</a>
			</li>
			<li class:active={$page.url.pathname === '/lab/etc'}>
				<a href="/lab/etc">etC</a>
			</li>
			<!--
			  {#each blog as {id, name}, i}
			  <li class:active={$page.url.pathname === {name}}>
				<Link to={id} href={name}>{id}</Link>
			  </li>
			  {/each}
      -->
		</ul>

		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<a href="https://github.com/ls2life">
			<img src={GithubIcon} alt="GitHub" title="GitHub" />
		</a>
	</div>
</nav>

<style>
	.corner img {
		width: 2.5em;
		height: 2.5em;
	}

	nav {
		display: flex;
		/* --background: rgba(180, 180, 180, 0.7); */
		--background: rgba(252, 252, 252, 0.7);
		justify-content: space-between;
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		/* border: 1px solid darkslategray; */
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	a {
		color: var(--color-theme-1);
		text-decoration: inherit;
	}
	a:hover {
		text-decoration: underline;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}
</style>
