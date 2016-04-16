var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // level2 CLASS ++++++++++++++++++++++++++++++++++++
    var level2 = (function (_super) {
        __extends(level2, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function level2() {
            _super.call(this, "2IMG");
            this._speed.y = 5; //level2 speed
            this._reset(-960);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        level2.prototype._checkBounds = function (value) {
            // check to see if the top of the level2 
            // is met the top of the scene
            if (this.y >= value) {
                this._reset(-960);
            }
        };
        // reset the level2 offscreen
        level2.prototype._reset = function (value) {
            this.y = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        level2.prototype.update = function () {
            // scroll the level2 5 px per frame
            this.y += this._speed.y;
            this._checkBounds(0);
        };
        return level2;
    }(objects.GameObject));
    objects.level2 = level2;
})(objects || (objects = {}));

//# sourceMappingURL=level2.js.map
