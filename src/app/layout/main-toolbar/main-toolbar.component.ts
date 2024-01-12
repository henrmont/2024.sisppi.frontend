import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FavoriteService } from '../../services/favorite.service';
import { NotificationService } from '../../services/notification.service';
import { AddFavoriteModalComponent } from '../../components/favorites/add-favorite-modal/add-favorite-modal.component';

const notificationChannel = new BroadcastChannel('notification-channel');
const favoriteChannel = new BroadcastChannel('favorite-channel');

@Component({
  selector: 'app-main-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatBadgeModule,
    RouterModule,
    MatDialogModule
  ],
  templateUrl: './main-toolbar.component.html',
  styleUrl: './main-toolbar.component.scss'
})

export class MainToolbarComponent implements OnInit {

  favoriteService = inject(FavoriteService)
  notificationService = inject(NotificationService)
  dialog = inject(MatDialog)
  route = inject(ActivatedRoute)

  @Input() title: any
  @Input() drawer: any
  @Input() user: any
  searchBar: boolean = false
  links: any
  disabled: boolean = true
  notifications: any = null

  ngOnInit(): void {
    notificationChannel.onmessage = (message) => {
      if (message.data === 'update') {
        this.notificationService.getUnreadNotifications().subscribe({
          next: (response: any) => {
            if (response.data.length > 0) {
              this.notifications = response.data.length
            }
          }
        })
      }
    }
    this.notificationService.getUnreadNotifications().subscribe({
      next: (response: any) => {
        if (response.data.length > 0) {
          this.notifications = response.data.length
        }
      }
    })
    favoriteChannel.onmessage = (message) => {
      if (message.data === 'update') {
        this.favoriteService.getFavorites(this.user.id).subscribe({
          next: (response: any) => {
            this.links = response.data
            if (this.links.length >= 5) {
              this.disabled = false
            }
          }
        })
      }
    }
    this.favoriteService.getFavorites(this.user.id).subscribe({
      next: (response: any) => {
        this.links = response.data
        if (this.links.length >= 5) {
          this.disabled = false
        }
      }
    })
  }

  readNotifications() {
    this.notifications = null
    this.notificationService.setReadNotifications().subscribe({})
  }

  addFavorite(id: number) {
    this.dialog.open(AddFavoriteModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '30%',
      height: '20%',
      data: {
        id: id
      }
    })
  }

}
