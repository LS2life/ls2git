<script>
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
</script>

<nav in:fly={{ delay: 300 }}>
	<ul>
		<li class:active={$page.url.pathname === '/lab/infotech/os/ubuntu'}>
			<a href="/lab/infotech/os/ubuntu">Ubuntu</a>
		</li>
		<li class:active={$page.url.pathname === '/lab/infotech/os/windows'}>
			<a href="/lab/infotech/os/windows">Windows</a>
		</li>
	</ul>
</nav>

<style>
	nav {
		position: sticky;
		top: 4rem;
		display: flex;
		align-items: center;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	ul {
		border: 1px solid darkolivegreen;

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
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}
</style>
