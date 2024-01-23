import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BookmarkComponent } from '../../components/shared/bookmark/bookmark.component';
import { ActivatedRoute } from '@angular/router';
import { CreateMinisterialOrdinaceModalComponent } from '../../components/ministerial-ordinaces/create-ministerial-ordinace-modal/create-ministerial-ordinace-modal.component';
import { MinisterialOrdinacesListComponent } from '../../components/ministerial-ordinaces/ministerial-ordinaces-list/ministerial-ordinaces-list.component';

@Component({
  selector: 'app-ministerial-ordinaces-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    BookmarkComponent,
    MinisterialOrdinacesListComponent,
  ],
  templateUrl: './ministerial-ordinaces-page.component.html',
  styleUrl: './ministerial-ordinaces-page.component.scss'
})
export class MinisterialOrdinacesPageComponent {

  @Input() link: any
  dialog = inject(MatDialog)
  route = inject(ActivatedRoute)

  createMinisterialOrdinace() {
    this.dialog.open(CreateMinisterialOrdinaceModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '40%',
      height: 'auto',
    })
  }

}
