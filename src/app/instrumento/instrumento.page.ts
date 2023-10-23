import { Component } from '@angular/core';
import { Synth } from 'tone';

@Component({
  selector: 'app-instrumento',
  templateUrl: './instrumento.page.html',
  styleUrls: ['./instrumento.page.scss'],
})
export class InstrumentoPage {
  synth: Synth;
  isNotePlaying: boolean = false;
  notes: string[] = [];

  constructor() {
    // Crea una instancia de Synth al inicializar el componente
    this.synth = new Synth().toDestination();
    // Genera las notas desde C2 hasta C6
    for (let octave = 2; octave <= 3; octave++) {
      const notesInOctave = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
      for (const note of notesInOctave) {
        this.notes.push(note + octave);
      }
    }
  }

  playOrStopNote(note: string) {
    if (this.isNotePlaying) {
      this.synth.triggerRelease();
      this.isNotePlaying = false;
    } else {
      this.synth.triggerAttack(note);
      this.isNotePlaying = true;
    }
  }
}






