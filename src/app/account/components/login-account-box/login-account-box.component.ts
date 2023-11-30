import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-login-account-box',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatInputModule, MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './login-account-box.component.html',
  styleUrl: './login-account-box.component.scss'
})
export class LoginAccountBoxComponent implements OnInit {

  formulario!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: [null],
      password: [null]
    })
  }

  onSubmit() {
    this.accountService.loginAccount(this.formulario.value).subscribe({
      next: (response: any) => {
        window.localStorage.setItem('token', response.access_token)
      },
      error: () => {
        this.sharedService.showMessage('Credenciais inválida')
      },
      complete: () => {
        this.router.navigate(['/dashboard'])
      }
    })
  }

}
