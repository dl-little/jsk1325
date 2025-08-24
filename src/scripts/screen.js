import { pxtex } from './helpers';
import { getAllPaletteThemes, getPaletteThemeBySlug } from './localStorage';

export const setScreenBackground = (themeOrHex = '') => {
  if (
    !Object.prototype.hasOwnProperty.call(getAllPaletteThemes(), themeOrHex)
  ) {
    document.getElementById('screen').style.background = themeOrHex;
    return;
  }
  let paletteArgsForTheme = getPaletteThemeBySlug(themeOrHex);

  document.getElementById('screen').style.background = `url(${pxtex(
    document.getElementById('palette'),
    ...paletteArgsForTheme
  )})`;
  return;
};
