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
import { SharedService } from '../../../services/shared.service';
import { ProcedureService } from '../../../services/procedure.service';
import { Observable, map, startWith } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective } from 'ngx-mask';
import { ProgramingProcedureService } from '../../../services/programing-procedure.service';

const programingChannel = new BroadcastChannel('programing-channel');

@Component({
  selector: 'app-add-programing-procedure-modal',
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
    NgxMaskDirective
  ],
  templateUrl: './add-programing-procedure-modal.component.html',
  styleUrl: './add-programing-procedure-modal.component.scss'
})
export class AddProgramingProcedureModalComponent implements OnInit {

  data = inject(MAT_DIALOG_DATA)
  sharedService = inject(SharedService)
  procedureService = inject(ProcedureService)
  programingProcedureService = inject(ProgramingProcedureService)
  formBuilder = inject(FormBuilder);
  dialogRef = inject(MatDialogRef<AddProgramingProcedureModalComponent>)

  myControl = new FormControl('');
  options!: any[]
  filteredOptions!: Observable<any[]>;
  isKeyUp: boolean = false

  formulario: FormGroup = this.formBuilder.group({
    procedure_id: [null, Validators.required],
    programing_id: [this.data.id, Validators.required],
    amount: [null],
    type: [null],
  });

  ngOnInit(): void {
    this.procedureService.getProcedures().subscribe({
      next: (response: any) => {
        this.options = response.data
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(procedure => (procedure ? this._filter(procedure) : this.options.slice())),
        );
      }
    })

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.procedure_name.toLowerCase().includes(filterValue));
  }

  onSelect(id: number) {
    this.formulario.patchValue({
      procedure_id: id,
    })
    this.isKeyUp = false
  }

  onKeyUp() {
    this.isKeyUp = true
  }

  onSubmit() {
    this.programingProcedureService.addProgramingProcedure(this.formulario.value).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
        programingChannel.postMessage('update')
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
