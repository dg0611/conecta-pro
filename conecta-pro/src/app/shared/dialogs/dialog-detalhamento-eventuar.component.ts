import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-detalhamento-eventuar',
  templateUrl: './dialog-detalhamento-eventuar.component.html',
  styleUrls: ['./dialog-detalhamento-eventuar.component.scss']
})
export class DialogDetalhamentoEventuarComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogDetalhamentoEventuarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
