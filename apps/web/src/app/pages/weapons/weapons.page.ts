import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.page.html',
  styleUrls: ['./weapons.page.scss'],
})
export class WeaponsPageComponent {
  constructor() {}
}

@NgModule({
  imports: [CommonModule],
  declarations: [WeaponsPageComponent],
  exports: [WeaponsPageComponent],
})
export class WeaponsPageModule {}
