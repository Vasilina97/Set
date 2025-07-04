// team.js
export default class Team {
  constructor() {
    this.members = new Set();
  }

  /**
   * Добавляет персонажа в команду
   * @param {Character} character - персонаж для добавления
   * @throws {Error} если персонаж уже в команде
   */
  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж уже находится в команде');
    }
    this.members.add(character);
  }

  /**
   * Добавляет несколько персонажей в команду
   * @param {...Character} characters - персонажи для добавления
   */
  addAll(...characters) {
    characters.forEach(character => {
      this.members.add(character); // Set автоматически исключает дубликаты
    });
  }

  /**
   * Преобразует Set в массив
   * @return {Array} массив персонажей
   */
  toArray() {
    return [...this.members]; // Альтернатива: Array.from(this.members)
  }
}