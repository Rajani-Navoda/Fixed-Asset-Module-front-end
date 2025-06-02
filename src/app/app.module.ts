import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllFixedAssetsComponent } from './all-fixed-assets/all-fixed-assets.component';
import { NewFixAssetComponent } from './new-fix-asset/new-fix-asset.component';
import { FixedAssetTypesComponent } from './fixed-asset-types/fixed-asset-types.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AllFixedAssetsComponent,
    NewFixAssetComponent,
    FixedAssetTypesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
