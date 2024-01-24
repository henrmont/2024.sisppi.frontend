import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IncentiveDestinationService } from '../../../services/incentive-destination.service';
import { SharedService } from '../../../services/shared.service';

const incentiveChannel = new BroadcastChannel('incentive-channel');

@Component({
  selector: 'app-remove-incentive-destination-modal',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  templateUrl: './remove-incentive-destination-modal.component.html',
  styleUrl: './remove-incentive-destination-modal.component.scss'
})
export class RemoveIncentiveDestinationModalComponent {

  data = inject(MAT_DIALOG_DATA)
  incentiveDestinationService = inject(IncentiveDestinationService)
  sharedService = inject(SharedService)
  dialog = inject(MatDialogRef<RemoveIncentiveDestinationModalComponent>)

  onSubmit() {
    this.incentiveDestinationService.removeIncentiveDestination(this.data.info.id).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
        incentiveChannel.postMessage('update')
      },
      error: (response: any) => {
        this.sharedService.showMessage(response.message)
      },
      complete: () => {
        this.dialog.close()
      }
    })
  }

}
