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
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={$page.url.origin} />
	<meta property="og:site_name" content={title} />
	<meta property="og:type" content="website" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>
