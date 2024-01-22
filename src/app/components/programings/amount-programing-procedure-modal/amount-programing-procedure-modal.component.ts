import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProgramingProcedureService } from '../../../services/programing-procedure.service';
import { SharedService } from '../../../services/shared.service';
import { NgxMaskDirective } from 'ngx-mask';

const programingChannel = new BroadcastChannel('programing-channel');

@Component({
  selector: 'app-amount-programing-procedure-modal',
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
    NgxMaskDirective,
  ],
  templateUrl: './amount-programing-procedure-modal.component.html',
  styleUrl: './amount-programing-procedure-modal.component.scss'
})
export class AmountProgramingProcedureModalComponent {

  data = inject(MAT_DIALOG_DATA)
  formBuilder = inject(FormBuilder);
  programingProcedureService = inject(ProgramingProcedureService)
  sharedService = inject(SharedService)
  dialog = inject(MatDialogRef<AmountProgramingProcedureModalComponent>)

  formulario: FormGroup = this.formBuilder.group({
    id: [this.data.info.id, Validators.required],
    amount: [this.data.info.amount, Validators.required],
  });

  onSubmit() {
    this.programingProcedureService.amountProgramingProcedure(this.formulario.value).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
        programingChannel.postMessage('update')
      },
      error: (response: any) => {
        this.sharedService.showMessage(response.message)
      },
      complete: () => {
        this.dialog.close()
      }
    })
  }

}
