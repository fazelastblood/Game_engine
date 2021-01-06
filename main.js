

class Renderer {
    constructor() {
        this._Init();
    }

    _Init() {
        this._canvas = document.createElement('canvas');

        document.body.appendChild(this._canvas);

        GL = this._canvas.getContext('webgl2');

        if (GL === null) {
            alert("something went wrong");
            return;
        }
    }

    Render (timeElapsed) {
    }
}
