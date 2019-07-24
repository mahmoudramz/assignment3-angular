import { Component, OnInit } from '@angular/core';
import { MySongs } from '../model/my-songs';
import { SongInfo } from '../model/song-info';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  songs = MySongs;

  selectedSong: SongInfo;

  constructor() { }

  ngOnInit() {
  }

  onSelect(song: SongInfo): void {
    this.selectedSong = song;
  }

}
