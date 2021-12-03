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

  constructor() { }

  ngOnInit() {
  }

  onGestureChange(prediction_event: PredictionEvent) {
    if (prediction_event.getPrediction() === "Closed Hand") {
      (<any>$('.carousel')).carousel('prev');
    }
    else if (prediction_event.getPrediction() === "Open Hand") {
      (<any>$('.carousel')).carousel('next');
    }
    else if (prediction_event.getPrediction() === "Two Open Hands") {
      this.child.stopDetection();
    }
  }
}
