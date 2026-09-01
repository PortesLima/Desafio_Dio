// Desafio DIO - Classificador de nivel de Heroi
// Conceitos: variaveis, operadores, lacos de repeticao e estruturas de decisao

// 1) Variaveis com o nome e a experiencia (XP) do heroi
const nomeHeroi = "Rerisson";
const xpHeroi = 15500;

// 2) Funcao que classifica o nivel de acordo com a faixa de XP
function classificarNivel(xp) {
  if (xp < 1000) {
    return "Ferro";
  } else if (xp <= 2000) {
    return "Bronze";
  } else if (xp <= 5000) {
    return "Prata";
  } else if (xp <= 7000) {
    return "Ouro";
  } else if (xp <= 8000) {
    return "Platina";
  } else if (xp <= 9000) {
    return "Ascendente";
  } else if (xp <= 10000) {
    return "Imortal";
  } else {
    return "Radiante";
  }
}

// 3) Saida para um unico heroi
const nivelHeroi = classificarNivel(xpHeroi);
console.log(`O Heroi de nome ${nomeHeroi} esta no nivel de ${nivelHeroi}`);

// 4) Laco de repeticao: classificando varios herois de uma vez
const herois = [
  { nome: "Aragorn", xp: 800 },
  { nome: "Gandalf", xp: 1500 },
  { nome: "Legolas", xp: 4200 },
  { nome: "Boromir", xp: 6800 },
  { nome: "Galadriel", xp: 7900 },
  { nome: "Elrond", xp: 8700 },
  { nome: "Sauron", xp: 9800 },
  { nome: "Morgoth", xp: 15000 },
];

console.log("\n--- Classificacao de todos os herois ---");
for (let i = 0; i < herois.length; i++) {
  const heroi = herois[i];
  const nivel = classificarNivel(heroi.xp);
  console.log(`O Heroi de nome ${heroi.nome} esta no nivel de ${nivel}`);
}
