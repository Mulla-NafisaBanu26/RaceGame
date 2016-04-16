var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // life CLASS ++++++++++++++++++++++++++++++++++++
    var life = (function (_super) {
        __extends(life, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function life() {
            _super.call(this, "life");
            this._speed.y = 0.7; //life speed
            this._reset(this._topBounds);
            this.name = "life";
            this.soundString = "yay";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        life.prototype._checkBounds = function (value) {
            // check to see if the top of the life 
            // is outside the viewport         
            if (this.y >= value) {
                this._reset(this._topBounds);
            }
        };
        // reset the ocean offscreen
        life.prototype._reset = function (value) {
            this.y = value;
            this.x = Math.floor(Math.random() * this._rightBounds) + this._leftBounds;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        life.prototype.update = function () {
            // scroll the life 5 px per frame
            this.y += this._speed.y;
            this._checkBounds(this._bottomBounds);
        };
        return life;
    }(objects.GameObject));
    objects.life = life;
})(objects || (objects = {}));

//# sourceMappingURL=life.js.map
