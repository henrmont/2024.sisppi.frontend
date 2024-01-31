import { Component, Input, OnInit, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NotificationsMenuComponent } from '../notifications-menu/notifications-menu.component';
import { RouterModule } from '@angular/router';
import { FavoriteService } from '../../services/favorite.service';

const favoriteChannel = new BroadcastChannel('favorite-channel');

@Component({
  selector: 'app-main-toolbar',
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NotificationsMenuComponent,
  ],
  templateUrl: './main-toolbar.component.html',
  styleUrl: './main-toolbar.component.scss'
})

export class MainToolbarComponent implements OnInit {

  @Input() drawer: any

  favoriteService = inject(FavoriteService)
  favorites: any

  ngOnInit(): void {
    favoriteChannel.onmessage = (message) => {
      if (message.data === 'update') {
        this.ngOnInit()
      }
    }
    this.favoriteService.getFavorites().subscribe({
      next: (response: any) => {
        if (response.data.length > 0) {
          this.favorites = response.data
        }
      }
    })
  }

}
