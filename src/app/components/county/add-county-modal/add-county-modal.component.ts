import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CountyService } from '../../../services/county.service';
import { SharedService } from '../../../services/shared.service';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-county-modal',
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
  ],
  templateUrl: './add-county-modal.component.html',
  styleUrl: './add-county-modal.component.scss'
})

export class AddCountyModalComponent implements OnInit {

  formulario!: FormGroup

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
  }

  onSubmit() {

  }

}
