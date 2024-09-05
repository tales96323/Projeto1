// cria uma */api/status - mas precisa de uma função
//
function status(request, response) {
  response.status(200).json({ chave: "Tá tudo certo!" });
}

export default status;
