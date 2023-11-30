import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { LoginAccountBoxComponent } from '../../components/login-account-box/login-account-box.component';


@Component({
  selector: 'app-login-account',
  standalone: true,
  imports: [CommonModule, LoginAccountBoxComponent, MatButtonModule, RouterModule],
  templateUrl: './login-account.component.html',
  styleUrl: './login-account.component.scss'
})
export class LoginAccountComponent {

}
