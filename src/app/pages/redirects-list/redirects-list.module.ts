import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedirectsListPageRoutingModule } from './redirects-list-routing.module';

import { RedirectsListPage } from './redirects-list.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedirectsListPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RedirectsListPage]
})
export class RedirectsListPageModule {}
