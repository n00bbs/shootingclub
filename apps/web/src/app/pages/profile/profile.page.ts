import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePageComponent {
  constructor() {}
}

@NgModule({
  imports: [CommonModule],
  declarations: [ProfilePageComponent],
  exports: [ProfilePageComponent],
})
export class ProfilePageModule {}
