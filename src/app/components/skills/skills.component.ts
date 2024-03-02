import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  @Input()
  titleSkills:string = ""
  @Input()
  imgSkills1:string = ""
  @Input()
  linkSkills1:string = ""

  @Input()
  imgSkills2:string = ""
  @Input()
  linkSkills2:string = ""

  @Input()
  imgSkills3:string = ""
  @Input()
  linkSkills3:string = ""

  @Input()
  imgSkills4:string = ""
  @Input()
  linkSkills4:string = ""

  @Input()
  imgSkills5:string = ""
  @Input()
  linkSkills5:string = ""

  @Input()
  imgSkills6:string = ""
  @Input()
  linkSkills6:string = ""

  @Input()
  imgSkills7:string = ""
  @Input()
  linkSkills7:string = ""

  @Input()
  imgSkills8:string = ""
  @Input()
  linkSkills8:string = ""

  @Input()
  imgSkills9:string = ""
  @Input()
  linkSkills9:string = ""

  @Input()
  imgSkills10:string = ""
  @Input()
  linkSkills10:string = ""

  constructor() {}

  ngOnInit(): void {

  }
}
