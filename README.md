![What The Hex](https://wthex.vercel.app/og-image.png)

# What The Hex ?!

_What The Hex_ is a wordle-like game where you try to guess hex colors

## How to play 🧐

- You have 6 attempts to guess the hex color
- After each attempt, you will get feedback on how close you are to the correct hex color
  - ⏫: Value is higher by 3 or more
  - ⏬: Value is lower by 3 or more
  - ⬆️: Value is higher by 1 or 2
  - ⬇️: Value is lower by 1 or 2
  - ✅: Value is correct

## Stack 📦️

- Framework: [SvelteKit](https://kit.svelte.dev/)
- Database: [Postgres](https://www.postgresql.org/)
- ORM: [Drizzle](https://orm.drizzle.team/)
- Hosting & Cron: [Vercel](https://vercel.com/)
- i18n: [ParaglideJS](https://inlang.com/m/gerre34r/library-inlang-paraglideJs)

## Development 🛠️

### Environment variables

| Variable       | Description                            |
| -------------- | -------------------------------------- |
| `POSTGRES_URL` | Postgres connection URL to my database |
| `CRON_SECRET`  | Secret key for the cron job            |

Copy the `.env.example` file to `.env` and fill in the values

```sh
cp .env.example .env
```

### Database setup

1. Create a new database
2. Push the schema to the database

```sh
# Npm
npm run db:push

# Yarn
yarn db:push

# Pnpm
pnpm db:push

# Bun
bunx run db:push
```

### Development server

```sh
# Npm
npm run dev

# Yarn
yarn dev

# Pnpm
pnpm dev

# Bun
bun dev
```

### i18n (Internationalization)

I'm using [ParaglideJS](https://inlang.com/m/gerre34r/library-inlang-paraglideJs) for i18n.

As of now, the following languages are supported:

- [English](https://wthex.vercel.app/)
- [French](https://wthex.vercel.app/fr)

If you want to see the game in another language, feel free to contribute by adding a new language in the [inlang project](https://fink.inlang.com/github.com/Shinyhero36/wthex?project=%2Fproject.inlang&lang=en&lang=fr)

## License 📝

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details
