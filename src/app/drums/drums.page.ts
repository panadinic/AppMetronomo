import { Component, OnInit } from '@angular/core';

const presetRhythms = [
  {
    name: "Rock",
    steps: ["kick", "snare", "kick", "snare", "kick", "snare", "kick", "snare"],
  },
  // Agrega más ritmos predeterminados
];

@Component({
  selector: 'app-drums',
  templateUrl: './drums.page.html',
  styleUrls: ['./drums.page.scss'],
})

export class DrumsPage implements OnInit {
  selectedRhythm: any; // Variable para almacenar el ritmo seleccionado

  presetRhythms = [
    {
      name: "Rock",
      steps: ["kick", "snare", "kick", "snare", "kick", "snare", "kick", "snare"],
    },
    // Agrega más ritmos predeterminados
  ];

  constructor() { }

  ngOnInit() {
  }

  playRhythm() {
    if (this.selectedRhythm) {
      for (const step of this.selectedRhythm.steps) {
        this.playNote(step);
      }
    }
  }

  playNote(step: string) {
    // Aquí debes implementar la lógica para reproducir el sonido de la batería según el paso (step) proporcionado.
  }
}
