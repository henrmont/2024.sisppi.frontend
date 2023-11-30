import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CreateAccountBoxComponent } from '../../components/create-account-box/create-account-box.component';


@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [CommonModule, CreateAccountBoxComponent, RouterModule, MatButtonModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {

}
