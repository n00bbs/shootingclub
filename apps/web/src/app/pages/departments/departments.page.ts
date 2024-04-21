import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.page.html',
  styleUrls: ['./departments.page.scss'],
})
export class DepartmentsPageComponent {
  constructor() {}
}

@NgModule({
  imports: [CommonModule],
  declarations: [DepartmentsPageComponent],
  exports: [DepartmentsPageComponent],
})
export class DepartmentsPageModule {}
