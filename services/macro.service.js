function calcular(dados) {
  let { peso, altura, idade, sexo, objetivo, refeicoes, atividade } = dados;

  peso = Number(peso);
  altura = Number(altura);
  idade = Number(idade);
  refeicoes = Number(refeicoes);

  let alturaCm = altura < 3 ? altura * 100 : altura;

  let tmb = sexo === "masculino"
    ? 10 * peso + 6.25 * alturaCm - 5 * idade + 5
    : 10 * peso + 6.25 * alturaCm - 5 * idade - 161;

  let fatorAtividade = 1.2;
  if (atividade === "leve") fatorAtividade = 1.375;
  if (atividade === "moderada") fatorAtividade = 1.55;
  if (atividade === "intensa") fatorAtividade = 1.725;

  let tdee = tmb * fatorAtividade;

  let calorias;
  if (objetivo === "emagrecimento") calorias = tdee * 0.8;
  if (objetivo === "hipertrofia") calorias = tdee * 1.15;
  if (objetivo === "manutencao") calorias = tdee;

  const proteina = peso * 2;
  const gordura = peso * 1;

  const calProteina = proteina * 4;
  const calGordura = gordura * 9;

  if (calorias < calProteina + calGordura) {
    calorias = calProteina + calGordura + 100;
  }

  const carbo = (calorias - (calProteina + calGordura)) / 4;

  return {
    totalDia: {
      calorias: calorias.toFixed(0),
      proteina: proteina.toFixed(0),
      gordura: gordura.toFixed(0),
      carbo: carbo.toFixed(0)
    },
    porRefeicao: {
      calorias: (calorias / refeicoes).toFixed(0),
      proteina: (proteina / refeicoes).toFixed(0),
      gordura: (gordura / refeicoes).toFixed(0),
      carbo: (carbo / refeicoes).toFixed(0)
    }
  };
}

module.exports = { calcular };
