import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const COMPONENTS = [HeaderComponent, FooterComponent]; // Agrega los componentes



@NgModule({
  declarations: [...COMPONENTS,  ],
  exports: [...COMPONENTS, BrowserAnimationsModule],
  imports: [BrowserAnimationsModule,
    MaterialModule,
    CommonModule
  ]
})
export class CoreComponentsModule { }
