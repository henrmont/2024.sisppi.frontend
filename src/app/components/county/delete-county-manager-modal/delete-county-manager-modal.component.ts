import { Component, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UserService } from '../../../services/user.service';
import { SharedService } from '../../../services/shared.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

const notificationChannel = new BroadcastChannel('notification-channel');
const listCountyChannel = new BroadcastChannel('list-county-channel');
const listUserChannel = new BroadcastChannel('list-user-channel');

@Component({
  selector: 'app-delete-county-manager-modal',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
  ],
  templateUrl: './delete-county-manager-modal.component.html',
  styleUrl: './delete-county-manager-modal.component.scss'
})
export class DeleteCountyManagerModalComponent implements OnInit {

  user: any

  data = inject(MAT_DIALOG_DATA)
  userService = inject(UserService)
  sharedService = inject(SharedService)
  dialogRef = inject(MatDialog)

  ngOnInit(): void {

  }

  onSubmit() {
    this.userService.changeEmptyManagerUser(this.data.info.id).subscribe({
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
