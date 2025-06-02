import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-fix-asset',
  templateUrl: './new-fix-asset.component.html',
  styleUrls: ['./new-fix-asset.component.css']
})
export class NewFixAssetComponent {

  assetForm: FormGroup;
  assetTypes = ['Type 1', 'Type 2', 'Type 3'];

  constructor(private fb: FormBuilder) {
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
}
