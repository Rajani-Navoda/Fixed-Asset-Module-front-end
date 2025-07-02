import { Component, Injectable, OnInit } from '@angular/core';
import { AllAccounts } from '../_models/Accounts';
import { AccountsService } from '../_services/accounts.service';
import { AccountType } from '../_models/enums/AccountType';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-new-fix-asset',
  templateUrl: './new-fix-asset.component.html',
  styleUrls: ['./new-fix-asset.component.css']
})
export class NewFixAssetComponent implements OnInit {

  fixedAssetAccounts: AllAccounts[] = [];
  depreciationExpenseAccounts: AllAccounts[] = [];


// previous edit before
  fixedAssetNumber = 'FA-07878';
  assetTypes = ['Type 1', 'Type 2', 'Type 3'];

  constructor(private accountService: AccountsService, httpClient: HttpClient) {}

    ngOnInit(): void {
    this.accountService.getAllAccounts().subscribe({
      next: (accounts: AllAccounts[]) => {
        this.fixedAssetAccounts = accounts.filter(a => a.accountType === AccountType.FIXED_ASSET);
        this.depreciationExpenseAccounts = accounts.filter(a => a.accountType === AccountType.EXPENSE);
        console.log('Accounts loaded successfully', this.fixedAssetAccounts, this.depreciationExpenseAccounts);
      },
      error: (err) => {
        console.error('Failed to load accounts', err);
      }
    });
  }


  onSubmit(addFixedAsset: NgForm) {

    
  }



  // openAssetNumberPreferences() {
  //   const dialogRef = this.dialog.open(AssetNumberPreferencesDialogComponent, {
  //     width: '500px',
  //     data: {
  //       prefix: 'FA-',
  //       nextNumber: '07878',
  //       autoGenerate: true // or false, depending on your logic
  //     }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result && result.fixedAssetNumber) {
  //       // this.fixedAssetNumber = result.fixedAssetNumber;
  //     }
  //   });
  // }
}
