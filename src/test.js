import Team from '../src/team';
import Character from '../src/character';

test('should add character to team', () => {
  const team = new Team();
  const character = new Character('Лучник');
  team.add(character);
  expect(team.toArray()).toEqual([character]);
});

test('should throw error when adding duplicate character', () => {
  const team = new Team();
  const character = new Character('Лучник');
  team.add(character);
  expect(() => team.add(character)).toThrow('Персонаж уже в команде');
});

test('should add multiple characters without duplicates', () => {
  const team = new Team();
  const char1 = new Character('Лучник');
  const char2 = new Character('Мечник');
  team.addAll(char1, char2, char1);
  expect(team.toArray()).toEqual([char1, char2]);
});

test('should convert Set to array', () => {
  const team = new Team();
  const character = new Character('Лучник');
  team.add(character);
  expect(team.toArray()).toBeInstanceOf(Array);
});