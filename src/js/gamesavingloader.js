import read from './reader';
import json from './parser';
import GameSaving from './game_saving';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const response = await json(data);
      const saving = new GameSaving(JSON.parse(response));
      return saving;
    } catch (error) {
      return error;
    }
  }
}
