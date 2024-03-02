import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sections-contato',
  templateUrl: './sections-contato.component.html',
  styleUrls: ['./sections-contato.component.css']
})
export class SectionsContatoComponent implements OnInit{
  @Input()
  contatoTitle:string = ""

  constructor() {}
  ngOnInit(): void {

  }
}
