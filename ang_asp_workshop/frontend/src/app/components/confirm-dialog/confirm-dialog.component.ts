import { RestService } from './../../services/rest.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent implements OnInit {
  constructor(
    public rest: RestService,
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      subtitle: string;
      item: any;
    }
  ) {}

  ngOnInit(): void {}

  onClickConfirm() {
    this.dialogRef.close(this.data.item);
  }
}
