import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericBottomSheetComponent } from './generic-bottom-sheet.component';

describe('GenericBottomSheetComponent', () => {
  let component: GenericBottomSheetComponent;
  let fixture: ComponentFixture<GenericBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericBottomSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
