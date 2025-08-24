import { BlackCat } from './components/BlackCat';
import { pxtex } from './helpers';
import { setGameData } from './localStorage';
import { paletteThemes } from './paletteThemes';
import { setScreenBackground } from './screen';

const gameLoop = (keys, gameData) => {
  const { worldInfo, characterInfo, count } = gameData;
  switch (worldInfo.state) {
    case 1:
    case 2:
      setGameData({
        count: count,
      });
      break;
    default:
      if (!worldInfo.ranInit) {
        BlackCat.instance = new BlackCat('Kate', 'chef');
        setGameData(paletteThemes);
        worldInfo.ranInit = true;
      }

      const character = BlackCat.getInstance();
      character.sayHey();

      setScreenBackground('#bada55');

      if (keys.r) {
        setScreenBackground('#b4b');
      }

      setGameData({
        count: count,
      });
      break;
  }

  gameData.count++;
};

export default gameLoop;
