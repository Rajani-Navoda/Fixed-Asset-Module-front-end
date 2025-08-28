import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../_services/accounts.service';
import { Accounts } from '../_models/Accounts';
import { NgForm } from '@angular/forms';
import { AccountType } from '../_models/enums/AccountType';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor( private accountService:AccountsService) { }

  accountTypeOptions: { label: string; value: AccountType }[] = [];

  showSuccessAlert = false;
  alertClass = 'alert-success';


  ngOnInit(): void {
    
      this.accountTypeOptions = Object.values(AccountType).map(type => ({
      label: this.formatLabel(type),
      value: type,
    }));

    

  }


  formatLabel(value: string): string {
    return value
      .toLowerCase()
      .replace(/_/g, ' ')
      .replace(/\b\w/g, char => char.toUpperCase());
  }


  CreateAccount(CreateAccountForm:NgForm){
    const account:Accounts = CreateAccountForm.value;
    console.log(account);

    this.accountService.createAccount(account).subscribe({
      next: (response) => {
        console.log('Account created successfully:', response);

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


