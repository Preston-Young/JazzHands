import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ResourceData } from '../../data/resource-data';
import { HandtrackerComponent } from '../handtracker/handtracker.component';
import { PredictionEvent } from 'src/app/prediction-event';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
	@Input() carouselId:string;
	@Input() resources:ResourceData[];
  @Input() resourceType:string;
  @ViewChild(HandtrackerComponent) child:HandtrackerComponent;
  xCorrdinates:Number[] = [];

  constructor() { }

  ngOnInit() {
  }

  onGestureChange(prediction_event: PredictionEvent) {
    if (prediction_event.getPrediction() === "Closed Hand") {
      this.xCorrdinates.push(prediction_event.getCoordinate());
      console.log("x coordinates: ", this.xCorrdinates);
      
      if (this.xCorrdinates.length == 3) {
        if (this.isSorted(this.xCorrdinates)) {
          console.log("success!");
          (<any>$('.carousel')).carousel('next');
          this.xCorrdinates = [];
        } else if (this.isInverseSorted(this.xCorrdinates)) {
          console.log("success here!");
          (<any>$('.carousel')).carousel('prev');
          this.xCorrdinates = []; 
        } else {
          this.xCorrdinates.shift();
        }
      }
    }
    else if (prediction_event.getPrediction() === "Two Open Hands") {
      this.child.stopDetection();
    }
  }

  isSorted(arr:Number[]) {
    let sorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i+1]) {
        sorted = false;
        break;
      }
    }

    return sorted;
  }

  isInverseSorted(arr:Number[]) {
    let sorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i+1]) {
        sorted = false;
        break;
      }
    }

    return sorted;
  }
}
