import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentItemDetailsComponent } from './equipment-item-details.component';

describe('EquipmentItemDetailsComponent', () => {
  let component: EquipmentItemDetailsComponent;
  let fixture: ComponentFixture<EquipmentItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentItemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
