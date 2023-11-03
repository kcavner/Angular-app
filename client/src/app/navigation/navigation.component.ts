import { Component } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {
  constructor(private router: Router) {}
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
      return this.shouldApplyClass ? 'hover:cursor-pointer hidden' : 'hover:cursor-pointer';
  }

  toggleBarSvg() {
    this.currentBarSvg = this.currentBarSvg === this.barSvg ? this.staggeredBarSvg : this.barSvg;
    this.toggleClass()
  }
  toggleFolderSvg() {
    this.currentFolderSvg = this.currentFolderSvg === this.folderSvg ? this.openFolderSvg : this.folderSvg;
    this.toggleFolderClass()
  }
  changeRoute(){
    this.router.navigate(['/notes'])
  }
  folderClick(){
    this.toggleFolderSvg()
    this.changeRoute()
  }
  toggleClass() {
    this.shouldApplyClass = !this.shouldApplyClass;
  }
  toggleFolderClass() {
    this.shouldApplyFolderClass = !this.shouldApplyFolderClass;
  }

}
