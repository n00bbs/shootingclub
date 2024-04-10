import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  createPlatform,
  NgModule,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ResizeService } from '../../services/resize/resize.service';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface SidebarElement {
  routerLink: string | string[];
  label: string;
  id: string;
}

const sidebarElements: SidebarElement[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    routerLink: 'dashboard',
  },
  {
    id: 'weapons',
    label: 'Weapons',
    routerLink: 'weapons',
  },
  {
    id: 'members',
    label: 'Members',
    routerLink: 'members',
  },
];

@Component({
  selector: 'app-default-layout',
  styleUrl: './default.layout.scss',
  templateUrl: './default.layout.html',
})
export class DefaultLayoutComponent implements AfterViewInit {
  @ViewChild('sidebar') sidebar!: MatDrawer;

  selectedSidebarElementId: string = '';

  sidebarElements: SidebarElement[] = sidebarElements;

  constructor(
    private resizeService: ResizeService,
    private router: Router,
  ) {}

  onSidebarElementSelect(sidebarElementId: string) {
    this.selectedSidebarElementId = sidebarElementId;
    const sidebarElement = this.sidebarElements.find(
      (elem) => elem.id === sidebarElementId,
    );
    if (!sidebarElement) return;
    const routerLink = Array.isArray(sidebarElement.routerLink)
      ? sidebarElement.routerLink
      : [sidebarElement.routerLink];
    this.router.navigate(routerLink);
  }

  ngAfterViewInit() {
    this.setupSidebar();
  }

  private setupSidebar() {
    this.resizeService.getIsMobile().subscribe((isMobile) => {
      this.sidebar.mode = isMobile ? 'over' : 'side';
      if (this.sidebar.opened && isMobile) {
        this.sidebar.opened = false;
      }
    });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [DefaultLayoutComponent],
  exports: [DefaultLayoutComponent],
})
export class DefaultLayoutModule {}
