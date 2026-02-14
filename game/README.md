# Missão: Zona Norte — Game Core

Como executar rapidamente o core do jogo (Node.js):

1. Verifique se o Node.js está instalado.
2. Execute:

```bash
node game/core.js
```

O script imprime a cena de abertura, completa uma missão de teste, realiza um combate e mostra um evento aleatório.
 
Instalação e scripts (Node.js):

1. Inicialize dependências (opcional):

```bash
cd game
npm install
```

2. Para executar o core:

```bash
npm start
```

3. Para rodar testes (após instalar dependências):

```bash
npm test
```

Status do CI: ![CI](https://github.com/Pedro-h13/desenvolvedor-java-qua.209.079/actions/workflows/nodejs-game.yml/badge.svg)

Sobre este diretório:
- `core.js`: implementação principal do jogo (atributos, jogador, combate, inventário, persistência).
- `__tests__`: testes Jest cobrindo funcionalidades básicas.
- `save.json`: arquivo de save gerado em demonstrações (não versionado).

Contribuições:
- Faça um fork e abra PR para novas features ou correções.
