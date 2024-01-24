import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IncentiveService } from '../../../services/incentive.service';
import { SharedService } from '../../../services/shared.service';

const incentiveChannel = new BroadcastChannel('incentive-channel');
const notificationChannel = new BroadcastChannel('notification-channel');

@Component({
  selector: 'app-delete-incentive-modal',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  templateUrl: './delete-incentive-modal.component.html',
  styleUrl: './delete-incentive-modal.component.scss'
})
export class DeleteIncentiveModalComponent {

  data = inject(MAT_DIALOG_DATA)
  incentiveService = inject(IncentiveService)
  sharedService = inject(SharedService)
  dialog = inject(MatDialog)

  onSubmit() {
    this.incentiveService.deleteIncentive(this.data.info.id).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
        incentiveChannel.postMessage('update')
        notificationChannel.postMessage('update')
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
