import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FixedAssetTypes } from '../_models/FixedAssetTypes';

@Injectable({
  providedIn: 'root'
})
export class AssetTypeService {

  PATH_OF_API = "http://localhost:8081/";
  PATH_OF_ASSET_TYPES = "api/v1/Asset-Types";

  constructor( private httpClient: HttpClient) { }


    public getAllAssetTypes() {
      
      return this.httpClient.get(
        `${this.PATH_OF_API}${this.PATH_OF_ASSET_TYPES}/get-all-asset-types`
      );

    }

    public createAssetType(fixedAssetType: FixedAssetTypes) {
      return this.httpClient.post(
        `${this.PATH_OF_API}${this.PATH_OF_ASSET_TYPES}/create-asset-type`, fixedAssetType
      );
      
    }

    
}
