import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ResetAccountBoxComponent } from '../../components/reset-account-box/reset-account-box.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-reset-account',
  standalone: true,
  imports: [CommonModule, ResetAccountBoxComponent, RouterModule, MatButtonModule],
  templateUrl: './reset-account.component.html',
  styleUrl: './reset-account.component.scss'
})
export class ResetAccountComponent {

}
