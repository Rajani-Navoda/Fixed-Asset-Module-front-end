import { Accounts } from "./Accounts";
import { ComputationType } from "./enums/ComputationType";
import { DepreciationFrequency } from "./enums/DepreciationFrequency";
import { DepreciationMethod } from "./enums/DepreciationMethod";

export interface FixedAssetTypes{
    
    faTypeId: number;
    faTypeName: string;
    depreciationMethod: DepreciationMethod;
    depreciationFrequency: DepreciationFrequency;
    assetLife: number;
    computationType: ComputationType;
    accumulatedDepreciationAccount: Accounts;
    depreciationExpenseAccount: Accounts;
}


