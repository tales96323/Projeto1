// Lembre-se de instalar o Jest. com `npm install jest --save-d`
// Fins didáticos
test("nome do teste", callbackFunction);

function callbackFunction() {
  console.log("Primeiro teste de teste");
}
// Fins didáticos
test("testar como fazer arrow function", () => {
  console.log("Teste de Arrow Function");
});

// Proximo teste seria com uma expectativa com o comportamento do sistema.
test("Espero que 1+1 seja 2.", () => {
  expect(1 + 1).toBe(2);
  console.log("Expect 1+1 to be 2");
});

// Esse teste de cima está hardcoded. Não vale muito. Um tem que ser dinamico com alguma parte do sistema.

// Vamos importar a calculadora que está dentro do models. Para isso tem que reservar uma variável
const calculadora_soma = require("../models/calculadora.js");
test("Espero que somar funcione", () => {
  const resultado_soma = calculadora_soma.somar(2, 9);
  console.log("Teste soma");
  expect(resultado_soma).toBe(11);
});

const calculadora_multiplicar = require("../models/calculadora.js");
test("Espero que multiplicar funcione", () => {
  const resultado_multiplicar = calculadora_multiplicar.multiplicar(20, 2);
  console.log("Teste Multiplicação");
  expect(resultado_multiplicar).toBe(40);
});

const calculadora_subtrair = require("../models/calculadora.js");
test("Espero que multiplicar funcione", () => {
  const resultado_subtrair = calculadora_subtrair.subtrair(3, 2);
  console.log("Teste Subtração");
  expect(resultado_subtrair).toBe(1);
});

const calculadora_divir = require("../models/calculadora.js");
test("Espero que dividir funcione", () => {
  const resultado_divir = calculadora_divir.dividir(2, 0);
  console.log("Teste Divisão");
  expect(resultado_divir).toBe(Infinity);
});

//
