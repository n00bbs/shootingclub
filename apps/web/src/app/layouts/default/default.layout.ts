import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ResizeService } from '../../services/resize/resize.service';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-default-layout',
  styleUrl: './default.layout.scss',
  templateUrl: './default.layout.html',
})
export class DefaultLayoutComponent implements AfterViewInit {
  @ViewChild('sidebar') sidebar!: MatDrawer;
  private sidebarOpenStateChanged = false;
  private nextSidebarStateChangeAffection = true;

  constructor(private resizeService: ResizeService) {}

  ngAfterViewInit() {
    this.setupSidebar();
  }

  openedChange() {
    if (this.nextSidebarStateChangeAffection) {
      this.sidebarOpenStateChanged = true;
    }
    this.nextSidebarStateChangeAffection = true;
  }

  private setupSidebar() {
    this.resizeService.getIsMobile().subscribe((isMobile) => {
      this.sidebar.mode = isMobile ? 'over' : 'side';
      if (!this.sidebarOpenStateChanged) {
        this.nextSidebarStateChangeAffection = false;
        this.sidebar.opened = !isMobile;
      }
    });
  }
}
