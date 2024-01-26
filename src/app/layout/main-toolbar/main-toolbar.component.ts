import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NotificationsMenuComponent } from '../notifications-menu/notifications-menu.component';

@Component({
  selector: 'app-main-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NotificationsMenuComponent,
  ],
  templateUrl: './main-toolbar.component.html',
  styleUrl: './main-toolbar.component.scss'
})

export class MainToolbarComponent {

  @Input() title: any
  @Input() drawer: any

}
