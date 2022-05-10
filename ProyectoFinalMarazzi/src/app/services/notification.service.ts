import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {



  constructor(
    public snackBar: MatSnackBar

  ) { }

  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top'
    });
  }

  public openSnackBarNoTimeout(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 0,
      verticalPosition: 'top'
    });
  }

  public closeSnackBar() {
    this.snackBar.dismiss();
  }
}
