import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { projetos_github } from '../../../assets/data/projetos_gihtub'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{


  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

  }

}
