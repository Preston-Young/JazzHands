import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';
import { SpotifyService } from 'src/app/services/spotify.service';
import { PredictionEvent } from 'src/app/prediction-event';
import { HandtrackerComponent } from '../../components/handtracker/handtracker.component';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.css']
})
export class ArtistPageComponent implements OnInit {
	artistId:string;
	artist:ArtistData;
	relatedArtists:ArtistData[];
	topTracks:TrackData[];
	albums:AlbumData[];
  @ViewChild(HandtrackerComponent) child:HandtrackerComponent;

  constructor(private route: ActivatedRoute, private spotifyService:SpotifyService, private router:Router) { }

  ngOnInit() {
  	this.artistId = this.route.snapshot.paramMap.get('id');
    //TODO: Inject the spotifyService and use it to get the artist data, related artists, top tracks for the artist, and the artist's albums
    this.spotifyService.getArtist(this.artistId).then(data => {
      this.artist = data;
    });

    this.spotifyService.getRelatedArtists(this.artistId).then(data => {
      this.relatedArtists = data;
    });

    this.spotifyService.getTopTracksForArtist(this.artistId).then(data => {
      this.topTracks = data;
    });

    this.spotifyService.getAlbumsForArtist(this.artistId).then(data => {
      this.albums = data;
    })
  }

  prediction(event: PredictionEvent){
    if (event.getPrediction() == "Hand Pointing"){
      this.child.stopDetection();
      this.router.navigate(['/']);
    }
  }

}