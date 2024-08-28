import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContentComponent } from './home-content/home-content.component';


const COMPONENTS = [HomeContentComponent]; //

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule
  ]
})
export class PublicComponentsModule { }
