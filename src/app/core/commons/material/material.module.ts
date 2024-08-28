import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
const PRIMECOMPONENTS = [BadgeModule,ButtonModule,SidebarModule]; //


@NgModule({
  imports: [
    ...PRIMECOMPONENTS,
    CommonModule
  ],
  exports: [
    ...PRIMECOMPONENTS,

  ]
})
export class MaterialModule { }
