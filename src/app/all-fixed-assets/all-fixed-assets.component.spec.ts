import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFixedAssetsComponent } from './all-fixed-assets.component';

describe('AllFixedAssetsComponent', () => {
  let component: AllFixedAssetsComponent;
  let fixture: ComponentFixture<AllFixedAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFixedAssetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFixedAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
