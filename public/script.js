const form = document.getElementById("macroForm");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const dados = {
    peso: Number(peso.value),
    altura: Number(altura.value),
    idade: Number(idade.value),
    sexo: sexo.value,
    objetivo: objetivo.value,
    refeicoes: Number(refeicoes.value),
    atividade: atividade.value
  };

  const res = await fetch("/api/calcular", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados)
  });

  const json = await res.json();

  resultado.innerHTML = `
    <h2>Resultado</h2>
    <p><b>Calorias/dia:</b> ${json.totalDia.calorias} kcal</p>
    <p><b>Proteína:</b> ${json.totalDia.proteina} g</p>
    <p><b>Gordura:</b> ${json.totalDia.gordura} g</p>
    <p><b>Carboidrato:</b> ${json.totalDia.carbo} g</p>

    <h3>Por refeição</h3>
    <p>🔥 Calorias: ${json.porRefeicao.calorias} kcal</p>
    <p>🍗 Proteína: ${json.porRefeicao.proteina} g</p>
    <p>🥑 Gordura: ${json.porRefeicao.gordura} g</p>
    <p>🍚 Carbo: ${json.porRefeicao.carbo} g</p>
  `;
});

function setTheme(themeName) {
  document.body.className = themeName;
  localStorage.setItem("theme", themeName);
}

window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.className = savedTheme;
  }
};
