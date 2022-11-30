export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","baby_groot.svg","favicon.png","git_spider.svg","robots.txt"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-a905b889.js","imports":["_app/immutable/start-a905b889.js","_app/immutable/chunks/index-a37d17cb.js","_app/immutable/chunks/singletons-7c4077cc.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js'),
			() => import('./nodes/16.js'),
			() => import('./nodes/17.js'),
			() => import('./nodes/18.js'),
			() => import('./nodes/19.js'),
			() => import('./nodes/20.js'),
			() => import('./nodes/21.js'),
			() => import('./nodes/22.js'),
			() => import('./nodes/23.js'),
			() => import('./nodes/24.js'),
			() => import('./nodes/25.js'),
			() => import('./nodes/26.js'),
			() => import('./nodes/27.js'),
			() => import('./nodes/28.js'),
			() => import('./nodes/29.js'),
			() => import('./nodes/30.js'),
			() => import('./nodes/31.js'),
			() => import('./nodes/32.js'),
			() => import('./nodes/33.js'),
			() => import('./nodes/34.js'),
			() => import('./nodes/35.js'),
			() => import('./nodes/36.js'),
			() => import('./nodes/37.js'),
			() => import('./nodes/38.js'),
			() => import('./nodes/39.js'),
			() => import('./nodes/40.js'),
			() => import('./nodes/41.js'),
			() => import('./nodes/42.js'),
			() => import('./nodes/43.js'),
			() => import('./nodes/44.js'),
			() => import('./nodes/45.js'),
			() => import('./nodes/46.js'),
			() => import('./nodes/47.js'),
			() => import('./nodes/48.js'),
			() => import('./nodes/49.js'),
			() => import('./nodes/50.js'),
			() => import('./nodes/51.js'),
			() => import('./nodes/52.js'),
			() => import('./nodes/53.js'),
			() => import('./nodes/54.js'),
			() => import('./nodes/55.js'),
			() => import('./nodes/56.js'),
			() => import('./nodes/57.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 14 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 15 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/blog/about",
				pattern: /^\/blog\/about\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/blog/contact",
				pattern: /^\/blog\/contact\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/blog/pageinfo",
				pattern: /^\/blog\/pageinfo\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/blog/portfolio",
				pattern: /^\/blog\/portfolio\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/blog/resume",
				pattern: /^\/blog\/resume\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,2,3], errors: [1,,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/lab",
				pattern: /^\/lab\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/lab/cosmos",
				pattern: /^\/lab\/cosmos\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/lab/engineering",
				pattern: /^\/lab\/engineering\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,5], errors: [1,,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/lab/engineering/ml",
				pattern: /^\/lab\/engineering\/ml\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,5], errors: [1,,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/lab/etc",
				pattern: /^\/lab\/etc\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/lab/infotech",
				pattern: /^\/lab\/infotech\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,6], errors: [1,,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/lab/infotech/codename",
				pattern: /^\/lab\/infotech\/codename\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,6,7], errors: [1,,,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/lab/infotech/codename/cpp",
				pattern: /^\/lab\/infotech\/codename\/cpp\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,6,7], errors: [1,,,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/lab/infotech/codename/csharp",
				pattern: /^\/lab\/infotech\/codename\/csharp\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,6,7], errors: [1,,,,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/lab/infotech/codename/css3",
				pattern: /^\/lab\/infotech\/codename\/css3\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,6,7], errors: [1,,,,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/lab/infotech/codename/html5",
				pattern: /^\/lab\/infotech\/codename\/html5\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,6,7], errors: [1,,,,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/lab/infotech/codename/javascript",
				pattern: /^\/lab\/infotech\/codename\/javascript\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,6,7], errors: [1,,,,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/lab/infotech/codename/java",
				pattern: /^\/lab\/infotech\/codename\/java\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,6,7], errors: [1,,,,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/lab/infotech/codename/markdown",
				pattern: /^\/lab\/infotech\/codename\/markdown\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,6,7], errors: [1,,,,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/lab/infotech/codename/python",
				pattern: /^\/lab\/infotech\/codename\/python\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,6,7], errors: [1,,,,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/lab/infotech/dbms",
				pattern: /^\/lab\/infotech\/dbms\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,6,8], errors: [1,,,,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/lab/infotech/dbms/mysql",
				pattern: /^\/lab\/infotech\/dbms\/mysql\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,6,8], errors: [1,,,,], leaf: 38 },
				endpoint: null
			},
			{
				id: "/lab/infotech/dbms/oracle",
				pattern: /^\/lab\/infotech\/dbms\/oracle\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,6,8], errors: [1,,,,], leaf: 39 },
				endpoint: null
			},
			{
				id: "/lab/infotech/framework",
				pattern: /^\/lab\/infotech\/framework\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,6,9], errors: [1,,,,], leaf: 40 },
				endpoint: null
			},
			{
				id: "/lab/infotech/framework/springboot",
				pattern: /^\/lab\/infotech\/framework\/springboot\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,6,9], errors: [1,,,,], leaf: 41 },
				endpoint: null
			},
			{
				id: "/lab/infotech/framework/svelte",
				pattern: /^\/lab\/infotech\/framework\/svelte\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,6,9], errors: [1,,,,], leaf: 42 },
				endpoint: null
			},
			{
				id: "/lab/infotech/os",
				pattern: /^\/lab\/infotech\/os\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,6,10], errors: [1,,,,], leaf: 43 },
				endpoint: null
			},
			{
				id: "/lab/infotech/os/ubuntu",
				pattern: /^\/lab\/infotech\/os\/ubuntu\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,6,10], errors: [1,,,,], leaf: 44 },
				endpoint: null
			},
			{
				id: "/lab/infotech/os/windows",
				pattern: /^\/lab\/infotech\/os\/windows\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,6,10], errors: [1,,,,], leaf: 45 },
				endpoint: null
			},
			{
				id: "/lab/infotech/tool",
				pattern: /^\/lab\/infotech\/tool\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,6,11], errors: [1,,,,], leaf: 46 },
				endpoint: null
			},
			{
				id: "/lab/infotech/tool/eclipse",
				pattern: /^\/lab\/infotech\/tool\/eclipse\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,6,11], errors: [1,,,,], leaf: 47 },
				endpoint: null
			},
			{
				id: "/lab/infotech/tool/jetbrains",
				pattern: /^\/lab\/infotech\/tool\/jetbrains\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,6,11], errors: [1,,,,], leaf: 48 },
				endpoint: null
			},
			{
				id: "/lab/infotech/tool/vim",
				pattern: /^\/lab\/infotech\/tool\/vim\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,6,11], errors: [1,,,,], leaf: 49 },
				endpoint: null
			},
			{
				id: "/lab/infotech/tool/vscode",
				pattern: /^\/lab\/infotech\/tool\/vscode\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,6,11], errors: [1,,,,], leaf: 50 },
				endpoint: null
			},
			{
				id: "/lab/infotech/vc",
				pattern: /^\/lab\/infotech\/vc\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,6,12], errors: [1,,,,], leaf: 51 },
				endpoint: null
			},
			{
				id: "/lab/infotech/vc/github",
				pattern: /^\/lab\/infotech\/vc\/github\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,6,12], errors: [1,,,,], leaf: 52 },
				endpoint: null
			},
			{
				id: "/lab/language",
				pattern: /^\/lab\/language\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,13], errors: [1,,,], leaf: 53 },
				endpoint: null
			},
			{
				id: "/lab/language/deutsch",
				pattern: /^\/lab\/language\/deutsch\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,13], errors: [1,,,], leaf: 54 },
				endpoint: null
			},
			{
				id: "/lab/language/english",
				pattern: /^\/lab\/language\/english\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,13], errors: [1,,,], leaf: 55 },
				endpoint: null
			},
			{
				id: "/lab/language/espanol",
				pattern: /^\/lab\/language\/espanol\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4,13], errors: [1,,,], leaf: 56 },
				endpoint: null
			},
			{
				id: "/lab/scific",
				pattern: /^\/lab\/scific\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,4], errors: [1,,], leaf: 57 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
