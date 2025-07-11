import { DepreciationMethod } from "./enums/DepreciationMethod";
import { DepreciationFrequency } from "./enums/DepreciationFrequency";
import { ComputationType } from "./enums/ComputationType";
import { AllAccounts } from "./Accounts";
import { Status } from "./enums/Status";

export interface FixedAsset {

  faNumber: string;
  faName: string;
  purchaseValue: number;
  purchaseDate: string;
  serialNumber: number;
  warrantyExpDate: string; 
  currentValue: number;
  disposalValue: number;
  description: string;
//   fixedAssetTypes: FixedAssetTypes;
  depreciationMethod: DepreciationMethod;
  depreciationFrequency: DepreciationFrequency;
  computationType: ComputationType;
  assetLife: number;
  depreciationStartDate: string; 
  faAccount: AllAccounts;
  accumulatedDepreciationAccount: AllAccounts;
  depreciationExpenseAccount: AllAccounts;
  notes: string;
  status: Status;

}

