import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSendDialogComponent } from './email-send-dialog.component';

describe('EmailSendDialogComponent', () => {
  let component: EmailSendDialogComponent;
  let fixture: ComponentFixture<EmailSendDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailSendDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailSendDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
