import { getGameData } from './localStorage';

export const handleMenuClick = (e, gameData) => {
  const { characterInfo } = gameData;
  console.log(getGameData());
};
