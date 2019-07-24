import { Component, OnInit, Input } from '@angular/core';
import { SongInfo } from '../model/song-info';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css']
})
export class SongDetailsComponent implements OnInit {

  @Input()
  song: SongInfo;

  constructor() { }

  ngOnInit() {
  }

}
