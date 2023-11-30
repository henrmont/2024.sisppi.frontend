import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideToolbarComponent } from './side-toolbar/side-toolbar.component';



@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainToolbarComponent, SideToolbarComponent, MatSidenavModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
