import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {
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
