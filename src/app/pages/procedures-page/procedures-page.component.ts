import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { ImportProceduresModalComponent } from '../../components/procedures/import-procedures-modal/import-procedures-modal.component';
import { ProceduresListComponent } from '../../components/procedures/procedures-list/procedures-list.component';
import { BookmarkComponent } from '../../components/shared/bookmark/bookmark.component';

@Component({
  selector: 'app-procedures-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    BookmarkComponent,
    ProceduresListComponent,
  ],
  templateUrl: './procedures-page.component.html',
  styleUrl: './procedures-page.component.scss'
})
export class ProceduresPageComponent {

  @Input() link: any
  dialog = inject(MatDialog)
  route = inject(ActivatedRoute)

  importProcedures() {
    this.dialog.open(ImportProceduresModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '30%',
      height: 'auto',
    })
  }

}
