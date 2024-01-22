import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxMaskDirective } from 'ngx-mask';
import { CountyService } from '../../../services/county.service';
import { UserService } from '../../../services/user.service';
import { SharedService } from '../../../services/shared.service';
import { Observable, map, startWith } from 'rxjs';

const notificationChannel = new BroadcastChannel('notification-channel');
const countyChannel = new BroadcastChannel('county-channel');
const userChannel = new BroadcastChannel('user-channel');

@Component({
  selector: 'app-update-user-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    NgxMaskDirective,
  ],
  templateUrl: './update-user-modal.component.html',
  styleUrl: './update-user-modal.component.scss'
})

export class UpdateUserModalComponent implements OnInit {

  formulario!: FormGroup

  data = inject(MAT_DIALOG_DATA)
  formBuilder = inject(FormBuilder)
  countyService = inject(CountyService)
  userService = inject(UserService)
  sharedService = inject(SharedService)
  dialogRef = inject(MatDialog)

  myControl = new FormControl('');
  options!: any[]
  filteredOptions!: Observable<any[]>;

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id: [this.data.info.id, [Validators.required]],
      name: [this.data.info.name, [Validators.required]],
      email: [this.data.info.email, [Validators.required, Validators.email]],
      cell_phone: [this.data.info.cell_phone, [Validators.required]],
      phone: [this.data.info.phone, [Validators.required]],
      county_id: [this.data.info.county_id],
      cpf: [this.data.info.cpf, [Validators.required]],
      is_valid: [this.data.info.is_valid]
    })

    if (this.data.info.county) {
      this.myControl.patchValue(this.data.info.county.name)
    }

    this.countyService.getCounties().subscribe({
      next: (response: any) => {
        this.options = response.data
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(county => (county ? this._filter(county) : this.options.slice())),
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
  }

  onKeyUp() {
    this.formulario.patchValue({
      county_id: null,
    })
  }

  onSubmit() {
    this.userService.updateUser(this.formulario.value).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
        notificationChannel.postMessage('update')
        countyChannel.postMessage('update')
        userChannel.postMessage('update')
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
