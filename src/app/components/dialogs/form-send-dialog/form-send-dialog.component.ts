import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-form-send-dialog',
  templateUrl: './form-send-dialog.component.html',
  styleUrls: ['./form-send-dialog.component.scss']
})
export class FormSendDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FormSendDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {}) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
