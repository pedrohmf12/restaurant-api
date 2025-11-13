export default {
  client: "sqlite3",
  connecion: {
    filename: "./src/database/dabatase.db",
  },
  useNullAsDefault: true,
  migrations: {
    extensions: "ts",
    directory: "./src/database/migrations",
  },

  seeds: {
    extensions: "ts",
    directory: "./src/database/seeds",
  },
};
