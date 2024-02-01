import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserService } from '../../../services/user.service';
import { SharedService } from '../../../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password-modal',
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
  ],
  templateUrl: './change-password-modal.component.html',
  styleUrl: './change-password-modal.component.scss'
})
export class ChangePasswordModalComponent {

  data = inject(MAT_DIALOG_DATA)
  formBuilder = inject(FormBuilder);
  userService = inject(UserService)
  sharedService = inject(SharedService)
  dialog = inject(MatDialog)
  router = inject(Router)

  formulario: FormGroup = this.formBuilder.group({
    id: [this.data.info.id, Validators.required],
    password: [null, [Validators.required, Validators.minLength(6)]],
    cpassword: [null, [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    this.userService.changePassword(this.formulario.value).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
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
