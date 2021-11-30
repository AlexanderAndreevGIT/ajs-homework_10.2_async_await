/* eslint-disable arrow-body-style */
import GameSavingLoader from './gamesavingloader';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log(saving)
    return saving;
  } catch (error) {
    return error;
  }
})();



// GameSavingLoader.load().then((saving) => {
//   return saving;
// }, (error) => {
//   throw new Error(error);
// });
