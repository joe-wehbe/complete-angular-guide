import { Component, OnInit, inject, DestroyRef, signal, effect } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  // private interval?: ReturnType<typeof setInterval>; // Means that the type of interval is the type returned by setInterval
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      console.log(this.currentStatus());
    })
  }

  ngOnInit() {
    const interval = setInterval(() => {
      const rnd = Math.random(); // 0 - 0.99999999
      if(rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);


    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    })
  }

  // ngOnDestroy() {
  //   clearTimeout(this.interval);
  // }
}