import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { RecoverAccountBoxComponent } from '../../../components/account/recover-account-box/recover-account-box.component';

@Component({
  selector: 'app-recover-account-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    RecoverAccountBoxComponent,
  ],
  templateUrl: './recover-account-page.component.html',
  styleUrl: './recover-account-page.component.scss'
})

export class RecoverAccountPageComponent {

}
