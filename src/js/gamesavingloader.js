import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const response = await json(data);
      const jsonData = JSON.parse(response);
      return jsonData;
    } catch (error) {
      return error;
    }
  }
}
