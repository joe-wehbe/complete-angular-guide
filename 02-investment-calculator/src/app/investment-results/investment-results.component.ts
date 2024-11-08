import { Component, computed } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  constructor(private investmentService: InvestmentService) {}

  // get results() {
  //   return this.investmentService.resultData;
  // }

  // Same as commented code above, but makes the signal read only
  results = computed(() => this.investmentService.resultData())

  // Same as commented code above (alternative to computed)
  // results = this.investmentService.resultData.asReadonly();
}