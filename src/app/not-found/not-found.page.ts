import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements AfterViewInit {
  @ViewChild(IonCard, { read: ElementRef }) card?: ElementRef<HTMLIonCardElement>;
  private animation!: Animation;

  constructor(private animationCtrl: AnimationController, private router: Router) {}

  ngAfterViewInit() {
    // Verificar si el elemento del DOM está disponible
    if (this.card && this.card.nativeElement) {
      this.animation = this.animationCtrl
        .create()
        .addElement(this.card.nativeElement)
        .duration(1500)
        .iterations(Infinity)
        .direction('alternate')
        .fromTo('background', 'blue', 'var(--background)');
      this.play();
    }
  }

  ngOnInit() {}

  play() {
    this.animation?.play();
  }

  pause() {
    this.animation?.pause();
  }

  stop() {
    this.animation?.stop();
  }

  volver() {
    this.router.navigate(['/login']);
  }
}
