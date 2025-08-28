import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetTypeService {

  PATH_OF_API = "http://localhost:8081/";
  PATH_OF_ASSET_TYPES = "api/v1/Asset-Types";

  constructor() { }
}
