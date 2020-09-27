import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() selectedLink = new EventEmitter<string>();

  selectNavigationLink(link: string){
    this.selectedLink.emit(link);

  }

}
