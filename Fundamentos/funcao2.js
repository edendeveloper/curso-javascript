// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(5, 5))

// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(5, 2))

const imprimir = a => console.log(a)
imprimir('Testando a função')