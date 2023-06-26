import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ScannerComponent } from './scanner/scanner.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    HeaderComponent,
    ScannerComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [

    HeaderComponent,
    ScannerComponent
  ]
})
export class ComponentsModule { }
