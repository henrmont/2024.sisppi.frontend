import { Component, OnInit, inject } from '@angular/core';
import { NotificationService } from '../../../services/notification.service';
import { MatListModule } from '@angular/material/list';
import { NotificationItemComponent } from '../notification-item/notification-item.component';

@Component({
  selector: 'app-notifications-list',
  standalone: true,
  imports: [
    MatListModule,
    NotificationItemComponent,
  ],
  templateUrl: './notifications-list.component.html',
  styleUrl: './notifications-list.component.scss'
})
export class NotificationsListComponent implements OnInit {

  notificationService = inject(NotificationService)

  notifications: any

  ngOnInit(): void {
    this.notificationService.getAllNotifications().subscribe({
      next: (response: any) => {
        this.notifications = response.data
      }
    })
  }

}
