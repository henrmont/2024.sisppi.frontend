import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserService } from '../../../services/user.service';
import { SharedService } from '../../../services/shared.service';

const notificationChannel = new BroadcastChannel('notification-channel');
const listCountyChannel = new BroadcastChannel('list-county-channel');
const listUserChannel = new BroadcastChannel('list-user-channel');

@Component({
  selector: 'app-delete-user-modal',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  templateUrl: './delete-user-modal.component.html',
  styleUrl: './delete-user-modal.component.scss'
})
export class DeleteUserModalComponent {

  data = inject(MAT_DIALOG_DATA)
  userService = inject(UserService)
  sharedService = inject(SharedService)
  dialogRef = inject(MatDialog)

  onSubmit() {
    this.userService.deleteUser(this.data.info.id).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
        notificationChannel.postMessage('update')
        listCountyChannel.postMessage('update')
        listUserChannel.postMessage('update')
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
