import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AssetNumberPreferencesDialogComponent } from '../asset-number-preferences-dialog/asset-number-preferences-dialog.component';

@Component({
  selector: 'app-new-fix-asset',
  templateUrl: './new-fix-asset.component.html',
  styleUrls: ['./new-fix-asset.component.css']
})
export class NewFixAssetComponent {

  fixedAssetNumber = 'FA-07878';

  assetForm: FormGroup;
  assetTypes = ['Type 1', 'Type 2', 'Type 3'];

  constructor(private fb: FormBuilder,private dialog: MatDialog) {
    this.assetForm = this.fb.group({
      name: ['', Validators.required],
      assetNumber: [{ value: 'FA-00006', disabled: true }, Validators.required],
      purchaseValue: ['', Validators.required],
      purchaseDate: ['', Validators.required],
      serialNumber: [''],
      warrantyExpiration: [''],
      currentValue: [''],
      disposalValue: [''],
      assetType: ['', Validators.required],
      description: ['']
    });
  }

  onSubmit(){
    
  }

  openAssetNumberPreferences() {
    const dialogRef = this.dialog.open(AssetNumberPreferencesDialogComponent, {
      width: '500px',
      data: {
        prefix: 'FA-',
        nextNumber: '07878',
        autoGenerate: true // or false, depending on your logic
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.fixedAssetNumber) {
        this.fixedAssetNumber = result.fixedAssetNumber;
      }
    });
  }
}
