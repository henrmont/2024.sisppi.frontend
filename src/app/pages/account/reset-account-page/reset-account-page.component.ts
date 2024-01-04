import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ResetAccountBoxComponent } from '../../../components/account/reset-account-box/reset-account-box.component';

@Component({
  selector: 'app-reset-account-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    ResetAccountBoxComponent,
  ],
  templateUrl: './reset-account-page.component.html',
  styleUrl: './reset-account-page.component.scss'
})

export class ResetAccountPageComponent {

}
