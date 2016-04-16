var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // level3 CLASS ++++++++++++++++++++++++++++++++++++
    var level3 = (function (_super) {
        __extends(level3, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function level3() {
            _super.call(this, "3IMG");
            this._speed.y = 5; //level3 speed
            this._reset(-960);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        level3.prototype._checkBounds = function (value) {
            // check to see if the top of the level3 
            // is met the top of the scene
            if (this.y >= value) {
                this._reset(-960);
            }
        };
        // reset the level3 offscreen
        level3.prototype._reset = function (value) {
            this.y = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        level3.prototype.update = function () {
            // scroll the level3 5 px per frame
            this.y += this._speed.y;
            this._checkBounds(0);
        };
        return level3;
    }(objects.GameObject));
    objects.level3 = level3;
})(objects || (objects = {}));

//# sourceMappingURL=level3.js.map
