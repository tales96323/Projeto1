import database from "infra/database.js";

// cria uma */api/status - mas precisa de uma função
async function status(request, response) {
  const updatedAt = new Date().toISOString();

  //esse comando puxa o que tá na string, leva pro banco, processa e devolve pra cá. Isso é uma consulta ao banco. Pode ser SELECT, UPDATE, DELETE, SHOW...
  const databaseVersionResult = await database.query("SHOW server_version;");
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;

  const databaseMaxConnectionsResult = await database.query(
    "SHOW max_connections;",
  );
  const databaseMaxConnectionsValue =
    databaseMaxConnectionsResult.rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB;
  const databaseOpenedConnectionsResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  //"SELECT count(*)::int FROM pg_stat_activity WHERE datname = 'local_db';"
  const databaseOpenedConnectionsValue =
    databaseOpenedConnectionsResult.rows[0].count;

  response.status(200).json({
    updated_at: updatedAt,
    dependecies: {
      database: {
        version: databaseVersionValue,
        max_connections: parseInt(databaseMaxConnectionsValue),
        opened_connections: parseInt(databaseOpenedConnectionsValue),
      },
    },
  });
}

export default status;
