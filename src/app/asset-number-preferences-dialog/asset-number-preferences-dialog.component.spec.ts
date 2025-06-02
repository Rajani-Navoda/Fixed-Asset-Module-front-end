import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetNumberPreferencesDialogComponent } from './asset-number-preferences-dialog.component';

describe('AssetNumberPreferencesDialogComponent', () => {
  let component: AssetNumberPreferencesDialogComponent;
  let fixture: ComponentFixture<AssetNumberPreferencesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetNumberPreferencesDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetNumberPreferencesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
