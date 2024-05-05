import { Component, NgModule } from '@angular/core';
import {
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-departments-create-dialog',
  templateUrl: './departments-create-dialog.component.html',
  styleUrls: ['./departments-create-dialog.component.scss'],
})
export class DepartmentsCreateDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<DepartmentsCreateDialogComponent>,
  ) {}
  name: string = '';
  fee: number = 0;
  color: string = '#000000';

  onSave() {
    this.dialogRef.close({
      name: this.name,
      fee: this.fee,
      color: this.color,
    });
  }

  onCancel() {
    this.dialogRef.close();
  }
}

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDialogModule,
  ],
  declarations: [DepartmentsCreateDialogComponent],
  exports: [DepartmentsCreateDialogComponent],
})
export class DepartmentsCreateDialogComponentModule {}
