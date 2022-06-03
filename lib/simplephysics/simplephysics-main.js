export var exports = {};
import { exports as spmath } from './simplephysics-math.js';
import { exports as spgameobject } from './simplephysics-gameobject.js';
import { exports as sprenderer } from './simplephysics-renderer.js';
import { exports as spworld } from './simplephysics-world.js';
window.spmath = spmath;
window.spgameobject = spgameobject;
window.sprenderer = sprenderer;
window.spworld = spworld;

console.log(spmath);

exports = {
    spmath: spmath
}