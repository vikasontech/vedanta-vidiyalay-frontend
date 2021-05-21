import { MatDialog } from '@angular/material';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

export class DialogBoxUtils {

  

  openDialog(data: any,  dialog: MatDialog) {
    const dialogRef = dialog.open(DialogBoxComponent, {
      width: '500px',
      data: data
    });
  }


  // confirmationDialog(data: any, dialog: MatDialog): boolean {
  //   var isConfirmed: boolean;
  //   const dialogRef = dialog.open(DialogBoxComponent, {
  //     width: '500px',
  //     data: data
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     console.log('result: ', result);
  //     // this.isConfirmationClicked = (result)? true: false;
  //     isConfirmed =  (result)? true: false;
  //   });

  //   return isConfirmed;
  // }

}
