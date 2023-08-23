import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestService } from 'src/app/services/rest.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-confirm-create-dialog',
  templateUrl: './confirm-create-dialog.component.html',
  styleUrls: ['./confirm-create-dialog.component.scss'],
})
export class ConfirmCreateDialogComponent {
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
    this.dialogRef.close(true);
  }
}
