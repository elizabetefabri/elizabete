import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  @Input()
  footerCopyright:string = "Copyright © 2021"

  @Input()
  footerTextoLink:string = "Elizabete de Sousa Fabri"

  @Input()
  footerCopyright2:string = '"Nada substitui a persistência, nem mesmo o talento."'
  constructor() {}
  ngOnInit(): void {

  }
}
