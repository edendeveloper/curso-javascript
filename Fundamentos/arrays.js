const valores = [0, 1, 2, 3]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 4
console.log(valores[4])
console.log(valores.length)

valores[10] = 10 
console.log(valores[10]) //o javascript preenche os indices vazios automaticamente, caso seja inserido um valor num indice distante do ultimo indice atual

valores.push({id: 3}, false, null, 'teste') // Atribui valores ao array, começando pelo fim do mesmo
console.log(valores)

console.log(valores.pop()) // Metódos de excluir valores nos indices
delete valores[0] //Exclui o indice expecificado
console.log(valores)

console.log(typeof valores)
