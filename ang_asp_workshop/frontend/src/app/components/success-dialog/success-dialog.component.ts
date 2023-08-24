import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.scss'],
})
export class SuccessDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SuccessDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      subtitle: string;
    }
  ) {}

  ngOnInit() {}

  onClickConfirm() {
    this.dialogRef.close(null);
  }
}
