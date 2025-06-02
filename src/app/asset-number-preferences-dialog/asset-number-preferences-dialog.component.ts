import { Component, OnInit, Inject,EventEmitter, Output, Input } from '@angular/core';
import { AssetNumberPreferencesData } from '../_models/AssetNumberPreferencesData';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-asset-number-preferences-dialog',
  templateUrl: './asset-number-preferences-dialog.component.html',
  styleUrls: ['./asset-number-preferences-dialog.component.css']
})
export class AssetNumberPreferencesDialogComponent {


  @Input() autoGenerate = true;
  @Input() prefix = 'FA-';
  @Input() nextNumber = '07878';
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();

  setAutoGenerate(val: boolean) {
    this.autoGenerate = val;
  }
  

  constructor(
    public dialogRef: MatDialogRef<AssetNumberPreferencesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AssetNumberPreferencesData
  ) { 
    this.prefix = data.prefix;
    this.nextNumber = data.nextNumber;
    this.autoGenerate = data.autoGenerate;
  }

   onModeChange() {
    // Optionally reset fields if needed
  }
  onSave() {
    let result: any;
    if (this.autoGenerate) {
      result = {
        autoGenerate: true,
        fixedAssetNumber: `${this.prefix}${this.nextNumber}`
      };
    } else {
      result = {
        autoGenerate: false,
        fixedAssetNumber: ''
      };
    }
    this.dialogRef.close(result);
  }

  onCancel() {
    this.dialogRef.close();
  }

}
