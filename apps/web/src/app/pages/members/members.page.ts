import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPageComponent {
  constructor() {}
}

@NgModule({
  imports: [CommonModule],
  declarations: [MembersPageComponent],
  exports: [MembersPageComponent],
})
export class MembersPageModule {}
