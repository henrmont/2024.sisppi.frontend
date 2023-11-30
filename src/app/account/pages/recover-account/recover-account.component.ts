import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RecoverAccountBoxComponent } from '../../components/recover-account-box/recover-account-box.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-recover-account',
  standalone: true,
  imports: [CommonModule, RecoverAccountBoxComponent, RouterModule, MatButtonModule],
  templateUrl: './recover-account.component.html',
  styleUrl: './recover-account.component.scss'
})
export class RecoverAccountComponent {

}
