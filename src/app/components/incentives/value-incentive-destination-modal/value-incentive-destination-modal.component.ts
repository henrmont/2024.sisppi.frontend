import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { IncentiveDestinationService } from '../../../services/incentive-destination.service';
import { SharedService } from '../../../services/shared.service';

const incentiveChannel = new BroadcastChannel('incentive-channel');

@Component({
  selector: 'app-value-incentive-destination-modal',
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
    CurrencyMaskModule,
  ],
  templateUrl: './value-incentive-destination-modal.component.html',
  styleUrl: './value-incentive-destination-modal.component.scss'
})
export class ValueIncentiveDestinationModalComponent implements OnInit {

  data = inject(MAT_DIALOG_DATA)
  formBuilder = inject(FormBuilder);
  incentiveDestinationService = inject(IncentiveDestinationService)
  sharedService = inject(SharedService)
  dialog = inject(MatDialogRef<ValueIncentiveDestinationModalComponent>)
  isValidValue:boolean = true

  formulario: FormGroup = this.formBuilder.group({
    id: [this.data.info.id, Validators.required],
    value: [this.data.info.value, Validators.required],
  });

  ngOnInit(): void {
    this.checkBalance()
  }

  onSubmit() {
    this.incentiveDestinationService.valueIncentiveDestination(this.formulario.value).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
        incentiveChannel.postMessage('update')
      },
      error: (response: any) => {
        this.sharedService.showMessage(response.message)
      },
      complete: () => {
        this.dialog.close()
      }
    })
  }

  checkBalance() {
    if (this.formulario.get('value')?.value > this.data.balance) {
      this.isValidValue = true
    } else {
      this.isValidValue = false
    }
  }

}
