import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { LoginAccountBoxComponent } from '../../../components/account/login-account-box/login-account-box.component';

@Component({
  selector: 'app-login-account-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    LoginAccountBoxComponent,
  ],
  templateUrl: './login-account-page.component.html',
  styleUrl: './login-account-page.component.scss'
})

export class LoginAccountPageComponent {

}
