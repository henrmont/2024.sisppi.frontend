import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RoleService } from '../../../services/role.service';
import { SharedService } from '../../../services/shared.service';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Observable, map, startWith } from 'rxjs';


const roleChannel = new BroadcastChannel('role-channel');
const permissionChannel = new BroadcastChannel('permission-channel');
const notificationChannel = new BroadcastChannel('notification-channel');

@Component({
  selector: 'app-create-role-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatAutocompleteModule,
  ],
  templateUrl: './create-role-modal.component.html',
  styleUrl: './create-role-modal.component.scss'
})
export class CreateRoleModalComponent implements OnInit {

  formBuilder = inject(FormBuilder);
  roleService = inject(RoleService)
  sharedService = inject(SharedService)
  dialogRef = inject(MatDialog)

  separatorKeysCodes: number[] = [ENTER, COMMA];
  permissionCtrl = new FormControl('');
  filteredPermissions!: Observable<any[]>;
  permissions: any[] = [];
  allPermissions: any[] = [];

  @ViewChild('permissionInput') permissionInput!: ElementRef<HTMLInputElement>;

  formulario: FormGroup = this.formBuilder.group({
    name: [null, Validators.required],
    permissions: [null, Validators.required]
  });

  ngOnInit(): void {
    this.roleService.getPermissions().subscribe({
      next: (response: any) => {
        this.allPermissions = response.data
        this.filteredPermissions = this.permissionCtrl.valueChanges.pipe(
          startWith(null),
          map((permission) => (permission ? this._filter(permission) : this.allPermissions.slice())),
        );
      }
    })
  }

  onSubmit() {
    this.roleService.createRole(this.formulario.value).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
        roleChannel.postMessage('update')
        permissionChannel.postMessage('update')
        notificationChannel.postMessage('update')
      },
      error: (response: any) => {
        this.sharedService.showMessage(response.message)
      },
      complete: () => {
        this.dialogRef.closeAll()
      }
    })
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value)

    if (value) {
      this.permissions.push(value);
    }

    event.chipInput!.clear();

    this.permissionCtrl.setValue(null);
  }

  remove(item: any): void {
    const index = this.permissions.indexOf(item);

    if (index >= 0) {
      this.permissions.splice(index, 1);
      this.allPermissions.push(item);
    }
    this.formulario.patchValue({
      permissions: this.permissions,
    })
    this.filteredPermissions = this.permissionCtrl.valueChanges.pipe(
      startWith(null),
      map((permission) => (permission ? this._filter(permission) : this.allPermissions.slice())),
    );
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.permissions.push(event.option.value);
    this.permissionInput.nativeElement.value = '';
    this.permissionCtrl.setValue(null);
    this.formulario.patchValue({
      permissions: this.permissions,
    })
    const index = this.allPermissions.indexOf(event.option.value);
    if (index >= 0) {
      this.allPermissions.splice(index, 1);
    }
    this.filteredPermissions = this.permissionCtrl.valueChanges.pipe(
      startWith(null),
      map((permission) => (permission ? this._filter(permission) : this.allPermissions.slice())),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value;

    return this.allPermissions.filter(permission => permission.name.includes(filterValue));
  }

}
