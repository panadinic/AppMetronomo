import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.page.html',
  styleUrls: ['./geo.page.scss'],
})
export class GeoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  async ionViewDidEnter() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      console.log('Current position:', coordinates);
    } catch (error) {
      console.error('Error getting current position:', error);
    }
  }



  async requestPermission() {
    const status = await Geolocation.checkPermissions();
    if (status.location === 'granted') {
      // Ya tienes permiso
    } else if (status.location === 'denied') {
      // Necesitas solicitar permiso al usuario
      const permission = await Geolocation.requestPermissions();
      if (permission.location === 'granted') {
        // Permiso otorgado
      }
    }
  }



}
