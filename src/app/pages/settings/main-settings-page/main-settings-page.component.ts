import { Component, OnInit, Output, inject, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-settings-page',
  standalone: true,
  imports: [],
  templateUrl: './main-settings-page.component.html',
  styleUrl: './main-settings-page.component.scss'
})

export class MainSettingsPageComponent implements OnInit {

  @Output() titleEvent: EventEmitter<string> = new EventEmitter();
  route = inject(ActivatedRoute)
  title: string = this.route.snapshot.data['title']

  ngOnInit(): void {
    this.titleEvent.emit(this.title);
  }

}
