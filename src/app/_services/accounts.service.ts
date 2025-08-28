import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Accounts } from '../_models/Accounts';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  PATH_OF_API = "http://localhost:8081/";
  PATH_OF_ACCOUNTS = "api/v1/accounts";

  constructor( private httpClient: HttpClient) { }

  
  public getAllAccounts() {
    
    return this.httpClient.get(
      `${this.PATH_OF_API}${this.PATH_OF_ACCOUNTS}/get-all-accounts`
    );
  }

  public createAccount(account: Accounts) {
    return this.httpClient.post(
      `${this.PATH_OF_API}${this.PATH_OF_ACCOUNTS}/create-account`, account
    );
  }

}
