import { Component, OnInit, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-notifications-list',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
  ],
  templateUrl: './notifications-list.component.html',
  styleUrl: './notifications-list.component.scss'
})

export class NotificationsListComponent implements OnInit {

  notificationService = inject(NotificationService)
  notifications: any

  ngOnInit(): void {
    this.notificationService.setReadNotifications().subscribe()
    this.notificationService.getAllNotifications().subscribe({
      next: (response: any) => {
        this.notifications = response.data
      }
    })
  }

}
