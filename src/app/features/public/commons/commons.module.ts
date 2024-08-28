import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponentsModule } from './components/components.module';



@NgModule({
  exports: [
    PublicComponentsModule
  ]
})
export class PublicCommonsModule { }
