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

@Component({
  selector: 'app-members-create-dialog',
  templateUrl: './members-create-dialog.component.html',
  styleUrls: ['./members-create-dialog.component.scss'],
})
export class MembersCreateDialogComponent {
  constructor(private dialogRef: MatDialogRef<MembersCreateDialogComponent>) {}

  email: string = '';
  first_name: string = '';
  last_name: string = '';
  birthdate: string = '';

  hide = true;

  onSave() {
    this.dialogRef.close({
      email: this.email,
      first_name: this.first_name,
      last_name: this.last_name,
      birthdate: this.birthdate,
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
    MatDatepickerModule,
    MatIcon,
  ],
  declarations: [MembersCreateDialogComponent],
  exports: [MembersCreateDialogComponent],
})
export class MembersCreateDialogComponentModule {}
