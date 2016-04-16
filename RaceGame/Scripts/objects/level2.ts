module objects {
    // level2 CLASS ++++++++++++++++++++++++++++++++++++
    export class level2 extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("level2");
            
           this._speed.y = 5; //level2 speed
           this._reset(-960);
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the top of the level2 
            // is met the top of the scene
            
            if(this.y >= value) {
                this._reset(-960);
            }
        }
        
        // reset the level2 offscreen
        protected _reset(value:number):void {
            this.y = value;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the level2 5 px per frame
            this.y += this._speed.y;
            this._checkBounds(0);
        }
    }
}