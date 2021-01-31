import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  daysToWedding: number;

  constructor() { }

  ngOnInit(): void {
    this.setDaysToWedding();
  }

  setDaysToWedding() {
    const today = new Date();
    const weddingDate = new Date(2021, 6, 31);

    console.log(new Date(weddingDate));

    const difference = weddingDate.getTime() - today.getTime();

    this.daysToWedding = Math.ceil(difference / (1000 * 3600 * 24));
  }

}
