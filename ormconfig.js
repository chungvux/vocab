const entityDir = process.env.NODE_ENV === 'local' ? 'src/modules/**/entities/*.ts' : 'dist/modules/**/entities/*.js';
const migrationDir = process.env.NODE_ENV === 'local' ? 'src/migrations/*.ts' : 'dist/migrations/*.js';

module.exports = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  logging: process.env.USE_LOG_FILE,
  synchronize: false,
  entities: [entityDir],
  migrations: [migrationDir],
  subscribers: ['dist/modules/**/subscribers/*{.js}'],
  cli: {
    entitiesDir: ['src/modules/**/entities/*{.ts,.js}'],
    migrationsDir: 'src/migrations',
  },
  seeds: ['seeds/*{.ts,.js}'],
  factories: ['src/modules/**/factories/*{.ts,.js}'],
};
