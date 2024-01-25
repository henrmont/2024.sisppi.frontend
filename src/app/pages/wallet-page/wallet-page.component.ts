import { Component, Input, OnInit, inject } from '@angular/core';
import { BookmarkComponent } from '../../components/shared/bookmark/bookmark.component';
import { ExerciseYearService } from '../../services/exercise-year.service';
import { WalletItemComponent } from '../../components/wallet/wallet-item/wallet-item.component';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-wallet-page',
  standalone: true,
  imports: [
    BookmarkComponent,
    WalletItemComponent,
    MatExpansionModule,
  ],
  templateUrl: './wallet-page.component.html',
  styleUrl: './wallet-page.component.scss'
})
export class WalletPageComponent implements OnInit {

  @Input() link: any
  exerciseYearService = inject(ExerciseYearService)

  exerciseYears: any

  ngOnInit(): void {
    this.exerciseYearService.getWalletExerciseYears().subscribe({
      next: (response: any) => {
        this.exerciseYears = response.data
      }
    })
  }



}
