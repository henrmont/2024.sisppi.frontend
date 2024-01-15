import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CompetenceService } from '../../../services/competence.service';
import { SharedService } from '../../../services/shared.service';

const competenceChannel = new BroadcastChannel('competence-channel');
const notificationChannel = new BroadcastChannel('notification-channel');

@Component({
  selector: 'app-validate-competence-modal',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  templateUrl: './validate-competence-modal.component.html',
  styleUrl: './validate-competence-modal.component.scss'
})
export class ValidateCompetenceModalComponent {

  data = inject(MAT_DIALOG_DATA)
  competenceService = inject(CompetenceService)
  sharedService = inject(SharedService)
  dialog = inject(MatDialog)

  onSubmit() {
    this.competenceService.validateCompetence(this.data.info.id).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
        competenceChannel.postMessage('update')
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
