import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

// decorator (adds additional metadata to the class)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)! // find() allows us to find an element in an array
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
