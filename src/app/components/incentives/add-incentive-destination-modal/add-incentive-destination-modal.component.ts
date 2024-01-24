import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SharedService } from '../../../services/shared.service';
import { CountyService } from '../../../services/county.service';
import { IncentiveDestinationService } from '../../../services/incentive-destination.service';
import { Observable, map, startWith } from 'rxjs';

const incentiveChannel = new BroadcastChannel('incentive-channel');

@Component({
  selector: 'app-add-incentive-destination-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatAutocompleteModule,
    CurrencyMaskModule,
  ],
  templateUrl: './add-incentive-destination-modal.component.html',
  styleUrl: './add-incentive-destination-modal.component.scss'
})
export class AddIncentiveDestinationModalComponent implements OnInit {

  data = inject(MAT_DIALOG_DATA)
  sharedService = inject(SharedService)
  countyService = inject(CountyService)
  incentiveDestinationService = inject(IncentiveDestinationService)
  formBuilder = inject(FormBuilder);
  dialogRef = inject(MatDialogRef<AddIncentiveDestinationModalComponent>)

  myControl = new FormControl('');
  options!: any[]
  filteredOptions!: Observable<any[]>;
  isKeyUp: boolean = false
  isValidValue:boolean = true

  formulario: FormGroup = this.formBuilder.group({
    county_id: [null, Validators.required],
    incentive_id: [this.data.id, Validators.required],
    value: [null],
  });

  ngOnInit(): void {
    this.countyService.getCountiesWithoutIncentive(this.data.id).subscribe({
      next: (response: any) => {
        this.options = response.data
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(name => (name ? this._filter(name) : this.options.slice())),
        );
      }
    })

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  onSelect(id: number) {
    this.formulario.patchValue({
      county_id: id,
    })
    this.isKeyUp = false
  }

  onKeyUp() {
    this.isKeyUp = true
  }

  checkBalance() {
    if (this.formulario.get('value')?.value > this.data.balance) {
      this.isValidValue = true
    } else {
      this.isValidValue = false
    }
  }

  onSubmit() {
    this.incentiveDestinationService.addIncentiveDestination(this.formulario.value).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
        incentiveChannel.postMessage('update')
      },
      error: (response: any) => {
        this.sharedService.showMessage(response.message)
      },
      complete: () => {
        this.dialogRef.close()
      }
    })
  }

}
