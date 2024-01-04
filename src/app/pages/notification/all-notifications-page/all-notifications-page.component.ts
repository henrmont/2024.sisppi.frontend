import { Component } from '@angular/core';
import { NotificationsListComponent } from '../../../components/notification/notifications-list/notifications-list.component';

@Component({
  selector: 'app-all-notifications-page',
  standalone: true,
  imports: [
    NotificationsListComponent,
  ],
  templateUrl: './all-notifications-page.component.html',
  styleUrl: './all-notifications-page.component.scss'
})

export class AllNotificationsPageComponent {

}
