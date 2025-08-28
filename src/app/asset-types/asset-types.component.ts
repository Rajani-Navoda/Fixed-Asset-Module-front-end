import { Component, OnInit } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-asset-types',
  templateUrl: './asset-types.component.html',
  styleUrls: ['./asset-types.component.css']
})
export class AssetTypesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openCreateModal() {
    const modalElement = document.getElementById('createAssetTypeModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

}
