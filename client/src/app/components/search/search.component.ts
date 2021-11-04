import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ResourceData } from '../../data/resource-data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ SpotifyService ]
})
export class SearchComponent implements OnInit {
  searchString:string;
  searchCategory:string = 'artist';
  searchCategories:string[] = ['artist', 'album', 'track'];
  resources:ResourceData[];
  carouselId: string = "carousel-id";

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  search() {
    //TODO: call search function in spotifyService and parse response

    // Only update category once search button is clicked, but can't update this.searchCategory too early or
    // else it might render the wrong carousel/track-list component before updating this.resources
    const searchDropdown = document.getElementById('category-dropdown') as HTMLSelectElement;
    const tempCategory = searchDropdown.options[searchDropdown.selectedIndex].value;

    this.spotifyService.searchFor(tempCategory, this.searchString).then(response => {
      this.resources = response;
      this.searchCategory = tempCategory;
    });
  }

}
