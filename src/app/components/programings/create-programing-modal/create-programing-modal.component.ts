import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ExerciseYearService } from '../../../services/exercise-year.service';
import { ProgramingService } from '../../../services/programing.service';
import { SharedService } from '../../../services/shared.service';

const programingChannel = new BroadcastChannel('programing-channel');
const notificationChannel = new BroadcastChannel('notification-channel');

@Component({
  selector: 'app-create-programing-modal',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
  ],
  templateUrl: './create-programing-modal.component.html',
  styleUrl: './create-programing-modal.component.scss'
})
export class CreateProgramingModalComponent implements OnInit {

  formBuilder = inject(FormBuilder);
  exerciseYearService = inject(ExerciseYearService)
  programingService = inject(ProgramingService)
  sharedService = inject(SharedService)
  dialog = inject(MatDialog)

  exerciseYears: any

  formulario: FormGroup = this.formBuilder.group({
    programing_name: [null, Validators.required],
    exercise_year_id: [null, Validators.required],
  });

  ngOnInit(): void {
    this.exerciseYearService.getValidExerciseYears().subscribe({
      next: (response: any) => {
        this.exerciseYears = response.data
      }
    })
  }

  onSubmit() {
    this.programingService.createPrograming(this.formulario.value).subscribe({
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
