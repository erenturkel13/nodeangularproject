import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimplecomponentComponent } from './simplecomponent/simplecomponent.component';

const routes: Routes = [
  { path:'simplecomponent', component: SimplecomponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
