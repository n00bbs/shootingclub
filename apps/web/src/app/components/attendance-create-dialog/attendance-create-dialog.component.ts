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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { members } from '@repo/types';

@Component({
  selector: 'app-attendance-create-dialog',
  templateUrl: './attendance-create-dialog.component.html',
  styleUrls: ['./attendance-create-dialog.component.scss'],
})
export class AttendanceCreateDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<AttendanceCreateDialogComponent>,
  ) {}

  attendance: string = '';

  onSave() {
    const parsedDate = new Date(this.attendance);
    const payload: members.createAttendance.RequestPayload = {
      date: parsedDate,
    };
    this.dialogRef.close(payload);
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
    MatDatepickerModule,
    MatIcon,
  ],
  declarations: [AttendanceCreateDialogComponent],
  exports: [AttendanceCreateDialogComponent],
})
export class AttendanceCreateDialogComponentModule {}
