
// Criando um array de números de 1 a 16
var numeros = [];
for (var i = 1; i <= 16; i++) {
    numeros.push(i);
}

// Mostrando o array na página
document.write("<strong>Array de números de 1 a 16:</strong><br>");
document.write("<table>");
for (var i = 0; i < numeros.length; i += 4) {
    document.write("<tr>");
    for (var j = i; j < i + 4 && j < numeros.length; j++) {
        document.write("<td>" + numeros[j] + "</td>");
    }
    document.write("</tr>");
}
document.write("</table><br>");

// Encontrando e exibindo o número dez
var numeroDez = numeros[9]; // Lembre-se que os índices começam do zero
document.write("O número dez é: " + numeroDez + "<br>");

// Exemplos de comparações entre variáveis
document.write("<br><strong>Exemplos de comparações entre variáveis:</strong><br>");

// Exemplo 1: Verifica se a e b são iguais
var a = 1;
var b = 11;
if (a == b) {
    document.write("As variáveis a e b são iguais<br>");
}

// Exemplo 2: Verifica se a e b são diferentes
if (a != b) {
    document.write("A e B são diferentes<br>");
}

// Exemplo 3: Verifica se a e b são diferentes em valor e tipo
if (a !== b) {
    document.write("A e B são diferentes em valor e tipo<br>");
}

// Exemplo 4: Verifica se a e b são verdadeiros e do mesmo tipo
if (a === b) {
    document.write("A e B são verdadeiros e do mesmo tipo<br>");
}

// Exemplo 5: Verifica se a e b são diferentes em valor ou tipo
if (a !== b) {
    document.write("A e B não são do mesmo tipo<br>");
}

// Exemplo 6: Verifica se a é menor que b
if (a < b) {
    document.write("A é menor que B<br>");
}

// Exemplo 7: Verifica se a é maior que b
if (a > b) {
    document.write("A é maior que B<br>");
}

// Exemplo 8: Verifica se a é menor ou igual a b
if (a <= b) {
    document.write("A é menor ou igual a B<br>");
}

// Exemplo 9: Verifica se a é maior ou igual a b
if (a >= b) {
    document.write("A é maior ou igual a B<br>");
}
