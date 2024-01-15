import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxMaskDirective } from 'ngx-mask';
import { ExerciseYearService } from '../../../services/exercise-year.service';
import { SharedService } from '../../../services/shared.service';

const exerciseYearChannel = new BroadcastChannel('exercise-year-channel');
const notificationChannel = new BroadcastChannel('notification-channel');

@Component({
  selector: 'app-update-exercise-year-modal',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NgxMaskDirective,
  ],
  templateUrl: './update-exercise-year-modal.component.html',
  styleUrl: './update-exercise-year-modal.component.scss'
})
export class UpdateExerciseYearModalComponent {

  data = inject(MAT_DIALOG_DATA)
  formBuilder = inject(FormBuilder);
  exerciseYearService = inject(ExerciseYearService)
  sharedService = inject(SharedService)
  dialog = inject(MatDialog)

  formulario: FormGroup = this.formBuilder.group({
    id: [this.data.info.id, Validators.required],
    exercise_year: [this.data.info.exercise_year, Validators.required],
  });

  onSubmit() {
    this.exerciseYearService.updateExerciseYear(this.formulario.value).subscribe({
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
