import { Component, OnInit } from '@angular/core';
import { PredictionEvent } from 'src/app/prediction-event';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name:string = null;
  profile_pic:string = "../../../assets/unknown.jpg";
  profile_link:string = null;

  //TODO: inject the Spotify service
  constructor(private service: SpotifyService) { }

  ngOnInit() {
  }

  openAboutMe() {
    this.service.aboutMe().then(response => {
      this.name = response.name;
      this.profile_pic = response.imageURL;
      this.profile_link = response.spotifyProfile;
    });
  }

  /*TODO: create a function which gets the "about me" information from Spotify when the button in the view is clicked.
  In that function, update the name, profile_pic, and profile_link fields */
  onAboutMe() {
    this.openAboutMe();
  }

  onGestureChange(prediction_event: PredictionEvent) {
    if (prediction_event.getPrediction() === "Open Hand") {
      this.openAboutMe();
    }
  }
}
