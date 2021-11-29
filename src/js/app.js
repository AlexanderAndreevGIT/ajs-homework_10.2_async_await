/* eslint-disable arrow-body-style */
import GameSavingLoader from './gamesavingloader';

GameSavingLoader.load().then((saving) => {
  return saving;
}, (error) => {
  throw new Error(error);
});
