export var exports = {};

class Renderer {
    canvas = null;
    ctx = null;

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }
}

exports = {

}