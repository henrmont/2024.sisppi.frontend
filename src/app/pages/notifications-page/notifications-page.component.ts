import { Component } from '@angular/core';
import { NotificationsListComponent } from '../../components/notifications/notifications-list/notifications-list.component';

@Component({
  selector: 'app-notifications-page',
  standalone: true,
  imports: [
    NotificationsListComponent,
  ],
  templateUrl: './notifications-page.component.html',
  styleUrl: './notifications-page.component.scss'
})
export class NotificationsPageComponent {

}
