import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-notification-item',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
  ],
  templateUrl: './notification-item.component.html',
  styleUrl: './notification-item.component.scss'
})
export class NotificationItemComponent {

  @Input() item: any

}
