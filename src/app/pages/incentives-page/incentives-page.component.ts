import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BookmarkComponent } from '../../components/shared/bookmark/bookmark.component';
import { IncentivesListComponent } from '../../components/incentives/incentives-list/incentives-list.component';
import { ActivatedRoute } from '@angular/router';
import { CreateIncentiveModalComponent } from '../../components/incentives/create-incentive-modal/create-incentive-modal.component';

@Component({
  selector: 'app-incentives-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    BookmarkComponent,
    IncentivesListComponent,
  ],
  templateUrl: './incentives-page.component.html',
  styleUrl: './incentives-page.component.scss'
})
export class IncentivesPageComponent {

  @Input() link: any
  dialog = inject(MatDialog)
  route = inject(ActivatedRoute)

  createIncentive() {
    this.dialog.open(CreateIncentiveModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '40%',
      height: 'auto',
    })
  }

}
