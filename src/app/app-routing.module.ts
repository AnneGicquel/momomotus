import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FillFirstNameComponent } from './pages/fill-first-name/fill-first-name.component';
import { MomomotusComponent } from './pages/momomotus/momomotus.component';

const routes: Routes = [

  {
    path: "",
    component: FillFirstNameComponent
  },
  {
    path: "momomotus",
    component: MomomotusComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
