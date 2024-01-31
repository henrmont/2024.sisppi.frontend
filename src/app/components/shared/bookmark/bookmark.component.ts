import { Component, Input, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FavoriteService } from '../../../services/favorite.service';
import { SharedService } from '../../../services/shared.service';
import { ActivatedRoute } from '@angular/router';

const favoriteChannel = new BroadcastChannel('favorite-channel');

@Component({
  selector: 'app-bookmark',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './bookmark.component.html',
  styleUrl: './bookmark.component.scss'
})
export class BookmarkComponent implements OnInit {

  @Input() link: any
  favoriteService = inject(FavoriteService)
  sharedService = inject(SharedService)
  route = inject(ActivatedRoute)
  isFavorite!:boolean
  isLimited!:boolean

  ngOnInit(): void {
    this.favoriteService.checkFavorite(this.link).subscribe({
      next: (response: any) => {
        if (response.data.length == 0) {
          this.isFavorite = false
        } else {
          this.isFavorite = true
        }
      }
    })
    this.favoriteService.getFavorites().subscribe({
      next: (response: any) => {
        if (response.data.length >= 5) {
          this.isLimited = true
        } else {
          this.isLimited = false
        }
      }
    })
  }

  addFavorite() {
    this.favoriteService.addFavorite(this.link).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
        favoriteChannel.postMessage('update')
        this.ngOnInit()
      },
      error: (response: any) => {
        this.sharedService.showMessage(response.message)
      }
    })
  }

  removeFavorite() {
    this.favoriteService.removeFavorite(this.link).subscribe({
      next: (response: any) => {
        this.sharedService.showMessage(response.message)
        favoriteChannel.postMessage('update')
        this.ngOnInit()
      },
      error: (response: any) => {
        this.sharedService.showMessage(response.message)
      }
    })
  }

}
