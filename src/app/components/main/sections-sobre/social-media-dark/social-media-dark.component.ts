import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media-dark',
  templateUrl: './social-media-dark.component.html',
  styleUrls: ['./social-media-dark.component.css']
})
export class SocialMediaDarkComponent implements OnInit{
  @Input()
  imageGit:string = ""
  @Input()
  linkGit:string = ""

  @Input()
  imageLinkedin:string = ""
  @Input()
  linkLinkedin:string = ""

  @Input()
  imageEmail:string = ""
  @Input()
  linkEmail:string = ""

  @Input()
  imageDownload:string = ""
  @Input()
  linkDownload:string = ""

  constructor() {}
  ngOnInit(): void {

  }
}
