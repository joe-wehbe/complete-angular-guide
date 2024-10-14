import { Component } from '@angular/core';
import { HeaderComponent } from "./header.component";

// decorator (adds additional metadata to the class)
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
