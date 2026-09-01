# Desafio DIO — Classificador de Nível de Herói

Projeto prático de Lógica de Programação [DIO](https://www.dio.me/) para praticar os fundamentos de
JavaScript: **variáveis**, **operadores**, **laços de repetição** e **estruturas de decisão**.

## Objetivo

Armazenar em variáveis o **nome** e a quantidade de **experiência (XP)** de um herói e,
por meio de uma estrutura de decisão, exibir o **nível** correspondente.

| XP                         | Nível      |
| -------------------------- | ---------- |
| Menor que 1.000            | Ferro      |
| De 1.001 a 2.000           | Bronze     |
| De 2.001 a 5.000           | Prata      |
| De 5.001 a 7.000           | Ouro       |
| De 7.001 a 8.000           | Platina    |
| De 8.001 a 9.000           | Ascendente |
| De 9.001 a 10.000          | Imortal    |
| Maior ou igual a 10.001    | Radiante   |

## Saída esperada

```
O Herói de nome {nome} está no nível de {nivel}
```

## Como executar

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

```bash
node index.js
```

## O que o `index.js` faz

1. Define as variáveis `nomeHeroi` e `xpHeroi`.
2. A função `classificarNivel(xp)` usa `if / else if / else` e operadores de comparação
   para retornar o nível da faixa de XP.
3. Exibe a mensagem final para o herói principal.
4. Um laço `for` percorre uma lista de heróis e classifica todos de uma vez, exercitando
   o laço de repetição.
