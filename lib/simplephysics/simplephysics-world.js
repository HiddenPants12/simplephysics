export var exports = {};

class World {
    gameobjects = [];
    gravity = new Vector(0, 1);
    renderer = null;

    constructor(renderer) {
        this.renderer = renderer;
    }

    update(delta) {

    }
}

exports = {
    World: World
}