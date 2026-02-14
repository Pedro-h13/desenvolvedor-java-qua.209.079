// Missão: Zona Norte - Game Core
const fs = require('fs');
const GameConfig = {
  title: "Missão: Zona Norte",
  genre: "RPG de Aventura Urbano",
  version: "1.0.0",
  initialLocation: "Madureira",
};

class Attributes {
  constructor() {
    this.forca = 5;
    this.agilidade = 5;
    this.inteligencia = 5;
    this.carisma = 5;
    this.resistencia = 5;
  }
}

class Player {
  constructor(nome) {
    this.nome = nome;
    this.level = 1;
    this.xp = 0;
    this.vida = 100;
    this.energia = 100;
    this.reputacao = {};
    this.atributos = new Attributes();
    this.inventario = [];
    this.habilidades = [];
    this.localizacao = GameConfig.initialLocation;
  }

  // Inventário
  adicionarItem(item) {
    this.inventario.push(item);
    console.log(`${this.nome} recebeu: ${item.nome}`);
  }

  removerItem(nomeItem) {
    const idx = this.inventario.findIndex(i => i.nome === nomeItem);
    if (idx === -1) return null;
    return this.inventario.splice(idx, 1)[0];
  }

  usarItem(nomeItem, alvo = this) {
    const idx = this.inventario.findIndex(i => i.nome === nomeItem);
    if (idx === -1) {
      console.log(`${this.nome} não possui ${nomeItem}`);
      return false;
    }
    const item = this.inventario[idx];
    if (typeof item.usar === 'function') item.usar(alvo);
    this.inventario.splice(idx, 1);
    return true;
  }

  // Habilidades
  aprenderHabilidade(habilidade) {
    this.habilidades.push(habilidade);
    console.log(`${this.nome} aprendeu a habilidade: ${habilidade.nome}`);
  }

  usarHabilidade(nomeHabilidade, alvo) {
    const hab = this.habilidades.find(h => h.nome === nomeHabilidade);
    if (!hab) {
      console.log(`${this.nome} não conhece ${nomeHabilidade}`);
      return false;
    }
    if (this.energia < hab.custo) {
      console.log(`${this.nome} não tem energia suficiente para usar ${nomeHabilidade}`);
      return false;
    }
    this.energia -= hab.custo;
    hab.usar(this, alvo);
    return true;
  }

  ganharXP(valor) {
    this.xp += valor;
    while (this.xp >= this.level * 100) {
      this.xp -= this.level * 100;
      this.subirNivel();
    }
  }

  subirNivel() {
    this.level++;
    console.log(`${this.nome} subiu para o nível ${this.level}!`);
  }

  alterarReputacao(faccao, valor) {
    if (!this.reputacao[faccao]) this.reputacao[faccao] = 0;
    this.reputacao[faccao] += valor;
  }
}

class Mission {
  constructor(titulo, descricao, recompensaXP, tipo = "Principal") {
    this.titulo = titulo;
    this.descricao = descricao;
    this.recompensaXP = recompensaXP;
    this.tipo = tipo; // Principal, Secundária, Evento
    this.completa = false;
  }

  completar(player) {
    if (this.completa) return;
    this.completa = true;
    player.ganharXP(this.recompensaXP);
    console.log(`Missão "${this.titulo}" concluída!`);
  }
}

class Enemy {
  constructor(nome, vida, dano, fraqueza) {
    this.nome = nome;
    this.vida = vida;
    this.dano = dano;
    this.fraqueza = fraqueza;
    this.agilidade = 3;
    this.resistencia = 0; // valor percentual de redução de dano (ex: 0.1 = 10%)
    this.statusEffects = [];
  }

  atacar(player) {
    player.vida -= this.dano;
    if (player.vida < 0) player.vida = 0;
    console.log(`${this.nome} atacou ${player.nome} e causou ${this.dano} de dano.`);
  }
}

// Itens e Habilidades
class Item {
  constructor(nome, tipo, usarFn) {
    this.nome = nome;
    this.tipo = tipo; // ex: 'consumivel', 'equipamento'
    this.usar = usarFn; // função (alvo) => { ... }
  }
}

