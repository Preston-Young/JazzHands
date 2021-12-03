import { Component, OnInit } from '@angular/core';
import { PredictionEvent } from 'src/app/prediction-event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.css']
})
export class PlayerPageComponent implements OnInit {
  gesture: String = "";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  prediction(event: PredictionEvent){
    if (event.getPrediction() == "Open Hand"){
      this.back();
    }
  }

  back() {
    this.router.navigate(['/']);
  }

}
