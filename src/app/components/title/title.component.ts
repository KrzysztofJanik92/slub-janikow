import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  daysToWedding: string;

  constructor() { }

  ngOnInit(): void {
    this.setDaysToWedding();
  }

  setDaysToWedding() {
    const today = new Date();
    const weddingDate = new Date(2021, 6, 31);

    const difference = weddingDate.getTime() - today.getTime();

    const daysToWedding = Math.ceil(difference / (1000 * 3600 * 24));

    if (daysToWedding > 1) {
      this.daysToWedding = `Jeszcze ${daysToWedding} dni!`
    } else if (daysToWedding === 1) {
      this.daysToWedding = 'To już jutro!'
    } else if (daysToWedding === 0) {
      this.daysToWedding = 'To już dziś!'
    } else if (daysToWedding < 1) {
      this.daysToWedding = 'Dziękujemy za wspaniałe wesele!'
    }
  }

}
