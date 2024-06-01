/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />


interface ImportMetaEnv {
	readonly STRAPI_URL: string;
	readonly STRAPI_TOKEN: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

// ###> astro-i18n/type-generation ###
type PrimaryLocale = "de"
type SecondaryLocale = "it"|"en"
type Locale = PrimaryLocale | SecondaryLocale
type RouteParameters = {"/impressum":undefined;"/":undefined;"/kontakt":undefined;"/privacy-policy":undefined;"/ueber-uns":undefined;"/wahlen":undefined;"/blog/[...page]":{"page":unknown;};"/blog/[slug]":{"slug":unknown;};"/gruppen/[...page]":{"page":unknown;};"/gruppen/[slug]":{"slug":unknown;};}
type Route = keyof RouteParameters
type TranslationVariables = {"not_found.404":object|undefined;"not_found.desc_1":object|undefined;"not_found.desc_2":object|undefined;"not_found.desc_3":object|undefined;"not_found.email_subject":object|undefined;"not_found.email_body":object|undefined;"nav.home":object|undefined;"nav.content":object|undefined;"nav.about":object|undefined;"nav.your_voice":object|undefined;"nav.blog":object|undefined;"nav.contact":object|undefined;"nav.participate":object|undefined;"nav.groups":object|undefined;"nav.wahlen":object|undefined;"latest_articles.latest_articles":object|undefined;"latest_articles.description":object|undefined;"latest_articles.read_more":object|undefined;"article.available_in":object|undefined;"article.check_out_post":object|undefined;"article.share":object|undefined;"article.follow_us":object|undefined;"article.written_by":object|undefined;"article.authors":object|undefined;"article.published_at":object|undefined;"article.read_time":object|undefined;"footer.site":object|undefined;"footer.languages":object|undefined;"footer.resources":object|undefined;"footer.all_rights_reserved":object|undefined;"footer.cookie_preferences":object|undefined;"footer.impressum":object|undefined;"footer.datenschutz":object|undefined;"data_vote.title":object|undefined;"data_vote.description":object|undefined;"data_vote.genders":object|undefined;"data_vote.gender_balance_de":object|undefined;"data_vote.gender_balance_source_de":object|undefined;"data_vote.gender_balance_it":object|undefined;"data_vote.gender_balance_source_it":object|undefined;"data_vote.turnout_de":object|undefined;"data_vote.turnout_source_de":object|undefined;"data_vote.turnout_it":object|undefined;"data_vote.turnout_source_it":object|undefined;"categories.title":object|undefined;"categories.description":object|undefined;"home_cta.title1":object|undefined;"home_cta.title2":object|undefined;"home_cta.voice":object|undefined;"home_cta.description":object|undefined;"home_cta.action1":object|undefined;"home_cta.action2":object|undefined;"blog.description":object|undefined;"blog.older_posts":object|undefined;"blog.recent_posts":object|undefined;"about.title":object|undefined;"about.description":object|undefined;"contact.title":object|undefined;"contact.description":object|undefined;"contact.form.name":object|undefined;"contact.form.email":object|undefined;"contact.form.message":object|undefined;"contact.form.submit":object|undefined;"contact.success":object|undefined;"contact.error":object|undefined;"seo.home.title":object|undefined;"seo.home.description":object|undefined;"groups.title":object|undefined;"groups.description":object|undefined;"groups.our_authors":object|undefined;"groups.our_posts":object|undefined;"groups.seo.title":object|undefined;"groups.seo.description":object|undefined;"wahlen.title":object|undefined;"wahlen.description":object|undefined;}
type Translation = keyof TranslationVariables
type Environment = "none"|"node"|"browser"
declare module "astro-i18n" {
	type GetStaticPathsProps = {paginate:Function;rss:Function}
	type GetStaticPathsItem = {params:Record<string,number|string|undefined>;props?:Record<string,unknown>}
	type DeepStringRecord = {[key: string]:string|DeepStringRecord}
	type TranslationDirectory = {i18n?:string;pages?: string}
	export type Translations = {[group: string]:{[locale: string]: DeepStringRecord}}
	export type TranslationFormatters = {[formatterName: string]:(value:unknown,...args:unknown[])=>unknown}
	export type TranslationLoadingRules = {groups:string[];routes: string[]}[]
	export type SegmentTranslations = {[secondaryLocale: string]:{[segment: string]:string}}
	export interface AstroI18nConfig {primaryLocale:string;secondaryLocales:string[];fallbackLocale:string;showPrimaryLocale:boolean;trailingSlash:"always"|"never";run:"server"|"client+server";translations:Translations;translationLoadingRules:TranslationLoadingRules;translationDirectory:TranslationDirectory;routes:SegmentTranslations;srcDir:string;}
	/** Typed astro-i18n config definition. */
	export function defineAstroI18nConfig(config: Partial<AstroI18nConfig>): Partial<AstroI18nConfig>
	/** The `astro-i18n` middleware. */
	export function useAstroI18n(
		config?: Partial<AstroI18nConfig> | string,
		formatters?: TranslationFormatters,
	): (...args: any[]) => any
	/** Workaround function to make astroI18n work inside getStaticPaths. This is because Astro's getStaticPaths runs before everything which doesn't allows astroI18n to update its state automatically. */
	function createGetStaticPaths(
		callback: (
			props: GetStaticPathsProps,
		) => GetStaticPathsItem[] | Promise<GetStaticPathsItem[]>,
	): (props: GetStaticPathsProps & {
		astroI18n?: {
			locale: string;
		};
	}) => Promise<GetStaticPathsItem[]>
	/**
	 * @param key The translation key, for example `"my.nested.translation.key"`.
	 * @param properties An object containing your interpolation variables and/or your variants, for example `{ variant: 3, interpolation: "text" }`.
	 * @param options `route`: Overrides the current route, you will be able to access that route's translations. `locale`: Overrides the current locale, this allows you to control which language you want to translate to. `fallbackLocale`: Overrides the fallback locale.
	 */
	export function t<T extends Translation>(
		key: T | string & {},
		...args: undefined extends TranslationVariables[T]
			? [
				properties?: keyof TranslationVariables extends T 
					? Record<string, unknown> 
					: TranslationVariables[T], 
				options?: {
					route?: Route | string & {}
					locale?: Locale | string & {}
					fallbackLocale?: Locale | string & {}
				}
			]
			: [
				properties: TranslationVariables[T], 
				options?: {
					route?: Route | string & {}
					locale?: Locale | string & {}
					fallbackLocale?: Locale | string & {}
				}
			]
	): string
	/**
	 * @param route A route in any of the configured languages, for example `"/en/my/english/route/[param]"`.
	 * @param parameters An object containing your route parameters, for example `{ slug: "my-blog-post-slug" }`.
	 * @param options `targetLocale`: Overrides the target locale. `routeLocale`: Overrides the given route locale, this is useful if astro-i18n cannot figure out the route's locale. `showPrimaryLocale`: Overrides the showPrimaryLocale parameter. `query`: Adds these query parameters at the end of the translated route.
	 */
	export function l<T extends Route>(
		route: T | string & {},
		...args: T extends keyof RouteParameters
			? undefined extends RouteParameters[T]
				? [
					parameters?: Record<string, string>, 
					options?: { 
						targetLocale?: string, 
						routeLocale?: string,
						showPrimaryLocale?: string,
						query?: Record<string, unknown>
					}
				]
				: [
					parameters: RouteParameters[T], 
					options?: { 
						targetLocale?: string, 
						routeLocale?: string,
						showPrimaryLocale?: string,
						query?: Record<string, unknown>
					}
				]
			: [
				parameters?: Record<string, string>, 
				options?: { 
					targetLocale?: string, 
					routeLocale?: string,
					showPrimaryLocale?: string,
					query?: Record<string, unknown>
				}
			]
	): string
	class AstroI18n {
		/** The detected runtime environment. */
		environment: Environment
		/** The current page route. */
		route: string
		/** All page routes. For example: `["/", "/about", "/posts/[slug]"]` */
		pages: string[]
		/** The equivalent page for the current route. For example if route is equal to `"/posts/my-cool-cat"` this could return `"/posts/[slug]"`. */
		page: string
		/** The current page locale. */
		locale: Locale
		/** All configured locales. */
		locales: Locale[]
		/** The default/primary locale. */
		primaryLocale: PrimaryLocale
		/** Locales other than the default/primary one. */
		secondaryLocales: SecondaryLocale[]
		/** The fallback locale, when a translation is missing in a locale the fallback locale will be used to find a replacement. */
		fallbackLocale: Locale
		/** True when astro-i18n is initialized. */
		isInitialized: boolean
		/**
		 * @param key The translation key, for example `"my.nested.translation.key"`.
		 * @param properties An object containing your interpolation variables and/or your variants, for example `{ variant: 3, interpolation: "text" }`.
		 * @param options `route`: Overrides the current route, you will be able to access that route's translations. `locale`: Overrides the current locale, this allows you to control which language you want to translate to. `fallbackLocale`: Overrides the fallback locale.
		 */
		t<T extends Translation>(
			key: T | string & {},
			...args: undefined extends TranslationVariables[T]
				? [
					properties?: keyof TranslationVariables extends T 
						? Record<string, unknown> 
						: TranslationVariables[T], 
					options?: {
						route?: Route | string & {}
						locale?: Locale | string & {}
						fallbackLocale?: Locale | string & {}
					}
				]
				: [
					properties: TranslationVariables[T], 
					options?: {
						route?: Route | string & {}
						locale?: Locale | string & {}
						fallbackLocale?: Locale | string & {}
					}
				]
		): string
		/**
		 * @param route A route in any of the configured languages, for example `"/en/my/english/route/[param]"`.
		 * @param parameters An object containing your route parameters, for example `{ slug: "my-blog-post-slug" }`.
		 * @param options `targetLocale`: Overrides the target locale. `routeLocale`: Overrides the given route locale, this is useful if astro-i18n cannot figure out the route's locale. `showPrimaryLocale`: Overrides the showPrimaryLocale parameter. `query`: Adds these query parameters at the end of the translated route.
		 */
		l<T extends Route>(
			route: T | string & {},
			...args: T extends keyof RouteParameters
				? undefined extends RouteParameters[T]
					? [
						parameters?: Record<string, string>, 
						options?: { 
							targetLocale?: string, 
							routeLocale?: string,
							showPrimaryLocale?: string,
							query?: Record<string, unknown>
						}
					]
					: [
						parameters: RouteParameters[T], 
						options?: { 
							targetLocale?: string, 
							routeLocale?: string,
							showPrimaryLocale?: string,
							query?: Record<string, unknown>
						}
					]
				: [
					parameters?: Record<string, string>, 
					options?: { 
						targetLocale?: string, 
						routeLocale?: string,
						showPrimaryLocale?: string,
						query?: Record<string, unknown>
					}
				]
		): string
		/** Adds new translations at runtime. */
		addTranslations(translations: Translations): this
		/** Adds new translation formatters at runtime. */
		addFormatters(translationFormatters: TranslationFormatters): this
		/** Adds new translation loading rules at runtime. */
		addTranslationLoadingRules(translationLoadingRules: TranslationLoadingRules): this
		/** Adds new route segment translations at runtime. */
		addRoutes(routes: SegmentTranslations): this
		/** Tries to parse one of the configured locales out of the given route. If no configured locale is found it will return `null`. */
		extractRouteLocale(route: string): string|null
		/** Initializes astro-i18n on the server-side. */
		initialize(config?: Partial<AstroI18nConfig> | string, formatters?: TranslationFormatters = {}): Promise<void>
		/** Redirects the user to the given destination. */
		redirect(destination: string | URL, status = 301)
	}
	export const astroI18n: AstroI18n
}
// ###< astro-i18n/type-generation ###
