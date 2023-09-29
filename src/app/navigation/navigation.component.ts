import { Component } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {
  barSvg = "/assets/svg/barSolid.svg"
  staggeredBarSvg = "/assets/svg/bars-staggered-solid.svg"
  fileSvg = "/assets/svg/file-regular.svg"
  openFolderSvg = "/assets/svg/folder-open.svg"
  folderSvg = "/assets/svg/folder-regular.svg"

  shouldApplyClass: boolean = true;
  currentBarSvg: string = this.barSvg

  getDynamicClass(): string{
      return this.shouldApplyClass ? 'hidden' : '';
  }

  toggleSvg() {
    this.currentBarSvg = this.currentBarSvg === this.barSvg ? this.staggeredBarSvg : this.barSvg;
    this.toggleClass()
  }

  toggleClass() {
    this.shouldApplyClass = !this.shouldApplyClass;
  }

}
