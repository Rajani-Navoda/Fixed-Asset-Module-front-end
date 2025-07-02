import { AccountType } from "./enums/AccountType";

 export interface AllAccounts {
    accountCode: string;
    accountName: string;    
    accountType: AccountType;
    isSubAccount: boolean;  
    parentAccount: string;
    description: string;
    isZohoExpense: boolean;
 }

 
 
