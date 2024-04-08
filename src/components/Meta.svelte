<script lang="ts">
	import { page } from '$app/stores';
	interface Props {
		title?: string;
		description?: string;
		image?: string;
		themeColor?: string;
	}

	const {
		title = $page.data.title,
		description = $page.data.description,
		themeColor = '#1c1917',
		image
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
	{#if image}
		<meta property="og:image" content={image} />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />
		<meta property="og:image:alt" content={title} />
	{/if}

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	{#if title}
		<meta name="twitter:title" content={title} />
	{/if}
	{#if description}
		<meta name="twitter:description" content={description} />
	{/if}
	{#if image}
		<meta name="twitter:image" content="{$page.url.origin}/og-image.png" />
	{/if}
</svelte:head>
