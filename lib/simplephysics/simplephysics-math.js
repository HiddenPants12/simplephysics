export var exports = {};
var trig = {};

// basic angle functions
trig['toDeg'] = function(rad) {
    return rad * 180 / Math.PI;
}
trig['toRad'] = function(deg) {
    return deg * Math.PI / 180;
}
// normal trig functions
trig['sin'] = function(deg) {
    return Math.sin(trig['toRad'](deg));
}
trig['cos'] = function(deg) {
    return Math.cos(trig['toRad'](deg));
}
trig['tan'] = function(deg) {
    return Math.tan(trig['toRad'](deg));
}
// inverse trig functions
trig['asin'] = function(x) {
    return trig['toDeg'](Math.asin(x));
}
trig['acos'] = function(x) {
    return trig['toDeg'](Math.acos(x));
}
trig['atan'] = function(x) {
    return trig['toDeg'](Math.atan(x));
}
trig['atan2'] = function(x, y) {
    return trig['toDeg'](Math.atan2(y, x));
}

// other general functions
function pythag(a, b) {
    return Math.sqrt(a * a + b * b);
}

// Vector2 class (maybe the most important class in this whole framework lol, I wish javascript had structs :sob:)
class Vector2 {
    x = 0;
    y = 0;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // Basic vector operators
    add(a) {
        switch (typeof a) {
            case 'number':
                return new Vector2(this.x + a, this.y + a);
                break;
            case 'object':
                return new Vector2(this.x + a.x, this.y + a.y);
                break;
            break;
        }
    }

    sub(a) {
        switch (typeof a) {
            case 'number':
                return new Vector2(this.x - a, this.y - a);
                break;
            case 'object':
                return new Vector2(this.x - a.x, this.y - a.y);
                break;
            break;
        }
    }

    mul(a) {
        switch (typeof a) {
            case 'number':
                return new Vector2(this.x * a, this.y * a);
                break;
            case 'object':
                return new Vector2(this.x * a.x, this.y * a.y);
                break;
            break;
        }
    }

    div(a) {
        switch (typeof a) {
            case 'number':
                return new Vector2(this.x / a, this.y / a);
                break;
            case 'object':
                return new Vector2(this.x / a.x, this.y / a.y);
                break;
            break;
        }
    }

    // Other Vector methods
    getLength() {
        return pythag(this.x, this.y);
    }

    getDistanceTo(a) {
        return pythag(this.x - a.x, this.y - a.y);
    }

    getAngle() {
        return Math.atan2(this.y, this.x);
    }
}

// Polygon class
class Polygon {
    vertices = [];
    centerPoint = new Vector2(0, 0);

    constructor(vertices) {
        this.vertices = vertices;
        this.centerPoint = this.getCenterPoint();
    }

    getCenterPoint() {
        return this.centerPoint;
    }
}

exports = {
    pythag: pythag,
    Vector2: Vector2,
    trig: trig
}