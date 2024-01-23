import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MinisterialOrdinaceService } from '../../../services/ministerial-ordinace.service';
import { SharedService } from '../../../services/shared.service';

const ministerialOrdinaceChannel = new BroadcastChannel('ministerial-ordinace-channel');
const notificationChannel = new BroadcastChannel('notification-channel');

@Component({
  selector: 'app-delete-ministerial-ordinace-modal',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  templateUrl: './delete-ministerial-ordinace-modal.component.html',
  styleUrl: './delete-ministerial-ordinace-modal.component.scss'
})
export class DeleteMinisterialOrdinaceModalComponent {

  data = inject(MAT_DIALOG_DATA)
  ministerialOrdinaceService = inject(MinisterialOrdinaceService)
  sharedService = inject(SharedService)
  dialog = inject(MatDialog)

  onSubmit() {
    this.ministerialOrdinaceService.deleteMinisterialOrdinace(this.data.info.id).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
        ministerialOrdinaceChannel.postMessage('update')
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
