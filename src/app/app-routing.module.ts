import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewFixAssetComponent } from './new-fix-asset/new-fix-asset.component';
import { AssetTypesComponent } from './asset-types/asset-types.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CreateAccountComponent } from './create-account/create-account.component';

const routes: Routes = [

  // {path:'', component:NavBarComponent},
  {path:'new-fixed-asset', component:NewFixAssetComponent},
  {path:'all-asset-types', component:AssetTypesComponent},
  {path:'create-account', component:CreateAccountComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
