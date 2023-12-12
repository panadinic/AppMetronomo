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
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage {

  private audioContext = new AudioContext();
  private nextTickTime = 0;
  private scheduleTimer?: number;
  private lookahead = 25; // ms, tiempo para mirar hacia adelante en el calendario
  private tickLength = 0.05; // segundos, duración de cada tick




  private tapTimes: number[] = [];
  sliderValue: number = 20;
  tempoVariation: number = 50;
  volume: number = 50;
  metric: string = '4/4';
  metronomeOn: boolean = false;
  isMuted: boolean = false;

  // username: string = '';

  username: string | null = null;
  @ViewChild('clickSound') clickSound: any;

  private interval: any;
  private isPlaying: boolean = false;


    soundOptions: any[] = [
      { name: 'High Sine', type: 'sine', frequency: 880 }, // Sine wave, high frequency
      { name: 'Low Sine', type: 'sine', frequency: 440 },  // Sine wave, low frequency
      { name: 'Square', type: 'square', frequency: 440 },  // Square wave
      // Agrega más opciones según sea necesario
    ];
    
    selectedSound: any = this.soundOptions[0];

    selectedSoundName: string = this.soundOptions[0].name;
    

    constructor(private platform: Platform, 
                private router: Router, 
                private route: ActivatedRoute, 
                private navCtrl: NavController,
                public photoService: PhotoService,
                private menu: MenuController,
                private authService: AuthService ){

               

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

  onSoundChange(event: any) {
    const newSoundName = event.detail.value;
    this.selectedSound = this.soundOptions.find(sound => sound.name === newSoundName);
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
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.nextTickTime = this.audioContext.currentTime;
      this.scheduler();
    }
  }
  
  stopMetronome() {
    this.isPlaying = false;
    clearTimeout(this.scheduleTimer);
  }
  

  playClickSound(time: number) {
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
  
    // Usa el tipo de onda y la frecuencia seleccionados
    oscillator.type = this.selectedSound.type;
    oscillator.frequency.value = this.selectedSound.frequency;
  
    gainNode.gain.value = this.volume / 100; // Controla el volumen
  
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
  
    oscillator.start(time);
    oscillator.stop(time + this.tickLength);
  }
  

  scheduler() {
    while (this.nextTickTime < this.audioContext.currentTime + this.lookahead / 1000) {
      this.playClickSound(this.nextTickTime);
      this.nextTickTime += 60 / this.sliderValue;
    }
    this.scheduleTimer = window.setTimeout(() => this.scheduler(), this.lookahead);
  }
  

  ngOnDestroy() {
    this.stopMetronome();
  }
  
  


  logout() {
    // Aquí limpias cualquier dato relacionado con el usuario o sesión
    // Por ejemplo, si estás usando localStorage para almacenar un token de autenticación:
    localStorage.removeItem('userToken');
    // O si tienes un servicio de autenticación, llama a su método de logout

    // Redirigir al usuario a la página de inicio de sesión
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
