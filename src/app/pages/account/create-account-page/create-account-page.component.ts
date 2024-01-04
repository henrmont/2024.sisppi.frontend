import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CreateAccountBoxComponent } from '../../../components/account/create-account-box/create-account-box.component';

@Component({
  selector: 'app-create-account-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    CreateAccountBoxComponent,
  ],
  templateUrl: './create-account-page.component.html',
  styleUrl: './create-account-page.component.scss'
})

export class CreateAccountPageComponent {

}
