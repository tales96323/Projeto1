import database from "infra/database.js";

// cria uma */api/status - mas precisa de uma função
async function status(request, response) {
  const updatedAt = new Date().toISOString();
  response.status(200).json({
    updated_at: updatedAt,
  });
}

export default status;
