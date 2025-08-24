export const pxtex = (
  c,
  H,
  S,
  L,
  v = 10,
  w = 10,
  h = 10,
  x = c.getContext`2d`,
  i,
  j,
  m = Math.random
) => {
  for (c.width = w, c.height = h, i = w; i--; )
    for (j = h; j--; )
      (x.fillStyle = `hsl(${H + (m() - 0.5) * v},${S + (m() - 0.5) * v}%,${
        L + (m() - 0.5) * v
      }%)`),
        x.fillRect(i, j, 1, 1);
  return c.toDataURL();
};

export const createStore = (e) => {
  let t = { ...e };
  const n = [];
  return {
    get: () => ({ ...t }),
    set: (e) => ((t = { ...t, ...e }), n.forEach((e) => e(t))),
    subscribe: (e) => (
      n.push(e),
      () => {
        const r = n.indexOf(e);
        r > -1 && n.splice(r, 1);
      }
    ),
  };
};
