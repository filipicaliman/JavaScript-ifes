//EXERCICIO 3 aula 7
// nome = prompt("Digite seu nome: ")
// valorTotal = Number(prompt("Qual o valor total? "))

// if (valorTotal > 0 && valorTotal < 1000) {
//   desconto = valorTotal * 0.05
// } else if (valorTotal <= 5000) {
//   desconto = valorTotal * 0.1
// } else {
//   desconto = valorTotal * 0.15
// }

// console.log(`${nome}, o desconto será de ${desconto} reais.`)

// AULA 8 

nome = prompt("Digite seu nome: ")
salBruto = Number(prompt("Qual o seu salário bruto? "))
dependentes = Number(prompt("Quntos dependentes você tem? "))

rendaPerCapita = salBruto / (dependentes + 1) 

if (rendaPerCapita < 500) {
  salLiquido = salBruto
  console.log("Não precisa pagar imposto de renda.")
} else {
  if (rendaPerCapita >= 0 && rendaPerCapita < 1903.98) {
    salLiquido = salBruto * 0.95
  } else if (rendaPerCapita < 2826.65) {
  salLiquido = salBruto * 0.925
  } else {
  salLiquido = salBruto * 0.85
  }
}

console.log(`${nome}, o seu salário líquido é de ${salLiquido} reais.`)