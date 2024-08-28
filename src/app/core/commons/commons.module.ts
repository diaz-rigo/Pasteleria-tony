import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponentsModule } from './components/components.module';


@NgModule({
  exports: [

    CoreComponentsModule
    // ...COMPONENTS
  ],
  imports: [
    CommonModule
  ]
})
export class CoreCommonsModule { }
