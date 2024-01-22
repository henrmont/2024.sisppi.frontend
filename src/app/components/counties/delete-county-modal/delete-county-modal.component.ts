import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CountyService } from '../../../services/county.service';
import { SharedService } from '../../../services/shared.service';

const countyChannel = new BroadcastChannel('county-channel');
const notificationChannel = new BroadcastChannel('notification-channel');

@Component({
  selector: 'app-delete-county-modal',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  templateUrl: './delete-county-modal.component.html',
  styleUrl: './delete-county-modal.component.scss'
})
export class DeleteCountyModalComponent {

  data = inject(MAT_DIALOG_DATA)
  countyService = inject(CountyService)
  sharedService = inject(SharedService)
  dialogRef = inject(MatDialog)

  onSubmit() {
    this.countyService.deleteCounty(this.data.info.id).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
        countyChannel.postMessage('update')
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
