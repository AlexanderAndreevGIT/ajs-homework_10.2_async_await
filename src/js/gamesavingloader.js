import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const data = await read();
          const response = await json(data);
          return resolve(response);
        } catch (error) {
          return reject(error);
        }
      })();
    });
  }
}
