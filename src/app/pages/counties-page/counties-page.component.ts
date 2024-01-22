import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CountiesListComponent } from '../../components/counties/counties-list/counties-list.component';
import { CreateCountyModalComponent } from '../../components/counties/create-county-modal/create-county-modal.component';
import { ActivatedRoute } from '@angular/router';
import { BookmarkComponent } from '../../components/shared/bookmark/bookmark.component';

@Component({
  selector: 'app-counties-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    BookmarkComponent,
    CountiesListComponent,
  ],
  templateUrl: './counties-page.component.html',
  styleUrl: './counties-page.component.scss'
})
export class CountiesPageComponent {

  @Input() link: any
  dialog = inject(MatDialog)
  route = inject(ActivatedRoute)

  createCounty() {
    this.dialog.open(CreateCountyModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '60%',
      height: 'auto',
    })
  }

}
