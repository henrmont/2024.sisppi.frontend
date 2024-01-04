import { Component, OnInit, Output, EventEmitter, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

export class AllNotificationsPageComponent implements OnInit {

  @Output() titleEvent: EventEmitter<string> = new EventEmitter();
  route = inject(ActivatedRoute)
  title: string = this.route.snapshot.data['title']

  ngOnInit(): void {
    this.titleEvent.emit(this.title);
  }

}
