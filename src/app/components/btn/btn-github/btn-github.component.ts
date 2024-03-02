import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-github',
  templateUrl: './btn-github.component.html',
  styleUrls: ['./btn-github.component.css']
})
export class BtnGithubComponent implements OnInit{
  @Input()
  linkBtnGithub:string = "https://github.com/elizabetefabri"

  constructor() {}

  ngOnInit(): void {

  }

}
