import { Component, EventEmitter, Input, Output} from '@angular/core';

// TYPE ALIAS
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

// INTERFACE (another way of defining an object type)
interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  /**************** INPUT WITH DECORATOR ****************/

  // @Input are used to add properties to the component
  @Input({ required: true }) user!: User;  // '!' indicates that the variable will be set to some value
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  // This is a user object type, we can outsource it with a type alias
  // @Input({ required: true }) user!: {
  //   id: string;
  //   avatar: string;
  //   name: string;
  // }

  // Getter for the image path
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  /***************** INPUT WITH SIGNALS *****************/

  // avatar = input.required<string>() // you can pass an initial value
  // name = input.required<string>()

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar;
  // })

  /**************** OUTPUT WITH DECORATOR ****************/

  // @Output are used to emit events when the component is used
  @Output() select = new EventEmitter();

  /************* ALTERNATIVE OUTPUT (MODERN) *************/
  // select = output<string>(); // EventEmitter will automatically be created


  // This function emits an event (sending the user id) once a component is selected
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
