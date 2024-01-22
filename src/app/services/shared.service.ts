import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SharedService {

  constructor(
    private snackbar: MatSnackBar,
  ) { }

  showMessage(message: any) {
    this.snackbar.open(message, 'Fechar', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    })
  }

  logout() {
    window.localStorage.clear();
    window.location.reload();
  }

  disabledRole() {

  }
}
