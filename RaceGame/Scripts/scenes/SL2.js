var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// SL2 SCENE
var scenes;
(function (scenes) {
    var SL2 = (function (_super) {
        __extends(SL2, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function SL2() {
            _super.call(this);
        }
        // PRIVATE METHODS
        /**
         * @method _updateScore
         * @return void
         */
        SL2.prototype._updateScore = function () {
            this._livesLabel.text = "Lives: " + livesValue;
            this._scoreLabel.text = "Score: " + scoreValue;
            this._LEVELSTART.text = "";
        };
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        SL2.prototype.start = function () {
            carimage = "car2";
            // Set Cloud Count
            this._cloudCount = 3;
            this._second = 0;
            // Instantiate Cloud array
            this._clouds = new Array();
            // added ocean to the scene
            this._level2 = new objects.level2();
            this.addChild(this._level2);
            // added island to the scene
            this._island = new objects.Island();
            this.addChild(this._island);

            this._stone = new objects.stone();
            this.addChild(this._stone);

            
            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);



            this._LEVELSTART = new objects.Label("", "40px Consolas", "#ffff00", config.Screen.CENTER_X-90, config.Screen.CENTER_Y - 80, false);
            this.addChild(this._LEVELSTART);

            //added clouds to the scene
            for (var cloud = 0; cloud < this._cloudCount; cloud++) {
                this._clouds[cloud] = new objects.Cloud();
                this.addChild(this._clouds[cloud]);
            }
            this._livesLabel = new objects.Label("Lives: " + livesValue, "20px Consolas", "#00ffff", 300, 10, false);
            this.addChild(this._livesLabel);
            //added LivesLabel to the scene
            this._scoreLabel = new objects.Label("Score: " + scoreValue, "20px Consolas", "#00ffff", 520, 10, false);
            this.addChild(this._scoreLabel);


            this._logoutBTN = new objects.Button("logout", 100, 30, true);
            this.addChild(this._logoutBTN);


            this._logoutBTN.on("click", this.LogoutClick, this);


            this._Level = new objects.Label("Level: " + 2, "20px Consolas", "#00ffff", 400, 10, false);
            this.addChild(this._Level);

            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };



        SL2.prototype.LogoutClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.MENU;
            changeScene();
        };


        // SL2 Scene updates here
        SL2.prototype.update = function () {

         

            var _this = this;
            this._level2.update();
            this._island.update();
            this._stone.update();
            this._player.update();
            this._clouds.forEach(function (cloud) {

                cloud.update();
                _this._collision.check(cloud);
            });
            this._collision.check(this._island);
            this._collision.check(this._stone);
            this._updateScore();
        };
        return SL2;
    }(objects.Scene));
    scenes.SL2 = SL2;
})(scenes || (scenes = {}));

//# sourceMappingURL=SL2.js.map
