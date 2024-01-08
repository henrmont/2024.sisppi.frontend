import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-create-account-box',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  templateUrl: './create-account-box.component.html',
  styleUrl: './create-account-box.component.scss'
})

export class CreateAccountBoxComponent implements OnInit {

  formulario!: FormGroup
  isPasswordChecked: boolean = false
  isEmailExists: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      name: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      cpassword: [null, [Validators.required, Validators.minLength(6)]]
    })
  }

  checkPassword() {
    if (this.formulario.get('password')?.value == this.formulario.get('cpassword')?.value) {
      this.isPasswordChecked = true
    } else {
      this.isPasswordChecked = false
    }
  }

  checkEmail() {
    this.accountService.getAccount(this.formulario.get('email')?.value).subscribe({
      next: (response: any) => {
        if (response.data.length > 0) {
          this.isEmailExists = true
        } else {
          this.isEmailExists = false
        }
      }
    })
  }

  onSubmit() {
    this.accountService.createAccount(this.formulario.value).subscribe({
      next: () => {
        this.sharedService.showMessage('Usuário criado com sucesso.')
      },
      error: () => {
        this.sharedService.showMessage('Erro no sistema.')
      },
      complete: () => {
        this.router.navigate(['/'])
      }
    })
  }

}
