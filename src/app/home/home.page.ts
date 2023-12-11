import { Component, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PhotoService } from '../services/photo.service';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { Geolocation } from '@capacitor/geolocation';
import { MenuController } from '@ionic/angular';
import { ProductListPage } from '../producto/product-list/product-list.page';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  private tapTimes: number[] = [];
  sliderValue: number = 20;
  tempoVariation: number = 50;
  volume: number = 50;
  metric: string = '4/4';
  metronomeOn: boolean = false;
  isMuted: boolean = false;

  username: string = '';
  @ViewChild('clickSound') clickSound: any;

  private interval: any;
  private isPlaying: boolean = false;

    // Declaración de las opciones de sonido y el sonido seleccionado
    soundOptions: any[] = [
      { name: 'Clasic', path: 'assets/CLASIC_BEAT.mp3' },
      { name: 'Cubase_High', path: 'assets/CUBASE_HIGH2.mp3' },
      { name: 'Cubase_Low', path: 'assets/CUBASE_LOW2.mp3' },
      // Agrega más opciones de sonido según sea necesario
    ];

    selectedSound: any = this.soundOptions[0];

    constructor(private platform: Platform, 
                private router: Router, 
                private route: ActivatedRoute, 
                private navCtrl: NavController,
                public photoService: PhotoService,
                private menu: MenuController ){

    defineCustomElements(window);             

    this.route.params.subscribe(params => {
      this.username = params['username'];
    });

    this.sliderValue = 40;

  }

  toggleMute() {
    this.isMuted = !this.isMuted;
  
    if (this.isMuted) {
      this.muteSound();
    } else {
      this.unmuteSound();
    }
  }
  
  private muteSound() {
    // Pausar o silenciar el sonido según tu lógica específica
    // Ejemplo para un elemento de audio HTML:
    this.clickSound.nativeElement.muted = true;
  }
  
  private unmuteSound() {
    // Reanudar o restablecer el sonido según tu lógica específica
    // Ejemplo para un elemento de audio HTML:
    this.clickSound.nativeElement.muted = false;
  }

  updateMetronome() {
    if (this.metronomeOn) {
      this.startMetronome();
    }
  }
  

  increaseBPM() {
    if (this.sliderValue < 300) {
      this.sliderValue++;
      this.updateMetronome();
    }
  }
  
  decreaseBPM() {
    if (this.sliderValue > 40) {
      this.sliderValue--;
      this.updateMetronome();
    }
  }
  


  onSliderChange(event: any) {
    this.sliderValue = event.detail.value;
    this.updateMetronome();
  }
  
  tapTempo() {
    const now = Date.now();
  
    // Si el último tap fue hace más de 2 segundos, reinicia el arreglo
    if (this.tapTimes.length && now - this.tapTimes[this.tapTimes.length - 1] > 2000) {
      this.tapTimes = [];
    }
  
    this.tapTimes.push(now);
  
    // Calcula el tempo solo si hay al menos 2 toques
    if (this.tapTimes.length > 1) {
      let sumIntervals = 0;
      let countIntervals = 0;
  
      // Suma los intervalos entre los taps
      for (let i = 1; i < this.tapTimes.length; i++) {
        sumIntervals += (this.tapTimes[i] - this.tapTimes[i - 1]);
        countIntervals++;
      }
  
      const averageInterval = sumIntervals / countIntervals;
  
      // Convierte el intervalo promedio en BPM
      const newTempo = 60000 / averageInterval;
      this.sliderValue = Math.round(newTempo);
  
      // Actualiza el metrónomo si está encendido
      this.updateMetronome();
    }
  }
  
  

  toggleMetronome() {
    this.metronomeOn = !this.metronomeOn;

    if (this.metronomeOn) {
      this.startMetronome();
    } else {
      this.stopMetronome();
    }
  }
  startMetronome() {
    if (this.isPlaying) {
      this.stopMetronome();
    }
  
    const bpm = this.sliderValue;
    const intervalMs = (60 / bpm) * 1000;
  
    this.interval = setInterval(() => {
      if (this.metronomeOn) {
        this.playClickSound();
      }
    }, intervalMs);
  
    this.isPlaying = true;
  }
  
  

  stopMetronome() {
    if (this.interval) {
      clearInterval(this.interval);
      this.isPlaying = false;
    }
  }


  playClickSound() {
    console.log('Reproduciendo sonido...');

    if (this.platform.is('cordova')) {
      const clickSound = new Audio(this.selectedSound.path); // Utiliza el sonido seleccionado
      clickSound.volume = this.volume / 100;
      clickSound.play();
    } else {
      this.clickSound.nativeElement.src = this.selectedSound.path; // Utiliza el sonido seleccionado
      this.clickSound.nativeElement.volume = this.volume / 100;
      this.clickSound.nativeElement.play();
    }
  }

  volver() {
    this.router.navigate(['/login']);
  }



 

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }


  camara() {
    // Lógica para la opción 1

    this.router.navigate(['camara']);
    this.menu.close('end'); // Cierra el menú
  }

  geolocalizacion() {
    // Lógica para la opción 2
  
    this.router.navigate(['geo']);
    this.menu.close('end'); // Cierra el menú
  }
  
  home() {
    this.router.navigate(['home']);
    this.menu.close('end'); // Cierra el menú
  }
  
  productList() {
    this.router.navigate(['product-list']);
    this.menu.close('end'); // Cierra el menú
  }
}
