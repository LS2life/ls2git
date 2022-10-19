import path from 'path';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatexSvelte from 'rehype-katex-svelte';
import rehypeSlug from 'rehype-slug';
import remarkAbbr from 'remark-abbr';
import remarkMath from 'remark-math';
import relativeImages from 'mdsvex-relative-images';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
	extensions: ['.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [remarkMath, remarkAbbr, relativeImages],
	rehypePlugins: [rehypeKatexSvelte, rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
	layout: {
		mdx: path.join(__dirname, './src/lib/MarkdownLayout.svelte')
	}
};

export default config;
