import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NgxMaskDirective } from 'ngx-mask';
import { ExerciseYearService } from '../../../services/exercise-year.service';
import { CompetenceService } from '../../../services/competence.service';
import { MinisterialOrdinaceService } from '../../../services/ministerial-ordinace.service';
import { SharedService } from '../../../services/shared.service';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

const ministerialOrdinaceChannel = new BroadcastChannel('ministerial-ordinace-channel');
const notificationChannel = new BroadcastChannel('notification-channel');

@Component({
  selector: 'app-update-ministerial-ordinace-modal',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaskDirective,
    CurrencyMaskModule,
  ],
  templateUrl: './update-ministerial-ordinace-modal.component.html',
  styleUrl: './update-ministerial-ordinace-modal.component.scss',
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class UpdateMinisterialOrdinaceModalComponent implements OnInit {

  data = inject(MAT_DIALOG_DATA)
  formBuilder = inject(FormBuilder);
  exerciseYearService = inject(ExerciseYearService)
  competenceService = inject(CompetenceService)
  ministerialOrdinaceService = inject(MinisterialOrdinaceService)
  sharedService = inject(SharedService)
  dialog = inject(MatDialog)

  exerciseYears: any
  competencies: any

  formulario: FormGroup = this.formBuilder.group({
    id: [this.data.info.id, Validators.required],
    number: [this.data.info.number, Validators.required],
    name: [this.data.info.name, Validators.required],
    date: [this.data.info.date, Validators.required],
    value: [this.data.info.value, Validators.required],
    type: [this.data.info.type, Validators.required],
    observation: [this.data.info.observation, Validators.required],
    exercise_year_id: [this.data.info.exercise_year_id, Validators.required],
    competence_id: [this.data.info.competence_id, Validators.required],
  });

  ngOnInit(): void {
    this.exerciseYearService.getValidExerciseYears().subscribe({
      next: (response: any) => {
        this.exerciseYears = response.data
      }
    })
    this.competenceService.getValidCompetencies().subscribe({
      next: (response: any) => {
        this.competencies = response.data
      }
    })
  }

  onSubmit() {
    this.ministerialOrdinaceService.updateMinisterialOrdinace(this.formulario.value).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
        ministerialOrdinaceChannel.postMessage('update')
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
