import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinesPanelComponent } from './medicines-panel.component';

describe('MedicinesPanelComponent', () => {
  let component: MedicinesPanelComponent;
  let fixture: ComponentFixture<MedicinesPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicinesPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
