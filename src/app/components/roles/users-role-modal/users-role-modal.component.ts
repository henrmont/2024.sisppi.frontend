import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddUserRoleModalComponent } from '../add-user-role-modal/add-user-role-modal.component';
import { RemoveUserRoleModalComponent } from '../remove-user-role-modal/remove-user-role-modal.component';

@Component({
  selector: 'app-users-role-modal',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatListModule,
  ],
  templateUrl: './users-role-modal.component.html',
  styleUrl: './users-role-modal.component.scss'
})
export class UsersRoleModalComponent {

  data = inject(MAT_DIALOG_DATA)
  dialog = inject(MatDialog)

  addUserRole(info: any) {
    this.dialog.open(AddUserRoleModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '30%',
      height: '20%',
      data: {
        info: info
      }
    })
  }

  removeUserRole(info: any) {
    this.dialog.open(RemoveUserRoleModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '40%',
      height: '20%',
      data: {
        role: this.data.info.id,
        info: info
      }
    })
  }



}
