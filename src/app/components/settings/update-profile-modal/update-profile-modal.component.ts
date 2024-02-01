import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedService } from '../../../services/shared.service';
import { UserService } from '../../../services/user.service';
import { NgxMaskDirective } from 'ngx-mask';
import { Router } from '@angular/router';

const userChannel = new BroadcastChannel('user-channel');

@Component({
  selector: 'app-update-profile-modal',
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
    MatSelectModule,
    NgxMaskDirective,
  ],
  templateUrl: './update-profile-modal.component.html',
  styleUrl: './update-profile-modal.component.scss'
})
export class UpdateProfileModalComponent {

  data = inject(MAT_DIALOG_DATA)
  formBuilder = inject(FormBuilder);
  userService = inject(UserService)
  sharedService = inject(SharedService)
  dialog = inject(MatDialog)
  router = inject(Router)

  formulario: FormGroup = this.formBuilder.group({
    id: [this.data.info.id, Validators.required],
    name: [this.data.info.name, Validators.required],
    phone: [this.data.info.phone, Validators.required],
    cell_phone: [this.data.info.cell_phone, Validators.required],
  });

  onSubmit() {
    this.userService.updateProfile(this.formulario.value).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
        userChannel.postMessage('update')
      },
      error: (response: any) => {
        this.sharedService.showMessage(response.message)
      },
      complete: () => {
        this.dialog.closeAll()
        this.router.navigate(['/'])
      }
    })
  }

}
