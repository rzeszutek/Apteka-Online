import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-email-send-dialog',
  templateUrl: './email-send-dialog.component.html',
  styleUrls: ['./email-send-dialog.component.scss']
})
export class EmailSendDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EmailSendDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {} ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
