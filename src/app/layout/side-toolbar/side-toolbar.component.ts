import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { MainMenuComponent } from '../main-menu/main-menu.component';


@Component({
  selector: 'app-side-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    RouterModule,
    MainMenuComponent,
  ],
  templateUrl: './side-toolbar.component.html',
  styleUrl: './side-toolbar.component.scss'
})

export class SideToolbarComponent {

  @Input() drawer: any
  @Input() user: any

  sharedService = inject(SharedService);

}
