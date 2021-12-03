import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';
import { TrackFeature } from '../../data/track-feature';
import { SpotifyService } from 'src/app/services/spotify.service';
import { PredictionEvent } from 'src/app/prediction-event';
import { HandtrackerComponent } from '../../components/handtracker/handtracker.component';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit {
	trackId:string;
	track:TrackData;
  audioFeatures:TrackFeature[];
  @ViewChild(HandtrackerComponent) child:HandtrackerComponent;

  constructor(private route: ActivatedRoute, private spotifyService:SpotifyService, private router:Router) { }

  ngOnInit() {
  	this.trackId = this.route.snapshot.paramMap.get('id');
  	//TODO: Inject the spotifyService and use it to get the track data and it's audio features
    this.spotifyService.getTrack(this.trackId).then(data => {
      this.track = data;
    });

    this.spotifyService.getAudioFeaturesForTrack(this.trackId).then(data => {
      this.audioFeatures = data;
    });
  }

  prediction(event: PredictionEvent){
    if (event.getPrediction() == "Hand Pointing"){
      this.child.stopDetection();
      this.router.navigate(['/']);
    }
  }
}
