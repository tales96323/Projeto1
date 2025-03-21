// só testes que fazem o metodo "get"

test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  console.log(responseBody);
  expect(responseBody.updated_at).toBeDefined();

  new Date(responseBody.updated_at).toISOString();
  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  expect(responseBody.dependecies.database.version).toEqual("16.4");

  expect(responseBody.dependecies.database.max_connections).toEqual(100);

  expect(responseBody.dependecies.database.opened_connections).toEqual(1);
});
