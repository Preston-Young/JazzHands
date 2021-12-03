import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';
import { SpotifyService } from 'src/app/services/spotify.service';
import { PredictionEvent } from 'src/app/prediction-event';
import { HandtrackerComponent } from '../../components/handtracker/handtracker.component';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.css']
})
export class AlbumPageComponent implements OnInit {
	albumId:string;
	album:AlbumData;
	tracks:TrackData[];
  @ViewChild(HandtrackerComponent) child:HandtrackerComponent;


  constructor(private route: ActivatedRoute, private spotifyService:SpotifyService, private router:Router) { }

  ngOnInit() {
  	this.albumId = this.route.snapshot.paramMap.get('id');
  	//TODO: inject spotifyService and use it to get the album data and the tracks for the album
    
    this.spotifyService.getAlbum(this.albumId).then(data => {
      this.album = data;
    });

    this.spotifyService.getTracksForAlbum(this.albumId).then(data => {
      this.tracks = data;
    })
  }

  prediction(event: PredictionEvent){
    if (event.getPrediction() == "Hand Pointing"){
      this.child.stopDetection();
      this.router.navigate(['/']);
    }
  }

}
