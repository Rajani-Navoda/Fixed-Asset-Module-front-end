import { Component, OnInit } from '@angular/core';
import { AssetTypeService } from '../_services/asset-type.service';

declare var bootstrap: any;

@Component({
  selector: 'app-asset-types',
  templateUrl: './asset-types.component.html',
  styleUrls: ['./asset-types.component.css']
})
export class AssetTypesComponent implements OnInit {

    assetTypes: any[] = [];


  constructor( private assetTypeService: AssetTypeService) { }

  ngOnInit(): void {
    this.loadAssetTypes();

  }

  openCreateModal() {
    const modalElement = document.getElementById('createAssetTypeModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

    loadAssetTypes(): void {
    this.assetTypeService.getAllAssetTypes().subscribe({
      next: (data: any) => {
        this.assetTypes = data;
        console.log('Asset types loaded:', this.assetTypes);
      },
      error: (err) => {
        console.error('Error while fetching asset types:', err);
      }
    });
  }

}
