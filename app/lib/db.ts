import postgres from 'postgres';

declare global {
  // eslint-disable-next-line no-var
  var postgresSqlClient: ReturnType<typeof postgres> | undefined;
}

const connectionString =
  process.env.POSTGRES_URL ?? process.env.DATABASE_URL ?? '';

if (!connectionString) {
  throw new Error(
    'Missing database connection string. Define POSTGRES_URL in your environment variables.',
  );
}

const client =
  globalThis.postgresSqlClient ??
  postgres(connectionString, {
    ssl: 'require',
  });

if (process.env.NODE_ENV !== 'production') {
  globalThis.postgresSqlClient = client;
}

export const sql = client;
