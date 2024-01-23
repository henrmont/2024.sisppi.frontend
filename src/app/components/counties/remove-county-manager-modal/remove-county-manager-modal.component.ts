import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserService } from '../../../services/user.service';
import { SharedService } from '../../../services/shared.service';

const countyChannel = new BroadcastChannel('county-channel');
const notificationChannel = new BroadcastChannel('notification-channel');
const userChannel = new BroadcastChannel('user-channel');

@Component({
  selector: 'app-remove-county-manager-modal',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
  ],
  templateUrl: './remove-county-manager-modal.component.html',
  styleUrl: './remove-county-manager-modal.component.scss'
})
export class RemoveCountyManagerModalComponent {

  data = inject(MAT_DIALOG_DATA)
  userService = inject(UserService)
  sharedService = inject(SharedService)
  dialog = inject(MatDialog)

  onSubmit() {
    this.userService.changeEmptyManagerUser(this.data.info.id).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
        notificationChannel.postMessage('update')
        countyChannel.postMessage('update')
        userChannel.postMessage('update')
      },
      error: (response: any) => {
        this.sharedService.showMessage(response.message)
      },
      complete: () => {
        this.dialog.closeAll()
      }
    })

  }

}
