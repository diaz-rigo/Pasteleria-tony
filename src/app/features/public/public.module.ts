import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './views/home/home.component';
import { PublicCommonsModule } from './commons/commons.module';
import { PublicComponentsModule } from './commons/components/components.module';
import { PublicComponent } from './public.component';


@NgModule({
  declarations: [
    HomeComponent,
    PublicComponent
  ],
  imports: [
    CommonModule,PublicCommonsModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
