import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ExerciseYearService } from '../../../services/exercise-year.service';
import { SharedService } from '../../../services/shared.service';

const exerciseYearChannel = new BroadcastChannel('exercise-year-channel');
const notificationChannel = new BroadcastChannel('notification-channel');

@Component({
  selector: 'app-validate-exercise-year-modal',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  templateUrl: './validate-exercise-year-modal.component.html',
  styleUrl: './validate-exercise-year-modal.component.scss'
})
export class ValidateExerciseYearModalComponent {

  data = inject(MAT_DIALOG_DATA)
  exerciseYearService = inject(ExerciseYearService)
  sharedService = inject(SharedService)
  dialog = inject(MatDialog)

  onSubmit() {
    this.exerciseYearService.validateExerciseYear(this.data.info.id).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
        exerciseYearChannel.postMessage('update')
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
