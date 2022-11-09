import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
type RouteParams = {  }
type RouteId = '/';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
type PageParentData = EnsureDefined<LayoutData>;
type LayoutRouteId = RouteId | "/" | "/about" | "/blog" | "/lab" | "/lab/cosmos" | "/lab/engineering" | "/lab/engineering/ml" | "/lab/etc" | "/lab/infotech" | "/lab/infotech/codename" | "/lab/infotech/codename/cpp" | "/lab/infotech/codename/csharp" | "/lab/infotech/codename/css3" | "/lab/infotech/codename/html5" | "/lab/infotech/codename/java" | "/lab/infotech/codename/javascript" | "/lab/infotech/codename/markdown" | "/lab/infotech/codename/python" | "/lab/infotech/dbms" | "/lab/infotech/dbms/MySQL" | "/lab/infotech/dbms/Oracle" | "/lab/infotech/framework" | "/lab/infotech/framework/springboot" | "/lab/infotech/framework/svelte" | "/lab/infotech/os" | "/lab/infotech/os/ubuntu" | "/lab/infotech/os/windows" | "/lab/infotech/vc" | "/lab/infotech/vc/github" | "/lab/language" | "/lab/language/deutsch" | "/lab/language/english" | "/lab/language/espanol" | "/lab/scific" | null
type LayoutParams = RouteParams & {  }
type LayoutParentData = EnsureDefined<{}>;

export type PageServerData = null;
export type PageLoad<OutputData extends OutputDataShape<PageParentData> = OutputDataShape<PageParentData>> = Kit.Load<RouteParams, PageServerData, PageParentData, OutputData, RouteId>;
export type PageLoadEvent = Parameters<PageLoad>[0];
export type PageData = Expand<Omit<PageParentData, keyof PageParentData & EnsureDefined<PageServerData>> & OptionalUnion<EnsureDefined<PageParentData & EnsureDefined<PageServerData>>>>;
export type LayoutServerData = null;
export type LayoutData = Expand<LayoutParentData>;