import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxMaskDirective } from 'ngx-mask';
import { ExerciseYearService } from '../../../services/exercise-year.service';
import { CompetenceService } from '../../../services/competence.service';
import { MinisterialOrdinaceService } from '../../../services/ministerial-ordinace.service';
import { SharedService } from '../../../services/shared.service';
import { CurrencyMaskModule } from 'ng2-currency-mask';

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
  selector: 'app-create-ministerial-ordinace-modal',
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
  templateUrl: './create-ministerial-ordinace-modal.component.html',
  styleUrl: './create-ministerial-ordinace-modal.component.scss',
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class CreateMinisterialOrdinaceModalComponent implements OnInit {

  formBuilder = inject(FormBuilder);
  exerciseYearService = inject(ExerciseYearService)
  competenceService = inject(CompetenceService)
  ministerialOrdinaceService = inject(MinisterialOrdinaceService)
  sharedService = inject(SharedService)
  dialog = inject(MatDialog)

  exerciseYears: any
  competencies: any

  formulario: FormGroup = this.formBuilder.group({
    number: [null, Validators.required],
    name: [null, Validators.required],
    date: [null, Validators.required],
    value: [null, Validators.required],
    type: [null, Validators.required],
    observation: [null, Validators.required],
    exercise_year_id: [null, Validators.required],
    competence_id: [null, Validators.required],
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
    this.ministerialOrdinaceService.createMinisterialOrdinace(this.formulario.value).subscribe({
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
