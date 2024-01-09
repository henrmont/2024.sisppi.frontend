import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../components/shared/breadcrumb/breadcrumb.component';
import { NotificationsListComponent } from '../../components/notifications/notifications-list/notifications-list.component';

@Component({
  selector: 'app-notifications-page',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    NotificationsListComponent,
  ],
  templateUrl: './notifications-page.component.html',
  styleUrl: './notifications-page.component.scss'
})
export class NotificationsPageComponent {

  breadcrumb = [
    {name: 'Notificações'},
    {name: 'Lista de notificações'}
  ]

}
