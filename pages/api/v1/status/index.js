import database from "../../../../infra/database.js";

// cria uma */api/status - mas precisa de uma função
async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  response.status(200).json({ chave: "Tá tudo certo!" });
}

export default status;
