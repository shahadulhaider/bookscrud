export const configuration = () => ({
  port: parseInt(process.env.PORT, 10) || 8000,
  database: {
    type: 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    logging: false,
    dropSchema: false,
    entities: ['dist/**/*.entity{.ts,.js}'],
  },
});
