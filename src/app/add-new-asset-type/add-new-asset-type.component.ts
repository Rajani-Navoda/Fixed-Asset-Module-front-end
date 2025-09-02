import { Component, OnInit } from '@angular/core';
import { DepreciationMethod } from '../_models/enums/DepreciationMethod';
import { DepreciationFrequency } from '../_models/enums/DepreciationFrequency';
import { ComputationType } from '../_models/enums/ComputationType';
import { HttpClient } from '@angular/common/http';
import { AccountsService } from '../_services/accounts.service';
import { Accounts } from '../_models/Accounts';
import { NgForm } from '@angular/forms';
import { AssetTypeService } from '../_services/asset-type.service';

@Component({
  selector: 'app-add-new-asset-type',
  templateUrl: './add-new-asset-type.component.html',
  styleUrls: ['./add-new-asset-type.component.css']
})
export class AddNewAssetTypeComponent implements OnInit {

  depreciationMethods = Object.values(DepreciationMethod);
  depreciationFrequencies = Object.values(DepreciationFrequency);
  computationTypes = Object.values(ComputationType);

  
  showSuccessAlert = false;
  alertClass = 'alert-success';



  allAccounts: Accounts[] = [];

  constructor(private httpClient: HttpClient, private accountService: AccountsService, 
    private assetTypeService: AssetTypeService) { }

  ngOnInit(): void {
    this.loadAllAccounts();
  }

  loadAllAccounts(){
     this.accountService.getAllAccounts().subscribe(
      (data: Accounts[]) => {
        this.allAccounts = data;
        console.log('Accounts loaded', this.allAccounts);
      },
      (error) => {
        console.error('Error loading accounts:', error);
      }
    );

  }

    onSaveAssetType(assetTypeForm: NgForm) {
    const assetTypeData = assetTypeForm.value;
    // console.log('Asset Type Data:', assetTypeData);

      this.assetTypeService.createAssetType(assetTypeData).subscribe({
      next: (response) => {
        console.log('Asset Type created successfully:', response);

        this.alertClass = 'alert-success';
        this.showSuccessAlert = true;

        setTimeout(() => {
 
        }, 3000);
      },
      error: (error) => {
        console.error('Error creating account:', error);
      }
    });
  }


    closeAlert() {
    this.showSuccessAlert = false;
  }


}



