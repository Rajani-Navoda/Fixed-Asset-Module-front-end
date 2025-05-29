import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedAssetTypesComponent } from './fixed-asset-types.component';

describe('FixedAssetTypesComponent', () => {
  let component: FixedAssetTypesComponent;
  let fixture: ComponentFixture<FixedAssetTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedAssetTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedAssetTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
