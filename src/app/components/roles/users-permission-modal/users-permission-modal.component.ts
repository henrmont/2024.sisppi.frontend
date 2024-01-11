import { Component, inject } from '@angular/core';
import { AddUserPermissionModalComponent } from '../add-user-permission-modal/add-user-permission-modal.component';
import { RemoveUserPermissionModalComponent } from '../remove-user-permission-modal/remove-user-permission-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-users-permission-modal',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatListModule,
  ],
  templateUrl: './users-permission-modal.component.html',
  styleUrl: './users-permission-modal.component.scss'
})
export class UsersPermissionModalComponent {

  data = inject(MAT_DIALOG_DATA)
  dialog = inject(MatDialog)

  addUserPermission(info: any) {
    this.dialog.open(AddUserPermissionModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '30%',
      height: '20%',
      data: {
        info: info
      }
    })
  }

  removeUserPermission(info: any) {
    this.dialog.open(RemoveUserPermissionModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '40%',
      height: '20%',
      data: {
        permission: this.data.info.id,
        info: info
      }
    })
  }

}
