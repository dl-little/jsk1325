import '../styles/main.css';

// State
// =====

// (ex: 0: title screen, 1: game, 2: score screen)

state = 0;

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

keys = {};
onkeydown = onkeyup = (e) => {
  keys[
    'E**S***************s****lurd************************lBCr*F***J***N**lRdT*VuXYu'[
      e.which - 13
    ]
  ] = e.type[5];
};

// Game loop
// =========

setInterval(() => {
  if (state == 0) {
    // state 0 animation ...
  } else if (state == 1) {
    // state 1 animation ...
  }
  // ...
}, 16); // 60 fps

// Click handler
// =============

onclick = (e) => {
  if (state == 0) {
    // state 0 clicks ...
  } else if (state == 1) {
    // state 1 clicks ...
  }
  // ...
};
