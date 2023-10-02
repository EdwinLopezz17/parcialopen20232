import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./public/components/page-not-found/page-not-found.component";
import {HomeComponent} from "./public/components/home/home.component";
import {BundlesComponent} from "./public/components/bundles/bundles.component";

const routes: Routes = [
  {path: '',redirectTo:'home', pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'store/bundles', component:BundlesComponent},

  {path: '**', component:PageNotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
