import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RateByDate } from '../models/rate-by-date';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styles: []
})
export class RatesComponent implements OnInit {
  private urlApi: string = 'https://api.exchangeratesapi.io/latest';
  private ratesByDataApi = 'https://api-base.herokuapp.com/api/pub/rates';
  public ratesByDate: RateByDate[] = null;

  public currentEuroRates: any = null;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getCurrentEuroRates();
  }

  private getCurrentEuroRates() {
    const currencies = 'USD,GBP,CHF,JPY';
    const url = `${this.urlApi}?symbols=${currencies}`;
    this.httpClient.get(url).subscribe(apiData => (this.currentEuroRates = apiData));
  }
  public getRatesByDate() {
    this.httpClient
    .get<RateByDate[]>(this.ratesByDataApi)
    .subscribe(apiResult => (this.ratesByDate = apiResult))
  }

  public postRatesByDate() {
    const ratesByDate: RateByDate[] = this.transformExchangeRates();
    ratesByDate.forEach(rate =>
      this.httpClient.post<RateByDate>(this.ratesByDataApi, rate).subscribe()
    )
  }

  public deleteRatesByDate() {
    this.httpClient.delete(this.ratesByDataApi).subscribe()
  }

  private transformExchangeRates(): RateByDate[] {
    const currentDate = this.currentEuroRates.date;
    const currentRates = this.currentEuroRates.rates;
    const ratesByDate = Object.keys(currentRates).map((keyRate: string) => ({
      date: currentDate,
      currency: keyRate,
      euros: currentRates[keyRate]
    }))
    return ratesByDate;
  }

}
