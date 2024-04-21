import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPageComponent {
  constructor() {}
}

@NgModule({
  imports: [CommonModule],
  declarations: [UsersPageComponent],
  exports: [UsersPageComponent],
})
export class UsersPageModule {}
