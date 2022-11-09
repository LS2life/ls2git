import { c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import { F as Footer } from "../../chunks/Footer.js";
const styles = "";
const Vitelogo = "/_app/immutable/assets/vite-4a748afd.svg";
const Sveltelogo = "/_app/immutable/assets/svelte-a39f39b7.svg";
const GitHublogo = "/_app/immutable/assets/github_logo-65f4dc13.svg";
const Gitlablogo = "/_app/immutable/assets/lab_icon2-ebb10913.svg";
const Bloglogo = "/_app/immutable/assets/blog_icon_b-8ff9d151.svg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-11itmbi{display:flex;flex-direction:column;min-height:100vh}main.svelte-11itmbi{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:64rem;margin:0 auto;box-sizing:border-box}a.svelte-11itmbi{color:var(--color-theme-1);text-decoration:none}a.svelte-11itmbi:hover{text-decoration:underline}h1.svelte-11itmbi,p.svelte-11itmbi{font-weight:400}h1.svelte-11itmbi{font-size:2rem;text-align:center}p.svelte-11itmbi{line-height:1.5}.config.svelte-11itmbi{border:2px solid darkgray;border-radius:3em;margin:30px}.logo.vite.svelte-11itmbi,.logo.svelte.svelte-11itmbi{height:6em;padding:2em;will-change:filter}.logo.blog.svelte-11itmbi,.logo.github.svelte-11itmbi,.logo.gitlab.svelte-11itmbi{height:5em;padding:1em}.logo.svelte-11itmbi:hover{filter:drop-shadow(0 0 2em #646cffaa)}.logo.svelte.svelte-11itmbi:hover{filter:drop-shadow(0 0 2em #ff3e00aa)}.logo.github.svelte-11itmbi:hover{filter:drop-shadow(0 0 2em #ff0000aa)}.logo.gitlab.svelte-11itmbi:hover{filter:drop-shadow(0 0 2em #00c3ffed)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `

<div class="${"app svelte-11itmbi"}"><main class="${"svelte-11itmbi"}"><div class="${"config svelte-11itmbi"}"><a href="${"https://vitejs.dev"}" class="${"svelte-11itmbi"}"><img${add_attribute("src", Vitelogo, 0)} class="${"logo vite svelte-11itmbi"}" alt="${"Vite Logo"}" title="${"Vite"}"></a>
			<a href="${"https://svelte.dev"}" class="${"svelte-11itmbi"}"><img${add_attribute("src", Sveltelogo, 0)} class="${"logo svelte svelte-11itmbi"}" alt="${"Svelte Logo"}" title="${"Svelte"}"></a>
			<h3>Made by</h3>
			<h1 class="${"svelte-11itmbi"}">Vite + Svelte</h1></div>
		<div><a href="${"/blog"}" class="${["svelte-11itmbi", $page.url.pathname === "/blog" ? "active" : ""].join(" ").trim()}"><img class="${"logo blog svelte-11itmbi"}"${add_attribute("src", Bloglogo, 0)} alt="${"blog"}" title="${"Normal Blog"}"></a>
			<a href="${"https://github.com/LS2life"}" class="${"svelte-11itmbi"}"><img class="${"logo github svelte-11itmbi"}"${add_attribute("src", GitHublogo, 0)} alt="${"GitHub Logo"}" title="${"GitHub"}"></a>
			<a href="${"/lab"}" class="${["svelte-11itmbi", $page.url.pathname === "/lab" ? "active" : ""].join(" ").trim()}"><img class="${"logo gitlab svelte-11itmbi"}"${add_attribute("src", Gitlablogo, 0)} alt="${"GitHub Lab Logo"}" title="${"Laboratory"}"></a></div>

		<div><p class="${"svelte-11itmbi"}">Check out
				<a href="${"https://github.com/LS2life"}" alt="${"Github"}" class="${"svelte-11itmbi"}">GitHub</a>,
				<a href="${"https://ls2life.github.io/ls2git"}" alt="${"Labrotory"}" title="${"GitHub Lab href"}" class="${"svelte-11itmbi"}">My Lap</a>! and I love you 3000 !
			</p></div></main>

	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Page as default
};
