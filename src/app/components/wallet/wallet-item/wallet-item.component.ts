import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { WalletService } from '../../../services/wallet.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-wallet-item',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
  ],
  templateUrl: './wallet-item.component.html',
  styleUrl: './wallet-item.component.scss'
})
export class WalletItemComponent implements OnInit {

  @Input() exerciseYear: any

  walletService = inject(WalletService)

  displayedColumns: string[] = ['date', 'title', 'name', 'value', 'actions'];
  dataSource: any;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.exerciseYear.data)
  }

  downloadIncentive(id: number) {
    this.walletService.getIncentive(id).subscribe({
      next: (response: any) => {
        saveAs(response.data.file,response.data.number+'.pdf')
      }
    })
  }

  downloadMinisterialOrdinace(id: number) {
    this.walletService.getMinisterialOrdinace(id).subscribe({
      next: (response: any) => {
        saveAs(response.data.file,response.data.number+'.pdf')
      }
    })
  }



}
