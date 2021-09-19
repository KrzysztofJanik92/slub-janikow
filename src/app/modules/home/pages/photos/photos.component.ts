import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
  photosUrl: string = 'https://drive.google.com/drive/folders/1Yr4HvxNd1gHnTLga5EjbjLa3iZzJTP-7?usp=sharing';
}
