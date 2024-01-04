import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-dashboard-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './main-dashboard-page.component.html',
  styleUrl: './main-dashboard-page.component.scss'
})

export class MainDashboardPageComponent implements OnInit {

  @Output() titleEvent: EventEmitter<string> = new EventEmitter();
  route = inject(ActivatedRoute)
  title: string = this.route.snapshot.data['title']

  ngOnInit(): void {
    this.titleEvent.emit(this.title);
  }

}
