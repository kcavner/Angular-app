import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  shouldApplyClass: boolean = true;


  getDynamicClass(): string{

      // Your condition here
      return this.shouldApplyClass ? 'hidden' : '';
  }

  toggleClass() {
    this.shouldApplyClass = !this.shouldApplyClass;
  }


}
