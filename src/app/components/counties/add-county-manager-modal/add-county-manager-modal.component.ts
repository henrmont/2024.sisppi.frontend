import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedService } from '../../../services/shared.service';
import { Observable, map, startWith } from 'rxjs';
import { UserService } from '../../../services/user.service';

const countyChannel = new BroadcastChannel('county-channel');
const notificationChannel = new BroadcastChannel('notification-channel');
const userChannel = new BroadcastChannel('user-channel');

@Component({
  selector: 'app-add-county-manager-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDialogModule,
  ],
  templateUrl: './add-county-manager-modal.component.html',
  styleUrl: './add-county-manager-modal.component.scss'
})
export class AddCountyManagerModalComponent {

  data = inject(MAT_DIALOG_DATA)
  sharedService = inject(SharedService)
  userService = inject(UserService)
  formBuilder = inject(FormBuilder);
  dialogRef = inject(MatDialog)

  myControl = new FormControl('');
  options!: any[]
  filteredOptions!: Observable<any[]>;
  isKeyUp: boolean = false

  formulario: FormGroup = this.formBuilder.group({
    county_id: [this.data.id, Validators.required],
    user_id: [null, Validators.required],
  });

  ngOnInit(): void {
    this.userService.getEmptyManagerUsers().subscribe({
      next: (response: any) => {
        this.options = response.data
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(user => (user ? this._filter(user) : this.options.slice())),
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
      user_id: id,
    })
    this.isKeyUp = false
  }

  onKeyUp() {
    this.isKeyUp = true
  }

  onSubmit() {
    this.userService.changeNoEmptyManagerUser(this.formulario.value).subscribe({
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
