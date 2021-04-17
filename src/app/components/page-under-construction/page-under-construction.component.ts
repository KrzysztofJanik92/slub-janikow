import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-under-construction',
  templateUrl: './page-under-construction.component.html',
  styleUrls: ['./page-under-construction.component.scss']
})
export class PageUnderConstructionComponent implements OnInit {
  daysToWedding: number;

  constructor() { }

  ngOnInit(): void {
    this.setDaysToWedding();
  }

  setDaysToWedding() {
    const today = new Date();
    const weddingDate = new Date(2021, 6, 31);

    const difference = weddingDate.getTime() - today.getTime();

    this.daysToWedding = Math.ceil(difference / (1000 * 3600 * 24));
  }

}
