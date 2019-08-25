import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'datadisplay', loadChildren: './DataDisplay/Display.module#DisplayModule'},
  {path: 'button', loadChildren: './button/button.module#ButtonModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
