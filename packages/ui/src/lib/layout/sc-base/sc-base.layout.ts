import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'sc-base-layout',
  templateUrl: './sc-base.layout.html',
  styleUrls: ['./sc-base.layout.scss'],
})
export class ScBaseLayoutComponent {
  public a = Promise.resolve('a');
  constructor() {}
}

@NgModule({
  declarations: [ScBaseLayoutComponent],
  exports: [ScBaseLayoutComponent],
  imports: [CommonModule, FormsModule, RouterModule], //MatToolbarModule,
})
export class ScBaseLayoutModule {}
