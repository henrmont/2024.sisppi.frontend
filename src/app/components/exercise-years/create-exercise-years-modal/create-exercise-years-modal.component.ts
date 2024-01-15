import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ExerciseYearService } from '../../../services/exercise-year.service';
import { SharedService } from '../../../services/shared.service';
import { NgxMaskDirective } from 'ngx-mask';

const exerciseYearChannel = new BroadcastChannel('exercise-year-channel');
const notificationChannel = new BroadcastChannel('notification-channel');

@Component({
  selector: 'app-create-exercise-years-modal',
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
  templateUrl: './create-exercise-years-modal.component.html',
  styleUrl: './create-exercise-years-modal.component.scss'
})
export class CreateExerciseYearsModalComponent {

  formBuilder = inject(FormBuilder);
  exerciseYearService = inject(ExerciseYearService)
  sharedService = inject(SharedService)
  dialog = inject(MatDialog)

  formulario: FormGroup = this.formBuilder.group({
    exercise_year: [null, Validators.required],
  });

  onSubmit() {
    this.exerciseYearService.createExerciseYear(this.formulario.value).subscribe({
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
