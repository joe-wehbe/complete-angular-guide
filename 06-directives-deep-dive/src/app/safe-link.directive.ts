import { Directive, ElementRef, inject, input } from "@angular/core";
import { LogDirective } from "./log.directive";

@Directive({
  selector: 'a[appSafeLink]', // Use attribute selectors so that directives can be added like attributes
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)'
  },
  hostDirectives: [LogDirective]
})
export class SafeLinkDirective {
  queryParam = input('myapp', { alias: 'appSafeLink' }); // 'myapp as a default value'
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    console.log('SafeLinkDirective is active!');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the app?');

    if (wantsToLeave) {
      const address = this.hostElementRef.nativeElement.href; // getting the address where the user wants to go to
      this.hostElementRef.nativeElement.href = address + '?from=' + this.queryParam();
      return;
    }
    else {
      event.preventDefault();
    }
  }
}