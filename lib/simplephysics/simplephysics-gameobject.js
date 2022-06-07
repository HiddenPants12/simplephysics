export var exports = {};
import { exports as spmath } from './simplephysics-math.js';

class GameObject {
    rotation = 0;
    position;
    velocity;
    forces = [];
    world;
    imports = {};
    flags = {
        static: false,
        gravity: true
    };

    constructor(position = new spmath.Vector2(0, 0)) {
        this.position = position;
        this.velocity = new spmath.Vector2(0, 0);
    }

    update(delta) {

    }

    addImport(type) {

    }
}

exports = {
    GameObject: GameObject
}