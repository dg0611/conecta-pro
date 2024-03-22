import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  // Dialog lembrete
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<DialogComponent>) {}
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent, {
      width:
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
