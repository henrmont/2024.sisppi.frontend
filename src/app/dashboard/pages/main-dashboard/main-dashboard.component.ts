import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from '../../../account/services/account.service';

@Component({
  selector: 'app-main-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.scss'
})
export class MainDashboardComponent implements OnInit {

  constructor(
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.accountService.getCredentials().subscribe({
      next: (response: any) => {
        console.log(response)
      },
      error: () => {
        console.log('Error')
      }
    })
  }
}
