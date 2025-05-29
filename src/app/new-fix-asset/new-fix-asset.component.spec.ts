import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFixAssetComponent } from './new-fix-asset.component';

describe('NewFixAssetComponent', () => {
  let component: NewFixAssetComponent;
  let fixture: ComponentFixture<NewFixAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFixAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFixAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
