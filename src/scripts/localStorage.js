export const getGameData = () => {
  let cachedEntry = localStorage.getItem('bcb_jsk1325');
  if (!cachedEntry) {
    return;
  }

  return JSON.parse(cachedEntry);
};

export const setGameData = (entry) => {
  let newCache = {
    ...getGameData(),
    ...entry,
  };

  localStorage.setItem('bcb_jsk1325', JSON.stringify(newCache));
};

export const getAllPaletteThemes = () => {
  let cachedEntry = getGameData();
  return cachedEntry.paletteThemes;
};

export const getPaletteThemeBySlug = (slug) => {
  let allThemes = getAllPaletteThemes();
  return allThemes[slug];
};
