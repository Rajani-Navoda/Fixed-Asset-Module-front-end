import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewAssetTypeComponent } from './add-new-asset-type.component';

describe('AddNewAssetTypeComponent', () => {
  let component: AddNewAssetTypeComponent;
  let fixture: ComponentFixture<AddNewAssetTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewAssetTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewAssetTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
