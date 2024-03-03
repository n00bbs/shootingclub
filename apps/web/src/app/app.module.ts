import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Material UI
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
const materialModules = [MatSlideToggleModule];

@NgModule({
  imports: [RouterOutlet, ...materialModules],
})
export class AppModule {}
