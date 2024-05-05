import { departments } from '@repo/types';
import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import {
  DepartmentsService,
  DepartmentsServiceModule,
} from '../../services/departments';
import {
  DepartmentsCreateDialogComponent,
  DepartmentsCreateDialogComponentModule,
} from '../../components/departments-create-dialog/departments-create-dialog.component';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.page.html',
  styleUrls: ['./departments.page.scss'],
})
export class DepartmentsPageComponent implements OnInit {
  constructor(
    private departmentsService: DepartmentsService,
    private dialogService: MatDialog,
  ) {}
  departments?: departments.getAll.Department[];

  ngOnInit(): void {
    this.departmentsService.getAll().then((departments) => {
      this.departments = departments.data;
    });
  }

  openCreateDialog() {
    const dialogRef = this.dialogService.open(DepartmentsCreateDialogComponent);
    lastValueFrom(dialogRef.afterClosed()).then((result) => {});
  }

  updateDepartmentFee(departmentId: string, fee: string) {
    const numberFee = parseFloat(fee);
    if (isNaN(numberFee)) return;
    this.departmentsService
      .updateDepartmentFee(departmentId, numberFee)
      .then(() => {});
  }

  updateDepartmentColor(departmentId: string, color: string) {
    color = color.replace('#', '');
    this.departmentsService
      .updateDepartmentColor(departmentId, color)
      .then(() => {});
  }

  createPopupVisible = false;

  createDepartment(name: string, fee: number, color: string) {
    color = color.replace('#', '');
    this.departmentsService.createDepartment(name, fee, color).then(() => {});
    console.log('createDepartment', name, fee, color);
  }
}

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    RouterModule,
    DepartmentsServiceModule,
    DepartmentsCreateDialogComponentModule,
  ],
  declarations: [DepartmentsPageComponent],
  exports: [DepartmentsPageComponent],
})
export class DepartmentsPageModule {}
