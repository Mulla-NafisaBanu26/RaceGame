var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // stone CLASS ++++++++++++++++++++++++++++++++++++
    var stone = (function (_super) {
        __extends(stone, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function stone() {
            _super.call(this, "stone");
            this._speed.y = 5; //stone speed
            this._reset(this._topBounds);
            this.name = "stone";
            this.soundString = "yay";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        stone.prototype._checkBounds = function (value) {
            // check to see if the top of the stone 
            // is outside the viewport         
            if (this.y >= value) {
                this._reset(this._topBounds);
            }
        };
        // reset the ocean offscreen
        stone.prototype._reset = function (value) {
            this.y = value;
            this.x = Math.floor(Math.random() * this._rightBounds) + this._leftBounds;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        stone.prototype.update = function () {
            // scroll the stone 5 px per frame
            this.y += this._speed.y;
            this._checkBounds(this._bottomBounds);
        };
        return stone;
    }(objects.GameObject));
    objects.stone = stone;
})(objects || (objects = {}));

//# sourceMappingURL=stone.js.map
