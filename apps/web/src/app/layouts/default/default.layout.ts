import { AfterViewInit, Component, NgModule, ViewChild } from '@angular/core';
import { ResizeService } from '../../services/resize/resize.service';
import { MatDrawer } from '@angular/material/sidenav';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

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
    id: 'departments',
    label: 'Departments',
    routerLink: 'departments',
  },
  {
    id: 'members',
    label: 'Members',
    routerLink: 'members',
  },
  {
    id: 'users',
    label: 'Users',
    routerLink: 'users',
  },
  {
    id: 'weapons',
    label: 'Weapons',
    routerLink: 'weapons',
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
  imports: [
    CommonModule,
    RouterModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
  declarations: [DefaultLayoutComponent],
  exports: [DefaultLayoutComponent],
})
export class DefaultLayoutModule {}
