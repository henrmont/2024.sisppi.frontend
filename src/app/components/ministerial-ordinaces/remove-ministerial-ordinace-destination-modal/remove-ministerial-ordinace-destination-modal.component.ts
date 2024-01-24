import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MinisterialOrdinaceDestinationService } from '../../../services/ministerial-ordinace-destination.service';
import { SharedService } from '../../../services/shared.service';

const ministerialOrdinaceChannel = new BroadcastChannel('ministerial-ordinace-channel');

@Component({
  selector: 'app-remove-ministerial-ordinace-destination-modal',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  templateUrl: './remove-ministerial-ordinace-destination-modal.component.html',
  styleUrl: './remove-ministerial-ordinace-destination-modal.component.scss'
})
export class RemoveMinisterialOrdinaceDestinationModalComponent {

  data = inject(MAT_DIALOG_DATA)
  ministerialOrdinaceDestinationService = inject(MinisterialOrdinaceDestinationService)
  sharedService = inject(SharedService)
  dialog = inject(MatDialogRef<RemoveMinisterialOrdinaceDestinationModalComponent>)

  onSubmit() {
    this.ministerialOrdinaceDestinationService.removeMinisterialOrdinaceDestination(this.data.info.id).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
        ministerialOrdinaceChannel.postMessage('update')
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
