class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }

  // verifica a categoria com base na idade
  calculaCategoria() {
    let idade = this.idade;
    if (idade >= 9 && idade <= 11) return "Infantil"; // 9 a 11
    if (idade >= 12 && idade <= 13) return "Juvenil"; // 12 e 13
    if (idade >= 14 && idade <= 15) return "Intermediário"; // 14 e 15
    if (idade >= 16 && idade <= 30) return "Adulto"; // 16 a 30
    return "Sem categoria"; //verificação caso nao esteja em nenhuma das faixas
  }

  // usa o peso e a altura pra calcular o IMC
  calculaIMC() {
    return this.peso / (this.altura * this.altura);
  }

  //calcula a media descartando a maior e a menor nota
  calculaMediaValida() {
    //ordena crescente
    let notasOrdenadas = this.notas.slice().sort(function (a, b) {
      return a - b; 
    });
    // pega as notas descartando a primeira e a ultima
    let notasDoMeio = notasOrdenadas.slice(1, 4);
    // soma as notas ordenadas
    let soma = notasDoMeio.reduce(function (total, n) { return total + n; }, 0);
    // calcula media
    return soma / notasDoMeio.length;
  }

  obtemNomeAtleta() { return this.nome; }
  obtemIdadeAtleta() { return this.idade; }
  obtemPesoAtleta() { return this.peso; }
  obtemAlturaAtleta() { return this.altura; }
  obtemNotasAtleta() { return this.notas; }
  obtemCategoria() { return this.calculaCategoria(); }
  obtemIMC() { return this.calculaIMC(); }
  obtemMediaValida() { return this.calculaMediaValida(); }
}

// usei os mesmos dados do exemplo pra validar a saída
const atleta = new Atleta(
  "Cesar Abascal",
  30,         // idade
  80,         // peso
  1.70,       // altura
  [10, 9.34, 8.42, 10, 7.88] // 5 notas
);

let mediaBruta = atleta.obtemMediaValida(); // pega o numero da media valida
let mediaComoTexto = mediaBruta.toFixed(8).replace(".", ","); // ajusta o numero pra 8 casas apos a virgula, e troca o ponto pela virgula

// saída usando o console.log
console.log(`Nome: ${atleta.obtemNomeAtleta()}\nIdade: ${atleta.obtemIdadeAtleta()}\nPeso: ${atleta.obtemPesoAtleta()}\nAltura: ${atleta.obtemAlturaAtleta()}\nNotas: ${atleta.obtemNotasAtleta().join(",")}\nCategoria: ${atleta.obtemCategoria()}\nIMC: ${atleta.obtemIMC()}\nMédia válida: ${mediaComoTexto}`)