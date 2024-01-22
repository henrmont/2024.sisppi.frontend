import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FinancingsListComponent } from '../../components/financings/financings-list/financings-list.component';
import { ModalitiesListComponent } from '../../components/modalities/modalities-list/modalities-list.component';
import { BookmarkComponent } from '../../components/shared/bookmark/bookmark.component';

@Component({
  selector: 'app-financings-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    BookmarkComponent,
    FinancingsListComponent,
    ModalitiesListComponent,
  ],
  templateUrl: './financings-page.component.html',
  styleUrl: './financings-page.component.scss'
})
export class FinancingsPageComponent {

  @Input() link: any

}
