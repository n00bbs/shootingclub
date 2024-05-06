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
export class MembersCreateDialogComponent {
  constructor(private dialogRef: MatDialogRef<MembersCreateDialogComponent>) {}

  email: string = '';
  first_name: string = '';
  last_name: string = '';
  birthdate: string = '';
  attendance: string = '';

  onSave() {
    const parsedDate = new Date(this.birthdate);
    const payload: members.createMember.RequestPayload = {
      email: this.email,
      first_name: this.first_name,
      last_name: this.last_name,
      birthdate: parsedDate,
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
  declarations: [MembersCreateDialogComponent],
  exports: [MembersCreateDialogComponent],
})
export class MembersCreateDialogComponentModule {}
