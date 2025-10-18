## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

### Database (Neon PostgreSQL)

1. Create a project in [Neon](https://neon.tech) and note the default database name.
2. In the project dashboard open **Connection Details** → copy the **Pooled connection string** (it already includes pooling and SSL). It looks like `postgresql://<user>:<password>@<project-id>.pooler.<region>.neon.tech/<database>?sslmode=require`.
3. Add the string to `.env.local` as `POSTGRES_URL=…`. Keep the other `POSTGRES_*` variables if you need them for client tools such as Prisma or psql.
4. Restart `next dev` so the new environment variables are loaded.
5. Seed the database by hitting `http://localhost:3000/seed` once, or run your own migration workflow.
