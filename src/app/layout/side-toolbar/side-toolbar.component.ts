import { Component, Input, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { NotificationService } from '../../services/notification.service';
import { MainMenuComponent } from '../main-menu/main-menu.component';

const notificationChannel = new BroadcastChannel('notification-channel');

@Component({
  selector: 'app-side-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    RouterModule,
    MainMenuComponent,
  ],
  templateUrl: './side-toolbar.component.html',
  styleUrl: './side-toolbar.component.scss'
})

export class SideToolbarComponent implements OnInit {

  @Input() drawer: any
  @Input() user: any

  sharedService = inject(SharedService);
  notificationService = inject(NotificationService)
  notifications: any
  notificationsCount: any

  ngOnInit(): void {
    notificationChannel.onmessage = (message) => {
      if (message.data === 'update') {
        this.notificationService.getFlashNotifications().subscribe({
          next: (response: any) => {
            this.notifications = response.data
            this.notificationsCount = response.data.length
          }
        })
      }
    }
    this.notificationService.getFlashNotifications().subscribe({
      next: (response: any) => {
        this.notifications = response.data
        this.notificationsCount = response.data.length
      }
    })
  }

}
