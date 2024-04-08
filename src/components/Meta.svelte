<script lang="ts">
	import { page } from '$app/stores';
	interface Props {
		title?: string;
		description?: string;
		themeColor?: string;
	}

	const {
		title = $page.data.title,
		description = $page.data.description,
		themeColor = '#1c1917'
	}: Props = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="theme-color" content={themeColor} />

	<!-- OG -->
	{#if title}
		<meta property="og:title" content={title} />
	{/if}
	{#if description}
		<meta property="og:description" content={description} />
	{/if}
	<meta property="og:url" content={$page.url.origin} />
	{#if title}
		<meta property="og:site_name" content={title} />
	{/if}
	<meta property="og:type" content="website" />
	<meta property="og:image" content="{$page.url.origin}/og-image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={title} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	{#if title}
		<meta name="twitter:title" content={title} />
	{/if}
	{#if description}
		<meta name="twitter:description" content={description} />
	{/if}
	<meta name="twitter:image" content="{$page.url.origin}/og-image.png" />
</svelte:head>
