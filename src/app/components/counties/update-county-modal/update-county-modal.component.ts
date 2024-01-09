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
import { NgxMaskDirective } from 'ngx-mask';
import { SharedService } from '../../../services/shared.service';
import { CountyService } from '../../../services/county.service';

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

const listCountyChannel = new BroadcastChannel('list-county-channel');
const notificationChannel = new BroadcastChannel('notification-channel');

@Component({
  selector: 'app-update-county-modal',
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
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaskDirective,
  ],
  templateUrl: './update-county-modal.component.html',
  styleUrl: './update-county-modal.component.scss',
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class UpdateCountyModalComponent implements OnInit {

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

  data = inject(MAT_DIALOG_DATA)
  formBuilder = inject(FormBuilder)
  sharedService = inject(SharedService)
  countyService = inject(CountyService)
  dialogRef = inject(MatDialog)

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id: [this.data.info.id, [Validators.required]],
      ibge: [this.data.info.ibge, [Validators.required]],
      name: [this.data.info.name, [Validators.required]],
      fu: [this.data.info.fu, [Validators.required]],
      tcu_population_base_year: [this.data.info.tcu_population_base_year, [Validators.required]],
      population: [this.data.info.population, [Validators.required]],
      health_region: [this.data.info.health_region, [Validators.required]],
      health_region_code: [this.data.info.health_region_code, [Validators.required]],
      macroregion: [this.data.info.macroregion, [Validators.required]],
      pole_municipality: [this.data.info.pole_municipality, [Validators.required]],
      distance_from_pole_municipality: [this.data.info.distance_from_pole_municipality, [Validators.required]],
      distance_from_the_capital: [this.data.info.distance_from_the_capital, [Validators.required]],
      img_map: [this.data.info.img_map, [Validators.required]]
    })
  }

  onSubmit() {
    this.countyService.updateCounty(this.formulario.value).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
        listCountyChannel.postMessage('update')
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
