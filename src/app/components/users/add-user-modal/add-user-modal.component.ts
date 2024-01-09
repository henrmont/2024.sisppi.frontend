import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxMaskDirective } from 'ngx-mask';
import { CountyService } from '../../../services/county.service';
import { SharedService } from '../../../services/shared.service';
import { UserService } from '../../../services/user.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable, map, startWith } from 'rxjs';
import { CommonModule } from '@angular/common';

const notificationChannel = new BroadcastChannel('notification-channel');
const listCountyChannel = new BroadcastChannel('list-county-channel');
const listUserChannel = new BroadcastChannel('list-user-channel');

@Component({
  selector: 'app-add-user-modal',
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
    MatCheckboxModule,
    MatAutocompleteModule,
    NgxMaskDirective,
  ],
  templateUrl: './add-user-modal.component.html',
  styleUrl: './add-user-modal.component.scss'
})

export class AddUserModalComponent implements OnInit {

  formulario!: FormGroup

  formBuilder = inject(FormBuilder)
  countyService = inject(CountyService)
  userService = inject(UserService)
  sharedService = inject(SharedService)
  dialogRef = inject(MatDialog)

  myControl = new FormControl('');
  options!: any[]
  filteredOptions!: Observable<any[]>;
  isKeyUp: boolean = false

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      name: [null, [Validators.required]],
      cell_phone: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      county_id: [null],
      cpf: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      cpassword: [null, [Validators.required, Validators.minLength(6)]],
      is_valid: [false]
    })

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
    this.isKeyUp = false
  }

  onKeyUp() {
    this.isKeyUp = true
  }

  onSubmit() {
    this.userService.createUser(this.formulario.value).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
        notificationChannel.postMessage('update')
        listCountyChannel.postMessage('update')
        listUserChannel.postMessage('update')
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
