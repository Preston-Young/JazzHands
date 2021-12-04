
//TODO: If you would like to expose additional data from the handtracker component,
//extend this class with additional properties.

export class PredictionEvent {
    prediction: string = "None";
    xCoor:Number = null;

    constructor(prediction:string, xCoor:Number){
        this.prediction = prediction;
        this.xCoor = xCoor;
    }

    public getPrediction(){
        return this.prediction;
    }

    public getCoordinate() {
        return this.xCoor;
    }
}
