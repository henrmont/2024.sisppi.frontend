import { Component, OnInit, inject } from '@angular/core';
import { ExerciseYearService } from '../../../services/exercise-year.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { UpdateExerciseYearModalComponent } from '../update-exercise-year-modal/update-exercise-year-modal.component';
import { DeleteExerciseYearModalComponent } from '../delete-exercise-year-modal/delete-exercise-year-modal.component';
import { ValidateExerciseYearModalComponent } from '../validate-exercise-year-modal/validate-exercise-year-modal.component';

const exerciseYearChannel = new BroadcastChannel('exercise-year-channel');

@Component({
  selector: 'app-exercise-years-list',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDividerModule,
    MatDialogModule,
    MatBadgeModule,
  ],
  templateUrl: './exercise-years-list.component.html',
  styleUrl: './exercise-years-list.component.scss'
})
export class ExerciseYearsListComponent implements OnInit {

  dialog = inject(MatDialog)
  exerciseYearService = inject(ExerciseYearService)
  route = inject(ActivatedRoute)

  exerciseYears: any

  ngOnInit(): void {
    exerciseYearChannel.onmessage = (message) => {
      if (message.data === 'update') {
        this.exerciseYearService.getExerciseYears().subscribe({
          next: (response: any) => {
            this.exerciseYears = response.data
          }
        })
      }
    }
    this.exerciseYearService.getExerciseYears().subscribe({
      next: (response: any) => {
        this.exerciseYears = response.data
      }
    })
  }

  updateExerciseYear(info: any) {
    this.dialog.open(UpdateExerciseYearModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '30%',
      height: '22%',
      data: {
        info: info
      }
    })
  }

  deleteExerciseYear(info: any) {
    this.dialog.open(DeleteExerciseYearModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '30%',
      height: '22%',
      data: {
        info: info
      }
    })
  }

  validateExerciseYear(info: any) {
    this.dialog.open(ValidateExerciseYearModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '30%',
      height: '22%',
      data: {
        info: info
      }
    })
  }


}
