import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../_services/accounts.service';
import { AllAccounts } from '../_models/Accounts';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor( private accountService:AccountsService) { }

  ngOnInit(): void {

    this.accountService.getAllAccounts().subscribe({
      next: (data: AllAccounts[]) => {
        console.log("Accounts loaded successfully", data);
      },
      error: (err) => {
        console.error("Error loading Accounts.", err);
      }
    });
  }

}


