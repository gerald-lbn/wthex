import { defineConfig } from 'drizzle-kit';

if (!process.env.POSTGRES_URL) {
	throw new Error('DATABASE_URL environment variable is required');
}

export default defineConfig({
	schema: './src/lib/db/schema.ts',
	out: './migrations',
	driver: 'pg',
	dbCredentials: {
		connectionString: process.env.POSTGRES_URL
	},
	verbose: true,
	strict: true
});
