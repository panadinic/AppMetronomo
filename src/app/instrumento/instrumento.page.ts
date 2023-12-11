
import { Component } from '@angular/core';
import { PolySynth,  Gain, Compressor } from 'tone';

@Component({
  selector: 'app-instrumento',
  templateUrl: './instrumento.page.html',
  styleUrls: ['./instrumento.page.scss'],
})
export class InstrumentoPage {
  isLoopPlaying: boolean = false;
  compressor: Compressor;
  polySynth: PolySynth;
  maxNotes: number = 5;
  selectedNotes: string[] = [];
  loop: any = null; // Variable para almacenar el loop
  playingNotes: Set<string> = new Set();
  gainNode: Gain;
  lowOctaves: string[] = ['C2','C#2', 'D2','D#2', 'E2', 'F2','F#2', 'G2','G#2', 'A2','A#2', 'B2'];
  lowOctaves2: string[] = ['C3','C#3', 'D3','D#3', 'E3', 'F3','F#3', 'G3','G#3', 'A3','A#3', 'B3'];
  highOctaves: string[] = ['C4','C#4', 'D4','D#4', 'E4', 'F4','F#4', 'G4','G#4', 'A4','A#4', 'B4'];
  highOctaves2: string[] = ['C5','C#5', 'D5','D#5', 'E5', 'F5','F#5', 'G5','G#5', 'A5','A#5', 'B5'];

  
  constructor() {
    // Inicializa el compresor
    this.compressor = new Compressor({
      threshold: -30,
      ratio: 3,
      attack: 0.005,
      release: 0.1
    });

    // Inicializa el PolySynth
    this.polySynth = new PolySynth({
      volume: 0 // Volumen inicial
    });

    // Inicializa el nodo de ganancia
    this.gainNode = new Gain(1);

    // Conecta el PolySynth al Compressor y luego al Gain
    this.polySynth.connect(this.compressor);
    this.compressor.connect(this.gainNode);

    // Conecta el Gain al destino (salida de audio)
    this.gainNode.toDestination();
  }



  toggleNoteSelection(note: string) {
    const noteIndex = this.selectedNotes.indexOf(note);
    if (noteIndex > -1) {
      this.selectedNotes.splice(noteIndex, 1);
      if (this.loop) {
        this.polySynth.triggerRelease(note);
        this.playingNotes.delete(note); // Remueve la nota del conjunto de notas en reproducción
      }
    } else {
      if (this.selectedNotes.length < this.maxNotes) {
        this.selectedNotes.push(note);
        if (this.loop) {
          this.polySynth.triggerAttack(note);
          this.playingNotes.add(note); // Agrega la nota al conjunto de notas en reproducción
        }
      }
    }
  }
  

  playLoop() {
    if (!this.isLoopPlaying) {
      this.selectedNotes.forEach(note => {
        this.polySynth.triggerAttack(note);
        this.playingNotes.add(note); // Agrega la nota al conjunto de notas en reproducción
      });
      this.isLoopPlaying = true;
    }
  }
  
  stopLoop() {
    if (this.isLoopPlaying) {
      this.playingNotes.forEach(note => {
        this.polySynth.triggerRelease(note);
      });
      this.playingNotes.clear(); // Limpia el conjunto de notas en reproducción
      this.isLoopPlaying = false;
    }
  }
  
  
  

  changeVolume(event: any) {
    const volumeValue = event.detail.value; // Valor del rango, de 0 a 1
    const maxGainValue = 1.5; // Ajusta este valor para aumentar el volumen máximo
    this.gainNode.gain.value = volumeValue * maxGainValue; // Ajusta el nivel de ganancia
  }
  
 
    
  

  
  


}