class Skill {
  constructor(nome, custo, usarFn) {
    this.nome = nome;
    this.custo = custo; // custo de energia
    this.usar = usarFn; // função (user, alvo) => { ... }
  }
}

// Persistência (salvar / carregar)
function criarItemAPartirDeData(data) {
  // Reconstrói efeitos básicos conhecidos (padrão: sem efeito)
  const nome = data.nome;
  if (nome && nome.toLowerCase().includes('poção')) {
    return new Item(nome, data.tipo, (alvo) => {
      const cura = data.cura || 30;
      alvo.vida = Math.min(100, alvo.vida + cura);
      console.log(`${alvo.nome} usou ${nome} e recuperou ${cura} de vida. (vida: ${alvo.vida})`);
    });
  }
  return new Item(data.nome, data.tipo, () => {
    console.log(`${data.nome} usado (efeito padrão).`);
  });
}

function criarSkillAPartirDeData(data) {
  const nome = data.nome;
  if (nome === 'Golpe Forte') {
    return new Skill(nome, data.custo || 20, (user, target) => {
      const dano = user.atributos.forca * 4;
      target.vida -= dano;
      if (target.vida < 0) target.vida = 0;
      console.log(`${user.nome} usou ${nome} em ${target.nome} causando ${dano} de dano.`);
    });
  }
  return new Skill(data.nome, data.custo || 0, (user, target) => {
    console.log(`${user.nome} usou ${data.nome} (efeito padrão).`);
  });
}

