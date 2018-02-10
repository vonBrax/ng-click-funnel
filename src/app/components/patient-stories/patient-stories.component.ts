import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
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

  @ViewChild('iframe')
  iframe: ElementRef;

  strings: any;
  videos: Video[];
  activeVideo: Video;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.strings = Strings.patient_stories;
    this.videos = this.strings.videos;
    this.activeVideo = this.videos[0];
  }

  switchVideos(i: number): void {
    this.renderer.setAttribute(this.iframe.nativeElement, 'src', this.videos[i].url);
    this.activeVideo = this.videos[i];
  }
}
