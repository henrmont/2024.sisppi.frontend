import { Component, Input, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CreateExerciseYearsModalComponent } from '../../components/exercise-years/create-exercise-years-modal/create-exercise-years-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ExerciseYearsListComponent } from '../../components/exercise-years/exercise-years-list/exercise-years-list.component';
import { CompetenciesListComponent } from '../../components/competencies/competencies-list/competencies-list.component';
import { BookmarkComponent } from '../../components/shared/bookmark/bookmark.component';

@Component({
  selector: 'app-exercise-years-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    BookmarkComponent,
    ExerciseYearsListComponent,
    CompetenciesListComponent,
  ],
  templateUrl: './exercise-years-page.component.html',
  styleUrl: './exercise-years-page.component.scss'
})
export class ExerciseYearsPageComponent {

  @Input() link: any
  dialog = inject(MatDialog)
  route = inject(ActivatedRoute)

  createExeciseYear() {
    this.dialog.open(CreateExerciseYearsModalComponent, {
      disableClose: true,
      autoFocus: false,
      width: '30%',
      height: 'auto',
    })
  }

}
