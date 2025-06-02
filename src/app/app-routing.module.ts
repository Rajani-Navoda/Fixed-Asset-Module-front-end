import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewFixAssetComponent } from './new-fix-asset/new-fix-asset.component';
import { AllFixedAssetsComponent } from './all-fixed-assets/all-fixed-assets.component';

const routes: Routes = [
  {path:'', component:AllFixedAssetsComponent},
  {path:'new-fixed-asset', component:NewFixAssetComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
