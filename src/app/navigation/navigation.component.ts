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
  openFolderSvg = "/assets/svg/folder-open-regular.svg"
  folderSvg = "/assets/svg/folder-regular.svg"

  shouldApplyClass: boolean = true;
  shouldApplyFolderClass: boolean = true;
  currentBarSvg: string = this.barSvg
  currentFolderSvg: string = this.folderSvg

  getDynamicClass(): string{
      return this.shouldApplyClass ? 'hidden' : '';
  }

  toggleBarSvg() {
    this.currentBarSvg = this.currentBarSvg === this.barSvg ? this.staggeredBarSvg : this.barSvg;
    this.toggleClass()
  }
  toggleFolderSvg() {
    this.currentFolderSvg = this.currentFolderSvg === this.folderSvg ? this.openFolderSvg : this.folderSvg;
    this.toggleFolderClass()
  }

  toggleClass() {
    this.shouldApplyClass = !this.shouldApplyClass;
  }
  toggleFolderClass() {
    this.shouldApplyFolderClass = !this.shouldApplyFolderClass;
  }

}
