import { Component, OnInit, inject } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NotificationService } from '../../services/notification.service';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';

const notificationChannel = new BroadcastChannel('notification-channel');

@Component({
  selector: 'app-notifications-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
  ],
  templateUrl: './notifications-menu.component.html',
  styleUrl: './notifications-menu.component.scss'
})
export class NotificationsMenuComponent implements OnInit {

  notificationService = inject(NotificationService)

  notifications: any = null
  flashNotifications: any

  ngOnInit(): void {
    notificationChannel.onmessage = (message) => {
      if (message.data === 'update') {
        this.ngOnInit()
      }
    }
    this.notificationService.getUnreadNotifications().subscribe({
      next: (response: any) => {
        if (response.data.length > 0) {
          this.notifications = response.data.length
        }
      }
    })
    this.notificationService.getFlashNotifications().subscribe({
      next: (response: any) => {
        this.flashNotifications = response.data
      }
    })

  }

  readNotifications() {
    this.notifications = null
    this.notificationService.setReadNotifications().subscribe({})
  }



}
