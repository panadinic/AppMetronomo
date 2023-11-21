import { Component } from '@angular/core';
import { PhotoService } from './services/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.loadSavedPhotos();
  }
  
}
