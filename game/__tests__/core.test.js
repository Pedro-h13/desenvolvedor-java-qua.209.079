const fs = require('fs');
const path = require('path');
const {
  Player,
  Item,
  Skill,
  Enemy,
  salvarJogo,
  carregarJogo,
} = require('../core');

const SAVE_PATH = path.join(__dirname, '..', 'test_save.json');

afterAll(() => {
  if (fs.existsSync(SAVE_PATH)) fs.unlinkSync(SAVE_PATH);
});

test('player ganha XP e sobe de nível corretamente', () => {
  const p = new Player('Test');
  p.ganharXP(150); // deve consumir 100 e subir 1 nível, sobrando 50
  expect(p.level).toBe(2);
  expect(p.xp).toBe(50);
});

test('usar item consumível cura o jogador', () => {
  const p = new Player('Curandeiro');
  p.vida = 40;
  const pocao = new Item('Poção de Vida', 'consumivel', (alvo) => {
    const cura = 30;
    alvo.vida = Math.min(100, alvo.vida + cura);
  });
  pocao.cura = 30;
  p.adicionarItem(pocao);
  const used = p.usarItem('Poção de Vida', p);
  expect(used).toBe(true);
  expect(p.vida).toBeGreaterThan(40);
});

test('habilidade reduz vida do inimigo e consome energia', () => {
  const p = new Player('Guerreiro');
  p.energia = 100;
  const inimigo = new Enemy('Alvo', 50, 5, null);
  const skill = new Skill('TesteStrike', 20, (user, target) => {
    target.vida -= 18;
    if (target.vida < 0) target.vida = 0;
  });
  p.aprenderHabilidade(skill);
  const ok = p.usarHabilidade('TesteStrike', inimigo);
  expect(ok).toBe(true);
  expect(inimigo.vida).toBe(32);
  expect(p.energia).toBe(80);
});

test('salvar e carregar jogador preserva dados essenciais', () => {
  const p = new Player('Saver');
  p.vida = 70;
  const pocao = new Item('Poção de Vida', 'consumivel', () => {});
  pocao.cura = 30;
  p.adicionarItem(pocao);
  const skill = new Skill('Golpe Forte', 20, () => {});
  p.aprenderHabilidade(skill);

  salvarJogo(p, SAVE_PATH);
  expect(fs.existsSync(SAVE_PATH)).toBe(true);

  const loaded = carregarJogo(SAVE_PATH);
  expect(loaded).not.toBeNull();
  expect(loaded.nome).toBe('Saver');
  expect(loaded.habilidades.length).toBeGreaterThanOrEqual(1);
  expect(Array.isArray(loaded.inventario)).toBe(true);
});
