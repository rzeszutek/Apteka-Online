import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSendDialogComponent } from './form-send-dialog.component';

describe('FormSendDialogComponent', () => {
  let component: FormSendDialogComponent;
  let fixture: ComponentFixture<FormSendDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSendDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSendDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
