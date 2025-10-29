**Notas de Atletas  — Desafio de Certificação**

**Sobre o projeto**

Aplicação em JavaScript que recebe dados de um atleta, verifica a categoria por idade, o IMC e a média válida das notas (descartando a maior e a menor), e exibe tudo no console.

**Objetivo**

Praticar lógica de programação com JavaScript usando arrays, objetos, classes, ordenação e formatação de resultados, para certificação do curso DEVSTART - LAB365 (Lógica de Programação com JavaScript)

**Como funciona**

Categoria: definida pela idade (Infantil, Juvenil, Intermediário, Adulto ou Sem categoria).

IMC: calculado com a fórmula peso / (altura × altura).

Média válida: ordena as 5 notas, descarta a menor e a maior, faz a média das 3 notas restantes.

Saída: mostra nome, idade, peso, altura, notas, categoria, IMC e média válida.

**Exemplo de dados utilizado no codigo**

const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

**Como executar**
* No navegador: utilize um editor de codigo JavaScript online como: playcode.io , mycompiler.io , codepen.io, etc. , copie o codigo e teste no console.

* No Node.js: salve como dados-atletas.js e rode no terminal com: node dados-atletas.js

**Regras da categoria**
* Infantil: 9 a 11 anos;

* Juvenil: 12 e 13 anos;

* Intermediário: 14 e 15 anos;

* Adulto: 16 a 30 anos;

* Sem categoria: demais idades.

**O que foi exercitado durante a criação do código**

* Criar e usar classes em JavaScript.

* Ordenar números corretamente para processamento.

* Manipular arrays (slice, reduce).

* Formatar números para exibição (toFixed, replace).
