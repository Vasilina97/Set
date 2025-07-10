import Team from './team';
import Character from './character';

const team = new Team();
const char1 = new Character('Лучник');
const char2 = new Character('Мечник');

team.add(char1);
team.addAll(char2, char1); // Дубликат не добавится

console.log(team.toArray());