import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProgramingProcedureService } from '../../../services/programing-procedure.service';
import { SharedService } from '../../../services/shared.service';

const programingChannel = new BroadcastChannel('programing-channel');

@Component({
  selector: 'app-type-programing-procedure-modal',
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
    MatSelectModule
  ],
  templateUrl: './type-programing-procedure-modal.component.html',
  styleUrl: './type-programing-procedure-modal.component.scss'
})
export class TypeProgramingProcedureModalComponent {

  data = inject(MAT_DIALOG_DATA)
  formBuilder = inject(FormBuilder);
  programingProcedureService = inject(ProgramingProcedureService)
  sharedService = inject(SharedService)
  dialog = inject(MatDialogRef<TypeProgramingProcedureModalComponent>)

  formulario: FormGroup = this.formBuilder.group({
    id: [this.data.info.id, Validators.required],
    type: [this.data.info.type, Validators.required],
  });

  onSubmit() {
    this.programingProcedureService.typeProgramingProcedure(this.formulario.value).subscribe({
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
