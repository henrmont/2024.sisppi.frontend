import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RoleService } from '../../../services/role.service';
import { SharedService } from '../../../services/shared.service';

const roleChannel = new BroadcastChannel('role-channel');
const permissionChannel = new BroadcastChannel('permission-channel');
const notificationChannel = new BroadcastChannel('notification-channel');

@Component({
  selector: 'app-delete-role-modal',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  templateUrl: './delete-role-modal.component.html',
  styleUrl: './delete-role-modal.component.scss'
})
export class DeleteRoleModalComponent {

  data = inject(MAT_DIALOG_DATA)
  roleService = inject(RoleService)
  sharedService = inject(SharedService)
  dialogRef = inject(MatDialog)

  onSubmit() {
    this.roleService.deleteRole(this.data.info.id).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
        roleChannel.postMessage('update')
        permissionChannel.postMessage('update')
        notificationChannel.postMessage('update')
      },
      error: (response: any) => {
        this.sharedService.showMessage(response.message)
      },
      complete: () => {
        this.dialogRef.closeAll()
      }
    })
  }

}
