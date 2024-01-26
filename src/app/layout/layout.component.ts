import { Component, OnInit, inject, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideToolbarComponent } from './side-toolbar/side-toolbar.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    MainToolbarComponent,
    SideToolbarComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})

export class LayoutComponent implements OnInit {

  route = inject(ActivatedRoute);
  user: any
  title!: string

  ngOnInit(): void {
    this.route.data.subscribe({
      next: (response: any) => {
        this.user = response.auth
        this.title = response.title
      }
    })
  }

}
