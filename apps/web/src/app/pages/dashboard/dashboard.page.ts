import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { dashboard } from '@repo/types';
import {
  DashboardService,
  DashboardServiceModule,
} from '../../services/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPageComponent implements OnInit {
  constructor(private dashboardService: DashboardService) {}
  member?: dashboard.getData.ResponsePayload;

  ngOnInit(): void {
    this.dashboardService.getData().then((result) => {
      this.member = result;
    });
  }
}

@NgModule({
  imports: [CommonModule, MatCardModule, DashboardServiceModule],
  declarations: [DashboardPageComponent],
  exports: [DashboardPageComponent],
})
export class DashboardPageModule {}
