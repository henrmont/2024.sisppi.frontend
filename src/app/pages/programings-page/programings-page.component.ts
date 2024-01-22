import { Component, Input, OnInit, inject } from '@angular/core';
import { CreateProgramingModalComponent } from '../../components/programings/create-programing-modal/create-programing-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProgramingsListComponent } from '../../components/programings/programings-list/programings-list.component';
import { ActivatedRoute } from '@angular/router';
import { BookmarkComponent } from '../../components/shared/bookmark/bookmark.component';

@Component({
  selector: 'app-programings-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    BookmarkComponent,
    ProgramingsListComponent,
  ],
  templateUrl: './programings-page.component.html',
  styleUrl: './programings-page.component.scss'
})
export class ProgramingsPageComponent {

  @Input() link: any
  dialog = inject(MatDialog)
  route = inject(ActivatedRoute)

  createPrograming() {
    this.dialog.open(CreateProgramingModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '30%',
      height: 'auto',
    })
  }

}
