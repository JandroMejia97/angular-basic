import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, share, tap } from 'rxjs/operators';

import { ExchangeRates } from '../models/exchange-rates';
import { RateByDate } from '../models/rate-by-date';

@Component({
  selector: 'app-observates',
  templateUrl: './observates.component.html',
  styles: []
})
export class ObservatesComponent implements OnInit {

  private ratesApi = 'https://api.exchangeratesapi.io/latest';
  public currentEuroRate$: Observable<ExchangeRates> = null;
  public ratesByDate$: Observable<RateByDate[]> = null;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    //this.getCurrentEuroRates();
    this.getEuroRatesPlus();
  }

  private getCurrentEuroRates() {
    const currencies = 'USD,GBP,CHF,JPY';
    const url = `${this.ratesApi}?symbols=${currencies}`
    this.currentEuroRate$ = this.httpClient.get<ExchangeRates>(url).pipe(share());
    this.ratesByDate$ = this.currentEuroRate$.pipe(map(this.transformData))
  }

  private transformData(exchangeRates: ExchangeRates): RateByDate[] {
    const currentDate = exchangeRates.date;
    const currentRates = exchangeRates.rates;
    const ratesByDate = Object.keys(currentRates).map((keyRate: string) => ({
      date: currentDate,
      currency: keyRate,
      euros: currentRates[keyRate]
    }))
    return ratesByDate;
  }

  private getEuroRatesPlus() {
    const currencies = 'USD,GBP,CHF,JPY';
    const url = `${this.ratesApi}?symbols=${currencies}`;
    this.currentEuroRate$ = this.httpClient.get<ExchangeRates>(url)
        .pipe(share());
    this.ratesByDate$ = this.currentEuroRate$
        .pipe(
          tap(d => console.log(d)),
          map(this.transformData),
          tap(t => console.log(t))
        );
  }

}
