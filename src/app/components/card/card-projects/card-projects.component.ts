import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-projects',
  templateUrl: './card-projects.component.html',
  styleUrls: ['./card-projects.component.css']
})
export class CardProjectsComponent implements OnInit{
  @Input()
  imageProjectGit:string = ""
  @Input()
  linkProject:string = ""
  @Input()
  titleProjectGit:string = ""
  @Input()
  descricaoProjectGit:string = ""
  @Input()
  btnTopicGit:string = ""

  @Input()
  btnTopicGit1:string = ""

  @Input()
  btnTopicGit2:string = ""

  @Input()
  Id:string="0"

  constructor(

  ) { }

  ngOnInit(): void {

  }
}
