import CardinalDirections from "../Utils/cardinalDirections.js"

class Compass {
    constructor(currentDirection = CardinalDirections.north) {
        this._currentDirection = currentDirection;
    };
    
    get currentDirection() {
        return this._currentDirection;
    }
    
    turnLeft() {
        switch (this.currentDirection.value) {
            case CardinalDirections.north.value:
                this._currentDirection = CardinalDirections.west;
                break;
            case CardinalDirections.east.value:
                this._currentDirection = CardinalDirections.north;
                break;
            case CardinalDirections.south.value:
                this._currentDirection = CardinalDirections.east;
                break;
            case CardinalDirections.west.value:
                this._currentDirection = CardinalDirections.south;
                break;
        }
    }
    
    turnRight() {
        switch (this.currentDirection.value) {
            case CardinalDirections.north.value:
                this._currentDirection = CardinalDirections.east;
                break;
            case CardinalDirections.east.value:
                this._currentDirection = CardinalDirections.south;
                break;
            case CardinalDirections.south.value:
                this._currentDirection = CardinalDirections.west;
                break;
            case CardinalDirections.west.value:
                this._currentDirection = CardinalDirections.north;
                break;
        }
    }
}

export default Compass;