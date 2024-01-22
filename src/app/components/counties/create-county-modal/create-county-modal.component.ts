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
import { CountyService } from '../../../services/county.service';
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

const countyChannel = new BroadcastChannel('county-channel');
const notificationChannel = new BroadcastChannel('notification-channel');

@Component({
  selector: 'app-create-county-modal',
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
  ],
  templateUrl: './create-county-modal.component.html',
  styleUrl: './create-county-modal.component.scss',
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class CreateCountyModalComponent implements OnInit {

  fus = [
    {value: 'AC', viewValue: 'Acre'},
    {value: 'AL', viewValue: 'Alagoas'},
    {value: 'AP', viewValue: 'Amapá'},
    {value: 'AM', viewValue: 'Amazonas'},
    {value: 'BA', viewValue: 'Bahia'},
    {value: 'CE', viewValue: 'Ceará'},
    {value: 'DF', viewValue: 'Distrito Federal'},
    {value: 'ES', viewValue: 'Espírito Santo'},
    {value: 'GO', viewValue: 'Goiás'},
    {value: 'MA', viewValue: 'Maranhão'},
    {value: 'MT', viewValue: 'Mato Grosso'},
    {value: 'MS', viewValue: 'Mato Grosso do Sul'},
    {value: 'MG', viewValue: 'Minas Gerais'},
    {value: 'PA', viewValue: 'Pará'},
    {value: 'PB', viewValue: 'Paraíba'},
    {value: 'PR', viewValue: 'Paraná'},
    {value: 'PE', viewValue: 'Pernanbuco'},
    {value: 'PI', viewValue: 'Piauí'},
    {value: 'RJ', viewValue: 'Rio de Janeiro'},
    {value: 'RN', viewValue: 'Rio Grande do Norte'},
    {value: 'RS', viewValue: 'Rio Grande do Sul'},
    {value: 'RO', viewValue: 'Rondônia'},
    {value: 'RR', viewValue: 'Roraima'},
    {value: 'SC', viewValue: 'Santa Catarina'},
    {value: 'SP', viewValue: 'São Paulo'},
    {value: 'SE', viewValue: 'Sergipe'},
    {value: 'TO', viewValue: 'Tocantins'},
  ];

  formulario!: FormGroup

  formBuilder = inject(FormBuilder)
  countyService = inject(CountyService)
  sharedService = inject(SharedService)
  dialogRef = inject(MatDialog)

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      ibge: [null, [Validators.required]],
      name: [null, [Validators.required]],
      fu: [null, [Validators.required]],
      tcu_population_base_year: [null, [Validators.required]],
      population: [null, [Validators.required]],
      health_region: [null, [Validators.required]],
      health_region_code: [null, [Validators.required]],
      macroregion: [null, [Validators.required]],
      pole_municipality: [null, [Validators.required]],
      distance_from_pole_municipality: [null, [Validators.required]],
      distance_from_the_capital: [null, [Validators.required]],
      img_map: [null, [Validators.required]]
    })
  }

  onSubmit() {
    this.countyService.createCounty(this.formulario.value).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
        countyChannel.postMessage('update')
        notificationChannel.postMessage('update')
      },
      error: (response: any) => {
        this.sharedService.showMessage(response.message)
      },
      complete: () => {
        this.dialogRef.closeAll()
      }
    })
  }

}
