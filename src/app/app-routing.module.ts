import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { XMLResponseComponent } from './Public/xmlresponse/xmlresponse.component';

const routes: Routes = [
  {
    path: '',
    component: XMLResponseComponent,
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
