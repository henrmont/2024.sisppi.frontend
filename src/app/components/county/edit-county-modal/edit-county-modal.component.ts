import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CountyService } from '../../../services/county.service';
import { SharedService } from '../../../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-county-modal',
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
  ],
  templateUrl: './edit-county-modal.component.html',
  styleUrl: './edit-county-modal.component.scss'
})

export class EditCountyModalComponent implements OnInit {

  formulario!: FormGroup

  data = inject(MAT_DIALOG_DATA)
  formBuilder = inject(FormBuilder)
  countyService = inject(CountyService)
  sharedService = inject(SharedService)
  router = inject(Router)

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
    this.countyService.getCounty(this.data.id).subscribe({
      next: (response: any) => {
        console.log(response.data)
        this.formulario.get('ibge')?.patchValue(response.data.ibge)
        this.formulario.get('name')?.patchValue(response.data.name)
        this.formulario.get('fu')?.patchValue(response.data.fu)
        this.formulario.get('tcu_population_base_year')?.patchValue(response.data.tcu_population_base_year)
        this.formulario.get('population')?.patchValue(response.data.population)
        this.formulario.get('health_region')?.patchValue(response.data.health_region)
        this.formulario.get('health_region_code')?.patchValue(response.data.health_region_code)
        this.formulario.get('macroregion')?.patchValue(response.data.macroregion)
        this.formulario.get('pole_municipality')?.patchValue(response.data.pole_municipality)
        this.formulario.get('distance_from_pole_municipality')?.patchValue(response.data.distance_from_pole_municipality)
        this.formulario.get('distance_from_the_capital')?.patchValue(response.data.distance_from_the_capital)
        this.formulario.get('img_map')?.patchValue(response.data.img_map)
      }
    })
  }

  onSubmit() {

  }

}