function salvarJogo(player, filePath) {
  const data = {
    nome: player.nome,
    level: player.level,
    xp: player.xp,
    vida: player.vida,
    energia: player.energia,
    reputacao: player.reputacao,
    atributos: player.atributos,
    inventario: player.inventario.map(i => ({ nome: i.nome, tipo: i.tipo, cura: i.cura })),
    habilidades: player.habilidades.map(h => ({ nome: h.nome, custo: h.custo })),
    localizacao: player.localizacao,
  };
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Jogo salvo em ${filePath}`);
}

function carregarJogo(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`Arquivo de save não encontrado: ${filePath}`);
    return null;
  }
  const raw = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(raw);
  const player = new Player(data.nome || 'Jogador');
  player.level = data.level || 1;
  player.xp = data.xp || 0;
  player.vida = data.vida ?? 100;
  player.energia = data.energia ?? 100;
  player.reputacao = data.reputacao || {};
  if (data.atributos) Object.assign(player.atributos, data.atributos);
  player.inventario = (data.inventario || []).map(criarItemAPartirDeData);
  player.habilidades = (data.habilidades || []).map(criarSkillAPartirDeData);
  player.localizacao = data.localizacao || GameConfig.initialLocation;
  console.log(`Jogo carregado de ${filePath}`);
  return player;
}

function combater(player, enemy) {
  console.log(`⚔️ Combate iniciado contra ${enemy.nome}`);


  // utilitários internos
  function aplicarStatusEffects(entidade) {
    if (!entidade.statusEffects) return;
    for (let i = entidade.statusEffects.length - 1; i >= 0; i--) {
      const s = entidade.statusEffects[i];
      if (s.tipo === 'bleed') {
        entidade.vida -= s.valor;
        console.log(`${entidade.nome} sofre ${s.valor} de dano por sangramento. (vida: ${entidade.vida})`);
      }
      s.turnos--;
      if (s.turnos <= 0) entidade.statusEffects.splice(i, 1);
    }
    if (entidade.vida < 0) entidade.vida = 0;
  }

  function chanceAcerta(atacanteAg, defensorAg) {
    let base = 0.8 + (atacanteAg - defensorAg) * 0.03;
    if (base > 0.95) base = 0.95;
    if (base < 0.1) base = 0.1;
    return Math.random() < base;
  }

  function calculoDano(atacante, defensor, baseMultiplier = 2, tipoDano = 'Força') {
    let dano = Math.round(atacante.atributos.forca * baseMultiplier);
    // crítico
    const critChance = Math.min(0.25, atacante.atributos.agilidade * 0.01);
    if (Math.random() < critChance) {
      dano = Math.round(dano * 1.5);
      console.log('Acerto crítico!');
    }
    // fraqueza
    if (defensor.fraqueza && typeof defensor.fraqueza === 'string') {
      if (defensor.fraqueza.toLowerCase() === tipoDano.toLowerCase()) {
        dano = Math.round(dano * 1.5);
        console.log(`${defensor.nome} é fraco contra ${tipoDano}! Dano aumentado.`);
      }
    }
    // resistência do defensor
    if (defensor.resistencia) {
      dano = Math.round(dano * (1 - defensor.resistencia));
    }
    return dano;
  }

  // assegura que tanto player quanto enemy tenham statusEffects e agilidade
  player.statusEffects = player.statusEffects || [];
  enemy.statusEffects = enemy.statusEffects || [];
  enemy.agilidade = enemy.agilidade || 3;

  // ordem inicial pelo atributo agilidade
  let jogadorAtacaPrimeiro = player.atributos.agilidade >= enemy.agilidade;

  while (player.vida > 0 && enemy.vida > 0) {
    if (jogadorAtacaPrimeiro) {
      // turno do jogador
      aplicarStatusEffects(player);
      if (player.vida <= 0) break;

      const stunned = player.statusEffects.some(s => s.tipo === 'stun');
      if (!stunned) {
        // escolher usar habilidade automática se possível
        const hab = player.habilidades.find(h => player.energia >= h.custo);
        if (hab) {
          console.log(`${player.nome} usa habilidade ${hab.nome}`);
          player.usarHabilidade(hab.nome, enemy);
        } else {
          // ataque básico
          if (chanceAcerta(player.atributos.agilidade, enemy.agilidade)) {
            const dano = calculoDano(player, enemy, 2, 'Força');
            enemy.vida -= dano;
            if (enemy.vida < 0) enemy.vida = 0;
            console.log(`${player.nome} atacou ${enemy.nome} e causou ${dano} de dano. (vida inimigo: ${enemy.vida})`);
          } else {
            console.log(`${player.nome} errou o ataque!`);
          }
        }
      } else {
        console.log(`${player.nome} está atordoado e perde o turno.`);
      }

      if (enemy.vida <= 0) break;

      // turno do inimigo
      aplicarStatusEffects(enemy);
      if (enemy.vida <= 0) break;
      const stunnedEnemy = enemy.statusEffects.some(s => s.tipo === 'stun');
      if (!stunnedEnemy) {
        if (chanceAcerta(enemy.agilidade, player.atributos.agilidade)) {
          const dano = calculoDano({ atributos: { forca: enemy.dano } }, player, 1, 'Força');
          player.vida -= dano;
          if (player.vida < 0) player.vida = 0;
          console.log(`${enemy.nome} atacou ${player.nome} e causou ${dano} de dano. (vida: ${player.vida})`);
        } else {
          console.log(`${enemy.nome} errou o ataque!`);
        }
      } else {
        console.log(`${enemy.nome} está atordoado e perde o turno.`);
      }
    } else {
      // mesma lógica invertida quando inimigo ataca primeiro
      aplicarStatusEffects(enemy);
      if (enemy.vida <= 0) break;
      const stunnedEnemy = enemy.statusEffects.some(s => s.tipo === 'stun');
      if (!stunnedEnemy) {
        if (chanceAcerta(enemy.agilidade, player.atributos.agilidade)) {
          const dano = calculoDano({ atributos: { forca: enemy.dano } }, player, 1, 'Força');
          player.vida -= dano;
          if (player.vida < 0) player.vida = 0;
          console.log(`${enemy.nome} atacou ${player.nome} e causou ${dano} de dano. (vida: ${player.vida})`);
        } else {
          console.log(`${enemy.nome} errou o ataque!`);
        }
      } else {
        console.log(`${enemy.nome} está atordoado e perde o turno.`);
      }

      if (player.vida <= 0) break;

      aplicarStatusEffects(player);
      if (player.vida <= 0) break;
      const stunned = player.statusEffects.some(s => s.tipo === 'stun');
      if (!stunned) {
        const hab = player.habilidades.find(h => player.energia >= h.custo);
        if (hab) {
          console.log(`${player.nome} usa habilidade ${hab.nome}`);
          player.usarHabilidade(hab.nome, enemy);
        } else {
          if (chanceAcerta(player.atributos.agilidade, enemy.agilidade)) {
            const dano = calculoDano(player, enemy, 2, 'Força');
            enemy.vida -= dano;
            if (enemy.vida < 0) enemy.vida = 0;
            console.log(`${player.nome} atacou ${enemy.nome} e causou ${dano} de dano. (vida inimigo: ${enemy.vida})`);
          } else {
            console.log(`${player.nome} errou o ataque!`);
          }
        }
      } else {
        console.log(`${player.nome} está atordoado e perde o turno.`);
      }
    }
  }

  if (player.vida > 0) {
    console.log(`${player.nome} venceu o combate!`);
    player.ganharXP(50);
  } else {
    console.log(`${player.nome} foi derrotado...`);
  }
}

const Bairros = {
  Madureira: {
    descricao: "Berço do samba e cultura popular.",
    pontosDeInteresse: ["Mercadão", "Parque Madureira"],
  },
  Penha: {
    descricao: "Famosa pela Igreja da Penha.",
    pontosDeInteresse: ["Igreja da Penha"],
  },
  Meier: {
    descricao: "Centro cultural e histórico.",
    pontosDeInteresse: ["Imperator"],
  },
};

function eventoAleatorio(player) {
  const eventos = [
    "Você ajudou um morador e ganhou reputação!",
    "Um protesto começou na rua!",
    "Você encontrou um item raro!",
  ];
  const evento = eventos[Math.floor(Math.random() * eventos.length)];
  console.log(`🎲 Evento: ${evento}`);
}

function cenaAbertura() {
  console.log("🌅 Amanhecer em Madureira...");
  console.log("Mais um dia na Zona Norte...");
}

function iniciarJogo(nomeJogador) {
  const player = new Player(nomeJogador);
  cenaAbertura();
  console.log(`Bem-vindo, ${player.nome}!`);
  return player;
}

// Execução de teste quando executado diretamente
if (require.main === module) {
  const jogador = iniciarJogo("Pedro");

  const missao1 = new Mission("Explorar o Mercadão", "Investigar movimentações suspeitas.", 100);
  missao1.completar(jogador);

  const inimigo = new Enemy("Agente da Desinformação", 80, 10, "Inteligência");
  combater(jogador, inimigo);

  eventoAleatorio(jogador);

  // Demo: inventário e habilidades
  const pocao = new Item('Poção de Vida', 'consumivel', (alvo) => {
    const cura = 30;
    alvo.vida = Math.min(100, alvo.vida + cura);
    console.log(`${alvo.nome} usou Poção de Vida e recuperou ${cura} de vida. (vida: ${alvo.vida})`);
  });
  jogador.adicionarItem(pocao);
  jogador.usarItem('Poção de Vida', jogador);

  const golpe = new Skill('Golpe Forte', 20, (user, target) => {
    const dano = user.atributos.forca * 4;
    target.vida -= dano;
    if (target.vida < 0) target.vida = 0;
    console.log(`${user.nome} usou ${'Golpe Forte'} em ${target.nome} causando ${dano} de dano.`);
  });
  jogador.aprenderHabilidade(golpe);

  // recriar inimigo para demonstrar habilidade
  const inimigo2 = new Enemy('Vandal', 50, 8, 'Força');
  jogador.usarHabilidade('Golpe Forte', inimigo2);
  if (inimigo2.vida > 0) inimigo2.atacar(jogador);

  // Salvar e recarregar demonstração
  const savePath = 'game/save.json';
  salvarJogo(jogador, savePath);
  const jogadorCarregado = carregarJogo(savePath);
  if (jogadorCarregado) {
    console.log(`Jogador recarregado: ${jogadorCarregado.nome}, nível ${jogadorCarregado.level}, vida ${jogadorCarregado.vida}`);
  }
}

module.exports = {
  GameConfig,
  Attributes,
  Player,
  Mission,
  Enemy,
  combater,
  Bairros,
  eventoAleatorio,
  iniciarJogo,
  Item,
  Skill,
  salvarJogo,
  carregarJogo,
};
