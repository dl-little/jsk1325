import '../styles/root.css';
import '../styles/screen.css';
import gameLoop from './gameLoop';
import { handleMenuClick } from './clicks';

// Game Data
// =========
let gameData = {
  count: 0,
  characterInfo: {
    balls: 0,
  },
  worldInfo: {
    state: 0,
    ranInit: false,
    tools: {},
    objects: {},
  },
  paletteArgs: {},
};

// Prevent long touch effect on mobile
// ===================================
oncontextmenu = (e) => {
  e.preventDefault();
};

// Keyboard inputs
// ===============
// - u, l, r, d: WASD/ZQSD/arrow keys
// - s: space
// - S: shift
// - E: enter
// - R, T, Y, X, C, V, B, N, F, J: letters
// Ex: if(keys.r) { /* move to the right */ }
let keys = {};
onkeydown = onkeyup = (e) => {
  const map = {
    Enter: 'E',
    ShiftLeft: 'S',
    ShiftRight: 'S',
    Space: 's',
    KeyA: 'l',
    KeyQ: 'l',
    ArrowLeft: 'l',
    KeyD: 'r',
    ArrowRight: 'r',
    KeyW: 'u',
    KeyZ: 'u',
    ArrowUp: 'u',
    KeyS: 'd',
    ArrowDown: 'd',
    KeyR: 'R',
    KeyT: 'T',
    KeyY: 'Y',
    KeyX: 'X',
    KeyC: 'C',
    KeyV: 'V',
    KeyB: 'B',
    KeyN: 'N',
    KeyF: 'F',
    KeyJ: 'J',
  };
  const k = map[e.code];
  if (k) keys[k] = e.type[5];
};

// Game loop
// =========
setInterval(() => {
  gameLoop(keys, gameData);
}, 16); // 60 fps

// Click handler
// =============
onclick = (e) => {
  switch (gameData.worldInfo.state) {
    case 1:
    case 2:
      break;
    default:
      handleMenuClick(e, gameData);
      break;
  }
};

// Accept HMR
// ==========
if (module.hot) {
  module.hot.accept();
}
