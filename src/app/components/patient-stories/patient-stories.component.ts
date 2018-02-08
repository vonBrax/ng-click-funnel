import { Component, OnInit } from '@angular/core';
import { Strings } from '../../models/strings';

export interface Video {
  title: string;
  url: string;
}

@Component({
  selector: 'app-patient-stories',
  templateUrl: './patient-stories.component.html',
  styleUrls: ['./patient-stories.component.css']
})
export class PatientStoriesComponent implements OnInit {

  strings: any;
  videos: Video[];
  activeVideo: Video;

  constructor() { }

  ngOnInit() {
    this.strings = Strings.patient_stories;
    this.videos = this.strings.videos;
    this.activeVideo = this.videos[0];
  }

  switchVideos(i: number): void {
    this.activeVideo = this.videos[i];
  }
}
