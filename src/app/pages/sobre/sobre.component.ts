import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit{
  @Input()
  sobreTitle:string = ""
  @Input()
  sobreDescription:string = ""
  @Input()
  sobrePhoto:string = ""

  constructor() {  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
}
