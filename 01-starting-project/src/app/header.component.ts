import { Component } from '@angular/core'; // importing the component decorator

@Component({
    selector: 'app-header', // better to name it with two words to avoid clashes
    standalone: true, // if set to false it will be a module-based component
    templateUrl: './header.component.html',
    styleUrl: './header.component.css' // styleUrls: link to multiple css files & styles: inline css
})
export class HeaderComponent {}