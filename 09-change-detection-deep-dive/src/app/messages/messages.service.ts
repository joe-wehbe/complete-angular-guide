import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private messages = signal<String[]>([])
  allMessages = this.messages.asReadonly();

  addMessage(message: string) {
    this.messages.update(oldMessages => [...oldMessages, message])
  }
}