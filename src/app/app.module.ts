import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllFixedAssetsComponent } from './all-fixed-assets/all-fixed-assets.component';
import { NewFixAssetComponent } from './new-fix-asset/new-fix-asset.component';
import { FixedAssetTypesComponent } from './fixed-asset-types/fixed-asset-types.component';
import { RouterModule } from '@angular/router';
import { AssetNumberPreferencesDialogComponent } from './asset-number-preferences-dialog/asset-number-preferences-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { AssetTypesComponent } from './asset-types/asset-types.component';
import { AddNewAssetTypeComponent } from './add-new-asset-type/add-new-asset-type.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    AllFixedAssetsComponent,
    NewFixAssetComponent,
    FixedAssetTypesComponent,
    AssetNumberPreferencesDialogComponent,
    AssetTypesComponent,
    AddNewAssetTypeComponent,
    CreateAccountComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatRadioModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
