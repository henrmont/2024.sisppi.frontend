import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProgramingService } from '../../../services/programing.service';
import { SharedService } from '../../../services/shared.service';

const programingChannel = new BroadcastChannel('programing-channel');
const notificationChannel = new BroadcastChannel('notification-channel');

@Component({
  selector: 'app-validate-programing-modal',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  templateUrl: './validate-programing-modal.component.html',
  styleUrl: './validate-programing-modal.component.scss'
})
export class ValidateProgramingModalComponent {

  data = inject(MAT_DIALOG_DATA)
  programingService = inject(ProgramingService)
  sharedService = inject(SharedService)
  dialog = inject(MatDialog)

  onSubmit() {
    this.programingService.validatePrograming(this.data.info.id).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
        programingChannel.postMessage('update')
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
