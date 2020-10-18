import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineItemDetailsComponent } from './medicine-item-details.component';

describe('MedicineItemDetailsComponent', () => {
  let component: MedicineItemDetailsComponent;
  let fixture: ComponentFixture<MedicineItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineItemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
