import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedirectsListPage } from './redirects-list.page';

const routes: Routes = [
  {
    path: '',
    component: RedirectsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedirectsListPageRoutingModule {}
